# KillerSkills

## Verdict

**P2 - exact skill-marketplace fit with a simple per-file submission path, but
reach is not independently validated.** KillerSkills accepts a public
`SKILL.md` URL, validates and safety-scans it, and publishes approved content to
its marketplace.

**Status:** public source ready; blocked on owner sign-in and inspection of the
authenticated submission flow. Nothing has been submitted or listed.

## Current official submission path

Open [KillerSkills Submit](https://killerskills.ai/submit), sign in, choose
**Skill**, and provide a direct public URL to one `SKILL.md`. The page says
GitHub blob URLs are converted to raw URLs automatically. It documents format
validation, duplicate checks, and safety scanning before publication. Approved
content is published immediately; flagged content can require team review.

Source: [KillerSkills official submission page](https://killerskills.ai/submit).

## Prerequisites

- Public GitHub repository that works logged out.
- One stable public `SKILL.md` URL per submitted skill.
- Clear frontmatter name and description.
- Owner-controlled KillerSkills account.
- Review of the authenticated fields and current terms before submission.
- Inspection of the parsed content, scan result, and public page before sharing.

## Exact repository values

Submit the router first, only after logged-out confirmation:

```text
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/moneyprinter/SKILL.md
```

If the first listing is accurate, the companion source paths are:

```text
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/opportunity-radar/SKILL.md
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/offer-engine/SKILL.md
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/payable-test/SKILL.md
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/ethical-acquisition/SKILL.md
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/delivery-proof/SKILL.md
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/cashflow-review/SKILL.md
```

## Listing title

Use each canonical frontmatter name, beginning with:

> moneyprinter

## Short description

> With permission, scan the last 14 days of detected, accessible AI CLI and GUI
> sessions, confirm the read once, and start the best cash-first route.

## Long description

> MoneyPrinter is the router for seven open-source revenue workflows. The
> current host scans only detected, permitted session sources it can access,
> reports gaps, and asks for one confirmation. Cash evidence and speed to a
> payable event drive the route choice. Companion skills continue through
> private research, offer work, test design, acquisition preparation, and
> delivery preparation. The agent pauses before one exact external action,
> records the specifically approved action, reviews the result, and reranks.
> MoneyPrinter keeps weaker signals separate from cash and does not promise
> income.

## Tags

Use only fields exposed by the authenticated form. Suggested values if tags are
supported:
`business`, `revenue`, `validation`, `research`, `human-in-the-loop`,
`open-source`.

## Links required

- One confirmed public `SKILL.md` URL per submission.
- Confirmed source repository if the authenticated form provides a separate
  project field.

## Assets required

No promotional asset is documented by the public submission page.

## Expected discovery mechanism

Marketplace browsing and search after approval, plus any current leaderboard
surface. Publication, placement, and traffic are not guaranteed.

## Review risks

- The form is per file; submitting seven skills creates seven records to inspect
  and maintain.
- "Published instantly" applies only to approved content, not flagged content.
- Automated validation or safety labels are not proof of host activation or
  business outcomes.
- Authenticated fields, terms, and moderation behavior can change.

## Final human action

The repository works logged out. Sign in and submit only the primary
`moneyprinter` URL. Inspect the parsed content, safety result, compatibility
claims, and public page before deciding whether to submit the six companions.
