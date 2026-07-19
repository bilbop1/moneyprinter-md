# ClawHub / OpenClaw

## Verdict

**P0 — exact registry fit, with a license decision.** ClawHub can give each
MoneyPrinter skill a versioned, searchable page with install commands, download
counts, stars, tags, changelogs, and scan state.

**Status:** blocked on ClawHub authentication, the confirmed publisher handle,
the public source URL, and an explicit owner decision about MIT-0 publication.
Nothing has been uploaded.

## Current official submission path

ClawHub's authenticated CLI publishes a skill folder containing `SKILL.md`.
For a repository with immediate skill folders under `skills/`, its documented
sync command can preview and publish all changed skills.

Sources: [official ClawHub overview](https://docs.openclaw.ai/clawhub),
[publishing guide](https://docs.openclaw.ai/clawhub/publishing),
[CLI reference](https://docs.openclaw.ai/clawhub/cli), and
[skill format](https://docs.openclaw.ai/clawhub/skill-format).

## Prerequisites

- Public GitHub source works logged out.
- Install the current `clawhub` CLI.
- Authenticate with a GitHub account that passes ClawHub's upload gate.
- Confirm the personal or organization publisher handle.
- Review the scan output for all seven folders.
- **Owner accepts that ClawHub currently publishes skills under MIT-0.** The
  repository uses MIT and each `SKILL.md` currently declares MIT. Do not publish
  until the intended licensing treatment is resolved.

## Exact commands

```sh
npm install -g clawhub
clawhub login
clawhub whoami
clawhub sync --root ./skills --all --dry-run
```

Only after the dry run is clean and the license decision is recorded:

```sh
clawhub sync --root ./skills --all
```

Do not add an `--owner` value until `clawhub whoami` or the dashboard confirms
the exact handle.

## Listing title

Use the canonical skill names rather than renaming them for promotion:

- `moneyprinter`
- `opportunity-radar`
- `offer-engine`
- `payable-test`
- `ethical-acquisition`
- `delivery-proof`
- `cashflow-review`

## Short description

Primary `moneyprinter` listing:

> Interview a user's real assets and constraints, then route toward one
> credible revenue experiment or the smallest safe discovery step with
> receipts-first evidence labels.

## Long description

> MoneyPrinter is the router for a seven-skill revenue workflow. It creates a
> Revenue Profile, compares at most three routes, recommends one route and one
> fallback, then defines a payable test when credible or the smallest safe
> discovery step when it is not. It asks for approval before buyer-facing work.
> Companion skills cover evidence-backed opportunity research, a narrow offer,
> test design, permissioned acquisition drafts, delivery proof, and a
> stop/revise/repeat/scale review. It does not promise income or perform
> external actions without specific human approval.

## Tags

`business`, `revenue`, `validation`, `research`, `human-in-the-loop`,
`open-source`

## Links required

- Public source repository.
- Confirmed landing page.
- Support/security route in the repository.

## Assets required

No promotional image is required by the documented skill CLI flow. Keep the
source repository's social preview current.

## Expected discovery mechanism

- OpenClaw and ClawHub search.
- Seven canonical skill pages.
- Downloads, stars, tags, changelogs, and latest-version pages.
- Security scan summaries that let users inspect before installation.

## Review risks

- MIT versus MIT-0 is a real publication decision, not a formatting detail.
- The word “money” may trigger extra security/moderation scrutiny; the
  descriptions must lead with bounded tests, evidence labels, and approval.
- Publishing seven skills creates seven artifacts to version and maintain.
- A blocked scan may hide a release from public search/install surfaces.

## Final human action

Review the exact dry-run plan, confirm the publisher and license decision, then
approve or decline the real `clawhub sync` command. Inspect every resulting
public page logged out before linking it.
