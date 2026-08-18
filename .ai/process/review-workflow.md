# Review Workflow

## 1. Establish Context

Run or verify:

```bash
git status -sb
git branch --show-current
git log -1 --oneline
git diff --stat
```

Read:

- `AGENTS.md`
- `.ai/repo/repository-context.md`
- `.ai/repo/architecture.md`
- `.ai/repo/content-and-claims.md`
- relevant `.ai/governance/*`

## 2. Classify the Review

Apply the highest applicable risk class:

- public content/copy
- personal professional claim
- project/product claim
- SEO/metadata/structured data
- contact/PII handling
- external integration/environment
- deployment/publication

## 3. Review for Correctness and Safety

Check:

- source-backed repository facts
- no invented personal history, skill level, dates, achievements, customers, revenue, adoption, production scale, security posture, or certifications
- project claims verified against canonical project source or explicit owner confirmation
- sample metrics remain illustrative
- metadata follows visible-content truth rules
- no secret or private context is exposed
- contact submissions are treated as personal data
- external providers and links are represented with correct boundaries
- local/CI/build success is not overstated

## 4. Review Technical Behavior

For code changes, inspect:

- runtime behavior changes
- accessibility and keyboard/focus behavior
- responsive behavior
- form validation and error states
- environment variable handling
- client/server boundary
- external-service failure paths

## 5. Validate Claims About Validation

Only accept validation claims that were actually run and passed. Distinguish:

- local lint/typecheck/build
- CI workflow configuration
- deployed production state
- external integration health

## 6. Report Findings

Group findings by severity. Include file paths and actionable recommendations. Do not rewrite or commit fixes during review unless the user explicitly requested implementation.
