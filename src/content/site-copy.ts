export const hero = {
  eyebrow:
    'Lead SDET & Test Architect · Build & Release Manager · Full Stack · Platform · AI-augmented delivery',
  headline:
    '20+ years turning operations, QA, and automation into software that ships on schedule.',
  lede: 'I ship quality into software the whole way through — from the architecture room to the release pipeline.',
} as const;

export const facets = {
  title: "What I'm good at",
  intro:
    'I improve the SDLC and quality through process and automation — reading the incentives, business objectives, technical debt, people, capital, and relationships in play.',
  items: [
    {
      id: 'sdet-platform',
      heading: 'Lead SDET & Test Architect, CI/CD automation, and platform',
      body: 'Full-stack across Protocol Library, Opentrons Accounts, and OAuth/OIDC; owner of the build and release pipelines that ship the robot software suite. I architect and lead test automation across the full robot stack — on-robot systems, desktop apps, and the HTTP API — and mentor engineers in testing. Quality is built in, automated as much as possible, and starts before the code is written. Quality is not a phase.',
    },
    {
      id: 'process',
      heading: 'Process, incentives, and the big picture',
      body: 'Connecting to the big picture — business objectives, product priorities, and the timelines that drive market fit — is what lets me help teams decide which process improvements and tech debt work actually matter, then drive that work deep into the SDLC. I improve processes by leveraging relationships and understanding the motivations and incentives underneath them. Comfortable in the architecture room and in standup the same week.',
    },
    {
      id: 'build-release',
      heading: 'Build & Release and Developer Experience',
      body: 'I manage Opentrons Build & Release as a leader and hands on. Release cadence and the small details that keep robot software and cloud apps shipping new features on schedule.',
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
        'Lead Build & Release for two robot OSes and the full Opentrons application suite while running releases alongside the team. Full-stack on Opentrons AI; own auth across web products.',
      links: [{ label: 'Protocol Library', url: 'https://library.opentrons.com' }],
    },
    {
      company: 'Opentrons Labworks',
      title: 'Senior Developer and SDET',
      period: 'Jun 2021 to present',
      accent: '#3b82f6',
      summary:
        'Protocol Library, Opentrons Accounts, CI/CD on GitHub Actions and AWS, Datadog. Release and test frameworks that shortened robot software release cycles.',
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
      period: '2009 to 2016',
      accent: '#a855f7',
      summary:
        'Hands-on QA strategy and automation consulting on long-term engagements. Built frameworks for web, API, ETL, mobile, and desktop; BDD/TDD with Cucumber, JUnit, TestNG; performance work with JMeter and LoadRunner.',
    },
    {
      company: 'Earlier roles',
      title: 'Epiq Systems, Standard Beverage, Target, independent IT work',
      period: '2003 to 2012',
      accent: '#64748b',
      summary:
        'Automation in C# and Selenium, QA leadership for enterprise web and ETL, retail operations leadership, and nonprofit web and AV implementation. 20+ years from QA through delivery management.',
    },
  ],
};

export const aiSection = {
  title: 'How I work with AI',
  paragraphs: [
    'I have been energized by learning and using AI tools. Staying on top of the rapid changes is a challenge — I keep up by reading and listening to podcasts. Faster iteration demands sharper taste, and I iterate fast on real work.',
    'In practice that means Cursor, Claude Code, Warp, skills, rules, and repeatable workflows that stay useful as the models change. It shows up in shipping: Opentrons AI features, robot interaction clients in TypeScript and Python, and the glue scripts that keep releases and tests honest. I treat AI as infrastructure for thinking and execution, then harden what works into production code.',
  ],
} as const;

export const contactSection = {
  title: 'Contact',
  intro: 'Open to Staff SDET, platform, Build & Release, and consulting conversations.',
} as const;
