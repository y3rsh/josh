#!/usr/bin/env node
/**
 * Creates Cloudflare Page Rules to canonicalize alternate domains to joshmcvey.com.
 * Requires CLOUDFLARE_API_TOKEN in the environment (or .env loaded by caller).
 *
 * Run: pnpm setup:redirects
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const CANONICAL = 'https://joshmcvey.com';

const zoneRedirects = [
  {
    zone: 'joshmcvey.com',
    rules: [{ pattern: '*www.joshmcvey.com/*', url: `${CANONICAL}/$1` }],
  },
  {
    zone: 'joshmcvey.net',
    rules: [
      { pattern: '*joshmcvey.net/*', url: `${CANONICAL}/$1` },
      { pattern: '*www.joshmcvey.net/*', url: `${CANONICAL}/$1` },
    ],
  },
  {
    zone: 'y3rsh.com',
    rules: [
      { pattern: '*y3rsh.com/*', url: `${CANONICAL}/$1` },
      { pattern: '*www.y3rsh.com/*', url: `${CANONICAL}/$1` },
    ],
  },
  {
    zone: 'y3rsh.net',
    rules: [
      { pattern: '*y3rsh.net/*', url: `${CANONICAL}/$1` },
      { pattern: '*www.y3rsh.net/*', url: `${CANONICAL}/$1` },
    ],
  },
];

function loadToken() {
  if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN;
  try {
    const envPath = join(dirname(fileURLToPath(import.meta.url)), '../.env');
    const line = readFileSync(envPath, 'utf8')
      .split('\n')
      .find((l) => l.startsWith('CLOUDFLARE_API_TOKEN='));
    if (line) return line.slice('CLOUDFLARE_API_TOKEN='.length).trim();
  } catch {
    // no .env
  }
  throw new Error('Set CLOUDFLARE_API_TOKEN or add it to .env');
}

async function api(token, path, options = {}) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(`${path}: ${JSON.stringify(data.errors)}`);
  }
  return data.result;
}

async function getZoneId(token, name) {
  const zones = await api(token, `/zones?name=${name}`);
  const zone = zones[0];
  if (!zone) throw new Error(`Zone not found: ${name}`);
  return zone.id;
}

async function listPageRules(token, zoneId) {
  return api(token, `/zones/${zoneId}/pagerules`);
}

async function createPageRule(token, zoneId, pattern, url, priority) {
  return api(token, `/zones/${zoneId}/pagerules`, {
    method: 'POST',
    body: JSON.stringify({
      targets: [
        {
          target: 'url',
          constraint: { operator: 'matches', value: pattern },
        },
      ],
      actions: [
        {
          id: 'forwarding_url',
          value: { url, status_code: 301 },
        },
      ],
      priority,
      status: 'active',
    }),
  });
}

const token = loadToken();

for (const { zone, rules } of zoneRedirects) {
  const zoneId = await getZoneId(token, zone);
  const existing = await listPageRules(token, zoneId);
  const existingUrls = existing
    .flatMap((r) => r.actions)
    .filter((a) => a.id === 'forwarding_url')
    .map((a) => a.value?.url);

  let priority = 1;
  for (const { pattern, url } of rules) {
    if (existingUrls.includes(url)) {
      console.log(`skip ${zone} ${pattern} (rule exists)`);
      priority += 1;
      continue;
    }
    await createPageRule(token, zoneId, pattern, url, priority);
    console.log(`created ${zone} ${pattern} -> ${url}`);
    priority += 1;
  }
}

console.log('Done.');
