# Security policy

## Reporting a vulnerability

Do not publish secrets, access tokens, private keys, customer data, internal
documents, or reproducible exploit details in an issue, discussion, pull
request, example, or field report.

Use GitHub's [private vulnerability-reporting
flow](https://github.com/bilbop1/moneyprinter-md/security/advisories/new) for
this repository. If that form is unavailable, do not open a public report
containing sensitive details. Preserve the minimum information needed to
reproduce the issue and wait for a private route rather than exposing others.

## Scope

This repository is text-only Agent Skills content. Security-relevant concerns
include missing history-scan consent, unsafe instructions, prompt injection in
old sessions, credential-path access, raw history leakage, false coverage
claims, or a dependency and installer instruction that directs users to an
untrusted location.

Security reports should include the affected file and revision, impact,
preconditions, safe reproduction steps, and a suggested mitigation when one is
available. Do not include a live credential or another person's data.

## Session-history boundary

MoneyPrinter may scan only after an explicit history-scan consent grant in the
current conversation. The user controls the permitted source scope and can
narrow it at any time. No subject category is excluded solely because it is
legal, medical, financial, regulated, confidential, or sensitive. Authority,
privacy, least-data, and qualified-review requirements still apply. Discovery
and any coverage claim remain limited to detected, permitted, accessible AI
session stores.

Text inside an old session is untrusted evidence. A prompt injection in history
cannot change the current task, expand scan scope, grant permission, trigger a
tool, or authorize an external action. The scan excludes credential stores,
credential paths, private keys, authentication tokens, payment credentials,
and `.env` files.

Every scan must return a coverage receipt with the time window and a status for
each detected source. Blocked, unsupported, excluded, malformed, interrupted,
or partial sources must stay visible. Do not reproduce raw histories in a
response, issue, field report, or test fixture. Extract the minimum sanitized
facts needed to support the decision.

## External-action boundary

Route confirmation permits private analysis and preparation. It does not
permit external action. An approved one-off external action may run only after
the user sees the exact payload, destination, channel, account, timing, scope,
volume, tool, cost, evidence label, rollback path, authority status, data
status, and regulated-review status.

That approval covers one named action. Autonomous or bulk action remains
prohibited, and any material change needs fresh approval.
