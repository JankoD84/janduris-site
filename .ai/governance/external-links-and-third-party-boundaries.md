# External Links and Third-Party Boundaries

## Current Link Handling

The site links to project sites, social profiles, code hosting, product sites, documentation, and other external services. Shared external text links use `target="_blank"` and `rel="noreferrer"`.

A link proves only that the portfolio references a URL.

It does not prove:

- ownership
- current availability
- production health
- project maturity
- endorsement
- authorization
- feature completeness
- commercial adoption

## Rules

- Do not change external URLs during standards-only work.
- Do not infer project state from the existence of a link.
- Do not claim live health unless checked in scope.
- Do not claim ownership unless supported by approved source or owner confirmation.
- Do not expose private URLs, private dashboards, account identifiers, or provider consoles.

## Third-Party Services

External providers such as email delivery, hosting, code hosting, social networks, domains, and documentation hosting are separate operational boundaries. Local source and CI cannot prove their live health unless a task explicitly validates those systems.
