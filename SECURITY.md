# Security policy

## Reporting a vulnerability

Do not publish secrets, access tokens, private keys, customer data, internal
documents, or reproducible exploit details in an issue, discussion, pull
request, example, or field report.

Once the public GitHub repository exists and private vulnerability reporting is
enabled, use GitHub's private vulnerability-reporting flow for the repository.
Until that route is enabled, do not open a public report containing sensitive
details. Preserve the minimum information needed to reproduce the issue and
wait for a private route rather than exposing others.

## Scope

This repository is text-only Agent Skills content. Security-relevant concerns
may include unsafe instructions, secret-handling guidance, prompt-injection
paths that could cause an unauthorized external action, or a dependency and
installer instruction that directs users to an untrusted location.

Security reports should include the affected file and revision, impact,
preconditions, safe reproduction steps, and a suggested mitigation when one is
available. Do not include a live credential or another person's data.
