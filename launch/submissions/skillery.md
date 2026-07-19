# Skillery

## Verdict

**P2 - exact GitHub-hosted skill-marketplace fit, with unvalidated reach.**
Skillery advertises submission of GitHub-hosted skills and marketplace
discovery for Claude Code, Codex CLI, and other agents.

**Status:** public source ready; blocked on owner sign-in and inspection of the
authenticated submission form. Nothing has been submitted or listed.

## Current official submission path

The [Skillery homepage](https://skillery.dev/) links **Submit from GitHub** to
`https://skillery.dev/submit`. At the 2026-07-19 review, the public submission
page required sign-in before exposing the form, and offered GitHub or Google
login. The homepage advertised marketplace search and hundreds of skills.

The direct submission page was intermittently fetchable during research. Treat
the homepage and sign-in gate as route evidence only; do not invent the hidden
form fields or promise that an import will be accepted.

Sources: [Skillery official homepage](https://skillery.dev/) and
[official submission gate](https://skillery.dev/submit).

## Prerequisites

- Public GitHub repository that works logged out.
- Detectable skill files with clear names and descriptions.
- Owner-controlled Skillery account using the intended GitHub or Google
  identity.
- Authenticated form fields, terms, and requested permissions reviewed live.
- Imported metadata and compatibility claims inspected before sharing.

## Exact repository value

Use only if the authenticated form asks for a repository URL and after
logged-out confirmation:

```text
https://github.com/bilbop1/moneyprinter-md
```

If the form instead requests one skill URL, start with:

```text
https://github.com/bilbop1/moneyprinter-md/blob/main/skills/moneyprinter/SKILL.md
```

Do not guess which value the hidden form accepts.

## Listing title

> MoneyPrinter.md

If Skillery creates one record per skill, preserve the canonical frontmatter
names instead.

## Short description

> Seven receipts-first Agent Skills turn a permissioned 14-day scan of
> detected, accessible AI sessions into one confirmed cash-first route.

## Long description

> MoneyPrinter.md is an open-source pack for legitimate revenue experiments.
> The current host scans only detected, permitted session sources it can access,
> reports gaps, builds a source-linked portfolio, and asks for one correction.
> Cash evidence and payable speed drive the route choice. Focused skills
> continue through private research, offer work, test design, acquisition
> preparation, and delivery preparation. The agent pauses before one exact
> external action, records the specifically approved action, reviews the
> result, and reranks. It does not promise income.

## Tags

Use only categories or tags displayed by the authenticated form. Suggested
values if supported:
`business`, `revenue`, `validation`, `agent-skills`, `human-in-the-loop`,
`open-source`.

## Links required

- Confirmed public repository or direct `SKILL.md` URL, according to the live
  form.
- Confirmed landing page only if a distinct website field exists.

## Assets required

No asset requirement was visible before sign-in on 2026-07-19. Recheck the
authenticated form.

## Expected discovery mechanism

Skillery marketplace browsing, search, and skill pages after acceptance or
import. Do not assign traffic expectations until a real listing and referral
data exist.

## Review risks

- The unauthenticated page does not reveal the final fields or moderation
  behavior.
- A multi-skill repository may import as one pack, seven skills, or fail; inspect
  rather than predict.
- Marketplace platform labels are not evidence of activation in Claude, Codex,
  or another host.
- "Hundreds of skills" is Skillery's own current marketing statement, not an
  independently audited audience measure.

## Final human action

Open the live submission gate and review the
authentication permissions and actual fields. Submit the smallest supported
shape, then inspect every generated claim and public URL logged out before
sharing it.
