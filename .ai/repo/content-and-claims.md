# Content and Claims Model

## Central Rules

- Personal claim != verified fact.
- Marketing copy != permission to invent experience.
- Portfolio project claim != canonical project source of truth.
- Current repository content != guarantee that the claim is still current.
- Sample/illustrative metric != production metric.
- Public website content != permission to use private context.
- SEO metadata != exemption from truthfulness.

A polished sentence is never justification for inventing years of experience, employment dates, responsibilities, achievements, clients, customers, certifications, skills, proficiency levels, revenue, users, adoption, production scale, security posture, project maturity, project status, infrastructure provider, or deployment state.

## Claim Classes

### A. Repository-Verifiable Fact

Facts directly verifiable from this repository.

Examples:

- framework/tooling versions
- routes
- component/API behavior
- CI commands
- implemented contact API behavior

Use the current source as authority, and cite the relevant file when changing or reviewing.

### B. Owner-Declared Personal Fact

Personal, work, education, language, skill, title, and professional-positioning facts explicitly supplied or approved by the owner.

Examples:

- employment history
- professional title
- education/training
- language level
- approved public contact choices

Do not expand beyond the approved statement. Repository existence or technology usage does not prove expertise level.

### C. Project-Derived Claim

Claims about Dulvarn, Wildcode, agent systems, tools, or other external projects.

These require verification against that project's canonical source or explicit owner confirmation before material changes. This portfolio may present those projects, but it does not own all domain truth about their architecture, implementation, production state, adoption, or roadmap.

### D. Marketing / Positioning

Subjective positioning is allowed when it does not create unsupported factual claims.

Allowed style:

- direction, focus, intent, positioning, values, and framing

Not allowed without proof:

- stronger employment claims
- unsupported scale
- customer/adoption claims
- production-readiness claims
- security/compliance guarantees

### E. Sample / Illustrative Data

Fake, example, demo, or illustrative metrics are allowed only when clearly labeled. Do not turn illustrative data into proof of real outcomes, product telemetry, customer evidence, release statistics, coverage claims, or case-study results.

## Task Risk Classes

- A: Standards/docs/editor-only — normal implementation review.
- B: Styling/layout/non-content UI — normal implementation review plus responsive/accessibility consideration.
- C: Component/refactor behavior — behavior validation required.
- D: Public content/copy — content truth review required.
- E: Personal professional claims — strong owner/source verification required.
- F: Project/product claims — canonical project or owner verification required.
- G: SEO/metadata/structured data — truthfulness and technical review required.
- H: Contact form/PII handling — privacy/security review required.
- I: External integration/environment configuration — secret/integration review required.
- J: Deployment/production publication — explicit deployment approval required.

When a task spans multiple classes, apply the highest-risk applicable class.

## Forbidden Inferences

Do not infer:

- technology usage -> expert status
- prototype existence -> production platform architecture
- project reference -> successful commercial product
- public link -> ownership/current health/maturity
- CI passing -> live production health
- email API accepted -> guaranteed human delivery
- private AI context -> approved public website content
