# Implementation Workflow

## 1. Precheck

Before implementation:

```bash
git status -sb
git branch --show-current
git log -1 --oneline
git diff --stat
```

Stop if unexpected modified, staged, or untracked files exist.

## 2. Understand Scope

- Identify whether the task is standards/docs, UI, behavior, public content, personal claim, project claim, metadata, contact/PII, integration, or deployment.
- Read `.ai/repo/content-and-claims.md` and classify the task.
- Read only the relevant `.ai/governance/*` files and native skills.
- Inspect relevant source files before editing.

## 3. Respect Protected Scope

Do not modify protected runtime/content/config/CI files unless the task explicitly authorizes it.

For Standards V2 work, allowed paths are only:

- `AGENTS.md`
- `CLAUDE.md`
- `.ai/**`
- `.agents/**`
- `.zed/**`

## 4. Make the Smallest Correct Change

- Preserve public contracts unless the task explicitly changes them.
- Do not introduce dependencies without clear justification.
- Do not rewrite portfolio content during governance/editor work.
- Do not fix unrelated drift discovered during inspection; document it instead.
- Do not add comments or docs that duplicate personal contact values or private context.

## 5. Truthfulness Gate

Before finalizing content or metadata changes, verify:

- personal claims have approved/source support
- project claims have canonical project or owner support
- sample metrics remain labeled as illustrative
- external links are not over-interpreted
- SEO text does not exaggerate facts
- private context is not published

## 6. Validate

Use `.ai/repo/validation.md`.

For application changes, run targeted checks first, then broader checks when justified. Do not install dependencies solely for standards/docs work.

## 7. Review Diff

Before final response:

```bash
git diff --stat
git status -sb
```

For protected-scope tasks, prove protected paths have no tracked diff.

## 8. Report

Include repository, branch, HEAD, files changed, validation performed, remaining risks/blockers, and a recommended commit message. Do not commit or push unless explicitly requested.
