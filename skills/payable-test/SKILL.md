---
name: payable-test
description: Turn an approved Offer Brief into one ethical, smallest viable paid validation plan with clear payment terms, evidence labels, cost limits, and a specific human approval gate. Use after offer-engine creates an Offer Brief and before acquisition or delivery.
license: MIT
metadata:
  author: bilbop
  version: "0.1.0"
---

# Payable Test

Test whether a buyer will meet a real payment condition for a narrow, honest
offer. Do not promise income, treat a simulated result as cash, or use a free
interest signal as paid validation when a lawful, feasible payable test exists.
Free-interest is not payable validation when a lawful, feasible payable test
exists.

## Preconditions

Require one approved `Offer Brief` from `offer-engine`, including its buyer,
scope, exclusions, price hypothesis, unit economics, smallest payable version,
evidence label, delivery authority, and stop condition. Route back to
`offer-engine` when any of those decisions are missing, unsupported, unsafe, or
depend on unavailable authority. Offer approval is not permission to contact a
buyer, publish an asset, accept a payment, or make any other external action.

Read `references/test-designs.md` and `references/approval-gates.md` before
selecting a test. Stay lawful, permissioned, and within platform rules. Stop
for regulated work without qualified review, misleading terms, unknown
fulfillment capacity, unavailable refund handling, or a cost that breaches the
approved ceiling; name the smallest safe discovery step instead.

## Workflow

1. Separate known facts, evidence-backed observations, assumptions, and open
   questions. Preserve the Offer Brief's evidence label; do not upgrade it.
2. Choose exactly one test that matches the buyer, delivery boundary, authority,
   economics, and speed constraint: paid diagnostic, paid pilot, preorder with
   clear terms, deposit-backed booking, manual concierge service, paid workshop
   or office hour, existing-customer upsell, or conversion or recovery
   experiment. Do not offer a menu.
3. Specify the payment condition: exact price or price hypothesis, currency,
   what a buyer receives, when payment is due or authorized, delivery timing,
   cancellation or refund terms, and any qualification limit. A deposit or
   preorder is valid only when its terms and delivery obligation are clear and
   lawful.
4. Set a cash-spend ceiling and a human-work ceiling. Show the inputs from the
   Offer Brief, label unknown inputs as unknown, and stop rather than imply a
   positive margin without a credible delivery path.
5. Define the test artifact and one permissible acquisition surface. Stage the
   artifact only; do not send, post, publish, charge, sign, submit, purchase,
   or change an account.
6. Set a continue threshold based on a real payment condition or the strongest
   available evidence label. A like, view, click, waitlist, reply, free call,
   survey, or stated interest is a `Pipeline signal`, not payable validation,
   whenever a payable test is feasible. If no payable test is feasible, explain
   why, use the weaker label, and state the condition required to make a paid
   test feasible.
7. Set a stop condition covering price resistance, absent payment, failed
   delivery authority, cost overrun, refund/correction inability, policy or
   legal concern, or evidence below threshold.
8. Produce the required plan and an explicit approval checkpoint from
   `references/approval-gates.md`. Keep all acquisition assets staged until the
   human approves the exact next external action immediately before execution.

## Required output

Start with the fact and assumption separation. Then use these headings exactly,
in this order:

# Payable Test Plan

## Hypothesis
## Buyer and offer
## Test artifact
## Acquisition surface
## Price and payment condition
## Cost ceiling
## Human work required
## Evidence label available
## Continue threshold
## Stop condition
## Approval checkpoint

Under `Approval checkpoint`, show the exact staged payload, destination,
expected cost, and rollback or correction path for the next action. State that
drafting is reversible, identify the action as external, request explicit
approval for that one action, and list material changes that require a new
approval. Do not execute the action.

## Failure modes

- Do not call free interest, a verbal promise, an invoice, or a reservation
  cash collected; apply the correct evidence label.
- Do not use a deposit, preorder, or charge without clear deliverable,
  cancellation/refund handling, fulfillment authority, and immediate specific
  approval.
- Do not substitute a broad marketing campaign, free trial, or waitlist for a
  payable test when a bounded paid version is feasible.
- Do not exceed the approved cost or work ceilings, invent buyer consent,
  suppress price terms, or create external assets beyond staged drafts.
