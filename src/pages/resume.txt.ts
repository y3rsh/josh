import type { APIRoute } from 'astro';
import { buildResumeText } from '../lib/resume-export';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(buildResumeText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
