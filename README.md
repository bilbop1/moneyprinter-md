# MoneyPrinter.md

![MoneyPrinter.md: run AI income experiments and keep the receipts](launch/assets/moneyprinter-social-card.png)

> The models are finally good. Their money playbooks are not.

Most AI money playbooks are idea soup.

MoneyPrinter gives your agent a sequence: interview you, pick one route, design
the smallest paid test, ask before doing anything public, then track whether money landed.

It can also tell you the idea is premature. That counts as working.

This repo contains seven open-source Agent Skills. It does not promise income, customers, or a magic autonomous business.

```sh
npx skills add bilbop1/moneyprinter-md
```

Live overview: [moneyprinter.bilbop.org](https://moneyprinter.bilbop.org). A clean remote check found all seven skills.
See the [install guide](docs/install.md) for local checkouts, manual copies, and host-specific notes.

## What happens when you run it

1. Run `moneyprinter`.
2. Answer a short interview about your skills, proof, time, budget, and risk.
3. Review up to three routes. If none deserves a paid test, you get a smaller discovery step.
4. Approve one route and its stop condition.
5. If a payable test earns approval, use the remaining skills through delivery proof and cash review. Discovery routes stop earlier.

It asks again immediately before any message, post, purchase, charge, contract, or publication. A vague "go ahead" is not permanent permission.

## The seven skills

| Skill | What it does |
| --- | --- |
| `moneyprinter` | Interviews you, compares routes, and writes the experiment brief. |
| `opportunity-radar` | Checks current demand and keeps sources attached. |
| `offer-engine` | Turns one problem into a fixed-scope offer with real economics. |
| `payable-test` | Designs the smallest legitimate payment test. |
| `ethical-acquisition` | Stages permissioned outreach for approval. |
| `delivery-proof` | Defines delivery and records what the buyer accepted. |
| `cashflow-review` | Decides whether to stop, revise, repeat, or scale. |

## Five starting points

Every example below is a simulation, not a customer result, endorsement, or forecast.

- [Starting from zero](examples/starting-from-zero.md): one permitted contact and a four-hour ceiling.
- [Roofer](examples/roofer-revenue-recovery.md): a private estimate follow-up audit before any homeowner contact.
- [Lawyer](examples/lawyer-productized-expertise.md): scope mapping with qualified review and no delegated judgment.
- [TikTok Shop creator](examples/tiktok-shop-conversion.md): a disclosed test checked against current platform rules.
- [Existing operator](examples/existing-business-leverage.md): one leaking handoff, measured before live delivery changes.

## What counts as proof

- A reply is pipeline.
- An invoice or order is booked revenue, not collected cash.
- A model is an estimate.
- Only a settled payment with inspected, privacy-safe support is cash collected.

The full [evidence standard](skills/moneyprinter/references/evidence-standard.md) defines the labels used across the pack.

## Compatibility and safety

Installer discovery is verified. Conversation-level host activation is not. Read the [compatibility matrix](docs/compatibility.md) before claiming a host works.
MiniMax is provider-only, not a confirmed native skill host.

MoneyPrinter stages external actions until you give specific human approval. The [safety boundaries](skills/moneyprinter/references/safety-boundaries.md)
cover regulated work, prohibited routes, and when approval expires.

## Read the full docs

[Evidence](skills/moneyprinter/references/evidence-standard.md) · [Compatibility](docs/compatibility.md) · [Research ledger](research/source-ledger.md) ·
[Evaluation](evals/README.md) · [Contributing](CONTRIBUTING.md) · [Safety](skills/moneyprinter/references/safety-boundaries.md)

## License and the 1% pledge

MoneyPrinter uses the [MIT License](LICENSE). If it produces attributable profit, consider voluntarily returning 1% to support maintenance and source review.
The project does not track the pledge. It is not a license term, fee, or payment requirement. Read the [pledge](PLEDGE.md) and [funding note](docs/funding.md).
