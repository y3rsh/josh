import { resumeFacts } from '../content/resume-facts';
import { aiSection, facets, hero } from '../content/site-copy';
import { site } from '../site';
import { getGitHubProjects } from './github-projects';

function periodLabel(start: string, end: string | null): string {
  return end ? `${start} to ${end}` : `${start} to present`;
}

function lines(...parts: Array<string | undefined>): string {
  return parts.filter(Boolean).join('\n');
}

function section(title: string, body: string): string {
  return `\n## ${title}\n\n${body.trim()}\n`;
}

function bulletList(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

function keyValueList(entries: Record<string, string>): string {
  return Object.entries(entries)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}

export function buildResumeMarkdown(): string {
  const projects = getGitHubProjects();
  const { person } = resumeFacts;

  const contact = keyValueList({
    name: person.name,
    location: person.location,
    email: person.email,
    linkedin: person.linkedin,
    github: person.github,
    website: person.website,
  });

  const experience = resumeFacts.experience
    .map((role) => {
      const header = `### ${role.company} | ${role.title} | ${periodLabel(role.start, role.end)}`;
      const meta = `location: ${role.location}`;
      return lines(header, meta, '', bulletList(role.highlights));
    })
    .join('\n\n');

  const skills = Object.entries(resumeFacts.skills)
    .map(([group, items]) => `### ${group}\n${items.join(', ')}`)
    .join('\n\n');

  const projectBlock = projects
    .map((p) => {
      const desc = p.description ?? 'Open-source tooling';
      return `- ${p.title} (${p.language ?? 'n/a'}): ${desc}. ${p.url}`;
    })
    .join('\n');

  const facetsBlock = facets.items.map((f) => `### ${f.heading}\n${f.body}`).join('\n\n');

  return lines(
    `# ${person.name}`,
    '',
    `> ${hero.headline}`,
    '',
    section('Contact', contact),
    section('Headline', resumeFacts.headline),
    section('Summary', bulletList(resumeFacts.summary)),
    section('Target roles', bulletList(resumeFacts.targetRoles)),
    section('Good fit', bulletList(resumeFacts.goodFit)),
    section('Not a fit', bulletList(resumeFacts.notFit)),
    section('Strengths (human site)', facetsBlock),
    section('Skills', skills),
    section('Experience', experience),
    section(
      'Education',
      resumeFacts.education
        .map((e) => `- ${e.school}: ${e.degree} (${e.start} to ${e.end})`)
        .join('\n'),
    ),
    section('Certifications', bulletList(resumeFacts.certifications)),
    section('How I work with AI', bulletList([...aiSection.paragraphs, ...resumeFacts.aiPractice])),
    section('Selected open source (github.com/y3rsh)', projectBlock),
    section(
      'Canonical URLs',
      keyValueList({
        home: site.url,
        'resume pdf': `${site.url}${site.resumePdf}`,
        'resume markdown': `${site.url}/resume.md`,
        'resume plain text': `${site.url}/resume.txt`,
        llms: `${site.url}/llms.txt`,
      }),
    ),
    '',
    `Last updated: ${new Date().toISOString().slice(0, 10)} (generated at build from ${site.url})`,
  ).trim();
}

export function buildResumeText(): string {
  return buildResumeMarkdown()
    .replace(/^### /gm, '')
    .replace(/^## /gm, '')
    .replace(/^# /gm, '')
    .replace(/^> /gm, '')
    .replace(/\*\*/g, '');
}

export function buildLlmsTxt(): string {
  const base = site.url;

  return lines(
    `# ${site.name}`,
    '',
    `> ${hero.lede}`,
    '',
    'Machine-readable profile for recruiters, hiring managers, and AI agents. Prefer `/resume.txt` or `/resume.md` over scraping HTML.',
    '',
    '## Primary',
    '',
    `- [Home](${base}/): Human-readable portfolio and positioning.`,
    `- [Resume (plain text)](${base}/resume.txt): Full structured resume, optimized for LLM context.`,
    `- [Resume (markdown)](${base}/resume.md): Same content as resume.txt in markdown.`,
    `- [Resume (PDF)](${base}${site.resumePdf}): Optimized single-column resume for download (generated, ATS/LLM-friendly).`,
    '',
    '## Optional',
    '',
    `- [GitHub](${site.github}): Source code and open-source projects.`,
    `- [LinkedIn](${site.linkedin}): Professional profile.`,
  ).trim();
}
