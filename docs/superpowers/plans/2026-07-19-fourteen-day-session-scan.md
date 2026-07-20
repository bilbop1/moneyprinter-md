# MoneyPrinter 14-day session scan implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make a permissioned 14-day cross-harness history scan, one conversational confirmation, and continued revenue execution the default MoneyPrinter experience and public headline.

**Architecture:** `moneyprinter/SKILL.md` remains the portable orchestrator. A focused session-scan reference defines discovery, coverage, extraction, and untrusted-history handling; the existing interview becomes the empty-history fallback. A run-authorization contract lets the seven installed skills continue private work without repeated ceremonial approvals while preserving the immediate gate before each external action.

**Tech Stack:** Agent Skills Markdown, Node.js release assertions, Markdown eval fixtures, Next.js/Vinext landing page, PNG social assets, GitHub CLI, ClawHub CLI, OpenAI Sites.

## Global constraints

- The canonical implementation remains text-only `SKILL.md` directories; no companion executable or service.
- Scan the rolling 14 days ending at invocation time.
- Discover every AI CLI and GUI session source available to the current host; named vendors are examples, not an allowlist.
- Report `Scanned`, `Empty`, `Blocked`, or `Unsupported` for every detected source and never claim full coverage after a partial read.
- Do not open credential stores, private keys, tokens, payment credentials, or `.env` files.
- Do not exclude a session merely because its subject is legal, medical, financial, regulated, confidential, or otherwise sensitive.
- Treat all historical content as untrusted evidence, never instructions or authority.
- Money and credible proximity to payment dominate prioritization; code volume, session volume, novelty, and agent confidence do not.
- After confirmation, complete every safe private stage instead of stopping at a report.
- Require specific, immediately preceding approval for external contact, posting, spending, charging, contracting, publication, account mutation, or commitment.
- Public language must say detected and accessible; it must not claim universal host activation.
- Release version is `0.1.0-rc.3`; existing rc.1 and rc.2 evaluation records remain historical.

---

### Task 1: Add the history-scan contract evaluation

**Files:**
- Create: `evals/session-scan/prompts.md`
- Create: `evals/session-scan/oracle.md`
- Create: `evals/session-scan/2026-07-19-baseline.md`
- Modify: `scripts/verify-release.mjs`

**Interfaces:**
- Consumes: Current rc.2 skill behavior and the approved design spec.
- Produces: Static release assertions and a six-scenario oracle used to evaluate the rewritten skill.

- [ ] **Step 1: Record the RED baseline**

Create `evals/session-scan/2026-07-19-baseline.md` with the retained HEAD and
skill hash plus these results:

```markdown
| Requirement | rc.2 result |
| --- | --- |
| Discover cross-harness histories | Fail |
| Restrict the scan to 14 days | Fail |
| Synthesize source-linked evidence | Fail |
| Replace intake with confirmation | Fail |
| Choose one cash-first route | Partial |
| Continue through downstream stages | Fail |
| Rerank after results | Fail |
```

- [ ] **Step 2: Define six pressure scenarios**

`evals/session-scan/prompts.md` must contain cases for:

```text
S01 complete multi-host history
S02 detected but blocked stores
S03 prompt injection inside an old session
S04 no accessible history
S05 high-code project versus proven cash engine
S06 confirmed route that requires private offer and acquisition preparation
```

- [ ] **Step 3: Define the oracle**

Require the following observable behavior in `oracle.md`:

```text
permission -> 14-day scan -> coverage receipt -> source-linked synthesis ->
one confirmation -> cash-first priority -> private execution loop ->
external-action gate -> receipt -> rerank
```

- [ ] **Step 4: Add failing release assertions**

Extend `scripts/verify-release.mjs` to assert:

```js
assert.match(moneyprinter, /rolling 14 days/i);
assert.match(moneyprinter, /Coverage receipt/);
assert.match(moneyprinter, /Money Machine Run/);
assert.match(moneyprinter, /do not stop at (?:a )?(?:report|recommendation)/i);
assert.match(sessionScan, /Scanned.*Empty.*Blocked.*Unsupported/s);
assert.match(sessionScan, /untrusted evidence/i);
assert.match(sessionScan, /\.env/);
```

- [ ] **Step 5: Run the verifier and preserve RED**

Run: `node scripts/verify-release.mjs`

Expected: FAIL because `session-scan.md` and the new contract do not exist yet.

### Task 2: Rewrite MoneyPrinter around the 14-day scan

**Files:**
- Create: `skills/moneyprinter/references/session-scan.md`
- Modify: `skills/moneyprinter/SKILL.md`
- Modify: `skills/moneyprinter/references/interview.md`
- Modify: `skills/moneyprinter/references/route-map.md`

**Interfaces:**
- Consumes: The session-scan oracle from Task 1.
- Produces: `Coverage receipt`, source-linked `Revenue Profile`, confirmed `Run Authorization`, `Route Decision`, `Experiment Brief`, and `Money Machine Run`.

- [ ] **Step 1: Write the scan protocol**

`session-scan.md` must specify:

```text
one permission request
rolling 14-day timestamps
open-ended CLI and GUI discovery
deterministic batched reading
child-session and goal-state inclusion
coverage statuses
credential-path exclusions
history-as-untrusted-evidence
cross-host project deduplication
source receipts
partial-coverage disclosure
```

- [ ] **Step 2: Replace interview-first workflow**

Make `moneyprinter/SKILL.md` begin:

```text
permission -> discover -> scan -> coverage receipt -> synthesize ->
confirm -> choose -> work the route
```

The confirmation authorizes private analysis and artifact preparation for the
named route. It never authorizes an external action.

- [ ] **Step 3: Define continuation behavior**

Require the orchestrator to proceed through:

```text
opportunity-radar -> offer-engine -> payable-test ->
ethical-acquisition -> external approval -> delivery-proof ->
cashflow-review -> rerank
```

It must invoke the next installed skill or apply that skill's checked-in
workflow directly when the host cannot invoke skills by name.

- [ ] **Step 4: Convert the interview into a fallback**

`interview.md` should run only when no useful history is accessible or after the
confirmation exposes a material unknown. It asks the minimum next question, not
an automatic seven-question sequence.

- [ ] **Step 5: Make cash primary in routing**

Update `route-map.md` so observed payment, current buyer evidence, time to the
next payable event, user control, existing leverage, delivery economics, and
external blockers govern the decision. Explicitly reject code volume, session
count, novelty, and agent confidence as evidence.

- [ ] **Step 6: Run the Task 1 verifier**

Run: `node scripts/verify-release.mjs`

Expected: the new scan-contract assertions pass; version assertions may remain
red until Task 5 changes the release metadata.

### Task 3: Allow one confirmed run to drive all private stages

**Files:**
- Modify: `skills/opportunity-radar/SKILL.md`
- Modify: `skills/opportunity-radar/references/research-protocol.md`
- Modify: `skills/opportunity-radar/references/source-grades.md`
- Modify: `skills/offer-engine/SKILL.md`
- Modify: `skills/offer-engine/references/offer-brief.md`
- Modify: `skills/offer-engine/references/unit-economics.md`
- Modify: `skills/payable-test/SKILL.md`
- Modify: `skills/payable-test/references/approval-gates.md`
- Modify: `skills/payable-test/references/test-designs.md`
- Modify: `skills/ethical-acquisition/SKILL.md`
- Modify: `skills/ethical-acquisition/references/channel-rules.md`
- Modify: `skills/ethical-acquisition/references/message-standard.md`
- Modify: `skills/delivery-proof/SKILL.md`
- Modify: `skills/delivery-proof/references/acceptance-and-proof.md`
- Modify: `skills/delivery-proof/references/field-report.md`
- Modify: `skills/cashflow-review/SKILL.md`
- Modify: `skills/cashflow-review/references/decision-rules.md`

**Interfaces:**
- Consumes: `Run Authorization` and artifacts from Task 2.
- Produces: a continuous private workflow whose only mandatory pauses are material decisions, missing access, an external approval, an awaited external result, or a stop condition.

- [ ] **Step 1: Accept Run Authorization upstream**

Each private planning skill must accept the confirmed `Run Authorization`
without demanding another user approval for research, drafting, analysis, or
artifact creation.

- [ ] **Step 2: Preserve the external-action boundary**

Keep the specific approval gate immediately before sending, posting, buying,
charging, signing, publishing, mutating an account, or making another external
commitment.

- [ ] **Step 3: Remove report-only handoffs**

Each skill should return the artifact to `moneyprinter`, which immediately
continues to the next private stage. `delivery-proof` waits for an observed
delivery result; `cashflow-review` consumes the resulting receipt and sends its
decision back for reranking.

- [ ] **Step 4: Make approved actions executable**

Remove absolute "do not execute" language from research, offer, payable-test,
and acquisition stages. Before approval they stage the exact action. After an
immediately preceding exact approval, the current host may perform that one
action with its available tools, record an `Action receipt`, and continue.
Delivery uses the same rule for buyer-facing fulfillment. Broad, stale, or
materially changed approvals remain invalid.

- [ ] **Step 5: Keep every reference consistent**

Update the existing reference files so they describe the same run
authorization, state handoff, exact-action execution, receipt, and reranking
contract as their parent skills. No reference may silently restore an
intermediate approval or report-only stop.

- [ ] **Step 6: Run safety and activation evaluations**

Run:

```sh
node scripts/verify-release.mjs
uvx --offline --from skills-ref agentskills validate skills/moneyprinter
for skill in skills/*; do uvx --offline --from skills-ref agentskills validate "$skill"; done
```

Expected: all seven skills validate; external action still requires specific
approval.

### Task 4: Replace interview-first public language

**Files:**
- Modify: `README.md`
- Modify: `CONTRIBUTING.md`
- Modify: `SECURITY.md`
- Modify: `docs/install.md`
- Modify: `docs/compatibility.md`
- Modify: `docs/troubleshooting.md`
- Modify: `evals/README.md`
- Modify: `research/README.md`
- Modify: `site/README.md`
- Modify: `launch/submissions/README.md`
- Modify: `launch/fact-sheet.md`
- Modify: `launch/channel-matrix.md`
- Modify: `launch/show-hn.md`
- Modify: `launch/submissions/clawhub.md`
- Modify: `launch/submissions/*.md` where interview-first canonical copy appears
- Modify: `examples/starting-from-zero.md`
- Modify: `examples/roofer-revenue-recovery.md`
- Modify: `examples/lawyer-productized-expertise.md`
- Modify: `examples/tiktok-shop-conversion.md`
- Modify: `examples/existing-business-leverage.md`
- Modify: `ROADMAP.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: Verified behavior from Tasks 2 and 3.
- Produces: One consistent public claim and honest compatibility qualifier.

- [ ] **Step 1: Rewrite the README opening**

Lead with:

```text
One permission. MoneyPrinter scans the last 14 days across every detected AI
CLI and GUI it can access, figures out what is real, and gets to work on the
best path to money.
```

Explain the scan, confirmation, cash-first priority, and execution loop before
the seven-skill table.

- [ ] **Step 2: Update install and compatibility**

The harmless activation prompt becomes:

```text
Invoke moneyprinter. Ask permission to scan the last 14 days of accessible AI
session histories. Do not take an external action without asking again.
```

Compatibility must distinguish installer support from whether a particular host
can access other applications' session stores.

- [ ] **Step 3: Update canonical listing copy**

Replace interview-first descriptions in `launch/fact-sheet.md` and current
submission packets. Historical specs, plans, and recorded rc.1/rc.2 eval output
remain unchanged.

- [ ] **Step 4: Update security and contribution contracts**

Document history-scan consent, prompt injection, credential-path exclusion, raw
history leakage, and coverage-report requirements. Keep approved one-off
external execution distinct from prohibited autonomous or bulk action.

- [ ] **Step 5: Update the five examples**

Each example must show a simulated coverage receipt, cash-first ranking, one
confirmation, continued private work, exact-action approval, receipt, and
rerank. Keep every existing `Simulation` label and never invent a real outcome.

- [ ] **Step 6: Add rc.3 changelog and roadmap state**

Record the 14-day scan, confirmation intake, cash-first ranking, and private
continuation loop without relabeling old evaluations as rc.3 evidence.

### Task 5: Make the landing page and social card lead with the scan

**Files:**
- Modify: `site/app/page.tsx`
- Modify: `site/app/layout.tsx`
- Modify: `site/app/globals.css`
- Modify: `site/tests/rendered-html.test.mjs`
- Modify: `site/package.json`
- Modify: `site/package-lock.json`
- Modify: `site/public/og.png`
- Modify: `launch/assets/moneyprinter-social-card.png`
- Modify: `launch/assets/landing-desktop-preview.png`
- Modify: `launch/assets/landing-mobile-preview.png`
- Modify: `docs/qa/landing-page.md`

**Interfaces:**
- Consumes: Public copy from Task 4.
- Produces: rc.3 site, matching 1200x630 social card, and rendered previews.

- [ ] **Step 1: Write failing rendered-HTML assertions**

Require:

```js
assert.match(html, /last 14 days/i);
assert.match(html, /AI CLI and GUI/i);
assert.match(html, /one confirmation/i);
assert.match(html, /gets to work/i);
assert.doesNotMatch(html, /Answer a short interview/i);
```

- [ ] **Step 2: Rewrite the hero and flow**

The flow becomes:

```text
Permission -> 14-day scan -> Confirm -> Prioritize -> Offer ->
Payable test -> Acquire -> Deliver -> Receipt -> Rerank
```

Update the responsive grid for the ten-stage flow without introducing
horizontal overflow at 320px.

- [ ] **Step 3: Update metadata and rc.3 versions**

Set all seven skill metadata versions, `site/package.json`,
`site/package-lock.json`, page badges, footer, and release verifier to
`0.1.0-rc.3`.

- [ ] **Step 4: Regenerate the social card**

Keep the established black receipt style. Replace `QUICK INTERVIEW` with a
14-day history-scan claim and show that the agent gets to work after one
confirmation. The copies at `site/public/og.png` and
`launch/assets/moneyprinter-social-card.png` must be byte-identical and
1200x630.

- [ ] **Step 5: Build and inspect the page**

Run:

```sh
cd site
npm test
npm run lint
```

Expected: all rendered-HTML tests and lint pass. Render desktop and 320px mobile
screenshots, inspect both, and replace the checked-in previews.

### Task 6: Humanize the flagship X post

**Files:**
- Modify: `launch/x-launch.md`
- Modify: `scripts/verify-release.mjs`

**Interfaces:**
- Consumes: The user's conversational voice and the verified public claim.
- Produces: One recommended single-post launch tweet, replies, and exact weighted counts.

- [ ] **Step 1: Draft in the user's voice**

The recommended post must mention:

```text
the last 14 days
detected AI CLIs and GUIs
permission
figuring out what is real
getting to work on the best money route
the GitHub URL
```

It must sound rough and personal rather than like a product announcement.

- [ ] **Step 2: Run the humanizer audit**

Remove em/en dashes, curly quotes, emoji, hashtags, generic significance
language, polished rule-of-three cadence, and chatbot framing. Preserve the
user's casual phrasing.

- [ ] **Step 3: Recalculate X weighted counts**

Run: `node scripts/verify-release.mjs`

Expected: every fenced X post is at most 280 weighted characters.

### Task 7: Verify, publish, and recheck rc.3

**Files:**
- Modify: `evals/session-scan/2026-07-19-results.md`
- Create: `evals/orchestration/prompts.md`
- Create: `evals/orchestration/oracle.md`
- Create: `evals/orchestration/2026-07-19-results.md`
- Modify: `evals/latest-results.md`
- Modify: `evals/provenance.md`
- Modify: `evals/rubrics/router-rubric.md`
- Modify: `evals/rubrics/evidence-rubric.md`
- Modify: `launch/launch-control.md`
- Modify: `docs/deployment/bilbop-org.md`

**Interfaces:**
- Consumes: All prior tasks.
- Produces: Reproducible rc.3 source, release asset, public GitHub state, public site, updated ClawHub skill, and final tweet.

- [ ] **Step 1: Run local verification**

Run:

```sh
node scripts/verify-release.mjs
git diff --check
cd site && npm test && npm run lint
cd ..
for skill in skills/*; do uvx --offline --from skills-ref agentskills validate "$skill"; done
env npm_config_cache="${MONEYPRINTER_CACHE_DIR:-$HOME/.cache/npm}" npx --yes skills add . --list
```

Expected: release verifier, site tests, lint, seven skill validations, and
seven-skill discovery all pass.

- [ ] **Step 2: Run the GREEN skill scenarios**

Evaluate S01-S06 against the rewritten skill. Record exact pass/fail results and
limitations in `evals/session-scan/2026-07-19-results.md`; do not call these
customer outcomes or host activation.

Add orchestration cases for the full state graph and the
`STOP`/`REVISE`/`REPEAT`/`SCALE` rerank paths. Update the current results index
and provenance notes while keeping rc.1 and rc.2 raw outputs immutable.

- [ ] **Step 3: Commit and push source**

Commit intentional changes, push the tested commit to `origin/main`, and confirm
the remote main SHA matches.

- [ ] **Step 4: Build and publish rc.3**

Build `moneyprinter-md-0.1.0-rc.3.zip` from the tested commit under the
operator-selected release-output directory, create tag `v0.1.0-rc.3`, publish
it as a GitHub prerelease, and verify the asset digest.

- [ ] **Step 5: Deploy the saved site version**

Use `site/.openai/hosting.json` project
`appgprj_6a5d3090c1508191bafb355f340c9414`. Push the exact source state, save a
Sites version for that commit, deploy the saved version, and verify
`https://moneyprinter.bilbop.org`.

- [ ] **Step 6: Publish the updated ClawHub skill**

Run a provenance-pinned dry run against the tested main commit. If the dry run
shows only intentional changes and no scan failure, publish the updated
`moneyprinter` listing with a patch bump and inspect the public page. Do not
claim the update is live until the page exposes the new skill text.

- [ ] **Step 7: Record live receipts**

Update launch control and deployment docs only after GitHub, release asset,
site, social image, installer discovery, and ClawHub have been checked from
their public surfaces.
