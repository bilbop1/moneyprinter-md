# OpenAI Plugins Directory

## Verdict

**P0 — strong first-party fit, not overnight-click-ready.** OpenAI currently
accepts skills-only plugins, but this repository still needs plugin packaging,
submission-specific tests, public policy/support URLs, identity verification,
and authenticated review.

**Status:** blocked. No draft, review, approval, or publication is claimed.

## Current official submission path

Use the OpenAI Platform plugin submission portal and choose **Skills only**.
The official guide requires a final skill bundle, starter prompts, exactly five
positive and three negative test cases, listing assets and URLs, regional
availability, policy attestations, a verified publisher identity, and Apps
Management write access.

Source: [official OpenAI plugin submission guide](https://learn.chatgpt.com/docs/submit-plugins).

## Prerequisites

- Package the tested seven-skill tree in OpenAI's current plugin format.
- Build exactly five positive and three negative submission tests. The five
  checked-in persona evals are useful inputs, but they are not automatically a
  complete portal test package.
- Public website, support, privacy, and terms URLs that match the publisher.
- Production logo and listing copy.
- Verified individual or business identity in the publishing organization.
- Apps Management write permission for the submitter.
- Authenticated access to the plugin submission portal.
- Owner selection of release countries/regions.

## Exact form path

Open the [OpenAI Platform plugin submission portal](https://platform.openai.com/plugins)
from the organization with the verified identity, select **Create plugin**, then
select **Skills only**.

## Listing title

> MoneyPrinter.md

## Short description

> Turn a short business interview into one bounded, evidence-labelled revenue
> experiment with human approval before external action.

## Long description

> MoneyPrinter.md is a seven-skill workflow for testing legitimate revenue
> ideas without turning estimates or simulations into earnings claims. It
> interviews the user, researches current demand, narrows an offer, defines the
> smallest payable test, stages permissioned acquisition, records delivery
> proof, and reviews the result. It distinguishes cash collected, contracted
> revenue, booked revenue, pipeline, estimated value, simulations, and
> unverified anecdotes. It never promises income and requires specific approval
> before a message, post, purchase, charge, signature, contract, or publication.

## Starter prompts

> Invoke MoneyPrinter and interview me one question at a time. I have no
> audience and at most four hours this week. Do not contact anyone.

> I run a roofing company. Help me investigate one permissioned internal revenue
> leak before proposing any customer outreach.

> I am a lawyer considering an educational product. Keep legal judgment with a
> qualified human and stop before publishing anything.

## Tags / category

Choose the closest current business/productivity category. Suggested tags:
`business validation`, `revenue operations`, `entrepreneurship`,
`human-in-the-loop`.

## Links required

- Confirmed website.
- Confirmed support URL.
- Public privacy policy.
- Public terms.
- Source repository if the form permits it.

## Assets required

- Production logo.
- Inspected listing/social image if offered by the current form.
- Final skills bundle/ZIP.

## Expected discovery mechanism

After review approval and a separate owner publish action, skills-only plugins
appear in the Plugins Directory available in ChatGPT and Codex. Submission is
not publication.

## Review risks

- “MoneyPrinter” can look like an earnings promise without the evidence and
  safety explanation.
- Policy scanning may require narrower instructions or reject unnecessary
  permissions.
- Missing support/privacy/terms pages or identity mismatch can block review.
- Existing eval prose is not a substitute for the exact portal test-case format.

## Final human action

Do not open the portal until the package, tests, URLs, identity, and release
regions are ready. The owner must review every policy attestation and perform
the final submit. After approval, publication is a separate owner action.
