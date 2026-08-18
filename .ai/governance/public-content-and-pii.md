# Public Content and PII

## Public Repository Rule

This repository is public. Treat committed values as globally visible and persistent.

PUBLICLY CHOSEN CONTACT DATA != PRIVATE PERSONAL CONTEXT.
PRIVATE CONTEXT AVAILABLE TO AI != APPROVED PUBLIC WEBSITE CONTENT.

## Existing Public Contact Data

The current source contains public contact/profile data. Do not duplicate it unnecessarily into standards, reviews, prompts, or generated docs. Refer generically to:

- public email contact
- public phone contact
- public LinkedIn profile
- public GitHub profile

Do not infer additional contact paths.

## Never Introduce Without Explicit Approval

Do not add:

- home address
- family details
- children's information
- private phone numbers not already approved for publication
- financial information
- IDs/documents
- private employer information
- private account identifiers
- credentials or tokens
- private certificates
- personal context from unrelated conversations

## Contact Submissions

Contact form submissions may contain personal data such as sender name, email, subject, and free-text message. Treat contact API work as privacy/security-sensitive.

Rules:

- do not log form contents unnecessarily
- do not expose server-only credentials client-side
- do not put API keys into `NEXT_PUBLIC_*` variables
- do not invent data-retention guarantees
- do not claim GDPR/privacy compliance unless explicitly established
- recognize external email delivery as an external processing boundary

## Public PII Changes

Any change to public contact data is a higher-risk public-content change and requires explicit owner approval or an authoritative supplied source.
