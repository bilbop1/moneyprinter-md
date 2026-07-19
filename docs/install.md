# Install MoneyPrinter

MoneyPrinter is a seven-skill Agent Skills package:

```text
moneyprinter
opportunity-radar
offer-engine
payable-test
ethical-acquisition
delivery-proof
cashflow-review
```

## Current local verification

From the repository root, list the locally available skills before installing
anything into a host:

```bash
npx skills add . --list
```

Expected result: each of the seven names above appears exactly once. This is a
local discovery check, not a claim that a particular agent surface has been
activated.

## Publication-target installer commands

`bilbop1/moneyprinter-md` is a **publication target only** at the time this
document was written. The remote has not been confirmed public, so do not treat
the following as live commands until the maintainer confirms that the repository
exists publicly at its intended URL.

```bash
# Run only after public-remote confirmation.
npx skills add bilbop1/moneyprinter-md
```

When the public remote is confirmed, select a target explicitly if desired:

```bash
# Publication-target examples; do not run before public-remote confirmation.
npx skills add bilbop1/moneyprinter-md -g -a claude-code
npx skills add bilbop1/moneyprinter-md -g -a codex
npx skills add bilbop1/moneyprinter-md -g -a kimi-code-cli
npx skills add bilbop1/moneyprinter-md -g -a openclaw
```

Check the current [skills installer documentation](https://github.com/vercel-labs/skills)
for target names, scope flags, and removal behavior before using it. Installer
targets can change.

## Manual installation

Manual installation is the reliable fallback for GUI surfaces, locked-down
workspaces, and any environment whose installer target has changed.

1. Choose one skill directory from `skills/`; start with `moneyprinter` for the
   interview and route selection.
2. Copy the entire directory, including `SKILL.md` and `references/`, to the
   host's documented project or user skill scope.
3. Restart/reload the host if it does not rescan automatically.
4. Ask for the skill by name, then confirm that it produces a `Revenue Profile`
   and asks for approval before an external action.

Use the installed host's current documentation for the exact location and scope:

| Surface | Manual route |
| --- | --- |
| Claude Code CLI/IDE | Copy a complete skill directory into the project or user scope described in [Claude Code skills](https://code.claude.com/docs/en/skills). |
| Codex app/CLI | Copy a complete skill directory into the current project or user skill scope described in [Codex skills](https://developers.openai.com/codex/skills/). The app and CLI can differ. |
| Kimi Code CLI | Copy a complete skill directory into the current Kimi Code scope described in [Kimi Code custom skills](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html). |
| OpenClaw | Copy a complete skill directory into the project or local scope described in [OpenClaw skills](https://docs.openclaw.ai/tools/skills). |
| Hermes | Copy a complete skill directory into the project or user scope described in [Hermes skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills). |
| Claude web/Cowork, ChatGPT web, Kimi app/Work | Paste the selected workflow into workspace/project instructions or upload its files only where the product permits it. Treat this as context, not a native installed plugin. |
| MiniMax | Use a compatible harness that accepts Agent Skills and is configured with MiniMax. This repository does not claim a native MiniMax import path. |

## Confirm activation

Use a harmless first prompt:

> Invoke `moneyprinter`. Ask the short interview one question at a time. Do not
> contact, post, purchase, charge, sign, or publish anything.

If the host cannot find the skill, follow [troubleshooting](troubleshooting.md).
If it finds the skill but proposes a prohibited lane or external action without
approval, stop and report the host, version, prompt, and redacted output as a
research correction.

## Remove a manual copy

Close or reload the host, remove only the copied MoneyPrinter skill directory
from that host's skill scope, then reopen the host and repeat the harmless
prompt. Do not delete the repository source directory. For installer-managed
copies, use the current installer help rather than guessing a removal command.

See [compatibility](compatibility.md) for support boundaries and
[troubleshooting](troubleshooting.md) for common failures.
