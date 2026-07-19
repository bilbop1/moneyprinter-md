# Claude community and independent marketplaces

## Verdict

**P0 — strong first-party fit after plugin packaging.** Claude Code plugins can
contain skills. Anthropic documents submissions to the `claude-community`
marketplace and separately documents independently hosted marketplaces. The
curated `claude-plugins-official` marketplace has no application process.

**Status:** blocked on Claude plugin packaging, local validation, live URLs,
account access, and review. The current repository is an Agent Skills source
pack, not a confirmed Claude marketplace plugin.

## Current official submission path

Anthropic documents two community-marketplace forms:

- Team and Enterprise users with permission to manage the organization's
  plugin directory:
  `https://claude.ai/admin-settings/directory/submissions/plugins/new`
- Individual developers:
  `https://platform.claude.com/plugins/submit`

Both routes feed `claude-community`, not the curated
`claude-plugins-official` marketplace.

An independent marketplace can be hosted from a GitHub repository with
`.claude-plugin/marketplace.json`, then added with
`/plugin marketplace add owner/repo`.

Sources: [official community submission guide](https://code.claude.com/docs/en/plugins#submit-your-plugin-to-the-community-marketplace)
and [official independent-marketplace packaging guide](https://code.claude.com/docs/en/plugin-marketplaces).

## Prerequisites

- Create the required `.claude-plugin` package and marketplace metadata.
- Ensure the seven skills and all referenced files are inside the installed
  plugin boundary.
- Run `claude plugin validate .`.
- Install the package locally from its marketplace and invoke the router.
- Retain a reproducible Claude host test before changing compatibility from
  installer-supported to verified.
- Public repository and landing page.
- For the organization form: Team or Enterprise access plus permission to
  manage the plugin directory.
- For the individual form: authenticated Platform developer access.

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

> Receipts-first revenue experiments: route toward one bounded payable test
> when credible, or a safe discovery step, with approval before external action.

## Long description

> MoneyPrinter.md packages seven text-first workflows for Claude Code. It
> starts from the user's actual assets, constraints, authority, and risk, then
> routes toward one bounded payable test when credible or the smallest safe
> discovery step when it is not. Companion skills guide research, offer design,
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

- `claude-community` Discover/search if accepted.
- Direct independent-marketplace install from GitHub.
- Favorites and sharing inside Claude Code.

## Review risks

- A raw `skills/` tree is not the same thing as a validated Claude plugin.
- Plugin installs are high-trust; every included path and permission should be
  minimal.
- Namespaced plugin skill invocation may differ from direct Agent Skills use.
- The community marketplace is reviewed; submission does not guarantee
  listing.
- Do not describe a community submission as an application to
  `claude-plugins-official`.

## Final human action

After the package passes local validation and a real Claude invocation, choose
between the independent marketplace and `claude-community` review. The owner
must use the form that matches their account type and permissions.
