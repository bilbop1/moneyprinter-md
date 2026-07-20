# Orchestration fixture defect and correction

The first blind orchestration run is retained but its `6/6` grade is withdrawn.

## Initial input hashes

- Prompt SHA-256:
  `7a534f820c7c6d03026b3ebfc6f36e100ac0bc8a0b84ae88c3ad358d1d9eb03b`
- Oracle SHA-256:
  `c068d9078434df0bc76d4fdda5e5521348143b6c929feca21cf890d12ccc6dd8`
- Evaluated skill commit:
  `b6d2fe859553e5f998ea3b6138006ce535b21d98`

## Defect

The initial prompt said every named receipt, payment, and artifact was a
simulation, but its oracle asked the evaluator to label some of those
hypothetical records `Cash collected` and choose `SCALE`. That conflicts with
the pinned evidence standard and decision rules: hypothetical suite evidence is
`Simulation`, and simulation cannot support an operational `SCALE` decision.
The initial raw trace followed the defective oracle-shaped framing, so its
reported `6/6` is invalid.

The original O06 trace also said timing, evidence implications, and rollback
facts changed even though its prompt did not supply those changes. That
unsupported embellishment remains visible in the original raw output.

## Correction

The corrected fixtures separate:

1. actual suite evidence, always `Simulation`, with no actual action, Action
   receipt, cash, delivery, decision, or rerank; and
2. a clearly prefixed counterfactual label and decision branch describing what
   would apply only if the scenario's stipulated records were real, inspected,
   privacy-safe, and verified.

Corrected O06 enumerates every original checkpoint field, names exactly which
fields change, and states which fields remain unchanged.

The skill and its evidence standard were not changed. The corrected suite uses
a fresh blind evaluator. Both raw runs and both grades remain inspectable.

## Corrected input hashes

- Prompt SHA-256:
  `bb2bc74b7cf8669d493a3bb3413d7f60f9cbe268f82218d3eef60e8ca64aab56`
- Oracle SHA-256:
  `43f2e06c96eaca03723c8a380fc89f6b9c283583afc94614e5e78372e4b83052`

## Evaluator provenance

- Initial evaluator label: `blind-evaluator-a`
- Corrected evaluator label: `blind-evaluator-b`
- Evaluator task UUIDs: `Unavailable`; the collaboration surface exposed
  stable evaluator labels but no independent UUIDs.
- The first two combined corrected-run attempts were interrupted after
  prolonged no-response and returned no raw output. The same still-blind
  corrected evaluator then completed the bounded six-row orchestration table.
