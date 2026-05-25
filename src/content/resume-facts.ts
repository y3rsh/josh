import { site } from '../site';

/** Structured resume facts for machine-readable exports (resume.txt, llms.txt). */
export const resumeFacts = {
  person: {
    name: site.name,
    location: 'Lawrence, Kansas, United States',
    email: site.email,
    linkedin: site.linkedin,
    github: site.github,
    website: site.url,
  },
  headline:
    'Staff SDET, Build & Release manager, and process operator. Twenty years across QA strategy, test automation architecture, SDET, platform engineering, and software delivery.',
  summary: [
    'Staff SDET at Opentrons. Not the deepest expert in any single stack — the person who improves how the work gets done between idea and production.',
    'Improves CI/CD, release cadence, test strategy, and cross-team coordination by leveraging relationships and understanding the motivations and incentives underneath them.',
    'Manages Build & Release for two robot OSes and the full Opentrons application suite while still cutting versions, tags, and deployments alongside the team.',
    'Owns Protocol Library, Opentrons Accounts, and authentication/authorization across web products; full-stack contributor on Opentrons AI.',
    'Early adopter of AI tools — daily user, writes Cursor skills, project rules, and workflows that make AI operational for the team.',
  ],
  targetRoles: [
    'Staff SDET and platform engineering',
    'Build & Release management and Developer Experience',
    'Consulting and trusted-advisor engagements for process repair',
  ],
  goodFit: [
    'Process improvement across release pipelines, test strategy, and cross-team handoffs',
    'Brittle or missing test infrastructure',
    'Making AI-assisted development operational for a team',
    'Hard problems where relationships, motivations, and incentives are part of the solution',
    'One person who does architectural thinking and implementation',
  ],
  notFit: [
    'Raw scaling problems on massive distributed systems as the primary mandate',
  ],
  skills: {
    leadership: ['Build & Release management', 'Team standups', 'Cross-team release coordination'],
    delivery: ['CI/CD', 'GitHub Actions', 'AWS', 'Release tagging and deployment'],
    engineering: [
      'Python',
      'TypeScript',
      'Java',
      'pytest',
      'OAuth/OIDC',
      'GraphQL',
      'Docker',
      'Kubernetes/OpenShift',
      'Helm',
    ],
    quality: ['SDET', 'Test automation architecture', 'API testing', 'BDD/TDD', 'UAT automation'],
    observability: ['Datadog'],
    ai: ['Cursor skills and rules', 'AI-assisted feature delivery', 'OpenAI/Amplify integrations'],
  },
  experience: [
    {
      company: 'Opentrons Labworks Inc.',
      title: 'Lead Software Engineer and Build & Release Manager',
      start: '2024-02',
      end: null,
      location: 'Remote / Queens, NY (company HQ)',
      highlights: [
        'Lead Build & Release for two robot OSes and the full Opentrons application suite.',
        'Still hands-on on versions, tags, and deployments with the team.',
        'Improve delivery efficiency, test automation, and cross-team release coordination.',
        'Full-stack on Opentrons AI and Protocol Library.',
        'Own authentication and authorization across all web products.',
      ],
    },
    {
      company: 'Opentrons Labworks Inc.',
      title: 'Senior Developer and SDET',
      start: '2021-06',
      end: null,
      location: 'Remote / Queens, NY (company HQ)',
      highlights: [
        'Architect and operate Protocol Library (https://library.opentrons.com) and Opentrons Accounts.',
        'CI/CD with GitHub Actions and AWS.',
        'Monitoring and incident detection with Datadog.',
        'Release and test frameworks that shortened robot software release cycles.',
      ],
    },
    {
      company: 'TEKsystems',
      title: 'Test Automation Architect (Practice Architect, Continuous Testing)',
      start: '2019-08',
      end: '2021-06',
      location: 'Remote',
      highlights: [
        'Led pytest automation for a gaming engine team of 10.',
        'Led browser UAT in Azure DevOps for energy-sector .com testing with a team of 5.',
      ],
    },
    {
      company: 'Rackspace',
      title: 'Software Developer, Test III',
      start: '2016-11',
      end: '2019-08',
      location: 'Remote',
      highlights: [
        'Lead SDET on dedicated-device web portal.',
        'Customer-facing web apps, ETL, and APIs.',
        'Python, Java, TypeScript, Jenkins, OpenShift, Docker, GraphQL, Elasticsearch.',
      ],
    },
    {
      company: 'Xpanxion',
      title: 'Test Architect / Lead Automation Engineer',
      start: '2009-12',
      end: '2016-11',
      location: 'Remote',
      highlights: [
        'Long-term QA strategy and automation consulting.',
        'Frameworks for web, API, ETL, mobile, and desktop.',
        'BDD/TDD with Cucumber, JUnit, TestNG; performance with JMeter and LoadRunner.',
      ],
    },
    {
      company: 'Epiq Systems, Standard Beverage, Target, self-employed',
      title: 'Earlier software, QA, and IT roles',
      start: '2003-05',
      end: '2012-11',
      location: 'Kansas / Nebraska / remote',
      highlights: [
        'C# and Selenium automation, QA leadership for enterprise web and ETL.',
        'Retail operations leadership at Target.',
        'Nonprofit web, AV, and database work as independent contractor.',
      ],
    },
  ],
  education: [
    {
      school: 'Kansas State University',
      degree: 'BS, Physical Sciences',
      start: '1996',
      end: '2003',
    },
  ],
  certifications: ['CTFL (ISTQB Certified Tester Foundation Level)'],
  aiPractice: [
    'Early adopter — picks up new AI tools the day they ship and folds them into real development work.',
    'Uses AI tools daily in production development work, not as a demo.',
    'Writes Cursor skills, project rules, and repeatable workflows that survive model changes.',
    'Shipped Opentrons AI features and TypeScript/Python robot interaction clients.',
  ],
} as const;

export type ResumeFacts = typeof resumeFacts;
