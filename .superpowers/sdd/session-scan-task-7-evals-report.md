# Task 7 Step 2 report: rc.3 evaluations

## Scope

This task implemented only the GREEN session-scan and orchestration evaluation
artifacts. It did not modify release publication, deployment, ClawHub,
`launch/launch-control.md`, `docs/deployment/bilbop-org.md`, release assets,
tags, or Task 6 launch copy.

Evaluated skill source:

```text
b6d2fe859553e5f998ea3b6138006ce535b21d98
```

The current MoneyPrinter body and the session-scan oracle remain byte-identical
to that source state.

## Blind runs

The initial and corrected evaluators were independent Codex subagents with no
inherited conversation context. They read only their prompt sets plus skill
bodies/references from the pinned commit and were prohibited from reading
oracles, results, baselines, defect notes, rubrics, plans, provenance,
repository history, raw outputs, parent context, or parent reasoning.

Canonical paths are retained:

- `/root/scan_task7_evals/blind_eval_rc3`;
- `/root/scan_task7_evals/blind_corrected_rc3`; and
- `/root/bounded_blind_eval`.

The first two exposed no exact model identifier. The bounded replication
exposed `gpt-5.6-terra` at medium effort. No task UUID was exposed. Interrupted
corrected/S06 attempts returned no raw output and are disclosed in the fixture
notes.

No browser, network, real history store, adapter, account, message, payment,
buyer, or external action was used. Raw returned content is retained without
result edits, including the complete bounded source and its SHA-256.

## Session-scan result

Independent review regraded the initial run `4/6`. S01 failed because its
fixture required a cross-host merge without stable identity. S06 failed because
the response said private artifacts were drafted but did not show their
required bodies.

The original prompts, trace, and failures remain retained. Corrected S01 gives
Codex and Claude the same project name, sanitized repository locator, and buyer
artifact; its retry passed. Unchanged S06 was independently replicated with
broadly named research, offer, payable-test, acquisition, fulfillment, and gate
sections, but it failed the exact downstream contracts. The response omits the
Opportunity Evidence Table and claim ledger; eleven required Offer Brief
headings and its low/base/high economics table; `Why these channels fit`; and
the required `Execution blocked — prerequisite unresolved` checkpoint status.
This is a retained model-compliance limitation, not a fixture defect.

Final reporting is intentionally two-part:

- initial one-shot suite: `4/6`;
- corrected S01: `Pass`;
- original S06: `Fail`;
- unchanged S06 replication: `Fail`;
- best corrected session suite: `5/6`;
- clean one-shot `6/6`: `No`.

Neither the skill nor oracle was weakened after the mismatch.

## Orchestration result

The initial orchestration suite's claimed `6/6` is withdrawn as invalid. Its
prompt declared every artifact simulated while its oracle demanded actual
`Cash collected` and `SCALE`, contradicting the pinned evidence standard. The
original raw output and O06 embellishment remain retained.

Corrected fixtures separate actual suite evidence (`Simulation`) from
explicitly prefixed counterfactual labels and branches conditional on stipulated
real, inspected, verified records. The corrected blind table matched `6/6` and
covers:

- private continuation under Run Authorization;
- a complete exact-action checkpoint;
- no execution before immediate exact approval;
- conditional Action receipt state after the approved action;
- delivery acceptance and rejection;
- `Pipeline signal`, `Revenue booked`, and `Cash collected` without upgrades;
- direct cost, human hours, labor-adjusted profit, and realized hourly value;
- counterfactual `STOP`, `REVISE`, `REPEAT`, and `SCALE`;
- reranking; and
- material-change reapproval.

The bounded replication corroborated the branches but is strictly `5/6`
because O06 did not explicitly restate the unchanged timing, prospective
label, rollback, and prerequisite fields. It did not invent changes.

Actual suite state remains `Simulation`; no real Action receipt, decision,
rerank, customer outcome, host activation, cash evidence, or tool execution
exists.

## Verification

Fresh checks after the final edits:

```text
node scripts/verify-evals.mjs
eval contract: 6 session-scan and 6 orchestration cases verified

node scripts/verify-release.mjs
release 0.1.0-rc.3: 7 skills and 6 X posts verified

node scripts/verify-public-copy.mjs
public copy contract: 42 current files, 5 simulations, and 16 adversarial fixtures verified

node scripts/verify-money-machine-chain.mjs
money-machine chain contract: 6 skills and 11 references verified

git diff --check
clean

git diff --exit-code b6d2fe859553e5f998ea3b6138006ce535b21d98 -- skills
clean
```

`scripts/verify-evals.mjs` pins prompt/oracle/skill/raw hashes, rejects duplicate
IDs, enforces the exact initial and corrected grade maps, and binds required
decision, receipt, evidence, delivery, labor, and reapproval fields to their
individual scenario rows/sections rather than accepting file-global tokens.

## Limitations

- No named host's real store discovery or skill activation was tested.
- No real action, delivery, customer, settlement, or cash result exists.
- Manual semantic oracle comparison is still required; the focused verifier
  checks structural and critical-value consistency rather than replacing human
  grading.
