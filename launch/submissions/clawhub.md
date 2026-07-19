# ClawHub / OpenClaw

## Verdict

**P0 — exact registry fit.** ClawHub can give each
MoneyPrinter skill a versioned, searchable page with install commands, download
counts, stars, tags, changelogs, and scan state.

**Status:** live. On 2026-07-19, ClawHub CLI 0.23.1 authenticated as
`@bilbop1`, the provenance-pinned dry run found exactly seven new skills with
zero failures, and all seven v1.0.0 releases were published. SkillSpector later
marked every package clean and the dashboard changed each listing to visible.

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
- Keep the GitHub repository under MIT. ClawHub's current CLI reference says a
  published skill is released there under MIT-0; its publishing guide omits
  that detail. Treat the ClawHub submission as a separately licensed copy.

## Exact commands

```sh
npm install -g clawhub@0.23.1
clawhub login
clawhub whoami
clawhub sync \
  --root ./skills \
  --all \
  --dry-run \
  --owner bilbop1 \
  --source-repo https://github.com/bilbop1/moneyprinter-md \
  --source-ref main \
  --source-commit 61549ff7440331588fd43b6c0707e8d783c51144 \
  --bump patch
```

Only after the dry run is clean:

```sh
clawhub sync \
  --root ./skills \
  --all \
  --owner bilbop1 \
  --source-repo https://github.com/bilbop1/moneyprinter-md \
  --source-ref main \
  --source-commit 61549ff7440331588fd43b6c0707e8d783c51144 \
  --bump patch \
  --tags latest
```

For a future release, replace the pinned source commit with the exact tested
commit and select the intentional semantic-version bump. Do not reuse this
command blindly.

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

- Keep the repository and skill metadata license declarations consistent.
- The word “money” may trigger extra security/moderation scrutiny; the
  descriptions must lead with bounded tests, evidence labels, and approval.
- Publishing seven skills creates seven artifacts to version and maintain.
- A blocked scan may hide a release from public search/install surfaces.

## Final human action

No publication action remains for v1.0.0. Maintain source provenance on future
syncs, review the dry run, use the correct semantic version bump, and inspect
the resulting public pages before linking them.

Primary public listing:

`https://clawhub.ai/bilbop1/skills/moneyprinter`
