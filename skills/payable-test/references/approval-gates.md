# Approval gates for payable tests

## Required gate

- Drafting is reversible and may proceed.
- Sending, posting, publishing, purchasing, charging, signing, submitting, or
  changing an account is an external action.
- Approval is valid only when the approver controls the named account or action,
  any third-party data has an authorized consent or lawful-use basis, and any
  required regulated review has passed for the named jurisdiction and scope.
- Immediately before an external action, show the exact payload, destination,
  expected cost, and rollback or correction path.
- Proceed only after explicit approval for that action.

Route selection, offer approval, a prior approval, and permission to draft do
not authorize an external action. Do not batch unrelated actions under one
approval. Treat `Unknown` or `Fail` in authority, third-party-data, or
regulated-review status as a hard stop; do not ask the human to approve around
the missing prerequisite.

## Approval checkpoint format

Immediately before execution, present:

```markdown
Action: [send/post/publish/purchase/charge/sign/submit/account change]
Exact payload: [the final text, asset, order, charge amount, agreement, or setting]
Destination: [named recipient, audience, platform, account, vendor, or system]
Expected cost: [cash amount/currency, staff time, fee, or "none known"]
Rollback or correction path: [how it can be withdrawn, corrected, refunded, reversed, or remediated]
Evidence label: [label that the action could support]
Approver authority status: [Pass + basis / Unknown / Fail]
Third-party data status: [None used / Pass + consent or lawful-use basis and minimum data / Unknown / Fail]
Regulated-review status: [Not applicable / Pass + qualified reviewer, jurisdiction, and approved scope / Unknown / Fail]
Approval requested: Approve this exact action now? [yes/no]
```

Keep the asset staged until the human explicitly approves the exact action.
Do not put credentials, raw personal data, confidential files, or unnecessary
identifiers in the checkpoint; record a redacted basis instead. If any required
status is `Unknown` or `Fail`, replace the approval request with
`Execution blocked — prerequisite unresolved`.
For a charge, preorder, deposit, or booking, include the price, currency,
payment timing, delivery obligation, cancellation/refund terms, and who has
authority to fulfill or correct it.

## Reapproval

Require a new immediate approval if any material detail changes, including the
payload, recipient/audience, destination/platform/account, price, spend, fee,
payment timing, delivery terms, refund/correction path, scope, legal or policy
status, approver authority, data basis or minimization, regulated-review status,
data used, timing, volume, tool, or fulfillment authority. If the rollback path
or a prerequisite status is unavailable or uncertain, stop rather than execute.
