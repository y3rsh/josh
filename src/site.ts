export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey · Lead SDET & Test Architect, Build & Release Manager, Full Stack, Platform',
  description:
    'Lead SDET and test architect. I improve processes by leveraging relationships and understanding the motivations and incentives underneath them — at Opentrons and on consulting engagements.',
  url: 'https://joshmcvey.com',
  email: 'yersh13@gmail.com',
  github: 'https://github.com/y3rsh',
  linkedin: 'https://www.linkedin.com/in/joshmcvey',
  resumePdf: '/resume.pdf',
} as const;

export type Site = typeof site;
