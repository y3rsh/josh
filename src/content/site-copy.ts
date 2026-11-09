export const hero = {
  eyebrow: 'Software Engineering · Lead SDET & Test Architect · Systems Integration',
  headline: 'I build software and make sure it works — from the first design through production.',
  lede: '15+ years in software. I start with the people using a product, their workflows, and the business behind it. At Opentrons, I build cloud applications, AI tooling, and robot software. I’m especially drawn to work where AI meets the physical world, with hands-on implementation and direct customer collaboration. I bring deep test architecture to making those systems work from design through production.',
  resumeLabel: 'Download resume (PDF)',
} as const;

export const facets = {
  title: 'What I bring',
  intro:
    'I connect product purpose, people, and engineering. Understanding the business and the people using the software shapes what I build, how I test it, and how I get it into use.',
  items: [
    {
      id: 'product-purpose',
      heading: 'Product & business understanding',
      body: 'I work to understand the whole product: its primary users, their workflows, the business objectives behind it, and the job the software needs to do. I use that context to question assumptions, clarify requirements, and make engineering tradeoffs that support the intended outcome.',
    },
    {
      id: 'stakeholders',
      heading: 'Customer collaboration & implementation',
      body: 'My consulting background shapes how I work: understand the workflow, clarify constraints, and stay hands-on through implementation and troubleshooting. I’m eager to work directly with customer teams, become a technical expert in the product they rely on, and connect what happens in the field with the hardware and software teams building it.',
    },
    {
      id: 'test-architecture',
      heading: 'Lead SDET & Test Architect',
      body: 'Quality starts before the code is written. I bring testability and failure modes into design, build automation into development, and carry verification through integration, release, and production. I build pytest/Playwright frameworks, visual regression checks with Applitools, and tests that verify packages as external consumers install them. I mentor engineers in testing so we can tell whether the system actually works.',
    },
    {
      id: 'integration',
      heading: 'Applications & integration',
      body: 'Full-stack development, cloud services, and OAuth/OIDC authentication. I connect the pieces, understand how they fail together, and stay involved after the code ships.',
    },
    {
      id: 'robotics',
      heading: 'Robot software & reliability',
      body: 'Python and TypeScript robot-interaction clients, with test architecture across on-robot systems, desktop applications, and HTTP APIs. I build protocol analysis and simulation services, and extend robot diagnostics with serial transcripts and log archives. I work across these boundaries to verify behavior and diagnose failures.',
    },
    {
      id: 'platform',
      heading: 'Platform & production delivery',
      body: 'Build and release pipelines, CI/CD, monitoring, and developer tooling, including OIDC-based npm publishing without long-lived publish tokens. I work hands-on with engineers across teams to diagnose issues and get software into use.',
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
      body: 'Robot software spans on-robot systems, desktop applications, and HTTP APIs. I architect test automation across that stack and built frameworks that shortened release cycles. I own the pipelines that deliver two robot operating systems and the application suite, and built agentic tooling that enables colleagues with less technical experience to run the release process.',
      link: {
        label: 'Public Opentrons contributions',
        url: 'https://github.com/pulls?q=is%3Apr+author%3Ay3rsh+org%3AOpentrons',
      },
    },
    {
      heading: 'AI product delivery & infrastructure',
      body: 'I maintain Opentrons AI v1, including model/API upgrades, evaluations, and retrieval-augmented generation (RAG). I implemented bounded, multi-step LLM tool execution for protocol generation and simulation, and improved retrieval context with version-pinned API docs, curated routing metadata, and CI coverage checks. I provide the infrastructure and application framework using AWS ECS, Amazon Bedrock, and direct model APIs.',
      link: {
        label: 'LLM tool orchestration implementation',
        url: 'https://github.com/Opentrons/opentrons/pull/22474',
      },
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
  title: 'AI that connects to the physical world',
  paragraphs: [
    'I’m especially interested in AI that helps people do work in the physical world. At Opentrons, I implemented bounded LLM tool execution for lab protocol generation and simulation. I maintain Opentrons AI v1, including model and API upgrades, evaluations, retrieval-augmented generation (RAG), and application reliability. That work includes regression tests for chained and parallel tool calls, version-pinned API documentation, curated retrieval context, and CI coverage checks, using AWS ECS, Amazon Bedrock, and direct model APIs.',
    'I built agentic tooling that makes our robot software and operating-system release pipelines accessible to a broader team. It enables colleagues with less technical experience to conduct releases, so the process can be delegated beyond the engineers who maintain the pipelines.',
    'I build reusable agent skills for protocol authoring and verification. My public flex-talk project pairs a typed TypeScript robot SDK with portable agent tools for discovery, hardware inspection, image capture, and protocol execution. I also built a FastAPI service for asynchronous protocol analysis and simulation in version-specific Python environments. Code review, test automation, and production monitoring remain part of how I build and deliver software.',
  ],
} as const;

export const contactSection = {
  title: 'Let’s talk',
  intro:
    'Selectively open to senior, staff, and principal individual-contributor roles, especially customer-facing implementation, forward-deployed, field applications, and solutions engineering where AI, software, and physical systems meet. I’m drawn to working alongside customers: integrating a product into their workflow, troubleshooting across hardware and software, and helping their teams use it well. Based in Lawrence, Kansas; interested in remote work with approximately 15–40% travel.',
} as const;
