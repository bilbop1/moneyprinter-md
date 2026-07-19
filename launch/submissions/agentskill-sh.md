# agentskill.sh

## Verdict

**P1 - exact third-party directory fit.** The form imports every detected
`SKILL.md` from a public GitHub repository and can keep it synced.

**Status:** attempted 2026-07-19. The importer detected all seven `SKILL.md`
files, then returned a storage-quota write failure for every record because the
platform's database was over quota. This is a platform-side blocker, not a
skill-format failure. Retry the same repository URL after writes resume.

## Current official submission path

Paste the public repository URL into
[agentskill.sh/submit](https://agentskill.sh/submit). The site documents daily
GitHub sync, optional instant webhook sync, and optional GitHub connection to
verify ownership.

## Prerequisites

- Public repository with all seven skills on the default branch.
- Clear frontmatter names and descriptions.
- Optional agentskill.sh account connected to the publishing GitHub identity.
- Owner decision before adding the optional GitHub webhook.

## Exact repository value

Use only after logged-out confirmation:

```text
https://github.com/bilbop1/moneyprinter-md
```

## Listing title

> MoneyPrinter.md

## Short description

> One permissioned 14-day scan across detected, accessible AI CLI and GUI
> sessions starts a cash-first revenue run after one confirmation.

## Long description

> Seven open-source Agent Skills turn permitted history into a source-linked
> portfolio, no more than three ranked routes, and one primary route. The agent
> continues through private research, offer work, payable-test design,
> acquisition preparation, and delivery preparation. It pauses before one
> exact external action, records the approved action, reviews the result, and
> reranks. Blocked or unsupported session sources remain visible, and no income
> is promised.

## Tags

`business`, `revenue`, `validation`, `research`, `entrepreneurship`,
`human-in-the-loop`

## Links required

- Public GitHub repository.
- Confirmed landing page on the imported author/project profile where supported.

## Assets required

No asset is documented for the URL import. Keep the GitHub social preview set.

## Expected discovery mechanism

Directory search, `/learn` search, ratings, author/repository browsing, and
daily or webhook-based source updates.

## Review risks

- Automatic metadata parsing makes weak or overly broad skill descriptions a
  discovery problem.
- Connecting GitHub or adding a webhook is an account mutation and owner action.
- Third-party security scores or compatibility labels must be inspected rather
  than assumed.

## Final human action

Retry the confirmed repository URL after the platform database accepts writes,
then inspect all seven records. Optionally connect GitHub for ownership
verification only after the import succeeds. Add a webhook only after reviewing
its exact permissions and delivery events.
