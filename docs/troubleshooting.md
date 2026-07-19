# Troubleshooting

Start with the local source, not a guessed remote command:

```bash
npx skills add . --list
```

Expected: seven names, each once. The command lists package discovery; it does
not prove every agent's activation behavior.

## No skills found

Run the command from the repository root, where `skills/` is present. Confirm
that each skill is a directory containing a top-level `SKILL.md`:

```bash
find skills -maxdepth 2 -name SKILL.md -print
```

If a copied manual version is invisible, compare its directory structure with
the source and make sure `references/` was copied too. Reload the host after a
manual copy. If its current docs specify a different scope, use that scope.

## Invalid YAML or malformed skill metadata

Each `SKILL.md` begins with YAML frontmatter between `---` lines. Do not add
tabs, duplicate keys, or unquoted values that YAML interprets unexpectedly.
Restore the complete frontmatter from the source, preserve the `name` field,
and run the repository's validation gate before retrying. Report the exact host
and parser error rather than editing around it blindly.

## Wrong install scope

Project and user scopes behave differently. A user-wide copy can be hidden by a
project-level name collision, while a project copy will not appear outside that
project. Confirm which workspace the host has open, then follow the current
host-specific path in [install](install.md). Reload/restart after changing
scope.

## Manual GUI import or paste did not work

GUI products do not all expose a native Agent Skills importer. For Claude
web/Cowork, ChatGPT web, and Kimi app/Work, use the product's allowed
project/workspace instructions or upload route; do not describe that as a
plugin installation. Paste the selected `SKILL.md` with the referenced material
needed for the current task, keep the safety rules intact, and ask the harmless
activation prompt from [install](install.md).

If the GUI strips files or long text, begin with `moneyprinter/SKILL.md` and
its four references, then add downstream skills only after choosing a route.

## Name collision

Each installed directory has a `name` in its frontmatter. If another skill has
the same name, remove or rename the **copied** conflicting directory according
to the host's documentation, then reload. Do not change MoneyPrinter's
canonical skill names to force an installation; report the collision with the
host, scope, and other skill's source so maintainers can evaluate a safe
adapter later.

## Stale installed copy

Hosts may cache discovered skills. Close/reload the host, replace the entire
copied skill directory (not only one Markdown file), and reopen it. Verify the
current `SKILL.md` title and frontmatter against the repository. If an
installer-managed copy remains stale, inspect the current installer help and
its installation location before removing anything.

## Uninstall

For a manual installation, remove only the copied MoneyPrinter directory from
the affected host's documented skill scope, then reopen the host and confirm
that the harmless activation prompt no longer finds it. Keep the repository
checkout intact.

For an installer-managed installation, run the current installer help first and
use its documented removal action. Do not guess a package name or delete shared
agent directories. If you are unsure which copy is active, rename nothing:
record the host, scope, and visible path, then resolve the collision before
removing a copy.

## Still stuck

Capture a redacted report with: host and version, operating system, whether the
source listing passed, install method and scope, skill name, exact error, and a
minimal harmless prompt. Never include API keys, customer data, payment data,
private workspace instructions, or proprietary prompts.

Review [compatibility](compatibility.md) before assuming a host is native or
installer-supported. The source and caveats for these boundaries are in the
[research ledger](../research/source-ledger.md).
