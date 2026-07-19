# Cashflow decision rules

Choose exactly one decision after reconciling evidence, cash, direct cost,
human time, and delivery acceptance. Do not substitute a forecast, benchmark,
invoice, contract, or pipeline metric for the underlying records.

## Calculations and labels

- **Cash collected:** total settled payments received during the review period.
- **Revenue contracted:** total signed obligations not yet collected; report
  separately from cash.
- **Revenue booked:** total unpaid invoices or orders; report separately from
  cash and contracted revenue.
- **Direct cost:** known test-attributable cash costs, including refunds,
  processor fees, contractors, delivery materials, and paid tools.
- **Human hours:** actual human time by role; do not convert it to a cost unless
  an approved, evidence-backed rate is available.
- **Gross profit:** `cash collected - direct cost`. Base-case gross profit uses
  no speculative future cash, estimated labor savings, or assumed renewals.

For reply, meeting, proposal, close, delivery-acceptance, and repeat rates,
show the recorded numerator and denominator. If the denominator does not
exist, report `N/A — denominator unavailable` and describe the evidence gap.

## Select one decision

Use one, and only one, of these labels verbatim:

- `STOP — no credible signal or unacceptable economics`
- `REVISE — signal exists but offer, channel, or delivery failed`
- `REPEAT — one more bounded test is justified`
- `SCALE — cash and delivery proof support increased volume`

### STOP — no credible signal or unacceptable economics

Choose `STOP` when there is no credible signal after a fair bounded test, the
economics are unacceptable, a legal/policy/safety issue blocks the route, or
missing authority/proof prevents an honest conclusion. Name the failed
assumption and do not continue merely because effort has already been spent.

### REVISE — signal exists but offer, channel, or delivery failed

Choose `REVISE` when a credible signal exists but a specific fixable element
failed: buyer/offer fit, price, channel, delivery quality, acceptance criterion,
or cost structure. State the one change, the next bounded hypothesis, and the
new stop condition. Do not conceal refunds, rework, or rejection.

### REPEAT — one more bounded test is justified

Choose `REPEAT` when the result has credible but insufficient evidence for
scale, the delivery outcome is acceptable or the remaining uncertainty is
narrow and safely testable, and one more bounded test can resolve it within a
defined cost and human-work ceiling. State the exact evidence gap and threshold
for the next review.

### SCALE — cash and delivery proof support increased volume

Choose `SCALE` only when all of the following are true:

1. At least one settled payment supports the `Cash collected` result.
2. Delivery acceptance is documented against pre-defined criteria.
3. Base-case gross profit is positive using settled cash minus known direct
   cost, with material unknown costs disclosed.
4. Delivery capacity, correction/refund handling, authority, and compliance
   remain credible at the proposed increased volume.

Never choose `SCALE` on a simulation, estimated economic value, pipeline
signal, invoice, contract, booked revenue, or any combination of those alone.
If these conditions are not met, choose `STOP`, `REVISE`, or `REPEAT` based on
the actual evidence rather than calling the result a scale candidate.

## External next steps

A decision authorizes no external action. If a next step would contact, send,
post, publish, purchase, charge, sign, submit, or change an account, stage the
exact payload. Immediately before execution, disclose its destination, expected
cost, evidence label, and rollback/correction path and obtain explicit approval
for that exact action. Any material change requires a fresh immediate approval.
