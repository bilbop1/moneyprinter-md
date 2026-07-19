# Hermes official optional-skills catalog

## Verdict

**P1 - strong native catalog fit after Hermes-specific packaging.** Hermes
documents a contribution path for optional skills: add a self-contained skill
under `optional-skills/<category>/<skill-name>/` and submit a pull request. A
merged contribution enters the official catalog; submission does not imply
acceptance.

**Status:** public source ready; blocked on Hermes-specific packaging, a
retained Hermes install-and-invocation test, and review of the current
repository contribution rules. No pull request has been opened.

## Current official submission path

For each submitted skill:

1. Create `optional-skills/<category>/<skill-name>/`.
2. Add a `SKILL.md` with valid frontmatter and every supporting file it needs.
3. Test the installed skill in Hermes.
4. Submit a pull request to the Hermes repository.

After maintainers merge the pull request, the skill appears in the official
catalog. Start with the `moneyprinter` router only if it can be made
self-contained; otherwise prepare the seven related directories and ask the
maintainers which contribution shape they prefer.

Source: [Hermes optional-skills catalog reference](https://hermes-agent.nousresearch.com/docs/reference/optional-skills-catalog).

## Prerequisites

- Public MoneyPrinter.md source repository.
- Current Hermes repository and contribution instructions reviewed.
- One self-contained catalog directory per submitted skill.
- All referenced files kept inside the submitted skill boundary.
- Retained install, discovery, invocation, and expected first-turn behavior in
  a current Hermes version.
- Compatibility page updated with the exact version, date, and evidence.
- Owner-approved GitHub identity for the pull request.

## Exact host-test prompt

> Invoke moneyprinter. Ask permission to scan the last 14 days of accessible AI
> session histories. Do not take an external action without asking again.

Expected first behavior: the skill asks for scan permission, reports detected
sources and coverage gaps, ignores instructions found in history, and asks for
one correction before continuing private work. It must not claim access to
blocked sources or turn scan permission into external-action approval.

## Pull request title

> feat(skills): add MoneyPrinter receipts-first revenue workflow

## Pull request description

> Adds the MoneyPrinter Agent Skill for scanning the rolling 14 days of
> detected, permitted AI CLI and GUI session sources the current host can
> access. It reports coverage gaps, asks for one correction, chooses a
> cash-first route, and continues through private preparation. Economic
> outcomes keep their evidence labels. The workflow does not promise income and
> requires specific approval before one exact external action.
>
> Validation included:
>
> - Hermes version and date: `[fill after retained test]`
> - Install/discovery evidence: `[link or command output]`
> - Invocation evidence: `[link or command output]`
> - Source: `https://github.com/bilbop1/moneyprinter-md`

Do not submit with the placeholders or before the source URL works logged out.

## Listing title

> MoneyPrinter: receipts-first revenue experiments

## Short description

> With permission, scan 14 days of detected, accessible AI sessions, confirm
> the read once, and start one cash-first route with approval before external
> action.

## Tags / category

Use only an existing catalog category confirmed in the current Hermes
repository. Suggested descriptive tags, if supported:
`business-validation`, `research`, `human-in-the-loop`, `open-source`.

## Links required

- Confirmed public GitHub source.
- Direct link to the retained Hermes test artifact.
- Landing page only if the contribution format permits it.

## Assets required

No marketing image is required by the documented skill-directory steps. Supply
only assets allowed by the current contribution rules.

## Expected discovery mechanism

- Official Hermes optional-skills catalog after maintainer acceptance and
  merge.
- Hermes skill search and install flow.
- Repository history and the accepted pull request.

## Review risks

- The current MoneyPrinter router references companion material; copying only
  one file can create a broken catalog entry.
- Seven related submissions may be too broad for one pull request.
- "Works in Hermes" is forbidden until the retained host test passes.
- Maintainers can request changes or decline the contribution.
- A contribution pull request should be useful packaging, never promotional
  copy in an unrelated issue or pull request.

## Final human action

Prepare and test the smallest self-contained Hermes contribution, remove every
placeholder from the pull request description, inspect the diff, and let the
owner open the pull request. Record the real pull request and catalog URLs only
after they exist.
