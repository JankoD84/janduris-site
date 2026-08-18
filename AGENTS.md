# janduris-site Agent Instructions

This is the public personal portfolio website for the site owner and a Next.js software repository. Treat it as public professional publishing, not as a generic web app.

## Start Here

1. Confirm repository state before implementation:
   - `git status -sb`
   - `git branch --show-current`
   - `git log -1 --oneline`
   - `git diff --stat`
2. Read `.ai/repo/repository-context.md` and `.ai/repo/architecture.md`.
3. Classify the task using `.ai/repo/content-and-claims.md`.
4. Read only the relevant `.ai/governance/*` files and native skills under `.agents/skills/*`.
5. Follow `.ai/process/implementation-workflow.md` or `.ai/process/review-workflow.md`.

## Non-Negotiable Boundaries

- Personal claims require current approved site content, explicit owner-provided facts, or an authoritative source supplied for the task.
- Project/product claims about Dulvarn, Wildcode, agent systems, tools, or other external systems require their canonical source or explicit owner confirmation before material changes.
- Private context available to an AI is not approved public website content.
- Do not introduce, expand, or duplicate personal contact data unless explicitly required and approved.
- Do not expose secrets, server-only credentials, contact submissions, private URLs, account identifiers, or environment values.
- SEO metadata, Open Graph text, structured data, and social previews follow the same truthfulness rules as visible page content.
- Sample or illustrative metrics must remain clearly labeled and must not become proof of real results.
- Deployment, production publication, Vercel changes, environment mutation, and external-service mutation require explicit approval.

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

## Validation Expectations

Use the smallest safe validation set for the task. For application changes, prefer:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Do not install dependencies merely for standards/docs work. Do not send real contact messages or deploy as validation.
