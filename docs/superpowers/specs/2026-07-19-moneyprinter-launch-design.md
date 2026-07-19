# MoneyPrinter Launch Design

**Date:** 2026-07-19  
**Status:** Approved for overnight implementation  
**Working name:** MoneyPrinter

## Product verdict

MoneyPrinter will be a compact, research-backed revenue operating system for AI
agents. It will not compete with general-purpose skill collections on breadth.
Its wedge is a guided route from a user's real assets and constraints to a
specific, ethical revenue experiment, with evidence labels and cash receipts
that prevent simulated or estimated value from being presented as earned money.

The launch will combine four surfaces:

1. An open GitHub repository containing portable Agent Skills.
2. GitHub-native proof, contribution, and field-report mechanics.
3. Listings and submissions to relevant skill directories and marketplaces.
4. A focused landing page prepared for `bilbop.org`.

## Audience and promise

The same front door must serve:

- people starting without an offer, audience, or business;
- creators, freelancers, and professionals with underused assets;
- established operators seeking a faster acquisition, delivery, or retention
  loop;
- local businesses, professional services, ecommerce operators, creators, and
  technical founders.

The promise is not guaranteed income. The promise is a disciplined process for
identifying, validating, selling, and delivering legitimate value with a
frontier agent.

## Positioning

Primary hook:

> The models are finally good. Their money playbooks are not.

Primary descriptor:

> A receipts-first revenue operating system for frontier agents.

The personal-AGI idea will be framed as a question or thesis, not as a factual
claim:

> What if personal AGI does not arrive as one magic model, but as a person, a
> frontier agent, and a library of economic skills that compound?

The project may use a provocative name, but the README and site must immediately
reject get-rich-quick promises, fake benchmark earnings, deceptive tactics, and
autonomous external actions.

## Scope

### Included in v1

- A quick diagnostic interview and revenue-path router.
- Opportunity research grounded in current evidence.
- Offer design with a concrete buyer, outcome, price logic, proof plan, and
  delivery boundary.
- A smallest-payable-test workflow.
- Ethical acquisition planning and human-approved outreach drafting.
- Delivery and proof capture.
- Cashflow review, retention, and next-experiment selection.
- Vertical route cards for local services, professional services, creators and
  ecommerce, technical operators, and people starting from zero.
- Source and evidence standards.
- Field-report templates that distinguish real cash from weaker signals.

### Excluded from v1

- Trading, gambling, speculative crypto, adult services, deceptive growth,
  impersonation, fake reviews, undisclosed synthetic testimonials, scraping for
  spam, or bypassing platform rules.
- Automatic sending, posting, purchasing, charging, contracting, or publishing.
- Claims that an output, benchmark score, invoice, booked meeting, or estimated
  labor value is cash collected.
- A custom agent runtime, MCP server, connector suite, or multi-harness plugin
  framework.

## Product architecture

The source of truth will follow the open Agent Skills format:

```text
skills/
  moneyprinter/
    SKILL.md
    references/
      interview.md
      route-map.md
      evidence-standard.md
      safety-boundaries.md
  opportunity-radar/
    SKILL.md
    references/
  offer-engine/
    SKILL.md
    references/
  payable-test/
    SKILL.md
    references/
  ethical-acquisition/
    SKILL.md
    references/
  delivery-proof/
    SKILL.md
    references/
  cashflow-review/
    SKILL.md
    references/
```

Each skill will have one job, specific activation language, a bounded workflow,
explicit outputs, human approval gates, and failure modes. Detailed research and
templates will be loaded through direct references so the active context remains
small.

The repository will use the common Agent Skills subset. Installation will
prefer the existing `npx skills` ecosystem rather than maintaining duplicated
Claude, Codex, Kimi, Hermes, and OpenClaw copies. Compatibility documentation
will separate:

- verified native or installer support;
- manual import or project-knowledge support;
- provider-only or unverified surfaces.

MiniMax will be described honestly as a model/provider surface unless a stable
consumer skill host can be verified.

## User flow

1. The user invokes `moneyprinter`.
2. The agent runs a short adaptive interview covering current assets, expertise,
   audience, offer, proof, budget, time, geography, risk, and speed-to-cash.
3. The router produces a concise `Revenue Profile`.
4. It compares at most three paths using time to first payable test, evidence of
   demand, dependency risk, margin potential, and fit.
5. The user approves one path.
6. The relevant skills build a smallest payable test.
7. External actions remain staged until the user explicitly approves them.
8. Results are recorded using the evidence standard.
9. `cashflow-review` decides whether to stop, revise, repeat, or scale.

The router must not bury the user in a generic business plan. Its default output
is one recommended experiment, one fallback, the reason, the first action, and a
clear proof threshold.

## Evidence and receipts standard

All economic claims must use one of these labels:

1. **Cash collected** — settled payment received.
2. **Revenue contracted** — signed obligation, not yet collected.
3. **Revenue booked** — invoice or order created, not yet settled.
4. **Pipeline signal** — reply, meeting, proposal, waitlist, or intent.
5. **Estimated economic value** — modeled value with explicit assumptions.
6. **Simulation** — benchmark or hypothetical result.
7. **Unverified anecdote** — reported but not independently supported.

Public field reports must include the time window, starting assets, cash spend,
model and harness, human work, method, result label, and redacted evidence where
safe. Earnings guarantees and cherry-picked extrapolations are forbidden.

Research claims will be marked as:

- primary or official evidence;
- replicated or multi-source evidence;
- practitioner heuristic;
- project hypothesis.

Every research reference must record its source and review date.

## Safety and error handling

The system will:

- stop and ask for approval before external communications or commitments;
- refuse deceptive, illegal, exploitative, or platform-abusive tactics;
- flag regulated professional claims and require qualified human review;
- avoid collecting unnecessary personal information;
- record uncertainty instead of inventing market facts;
- downgrade a route when required tools, accounts, proof, or authority are
  unavailable;
- choose a smaller manual test when automation is unavailable;
- fail honestly when no credible payable test exists.

## GitHub and distribution design

The repository will include:

- a high-impact README with a fast explanation and installation command;
- a compatibility matrix;
- three or more persona walkthroughs;
- a field-report template;
- research-correction and playbook-request issue forms;
- contribution, security, and conduct guidance;
- exact `FUNDING.yml` setup instructions, while omitting the live funding file
  until the real Ko-fi username is confirmed;
- releases, changelog, roadmap, and repository-topic recommendations;
- a directory-submission tracker with requirements, status, and copy;
- ready-to-post launch copy and social images.

Priority visibility surfaces:

- Skills.sh / the `npx skills` ecosystem;
- ClawHub and OpenClaw skill discovery;
- Hermes skills-sh and direct skill sources;
- Claude Code plugin marketplaces where a text-only bundle qualifies;
- Kimi Code plugin or Agent Skills distribution;
- relevant GitHub topic pages and curated awesome lists;
- GitHub Discussions, releases, forks, and field-report contributions.

Submissions must be useful and on-topic. The project will not automate stars,
mass-promote through unrelated issues, or create inauthentic activity.

## Landing page

The landing page will be a single-purpose proof surface, not a generic marketing
site. It will contain:

1. The provocative thesis and anti-hype qualification.
2. A short animated or staged demonstration of the interview-to-experiment flow.
3. The receipts taxonomy.
4. Representative persona routes.
5. Supported agent ecosystems.
6. GitHub and installation calls to action.
7. A transparent voluntary 1% Ko-fi pledge.
8. Methodology, safety, and no-guarantee language.

The design direction will be dark editorial terminal aesthetics with warm
paper/receipt accents. It should feel serious, inspectable, and slightly
subversive rather than casino-like.

The build must be deployable independently, with custom-domain instructions for
`bilbop.org`. A production deployment may use a temporary host URL until domain
DNS ownership can be configured.

## Donation language

Recommended language:

> If MoneyPrinter produces attributable profit for you, consider voluntarily
> returning 1% of that profit through Ko-fi. No tracking and no obligation. It
> funds source review, compatibility checks, and new field-tested playbooks.

The pledge is a social contract, not a license condition. The repository remains
usable without payment.

## Testing and release gates

Before launch:

- validate every `SKILL.md` against the Agent Skills specification;
- test activation and non-activation prompts;
- run persona scenarios for a zero-asset beginner, roofer, lawyer, creator, and
  experienced operator;
- verify the router recommends bounded actions instead of generic plans;
- verify economic labels are applied correctly;
- verify external-action approval gates;
- inspect all rendered README and website visuals;
- test links, mobile layout, accessibility, and install commands;
- label every platform claim as verified, manual, provider-only, or planned;
- scan for placeholders, unsupported earnings claims, missing sources, secrets,
  and unsafe instructions.

No directory submission, GitHub publication, domain change, social post, or
funding link will be performed without confirmed credentials and authorization.

## Success criteria

The overnight package is ready when:

- a new visitor understands the difference within 20 seconds;
- installation takes one command on supported CLI agents;
- the interview produces a useful route for all five test personas;
- no simulated value can be mistaken for cash;
- launch and submission copy is ready to paste;
- the landing page is production-deployable;
- remaining blockers are limited to account access, final handles, domain DNS,
  and explicit publication decisions.
