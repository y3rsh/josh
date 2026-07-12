// Resume v2 — the optimized, download-facing resume.
// Source of truth for the facts lives in docs/resume-source.md.
// This module is consumed by scripts/generate-resume-pdf.mjs to render
// public/resume.pdf. Content is written for 2026: single-column, ATS/LLM
// friendly, keyword-complete, impact-first. Keep it to ~two pages.

export const resume = {
  name: 'Josh McVey',
  title: 'Lead SDET & Test Architect · Build & Release Manager · Platform & Full-Stack',
  location: 'Lawrence, KS · Remote',
  links: [
    { label: 'joshmcvey.com', url: 'https://joshmcvey.com' },
    { label: 'yersh13@gmail.com', url: 'mailto:yersh13@gmail.com' },
    { label: 'linkedin.com/in/joshmcvey', url: 'https://www.linkedin.com/in/joshmcvey' },
    { label: 'github.com/y3rsh', url: 'https://github.com/y3rsh' },
  ],

  summary:
    'Lead SDET, test architect, and Build & Release Manager with 20+ years spanning QA strategy, test automation architecture, platform engineering, and software delivery. I own the pipelines that ship two robot operating systems and a full cloud application suite, and I stay hands-on — cutting versions, tags, and deployments alongside the team. Full-stack contributor on Opentrons AI; owner of authentication and authorization across all web products. I make AI-assisted development operational in production, and I improve how work gets done by reading the incentives, people, and technical debt underneath a problem.',

  // Short, scannable, keyword-dense skill groups for ATS and LLM parsing.
  skills: [
    {
      group: 'Build, Release & Platform',
      items:
        'CI/CD, GitHub Actions, AWS, release orchestration, versioning & tagging, Docker, Kubernetes / OpenShift, Helm, Datadog observability, Developer Experience',
    },
    {
      group: 'Quality Engineering',
      items:
        'Lead SDET, test architecture & strategy, test framework design, API testing, BDD/TDD, UAT automation, pytest, Playwright/Puppeteer, Selenium, continuous testing',
    },
    {
      group: 'Languages & Full-Stack',
      items:
        'Python, TypeScript, JavaScript, Java, C#, Groovy; OAuth/OIDC, GraphQL, REST, PostgreSQL, Node, Astro',
    },
    {
      group: 'AI-Augmented Delivery',
      items:
        'Claude Code, Cursor, Warp; authoring skills, rules & repeatable workflows; AI feature delivery; OpenAI / AWS Amplify integrations; robot-interaction clients',
    },
    {
      group: 'Leadership',
      items:
        'Build & Release management, cross-team release coordination, mentoring, architecture facilitation, process repair, product & design partnership',
    },
  ],

  experience: [
    {
      company: 'Opentrons Labworks',
      location: 'Remote (HQ: Long Island City, NY)',
      title: 'Lead Software Engineer & Build & Release Manager',
      period: 'Feb 2024 – Present',
      bullets: [
        'Own Build & Release for two robot operating systems and the full Opentrons application suite — hands-on for every version, tag, and deployment while leading the team that ships them.',
        'Drive delivery improvements org-wide: streamlined release processes, stronger test automation, and cross-team coordination that shortened robot software release cycles.',
        'Full-stack engineer on Opentrons AI; own authentication and authorization (OAuth/OIDC) across all web products.',
        'Made AI-assisted development operational for the team — authored skills, rules, and workflows and shipped AI features and TypeScript/Python robot-interaction clients.',
      ],
    },
    {
      company: 'Opentrons Labworks',
      location: 'Remote (HQ: Long Island City, NY)',
      title: 'Senior Developer & SDET',
      period: 'Jun 2021 – Present',
      bullets: [
        'Architect, build, and operate the Protocol Library (library.opentrons.com) and Opentrons Accounts — acting as project manager, architect, and lead developer.',
        'Built CI/CD on GitHub Actions and AWS and testing frameworks that made robot software releases faster and more reliable.',
        'Stood up Datadog monitoring and proactive incident detection for high availability across cloud services.',
        'Partnered across product, QA, and engineering to coordinate releases and resolve issues quickly.',
      ],
    },
    {
      company: 'TEKsystems',
      location: 'Remote',
      title: 'Test Automation Architect — Continuous Testing Practice',
      period: 'Aug 2019 – Jun 2021',
      bullets: [
        'Practice architect for continuous testing across client engagements.',
        'Led pytest-based feature automation for a gaming-engine team of 10 (Python).',
        'Led browser-based UAT in Azure DevOps for energy-sector .com work, directing a team of 5 (JavaScript/TypeScript).',
      ],
    },
    {
      company: 'Rackspace',
      location: 'Remote',
      title: 'Software Developer, Test III (Lead SDET)',
      period: 'Nov 2016 – Aug 2019',
      bullets: [
        'Lead SDET on a dedicated-device web portal spanning customer-facing web apps, ETL pipelines, and APIs; contributed across code, review, planning, and team leadership.',
        'Automation and services in Python (pytest, requests, Selenium), Java (TestNG, RestAssured), TypeScript (Ava, Puppeteer), and Groovy (Grails, Spock).',
        'Delivery stack: Jenkins, OpenShift/Kubernetes, Helm, Docker, GraphQL, StreamSets, Elasticsearch.',
      ],
    },
    {
      company: 'Xpanxion',
      location: 'Remote / Kearney, NE',
      title: 'Test Architect · Lead Automation Engineer · Automation Test Lead / Manager',
      period: 'Dec 2009 – Nov 2016',
      bullets: [
        'Hands-on QA strategy and automation consultant on long-term, strategic engagements; directed QA for the business unit of a top client.',
        'Authored automation frameworks for web, web services, ETL, mobile, and desktop; BDD/TDD with Cucumber-JVM, JUnit, TestNG, NUnit, MSTest.',
        'Performance testing with LoadRunner and JMeter; recruited, onboarded, and mentored QA engineers and teams.',
      ],
    },
    {
      company: 'Earlier roles',
      location: 'Kansas / Nebraska',
      title: 'Epiq Systems · Standard Beverage · Target · Independent IT',
      period: '2003 – 2013',
      bullets: [
        'Epiq Systems (Software Automation Engineer): C# unit-test and coded-UI automation for web and desktop applications.',
        'Standard Beverage (Junior Developer): ASP.NET/VB.NET business applications, operations dashboards, and DB2 / SQL Server database design.',
        'Target (Group Leader): operations leadership for a 500-associate facility — took a team from worst to first in productivity and quality while underspending payroll plan 5–25%.',
      ],
    },
  ],

  education: [
    { school: 'Kansas State University', degree: 'B.S., Physical Sciences', period: '1996 – 2003' },
  ],
  certifications: ['ISTQB Certified Tester, Foundation Level (CTFL)'],
};
