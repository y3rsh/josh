#!/usr/bin/env node
/**
 * Fetches public repos for github.com/y3rsh and writes src/data/github-projects.json.
 * Run: pnpm sync:github
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const GITHUB_USER = 'y3rsh';
const OUTPUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/github-projects.json');
const EXCLUDE = new Set(['y3rsh', 'hunter', 'noah', 'income-chart', 'web', 'tag-play']);
const PREFERRED = [
  'flex-talk',
  'ot-uv',
  'ot-analyze',
  'protocol-parameters',
  'amplify-example',
  'josh',
  'ot-analyze-test',
  'minimal-opentrons',
  'opentrons-parameters',
];
const MIN_COUNT = 4;
const MAX_COUNT = 6;

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'joshmcvey-site-sync',
};

async function fetchRepos() {
  const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  }
  return /** @type {Array<Record<string, unknown>>} */ (await res.json());
}

function pickProjects(repos) {
  const eligible = repos
    .filter((r) => !r.fork && !r.archived && !EXCLUDE.has(r.name))
    .map((r) => ({
      name: r.name,
      title: r.name,
      description: r.description?.trim() || null,
      language: r.language ?? null,
      url: r.html_url,
      pushedAt: r.pushed_at,
      hasDescription: Boolean(r.description?.trim()),
    }));

  const byName = new Map(eligible.map((r) => [r.name, r]));
  const selected = [];

  for (const name of PREFERRED) {
    if (selected.length >= MAX_COUNT) break;
    const repo = byName.get(name);
    if (repo) selected.push(repo);
  }

  const ranked = eligible
    .filter((r) => !selected.some((s) => s.name === r.name))
    .sort((a, b) => {
      if (a.hasDescription !== b.hasDescription) return a.hasDescription ? -1 : 1;
      return b.pushedAt.localeCompare(a.pushedAt);
    });

  for (const repo of ranked) {
    if (selected.length >= MAX_COUNT) break;
    selected.push(repo);
  }
  if (selected.length < MIN_COUNT) {
    throw new Error(`Only found ${selected.length} repos; need at least ${MIN_COUNT}`);
  }

  return selected.map(({ name, title, description, language, url }) => ({
    name,
    title,
    description,
    language,
    url,
  }));
}

const repos = await fetchRepos();
const projects = pickProjects(repos);
const payload = {
  syncedAt: new Date().toISOString(),
  githubUser: GITHUB_USER,
  projects,
};

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote ${projects.length} projects to ${OUTPUT}`);
