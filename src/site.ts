export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey · AI Software Engineer, Lead SDET & Test Architect',
  description:
    'Building AI applications and tooling. Lead software developer on the Opentrons AI platform, Lead SDET, and Test Architect working across software and physical systems.',
  url: 'https://joshmcvey.com',
  email: 'yersh13@gmail.com',
  github: 'https://github.com/y3rsh',
  linkedin: 'https://www.linkedin.com/in/joshmcvey',
  resumePdf: '/resume.pdf',
} as const;

export type Site = typeof site;
