# Evidence rubric

- The result uses exactly one approved evidence label.
- Cash collected requires privacy-safe redacted settlement evidence; explicit user attestation alone is insufficient.
- Revenue contracted requires a privacy-safe redacted signed obligation artifact; explicit user attestation alone is insufficient.
- If the required artifact is unavailable, use Unverified anecdote rather than Cash collected or Revenue contracted.
- An invoice, proposal, order draft, or benchmark score cannot be Cash collected.
- Estimated economic value includes formula, assumptions, and sensitivity.
- Simulation appears beside the headline number, not only in a footnote.
- Public reports redact personal information and disclose model, harness, spend, time, and human work.
- SCALE requires recorded human hours plus either positive labor-adjusted
  profit using an approved labor cost or realized hourly value at or above an
  explicit approved floor; unknown or failed labor economics cannot SCALE.
- An `Action receipt` exists only after an execution attempt. It records the
  approved payload, destination, channel/account, execution time, cost, tool
  result or error, evidence label, and correction status; a draft, plan,
  approval request, or unexecuted decision is not a receipt.
- Sending or submitting a deliverable is not client acceptance. Delivery proof
  uses criteria defined before the result and records `Accepted`, `Rejected`,
  `Pending`, or `Unknown` separately from the economic label.
- Cash, contracted revenue, booked revenue, pipeline, estimated value, and
  simulation remain separate records in reconciliation; do not add them
  together or let one silently upgrade another.
- `STOP`, `REVISE`, `REPEAT`, and `SCALE` are review decisions, not evidence
  labels or execution authority. The selected decision and its receipts return
  to the source-linked portfolio for reranking.
- Local fixture values and evaluator traces use `Simulation` as their actual
  suite evidence label. They are not customer results, cash evidence, or proof
  that a named host discovered or executed the workflow.
- A fixture may separately state a `Counterfactual label:` and
  `Counterfactual branch:` only to describe what the pinned skill would choose
  if explicitly stipulated records were real, inspected, privacy-safe, and
  verified. That conditional analysis is not an actual Action receipt,
  delivery, economic label, rerank, or operational decision and cannot
  authorize an external next step.
