export const hero = {
  eyebrow: 'Staff SDET · Process · AI-augmented delivery',
  headline:
    'Staff SDET. I improve processes by leveraging relationships and understanding the motivations and incentives underneath them.',
  lede: "At Opentrons I'm not the deepest expert in any single stack — I'm the person who improves how the work gets done between idea and production. Twenty years across QA strategy, test automation architecture, SDET, platform, and Build & Release. I like hard process problems, the relationships it takes to solve them, and using new AI tools creatively the day they ship.",
} as const;

export const facets = {
  title: "What I'm good at",
  intro:
    "I like hard process problems. The technical piece is rarely the whole problem — usually there are people, incentives, and relationships in the way too. The work has a shape: find where the process isn't working, understand why the people involved are doing what they're doing, and improve it. Twenty years of that gives you a feel for where to start.",
  items: [
    {
      id: 'sdet-platform',
      heading: 'Staff SDET and platform',
      body: 'Full-stack on Protocol Library, Opentrons Accounts, and OAuth/OIDC, and owner of the build and release pipelines that ship the robot software suite. I lead test automation across the full robot stack — on-robot systems, desktop apps, and the HTTP API — and mentor engineers in testing. Quality is built in, automated as much as possible, and starts before the code is written. Quality is not a phase.',
    },
    {
      id: 'process',
      heading: 'Process improvement',
      body: 'I improve delivery processes — release pipelines, test strategy, cross-team handoffs — by building the relationships and understanding the motivations and incentives underneath them. Comfortable in the architecture room and in standup the same week.',
    },
    {
      id: 'build-release',
      heading: 'Build & Release and Developer Experience',
      body: 'I manage Opentrons Build & Release and still cut versions, tags, and deployments alongside the team. Release cadence and the small details that keep robot software and cloud apps shipping on schedule.',
    },
  ],
} as const;

export const experience = {
  title: 'Experience',
  roles: [
    {
      company: 'Opentrons Labworks',
      title: 'Lead Software Engineer and Build & Release Manager',
      period: 'Feb 2024 to present',
      summary:
        'Lead Build & Release for two robot OSes and the full Opentrons application suite while still doing releases alongside the team. Drive delivery efficiency, test automation, and cross-team release coordination. Full-stack on Opentrons AI and Protocol Library; own authentication and authorization across web products.',
    },
    {
      company: 'Opentrons Labworks',
      title: 'Senior Developer and SDET',
      period: 'Jun 2021 to present',
      summary:
        'Architect and operate core cloud infrastructure: Protocol Library, Opentrons Accounts, CI/CD on GitHub Actions and AWS, and monitoring with Datadog. Built release and testing frameworks that shortened robot software release cycles.',
    },
    {
      company: 'TEKsystems',
      title: 'Test Automation Architect',
      period: 'Aug 2019 to Jun 2021',
      summary:
        'Practice architect for continuous testing. Led pytest automation for a gaming engine team of ten and browser-based UAT in Azure DevOps for energy-sector .com work with a team of five.',
    },
    {
      company: 'Rackspace',
      title: 'Software Developer, Test III',
      period: 'Nov 2016 to Aug 2019',
      summary:
        'Lead SDET on a dedicated-device web portal across customer-facing apps, ETL, and APIs. Python, Java, TypeScript, Jenkins, OpenShift, Docker, GraphQL, Elasticsearch.',
    },
    {
      company: 'Xpanxion',
      title: 'Test Architect / Lead Automation Engineer',
      period: '2009 to 2016',
      summary:
        'Hands-on QA strategy and automation consulting on long-term engagements. Built frameworks for web, API, ETL, mobile, and desktop; BDD/TDD with Cucumber, JUnit, TestNG; performance work with JMeter and LoadRunner.',
    },
    {
      company: 'Earlier roles',
      title: 'Epiq Systems, Standard Beverage, Target, independent IT work',
      period: '2003 to 2012',
      summary:
        'Automation in C# and Selenium, QA leadership for enterprise web and ETL, retail operations leadership, and nonprofit web and AV implementation. Twenty-plus years from QA through delivery management.',
    },
  ],
} as const;

export const aiSection = {
  title: 'How I work with AI',
  paragraphs: [
    'I adore this stuff. I adopt new AI tools the day they ship and find ways to use them creatively in real development work — not as a demo, not as a slide deck.',
    'In practice that means Cursor skills, project rules, and repeatable workflows that stay useful as the models change. It shows up in shipping: Opentrons AI features, robot interaction clients in TypeScript and Python, and the glue scripts that keep releases and tests honest. I treat AI as infrastructure for thinking and execution, then harden what works into something the team can run without me in the loop.',
  ],
} as const;

export const projectsSection = {
  title: 'Selected projects',
  intro:
    'Open-source tooling around Opentrons, release automation, and this site. Pulled from my public GitHub.',
} as const;

export const contactSection = {
  title: 'Contact',
  intro: 'Open to staff SDET, platform, Build & Release, and consulting conversations.',
} as const;
