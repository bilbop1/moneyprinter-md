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

| Priority | Surface | Fit | Prerequisites | Submission path | Expected discovery | Current status | Source |
|---:|---|---|---|---|---|---|---|
| P0 | GitHub native | Required source and strongest compounding surface | Public repo; accurate README; topics; social preview; release; community profile; working install | Publish the repository, configure its About/topics/social preview, and create the release candidate | GitHub search and topics; stars, forks, links, releases, Discussions, and possible Explore/Trending exposure with no placement guarantee | Blocked on live repository and working GitHub auth | [Topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics), [README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [community profile](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories), [Trending](https://github.com/trending) |
| P0 | Skills.sh | Exact text-skill fit | Public GitHub repo; valid `SKILL.md` files; remote install works | Install from `owner/repo`; there is no separate form documented | Search plus all-time, trending, and hot rankings based on aggregate CLI install telemetry | Blocked on live GitHub URL | [Official CLI docs](https://www.skills.sh/docs/cli), [ranking docs](https://www.skills.sh/docs) |
| P0 | ClawHub / OpenClaw | Exact skill-registry fit | GitHub-authenticated ClawHub account; owner handle; dry run; explicit acceptance of MIT-0 publication | `clawhub sync --root ./skills --all --dry-run`, then authenticated publish | Registry search, version pages, downloads, stars, tags, and scan state | Blocked on auth, owner/license decision, and live source URL | [Official overview](https://docs.openclaw.ai/clawhub), [publishing](https://docs.openclaw.ai/clawhub/publishing), [CLI](https://docs.openclaw.ai/clawhub/cli) |
| P0 | OpenAI Plugins Directory | Strong first-party fit for a skills-only plugin | Final plugin package/ZIP; five positive and three negative tests; production brand, website, support, privacy, and terms URLs; verified identity; Apps Management write access | OpenAI Platform plugin submission portal, choose **Skills only** | Plugins Directory listing across ChatGPT and Codex after review approval and a separate owner publish action | Blocked on packaging, public URLs, identity, and auth | [Official submission guide](https://learn.chatgpt.com/docs/submit-plugins) |
| P0 | Claude official/community marketplace | Strong first-party fit after Claude plugin packaging | `.claude-plugin` manifest/marketplace packaging; local `claude plugin validate`; public source; authenticated submitter | `claude.ai/settings/plugins/submit` or `platform.claude.com/plugins/submit`; an independent marketplace is also possible | Discover tab, marketplace search, favorites, and shared marketplace installs | Blocked on plugin packaging, validation, auth, and review | [Official discovery and submission docs](https://code.claude.com/docs/en/discover-plugins), [marketplace packaging](https://code.claude.com/docs/en/plugin-marketplaces) |
| P1 | Hermes and Kimi compatibility communities | High credibility, but not a separate verified directory path | Real install/invocation evidence in each host; public GitHub URL; current community posting rules | Hermes already searches Skills.sh; for community posts, use only a current showcase channel that explicitly permits projects. Kimi has local skill support but no verified public skill-submission form in this pass | Hermes Skills Hub search through Skills.sh; community discussions can produce targeted installs and bug reports | Skills.sh route blocked on GitHub; community copy blocked on host verification and channel-rule check | [Hermes skills and hub](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills), [Kimi Code skills](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html) |
| P1 | Show HN | Strong technical/open-source fit only when people can run it | Public repo; one-command install; concrete demo; author present to answer questions | Submit the public repo with a title beginning `Show HN:` | `shownew`; the Show page after a small points threshold; possible front-page discussion, never guaranteed | Blocked on public repo and a human-authored post | [Official Show HN rules](https://news.ycombinator.com/showhn.html), [HN guidelines](https://news.ycombinator.com/newsguidelines.html) |
| P1 | Dev Hunt | Good developer-tool launch fit | Live repo and landing page; publisher account; logo and product images | Current Dev Hunt launch flow from the homepage; exact form URL was not independently documented in an official guide during this pass | Scheduled developer-tool launch, impressions, upvotes, and ranking pages | Blocked on URLs, auth, and visual assets | [Live Dev Hunt](https://devhunt.org/) |
| P1 | agentskill.sh | Exact third-party directory fit | Public GitHub repo; optional GitHub connection to verify ownership | Paste the repository URL at the submit page | Site search, `/learn` search, ratings, author/repo browsing, daily GitHub sync | Blocked on live GitHub URL and optional auth | [Official submit page](https://agentskill.sh/submit) |
| P1 | Awesome Skills Directory | Exact third-party directory fit | Public GitHub repo with detectable `SKILL.md` and clear metadata | Paste the repo or deep skill URL at the submit page | Immediate directory pages, tags, search, and platform filters | Blocked on live GitHub URL | [Official submit page](https://www.awesomeskills.dev/en/submit) |
| P2 | OpenSpace | Strong evidence philosophy, higher setup cost | Installed OpenSpace; owner-scoped cloud key; each local skill trusted; package metadata; public visibility decision | Upload each trusted skill directory with `openspace-upload-skill --skill-dir "$PWD/skills/moneyprinter"` and the corresponding canonical path | Public package browsing, skill search, lineage, and quality summaries tied to real task records | Blocked on OpenSpace setup, auth, trust records, and real host evidence | [Official project and upload workflow](https://github.com/HKUDS/OpenSpace) |
| P2 | Uneed | Plausible indie-tool exposure, not skill-native | Live product page, account, logo, copy, and screenshots | Add the product after sign-in; use the free queue or optional paid scheduling | Launch-day homepage, rolling leaderboards, persistent page, and possible newsletter placement | Blocked on live URL, auth, and assets | [Official how-it-works page](https://www.uneed.best/how-it-works) |
| P2 | AgenticSkills | Exact directory category, reach not independently validated | Public GitHub URL and basic listing metadata | Submit repository URL at the form | Curated directory search and category browsing | Blocked on live GitHub URL | [Official submit page](https://agenticskills.io/submit) |
| P3 | Product Hunt | **Weak fit for the current text-only skill pack** | A materially interactive product, live URL, personal account, and full gallery would improve eligibility | Product Hunt `Post` flow | All feed and, only if selected, homepage featuring | Do not prioritize: current featuring rules explicitly exclude templates | [Official featuring rules](https://help.producthunt.com/en/articles/9883485-product-hunt-featuring-guidelines), [posting guide](https://help.producthunt.com/en/articles/479557-how-to-post-a-product) |
| P3 | AlternativeTo | Weak: a skill pack may be treated as a guide/template rather than an application | Account at least one week old; live English software product; official website | User menu → **Suggest new application** | Approved application page, search, and alternative graphs | Blocked and likely ineligible in current form | [Official FAQ](https://alternativeto.net/faq/) |
| P3 | Futurepedia | Weak and currently paid; likely expects a user-facing AI tool | Live tool, website, assets, payment, and editorial approval | Paid tool submission form | Directory/search and paid listing placement | Do not spend for the text-only release | [Official submit page](https://www.futurepedia.io/submit-tool) |
| P3 | Toolify | Weak and currently paid; likely expects a user-facing AI tool | Live website, English listing, assets, payment | Paid `Submit AI` form | Directory pages, launch placement, backlinks | Do not spend for the text-only release | [Official submit page](https://www.toolify.ai/submit) |

## Organic-growth verdict

Platform-only distribution is unlikely to make MoneyPrinter.md go viral from a
cold start.

The strongest organic loop is:

1. A public, inspectable GitHub repository with a working one-line install.
2. Skills.sh discovery, because real CLI installs can produce hot, trending, and
   all-time surfaces.
3. ClawHub search and seven separately useful skill pages.
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
4. Dry-run ClawHub; resolve the MIT versus MIT-0 publishing decision; publish
   only after owner approval.
5. Package and validate the Claude and OpenAI skills-only plugins.
6. Post one personal X launch with the public repo and inspected social card.
7. Submit agentskill.sh and Awesome Skills.
8. Post Show HN only when the project is runnable and the owner has written the
   explanation in their own words.
9. Add Dev Hunt, AgenticSkills, OpenSpace, and Uneed as second-wave channels.
10. Skip paid or exclusion-prone P3 directories until the product gains an
    interactive application surface or evidence that the spend makes sense.
