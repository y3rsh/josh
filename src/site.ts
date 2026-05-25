export const site = {
  name: 'Josh McVey',
  title: 'Josh McVey',
  description: 'Software engineer, builder, and tinkerer.',
  url: 'https://joshmcvey.com',
  email: 'hello@joshmcvey.com',
  github: 'https://github.com/y3rsh',
} as const;

export type Site = typeof site;
