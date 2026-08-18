---
name: contact-form-work
description: Use for contact page, contact API route, form validation, server-side email delivery, Resend integration, or contact fallback behavior.
---

# Contact Form Work

Read:

- `.ai/repo/architecture.md`
- `.ai/governance/contact-form-and-external-service-safety.md`
- `.ai/governance/public-content-and-pii.md`
- `.ai/repo/validation.md`

Contact submissions may contain personal data. Do not log form contents unnecessarily, expose server-only credentials, create `NEXT_PUBLIC_*` secrets, or claim compliance/delivery/anti-spam guarantees not proven by source.

Do not send real contact messages or intentionally call the email provider without explicit approval.
