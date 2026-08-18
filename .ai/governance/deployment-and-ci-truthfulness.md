# Deployment and CI Truthfulness

## Deployment Boundary

The site is Vercel-oriented, but deployment and production publication require explicit approval.

LOCAL BUILD PASS != VERCEL DEPLOY PASS.
VERCEL DEPLOY PASS != ALL EXTERNAL INTEGRATIONS HEALTHY.
PUBLIC URL != CURRENT CONTENT ACCURACY.

Do not deploy, mutate Vercel configuration, change environment variables, or publish production changes without explicit approval.

## Current CI

Verified `.github/workflows/ci.yml` currently:

- runs on pushes to `main`, pull requests targeting `main`, and manual dispatch
- uses `ubuntu-latest`
- checks out with `actions/checkout@v4`
- sets up Node `22` with npm cache using `actions/setup-node@v4`
- runs `npm ci`
- runs `npm run lint`
- runs `npx tsc --noEmit`
- runs `npm run build`
- sets a contact-related environment variable for the build step

## What CI Proves

CI proves only that the configured install, lint, typecheck, and Next.js build commands succeeded in that workflow environment for that commit.

CI does not prove:

- browser/E2E behavior
- accessibility compliance
- visual regression correctness
- contact email delivery
- external email provider connectivity beyond build-time needs
- live Vercel deployment success
- external-link health
- SEO correctness
- personal-claim correctness
- project-claim correctness
- privacy/GDPR compliance
- runtime production health

## CI/Environment Drift

The contact API reads one recipient environment variable name while current CI sets a different recipient-like name for build. Treat this as existing CI/config/documentation drift unless a future task explicitly authorizes a fix.
