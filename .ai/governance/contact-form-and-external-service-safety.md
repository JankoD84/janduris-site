# Contact Form and External Service Safety

## Current Contact Implementation

Verified source:

- UI: `app/contact/ContactPage.tsx`
- API: `app/api/contact/route.ts`
- External provider endpoint: `https://api.resend.com/emails`

The form fields are:

- name
- email
- subject
- message
- website honeypot field

Server-side validation currently:

- trims string fields
- requires name, email, subject, and message
- uses a simple email regex
- enforces maximum lengths: name 120, email 160, subject 160, message 3000
- returns a generic success response for non-empty honeypot submissions
- requires server-side recipient, sender, and provider API key environment variables
- returns configuration failure if email service variables are missing
- returns provider failure if the external provider request is not accepted

## Do Not Overclaim

Do not claim the form has robust anti-spam protection, CAPTCHA, rate limiting, bot protection, durable storage, encryption guarantees, abuse prevention, delivery guarantees, GDPR compliance, or privacy compliance unless source proves it.

## External Email Boundary

EMAIL API ACCEPTED REQUEST != GUARANTEED HUMAN DELIVERY.
PORTFOLIO API SUCCESS != PROOF OF FINAL EMAIL DELIVERY.

External email delivery is an external processing boundary. Do not expose credentials, account identifiers, or private provider configuration.

## Validation Boundary

Do not send real contact messages during standards validation. Do not intentionally call the email provider unless explicitly approved for a contact integration task.

## Environment Variable Drift

Current source reads `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY` in the contact API. Current CI build step sets `CONTACT_EMAIL_TO`. This appears to be a CI/config naming mismatch or drift. Record it as existing drift unless a future task explicitly authorizes a fix.
