# Task 6 report: humanized X launch copy

## Status

Complete locally. `launch/x-launch.md` now has one recommended opener, two
useful replies, one alternate opener, one later follow-up, and one funding
reply. The ready-state block still says the public release is rc.2 and tells
the operator not to post the 14-day scan copy before rc.3 is public.

## RED evidence

The release verifier was hardened before the launch copy changed. It now
requires:

- an exact raw and X-weighted count immediately after every fenced post;
- a lowercase personal complaint, `lol`, and the user's `so i made` paragraph
  turn in the recommended opener;
- permission, the last 14 days, detected and accessible AI CLIs and GUIs,
  figuring out what is real, work on the best money route, and the GitHub URL;
- no blocked punctuation, emoji, hashtag, generic significance language,
  chatbot framing, universal host activation, guaranteed outcome, or polished
  three-item cadence.

Initial command:

```sh
node scripts/verify-release.mjs
```

Initial result: exit 1.

```text
AssertionError [ERR_ASSERTION]: every X post must document exact raw and weighted counts

0 !== 6
```

This was the expected failure against the old launch file. Its six count lines
used mixed formats, and the recommended opener still described the old
interview-first flow.

## Humanizer loop

Draft:

```text
too many AI chats say "this could be huge" and then do nothing lol

so i made MoneyPrinter. with permission it checks the last 14 days across detected AI CLIs + GUIs it can access, calls bullshit on most of it, then starts working on the best money route

https://github.com/bilbop1/moneyprinter-md
```

What still read like AI copy:

- The middle packed two promotional beats into a clean comma cadence.
- "calls bullshit" had voice, but it did not literally preserve the verified
  claim that the scan figures out what is real.
- The first line repeated `AI` immediately before another long technical
  sentence full of AI host terms.

First-pass final:

```text
too many chats say "this could be huge" then do nothing lol

so i made MoneyPrinter. with permission it checks the last 14 days across detected AI CLIs + GUIs it can access, figures out what shit is actually real and starts working on the best money route

https://github.com/bilbop1/moneyprinter-md
```

The first pass kept the public scope contract and used the user's lowercase,
slightly busted conversational rhythm. The review correction below removes
the remaining feature-list cadence.

## Exact counts

The release verifier calculates these from the fenced bytes and treats every
URL as 23 weighted characters:

| Post | Raw | Weighted |
| --- | ---: | ---: |
| Recommended flagship | 299 | 280 |
| First reply | 240 | 232 |
| Install reply | 280 | 280 |
| Alternate flagship | 296 | 277 |
| Later follow-up | 286 | 267 |
| Funding reply | 222 | 221 |

## GREEN verification

Fresh repository gates:

```text
node scripts/verify-release.mjs
release 0.1.0-rc.3: 7 skills and 6 X posts verified

node scripts/verify-public-copy.mjs
public copy contract: 42 current files, 5 simulations, and 16 adversarial fixtures verified

node scripts/verify-money-machine-chain.mjs
money-machine chain contract: 6 skills and 11 references verified

git diff --check
clean
```

## Boundaries

- These are staged launch posts, not evidence that rc.3 is already public.
- No post claims every host is activated or that MoneyPrinter guarantees
  profit.
- The install reply says a compatible host does the work and describes the
  repository as having install notes for the named hosts.
- Task 7's orchestration eval files and rubric edits were left untouched and
  unstaged.

## Review correction

Review caught two P2 problems.

First, the recommended opener still put scanning, judgment, and execution into
one feature-dense sentence. The initial comma-list detector did not catch that
cadence because the beats were not formatted as a literal three-item list.
The final opener now breaks the scan onto its own paragraph and lets the next
two thoughts land as blunt sentences:

```text
too many chats say "this could be huge" then do nothing lol

so i made MoneyPrinter. with permission it checks the last 14 days across detected AI CLIs + GUIs it can access.

it figures out what shit is real. then it starts working on the best money route

https://github.com/bilbop1/moneyprinter-md
```

The count remains 299 raw and 280 weighted.

Second, the punctuation and claim checks were inline assertions without
adversarial self-tests. `xPostViolations()` now has executable rejection
fixtures for:

- `works on every host`;
- `runs on every host`;
- `runs everywhere`;
- `all hosts are supported`;
- `it is guaranteed to make money`;
- `guaranteed income`;
- a curly apostrophe;
- whitespace-delimited ` -- ` used as an em dash.

Acceptance fixtures prove that `open-source`, `--help`, `--all --dry-run`, `no
guaranteed profit`, `does not guarantee income`, and `does not run everywhere`
do not trigger false positives. The money-outcome family covers money, profit,
income, and revenue.

After the fixture expectation label was corrected, the focused RED run exited
1 on the unchanged opener:

```text
AssertionError [ERR_ASSERTION]: the opener must split scanning from judgment and execution
```

The split opener then passed the expanded verifier.
