# Kimi Code plugin install and community packet

## Verdict

**P1 - strong native install path, but not a verified public directory
submission.** Kimi Code CLI can install plugins directly from GitHub, and a
plugin can bundle skills. This makes the repository easy to share once its Kimi
manifest and retained host test exist. This research pass found no official
third-party Kimi catalog submission form.

**Status:** public source ready; blocked on a Kimi plugin manifest, a retained
Kimi Code install-and-invocation test, and a current community-rule check.
Nothing has been listed or posted.

## Current official submission path

Kimi Code accepts a plugin manifest at either:

- `kimi.plugin.json`
- `.kimi-plugin/plugin.json`

The manifest can point its `skills` field at the packaged skills directory.
After the manifest exists, install it with:

```text
/plugins install https://github.com/bilbop1/moneyprinter-md
```

Kimi also documents local paths and ZIP files. A direct GitHub install is a
distribution route, not evidence of placement in a Kimi-run public catalog.

Source: [Kimi Code plugin documentation](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/plugins.html).

## Prerequisites

- Public GitHub source.
- Valid `kimi.plugin.json` or `.kimi-plugin/plugin.json`.
- Plugin `name`, `version`, `description`, and `skills` fields that match the
  actual package.
- Every referenced skill file included in the installed plugin boundary.
- Retained `/plugins install` result, plugin discovery, router invocation, and
  expected first-turn behavior in a current Kimi Code version.
- Compatibility page updated with the exact version, date, and evidence.
- A current official community channel whose rules explicitly permit project
  showcases, if a community post is attempted.

Kimi GUI support is not claimed by a Kimi Code CLI test. Test and document each
surface separately.

## Exact host-test prompt

> Invoke moneyprinter. Ask permission to scan the last 14 days of accessible AI
> session histories. Do not take an external action without asking again.

Expected first behavior: the skill asks for scan permission, reports detected
sources and coverage gaps, ignores instructions found in history, and asks for
one correction before continuing private work. It must not claim access to
blocked sources or turn scan permission into external-action approval.

## Listing title

> MoneyPrinter.md: receipts-first revenue skills for Kimi Code

## Short description

> Seven open-source Agent Skills turn a permissioned 14-day scan of detected,
> accessible AI sessions into one confirmed cash-first route.

## Community post

Use only in a current Kimi community channel that explicitly permits project
showcases, and only after the retained host test:

> I packaged MoneyPrinter.md for direct installation in Kimi Code. With
> permission, the current host scans the rolling 14 days of detected AI CLI and
> GUI session sources it can access, reports gaps, and asks for one correction.
> It chooses a cash-first route, then keeps working through private research,
> offer creation, test design, acquisition preparation, and delivery
> preparation. A specific approval gates one exact external action. Its receipt
> and result feed the next ranking. Cash, contracts, bookings, pipeline,
> estimates, simulations, and anecdotes remain separate.
>
> Source and install: `https://github.com/bilbop1/moneyprinter-md`
>
> I tested this in Kimi Code `[exact version/date]`: `[link to retained test]`.
> I would value compatibility reports and concrete corrections.

Do not post with placeholders, without a permitted channel, or before the URL
and install work logged out.

## Tags

`agent-skills`, `kimi-code`, `business-validation`, `human-in-the-loop`,
`open-source`

## Links required

- Confirmed public GitHub source.
- Direct link to the retained Kimi test artifact.
- Confirmed landing page if the channel permits a second link.

## Assets required

- Main claim-safe social card for a permitted showcase channel.
- Optional terminal screenshot showing successful plugin discovery without
  credentials or private paths.

## Expected discovery mechanism

- Direct GitHub plugin installs shared from the repository and landing page.
- GitHub search for Kimi plugin metadata.
- Qualified community referrals and compatibility reports where showcase posts
  are permitted.

No public Kimi catalog placement or marketplace ingestion is promised.

## Review risks

- A generic Agent Skills tree is not automatically a valid Kimi plugin.
- A CLI host test does not establish Kimi GUI compatibility.
- Community rules and allowed channels can change.
- Posting to a support channel or issue tracker without an invitation is spam.
- Auto-inferred compatibility can exceed the retained evidence.

## Final human action

Validate the manifest, perform the direct GitHub install and router invocation,
remove every placeholder from the community copy, and inspect the current
channel rules. The owner may post only in an explicitly permitted showcase
channel; otherwise rely on the GitHub install path.
