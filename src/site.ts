export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey · Build & Release, Platform, Consulting',
  description:
    'I fix release pipelines, test infrastructure, and AI workflows for teams that need process repair and hands-on delivery leadership.',
  url: 'https://joshmcvey.com',
  email: 'yersh13@gmail.com',
  github: 'https://github.com/y3rsh',
  linkedin: 'https://www.linkedin.com/in/joshmcvey',
  resumePdf: '/resume.pdf',
} as const;

export type Site = typeof site;
