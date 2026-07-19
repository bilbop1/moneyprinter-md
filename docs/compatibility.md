# Compatibility

MoneyPrinter's canonical source is the seven directories in `skills/`, written
to the common [Agent Skills specification](https://agentskills.io/specification).
That common core is portable; installation, activation, permissions, and GUI
behavior remain host-specific. A directory appearing in an installer is not
evidence that its workflow was activated in every host.

## Status key

| Status | Meaning |
| --- | --- |
| Verified | Tested discovery and activation in the named surface. |
| Installer-supported | Handled by a current documented installer. |
| Manual | User must paste, upload, or copy the skill. |
| Provider-only | Model/API exists but no stable consumer skill host is claimed. |
| Planned | Not yet tested. |

No host below is marked **Verified** yet. The local release check lists the
seven source skills; it does not simulate a conversation in each third-party
surface. Treat the table as an honest routing guide, then follow the host's
current documentation at install time.

## Host matrix

| Surface | Status | What this means now | Practical route |
| --- | --- | --- | --- |
| Claude Code CLI/IDE | Installer-supported | `skills` documents a Claude Code target; Claude Code also documents scoped custom skills. | Use the publication-target installer command after the repository is public, or copy the source directory into a Claude Code skill scope. |
| Claude web/Cowork | Manual | This repository does not claim a native marketplace or durable automatic install for the web/Cowork surface. | Paste the relevant skill into project knowledge/instructions or upload the source files where that workspace permits it. |
| Codex app/CLI | Installer-supported | `skills` documents a Codex target; Codex documents skills, with availability varying by app, CLI, plan, and administrator settings. | Use the publication-target installer command after the repository is public, or copy the source directory into a Codex-recognized skill location. |
| ChatGPT web | Manual | The web product is not claimed as an automatic Agent Skills consumer by this project. | Paste the needed workflow into project instructions or attach the selected `SKILL.md` and references when the workspace allows files. |
| Kimi Code CLI | Installer-supported | `skills` documents a Kimi Code CLI target, and Kimi Code documents custom skills. | Use the publication-target installer command after the repository is public, or copy the source directory into Kimi Code's current documented skill location. |
| Kimi app/Work | Manual | Kimi's app/Work experience is not claimed as a stable automatic importer here. | Paste or upload the selected workflow and keep external actions human-approved. |
| Hermes | Manual | Hermes documents a skills system and user/project skill locations; this project has not run its activation suite there. | Copy a complete skill directory, including `references/`, to the location in the installed Hermes documentation. |
| OpenClaw | Installer-supported | `skills` documents an OpenClaw target, and OpenClaw documents local/project skill loading. | Use the publication-target installer command after the repository is public, or copy a complete skill directory to the current documented OpenClaw scope. |
| MiniMax | Provider-only | MiniMax is treated here as a model/provider or tool surface, not as proof of an equivalent stable consumer skill host. | Use MoneyPrinter through a compatible harness that can call MiniMax; do not infer a native MiniMax import path from this repository. |

## What was actually checked locally

Before publication, this project uses:

```bash
npx skills add . --list
```

The expected result is one listing each for `moneyprinter`, `opportunity-radar`,
`offer-engine`, `payable-test`, `ethical-acquisition`, `delivery-proof`, and
`cashflow-review`. This verifies local package discovery only. It does not
upgrade any table row to **Verified**.

## Manual-copy contract

Copy the whole skill directory, not only `SKILL.md`. For example,
`skills/moneyprinter/` must retain its `references/` subdirectory. Then reopen
or reload the host, invoke the skill by name, and confirm that it follows the
safety and approval gates before relying on it for real work.

Host documentation takes precedence over this page if paths or scopes have
changed:

- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [Codex skills](https://developers.openai.com/codex/skills/)
- [Kimi Code custom skills](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)
- [Hermes skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills)
- [OpenClaw skills](https://docs.openclaw.ai/tools/skills)
- [`skills` installer](https://github.com/vercel-labs/skills)

The source trail and caveats are recorded in [the research ledger](../research/source-ledger.md).
