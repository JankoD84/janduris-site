# SEO and Metadata Truthfulness

## Scope

Applies to:

- `app/layout.tsx` metadata
- page-level `metadata` exports
- Open Graph fields
- canonical descriptions
- social preview text
- future structured data or JSON-LD

Metadata is public content.

## Rule

SEO VALUE != PERMISSION TO INVENT FACTS.

Do not exaggerate professional identity, experience, skills, project maturity, customer adoption, production state, certifications, security posture, or infrastructure for keyword optimization.

## Structured Data

If schema.org or JSON-LD is added later, treat it as machine-readable factual publishing.

Do not add unsupported:

- employer relationships
- reviews or ratings
- awards
- certifications
- job titles
- organization affiliations
- product availability or commercial status

## Review Requirements

For metadata changes:

1. identify every factual claim in the metadata
2. classify claims with `.ai/repo/content-and-claims.md`
3. verify personal claims and project claims against allowed authority
4. ensure metadata does not strengthen visible page copy without source support
5. validate technical metadata behavior where practical
