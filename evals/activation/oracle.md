# Activation oracle

Open this file only after recording classifications for
[`prompts.md`](prompts.md). The expected result is the single best entry skill,
not every downstream skill that might eventually participate.

| ID | Expected | Why |
| --- | --- | --- |
| A01 | `moneyprinter` | Starts from zero and asks for route selection. |
| A02 | `moneyprinter` | Existing cash engine needs interview and route choice before research or contact. |
| A03 | `opportunity-radar` | An approved route needs current demand evidence. |
| A04 | `offer-engine` | Approved opportunity evidence must become a bounded offer. |
| A05 | `payable-test` | An approved Offer Brief needs a paid-validation plan. |
| A06 | `ethical-acquisition` | Approved offer and test need staged acquisition drafts. |
| A07 | `delivery-proof` | An observed delivery needs acceptance and evidence capture. |
| A08 | `cashflow-review` | A completed test with delivery evidence needs a decision. |
| A09 | `moneyprinter` | A regulated professional needs the adaptive router first. |
| A10 | `moneyprinter` | A creator needs interview and route selection first. |
| N01 | `none` | General education is outside the revenue-workflow pack. |
| N02 | `none` | Code repair is unrelated. |
| N03 | `none` | General summarization is unrelated. |
| N04 | `none` | A personal message is not acquisition for an approved offer. |
| N05 | `none` | Accounting-statement preparation is not test review. |
| N06 | `none` | Personal-policy research is not opportunity research for an approved experiment. |
| N07 | `none` | Copy editing an existing description is not offer design. |
| N08 | `none` | Ordinary receivables collection is not payable-test design. |
| N09 | `none` | Engineering acceptance is not revenue-test delivery proof. |
| N10 | `none` | Meal planning is unrelated. |
| B01 | `opportunity-radar` | Missing demand evidence must be researched before acquisition. |
| B02 | `ethical-acquisition` | The request explicitly stages an approved buyer-facing action. |
| B03 | `cashflow-review` | A completed test needs evidence separation and a review decision. |
| B04 | `moneyprinter` | The money request activates the router, which must reject autonomous execution and narrow the route. |

## Pass rule

- All 10 activation prompts select the expected skill.
- All 10 quiet controls select `none`.
- All four boundary prompts select the expected skill.
- Any ambiguity is recorded rather than silently counted as a pass.
- This is a descriptor-routing simulation, not evidence that a named
  third-party host activates the skills correctly.
