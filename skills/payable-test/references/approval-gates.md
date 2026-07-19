# Approval gates for payable tests

## Required gate

- Drafting is reversible and may proceed.
- Sending, posting, publishing, purchasing, charging, signing, submitting, or
  changing an account is an external action.
- Immediately before an external action, show the exact payload, destination,
  expected cost, and rollback or correction path.
- Proceed only after explicit approval for that action.

Route selection, offer approval, a prior approval, and permission to draft do
not authorize an external action. Do not batch unrelated actions under one
approval.

## Approval checkpoint format

Immediately before execution, present:

```markdown
Action: [send/post/publish/purchase/charge/sign/submit/account change]
Exact payload: [the final text, asset, order, charge amount, agreement, or setting]
Destination: [named recipient, audience, platform, account, vendor, or system]
Expected cost: [cash amount/currency, staff time, fee, or "none known"]
Rollback or correction path: [how it can be withdrawn, corrected, refunded, reversed, or remediated]
Evidence label: [label that the action could support]
Approval requested: Approve this exact action now? [yes/no]
```

Keep the asset staged until the human explicitly approves the exact action.
For a charge, preorder, deposit, or booking, include the price, currency,
payment timing, delivery obligation, cancellation/refund terms, and who has
authority to fulfill or correct it.

## Reapproval

Require a new immediate approval if any material detail changes, including the
payload, recipient/audience, destination/platform/account, price, spend, fee,
payment timing, delivery terms, refund/correction path, scope, legal or policy
status, data used, timing, volume, tool, or fulfillment authority. If the
rollback path is unavailable or uncertain, stop rather than execute.
