# MoneyPrinter.md distribution channel matrix

Reviewed 2026-07-19. Priority reflects audience fit and credible discovery, not
prestige. “Blocked” means no submission or publication has occurred.

## Priority key

- **P0:** Native install or first-party directory with strong exact-audience
  fit.
- **P1:** High-fit agent/developer discovery or compatibility credibility.
- **P2:** Plausible secondary discovery with lower or less-proven reach.
- **P3:** Weak-fit, paid, exclusion-prone, or low-signal listing.

## Matrix

| Priority | Surface | Fit | Prerequisites | Submission path | Expected discovery | Cost | Current status | Last verified | Source |
|---:|---|---|---|---|---|---|---|---|---|
| P0 | GitHub native | Required source and strongest compounding surface | Public repo; accurate README; topics; social preview; release; community profile; working install and host invocation; private vulnerability reporting; confirmed private conduct-enforcement route | Publish the repository, configure its About/topics/social preview, enable the governance routes, and create the release candidate | GitHub search and topics; stars, forks, links, releases, Discussions, and possible Explore/Trending exposure with no placement guarantee | No submission fee documented | Blocked on live repository, working GitHub auth, and governance setup | 2026-07-19 | [Topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics), [README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [community profile](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories), [Trending](https://github.com/trending) |
| P0 | Skills.sh | Exact text-skill fit | Public GitHub repo; valid `SKILL.md` files; remote install works | Install from `owner/repo`; there is no separate form documented | Search plus all-time, trending, and hot rankings based on aggregate CLI install telemetry | No submission fee documented | Blocked on live GitHub URL | 2026-07-19 | [Official CLI docs](https://www.skills.sh/docs/cli), [ranking docs](https://www.skills.sh/docs) |
| P0 | ClawHub / OpenClaw | Exact skill-registry fit | GitHub-authenticated ClawHub account; owner handle; dry run; explicit acceptance of MIT-0 publication | `clawhub sync --root ./skills --all --dry-run`, then authenticated publish | Registry search, version pages, downloads, stars, tags, and scan state | No submission fee documented | Blocked on auth, owner/license decision, and live source URL | 2026-07-19 | [Official overview](https://docs.openclaw.ai/clawhub), [publishing](https://docs.openclaw.ai/clawhub/publishing), [CLI](https://docs.openclaw.ai/clawhub/cli) |
| P0 | OpenAI Plugins Directory | Strong first-party fit for a skills-only plugin | Final plugin package/ZIP; five positive and three negative tests; production brand, website, support, privacy, and terms URLs; verified identity; Apps Management write access | OpenAI Platform plugin submission portal, choose **Skills only** | Plugins Directory listing across ChatGPT and Codex after review approval and a separate owner publish action | No submission fee documented | Blocked on packaging, public URLs, identity, and auth | 2026-07-19 | [Official submission guide](https://learn.chatgpt.com/docs/submit-plugins) |
| P0 | Claude community and independent marketplaces | Strong first-party fit after Claude plugin packaging | `.claude-plugin` manifest/marketplace packaging; local `claude plugin validate`; public source; authenticated submitter | Team/Enterprise directory managers use the admin submission form; individual developers use the Platform form. Both feed `claude-community`; an independent GitHub marketplace is separate | Community Discover/search after acceptance; direct installs and sharing from an independent marketplace | No submission fee documented | Blocked on plugin packaging, validation, auth, and review | 2026-07-19 | [Community submission](https://code.claude.com/docs/en/plugins#submit-your-plugin-to-the-community-marketplace), [independent marketplace packaging](https://code.claude.com/docs/en/plugin-marketplaces) |
| P1 | Hermes official optional-skills catalog | Strong native catalog fit after Hermes-specific packaging | One self-contained directory per submitted skill under `optional-skills/<category>/<skill-name>/`; valid frontmatter; public source; retained Hermes invocation; contribution-rules review | Submit a pull request to the Hermes repository's optional-skills catalog | Official catalog and install flow after maintainers merge the pull request; acceptance is not guaranteed | No submission fee documented | Blocked on catalog packaging, host test, live source, and PR review | 2026-07-19 | [Official optional-skills catalog](https://hermes-agent.nousresearch.com/docs/reference/optional-skills-catalog) |
| P1 | Kimi Code plugin install | Strong native install path, but no verified public third-party catalog submission | `kimi.plugin.json` or `.kimi-plugin/plugin.json`; correct skills path; public GitHub URL; retained Kimi Code invocation; current community-rule check | Install directly from the public GitHub URL with `/plugins install <path-or-url>`; use a community showcase only where explicitly permitted | Frictionless GitHub installs, plugin sharing, repository search, and qualified community referrals; no directory placement is claimed | No submission fee documented | Blocked on Kimi plugin manifest, public URL, host test, and channel verification | 2026-07-19 | [Official Kimi plugin docs](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/plugins.html) |
| P1 | Show HN | Strong technical/open-source fit only when people can run it | Public repo; one-command install; retained end-to-end host invocation; concrete demo; author present to answer questions | Submit the public repo with a title beginning `Show HN:` | `shownew`; the Show page after a small points threshold; possible front-page discussion, never guaranteed | No submission fee documented | Blocked on public repo, runnable host proof, and a human-authored post | 2026-07-19 | [Official Show HN rules](https://news.ycombinator.com/showhn.html), [HN guidelines](https://news.ycombinator.com/newsguidelines.html) |
| P1 | agentskill.sh | Exact third-party directory fit | Public GitHub repo; optional GitHub connection to verify ownership | Paste the repository URL at the submit page | Site search, `/learn` search, ratings, author/repo browsing, daily GitHub sync | No submission fee documented | Blocked on live GitHub URL and optional auth | 2026-07-19 | [Official submit page](https://agentskill.sh/submit) |
| P1 | Awesome Skills Directory | Exact third-party directory fit | Public GitHub repo with detectable `SKILL.md` and clear metadata | Paste the repo or deep skill URL at the submit page | Immediate directory pages, tags, search, and platform filters | No submission fee documented | Blocked on live GitHub URL | 2026-07-19 | [Official submit page](https://www.awesomeskills.dev/en/submit) |
| P2 | KillerSkills | Exact per-file skill-marketplace fit; reach not independently validated | Public direct `SKILL.md` URL; owner sign-in; clear metadata; scan and parsed-page review | Sign in, choose **Skill**, and submit one public GitHub or direct file URL at a time | Marketplace browse/search and current leaderboard surfaces after approval | No submission fee documented | Blocked on live source URL, auth, and authenticated-form review | 2026-07-19 | [Official submit page](https://killerskills.ai/submit) |
| P2 | Skillery | Exact GitHub-hosted skill-marketplace fit; reach not independently validated | Public GitHub source; owner GitHub or Google sign-in; authenticated fields and imported metadata reviewed | Use **Submit from GitHub**; the unauthenticated `/submit` route exposes only the sign-in gate, so inspect the live form before choosing repo or per-skill input | Marketplace browsing, search, and public skill pages after acceptance or import | No submission fee documented | Blocked on live source URL, auth, and hidden-form verification | 2026-07-19 | [Official homepage](https://skillery.dev/), [submission gate](https://skillery.dev/submit) |
| P2 | skillsdir.dev | Exact reviewed skill-directory fit | Public valid `SKILL.md`; at least one source/docs/demo link; unique kebab-case ID; summary at most 180 characters; no more than three verticals; owner GitHub or reviewed CLI | Open the official GitHub issue template, or verify and run `skill publish` from the skill directory | Maintainer-approved directory page and CLI installation | No submission fee documented | Blocked on live source URL, auth or CLI review, and maintainer acceptance | 2026-07-19 | [Official Share a Skill guide](https://skillsdir.dev/add) |
| P2 | OpenAgentSkill | Exact registry fit after a hard post-launch star gate | Public repo with at least 10 legitimate GitHub stars; clear README/install path; open-source license; category and up to 10 tags | Submit the public repository through the form after the star threshold, then pass automatic or manual review | Approved registry page, install handoff, badge endpoint, and current search/category surfaces | No submission fee documented | Blocked on live source URL, 10-star gate, owner submission, and approval | 2026-07-19 | [Official submit page](https://www.openagentskill.com/submit) |
| P2 | OpenSpace | Strong evidence philosophy, higher setup cost | Installed OpenSpace; owner-scoped cloud key; each local skill trusted; package metadata; public visibility decision | Upload each trusted skill directory with `openspace-upload-skill --skill-dir "$PWD/skills/moneyprinter"` and the corresponding canonical path | Public package browsing, skill search, lineage, and quality summaries tied to real task records | No submission fee documented; infrastructure or model costs may apply | Blocked on OpenSpace setup, auth, trust records, and real host evidence | 2026-07-19 | [Official project and upload workflow](https://github.com/HKUDS/OpenSpace) |
| P2 | Uneed | Plausible indie-tool exposure, not skill-native | Live product page, account to save, logo, copy, and screenshots | Start at the submission form; use the free auto-scheduled queue or owner-approved paid date selection | Launch-day homepage, rolling leaderboards, persistent page, and possible newsletter placement | Free queue; $29.99 skip-queue date selection | Blocked on live URL, auth, and assets | 2026-07-19 | [Submit a tool](https://www.uneed.best/submit-a-tool), [official how-it-works page](https://www.uneed.best/how-it-works) |
| P2 | AgenticSkills | Exact directory category, reach not independently validated | Public GitHub URL; skill name; category; short description; author name; email | Complete the free submission form; featured placement is a separate contact-only option | Curated directory search and category browsing | Base submission free; featured price not disclosed | Blocked on live GitHub URL and owner identity/contact fields | 2026-07-19 | [Official submit page](https://agenticskills.io/submit) |
| P2 | Toolify OpenClaw Skills index | Potential passive downstream exposure after ClawHub; the paid main-tool listing remains weak fit | Public ClawHub/GitHub listing and a confirmed Toolify skill page | No first-party skill-index submission route was verified; publish on ClawHub, then check whether Toolify indexes it. Do not infer ingestion or pay for the main-tool form | OpenClaw Skills search/category pages if indexed; no placement guarantee | Passive skills index unpriced/unknown; main-tool form $99 | Blocked on ClawHub publication and downstream-index verification | 2026-07-19 | [OpenClaw Skills directory](https://www.toolify.ai/openclaw-skills), [paid main-tool form](https://www.toolify.ai/submit) |
| P2 | Dev Hunt | Plausible developer-tool fit, but the current submission route is unresolved | Live repository and landing page; route verification against current official contribution rules | The official repository describes GitHub pull-request listings, while the live-site flow was not verified; reconcile the current path before entering data | Developer-tool listing/search if accepted; scheduling, images, and ranking behavior remain unverified | Not verified | Blocked on authoritative route verification and live URLs | 2026-07-19 | [Official Dev Hunt repository](https://github.com/MarsX-dev/devhunt), [live site](https://devhunt.org/) |
| P3 | Product Hunt | **Weak fit for the current text-only skill pack** | A materially interactive product, live URL, personal account, and full gallery would improve eligibility | Product Hunt `Post` flow | All feed and, only if selected, homepage featuring | No submission fee documented | Do not prioritize: current featuring rules explicitly exclude templates | 2026-07-19 | [Official featuring rules](https://help.producthunt.com/en/articles/9883485-product-hunt-featuring-guidelines), [posting guide](https://help.producthunt.com/en/articles/479557-how-to-post-a-product) |
| P3 | AlternativeTo | Weak: a skill pack may be treated as a guide/template rather than an application | Account at least one week old; live English software product; official website | User menu → **Suggest new application** | Approved application page, search, and alternative graphs | No submission fee documented | Blocked and likely ineligible in current form | 2026-07-19 | [Official FAQ](https://alternativeto.net/faq/) |
| P3 | Futurepedia | Weak and currently paid; likely expects a user-facing AI tool | Live tool, website, assets, payment, and editorial approval | Paid tool submission form | Directory/search and paid listing placement | $247 basic shown sold out; $497 verified listing | Do not spend for the text-only release | 2026-07-19 | [Official submit page](https://www.futurepedia.io/submit-tool) |

## Organic-growth verdict

Platform-only distribution is unlikely to make MoneyPrinter.md go viral from a
cold start.

The strongest organic loop is:

1. A public, inspectable GitHub repository with a working one-line install.
2. Skills.sh discovery, because real CLI installs can produce hot, trending, and
   all-time surfaces.
3. ClawHub search and separately useful skill pages, with Hermes and Kimi
   native packaging following once host tests exist.
4. One honest personal X post and one concrete walkthrough that seed the first
   qualified readers.
5. Useful field reports, research corrections, releases, forks, and individual
   skill pages that create recurring GitHub-native and registry-native surface
   area.

This is not a recommendation to manufacture velocity. Never self-install in
loops, buy engagement, coordinate stars/upvotes, mass-message people, or post
promotional issues in unrelated repositories. The first social post is a seed,
not a substitute for a product that earns installs and contributions.

## Recommended sequence

1. Publish and configure the GitHub repository, then confirm it and the landing
   page logged out.
2. Run a clean remote install and retain the output.
3. Trigger Skills.sh discovery through a legitimate install.
4. Post one personal X launch with the public repo, claim-safe inspected social
   card, and one concrete walkthrough.
5. Post Show HN only after a retained end-to-end host invocation and when the
   owner has written the explanation in their own words.
6. Dry-run ClawHub; resolve the MIT versus MIT-0 publishing decision; publish
   only after owner approval.
7. Submit agentskill.sh and Awesome Skills.
8. In parallel with the launch seed, package and validate the Claude and OpenAI
   skills-only plugins.
9. Package the Hermes optional-catalog contribution and Kimi GitHub plugin;
   submit or share only after their host tests pass.
10. Add the low-friction P2 skill-native routes: submit one primary skill to
    KillerSkills, use the smallest shape Skillery's authenticated form accepts,
    and submit the router to skillsdir.dev. Add AgenticSkills, OpenSpace, and
    Uneed as second-wave channels, and check for passive Toolify indexing only
    after ClawHub is live.
11. Revisit OpenAgentSkill only after the repository earns ten legitimate stars,
    and revisit Dev Hunt only after its current authoritative submission path is
    confirmed.
12. Skip paid or exclusion-prone P3 directories until the product gains an
    interactive application surface or evidence that the spend makes sense.
