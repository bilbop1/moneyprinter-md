# Claude official/community marketplace

## Verdict

**P0 — strong first-party fit after plugin packaging.** Claude Code plugins can
contain skills, and Anthropic documents both an official marketplace submission
form and independently hosted marketplaces.

**Status:** blocked on Claude plugin packaging, local validation, live URLs,
account access, and review. The current repository is an Agent Skills source
pack, not a confirmed Claude marketplace plugin.

## Current official submission path

Anthropic documents two official forms:

- `https://claude.ai/settings/plugins/submit`
- `https://platform.claude.com/plugins/submit`

An independent marketplace can be hosted from a GitHub repository with
`.claude-plugin/marketplace.json`, then added with
`/plugin marketplace add owner/repo`.

Sources: [official discover and submission guide](https://code.claude.com/docs/en/discover-plugins)
and [official marketplace packaging guide](https://code.claude.com/docs/en/plugin-marketplaces).

## Prerequisites

- Create the required `.claude-plugin` package and marketplace metadata.
- Ensure the seven skills and all referenced files are inside the installed
  plugin boundary.
- Run `claude plugin validate .`.
- Install the package locally from its marketplace and invoke the router.
- Retain a reproducible Claude host test before changing compatibility from
  installer-supported to verified.
- Public repository and landing page.
- Authenticated Claude or Console account for official submission.

## Exact validation and independent-marketplace commands

After the package exists:

```sh
claude plugin validate .
claude plugin marketplace add .
claude plugin marketplace list
```

The final install command must use the exact marketplace and plugin names shown
by the validated manifest and marketplace listing; do not announce a guessed
name.

## Listing title

> MoneyPrinter.md

## Short description

> Receipts-first revenue experiments: one interview, one bounded payable test,
> seven evidence labels, and approval before external action.

## Long description

> MoneyPrinter.md packages seven text-first workflows for Claude Code. It routes
> beginners, creators, local businesses, professionals, and experienced
> operators from a short interview to one credible revenue experiment and one
> fallback. Companion skills guide research, offer design, a payable test,
> permissioned acquisition, delivery proof, and cashflow review. Results are
> labelled as cash, contracted, booked, pipeline, estimated, simulated, or
> anecdotal. No guaranteed income and no automatic external action.

## Tags / category

`productivity`, `business`, `research`, `workflows`, `human-in-the-loop`

## Links required

- Public source repository.
- Confirmed product page.
- Support and policy pages required by the current form.

## Assets required

- Plugin icon/logo.
- Inspected social/listing card if accepted.
- Valid marketplace and plugin manifests.

## Expected discovery mechanism

- Official marketplace Discover tab and search if accepted.
- Direct independent-marketplace install from GitHub.
- Favorites and sharing inside Claude Code.

## Review risks

- A raw `skills/` tree is not the same thing as a validated Claude plugin.
- Plugin installs are high-trust; every included path and permission should be
  minimal.
- Namespaced plugin skill invocation may differ from direct Agent Skills use.
- The official marketplace is reviewed; submission does not guarantee listing.

## Final human action

After the package passes local validation and a real Claude invocation, choose
between the fast independent marketplace and official review. The owner must
authenticate and submit the official form.
