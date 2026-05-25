export const hero = {
  eyebrow: 'Build & Release · Platform · Consulting',
  headline: 'I fix release pipelines, test infrastructure, and AI workflows that teams actually use.',
  lede: 'I ship end to end at Opentrons: two robot operating systems, the full application suite, Opentrons AI, and auth across every web product. I also take consulting and staff-level engagements where the work is process repair, creative framing, and making AI part of daily engineering instead of a slide deck.',
} as const;

export const facets = {
  title: 'What I\'m good at',
  intro:
    'Recruiters often slot me into one of three buckets. In practice it is one job: I show up when something is broken between idea and production, and I stay until the fix is operational.',
  items: [
    {
      id: 'consulting',
      heading: 'Consulting and trusted-advisor work',
      body: 'Long engagements where the deliverable is clarity: QA strategy, automation architecture, release practice, and the politics of getting teams to adopt it. I am comfortable in the architecture room and in the standup the same week.',
    },
    {
      id: 'build-release',
      heading: 'Build & Release and Developer Experience',
      body: 'I manage Opentrons Build & Release and still cut versions, tags, and deployments myself. I care about CI/CD, release cadence, and the details that keep robot software and cloud apps shipping on schedule.',
    },
    {
      id: 'sdet-platform',
      heading: 'Staff SDET and platform engineering',
      body: 'Protocol Library, Opentrons Accounts, OAuth/OIDC design, pytest and API testing mentorship, Datadog and GitHub Actions in anger. I own cloud services and the test automation that protects them.',
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
    'I use AI tools every day in real development work, not as a demo. I write Cursor skills, project rules, and repeatable workflows so the tooling stays useful as models change.',
    'That shows up in shipping: Opentrons AI features, robot interaction clients in TypeScript and Python, and the glue scripts that keep releases and tests honest. I treat AI as infrastructure for thinking and execution, then harden what works into something the team can run without me in the loop.',
  ],
} as const;

export const projectsSection = {
  title: 'Selected projects',
  intro: 'Open-source tooling around Opentrons, release automation, and this site. Pulled from my public GitHub.',
} as const;

export const contactSection = {
  title: 'Contact',
  intro: 'Open to consulting, staff-level platform/SDET, and Build & Release leadership conversations.',
} as const;
