# skillsdir.dev

## Verdict

**P2 - exact skill-directory fit with a documented GitHub and CLI contribution
path, but reach is not independently validated.**

**Status:** public source ready; blocked on owner GitHub authentication and
review of the current issue template or CLI behavior. Nothing has been
submitted or published.

## Current official submission path

The [skillsdir.dev Share a Skill page](https://skillsdir.dev/add) documents two
paths:

1. Open its GitHub submission issue and complete the template.
2. Run `skill publish` from the skill directory.

Maintainers review the submission before an accepted skill becomes live in the
directory and installable through its CLI.

Source: [skillsdir.dev official submission guide](https://skillsdir.dev/add).

## Prerequisites

- A valid public `SKILL.md`.
- At least one repository, direct skill, documentation, or demo link.
- A unique kebab-case identifier.
- Summary of no more than 180 characters.
- No more than three accurate verticals.
- Owner GitHub identity for an issue submission, or a reviewed installation of
  the current `skill` CLI.
- Maintainer review and acceptance.

## Exact repository values

Start with the router:

```text
Unique ID: moneyprinter
Repository: https://github.com/bilbop1/moneyprinter-md
SKILL.md: https://github.com/bilbop1/moneyprinter-md/blob/main/skills/moneyprinter/SKILL.md
```

Do not submit the six companion skills until the first issue or CLI publication
shows how the directory handles related skills.

## Listing title

> MoneyPrinter

## Short description

> With permission, scan 14 days of detected, accessible AI sessions, confirm
> one cash-first route, then work it through receipts and reranking.

## Long description

The public guide does not document a long-description requirement. If the
current issue template asks for one, use:

> MoneyPrinter is the router for seven open-source Agent Skills. The current
> host scans permitted AI session sources, reports coverage gaps, and asks for
> one correction. Cash evidence drives the route choice. The run continues
> through private research, offer creation, payable-test design, acquisition
> preparation, and delivery preparation. A specific approval gates one exact
> external action. Its receipt and result feed the next ranking.

## Tags / verticals

Choose no more than three current verticals that accurately match the directory.
Suggested concepts, only if equivalent options exist:
`Business`, `Productivity`, `Developer Tools`.

## Links required

- Confirmed public source repository.
- Confirmed direct `SKILL.md` URL.
- Landing page only if the current issue template provides a separate field.

## Assets required

No promotional asset is documented by the public submission guide.

## Expected discovery mechanism

Maintainer-approved directory listing and installation through the skillsdir.dev
CLI. Acceptance, placement, and traffic are not guaranteed.

## Review risks

- `skill publish` can conflict with other similarly named CLIs; verify the
  official install instructions before running it.
- A repository with seven skills may require separate identifiers or issues.
- The proposed vertical labels must be replaced with current form options.
- Directory approval and CLI installability do not establish activation in
  every named agent.

## Final human action

Inspect the current GitHub issue template and CLI documentation. Prefer the
GitHub issue path unless the owner has reviewed the
exact `skill` CLI package and command. Submit the router first, then record the
accepted listing URL before considering companion submissions.
