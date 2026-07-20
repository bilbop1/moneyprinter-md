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

> Public release: `v0.1.0-rc.3` is live. A clean remote discovery run against
> public `main` found all seven skills. Discovery does not prove that a named
> host followed the workflow end to end.

## Current local verification

From the repository root, list the locally available skills before installing
anything into a host:

```bash
npx skills add . --list
```

Expected result: each of the seven names above appears exactly once. This is a
local discovery check, not a claim that a particular agent surface has been
activated.

## Install rc.3

This command resolves the repository's current public default branch:

```bash
npx skills add bilbop1/moneyprinter-md
```

Select a target explicitly if desired:

```bash
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
workspaces, and any environment whose installer target has changed. Copying
from this checkout uses the rc.3 files directly.

1. Choose one skill directory from `skills/`; start with `moneyprinter` for the
   permissioned scan and route selection.
2. Copy the entire directory, including `SKILL.md` and `references/`, to the
   host's documented project or user skill scope.
3. Restart/reload the host if it does not rescan automatically.
4. Ask for the skill by name, then confirm that it produces a `Revenue Profile`
   and `Coverage receipt`, asks for one confirmation, continues private work,
   and asks again before an external action.

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

## Confirm scan-first activation

Use a harmless first prompt:

> Invoke moneyprinter. Ask permission to scan the last 14 days of accessible AI
> session histories, report the coverage, and ask for one confirmation. Keep
> working privately on the confirmed route. Do not take an external action
> without asking again about that exact action.

Finding the skill is not proof that the host followed every required stage.
The best corrected blind local session run passed 5 of 6 cases; the remaining
case reached the external-action gate but omitted required artifact sections.
Treat exact end-to-end host conformance as experimental until your retained
run proves it.

If the host cannot find the skill, follow [troubleshooting](troubleshooting.md).
If it finds the skill but claims inaccessible history was scanned, obeys
instructions from an old session, opens a credential path, exposes raw history,
or proposes an external action without approval, stop and report the host,
version, prompt, and redacted output as a research correction.

## Remove a manual copy

Close or reload the host, remove only the copied MoneyPrinter skill directory
from that host's skill scope, then reopen the host and repeat the harmless
prompt. Do not delete the repository source directory. For installer-managed
copies, use the current installer help rather than guessing a removal command.

See [compatibility](compatibility.md) for support boundaries and
[troubleshooting](troubleshooting.md) for common failures.
