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
    'Build & Release manager, staff-level SDET/platform engineer, and consulting operator for process repair and operational AI adoption.',
  summary: [
    'Ships end to end at Opentrons: two robot operating systems, full application suite, Opentrons AI, Protocol Library, and authentication/authorization across all web products.',
    'Manages Build & Release while still cutting every version, tag, and deployment alongside the team.',
    'Comfortable in the same week running standup, a CTO architecture conversation, shipping on Opentrons AI, mentoring API testing, and cutting a release.',
    'Daily AI tool user who authors Cursor skills, project rules, and workflows for real development practice.',
    'Twenty-plus years across QA strategy, test automation architecture, SDET, platform engineering, and software delivery management.',
  ],
  targetRoles: [
    'Independent consulting and trusted-advisor engagements',
    'Build & Release management and Developer Experience',
    'Staff-level SDET and platform engineering',
  ],
  goodFit: [
    'Release pipeline repair and ownership',
    'Brittle or missing test infrastructure',
    'Making AI-assisted development operational for a team',
    'One person who does architectural thinking and implementation',
    'Process repair, data organization, relationship building, creative problem framing',
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
    'Uses AI tools daily in production development work.',
    'Writes Cursor skills, project rules, and repeatable workflows.',
    'Shipped Opentrons AI features and TypeScript/Python robot interaction clients.',
  ],
} as const;

export type ResumeFacts = typeof resumeFacts;
