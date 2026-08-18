# Sample Proof and Metrics

## Current Sample Release Signal

The homepage renders an example release-readiness card from `app/content.ts` via `ReleaseSignalCard` in `app/components.tsx`.

The current content explicitly labels the release signal as a visual representation of release quality thinking, not a production metric.

## Rule

SAMPLE UI DATA != PRODUCTION EVIDENCE.

Do not convert illustrative values into:

- case-study outcomes
- product telemetry
- real coverage claims
- release statistics
- customer evidence
- operational maturity claims
- proof of CI reliability
- proof of production quality

## Review Requirements

When editing proof sections:

1. classify whether values are factual, owner-declared, project-derived, marketing, or illustrative
2. preserve labels that distinguish sample/demo data from real production evidence
3. do not strengthen `What it proves` copy into unsupported proof of external project success
4. verify any real metric against an authoritative source before publishing
