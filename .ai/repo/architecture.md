# Architecture

## Application Shape

`janduris-site` is a Next.js App Router portfolio website.

Verified structure:

- `app/layout.tsx` defines root metadata, canonical URL, Open Graph fields, HTML language, and global layout shell insertion.
- `app/page.tsx` is the homepage and renders hero positioning, contact icons, featured proof, an illustrative release signal, and open-to sections.
- Route pages live directly under `app/<route>/page.tsx`.
- Shared UI lives in `app/components.tsx`.
- Central public-site content lives in `app/content.ts`.
- Styling uses Tailwind utility classes plus `app/globals.css` for global styling and hero animation.
- Contact form client UI lives in `app/contact/ContactPage.tsx`.
- Contact API lives in `app/api/contact/route.ts`.

## Public Routes

Current public routes from source:

- `/`
- `/about`
- `/work`
- `/proof`
- `/projects`
- `/websites`
- `/skills`
- `/contact`
- `/cv`
- `/api/contact` (`POST` API route)

## Content Architecture

`app/content.ts` centralizes major public-site content used by pages and components, including:

- profile identity and public contact fields
- navigation and mobile-only navigation
- open-to positioning
- illustrative release-readiness snapshot data
- homepage signal/proof cards
- about copy
- capabilities
- work history
- education
- projects
- websites
- skills
- languages
- proof examples
- proof-of-work cards
- beyond-the-work copy
- building-toward direction

This file is the implementation source for much of what this site displays. It is not automatically the canonical source of truth for external project architecture, provider state, employment records outside this site, or current operational infrastructure outside this repository.

## Component Behavior

`app/components.tsx` provides:

- `SiteShell` with fixed header, responsive navigation, footer, and mobile menu state
- section/card helpers
- release signal visualization
- work timeline
- skills matrix
- project and website cards
- external text links using `target="_blank"` and `rel="noreferrer"`
- contact links and icon links sourced from `profile`

## Contact Form Architecture

The contact page is a client component that:

- maintains local form state for name, email, subject, message, and a hidden website honeypot field
- posts JSON to `/api/contact`
- falls back to direct email/mailto when the API is unavailable or email service configuration is missing
- renders status feedback with `role="status"`
- does not perform CAPTCHA or rate limiting in the current source

The API route:

- accepts JSON only through `POST`
- trims fields
- requires name, email, subject, and message
- validates a simple email pattern
- enforces maximum lengths: name 120, email 160, subject 160, message 3000
- treats a non-empty `website` field as a honeypot and returns a generic success message
- reads server-side environment variables for recipient, sender, and email provider API key
- calls `https://api.resend.com/emails`
- returns `500` when email service configuration is missing
- returns `502` when the provider request fails
- returns success when the provider request is accepted by the API

Do not claim durable delivery, inbox placement, CAPTCHA, rate limiting, abuse prevention, storage, or compliance guarantees unless separately implemented and verified.

## Metadata

Metadata exists in:

- `app/layout.tsx` for root title, description, canonical URL, and Open Graph values
- individual route pages for page-level title/description metadata

Metadata is public content and must follow the same claim rules as visible text.

## CI and Validation Architecture

GitHub Actions workflow `.github/workflows/ci.yml` currently:

- runs on pushes to `main`, pull requests targeting `main`, and manual dispatch
- uses Ubuntu latest
- checks out the repository
- sets up Node `22` with npm cache
- runs `npm ci`
- runs `npm run lint`
- runs `npx tsc --noEmit`
- runs `npm run build`
- sets one contact-related environment variable for the build step

CI proves only the configured install/lint/typecheck/build path for the repository state under that workflow. It does not prove E2E behavior, accessibility, visual regression, email delivery, external-link health, SEO correctness, personal-claim correctness, privacy compliance, Vercel production health, or external integration health.
