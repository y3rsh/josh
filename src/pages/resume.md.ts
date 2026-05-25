import type { APIRoute } from 'astro';
import { buildResumeMarkdown } from '../lib/resume-export';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(buildResumeMarkdown(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
