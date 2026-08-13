#!/usr/bin/env node
/**
 * Fetches every PUBLIC pull request authored by y3rsh in the Opentrons org and
 * writes src/data/opentrons-prs.json (summary stats + the most recent PRs).
 * Private repos (e.g. Protocol Library, the new Opentrons AI) are not returned
 * by the GitHub search API, so this list is public contributions only.
 *
 * Uses GITHUB_TOKEN when present (higher rate limits, e.g. in CI); works
 * unauthenticated locally. On any fetch failure it leaves the existing JSON
 * untouched and exits unsuccessfully so CI reports that the refresh failed.
 *
 * Run: pnpm sync:prs
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const AUTHOR = 'y3rsh';
const ORG = 'Opentrons';
const RECENT_COUNT = 10;
const OUTPUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/opentrons-prs.json');

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'joshmcvey-site-sync',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function fetchAllPrs() {
  // `org:` scopes results to repositories owned by Opentrons; `author:` means
  // PRs Josh opened (not PRs where he was only assigned or requested to review).
  const query = `is:pr author:${AUTHOR} org:${ORG}`;
  const all = [];
  let page = 1;
  // The Search API caps results at 1,000 and pages at 100 items. This query is
  // currently well below that limit, but fail rather than publish partial data.
  while (page <= 10) {
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=100&page=${page}&sort=created&order=desc`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`GitHub search ${res.status}: ${await res.text()}`);
    const body = await res.json();
    if (body.incomplete_results) {
      throw new Error('GitHub search returned incomplete results');
    }
    if (body.total_count > 1000) {
      throw new Error(
        `GitHub search found ${body.total_count} PRs, exceeding its 1,000-result limit`,
      );
    }
    all.push(...body.items);
    if (body.items.length < 100 || all.length >= body.total_count) break;
    page += 1;
  }
  return all;
}

function repoOf(item) {
  // repository_url = https://api.github.com/repos/Opentrons/<repo>
  return item.repository_url.split('/').pop();
}

function toRecord(item) {
  const merged = Boolean(item.pull_request?.merged_at);
  return {
    title: item.title,
    url: item.html_url,
    repo: repoOf(item),
    number: item.number,
    state: merged ? 'merged' : item.state, // merged | open | closed
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  };
}

try {
  const items = await fetchAllPrs();
  const records = items.map(toRecord);
  const repos = new Set(records.map((r) => r.repo));
  const recent = [...records]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, RECENT_COUNT);

  const payload = {
    syncedAt: new Date().toISOString(),
    author: AUTHOR,
    org: ORG,
    summary: {
      total: records.length,
      repoCount: repos.size,
      merged: records.filter((r) => r.state === 'merged').length,
      open: records.filter((r) => r.state === 'open').length,
    },
    recent,
  };

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(
    `Wrote ${recent.length} recent of ${payload.summary.total} PRs across ${payload.summary.repoCount} repos to ${OUTPUT}`,
  );
} catch (err) {
  console.error(`sync:prs failed: ${err.message}`);
  if (existsSync(OUTPUT)) {
    console.error('Keeping existing opentrons-prs.json (not overwriting).');
  }
  process.exit(1);
}
