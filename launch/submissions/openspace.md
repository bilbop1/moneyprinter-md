# OpenSpace

## Verdict

**P2 - philosophically strong fit, operationally heavier than the direct
directories.** OpenSpace emphasizes skill trust, lineage, and task-result
quality records, which fits the receipts-first thesis. Its upload path requires
local setup and trusted skill records rather than a simple URL form.

**Status:** blocked on OpenSpace installation, owner-scoped cloud auth, local
trust records, host evidence, and a public-visibility decision. Nothing has been
uploaded.

## Current official submission path

OpenSpace documents public cloud skill packages and the CLI:

```sh
openspace-upload-skill --skill-dir "$PWD/skills/moneyprinter"
```

Cloud upload requires the matching local SkillStore record to be trusted. The
project also supports owner-scoped cloud keys provisioned with
`openspace-cloud-auth bootstrap-agent-key`.

Source: [official HKUDS/OpenSpace repository](https://github.com/HKUDS/OpenSpace).

## Prerequisites

- Install a current OpenSpace release in an isolated environment.
- Provision an owner-scoped cloud key without placing secrets in chat or docs.
- Import/register each MoneyPrinter skill locally.
- Run real tasks and complete the documented trust process.
- Decide package name, visibility, and which evidence can be published safely.
- Redact buyer, financial, credential, and private session data from any trace.

## Exact commands

Run from the current OpenSpace installation after its own documentation and
trust state have been verified:

```sh
openspace-cloud-auth bootstrap-agent-key
openspace-upload-skill --skill-dir "$PWD/skills/moneyprinter"
```

Repeat the upload for a companion skill only after that skill has its own
trusted local record. The absolute path is machine-specific and must not be
copied into public documentation.

## Listing title

Package:

> MoneyPrinter.md - receipts-first revenue experiments

Primary skill:

> moneyprinter

## Short description

> With permission, scan 14 days of detected, accessible AI sessions, confirm
> the read once, and work one cash-first route through receipts and reranking.

## Long description

> MoneyPrinter.md is a seven-skill package for legitimate revenue experiments.
> The current host scans only detected, permitted session sources it can access,
> reports coverage gaps, and asks for one correction. Cash evidence and payable
> speed drive the route choice. The run continues through private research,
> offer work, test design, acquisition preparation, and delivery preparation.
> A specific approval gates one exact external action. Its receipt and result
> feed the next ranking. Every outcome keeps its evidence level, and public
> traces must be redacted.

## Tags

`business-validation`, `revenue-operations`, `evidence`, `quality`,
`human-in-the-loop`

## Links required

- Confirmed source repository.
- Confirmed landing page.
- Public, redacted quality/eval artifacts where OpenSpace supports them.

## Assets required

No promotional asset is required by the documented CLI upload. Package metadata
and safe quality records matter more.

## Expected discovery mechanism

Public package browsing, skill search, lineage, version history, and quality
summaries tied to task records.

## Review risks

- The current five persona runs are simulations, not the real-task evidence
  OpenSpace is designed to value.
- Uploading traces can leak private business data if not redacted.
- A skill must be trusted locally before cloud upload; bypassing that boundary
  would defeat the point of the channel.
- OpenSpace setup cost is too high for the first launch gate.

## Final human action

Use OpenSpace only after the P0 launch and genuine host trials. The owner must
review every public package field and every trace proposed for upload.
