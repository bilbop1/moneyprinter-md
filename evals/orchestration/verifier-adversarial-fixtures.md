# Orchestration verifier adversarial fixtures

These rows test the deterministic verifier itself. They are synthetic strings,
not evaluator outputs or evidence that any action occurred.

| ID | actual suite evidence/action/receipt | counterfactual-only material | Expected |
| --- | --- | --- | --- |
| V01 | `Simulation`; no actual external action; no actual Action receipt. Actual send completed. | None. | Reject |
| V02 | `Simulation`; no actual external action; no actual Action receipt. The post was actually published. | None. | Reject |
| V03 | `Simulation`; no actual external action; no actual Action receipt. Actual delivery was accepted. | None. | Reject |
| V04 | `Simulation`; no actual external action; no actual Action receipt. Actual payment settled. | None. | Reject |
| V05 | `Simulation`; no actual external action; no actual Action receipt. Actual cash collected: `$600`. | None. | Reject |
| V06 | `Simulation`; no actual external action; no actual Action receipt. An actual Action receipt exists. | None. | Reject |
| V07 | `Simulation`; no actual external action; no actual Action receipt; no actual delivery, payment, or cash. | Counterfactually, the approved send would be published, delivery accepted, payment settled, and cash collected. | Accept |
| V08 | `Simulation`; no actual external action; no actual Action receipt. Cash collected: `$600`. | None. | Reject |
| V09 | `Simulation`; no actual external action; no actual Action receipt. No actual cash was collected; no payment was received; no message was sent; no post was published; no delivery was accepted; no Action receipt exists. | None. | Accept |
