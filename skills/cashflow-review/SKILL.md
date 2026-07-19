---
name: cashflow-review
description: Review a completed payable test using cash, delivery evidence, and bounded funnel metrics, then choose one honest stop, revise, repeat, or scale decision. Use after delivery-proof records an observed result.
license: MIT
metadata:
  author: bilbop
  version: "0.1.0"
---

# Cashflow Review

Review a bounded test without treating estimates, invoices, contracts, or
pipeline as collected cash. This skill analyzes user-provided records and
stages recommendations only; it does not contact, publish, purchase, charge,
contract, or make account changes.

## Preconditions

Require the approved `Payable Test Plan`, `Delivery Record`, observed result,
and available payment, cost, funnel, and acceptance records. Read
`references/decision-rules.md`. Separate known facts, observed evidence,
assumptions, and missing data. Preserve each result's canonical evidence label
and do not infer a denominator, payment settlement, client acceptance, or
repeat purchase.

## Globally excluded v1 lanes

An upstream plan, result, or claimed approval never overrides these refusals.
Refuse each request directly and offer only its safe adjacent route:

- **Trading:** refuse strategies, signals, execution, or speculation-linked
  tests. Offer a fixed-scope, non-financial-advice operations or
  record-organization service for a permissioned buyer.
- **Gambling:** refuse tips, betting systems, wagering acquisition, or related
  tests. Offer a lawful non-gambling workshop or manual service based on a
  verified transferable skill.
- **Speculative crypto:** refuse token speculation, promotion, trading, or a
  speculation-dependent test. Offer non-speculative technical documentation or
  a workflow diagnostic with no investment claim.
- **Adult services:** refuse adult services and related acquisition, payment,
  or delivery. Offer a lawful non-adult service with a clear buyer and scope.
- **Deceptive growth:** refuse fabricated proof, false scarcity, concealed
  commercial intent, or deceptive tactics. Offer truthful education or
  permissioned one-to-one work for a bounded offer.
- **Impersonation:** refuse a false identity, affiliation, or authority. Offer
  a staged asset using the real, disclosed sender identity and intent.
- **Fake reviews:** refuse creating, buying, soliciting deceptively, or
  publishing fake reviews. Offer voluntary verified feedback after real,
  permissioned delivery, with no reward for sentiment.
- **Spam scraping:** refuse scraping contact data for spam or unsolicited bulk
  outreach. Offer a user-provided permissioned relationship, rule-compliant
  inbound route, or warm channel.
- **Autonomous external actions:** refuse autonomous sending, posting,
  publishing, purchasing, charging, signing, submitting, or account changes.
  Offer a staged exact asset and wait for the immediate approval gate.

## Workflow

1. Reconcile records into separate amounts: `Cash collected` is only settled
   payments; `Revenue contracted` is signed obligations not yet collected; and
   `Revenue booked` is unpaid invoices or orders. Do not sum them as cash.
2. Calculate direct cost from known, test-attributable cash costs (for example
   refunds, processor fees, contractors, delivery materials, and paid tools).
   Record human hours separately by role and do not fabricate an hourly cost.
   Calculate `Gross profit = cash collected - direct cost`; mark it unknown if
   either input is unavailable.
3. When the denominator exists, calculate each rate as numerator divided by its
   recorded denominator and show numerator/denominator: replies per delivered
   messages or eligible inbound opportunities; meetings per replies; proposals
   per meetings; closes per proposals; delivery acceptances per deliveries
   submitted; repeat purchases per eligible accepted customers. Otherwise show
   `N/A — denominator unavailable`, not zero.
4. Compare delivery acceptance, gross profit, direct cost, human hours, and
   evidence quality with the approved test's thresholds. Report failed criteria,
   refunds, rework, missing evidence, and uncertainty plainly.
5. Choose exactly one decision from `STOP`, `REVISE`, `REPEAT`, or `SCALE` using
   `references/decision-rules.md`. State why the other three do not apply.
6. If the recommended next step would send, post, publish, purchase, charge,
   sign, submit, contact a client, or change an account, stage it. Immediately
   before execution, show the exact payload, destination, expected cost,
   evidence label, and rollback/correction path, then request explicit approval
   for that one action now. A material change needs a fresh immediate approval.

## Required output

Start with known facts, observed evidence, assumptions, and open questions.
Then use these headings exactly, in this order:

# Cashflow Review

## Evidence labels and records
## Revenue reconciliation
## Cost and human time
## Gross profit
## Funnel and retention rates
## Delivery acceptance and failure report
## Decision
## Next bounded step
## Approval checkpoint

In `Revenue reconciliation`, list cash collected, revenue contracted, and
revenue booked as separate totals with evidence. In `Funnel and retention
rates`, include reply, meeting, proposal, close, delivery-acceptance, and
repeat rates when their denominators exist; otherwise state `N/A — denominator
unavailable`. In `Decision`, print exactly one decision label and its full
meaning from the decision rules. In `Approval checkpoint`, state `None — no
external action proposed` unless a specific staged external action exists.

## Failure modes

- Do not call simulation, estimated value, pipeline, an invoice, or a contract
  cash collected, or use them to hide a negative cash result.
- Do not calculate a rate with an invented denominator, treat unavailable data
  as zero, or claim an unmeasured repeat rate.
- Do not scale without positive base-case gross profit and actual delivery
  acceptance; report refunds, rework, failed criteria, and missing evidence.
- Do not take an external action from a review or past approval; every action
  needs an immediate fresh exact approval.
