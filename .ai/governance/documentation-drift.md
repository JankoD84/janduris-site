# Documentation Drift

## README vs Implementation

README is useful project documentation but is not more authoritative than current implementation.

Verified drift candidates from current inspection:

1. README describes the contact form API route and Resend email delivery under planned/optional integrations, while `app/api/contact/route.ts` and `app/contact/ContactPage.tsx` are currently implemented.
2. README lists environment variables for the contact form that align with the runtime contact API, but CI currently sets a different recipient-like environment variable name for the build step.
3. README and current site content include Hetzner/Hetzner VPS references, while owner-declared current infrastructure truth for this wave says Scaleway is the current operational cloud provider and Hetzner is no longer current.

Do not fix README, CI, or runtime content during standards-only work. Record drift and require an explicit content/config task before changing public content or CI.

## Drift Handling

When drift is found:

- identify the conflicting files
- classify the affected claim or config area
- avoid guessing intended truth
- do not silently rewrite public claims
- ask for owner confirmation when personal/current-provider facts are involved
- use canonical project sources for external project details

## Stale/Historical Provider References

Classify current Hetzner references as stale or historical relative to the owner-declared current provider choice. Do not describe Hetzner as current infrastructure. Do not automatically replace text with Scaleway or infer Scaleway implementation details.
