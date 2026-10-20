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
    'Software Engineer, Lead SDET, and Test Architect across systems integration, robotics software, full-stack applications, and platform.',
  summary: [
    'Hands-on software engineer, Lead SDET, and Test Architect with 15+ years in software. I build quality in from the start: testability in design, automated verification during development, release checks, and production monitoring. At Opentrons, I build cloud applications, own OAuth/OIDC authentication, develop Python/TypeScript robot-interaction clients, and own release pipelines for two robot operating systems and the application suite. My testing depth shapes how I build, integrate, and troubleshoot systems. Lawrence, Kansas; open to remote roles with approximately 15–40% travel.',
  ],
  targetRoles: [
    'Senior, staff, and principal individual-contributor software engineering',
    'Test architecture, quality engineering, and Lead SDET',
    'Systems integration, platform, and developer infrastructure',
    'Customer-facing implementation and forward deployment',
  ],
  goodFit: [
    'Hands-on architecture and implementation',
    'Shift-left testing: testability in design and verification through production',
    'Cloud applications, identity, and API integration',
    'Robot software delivery and test infrastructure',
    'Cross-team troubleshooting and production monitoring',
  ],
  skills: {
    technicalPractice: ['Architecture', 'Code review', 'Mentoring', 'Cross-team troubleshooting'],
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
    quality: [
      'Lead SDET',
      'Test architecture',
      'Shift-left testing',
      'Testability',
      'Test framework design',
      'API testing',
      'BDD/TDD',
      'UAT automation',
    ],
    observability: ['Datadog'],
    ai: ['Cursor skills and rules', 'AI-assisted feature delivery', 'OpenAI/Amplify integrations'],
  },
  experience: [
    {
      company: 'Opentrons Labworks Inc.',
      title: 'Lead Software Engineer and Build & Release Manager',
      start: '2024-02',
      end: null,
      location: 'Remote / Long Island City, NY (company HQ)',
      highlights: [
        'Added build and release ownership in February 2024 while continuing software development and SDET responsibilities.',
        'Own pipelines for two robot operating systems and the application suite; hands-on on versions, tags, and deployments.',
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
      location: 'Remote / Long Island City, NY (company HQ)',
      highlights: [
        'Architect and operate Protocol Library (https://library.opentrons.com) and Opentrons Accounts.',
        'CI/CD with GitHub Actions and AWS.',
        'Monitoring and incident detection with Datadog.',
        'Release and test frameworks that shortened robot software release cycles.',
        'Test automation architecture across on-robot systems, desktop applications, and HTTP APIs; mentoring engineers in testing.',
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
        'Long-term QA strategy and automation consulting; two tenures, December 2009–November 2012 and July 2013–November 2016.',
        'Frameworks for web, API, ETL, mobile, and desktop.',
        'BDD/TDD with Cucumber, JUnit, TestNG; performance with JMeter and LoadRunner.',
      ],
    },
    {
      company: 'Epiq Systems, Standard Beverage, Target, self-employed',
      title: 'Earlier software, QA, and IT roles',
      start: '2003-05',
      end: '2013-07',
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
    'Uses AI tools daily in production development work, not as a demo.',
    'Writes Cursor skills, project rules, and repeatable workflows that survive model changes.',
    'Shipped Opentrons AI features and TypeScript/Python robot interaction clients.',
  ],
} as const;

export type ResumeFacts = typeof resumeFacts;
