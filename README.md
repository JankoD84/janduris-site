# janduris-site

Personal portfolio website for **Janko Ďuriš** — QA Automation Engineer & Release Quality Builder.

Live site: [https://janduris.vercel.app](https://janduris.vercel.app)

---

## About

This website presents my work, experience, skills and projects across QA, automation, release quality and product building.

I'm a QA Engineer with 4+ years of experience in software testing. My work connects practical QA experience, automation growth, release risk thinking and founder/product execution.

Core positioning:

> I help teams reduce release risk through QA automation, test strategy, CI/CD quality checks and AI-assisted engineering tools.

---

## Focus Areas

- QA automation
- Manual and exploratory testing
- Regression testing
- Release quality
- CI/CD quality checks
- E-commerce QA
- 3rd party integrations testing
- CRM / OMS testing
- Internal business platform testing
- Product QA
- AI-assisted engineering
- Internal tools
- Release control systems

---

## Website Structure

The site is organized into focused pages:

| Route | Purpose |
|---|---|
| `/` | Homepage overview, hero, positioning and featured proof |
| `/about` | About me, professional story and human side |
| `/work` | Work experience and education |
| `/proof` | Proof of work and current professional direction |
| `/projects` | Projects, products and internal systems |
| `/websites` | Public websites and live work |
| `/skills` | Skills matrix and languages |
| `/contact` | Contact links and contact form |

---

## Featured Work

### Dulvarn

Release control and QA intelligence system focused on helping teams understand release risk before shipping.

Website: [https://www.dulvarn.com](https://www.dulvarn.com)

Focus:

- Release control
- QA intelligence
- PR / CI / test signals
- Guard gates
- Human-reviewed release decisions
- GO / CONDITIONAL GO / NO-GO thinking

---

### Dulvarn Tools

Productized QA tools, templates and workflows for release risk scoring, GitHub QA gates and QA audits.

Website: [https://tools.dulvarn.com](https://tools.dulvarn.com)

Focus:

- QA audit workflows
- Release risk scoring
- GitHub QA gates
- Practical QA templates
- Productized QA services

---

### Wildcode Studio

Internal builder hub for product experiments, automation workflows, infrastructure, documentation and AI-assisted engineering systems.

Docs: [https://docs.wildcode.studio](https://docs.wildcode.studio)

Focus:

- Internal tools
- Infrastructure documentation
- Runbooks
- Product experiments
- Automation workflows
- AI-assisted engineering

---

## Work Experience

### QA Engineer — Baťa / Bata Group

Current QA role focused on e-commerce, internal business platforms and connected third-party systems.

Areas:

- E-commerce QA
- Internal business platform testing
- 3rd party integrations testing
- CRM / OMS testing
- Vinculum
- Radial
- Orob
- ORCE
- Jakala
- Mobile testing
- Test cases
- Jira
- Confluence
- Automation testing
- Python / Robot Framework focus
- Playwright / TypeScript focus
- Bug reporting and release validation

---

### Manual Tester — Flowio

Manual testing role focused on a broker web application.

Areas:

- Web application testing
- Manual testing
- Test case writing
- PostgreSQL validation
- Bug reporting
- Regression checks

---

### QA Engineer — SolarWinds

First major IT / QA role after completing tester training. Built a practical QA foundation in an enterprise software environment.

Areas:

- NetSuite license creation and testing
- Salesforce Cloud support cases handling and testing
- Tenant creation and editing
- Mobile testing
- Release process handling
- TeamCity builds handling
- VS Code usage
- Automation parameter editing
- Automation testing
- C#
- SQL
- Jira
- Confluence
- Azure DevOps / ADO pipelines
- Manual and regression testing
- Bug reporting

---

## Skills

### QA & Testing

- Manual testing
- Exploratory testing
- Regression testing
- E-commerce QA
- Internal business platform testing
- 3rd party integrations testing
- CRM testing
- OMS testing
- Mobile testing
- Bug reporting
- Test cases
- Acceptance criteria
- QA workflows
- Risk-based testing
- Release validation
- Jira
- Confluence

### Automation

- Python
- Robot Framework
- Selenium
- Playwright
- TypeScript
- C#
- API testing
- Test data handling
- Regression automation
- Automation testing
- CI test runs
- Test stability
- Maintainable test suites

### Business Systems

- CRM
- OMS
- Vinculum
- Radial
- Orob
- ORCE
- Jakala
- NetSuite
- Salesforce Cloud
- Tenant management
- License creation / testing
- Support cases handling / testing

### Engineering

- Next.js
- FastAPI
- PostgreSQL
- Redis
- Docker
- GitHub
- Vercel
- Cloudflare
- Hetzner VPS
- Linux / Fedora / Ubuntu
- TeamCity
- Azure DevOps / ADO pipelines
- API integrations
- Stripe basics
- Webhooks

### AI / Internal Tools

- AI-assisted engineering
- Prompt-driven development
- Local LLM testing
- Ollama
- Multi-agent workflows
- Autonomous agent systems
- QA intelligence tooling
- Release decision support
- Documentation automation

### Product / Founder

- Dulvarn
- Wildcode Studio
- Release control
- QA audits
- QA templates
- B2B SaaS thinking
- Internal dev hub
- Product roadmap thinking
- Monetization planning

---

## Languages

| Language | Level |
|---|---|
| Slovak | Native |
| Czech | Native |
| English | Advanced |
| German | Basics |

---

## Tech Stack

This site is built with:

- Next.js
- TypeScript
- Tailwind CSS
- React
- Vercel

Planned / optional integrations:

- Contact form API route
- Resend email delivery
- Open Graph preview image
- Sitemap
- Robots metadata

---

## Design Direction

The design is intentionally built around a QA / DEV founder identity.

Visual direction:

- Dark-first interface
- QA / release quality visual language
- Proof-of-work structure
- Clean technical layout
- Minimal animation
- Shift-right positioning
- Product-builder feel

Hero concept:

> Where others shift-left, we shift-right.

The top visual animation is designed as a symbolic wall reveal, representing breaking through conventional QA thinking and revealing a shift-right release quality mindset.

---

## Contact Form

The contact page can include both direct links and a contact form.

Direct contacts:

- Email: [duris.janko@tutanota.com](mailto:duris.janko@tutanota.com)
- LinkedIn: [https://www.linkedin.com/in/jduris/](https://www.linkedin.com/in/jduris/)
- GitHub: [https://github.com/JankoD84/](https://github.com/JankoD84/)
- Phone: [+420608118364](tel:+420608118364)

If email sending is enabled through Resend, the following environment variables are required:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=duris.janko@tutanota.com
CONTACT_FROM_EMAIL=
```

If these variables are missing, the API returns a clear configuration error and the contact page falls back to direct email / mailto behavior.

---

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

---

## Deployment

The site is designed for Vercel deployment.

Required for a basic static deployment:

- Next.js app
- Vercel project
- No database
- No CMS

Optional for contact form email delivery:

- Resend account
- Verified sending domain / sender
- Vercel environment variables listed above
