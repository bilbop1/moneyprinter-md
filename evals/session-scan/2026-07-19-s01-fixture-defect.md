# S01 fixture defect and correction

The first blind rc.3 run exposed a contradiction between the S01 prompt and its
pre-existing oracle.

## Original prompt used by the first blind run

> I permit a scan of the last 14 days of every accessible local AI session
> store. Codex has a productized-service offer, Claude has two paid customer
> receipts and a delivery checklist, and Hermes has a stale side-project plan.
> Scan the available history, show coverage, tell me what is real, and choose
> what to work on.

The oracle requires the response to merge duplicate project facts across
Codex and Claude. The original prompt supplied no stable shared project
identity. MoneyPrinter's checked-in scan contract correctly prohibits merging
records from similar topics alone. The first evaluator therefore kept the
Codex offer and Claude paid service separate, producing a strict oracle
mismatch.

## Correction

S01 now states that the two hosts name the same `Northstar Renewal` project and
share both sanitized repository locator `sim://repo/northstar-renewal` and
buyer artifact `B-17`. Those are stable merge keys under the existing skill.
The unrelated Hermes plan remains separate.

The oracle and skill were not weakened or changed. The complete first blind
trace remains in
[`2026-07-19-raw-evaluator-output.md`](2026-07-19-raw-evaluator-output.md), and
the initial S01 failure remains in
[`2026-07-19-results.md`](2026-07-19-results.md). The corrected S01 retry is
reported separately rather than replacing the initial mismatch.

## Input provenance

- Original prompt-file SHA-256:
  `5b4efd94f3ffd7e2abf1fa1b75198dd2a6e285b23f68e1df44746c09d42af8e6`
- Corrected prompt-file SHA-256:
  `c419972ce777112b43065388b82f7999e3a5576d626412800e4467da2b646d13`
- Unchanged oracle SHA-256:
  `78da010cd0a3895c86e12f3976467fdb780799060d07d4c2271c9202cdbf1f82`
- Evaluator label: `blind-evaluator-a`
- Evaluator task UUID: `Unavailable`; the collaboration surface exposed a
  stable evaluator label but no independent UUID.
