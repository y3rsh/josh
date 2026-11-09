export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey · Software Engineer, Lead SDET & Test Architect',
  description:
    'Software engineer, Lead SDET, and Test Architect at Opentrons. Interested in AI for physical systems, hands-on implementation, and customer-facing engineering.',
  url: 'https://joshmcvey.com',
  email: 'yersh13@gmail.com',
  github: 'https://github.com/y3rsh',
  linkedin: 'https://www.linkedin.com/in/joshmcvey',
  resumePdf: '/resume.pdf',
} as const;

export type Site = typeof site;
