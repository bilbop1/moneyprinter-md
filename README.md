# MoneyPrinter.md

> The models are finally good. Their money playbooks are not.

**A receipts-first revenue operating system for frontier agents.**

No guaranteed income. No fake benchmark dollars. No autonomous spam.
MoneyPrinter interviews you, recommends one bounded payable test when the
evidence supports it—or a smaller discovery step when payment would be
premature—and helps you research, offer, sell, deliver, and measure legitimate
value.

Portable Agent Skills source · [host compatibility](docs/compatibility.md) · [evidence standard](skills/moneyprinter/references/evidence-standard.md)

```sh
# From this repository checkout
npx skills add .
```

The repository is prepared for publication as `bilbop1/moneyprinter-md`; that
remote is a publication target, not a live-install claim. See [Install](docs/install.md)
for local verification, remote confirmation, and manual-copy routes.

## Twenty-second explanation

Invoke `moneyprinter`. It asks a short interview about the assets, expertise,
proof, time, budget, authority, and risk you actually have. It then compares no
more than three routes, recommends one bounded payable test (or a smaller
discovery step when no credible test exists) and one fallback, and asks you to
approve the route before it creates acquisition assets. It asks again
immediately before any message, post, purchase, contract, or publication.

What if personal AGI does not arrive as one magic model, but as a person, a
frontier agent, and a library of economic skills that compound? That is the
question this repository is testing—not a claim that it has been solved.

## How the interview routes different people

MoneyPrinter starts from reality rather than an archetype. A person with no
audience may get a one-contact, fixed-scope test. A local operator may get a
permissioned internal-workflow audit. A regulated professional gets a narrower
route with qualified review and no delegated judgment. A creator gets a
disclosed, policy-checked test rather than an engagement-growth promise.

The output is a **Revenue Profile**, a primary route, a fallback, and an
**Experiment Brief** with buyer, pain, offer hypothesis, cost ceiling, proof
label, continue threshold, and stop condition. If a credible payable test does
not exist, it says so and proposes a smaller discovery step.

## Receipts taxonomy

Economic language is a safety feature. Every result must carry exactly one
label; a better-looking label cannot be inferred from weaker evidence.

| Label | Means |
| --- | --- |
| Cash collected | A payment has settled. |
| Revenue contracted | A signed obligation exists; payment has not settled. |
| Revenue booked | An invoice or order exists; payment has not settled. |
| Pipeline signal | A reply, meeting, proposal, waitlist, or intent exists. |
| Estimated economic value | A model with explicit assumptions and sensitivity. |
| Simulation | A benchmark or hypothetical result. |
| Unverified anecdote | A reported result without independent support. |

Read the full [evidence standard](skills/moneyprinter/references/evidence-standard.md)
before publishing a field report.

## Three persona examples

All examples are simulations: they are workflow demonstrations, not results,
endorsements, or forecasts.

- [Starting from zero](examples/starting-from-zero.md): a $49 manual follow-up
  sheet test with a single permitted contact and a four-hour ceiling.
- [Roofer](examples/roofer-revenue-recovery.md): a permissioned internal
  estimate-follow-up audit that never contacts homeowners or promises recovery.
- [Lawyer](examples/lawyer-productized-expertise.md): an attorney-reviewed
  educational FAQ route that excludes individualized legal advice.

There are also simulations for a [TikTok Shop creator](examples/tiktok-shop-conversion.md)
and an [existing service business](examples/existing-business-leverage.md).

## Skill map

| Skill | Job | Output |
| --- | --- | --- |
| `moneyprinter` | Interview and route selection | Revenue Profile and Experiment Brief |
| `opportunity-radar` | Current, source-labeled demand research | Opportunity dossier |
| `offer-engine` | Fixed-scope offer and economics | Offer brief |
| `payable-test` | Smallest legitimate payment test | Test card and thresholds |
| `ethical-acquisition` | Permissioned acquisition planning | Drafts only, pending approval |
| `delivery-proof` | Delivery boundary and proof capture | Acceptance record and field report |
| `cashflow-review` | Stop, revise, repeat, or scale decision | Review decision |

Each skill is deliberately narrow. Start with `moneyprinter`; it chooses the
next skill only after a route is approved.

## Compatibility

The canonical package is seven [Agent Skills](https://agentskills.io/specification)
directories. The `skills` installer documents targets for Claude Code, Codex,
Kimi Code CLI, and OpenClaw; Hermes has a documented manual route. GUI and web
surfaces may require manual import, and MiniMax is treated as a provider rather
than a confirmed native skill host. No host is claimed as conversation-validated
by this release.

Use the [compatibility matrix](docs/compatibility.md) for the status of each
surface and [installation guide](docs/install.md) for the local, published, and
manual routes.

## Research and proof methodology

Research distinguishes primary or official evidence, replicated evidence,
practitioner heuristics, and project hypotheses. Every research reference gets
a source and review date in the [source ledger](research/source-ledger.md).

The [persona evals](evals/README.md) exercise the interview and safety
boundaries for a beginner, roofer, lawyer, creator, and experienced operator.
They do not represent customer outcomes. The relevant host documentation and
fresh market evidence should be checked again before a real external action.

## Safety and external-action gates

MoneyPrinter excludes trading, gambling, speculative crypto, adult services,
deceptive growth, impersonation, fake reviews, undisclosed synthetic
testimonials, spam, and platform-rule evasion. It also does not automatically
send, post, purchase, charge, sign, contract, or publish.

The user must approve a specific external action immediately before execution.
If the audience, channel, spend, payload, timing, account, or another material
detail changes, approval must be renewed. Read the full
[safety boundaries](skills/moneyprinter/references/safety-boundaries.md).

## Contributing and field reports

Useful contributions make the repository more inspectable: current sources,
bounded workflows, clear evidence labels, and tests that prove the route stays
inside its safety boundary. Start with [Contributing](CONTRIBUTING.md).

Use the Field Report issue form only for a redacted, consent-aware account of
what occurred. A failed test, a contradictory source, or an approval gate that
prevented a bad action is useful evidence too. Use the research-correction form
when a factual claim needs repair.

## Voluntary 1% pledge

If MoneyPrinter produces attributable profit for you, consider voluntarily
returning 1% of that profit through Ko-fi. No tracking and no obligation. It
funds source review, compatibility checks, and new field-tested playbooks.

This is a social contract, not a license term, success fee, or payment
requirement. There is no funding link until the owner confirms the precise
Ko-fi username; read the [pledge](PLEDGE.md) and [funding note](docs/funding.md).

## License and disclaimer

MoneyPrinter is released under the [MIT License](LICENSE). It is a workflow
library, not legal, financial, tax, medical, employment, or platform-policy
advice. You remain responsible for review, consent, compliance, and every
external action. It does not promise income, profit, customers, conversion, or
any particular result.
