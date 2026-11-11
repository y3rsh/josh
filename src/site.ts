export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey · Software Engineer, Lead SDET & Test Architect',
  description:
    'Software engineer, Lead SDET, and Test Architect at Opentrons: AI applications, robot software and hardware-in-the-loop testing, and build and release.',
  url: 'https://joshmcvey.com',
  email: 'yersh13@gmail.com',
  github: 'https://github.com/y3rsh',
  linkedin: 'https://www.linkedin.com/in/joshmcvey',
  resumePdf: '/resume.pdf',
} as const;

export type Site = typeof site;
