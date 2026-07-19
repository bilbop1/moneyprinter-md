# Task 1 report: history-scan contract evaluation

## Scope

Added only the RED evaluation contract and static release assertions. No
production skill file was changed.

## Files changed

- `evals/session-scan/2026-07-19-baseline.md` — retained rc.2 commit, release,
  MoneyPrinter hash, and required baseline outcomes.
- `evals/session-scan/prompts.md` — six pressure scenarios S01 through S06.
- `evals/session-scan/oracle.md` — observable sequence, required behavior,
  scenario expectations, and pass rule.
- `scripts/verify-release.mjs` — seven release assertions for MoneyPrinter and
  the future session-scan reference.

## Commands and output summary

1. `git rev-parse HEAD && git log -1 --oneline`
   - Before changes: `a2d609b6e36b86bbeb9f131448705e120a4c0dd7`
     (`docs: plan 14-day session scan`).
2. `shasum -a 256 skills/moneyprinter/SKILL.md`
   - Retained rc.2 hash:
     `1ed08cd82d5ef188453d66578cec598a61de9e505a78d8698da6e1bf0673f86c`.
3. `node scripts/verify-release.mjs`
   - Expected RED failure (exit `1`): `ENOENT` while opening
     `skills/moneyprinter/references/session-scan.md`.
4. `git diff --check`
   - Passed with no whitespace errors.
5. `node --check scripts/verify-release.mjs`
   - Passed with no syntax errors.

## Implementation commit

`da0abdcf2293f215ad0aa4039a81a90ae399f8d1`
(`test: add session scan release contract`)

## Self-review

- The baseline contains the exact required outcome table plus reproducible
  retained HEAD and hash identifiers.
- Prompts explicitly cover complete, partial/blocked, injected, empty,
  cash-first anti-code-volume, and post-confirmation continuation cases.
- The oracle makes every required handoff observable: permission, rolling
  14-day scan, coverage receipt, source-linked synthesis, confirmation,
  priority, private loop, approval gate, receipt, and rerank.
- Static assertions use the exact requested expressions and intentionally read
  the missing future reference, preserving RED before production implementation.
- This task did not stage or modify the pre-existing unrelated change at
  `docs/superpowers/plans/2026-07-19-fourteen-day-session-scan.md`.

## Concerns

- The verifier is intentionally red until the follow-on task adds
  `skills/moneyprinter/references/session-scan.md` and rewrites MoneyPrinter to
  meet the asserted contract. That failure is the requested baseline, not a
  completed release verification.

## Follow-up: public-claim coverage requirement

The oracle now grades public-facing language as well as the private coverage
receipt. S02 explicitly requires a summary to say that only detected and
accessible stores were scanned; it must not imply blocked, unsupported,
malformed, excluded, or otherwise inaccessible stores were scanned. The pass
rule makes a universal-coverage implication a suite failure.

### Follow-up commands and output summary

1. `node scripts/verify-release.mjs`
   - Expected RED failure (exit `1`) only: `ENOENT` while opening
     `skills/moneyprinter/references/session-scan.md`.
2. `node --check scripts/verify-release.mjs`
   - Passed (exit `0`).
3. `git diff --check`
   - Passed (exit `0`).

### Follow-up self-review

- The requirement is observable in the required-behavior table, S02 prompt and
  scenario expectation, and the suite pass rule.
- It preserves Task 1 scope: only the evaluation prompt, oracle, and retained
  evaluation report changed; no production skill files were touched.
