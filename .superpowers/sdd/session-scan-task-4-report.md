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

## Review correction pass

This section supersedes the earlier corpus counts and release-boundary wording.
The correction keeps scan-first behavior staged in the checkout while stating
plainly that the current public rc.2 release remains interview-first.

### Findings corrected

- README and the install guide now put an easy-to-flip release note between the
  staged scan-first rc.3 copy and the current public rc.2 installer.
- The public install and activation sections describe rc.2 as interview-first.
  A separate prompt covers a manual copy from the unreleased checkout.
- The live ClawHub v1.0.0 listings are tied to rc.1-source commit
  `61549ff7440331588fd43b6c0707e8d783c51144`, not rc.2.
- Standalone Hermes, OpenAI Plugins, OpenSpace, Product Hunt, and SkillsDir.dev
  descriptions now lead directly with permission.
- SECURITY states that the user controls permitted source scope. It also states
  that legal, medical, financial, regulated, confidential, and sensitive
  subject matter is not excluded solely by category. Authority, privacy,
  least-data, and qualified-review gates still apply.
- Awesome Skills now identifies the five files as rewritten hypothetical
  walkthroughs, not retained rc.3 evaluations.
- Every walkthrough reports both hypothetical cash and real cash as `$0`, and
  continues to reject any claim that the simulated event occurred.

### Focused RED evidence

The first hardened verifier run exposed both product gaps and overly broad
negative-claim detectors. The detectors were corrected before any public copy
was edited. The focused RED run then exited 1 with 16 genuine failures:

- README workflow order and release boundary;
- install guide release boundary;
- SECURITY source control and subject-category wording;
- ClawHub rc.1 provenance;
- five permission-leading short descriptions;
- Awesome Skills walkthrough qualification; and
- explicit real-cash `$0` in all five simulations.

A read-only adversarial review then supplied broader prohibited phrasings.
After those fixtures were added first, the verifier exited 1 with exactly nine
escaped cases: read-every-session coverage, run-on-every-host activation,
ensured profit, three rc.3 release formulations, generic interview-first copy,
reversed legal-source exclusion wording, and an actual-revenue claim beside
both `$0` fields. The detectors were widened until all nine failed for the
intended reason.

### Hardened GREEN contract

```text
node scripts/verify-public-copy.mjs
public copy contract: 42 current files, 5 simulations, and 16 adversarial fixtures verified
```

The 42-file corpus includes every one of the 23 submission Markdown files and
all five walkthroughs. The verifier now checks:

- ordered hero copy before the first secondary README section;
- release boundaries beside public installer commands;
- stale interview language while allowing bounded fallback and current rc.2
  context;
- contradictions that claim report-only stopping, unbounded coverage,
  universal activation, guaranteed income, a companion app, or authorization
  of external action;
- prompt injection, credential stores and paths, private keys, authentication
  tokens, payment credentials, `.env` files, raw-history nonpublication,
  coverage receipts, user-controlled source scope, subject-category scope, and
  one-off versus autonomous or bulk action;
- nonempty, ordered simulation sections, bounded approval and receipts, both
  `$0` cash fields, and rejection of real outcomes;
- false public or released rc.3 claims across the full current corpus;
- punctuation and emoji across that corpus; and
- adversarial fixtures that must fail for wrong order, report-only stopping,
  scan-all and read-every coverage, universal host activation, ensured profit,
  companion-app claims, multiple false public rc.3 formulations, stale
  interview-first copy, `.env` access, sole category exclusion, an empty
  simulation section, and claimed real cash or actual revenue.

Task 4 intentionally does not certify `launch/x-launch.md` voice or
`launch/launch-control.md` final live status. Those files remain owned by the
later launch pass.

### Fresh verification

```text
node scripts/verify-release.mjs
release 0.1.0-rc.2: 7 skills and 6 X posts verified

node scripts/verify-money-machine-chain.mjs
money-machine chain contract: 6 skills and 11 references verified

uvx --offline --from skills-ref agentskills validate skills/moneyprinter
Valid skill: skills/moneyprinter

npx skills add . --list
Found 7 skills

stale public copy audit
Only five intended README/install references to current public rc.2
interview-first behavior remain.

humanizer punctuation and emoji audit on changed Markdown
No matches.

node --check scripts/verify-public-copy.mjs
No output; exit 0.

git diff --check
No output; exit 0.
```

### Correction self-review

- The approved headline remains the first prose paragraph.
- The intro now orders one confirmation, cash-first priority, private research,
  offer work, payable-test work, acquisition preparation, delivery
  preparation, one exact external action, an Action receipt, and reranking.
- Public install copy cannot be read as an rc.3 availability claim.
- ClawHub dated status and pinned command now agree.
- All five standalone descriptions retain detected and accessible bounds while
  leading with permission.
- The examples are walkthroughs, not customers, revenue, retained rc.3 evals,
  or release evidence.
- Skill and site metadata remain rc.2.
- A final independent read-only spot check of the corrected copy and exact
  escaped-claim fixtures returned no findings.

### Remaining boundary

Scan-first rc.3 is still unreleased. Historical rc.1 and rc.2 evaluations do
not validate it, and the current public installer still returns interview-first
rc.2. The Task 5 landing-page work and the final X and launch-control status
must be reviewed in their own gates before any public release claim is made.

## Task ownership correction

Final review found that Task 4 had also rewritten `launch/x-launch.md` and
`launch/launch-control.md`, even though this verifier deliberately excludes
those Task 6 and Task 7 surfaces. Both files were restored exactly to the Task
4 base at commit `73bfdc1`. No Task 5 file was edited or staged as part of this
correction.

Exact base comparison:

```text
git diff --exit-code 73bfdc1 -- launch/x-launch.md launch/launch-control.md
Task 6/7 launch files: exact match to 73bfdc1
```

Fresh correction verification:

```text
node scripts/verify-public-copy.mjs
public copy contract: 42 current files, 5 simulations, and 16 adversarial fixtures verified

node scripts/verify-release.mjs
release 0.1.0-rc.2: 7 skills and 6 X posts verified

git diff --check
No output; exit 0.
```

This leaves the Task 4 corpus and its hardened checks intact while returning X
voice and final launch status to their owning tasks.
