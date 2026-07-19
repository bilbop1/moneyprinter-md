# MoneyPrinter.md launch control

## Current state

The intended public URLs are not considered live until the preflight below
passes:

| Surface | Publication target | Launch-ready when |
| --- | --- | --- |
| GitHub | `https://github.com/bilbop1/moneyprinter-md` | Public, logged-out access works, and a clean install lists all seven skills |
| Landing page | `https://moneyprinter.bilbop.org` | Public, correct project renders, mobile works, and both calls to action resolve |

Do not post or submit a target URL while it is private, unconfigured, or
returning placeholder content.

## Organic-growth verdict

GitHub, Skills.sh, ClawHub, curated lists, and agent communities can compound
real interest. They are unlikely to solve a cold start by themselves. The best
seed for this launch is one honest post from the maker. Useful replies and
directory submissions come after the repository works.

The post does not need to "go viral" on day one. A small number of people who
install it, find a problem, open an issue, or submit a properly labeled field
report is better evidence than a large burst of passive impressions.

## What must be live first

Launch is blocked until every item below passes:

- The GitHub repository opens while logged out and renders the intended README.
- The default branch contains the license, seven skill directories, examples,
  compatibility limits, safety rules, contribution guide, and issue forms.
- `npx skills add bilbop1/moneyprinter-md --list` succeeds from a clean
  directory and lists each expected skill exactly once.
- Every example is visibly labeled `Simulation`.
- The landing page opens while logged out on desktop and mobile.
- The landing page's GitHub and install calls to action point to the final
  public repository.
- The social preview image renders correctly when the URL is pasted into a
  preview debugger or a private draft.
- The GitHub and landing targets in `launch/x-launch.md` and
  `launch/show-hn.md` match the live URLs exactly.
- No secret, local path, private hostname, test credential, or unconfirmed Ko-fi
  username appears in the public package.

If any item fails, fix it before promotion. Do not explain a broken first-run
experience in replies.

## Ordered launch-day checklist

1. Record the pre-launch baseline: repository stars, forks, watchers, open
   issues, unique visitors if available, and landing-page visits.
2. Make the GitHub repository public first. Check it from a logged-out browser.
3. Create the first public release from the tested commit and verify its notes,
   files, and version.
4. Run the published install command from a new temporary directory. Confirm
   all seven names and invoke `moneyprinter` with the harmless interview prompt.
5. Publish the landing page. Check desktop, narrow mobile, social metadata, the
   install command, and every outbound link.
6. Update any publication-target labels in launch assets only after both URLs
   pass. Freeze the exact post copy and image you will use.
7. Choose one X format. The recommended launch is the flagship post plus its
   first reply. Use the six-post thread instead if you want the full method in
   the initial launch. Do not post both as duplicate launches.
8. Post while you can stay available for at least two hours. Answer questions
   with links to exact source files, and turn reproducible failures into issues.
9. Submit Show HN once, only when you can participate in the discussion. Do not
   coordinate votes or ask friends to comment.
10. Submit the direct skill surfaces next, beginning with the channels marked
    P0 in the directory matrix. Customize each submission to its rules.
11. Approach curated lists one at a time. Confirm that each list accepts this
    category before opening a pull request.
12. At 2 hours, 24 hours, and 7 days, record results and corrections. Keep the
    evidence labels separate from promotional metrics.

## Metrics worth watching

### Product evidence

- Clean installs confirmed by people other than the maintainer.
- Interview runs that reach one bounded route and one fallback.
- Approval-gate or evidence-label failures.
- Field reports, including failed experiments.
- Research corrections and reproducible compatibility reports.
- Contributors who improve a source, route, test, or safety boundary.

### Distribution evidence

- GitHub unique visitors, clones, stars, forks, watchers, and referring sites,
  where GitHub exposes them.
- Landing-page visits and clicks to GitHub or install instructions.
- X link clicks, bookmarks, profile visits, and substantive replies.
- Show HN discussion quality and source visits.
- Installs or listing views reported by direct skill directories.

Stars and impressions describe attention. They do not prove activation, a
successful experiment, or cash collected.

## How to read the first signals

| Observation | Likely meaning | Response |
| --- | --- | --- |
| Link clicks, then immediate install failures | Packaging or documentation is broken | Pause promotion, reproduce, fix, and publish the correction |
| Stars with no installs, issues, or field use | The hook works; product value is still unknown | Improve the first-run path and ask for specific usability feedback |
| Interview completions but no approved tests | Routes may be too broad, risky, or expensive | Review the route output and narrow the payable test |
| Repeated confusion about evidence labels | README or skill wording is unclear | Add a concrete valid and invalid example |
| One well-documented failed field report | The method is producing inspectable evidence | Thank the reporter, preserve the failure, and revise only if the evidence supports it |
| A settled payment with redacted support | Potential `Cash collected` evidence | Verify scope, costs, consent, attribution, and settlement before publishing |

## Engagement rules

Do not:

- buy followers, likes, reposts, comments, stars, forks, installs, or directory
  votes;
- use alternate accounts to manufacture support;
- ask a group to coordinate Hacker News votes or supportive comments;
- automate replies, direct messages, GitHub issues, or pull requests;
- post the same pitch in unrelated repositories or communities;
- imply that simulations are users, customers, or revenue;
- quote praise without permission or present a private message as a field
  report;
- argue with skeptical users through unsupported model or market claims.

Do:

- answer from the repository, admit unknowns, and correct mistakes in public;
- invite concrete bug reports, contrary evidence, and redacted field reports;
- thank people who find failures;
- use the project's own evidence labels when discussing launch results.

## Stop conditions

Pause promotion if the public install breaks, a safety gate fails, a material
claim is wrong, private data appears, a platform objects to the listing, or a
URL resolves to the wrong project. Fix the source first, then state what
changed. Do not keep pushing traffic into a known-bad release.
