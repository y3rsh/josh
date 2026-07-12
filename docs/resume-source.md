# Resume Source of Truth

Aggregated, checked-in record of every fact about Josh McVey's career, pulled
from two sources **as they are**:

1. **The website** — `src/content/resume-facts.ts`, `src/content/site-copy.ts`,
   `src/content/career-map.ts`.
2. **The LinkedIn PDF export** — the previous `public/resume.pdf` (6-page
   LinkedIn export), decoded and transcribed here verbatim.

This document is the input. The optimized, download-facing resume ("v2") is
generated from `scripts/resume-content.mjs` into `public/resume.pdf`. When facts
change, update this file first, then reconcile `scripts/resume-content.mjs`.

---

## 1. Website data (current)

### Identity
- Name: Josh McVey
- Location: Lawrence, Kansas, United States
- Email: yersh13@gmail.com
- LinkedIn: https://www.linkedin.com/in/joshmcvey
- GitHub: https://github.com/y3rsh
- Website: https://joshmcvey.com

### Positioning (site)
- Eyebrow: Build & Release Manager · Lead SDET · Full Stack · Platform · AI-augmented delivery
- Headline (facts): Lead SDET, Build & Release manager, and process operator. 20+ years across QA strategy, test automation architecture, SDET, platform engineering, and software delivery.

### Summary (site)
- Lead SDET at Opentrons. Not the deepest expert in any single stack — the person who reads the situation, finds creative paths when resources are lean, and improves how the work gets done between idea and production.
- Improves CI/CD, release cadence, test strategy, and cross-team coordination by leveraging relationships and understanding the motivations and incentives underneath them.
- Manages Build & Release for two robot OSes and the full Opentrons application suite while cutting versions, tags, and deployments alongside the team.
- Owns Protocol Library, Opentrons Accounts, and authentication/authorization across web products; full-stack contributor on Opentrons AI.
- Early adopter of AI tools — daily user, writes Cursor skills, project rules, and workflows that make AI operational for the team.

### Target roles (site)
- Lead SDET and platform engineering
- Build & Release management and Developer Experience
- Consulting and trusted-advisor engagements for process repair

### Good fit (site)
- Process improvement across release pipelines, test strategy, and cross-team handoffs
- Brittle or missing test infrastructure
- Making AI-assisted development operational for a team
- Hard problems where relationships, motivations, and incentives are part of the solution
- One person who does architectural thinking and implementation

### Not a fit (site)
- Raw scaling problems on massive distributed systems as the primary mandate

### Skills (site)
- Leadership: Build & Release management, Team standups, Cross-team release coordination
- Delivery: CI/CD, GitHub Actions, AWS, Release tagging and deployment
- Engineering: Python, TypeScript, Java, pytest, OAuth/OIDC, GraphQL, Docker, Kubernetes/OpenShift, Helm
- Quality: SDET, Test automation architecture, API testing, BDD/TDD, UAT automation
- Observability: Datadog
- AI: Cursor skills and rules, AI-assisted feature delivery, OpenAI/Amplify integrations

### How I work with AI (site)
- I have been energized by learning and using AI tools. Staying on top of the rapid changes is a challenge — I keep up by reading and listening to podcasts. Faster iteration demands sharper taste, and I iterate fast on real work.
- In practice that means Cursor, Claude Code, Warp, skills, rules, and repeatable workflows that stay useful as the models change. It shows up in shipping: Opentrons AI features, robot interaction clients in TypeScript and Python, and the glue scripts that keep releases and tests honest. I treat AI as infrastructure for thinking and execution, then harden what works into production code.
- Early adopter — picks up new AI tools the day they ship and folds them into real development work.
- Uses AI tools daily in production development work, not as a demo.
- Writes Cursor skills, project rules, and repeatable workflows that survive model changes.
- Shipped Opentrons AI features and TypeScript/Python robot interaction clients.

### Certifications (site)
- CTFL (ISTQB Certified Tester Foundation Level)

### Education (site)
- Kansas State University — BS, Physical Sciences (1996–2003)

### Career lanes (site career map, 2003–2026)
- Consulting: 2003–2006, 2009–2016, 2019–2021
- Leadership: 2006–2012, 2019–2021, 2024–2026
- Test architecture: 2009–2026
- Build & Release / platform: 2016–2019, 2021–2026

---

## 2. LinkedIn PDF export (verbatim transcription)

### Contact (from PDF)
- 1235 Stone Creek Dr, Lawrence KS, 66049
- 785-213-8975 (Mobile)
- yersh13@gmail.com
- www.linkedin.com/in/joshmcvey (LinkedIn)
- joshmcvey.com (Personal)
- github.com/y3rsh (Portfolio)

### Top Skills (from PDF)
- Leadership
- Project Management
- Solution Architecture

### Certifications (from PDF)
- CTFL

### Headline (from PDF)
Senior Software Engineer | AI Infrastructure & Platform | Full-Stack to DevOps | Lab Robotics

### Summary (from PDF)
I build and ship things end to end. At Opentrons I manage the build and release team responsible for two robot operating systems and the full application suite and I'm hands on, doing the work alongside them. Every version, every tag, every deployment. I'm also the full-stack developer on Opentrons AI and the Protocol Library, and I own authentication and authorization across all web products.

That range is real and deliberate. I manage people, processes, and I write code. I work closely with product and design. I've designed OAuth/OIDC auth architecture, built AI-driven robot interaction tooling with TypeScript/Python clients, and influenced product strategy for where AI fits in Opentrons products. I can lead a team standup, run an architecture conversation with a CTO, ship a new feature on Opentrons AI, mentor folks on their API testing, and cut a release.

I use AI tools constantly and treat that as a core part of how I work. I build skills, rules, and workflows that make AI more effective in my daily development practice. I'm always pushing that further as the tooling evolves.

I'm moving toward customer-facing engineering roles where the job is making AI actually work in production -- real implementation and adoption in technical environments where the stakes are real. If that's the problem you're trying to solve, I'd like to talk.

### Experience (from PDF)

**Opentrons Labworks Inc.** — 4 years 11 months (as of export)

- *Lead Software Engineer and Build & Release Manager* — February 2024 – Present (2 years 3 months) — Queens, New York, United States
  - Continuing my role as Lead Software Developer and SDET, I also lead efforts to improve software delivery across the organization—driving more efficient, timely, and high-quality releases for all our products, platforms, and packages. This includes streamlining processes, enhancing test automation, and fostering cross-team collaboration to ensure excellence at every stage of the release lifecycle.

- *Senior Developer and SDET* — June 2021 – Present (4 years 11 months) — Queens, New York, United States
  - At Opentrons, I lead the architecture, development, and management of our core cloud infrastructure and services, including full ownership of the Protocol Library web platform https://library.opentrons.com and Opentrons Accounts. I serve as project manager, architect, and lead developer—balancing strategic vision with hands-on execution.
  - Cloud platform ownership: Designing and evolving scalable, secure web services that power critical parts of the Opentrons ecosystem
  - Release cycle optimization: Architecting and implementing robust testing frameworks and automated processes to drive faster, reliable robot software releases
  - CI/CD automation: Leveraging GitHub Actions and AWS to build seamless continuous integration and deployment pipelines, boosting developer productivity and deployment agility
  - Monitoring & reliability: Utilizing Datadog for detailed performance monitoring and proactive incident detection to maintain high availability and system health
  - Cross-functional collaboration: Partnering closely with product, QA, and engineering teams to ensure smooth, coordinated releases and rapid issue resolution
  - Leadership & problem solving: Guiding teams through complex technical challenges while fostering a culture of continuous improvement and quality focus
  - My role combines deep technical expertise with strategic leadership, contributing directly to the innovation and operational excellence that drives Opentrons' success in automated biologics robotics.

**TEKsystems** — *Test Automation Architect* — August 2019 – June 2021 (1 year 11 months) — Remote
- Practice Architect - Continuous Testing (https://www.teksystems.com/en/devops-agile#our-capabilities)
- Gaming Engine feature testing using pytest. Led a team of 10. Python.
- .com testing in the Energy sector. UAT in browser tests in Azure DevOps. Leading a team of 5. JavaScript/TypeScript.

**Rackspace** (the #1 managed cloud company) — *Software Developer - Test III* — November 2016 – August 2019 (2 years 10 months) — Remote
- Lead software developer contributing to multiple teams. Lead SDET on the dedicated device web portal. Contribute by writing code, reviewing code, planning, researching, and leading. Products include customer facing web applications, ETL processes, and APIs.
- Python (pytest, requests, selenium, click), Java (testng, selenium, restAssured), JavaScript & TypeScript (Ava, Puppeteer), Groovy (Grails, Spock), Jenkins, OpenShift (Kubernetes), Helm, Docker, Git, GraphQL, StreamSets Data Collector, Elasticsearch.

**Xpanxion** — 3 years 5 months
- *Test Architect* — July 2016 – November 2016 (5 months) — Remote
- *Lead Automation Engineer* — July 2013 – July 2016 (3 years 1 month) — Remote
  - Hands on QA strategy and automation consultant. Typical engagements are long-term and strategic.
  - 5 years of Selenium experience in C# and Java.
  - 4 years of agile experience working with experienced agile practitioners and mentoring new agile practitioners. SCRUM and Kanban.
  - Authored multiple frameworks to implement or enhance automated testing for web browsers, web services, ETL, mobile, and desktop projects.
  - Experienced with many tools for SDLC process and quality practice: JIRA, Confluence, TFS, Rally, Bugzilla, SharePoint, Quality Center.
  - Performance Testing and Monitoring with LoadRunner, JMeter, custom packages, Visual Studio.
  - Implementing and sustaining BDD and TDD strategies using Cucumber-JVM, JBehave, JUnit, TestNG, NUnit, MSTest.
  - CI/CD tools: TFS, Git, SVN, Jenkins, Bamboo, uDeploy, Microsoft build tools, Chef.
  - Databases: Oracle, SQL Server, DB2, MySQL, PostgreSQL, MongoDB, Solr.
  - Languages/tools: Java, C#, Python, Groovy, SoapUI, QTP (UFT), RestAssured, Sikuli, CodedUI, and many others.
- *Automation Test Lead, Manager* — December 2009 – November 2012 (3 years) — Kearney, NE
  - Establish Automation Frameworks for engagements.
  - Directed Quality Assurance for the entire business unit of Xpanxion's second largest client.
  - Planned, guided, and reviewed all QA team members and deliverables for multiple projects.
  - Ensured deliverable quality across client/Xpanxion/third-party contracting personnel.
  - Heavily involved in recruiting, interviewing, onboarding, training, and mentoring of individual employees and teams.
  - Served as Lead Quality Assurance Analyst on customer facing enterprise web applications, multifaceted ETL, and database projects.
  - Created automation scripts (Selenium, QTP, SoapUI, CodedUI).
  - Completed web application performance and measurement effort (Fiddler and LoadRunner).
  - Composed and delivered performance reviews. Created and reviewed onboarding and training curriculum.
  - Provided technical consulting on tools and QA strategies to clients.

**Epiq Systems** — *Software Automation Engineer* — November 2012 – July 2013 (9 months) — Kansas City, Kansas
- Extensive automation with C# in unit test and coded UI framework on web and desktop applications.

**Standard Beverage** — *Junior Software Developer* — April 2009 – December 2009 (9 months) — Lawrence, Kansas
- One of only 5 team members providing development and support services to an organization with over 300 employees. Provided internal customer service and employee training. Exposed to many areas of IT.
- ASP.NET (VB.NET code-behind) web application for input and analysis of product market penetration.
- Company-wide redesign of reporting.
- Consulted with each department to create web applications and/or spreadsheets to meet business needs.
- Operations Dashboard web application tying operations metrics to dashboards and drilldown tools for VPs and operations managers.
- Performance enhancement to existing code on the IBM iSeries in RPGIV. SQL performance tuning. Database designer and manager for all application databases on DB2 and Microsoft SQL Server 2008.

**Target** — *Group Leader* — April 2006 – April 2009 (3 years 1 month) — Topeka, Kansas
- Rapidly promoted in recognition of exceptional performance as a leader. Directed all aspects of departmental operational technical functions for a facility employing over 500 associates. Primary role was performance management of the team including hiring, performance reviews, coaching, and disciplinary action up through termination.
- Improved team performance from worst in the department to leading the department in base-adjusted productivity and quality.
- Consistently underspent payroll budget plan by 5%–25%.
- Rolled out numerous technical changes in processes and procedures within proprietary inventory management and tracking systems.
- Liaison with development team for payroll and performance-tracking web applications.
- Created database-driven spreadsheets tracking everything from vacation calendars to budgets.
- Served as facility representative and participant during executive recruitment and interviews.
- Planned, organized, and implemented the Distribution Center summer picnic for 500 team members and families.

**Self Employed** — *Information Technology and Media Implementation Specialist* — May 2003 – April 2006 (3 years)
- Managed and created multiple websites, intranets, and information strategies for non-profit organizations. Implemented networks and audio-visual systems. Developed contact databases. Created video presentations and training. Trained end-users on implemented technologies.

### Education (from PDF)
- Kansas State University — BS, Physical Sciences · (1996 – 2003)

---

## 3. Reconciliation notes

- Dates: the site rounds Xpanxion to "2009 to 2016"; the PDF splits it into
  Lead Automation Engineer (2013–2016) plus Automation Test Lead/Manager
  (2009–2012), with a separate Epiq Systems stint (2012–2013) in between.
- Opentrons HQ is Long Island City, NY (the old LinkedIn PDF labeled it "Queens, New York"); Josh works remote from Lawrence, KS. v2 uses "Long Island City, NY".
- The site's public headline emphasizes Build & Release + Lead SDET + platform;
  the LinkedIn summary leans toward "making AI work in production." v2 keeps the
  Build & Release / SDET / platform core and foregrounds the AI-in-production
  angle, since both are current and true.
