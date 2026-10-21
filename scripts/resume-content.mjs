// Curated resume; career evidence is archived in docs/resume-source.md.
export const resume = {
  name: 'Josh McVey',
  title: 'Software Engineer · Lead SDET & Test Architect · Systems Integration',
  location: 'Lawrence, KS · Remote',
  links: [
    {
      label: 'joshmcvey.com',
      url: 'https://joshmcvey.com',
    },
    {
      label: 'yersh13@gmail.com',
      url: 'mailto:yersh13@gmail.com',
    },
    {
      label: 'linkedin.com/in/joshmcvey',
      url: 'https://www.linkedin.com/in/joshmcvey',
    },
    {
      label: 'github.com/y3rsh',
      url: 'https://github.com/y3rsh',
    },
  ],
  summary:
    'Hands-on software engineer, Lead SDET, and Test Architect with 15+ years in software. I connect product purpose, primary users, and business objectives to engineering decisions, shared acceptance criteria, and delivery. I work across product and engineering to clarify stakeholder needs and tradeoffs, then carry that context through design, automated verification, release, and production. At Opentrons, I build cloud applications, own OAuth/OIDC authentication, develop Python/TypeScript robot-interaction clients, and own release pipelines for two robot operating systems and the application suite. Lawrence, Kansas; open to remote roles with approximately 15–40% travel.',
  skills: [
    {
      group: 'Product & Stakeholders',
      items:
        'User workflows, business and software objectives, requirements clarification, stakeholder alignment, acceptance criteria, engineering tradeoffs, delivery outcomes',
    },
    {
      group: 'Software & Integration',
      items:
        'Python, TypeScript, JavaScript, Java, C#, Groovy; REST, GraphQL, OAuth/OIDC, PostgreSQL, Node; full-stack applications and robot-interaction clients',
    },
    {
      group: 'Platform & Delivery',
      items:
        'AWS, GitHub Actions, CI/CD, Docker, Kubernetes / OpenShift, Helm, Datadog; release orchestration and developer experience',
    },
    {
      group: 'Quality & Reliability',
      items:
        'Lead SDET, test architecture, shift-left testing, testability, test framework design, API testing, pytest, Playwright/Puppeteer, Selenium, BDD/TDD, UAT automation, performance testing',
    },
    {
      group: 'AI & Technical Practice',
      items:
        'AI feature delivery, OpenAI / AWS Amplify integrations, repeatable AI-assisted workflows; architecture, code review, mentoring, cross-team troubleshooting',
    },
  ],
  experience: [
    {
      company: 'Opentrons Labworks',
      location: 'Remote (HQ: Long Island City, NY)',
      title: 'Lead Software Engineer & Build & Release Manager',
      period: 'Feb 2024 – Present',
      bullets: [
        'Own build and release pipelines for two robot operating systems and the Opentrons application suite; work hands-on on versions, tags, and deployments.',
        'Build full-stack features for Opentrons AI and own authentication and authorization (OAuth/OIDC) across web products.',
        'Developed TypeScript/Python robot-interaction clients and shipped AI features; authored reusable AI-assisted development workflows.',
        'Added build and release responsibilities in February 2024 while continuing the software development and SDET work below.',
      ],
    },
    {
      company: 'Opentrons Labworks',
      location: 'Remote (HQ: Long Island City, NY)',
      title: 'Senior Developer & SDET',
      period: 'Jun 2021 – Present',
      bullets: [
        'Architect, build, and operate Protocol Library (library.opentrons.com) and Opentrons Accounts, from application design through implementation.',
        'Built GitHub Actions/AWS CI/CD and test frameworks that shortened robot software release cycles.',
        'Implemented Datadog monitoring and proactive incident detection across cloud services.',
        'Architect test automation across on-robot systems, desktop applications, and HTTP APIs; mentor engineers in testing.',
      ],
    },
    {
      company: 'TEKsystems',
      location: 'Remote',
      title: 'Test Automation Architect — Continuous Testing Practice',
      period: 'Aug 2019 – Jun 2021',
      bullets: [
        'Practice architect for continuous testing across client engagements.',
        'Led pytest feature automation for a gaming-engine team of 10 (Python) and browser UAT in Azure DevOps for an energy-sector website team of 5 (JavaScript/TypeScript).',
      ],
    },
    {
      company: 'Rackspace',
      location: 'Remote',
      title: 'Software Developer, Test III (Lead SDET)',
      period: 'Nov 2016 – Aug 2019',
      bullets: [
        'Lead SDET on a dedicated-device web portal spanning customer-facing applications, ETL pipelines, and APIs; wrote and reviewed code across teams.',
        'Automation and services in Python (pytest, requests, Selenium), Java (TestNG, RestAssured), TypeScript (Ava, Puppeteer), and Groovy (Grails, Spock).',
        'Delivery stack: Jenkins, OpenShift/Kubernetes, Helm, Docker, GraphQL, StreamSets, Elasticsearch.',
      ],
    },
    {
      company: 'Xpanxion',
      location: 'Remote / Kearney, NE',
      title: 'Test Architect · Lead Automation Engineer · Automation Test Lead / Manager',
      period: '2009–2012; 2013–2016',
      bullets: [
        'Hands-on QA strategy and automation consulting on long-term client engagements.',
        'Built frameworks for web, APIs, ETL, mobile, and desktop; BDD/TDD with Cucumber-JVM, JUnit, TestNG, NUnit, and MSTest.',
        'Performance testing with LoadRunner and JMeter; mentored engineers on automation and testing.',
      ],
    },
    {
      company: 'Earlier roles',
      location: 'Kansas / Nebraska',
      title: 'Epiq Systems · Standard Beverage · Target · Independent IT',
      period: '2003 – 2013',
      bullets: [
        'Epiq Systems (2012–2013): C# unit-test and coded-UI automation for web and desktop applications.',
        'Standard Beverage (2009): ASP.NET/VB.NET applications, operations dashboards, and DB2 / SQL Server database design.',
        'Earlier work: operations at Target; nonprofit websites, networks, databases, AV implementation, and end-user training.',
      ],
    },
  ],
  education: [
    {
      school: 'Kansas State University',
      degree: 'B.S., Physical Sciences',
      period: '1996 – 2003',
    },
  ],
  certifications: ['ISTQB Certified Tester, Foundation Level (CTFL)'],
};
