# Task 4 report: public session-scan copy

## Status

Complete. Current public documentation now leads with the permissioned 14-day
session scan and the full confirmation-to-rerank loop. Published rc.2 facts
remain dated history, and no new behavior is described as public.

Implementation commit:

- `c0eeec4` (`docs: lead MoneyPrinter with session scan`)

## RED evidence

Added `scripts/verify-public-copy.mjs` before changing production copy.

Command:

```sh
node scripts/verify-public-copy.mjs
```

Initial result: exit 1 with 83 failures.

Representative expected failures:

- README did not contain the approved headline.
- README did not contain one confirmation, cash-first priority, private
  continuation, exact-action execution, an Action receipt, or reranking.
- Current launch and submission copy still used interview-first language.
- Security and compatibility did not contain the new scan boundaries.
- None of the five examples contained the ordered receipt-to-rerank sections.
- The changelog had no unreleased rc.3 note.

The failure was caused by the missing copy contract, not a syntax or fixture
error.

## GREEN evidence

After the rewrite:

```text
public copy contract: 39 current files and 5 simulations verified
```

The verifier now checks:

- the approved headline in README and the canonical fact sheet;
- the public workflow from confirmation through cash-first private work,
  exact-action approval, receipt, and reranking;
- stale interview-first phrases across current documentation and all 22
  submission packets;
- consent, prompt-injection, credential-path, raw-history, coverage, one-off
  action, and autonomous-action security boundaries;
- installer support versus cross-application session-store access;
- ordered scan, confirmation, ranking, private work, approval, action receipt,
  and rerank sections in all five simulations;
- the unreleased rc.3 changelog note without a metadata bump.

## Files changed

Copy contract:

- `scripts/verify-public-copy.mjs`

Primary public and operator documentation:

- `README.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `docs/install.md`
- `docs/compatibility.md`
- `docs/troubleshooting.md`
- `evals/README.md`
- `research/README.md`
- `site/README.md`

Launch and release documentation:

- `launch/fact-sheet.md`
- `launch/channel-matrix.md`
- `launch/launch-control.md`
- `launch/show-hn.md`
- `launch/x-launch.md`
- `launch/submissions/README.md`
- all 22 `launch/submissions/*.md` packets
- `ROADMAP.md`
- `CHANGELOG.md`

Simulations:

- `examples/starting-from-zero.md`
- `examples/roofer-revenue-recovery.md`
- `examples/lawyer-productized-expertise.md`
- `examples/tiktok-shop-conversion.md`
- `examples/existing-business-leverage.md`

Historical specs, plans, rc.1/rc.2 eval outputs, and landing-page QA snapshots
were not rewritten.

## Copy decisions

- README and the fact sheet carry the approved headline verbatim after
  whitespace normalization.
- Coverage is always limited to detected, permitted, accessible sources.
- MoneyPrinter remains a portable Markdown skill. No companion app was added or
  proposed.
- The scan asks for one confirmation, ranks cash evidence and payable speed
  first, then continues through private research, offer creation, payable-test
  design, acquisition preparation, and delivery preparation.
- Scan permission and route confirmation never authorize an external action.
  One exact action receives immediate approval, an Action receipt, result
  review, and reranking.
- Every example remains visibly marked `Simulation`, uses hypothetical receipts
  and outcomes, and reports hypothetical cash collected as `$0`.
- Live GitHub rc.2, landing-page rc.2, Awesome Skills, and ClawHub v1.0.0 facts
  remain dated status records. New packet copy is labeled for a later release
  or sync.
- Skill and site versions remain `0.1.0-rc.2`. The only rc.3 version text
  outside historical planning material is the unreleased changelog heading and
  its note.

## Humanizer review

The draft audit found the main risk was repetitive directory-listing cadence.
The final pass kept canonical facts consistent but cut promotional framing,
generic hype, and interview-era filler. Added lines contain no em dash, en
dash, curly quote, emoji, stock significance language, chatbot signposting, or
guaranteed-income claim.

## Verification

Fresh pre-commit gate:

```text
node scripts/verify-public-copy.mjs
public copy contract: 39 current files and 5 simulations verified

node scripts/verify-release.mjs
release 0.1.0-rc.2: 7 skills and 6 X posts verified

node scripts/verify-money-machine-chain.mjs
money-machine chain contract: 6 skills and 11 references verified

uvx --offline --from skills-ref agentskills validate skills/moneyprinter
Valid skill: skills/moneyprinter

npx skills add . --list
Found 7 skills

stale public copy audit: clean
humanizer punctuation audit: clean
release-boundary audit: rc.3 only in CHANGELOG.md
git diff check: clean
```

Only the MoneyPrinter validator was required because Task 4 did not modify any
skill or reference file. The chain verifier still covered all six downstream
skills and eleven references.

## Self-review

- Exact headline and workflow order: present.
- Permission and incomplete-coverage qualifiers: present.
- Prompt injection, credential paths, raw-history leakage, and coverage receipt
  rules: present.
- One-off exact action versus autonomous or bulk action: distinct.
- Five simulations: complete and still hypothetical.
- Current submission packets: scan-first.
- Historical rc.2 status: preserved.
- Metadata/version drift: none.
- Task 5 landing page and images: untouched.

## Concerns and next boundaries

1. The landing page, metadata, previews, and social image still show rc.2 and
   interview-era visuals. Task 5 owns those changes.
2. The new behavior and listing copy are not public until the later release and
   distribution task completes its live checks.
3. The examples model approved sends or a post only inside explicit
   simulations. They are not field evidence or permission for a real external
   action.
4. Historical eval outputs do not validate the new scan behavior. The
   session-scan evaluation task must produce separate retained results.
