import cache from '../data/opentrons-prs.json';

export type PullRequest = {
  title: string;
  url: string;
  repo: string;
  number: number;
  state: 'merged' | 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
};

export type OpentronsPrsCache = {
  syncedAt: string;
  author: string;
  org: string;
  summary: { total: number; repoCount: number; merged: number; open: number };
  recent: PullRequest[];
};

export function getOpentronsPrs(): OpentronsPrsCache {
  return cache as OpentronsPrsCache;
}
