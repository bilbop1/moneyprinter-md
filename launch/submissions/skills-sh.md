# Skills.sh

## Verdict

**P0 — first launch target.** This is the lowest-friction native discovery
surface for the current repository format. It can also feed Hermes discovery,
because Hermes' Skills Hub searches Skills.sh.

**Status:** blocked until the GitHub repository is public and the remote install
works. No separate submission or listing is claimed.

## Current official submission path

Skills.sh documents GitHub-source installation, not a manual listing form. Its
leaderboard is populated from anonymous aggregate `skills` CLI install
telemetry. The legitimate publication path is therefore:

1. Publish the repository.
2. Verify it logged out.
3. Run one clean remote listing/install test.
4. Share the real install command with users.

Sources: [official CLI reference](https://www.skills.sh/docs/cli),
[official ranking explanation](https://www.skills.sh/docs), and the
[Hermes official Skills System](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills).

## Prerequisites

- Public `https://github.com/bilbop1/moneyprinter-md`.
- All seven `SKILL.md` files present at the public default branch.
- Fresh remote listing shows exactly the seven expected skill names.
- README install instructions no longer describe the remote as unconfirmed.

## Exact commands

Run only after the repository works logged out:

```sh
npx skills add bilbop1/moneyprinter-md --list
npx skills add bilbop1/moneyprinter-md
```

The first command is a release check. Do not run repeated installs to inflate
telemetry.

## Listing title

> MoneyPrinter.md — receipts-first revenue workflows for AI agents

## Short description

> A seven-skill, open-source workflow pack that routes a short interview toward
> one credible payable test or the smallest safe discovery step while keeping
> economic evidence honestly labelled.

## Long description

> MoneyPrinter.md starts from the user's actual assets, constraints, authority,
> and risk. It recommends one route and one fallback, then defines a payable
> test when credible or the smallest safe discovery step when it is not.
> Companion skills guide opportunity research, offer design, permissioned
> acquisition, delivery proof, and an honest cashflow review. It does not
> promise income or automatically send, post, purchase, charge, sign, or
> publish.

## Tags

`revenue-operations`, `business-validation`, `entrepreneurship`,
`human-in-the-loop`, `evidence`, `open-source`

## Links required

- Confirmed public GitHub URL.
- Confirmed landing page for the README and social profiles, not for Skills.sh
  ingestion itself.

## Assets required

No form asset is documented. The GitHub social preview should still be set
before launch because Skills.sh sends users back to source.

## Expected discovery mechanism

- Search by skill name and description.
- Seven individual skill detail surfaces.
- All-time, trending, and hot leaderboard views informed by legitimate installs.
- Downstream search from clients that integrate Skills.sh, including Hermes.

## Review risks

- An initial listing may have no meaningful rank.
- A multi-skill repo splits discovery across seven skill names.
- Telemetry is a ranking input, not a guarantee of traffic or quality.
- Security auditing and user review may suppress or deter unsafe-looking skills;
  retain the approval and safety language.

## Final human action

After public-URL confirmation, run the two commands once, inspect the resulting
Skills.sh pages, then add only the real package URL and install badge to the
README.
