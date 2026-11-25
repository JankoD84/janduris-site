export const profile = {
  name: "Ján Ďuriš",
  shortName: "Janko",
  title: "QA Automation & Playwright Engineer",
  headline: "I fix flaky tests and release-critical QA problems.",
  message:
    "I help engineering teams make their test automation and release pipelines more reliable: flaky E2E tests, tests that pass locally but fail in CI, missing critical-path coverage, and deciding what should actually block a release.",
  stack: "Playwright, TypeScript, Python, API testing and CI/CD",
  location: "Zlín, Czechia",
  availability: "Available for freelance projects and remote QA automation roles",
  proofItems: [
    { value: "4+ years", label: "in QA, from enterprise software to e-commerce" },
    { value: "7 open-source tools", label: "tests, CI tools and demos on GitHub" },
    { value: "13 articles", label: "on release decisions, on-call and QA" },
    { value: "Dulvarn", label: "a release-control system I'm building" },
  ],
  email: "duris.janko@tutanota.com",
  linkedin: "https://www.linkedin.com/in/jduris/",
  github: "https://github.com/JankoD84",
  upwork: "https://www.upwork.com/freelancers/~0198692795e824559b",
  payhip: "https://payhip.com/dulvarn",
};

export const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "Hire", href: "/#hire" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = [
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Skills", href: "/skills" },
  { label: "Proof of work", href: "/proof" },
  { label: "Websites", href: "/websites" },
];

export const mobileOnlyNavigation = [
  { label: "CV", href: "/cv" },
];

export const openTo = [
  "Freelance and contract projects (remote, or hybrid Zlín / Brno)",
  "QA Automation Engineer and SDET roles",
  "Release engineering and CI/CD quality roles",
  "QA audits and release risk reviews",
  "Product QA and e-commerce QA",
];

export const releaseSignal = {
  repository: "sample-release",
  ciChecks: "Passed",
  coverage: "84%",
  risk: "Medium",
  decision: "Conditional GO",
  title: "Release Readiness Snapshot",
  note: "A visual representation of release quality thinking, not a production metric.",
  pipeline: ["PR", "CI", "Tests", "Risk", "Decision"],
  badges: ["Passed", "Medium Risk", "Conditional GO"],
};

export const signalBar = [
  {
    title: "QA Foundation",
    description:
      "4+ years across enterprise software, broker web apps and e-commerce platforms.",
  },
  {
    title: "Automation Direction",
    description:
      "Python, Robot Framework, Selenium, Playwright / TypeScript automation focus, API testing and CI test workflows.",
  },
  {
    title: "Release Quality",
    description:
      "Risk-based QA, regression planning, release validation and go/no-go thinking.",
  },
  {
    title: "Product Builder",
    description:
      "Building Dulvarn, QA audit tools, internal systems and web products.",
  },
];

export const featuredProof = [
  {
    title: "QA Experience",
    description: "4+ years across SolarWinds, Flowio and Baťa.",
  },
  {
    title: "Product Builder",
    description: "Building Dulvarn, Dulvarn Tools and Wildcode systems.",
  },
  {
    title: "Automation Direction",
    description:
      "Python, Robot Framework, Selenium, Playwright / TypeScript automation focus, API testing and CI/CD quality checks.",
  },
];

export const about = [
  "I’m Janko, a QA engineer with 4+ years of experience in software testing. My IT career started with a Software Development Academy tester course and continued with my first major QA Engineer role at SolarWinds.",
  "Since then, I’ve worked across enterprise software, broker web applications and e-commerce/internal business platforms. I’m now focused on QA automation, release quality, CI/CD quality checks and AI-assisted engineering workflows.",
  "I currently work as a QA Engineer at Baťa and build Dulvarn — a release control system designed to help teams understand release risk before shipping.",
];

export const capabilities = [
  {
    title: "Manual & Exploratory QA",
    description:
      "Real testing mindset, edge cases, regression thinking, bug reporting, acceptance criteria and practical QA workflows.",
  },
  {
    title: "Test Automation",
    description:
      "Python, Robot Framework, Selenium, Playwright / TypeScript automation focus, API testing and maintainable regression automation.",
  },
  {
    title: "Release Risk Analysis",
    description:
      "Reviewing PR scope, test signals, CI/CD status, risky changes, regression impact and release readiness.",
  },
  {
    title: "QA Process Improvement",
    description:
      "Cleaner test strategy, better test cases, stronger bug reports, test planning and risk-based validation.",
  },
  {
    title: "Internal Tools & Web Apps",
    description:
      "Building practical tools with Next.js, FastAPI, PostgreSQL, Redis, Docker, Vercel, Cloudflare and Hetzner VPS.",
  },
  {
    title: "AI-Assisted Engineering",
    description:
      "Using AI, local LLMs, Ollama and agent workflows for analysis, documentation, debugging, planning and internal automation.",
  },
];

/* Ordered by priority: highlights most relevant first; tools split into core (shown always) and also used. */
export const workHistory = [
  {
    title: "QA Engineer",
    company: "Bata Group",
    date: "Jan 2025 – Present",
    location: "Zlín, Czechia · Hybrid",
    status: "Current",
    description:
      "Current QA role focused on the quality and reliability of e-commerce, internal business platforms and connected third-party systems. Work includes manual testing, regression testing, mobile testing, test cases, QA workflows, release validation, bug reporting and a growing automation focus with Python, Robot Framework, Playwright and TypeScript.",
    highlights: [
      "Automation testing support with Python, Robot Framework, Playwright and TypeScript",
      "Release validation and bug reporting",
      "E-commerce QA",
      "3rd party integrations testing",
      "CRM and OMS validation",
      "Internal business platform testing",
      "Manual and regression testing",
      "Mobile testing and test cases",
      "Jira and Confluence QA workflows",
    ],
    tools: {
      core: [
        "Playwright",
        "TypeScript",
        "Python",
        "Robot Framework",
        "Automation testing",
        "E-commerce QA",
        "Regression testing",
      ],
      also: [
        "3rd party integrations",
        "CRM",
        "OMS",
        "Mobile testing",
        "Test cases",
        "Manual QA",
        "Bug reporting",
        "Jira",
        "Confluence",
        "Vinculum",
        "Radial",
        "Orob",
        "ORCE",
        "Jakala",
      ],
    },
  },
  {
    title: "Manual Tester",
    company: "Flowio",
    date: "Feb 2024 – Jan 2025",
    location: "Slovakia · Hybrid",
    status: "QA role",
    description:
      "Manual testing role focused on a web application for a broker company. Work included test case writing, PostgreSQL-related validation, manual testing, bug reporting and regression checks.",
    highlights: [
      "Web application testing",
      "PostgreSQL validation",
      "Test case writing",
      "Regression checks",
      "Manual testing",
      "Bug reporting",
    ],
    tools: {
      core: [
        "PostgreSQL",
        "Regression testing",
        "Test cases",
      ],
      also: [
        "Manual testing",
        "Bug reporting",
      ],
    },
  },
  {
    title: "QA Engineer",
    company: "SolarWinds",
    date: "Jan 2022 – Jan 2024",
    location: "Brno, Czechia · Hybrid",
    status: "First QA role",
    description:
      "First major IT/QA role after completing tester training. Worked in an enterprise software environment and built a practical QA foundation across licensing flows, support-case workflows, tenant management, mobile testing, release process handling, builds and QA validation.",
    highlights: [
      "Release process handling",
      "Support of existing automation workflows",
      "Azure DevOps / ADO pipelines",
      "TeamCity builds handling",
      "Automation parameter editing",
      "NetSuite license creation and testing",
      "Salesforce Cloud support cases handling and testing",
      "Tenant creation and editing",
      "SQL",
      "Manual and regression testing",
      "Mobile testing",
      "Bug reporting",
      "C# exposure in a QA context",
      "QA process foundation",
      "VS Code usage",
    ],
    tools: {
      core: [
        "Automation testing",
        "ADO pipelines",
        "TeamCity",
        "Release process",
        "SQL",
      ],
      also: [
        "Existing automation workflow support",
        "Automation parameter editing",
        "NetSuite",
        "Salesforce Cloud",
        "Regression testing",
        "Manual testing",
        "Mobile testing",
        "C#",
        "Jira",
        "Confluence",
        "Bug reporting",
        "VS Code",
      ],
    },
  },
  {
    title: "Freelance",
    company: "Self-employed",
    date: "Dec 2021 – Mar 2022",
    location: "Trnava Region, Slovakia",
    status: "Transition",
    description:
      "Short freelance period focused on Linux desktop and technical troubleshooting while transitioning into IT and software testing.",
    highlights: [
      "Technical troubleshooting",
      "Linux desktop",
      "Early IT transition period",
    ],
    tools: {
      core: [
        "Linux Desktop",
        "Troubleshooting",
      ],
      also: [
        "Technical support",
      ],
    },
  },
];

export const education = [
  {
    school: "Software Development Academy",
    program: "Software tester / Quality Assurance",
    date: "Nov 2021 – Mar 2022",
    description:
      "Testing-focused training that started Janko's transition into IT. Covered software testing fundamentals, Quality Assurance basics, test case writing, MySQL and practical tester preparation.",
    skills: [
      "Quality Assurance",
      "Software testing fundamentals",
      "Test cases",
      "MySQL",
      "Testing mindset",
    ],
  },
  {
    school: "ZSPŠ Trnava",
    program: "Technical / engineering-oriented education",
    date: "Sep 2000 – May 2005",
    description:
      "Technical secondary education that supported practical technical thinking before the later transition into IT and Quality Assurance.",
    skills: [],
  },
];


export const beforeIt = {
  intro:
    "Before moving into IT in 2021 I spent 16 years in sales and technical roles, which is why I'm comfortable talking to business stakeholders, not just engineers.",
  roles: [
    { title: "Technology Specialist", company: "Lignofer s.r.o.", date: "Jun 2017 – Dec 2021" },
    { title: "Sales Manager", company: "JK Logistika a.s.", date: "Oct 2016 – Apr 2017" },
    { title: "Sales Manager", company: "Schmachtl SK spol. s r.o.", date: "Jan 2016 – Oct 2016" },
    { title: "Sales Manager", company: "Lignofer s.r.o.", date: "Jun 2005 – Jan 2016" },
  ],
};

export const certifications = [
  { title: "Software Tester – course certificate", issuer: "Software Development Academy", year: "2022" },
  { title: "Python AI Developer", issuer: "Mimo", year: "2024" },
  { title: "Python", issuer: "Mimo", year: "2024" },
  { title: "Cybersecurity", issuer: "Simplilearn", year: "2024" },
];

export const focusAreas = [
  {
    title: "Test automation",
    description:
      "Playwright and API suites a team can trust: no fixed sleeps, isolated test data, contracts checked on every response.",
    repos: ["flaky-playwright-lab", "api-tests-pytest-demo"],
  },
  {
    title: "CI/CD and release quality",
    description:
      "Quality gates that block what matters, pipelines that don't lie, and an explicit GO / CONDITIONAL GO / NO-GO for each release.",
    repos: ["release-ready", "gates-doctor", "dependabot-tamer"],
  },
  {
    title: "Ops tooling",
    description:
      "Small, boring tools that keep on-call calm: fair rotas, expiry warnings, scripts that run in CI every day.",
    repos: ["oncall-rota", "expiry-radar"],
  },
];

export const openSource = [
  {
    name: "flaky-playwright-lab",
    group: "Test automation",
    description: "Three classic flaky Playwright patterns, how to reproduce them under load, and the fix for each.",
    tags: ["Playwright", "TypeScript", "GitHub Actions"],
    featured: true,
  },
  {
    name: "api-tests-pytest-demo",
    group: "Test automation",
    description: "Production-style API tests in Python and pytest: JSON Schema contracts, auth, negative cases, idempotency and timeouts. Runs locally or in Docker.",
    tags: ["Python", "pytest", "FastAPI", "Docker"],
    featured: true,
  },
  {
    name: "release-ready",
    group: "CI/CD and release quality",
    description: "GitHub Action that gives every pull request a GO, CONDITIONAL GO or NO-GO verdict, plus release notes.",
    tags: ["GitHub Actions", "Python"],
    featured: true,
  },
  {
    name: "gates-doctor",
    group: "CI/CD and release quality",
    description: "Audits a GitHub repository's quality gates in one command: branch protection, required checks, CODEOWNERS.",
    tags: ["GitHub", "Python", "CLI"],
    featured: false,
  },
  {
    name: "dependabot-tamer",
    group: "CI/CD and release quality",
    description: "Turns a flood of Dependabot pull requests into grouped, scheduled updates.",
    tags: ["Dependabot", "Python"],
    featured: false,
  },
  {
    name: "oncall-rota",
    group: "Ops tooling",
    description: "Fair on-call schedule that respects PTO and holidays, with iCal and JSON output.",
    tags: ["SRE", "Python"],
    featured: false,
  },
  {
    name: "expiry-radar",
    group: "Ops tooling",
    description: "Warns before TLS certificates, domains and tokens expire. Runs daily in CI.",
    tags: ["SRE", "Python"],
    featured: false,
  },
];

/* Writing on CoderLegion, grouped by topic. Titles reconstructed from URLs; dates only where verified. */
export type Article = { title: string; summary: string; url: string; date?: string; featured?: boolean };

export const writingGroups: Array<{ topic: string; intro: string; articles: Article[] }> = [
  {
    topic: "Release decisions",
    intro: "When a green build is enough, when it isn't, and who decides.",
    articles: [
      {
        title: "A Green Pipeline Is Not a Release Decision",
        summary: "Why a passing CI run is a pipeline state, not a release decision, and what evidence a release actually needs.",
        url: "https://coderlegion.com/35947/a-green-pipeline-is-not-a-release-decision",
        date: "Nov 2026",
        featured: true,
      },
      {
        title: "Release Gates Should Be Risk-Based, Not Checklist-Based",
        summary: "Why gates should follow the risk of the change instead of a fixed checklist.",
        url: "https://coderlegion.com/26542/release-gates-should-be-risk-based-not-checklist-based",
        featured: true,
      },
      {
        title: "Who Actually Owns the Release Decision?",
        summary: "Separating who runs the pipeline from who is accountable for shipping.",
        url: "https://coderlegion.com/25600/who-actually-owns-the-release-decision",
        featured: true,
      },
      {
        title: "Your Tests Passed. That Still Doesn't Mean You Should Release",
        summary: "Passing tests answer one question; a release decision needs several more.",
        url: "https://coderlegion.com/25305/your-tests-passed-that-still-doesnt-mean-you-should-release",
      },
      {
        title: "CI Is Green, Your Release May Still Be Risky",
        summary: "The risks a green CI run does not cover.",
        url: "https://coderlegion.com/25303/ci-is-green-your-release-may-still-be-risky",
      },
      {
        title: "CI Is Green. What Could Still Go Wrong?",
        summary: "Failure modes that slip past a green pipeline.",
        url: "https://coderlegion.com/25304/ci-is-green-what-could-still-go-wrong",
      },
      {
        title: "What Happens After QA Says \"Passed\"",
        summary: "What a QA pass means for the release, and what it does not.",
        url: "https://coderlegion.com/25760/what-happens-after-qa-says-passed",
      },
    ],
  },
  {
    topic: "On-call and debugging",
    intro: "How I investigate failures before reaching for the code.",
    articles: [
      {
        title: "The First 5 Minutes of On-call: What I Check Before I Open the Code",
        summary: "The order I work through when the pager goes off, and why the code comes last.",
        url: "https://coderlegion.com/35672/the-first-5-minutes-of-on-call-what-i-check-before-i-open-the-code",
        date: "Nov 2026",
        featured: true,
      },
      {
        title: "A Failed Test Is a Clue, Not a Diagnosis",
        summary: "Treating a red test as the start of an investigation, not its conclusion.",
        url: "https://coderlegion.com/26540/a-failed-test-is-a-clue-not-a-diagnosis",
      },
    ],
  },
  {
    topic: "QA career and building a SaaS",
    intro: "How I got into QA, what I learned, and the product that came out of it.",
    articles: [
      {
        title: "How I Got Into QA and Why I Stayed",
        summary: "From sales and technical roles to software testing.",
        url: "https://coderlegion.com/25759/how-i-got-into-qa-and-why-i-stayed",
      },
      {
        title: "What I Wish I Knew When I Started in QA",
        summary: "Lessons I would give myself on day one as a tester.",
        url: "https://coderlegion.com/26539/what-i-wish-i-knew-when-i-started-in-qa",
      },
      {
        title: "How a QA Problem Turned Into the SaaS I'm Building",
        summary: "The release-decision problem behind Dulvarn.",
        url: "https://coderlegion.com/25761/how-a-qa-problem-turned-into-the-saas-im-building",
      },
      {
        title: "The Unseen Work Behind Building a SaaS",
        summary: "What building a product alone actually involves beyond the code.",
        url: "https://coderlegion.com/26541/the-unseen-work-behind-building-a-saas",
      },
    ],
  },
];

export const allArticles = writingGroups.flatMap((group) => group.articles);
export const featuredArticles = allArticles.filter((article) => article.featured);

export const services = [
  {
    title: "Flaky Playwright & CI fix",
    price: "from €490",
    duration: "about 5 working days",
    description: "For suites that fail randomly or only in CI.",
    includes: [
      "Diagnosis of your flakiest tests, with the cause for each",
      "Fixes delivered as small pull requests",
      "CI tuned: workers, shards, timeouts, retries",
      "A short report so the problems don't come back",
    ],
  },
  {
    title: "Release readiness audit",
    price: "from €490",
    duration: "about 1 week",
    description: "For teams that ship on a green build and hope.",
    includes: [
      "Review of quality gates, CI cost and release process",
      "Rollback and migration safety check",
      "PDF with the top 5 actions, ranked by risk",
      "45-minute walkthrough call",
    ],
  },
];

export const projects = [
  {
    title: "Dulvarn — Release Control & QA Intelligence",
    status: "Beta (invite-only)",
    url: "https://www.dulvarn.com/",
    problem:
      "Teams often ship with scattered QA signals, unclear release risk and too much decision-making hidden in chat or habit.",
    built:
      "A release quality system for PR signals, CI/CD status, QA guard gates, regression impact and human-reviewed release decisions.",
    proves:
      "QA domain expertise, release risk modeling, product thinking, full-stack SaaS building and founder ownership.",
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "GitHub",
      "CI/CD",
      "QA workflows",
      "Release Control",
    ],
    role: "Founder, product owner, QA domain designer and builder.",
    currentStatus: "Beta / in progress.",
    nextStep: "Public demo, GitHub workflow integration and practical release risk workflows.",
  },
  {
    title: "Dulvarn Tools — Productized QA Workflows",
    status: "Beta",
    url: "https://tools.dulvarn.com/",
    problem:
      "QA improvements are often useful but hard to package into repeatable audits, templates and lightweight workflows.",
    built:
      "Practical QA tools and templates for release risk scoring, GitHub QA gates, audit workflows and QA process improvement.",
    proves:
      "The ability to turn QA knowledge into products, practical deliverables, monetizable workflows and useful tooling.",
    tags: [
      "QA Audits",
      "Templates",
      "GitHub Actions",
      "Release Risk",
      "Productized Services",
    ],
    role: "Creator of QA productized workflows and templates.",
    currentStatus: "Live / in progress.",
    nextStep: "Add clearer product pages, payment flow and sample outputs.",
  },
  {
    title: "Wildcode Studio — Internal Builder Hub",
    status: "Internal",
    url: "https://docs.wildcode.studio/",
    problem:
      "Experiments, infrastructure notes and product ideas need a reliable place to become maintainable systems instead of loose files.",
    built:
      "An internal development hub for experiments, automation tools, infrastructure, AI workflows, product prototypes and operational documentation.",
    proves:
      "Engineering organization, internal systems thinking, infrastructure ownership and disciplined product experimentation.",
    tags: [
      "Internal Tools",
      "Infrastructure",
      "Docs",
      "Automation",
      "Product Development",
    ],
    role: "Builder and maintainer of internal systems, docs and workflows.",
    currentStatus: "Internal.",
    nextStep: "Improve documentation, automation and operational structure.",
  },
  {
    title: "Autonomous Agent System / Multi-Agent AI",
    status: "Internal",
    problem:
      "AI-assisted engineering needs structure, approvals and review paths before it can support real development work responsibly.",
    built:
      "Internal AI and agent workflow systems for task execution, approvals, orchestration, security review, documentation and engineering support.",
    proves:
      "AI-assisted engineering, workflow orchestration, backend/API experimentation and human-in-the-loop governance.",
    tags: [
      "FastAPI",
      "Agents",
      "Workflows",
      "Local LLMs",
      "Ollama",
      "Automation",
      "Governance",
    ],
    role: "Builder and experiment owner.",
    currentStatus: "Internal / experimental.",
    nextStep: "Stabilize workflows, approvals and practical engineering use cases.",
  },
];

export const websites = [
  {
    title: "Dulvarn",
    url: "https://www.dulvarn.com/",
    type: "B2B SaaS / Release quality platform",
    status: "Beta (invite-only)",
    description:
      "Release risk control for QA and engineering teams. Focused on PR signals, CI/CD status, regression impact, human-reviewed release decisions and practical QA workflows.",
    proof: [
      "SaaS product thinking",
      "QA domain expertise",
      "Release control positioning",
      "Full-stack product building",
    ],
    tags: ["Dulvarn", "Release Control", "QA Intelligence", "CI/CD", "SaaS"],
  },
  {
    title: "Dulvarn Tools",
    url: "https://tools.dulvarn.com/",
    type: "QA tools / Templates / Productized workflows",
    status: "Beta",
    description:
      "Practical QA checklists, kits and developer tools, sold via Payhip at payhip.com/dulvarn.",
    proof: [
      "Ability to productize QA knowledge",
      "Practical tooling mindset",
      "Monetizable QA deliverables",
      "Release risk and QA audit thinking",
    ],
    tags: [
      "QA Tools",
      "GitHub Actions",
      "Release Risk",
      "Templates",
      "Audit Workflows",
    ],
  },
  {
    title: "Wildcode Infrastructure Docs",
    url: "https://docs.wildcode.studio/",
    type: "Infrastructure documentation / Runbooks",
    status: "Live",
    description:
      "Technical documentation and runbooks for Wildcode Studio infrastructure, environments and operational workflows.",
    proof: [
      "Documentation discipline",
      "Infrastructure ownership",
      "Runbook thinking",
      "Operational responsibility",
    ],
    tags: ["Docs", "Infrastructure", "Runbooks", "Wildcode", "Operations"],
  },
  {
    title: "Personal Website",
    url: "https://janduris.vercel.app/",
    type: "Personal portfolio",
    status: "Live",
    description:
      "This site: experience, open-source tools, writing and services, built with Next.js and deployed on Vercel.",
    proof: [
      "Personal positioning",
      "Frontend deployment",
      "Clear technical communication",
      "Vercel-based delivery",
    ],
    tags: ["Next.js", "Vercel", "Portfolio", "Personal Brand"],
  },
];

export const skills = [
  {
    category: "QA & Testing",
    practicalUse:
      "Finding bugs, validating releases, improving test coverage and helping teams ship with fewer surprises.",
    capabilities: [
      "Manual testing",
      "Exploratory testing",
      "Regression testing",
      "E-commerce QA",
      "Internal business platform testing",
      "3rd party integrations testing",
      "CRM testing",
      "OMS testing",
      "Mobile testing",
      "Bug reporting",
      "Test cases",
      "Jira",
      "Confluence",
      "Acceptance criteria",
      "QA workflows",
      "Risk-based testing",
      "Release validation",
    ],
  },
  {
    category: "Automation",
    practicalUse:
      "Building regression checks, reducing repeated manual work and making test suites easier to maintain.",
    capabilities: [
      "Playwright",
      "TypeScript",
      "Python",
      "pytest",
      "Robot Framework",
      "Selenium",
      "Automation testing",
      "C#",
      "API testing",
      "Test data handling",
      "Regression automation",
      "CI test runs",
      "Test stability",
      "Maintainable test suites",
    ],
  },
  {
    category: "CI/CD & DevOps",
    practicalUse:
      "Pipelines that tell the truth: quality gates that block what matters, containerised test runs and release automation.",
    capabilities: [
      "GitHub Actions",
      "CI/CD",
      "GitHub",
      "Docker",
      "docker compose",
      "Quality gates",
      "Release automation",
      "TeamCity",
      "Azure DevOps pipelines",
      "Bash",
      "Linux",
    ],
  },
  {
    category: "E-commerce / Business Systems",
    practicalUse:
      "Testing connected business flows across commerce, CRM, OMS, licensing, tenant and support-case systems.",
    capabilities: [
      "CRM",
      "OMS",
      "Vinculum",
      "Radial",
      "Orob",
      "ORCE",
      "Jakala",
      "NetSuite",
      "Salesforce Cloud",
      "Tenant management",
      "License creation/testing",
      "Support cases handling/testing",
    ],
  },
  {
    category: "Engineering Tools",
    practicalUse:
      "Working with everyday engineering, release, build and delivery tools used around QA workflows.",
    capabilities: [
      "Jira",
      "Confluence",
      "VS Code",
      "SQL",
      "PostgreSQL",
      "Linux / Fedora / Ubuntu",
    ],
  },
  {
    category: "Engineering Stack",
    practicalUse:
      "Building and deploying small products, internal tools, SaaS prototypes and QA-focused web applications.",
    capabilities: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub",
      "Vercel",
      "Cloudflare",
      "Hetzner VPS",
      "API integrations",
      "Stripe basics",
      "Webhooks",
    ],
  },
  {
    category: "AI / Internal Tools",
    practicalUse:
      "Using AI as a practical accelerator for analysis, documentation, debugging, planning and internal workflow automation.",
    capabilities: [
      "AI-assisted engineering",
      "Prompt-driven development",
      "Local LLM testing",
      "Ollama",
      "Multi-agent workflows",
      "Autonomous agent systems",
      "QA intelligence tooling",
      "Release decision support",
      "Documentation automation",
    ],
  },
  {
    category: "Product / Founder",
    practicalUse:
      "Turning real QA problems into tools, workflows, templates and productized services.",
    capabilities: [
      "Dulvarn",
      "Wildcode Studio",
      "Release control",
      "QA audits",
      "QA templates",
      "B2B SaaS thinking",
      "Internal dev hub",
      "Product roadmap thinking",
      "Monetization planning",
    ],
  },
];

export const languages = [
  { language: "Slovak", level: "Native" },
  { language: "Czech", level: "Native" },
  { language: "English", level: "Advanced" },
  { language: "German", level: "Basics" },
];

export const proofExamples = [
  {
    title: "Work",
    description:
      "Baťa, Flowio and SolarWinds experience across e-commerce, broker web application and enterprise software QA.",
  },
  {
    title: "Product",
    description:
      "Dulvarn and Dulvarn Tools show the ability to turn QA problems into product concepts and working web properties.",
  },
  {
    title: "Engineering",
    description:
      "Hands-on work with Next.js, FastAPI, PostgreSQL, Redis, Docker, Vercel, Cloudflare, Hetzner VPS and Linux workflows.",
  },
  {
    title: "Automation",
    description:
      "Growing automation direction with Python, Robot Framework, Selenium, Playwright, TypeScript, API testing and CI/CD quality checks.",
  },
];

export const proofOfWork = [
  {
    title: "Real QA background",
    description:
      "Enterprise software, broker web application and e-commerce/internal platform QA experience.",
  },
  {
    title: "Automation direction",
    description:
      "Growing automation practice with Python, Robot Framework, Selenium, Playwright / TypeScript automation focus, API testing and CI test workflows.",
  },
  {
    title: "Product building",
    description:
      "Dulvarn, Dulvarn Tools and Wildcode systems show the ability to turn QA problems into working products and tools.",
  },
  {
    title: "Engineering ownership",
    description:
      "Hands-on work with web apps, APIs, databases, deployment, infrastructure, documentation and AI-assisted workflows.",
  },
];

export const beyondTheWork = {
  intro: [
    "I’m not only interested in testing software — I’m interested in understanding systems.",
    "QA taught me to look for weak spots, edge cases and hidden risks. Product building taught me to turn those observations into tools, workflows and clearer decisions.",
    "Outside of work, I’m a curious builder who likes learning, simplifying complex problems and creating practical systems that help people work with more confidence.",
  ],
  cards: [
    {
      title: "Systems thinker",
      description:
        "I like understanding how things work, where they break and how to make them more reliable.",
    },
    {
      title: "Practical builder",
      description:
        "I prefer useful tools, clear workflows and small improvements that create real value.",
    },
    {
      title: "Continuous learner",
      description:
        "My current focus is growing deeper in QA automation, release quality and AI-assisted engineering.",
    },
  ],
};

export const buildingToward = [
  "Stronger automation engineering",
  "Better release quality workflows",
  "Practical QA tooling",
  "CI/CD quality checks",
  "AI-assisted QA workflows",
  "Smaller useful tools shipped faster",
];
