export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey · Software Engineer, Lead SDET & Test Architect',
  description:
    'Software engineer, Lead SDET, and Test Architect. Quality built in from design through production across cloud applications, robotics software, and platform. Lawrence, Kansas; remote and travel.',
  url: 'https://joshmcvey.com',
  email: 'yersh13@gmail.com',
  github: 'https://github.com/y3rsh',
  linkedin: 'https://www.linkedin.com/in/joshmcvey',
  resumePdf: '/resume.pdf',
} as const;

export type Site = typeof site;
