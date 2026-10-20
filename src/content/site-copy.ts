export const hero = {
  eyebrow: 'Software Engineering · Lead SDET & Test Architect · Systems Integration',
  headline: 'I build software and make sure it works — from the first design through production.',
  lede: '15+ years in software. My strength is combining hands-on engineering with deep test architecture: asking how we will know something works before we build it, then carrying that through code, integration, release, and production. I bring that approach to everything I build, from cloud applications to robot software and release pipelines.',
  resumeLabel: 'Download resume (PDF)',
} as const;

export const facets = {
  title: 'What I bring',
  intro:
    'I bring a testing mindset to architecture and implementation. I look for failure modes early, build useful feedback into development, and follow problems across application code, APIs, infrastructure, and releases.',
  items: [
    {
      id: 'test-architecture',
      heading: 'Lead SDET & Test Architect',
      body: 'Quality starts before the code is written. I bring testability and failure modes into design, build automation into development, and carry verification through integration, release, and production. I architect test frameworks and mentor engineers in testing so we can tell whether the system actually works.',
    },
    {
      id: 'integration',
      heading: 'Applications & integration',
      body: 'Full-stack development, cloud services, and OAuth/OIDC authentication. I connect the pieces, understand how they fail together, and stay involved after the code ships.',
    },
    {
      id: 'robotics',
      heading: 'Robot software & reliability',
      body: 'Python and TypeScript robot-interaction clients, with test architecture across on-robot systems, desktop applications, and HTTP APIs. I work across these boundaries to verify behavior and diagnose failures.',
    },
    {
      id: 'platform',
      heading: 'Platform & production delivery',
      body: 'Build and release pipelines, CI/CD, monitoring, and developer tooling. I work hands-on with engineers across teams to diagnose issues and get software into use.',
    },
  ],
} as const;

export const selectedWork = {
  title: 'Selected engineering work',
  intro: 'Examples from my work at Opentrons, spanning lab robotics and cloud applications.',
  items: [
    {
      heading: 'Cloud applications & identity',
      body: 'Protocol Library and Opentrons Accounts need application ownership from architecture through operation. I build and operate these services and own OAuth/OIDC authentication and authorization across web products.',
      link: { label: 'Explore Protocol Library', url: 'https://library.opentrons.com' },
    },
    {
      heading: 'Test architecture & robot software delivery',
      body: 'Robot software spans on-robot systems, desktop applications, and HTTP APIs. I architect test automation across that stack and built frameworks that shortened release cycles. I also own the pipelines that deliver two robot operating systems and the application suite, connecting verification with the software we ship.',
      link: {
        label: 'Public Opentrons contributions',
        url: 'https://github.com/pulls?q=is%3Apr+author%3Ay3rsh+org%3AOpentrons',
      },
    },
    {
      heading: 'AI features & robot interaction',
      body: 'I contribute full-stack features to Opentrons AI and developed Python and TypeScript robot-interaction clients. This work brings AI feature development together with the software interfaces used to interact with robots.',
      link: null,
    },
  ],
} as const;

export type ExperienceRole = {
  company: string;
  title: string;
  period: string;
  accent: string;
  summary: string;
  links?: { label: string; url: string }[];
};

export const experience: { title: string; roles: ExperienceRole[] } = {
  title: 'Experience',
  roles: [
    {
      company: 'Opentrons Labworks',
      title: 'Lead Software Engineer and Build & Release Manager',
      period: 'Feb 2024 to present',
      accent: '#6366f1',
      summary:
        'Added build and release ownership in February 2024 while continuing the engineering role below. Hands-on pipelines and releases for two robot operating systems and the application suite; full-stack Opentrons AI features and OAuth/OIDC authentication.',
      links: [{ label: 'Protocol Library', url: 'https://library.opentrons.com' }],
    },
    {
      company: 'Opentrons Labworks',
      title: 'Senior Developer and SDET',
      period: 'Jun 2021 to present',
      accent: '#3b82f6',
      summary:
        'Architect test automation across on-robot systems, desktop applications, and HTTP APIs; mentor engineers in testing. Build and operate Protocol Library and Opentrons Accounts, with GitHub Actions/AWS CI/CD and Datadog monitoring. Test frameworks shortened robot software release cycles.',
      links: [{ label: 'Protocol Library', url: 'https://library.opentrons.com' }],
    },
    {
      company: 'TEKsystems',
      title: 'Test Automation Architect',
      period: 'Aug 2019 to Jun 2021',
      accent: '#f59e0b',
      summary:
        'Practice architect for continuous testing. Led pytest automation for a gaming engine team of ten and browser-based UAT in Azure DevOps for energy-sector .com work with a team of five.',
    },
    {
      company: 'Rackspace',
      title: 'Software Developer, Test III',
      period: 'Nov 2016 to Aug 2019',
      accent: '#ef4444',
      summary:
        'Lead SDET on a dedicated-device web portal across customer-facing apps, ETL, and APIs. Python, Java, TypeScript, Jenkins, OpenShift, Docker, GraphQL, Elasticsearch.',
    },
    {
      company: 'Xpanxion',
      title: 'Test Architect / Lead Automation Engineer',
      period: '2009–2012 and 2013–2016',
      accent: '#a855f7',
      summary:
        'Hands-on QA strategy and automation consulting on long-term engagements. Built frameworks for web, API, ETL, mobile, and desktop; BDD/TDD with Cucumber, JUnit, TestNG; performance work with JMeter and LoadRunner.',
    },
    {
      company: 'Earlier roles',
      title: 'Epiq Systems, Standard Beverage, Target, independent IT work',
      period: '2003 to 2013',
      accent: '#64748b',
      summary:
        'Automation in C# and Selenium, QA leadership for enterprise web and ETL, retail operations leadership, and nonprofit web and AV implementation. 20+ years across engineering, consulting, and operations.',
    },
  ],
};

export const aiSection = {
  title: 'AI in engineering practice',
  paragraphs: [
    'I use AI tools in day-to-day development and build reusable skills, rules, and workflows around them. My work includes shipped Opentrons AI features and Python/TypeScript robot-interaction clients. Code review, test automation, and production monitoring remain part of the engineering work.',
  ],
} as const;

export const contactSection = {
  title: 'Let’s talk',
  intro:
    'Selectively open to senior, staff, and principal individual-contributor roles in software, test architecture, systems integration, platform, and customer-facing engineering. Based in Lawrence, Kansas; interested in remote work with approximately 15–40% travel.',
} as const;
