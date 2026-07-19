# Kimi Code plugin install and community packet

## Verdict

**P1 — strong native install path, but not a verified public directory
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

> Invoke `moneyprinter`. Ask the short interview one question at a time. Route
> toward a payable test only if one is credible; otherwise propose the smallest
> safe discovery step. Do not contact, post, purchase, charge, sign, or publish
> anything.

Expected first behavior: the skill asks for real assets and constraints, does
not invent demand or authority, and retains an external-action approval gate.

## Listing title

> MoneyPrinter.md: receipts-first revenue skills for Kimi Code

## Short description

> Seven open-source Agent Skills that route a user's real assets toward one
> credible payable test, or a safe discovery step, without calling pipeline,
> estimates, or simulations cash.

## Community post

Use only in a current Kimi community channel that explicitly permits project
showcases, and only after the retained host test:

> I packaged MoneyPrinter.md for direct installation in Kimi Code. It starts
> with the user's actual assets, constraints, authority, and risk, then routes
> toward one bounded payable test when credible or the smallest safe discovery
> step when it is not. Six companion skills cover research, offer design,
> permissioned acquisition, delivery proof, and cashflow review. The repository
> keeps cash, contracted revenue, booked revenue, pipeline, estimates,
> simulations, and anecdotes separate, and external actions require human
> approval.
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
