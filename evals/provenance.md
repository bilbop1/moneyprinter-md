# Evaluation provenance

This release keeps evaluation artifacts inspectable, but it does not describe
them as a certification, customer outcome, or host-compatibility proof.

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
