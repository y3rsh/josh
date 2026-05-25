import cache from '../data/github-projects.json';

export type GitHubProject = {
  name: string;
  title: string;
  description: string | null;
  language: string | null;
  url: string;
};

export type GitHubProjectsCache = {
  syncedAt: string;
  githubUser: string;
  projects: GitHubProject[];
};

export function getGitHubProjects(): GitHubProject[] {
  return (cache as GitHubProjectsCache).projects;
}
