# MoneyPrinter.md launch control

## Current state

GitHub rc.3 and the rc.3 landing page are live. On 2026-07-19, release tag
`v0.1.0-rc.3` resolved to
`d191c622fd2449fb3399c7140a36a564482498f8`. The downloaded release ZIP
matched SHA-256
`94b0912576514a7d712bf46db17223b67b8766a19c2d09352215a6e41619f278`,
a clean remote-discovery check found all seven skills, and the custom domain
returned HTTPS 200 with its Sites domain, provider, and SSL states active.

| Surface | Publication target | Verified state |
| --- | --- | --- |
| GitHub | `https://github.com/bilbop1/moneyprinter-md` | **Passed 2026-07-19:** public rc.3 tag, release asset and digest, clean seven-skill discovery, About metadata, topics, and persisted 1280 × 640 social preview |
| Landing page | `https://moneyprinter.bilbop.org` | **Passed 2026-07-19:** rc.3 deployment, public HTTPS 200, active custom-domain/provider/SSL states, canonical metadata, social image, and final GitHub/install targets |
| ClawHub | `https://clawhub.ai/bilbop1/skills/moneyprinter` | **Live 2026-07-19:** seven v1.0.1 pages report v1.0.1 as latest; six narrower skills scan SAFE, the flagship is public with a clean moderation verdict and a suspicious detailed trust envelope for the intended cross-app scan, and Skill Cards remain pending |
| Awesome Skills | `https://www.awesomeskills.dev/en/skill/moneyprinter-md-moneyprinter` | **Passed 2026-07-19:** public flagship listing with the source and install command |
| Ko-fi | `https://ko-fi.com/bilbop` | **Passed 2026-07-19:** public page loads as “Support bilbop”; repository funding file uses the confirmed username |

Do not post or submit a target URL while it is private, unconfigured, or
returning placeholder content.

Publication of these public surfaces does not prove conversation-level activation
in Claude, Codex, Kimi, Hermes, OpenClaw, or another host. That retained test is
still open. ClawHub registry publication and a third-party Awesome Skills page
are live, but neither substitutes for that invocation test. The confirmed
funding route is `https://ko-fi.com/bilbop`.

## Organic-growth verdict

GitHub, Skills.sh, ClawHub, curated lists, and agent communities can compound
real interest. They are unlikely to solve a cold start by themselves. The best
seed for this launch is one honest post from the maker. Useful replies and
directory submissions come after the repository works.

The post does not need to "go viral" on day one. A small number of people who
install it, find a problem, open an issue, or submit a properly labeled field
report is better evidence than a large burst of passive impressions.

## What must be live first

The GitHub source and landing page are public. Keep these checks true before
promotion, and do not strengthen any unverified compatibility or funding claim:

- **Passed 2026-07-19:** the GitHub repository opens while logged out;
  `v0.1.0-rc.3` resolves to the tested source and its downloaded release ZIP
  matches the recorded digest.
- **Passed 2026-07-19:** GitHub private vulnerability reporting is enabled.
- The default branch contains the license, seven skill directories, examples,
  compatibility limits, safety rules, contribution guide, and issue forms.
- **Passed 2026-07-19:** `npx skills add bilbop1/moneyprinter-md --list`
  succeeds from a clean directory and lists each expected skill exactly once.
- Every example is visibly labeled `Simulation`.
- **Passed 2026-07-19:** the landing page opens at
  `https://moneyprinter.bilbop.org` over valid HTTPS.
- **Passed 2026-07-19:** the landing page's GitHub and install calls to action
  point to the final public repository and command.
- **Passed 2026-07-19:** the optimized 1280 × 640 repository social preview
  persisted after a hard refresh. The site Open Graph card remains 1200 × 630.
- The GitHub and landing targets in `launch/x-launch.md` and
  `launch/show-hn.md` match the live URLs exactly.
- No secret, local path, private hostname, test credential, or guessed payment
  route appears in the public package.
- No host is described as conversation-verified until a retained invocation
  proves it.
- A private Code of Conduct contact is optional for this launch. If the owner
  later creates one, document only a monitored role address such as
  `conduct@bilbop.org`; do not invent or expose a personal address.

If any item fails, fix it before promotion. Do not explain a broken first-run
experience in replies.

## Ordered launch-day checklist

1. Record the pre-launch baseline: repository stars, forks, watchers, open
   issues, unique visitors if available, and landing-page visits.
2. **Done 2026-07-19:** make the GitHub repository public and check it logged
   out.
3. **Done 2026-07-19:** published `v0.1.0-rc.3` from the final tested source and
   verified its notes, archive, version, and SHA-256 digest.
4. **Discovery done 2026-07-19:** the published command found all seven names
   from a clean temporary directory. A retained host invocation remains open.
5. **Done 2026-07-19:** published the rc.3 landing page, kept
   `moneyprinter.bilbop.org` active, and checked valid HTTPS, canonical and
   social metadata, the install command, and the GitHub target.
6. Update any publication-target labels in launch assets only after both URLs
   pass. Freeze the exact post copy and image you will use.
7. Use the flagship post plus its first reply in `launch/x-launch.md`. Add the
   optional third post only if you want more detail in the initial thread. Do
   not publish the alternate hooks as duplicate launches.
8. Post while you can stay available for at least two hours. Answer questions
   with links to exact source files, and turn reproducible failures into issues.
9. Consider Show HN only after the owner reads `launch/show-hn.md` and writes
   the title, submission text, and comments personally from a blank editor. HN
   prohibits generated or AI-edited comments. Submit once, stay available, and
   do not coordinate votes or ask friends to comment.
10. Submit the direct skill surfaces next, beginning with the channels marked
    P0 in the directory matrix. **ClawHub accepted all seven rc.3 package
    updates and Awesome Skills is live.** ClawHub's seven public pages report
    `1.0.1` as latest, while Skill Cards remain asynchronous. agentskill.sh
    found all seven files but its database
    rejected writes while over quota, so retry without changing the skills.
11. **Done 2026-07-19:** confirm the public Ko-fi page and add the exact username
    to `.github/FUNDING.yml`. Keep the pledge out of opening launch copy.
12. Approach curated lists one at a time. Confirm that each list accepts this
    category before opening a pull request.
13. At 2 hours, 24 hours, and 7 days, record results and corrections. Keep the
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
