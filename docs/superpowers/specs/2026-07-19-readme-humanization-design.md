# README humanization design

## Goal

Turn the public README from a 172-line launch dossier into a dense, convincing
front door. A new reader should understand the product, install it, and choose
an example without wading through the full research and governance model.

Target length: 60 to 80 lines.

## Reader

The README must work for someone starting from zero and for an experienced
operator. Both should get the same quick entry point without being promised the
same route or result.

## Voice

Use a blunt maker voice with some edge. Keep the existing line:

> The models are finally good. Their money playbooks are not.

The next paragraph should sound like this:

> Most AI money playbooks are idea soup.
>
> MoneyPrinter gives your agent a sequence: interview you, pick one route,
> design the smallest paid test, ask before doing anything public, then track
> whether money actually landed.
>
> It can also tell you the idea is premature. That counts as working.

Prefer short sentences, concrete verbs, contractions where natural, and varied
rhythm. Do not use em dashes, en dashes, curly quotes, inflated claims,
mechanical bolding, canned conclusions, or launch-document language.

## Structure

1. Product name, social card, hook, and three-paragraph pitch.
2. One primary public install command with a link to alternate install routes.
3. A five-step explanation of what happens after invoking `moneyprinter`.
4. A compact seven-row skill table.
5. Five one-line persona examples, all clearly marked as simulations.
6. Four plain proof distinctions:
   - a reply is pipeline;
   - an invoice is booked revenue;
   - a model is an estimate;
   - only a settled payment with support is cash collected.
7. One short compatibility paragraph and one short safety paragraph.
8. Links to the full evidence, compatibility, research, evaluation,
   contribution, and safety documents.
9. MIT license and the voluntary 1% pledge.

## Cuts

Move detail out of the README when a dedicated document already covers it:

- the seven-row evidence taxonomy;
- the long regulated-work and evaluation explanation;
- the full prohibited-use list;
- approval-renewal mechanics;
- contributor workflow details;
- repeated install verification;
- repeated disclaimers and readiness language.

The README should link to those details once instead of summarizing each one in
multiple sections.

## Claims that must survive

- MoneyPrinter contains seven open-source Agent Skills.
- The public install command is `npx skills add bilbop1/moneyprinter-md`.
- A clean remote check found all seven skills.
- The router can recommend a smaller discovery step instead of a payable test.
- External actions require specific human approval.
- Included persona examples are simulations, not customer outcomes.
- Installer discovery is verified, but conversation-level host activation is
  not.
- The repository uses the MIT License.
- The 1% pledge is voluntary, untracked, and not a license term.

## Acceptance checks

- The final README is between 60 and 80 lines unless one extra line materially
  improves GitHub rendering.
- It contains no em dash or en dash characters.
- The install command and all seven skill names remain exact.
- Every relative link resolves to a tracked file.
- The social card remains above the fold.
- The text makes no income, compatibility, customer-result, or regulatory
  claim stronger than the repository evidence supports.
- A cold reader can answer three questions in under 30 seconds:
  What is this? How do I install it? What happens when I run it?
- The Humanizer draft, remaining-pattern audit, and final rewrite loop is
  completed before the final file is committed.

## Non-goals

This change does not alter any skill, test, website behavior, license, pledge,
release, or compatibility claim. It only changes the README's hierarchy and
voice.
