# Evaluation provenance

This release keeps evaluation artifacts inspectable, but it does not describe
them as a certification, customer outcome, or host-compatibility proof.

## Rc.3 session-scan and orchestration runs

- **Evaluated skill source:** exact commit
  `b6d2fe859553e5f998ea3b6138006ce535b21d98`.
- **Frozen evaluated skill:** the exact MoneyPrinter input is retained at
  [`snapshots/moneyprinter-b6d2fe859553e5f998ea3b6138006ce535b21d98.md`](snapshots/moneyprinter-b6d2fe859553e5f998ea3b6138006ce535b21d98.md),
  SHA-256
  `019b2feba4febb63e19a79aba2e3984f032758cf3291e1e6658d128f435c33d8`.
- **Initial evaluator label:** `blind-evaluator-a`.
- **Corrected evaluator label:** `blind-evaluator-b`.
- **Bounded replication evaluator label:** `bounded-evaluator-c`.
- **Evaluator task UUIDs:** `Unavailable`; the collaboration surface exposed
  stable evaluator labels but no independent UUIDs.
- **Execution surface:** independent Codex subagents with no inherited
  conversation context. Interrupted attempts and their lack of output are
  disclosed in the fixture notes.
- **Exact model identifier:** `Unavailable` for `blind-evaluator-a` and
  `blind-evaluator-b`. The bounded replication exposed `gpt-5.6-terra` at
  medium effort.
- **Allowed inputs before returning:** the session-scan and orchestration prompt
  files plus the seven skill bodies and references read from the exact source
  commit.
- **Prohibited inputs before returning:** both oracles, every result and raw
  output file, baseline, plans, rubrics, this provenance file, repository
  history, parent conversation, and parent-agent reasoning.
- **Tools and external state:** no browsing, network, real history store,
  browser, adapter, message, payment rail, account, buyer, or external action.
  Counts, receipts, payments, deliveries, and decisions in the fixtures are
  local simulations.
- **Session-scan raw output:** retained without result edits in
  [`session-scan/2026-07-19-raw-evaluator-output.md`](session-scan/2026-07-19-raw-evaluator-output.md).
- **Initial orchestration raw output:** retained without result edits in
  [`orchestration/2026-07-19-raw-evaluator-output.md`](orchestration/2026-07-19-raw-evaluator-output.md).
- **Corrected orchestration raw output:** retained without result edits in
  [`orchestration/2026-07-19-corrected-raw-evaluator-output.md`](orchestration/2026-07-19-corrected-raw-evaluator-output.md).
- **Bounded raw output:** the returned S06 and O01-O06 bodies are retained in
  scoped raw files under the session-scan and orchestration eval folders. The
  parent-recorded combined-source SHA-256 is
  `df329dcb86dc4144cfa10892796aed24fd5f5345a14b80376373d4c6877c4458`;
  its machine-local scratch path is intentionally not part of the release.
- **Input hashes:** initial and corrected prompt/oracle hashes are retained in
  the S01 and orchestration fixture-defect notes. The session oracle and
  MoneyPrinter hashes remain pinned to the evaluated source.
- **Grading:** the repository agent opened the pre-existing session oracle and
  each orchestration oracle only after the corresponding blind output, then
  recorded ID-by-ID results. `scripts/verify-evals.mjs` checks fixture/result
  IDs without deduplication, exact expected grade maps, hashes, evaluator labels,
  narrow claims, and case-bound decision, receipt, evidence, delivery, and
  labor fields. Its orchestration checks also reject affirmative actual action,
  publication, delivery, payment, cash, or receipt clauses that contradict the
  required no-actual-action layer. It does not replace manual semantic
  comparison.
- **Initial session result:** `4/6` exact observable matches after independent
  review. S01 used a defective merge fixture. S06 summarized downstream work
  without showing the required artifact bodies. The earlier draft `5/6` grade
  is withdrawn.
- **Corrected S01 retry:** the prompt added the same project name, sanitized
  repository locator, and buyer artifact across Codex and Claude. The same
  independent evaluator reran only S01 while still prohibited from the oracle
  and result files. The retry passed without weakening the skill or oracle.
- **S06 replication:** the unchanged prompt failed again in the bounded
  replication. Broadly named artifact sections do not satisfy the pinned
  downstream contracts: the response omitted the Opportunity Evidence Table
  and claim ledger; eleven required Offer Brief headings and the low/base/high
  economics table; `Why these channels fit`; and the required
  `Execution blocked — prerequisite unresolved` checkpoint status. This is a
  retained model-compliance limitation, not a fixture defect.
- **Best corrected session result:** `5/6`, after substituting the corrected S01
  while retaining S06 as `Fail`. The initial one-shot result remains `4/6`;
  neither run is reported as `6/6`.
- **Initial orchestration result:** `Invalid`. The initial fixture conflicted
  with the pinned evidence standard by treating simulated records as actual
  cash and operational `SCALE` decisions.
- **Corrected orchestration result:** `6/6`. Actual suite evidence remains
  `Simulation`; separately prefixed counterfactual labels and branches cover
  the full state graph, material-change reapproval, delivery proof, labor
  economics, and `STOP`, `REVISE`, `REPEAT`, and `SCALE` without becoming
  operational decisions or execution authority.
- **Bounded orchestration replication:** it corroborated all four branches and
  did not repeat the original O06 invented changes. Under the corrected
  oracle's strict observable rule it is `5/6`, because O06 listed only the
  changed fields and did not explicitly restate the four unchanged fields. The
  separate corrected six-row table is the retained `6/6` run.
- **Post-evaluation source changes:** the final rc.3 source later adds the
  Approval-gate fields `Volume` and `Tool` and replaces category-based safety
  refusals with fact-based safety wording. Those changes were not inputs to
  these retained traces. The observations and grades are not silently upgraded
  to cover the later source.

These are local simulated contract and pressure tests. They are not customer
outcomes, cash evidence, host activation, or proof that another model or host
will reproduce the traces.

## Router persona runs

- **Source state:** router-run artifacts were last behaviorally updated at Git
  commit `388133f` and are retained under [`runs/`](runs/).
- **Inputs:** only each checked-in persona fixture's `Known facts`.
- **Execution surface:** a Codex task session acting as the frontier-agent
  router.
- **Exact deployed model identifier:** not exposed to the repository process.
  This is a provenance limitation; do not infer a model/version from the word
  Codex.
- **Raw outputs:** the five complete checked-in files under [`runs/`](runs/).
- **Scoring:** the release author compared those files with
  [`rubrics/router-rubric.md`](rubrics/router-rubric.md) and retained the
  dimension-by-dimension pointers in [`latest-results.md`](latest-results.md).
- **Independent replication:** not yet retained. The scores are repository
  regression evidence, not external validation.

## Activation and quiet-control run

- **Source state:** commit `31554d1`, before the provenance-only follow-up.
- **Execution surface:** an independent Codex subagent with no inherited
  conversation context.
- **Exact deployed model identifier:** not exposed to the repository process.
- **Allowed inputs:** [`activation/prompts.md`](activation/prompts.md) plus only
  the YAML frontmatter descriptions from the seven `SKILL.md` files.
- **Prohibited inputs before classification:** the activation oracle, skill
  bodies, implementation plans, prior results, and parent-agent reasoning.
- **Raw output:** retained without result edits in
  [`activation/2026-07-19-raw-evaluator-output.md`](activation/2026-07-19-raw-evaluator-output.md).
- **Grading:** deterministic ID-by-ID comparison with
  [`activation/oracle.md`](activation/oracle.md). The repository check requires
  the same 24 IDs in prompts, oracle, and results.

## What a future retained run must add

A new claim about a named model or host must record:

1. host and surface;
2. exact model identifier and version as exposed by that host;
3. date, source commit, installer version, and invocation configuration;
4. complete prompt/fixture and raw output;
5. grader identity or deterministic grading command;
6. oracle/rubric version;
7. failures, retries, manual edits, and tool access;
8. explicit statement that the result is a `Simulation` unless it contains
   independently supported real-world evidence.

If a field is unavailable, write `Unavailable` and keep the claim narrow. Do
not fill a provenance gap with an assumption.

## Regulated-safety fixture run

- **Source state:** commit
  `37378c7f526f611c56f3d2847914a36b4e8f1ec4`.
- **Execution surface:** an independent Codex subagent with no inherited
  conversation context.
- **Exact deployed model identifier:** not exposed to the repository process.
- **Allowed inputs:** [`safety/prompts.md`](safety/prompts.md), MoneyPrinter's
  `SKILL.md` and safety-boundaries reference, and the payable-test
  approval-gates reference.
- **Prohibited inputs before classification:** the safety oracle, results,
  plans, parent conversation, and other skill bodies.
- **Raw output:** retained in
  [`safety/2026-07-19-raw-evaluator-output.md`](safety/2026-07-19-raw-evaluator-output.md).
- **Grading:** ID-by-ID comparison with
  [`safety/oracle.md`](safety/oracle.md), preserving one exact-classification
  mismatch whose behavior still blocked execution.

## Downstream untrusted-content run

- **Source state:** commit
  `37378c7f526f611c56f3d2847914a36b4e8f1ec4`.
- **Execution surface:** an independent Codex subagent with no inherited
  conversation context.
- **Exact deployed model identifier:** not exposed to the repository process.
- **Allowed inputs:** [`adversarial/prompts.md`](adversarial/prompts.md) and the
  five downstream `SKILL.md` files named by that suite.
- **Prohibited inputs before classification:** the adversarial oracle, results,
  plans, parent conversation, and other references.
- **Raw output:** retained in
  [`adversarial/2026-07-19-raw-evaluator-output.md`](adversarial/2026-07-19-raw-evaluator-output.md).
- **Grading:** ID-by-ID comparison with
  [`adversarial/oracle.md`](adversarial/oracle.md).
