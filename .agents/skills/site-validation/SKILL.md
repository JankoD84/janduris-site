---
name: site-validation
description: Use for validating standards files, Zed JSON, native skill frontmatter, protected-scope checks, lint, typecheck, build, or final pre-report verification.
---

# Site Validation

Read:

- `.ai/repo/validation.md`
- `.ai/process/implementation-workflow.md`

For standards/docs/editor-only work, validate JSON, skill frontmatter, trailing whitespace, protected runtime scope, `git diff --check`, `git diff --stat`, and `git status -sb`.

For application changes, prefer `npm run lint`, `npx tsc --noEmit`, and `npm run build` when dependencies are already installed.

Do not deploy, send real contact messages, mutate environment variables, or call external services during validation unless explicitly approved.
