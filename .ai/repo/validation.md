# Validation

Use the smallest safe validation set that matches the task risk class.

## Standards / Docs / Editor-Only Changes

For changes limited to `AGENTS.md`, `CLAUDE.md`, `.ai/**`, `.agents/**`, or `.zed/**`:

1. `git status -sb`
2. Validate JSON if `.zed/*.json` changed:
   - `python3 -m json.tool .zed/settings.json >/dev/null`
   - `python3 -m json.tool .zed/tasks.json >/dev/null`
3. Validate native skill frontmatter:
   - frontmatter exists
   - `name` exists
   - `description` exists
   - `name` equals folder name
   - name is lowercase hyphenated
4. `git diff --check`
5. Explicitly scan new/untracked standards files for trailing whitespace.
6. Prove protected runtime scope was not changed with `git diff --exit-code -- <path>` for protected paths when required by the task.

## Application Changes

When runtime/source/content changes are explicitly in scope, prefer:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Do not install dependencies solely for standards/docs work. If dependencies are absent, report application validation as incomplete rather than modifying `package-lock.json`.

## Contact Form / External Email

Do not send real contact messages as validation unless explicitly approved for that task. Do not intentionally call the email provider during standards work.

For contact API code changes, validate locally with safe unit-level or mocked checks when available. Never print secrets or form submission contents.

## Deployment

Do not deploy, mutate Vercel configuration, change environment variables, or publish production changes without explicit approval.

Local build pass != Vercel deploy pass.
Vercel deploy pass != all external integrations healthy.
Public URL availability != current content accuracy.
