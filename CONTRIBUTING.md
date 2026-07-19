# Contributing

MoneyPrinter accepts contributions that make a legitimate payable test more
inspectable, safer, and easier to falsify. It is not a catalogue of generic
growth tricks or unreviewed prompts.

## Before proposing a change

1. Search existing skills, examples, research, and issues. Extend a route only
   when it is not duplicative.
2. State the user, buyer, outcome, delivery boundary, cost ceiling, proof
   threshold, and stop condition.
3. Label each factual statement as primary/official evidence, replicated or
   multi-source evidence, practitioner heuristic, or project hypothesis.
4. Link current sources and record their review date in the source ledger.
5. Name regulated, consent, privacy, platform, or authority constraints.

## Evidence and scope

Do not present a benchmark, model, estimate, invoice, click, reply, or anecdote
as settled cash. Follow the [evidence standard](skills/moneyprinter/references/evidence-standard.md).
Redact private material, obtain consent before sharing a field report, and do
not include secrets, customer data, confidential documents, or credentials.

Keep a pull request narrow. A new route should include a bounded test and the
smallest relevant persona coverage; it should not silently change unrelated
skills or broaden into unreviewed legal, financial, medical, or compliance
advice.

## Validation

Run the applicable checks before opening a pull request:

```sh
npx skills add . --list
for dir in skills/*; do skills-ref validate "$dir" || exit 1; done
git diff --check
```

Validate every changed `SKILL.md`, run the relevant persona eval, and describe
the result in the pull request. If an example is hypothetical, label it
**Simulation**. If the contribution changes a factual claim, include the
replacement source and review date.

## What will not be accepted

- earnings guarantees, fake case studies, fake reviews, or unverifiable claims;
- automatic outreach, posting, buying, charging, contracting, or publishing;
- spam, impersonation, rule evasion, deceptive growth, speculative financial
  schemes, gambling, adult services, or exploitative work;
- copied source material without a usable citation or permission;
- scope that duplicates a current route without a material improvement.

For a reported real-world outcome, use the Field Report form. For a disputed
claim, use the Research Correction form. For a missing route, use the Playbook
Request form.
