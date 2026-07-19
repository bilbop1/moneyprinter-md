import { readFile } from "node:fs/promises";

const repoRoot = new URL("../", import.meta.url);

const skillFiles = [
  "skills/opportunity-radar/SKILL.md",
  "skills/offer-engine/SKILL.md",
  "skills/payable-test/SKILL.md",
  "skills/ethical-acquisition/SKILL.md",
  "skills/delivery-proof/SKILL.md",
  "skills/cashflow-review/SKILL.md",
];

const referenceFiles = [
  "skills/opportunity-radar/references/research-protocol.md",
  "skills/opportunity-radar/references/source-grades.md",
  "skills/offer-engine/references/offer-brief.md",
  "skills/offer-engine/references/unit-economics.md",
  "skills/payable-test/references/approval-gates.md",
  "skills/payable-test/references/test-designs.md",
  "skills/ethical-acquisition/references/channel-rules.md",
  "skills/ethical-acquisition/references/message-standard.md",
  "skills/delivery-proof/references/acceptance-and-proof.md",
  "skills/delivery-proof/references/field-report.md",
  "skills/cashflow-review/references/decision-rules.md",
];

const forbiddenLegacyPatterns = [
  /user's approved `Experiment Brief`/i,
  /approved `Opportunity Evidence Table`/i,
  /approved opportunity evidence/i,
  /approved `Offer Brief`/i,
  /Do not execute (?:it|the action)/i,
  /Do not send, post,\s*publish, purchase, charge, sign, submit, change an account/i,
  /This skill records evidence; it does not\s*send, publish, charge, contact a client/i,
  /stages recommendations only; it does not contact, publish, purchase, charge/i,
];

const cache = new Map();
async function read(path) {
  if (!cache.has(path)) {
    cache.set(path, await readFile(new URL(path, repoRoot), "utf8"));
  }
  return cache.get(path);
}

const failures = [];
function check(label, callback) {
  try {
    callback();
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
  }
}

function requireMatch(text, pattern) {
  if (!pattern.test(text)) throw new Error(`missing ${pattern}`);
}

function orderedStateViolations(text) {
  const privateAuthorization =
    /Run\s+Authorization[\s\S]{0,260}(?:permits|satisfies|authorizes|allows)[\s\S]{0,180}private/i;
  if (!privateAuthorization.test(text)) {
    return ["ordered run state missing private authorization"];
  }

  const workflowStart = text.search(/^## Workflow\s*$/m);
  if (workflowStart < 0) return ["missing Workflow section"];
  const afterWorkflowHeading = text.indexOf("\n", workflowStart) + 1;
  const remainingHeadings = text.slice(afterWorkflowHeading);
  const nextSectionOffset = remainingHeadings.search(/^## (?!Workflow\b)/m);
  const workflow =
    nextSectionOffset < 0
      ? remainingHeadings
      : remainingHeadings.slice(0, nextSectionOffset);

  const steps = [
    {
      name: "staged exact action",
      pattern:
        /(?<!-)\b(?:stage|staged|staging|keep)\b[\s\S]{0,180}\b(?:exact|external action)\b|\b(?:exact|external)\b[\s\S]{0,120}(?<!-)\bstaged\b/i,
    },
    {
      name: "immediately preceding exact approval",
      pattern: /immediately\s+preceding\s+exact\s+approval/i,
    },
    {
      name: "perform only approved action",
      pattern: /perform[\s\S]{0,80}only[\s\S]{0,80}approved\s+action/i,
    },
    { name: "Action receipt", pattern: /Action receipt/i },
    {
      name: "return to moneyprinter",
      pattern: /return[\s\S]{0,120}`moneyprinter`/i,
    },
  ];

  let cursor = 0;
  for (const step of steps) {
    const remaining = workflow.slice(cursor);
    const match = remaining.match(step.pattern);
    if (!match) return [`ordered run state missing after ${step.name}`];
    cursor += match.index + match[0].length;
  }
  return [];
}

function contractViolations(text, { operative = false } = {}) {
  const violations = [];
  const requirePattern = (pattern, message) => {
    if (!pattern.test(text)) violations.push(message);
  };
  const rejectPattern = (pattern, message) => {
    if (pattern.test(text)) violations.push(message);
  };

  requirePattern(/Run\s+Authorization/, "missing Run Authorization");
  requirePattern(
    /return[\s\S]{0,180}`moneyprinter`/i,
    "missing return to moneyprinter",
  );
  requirePattern(
    /After\s+an\s+immediately\s+preceding\s+exact\s+approval,\s+the\s+current\s+host\s+may\s+perform\s+only\s+that\s+approved\s+action/i,
    "missing exact-approved execution",
  );
  requirePattern(/Action receipt/, "missing Action receipt");

  for (const pattern of forbiddenLegacyPatterns) {
    rejectPattern(pattern, `legacy stop matches ${pattern}`);
  }

  if (operative) {
    requirePattern(/Money Machine Run/, "missing Money Machine Run");
    requirePattern(
      /without\s+(?:asking for|requiring) another approval/i,
      "missing private continuation",
    );
    requirePattern(/broad/i, "missing broad-permission rejection");
    requirePattern(/batch/i, "missing batch-permission rejection");
    requirePattern(/stale/i, "missing stale-permission rejection");
    requirePattern(
      /material(?:ly)? change/i,
      "missing material-change rejection",
    );
    rejectPattern(
      /Run\s+Authorization[\s\S]{0,220}\b(?:does\s+not|doesn't|never|cannot|can't|must\s+not)\b[\s\S]{0,100}\b(?:permit|permits|authorize|allow|cover)\b[\s\S]{0,120}\bprivate\b/i,
      "Run Authorization contradictorily prohibits private work",
    );
    rejectPattern(
      /(?:even\s+)?after[\s\S]{0,100}immediately\s+preceding\s+exact\s+approval[\s\S]{0,180}\b(?:never|do\s+not|must\s+not|cannot|can't)\b[\s\S]{0,100}\b(?:execute|perform|act|send|post|publish|purchase|charge|sign|submit|deliver|change)\b/i,
      "exact approval contradictorily prohibits execution",
    );
    rejectPattern(
      /(?:even\s+)?after[\s\S]{0,100}immediately\s+preceding\s+exact\s+approval[\s\S]{0,180}\b(?:keep|remain)\b[\s\S]{0,80}\bstaged\b[\s\S]{0,40}\b(?:forever|indefinitely|always)\b/i,
      "exact approval contradictorily keeps the action staged forever",
    );
    violations.push(...orderedStateViolations(text));
  }

  return violations;
}

function requireViolation(violations, expected) {
  if (!violations.some((violation) => violation.includes(expected))) {
    throw new Error(`missing expected rejection: ${expected}`);
  }
}

function requireNoViolations(violations) {
  if (violations.length > 0) throw new Error(violations.join("; "));
}

for (const path of [...skillFiles, ...referenceFiles]) {
  const text = await read(path);
  check(`${path} has a coherent run contract`, () =>
    requireNoViolations(
      contractViolations(text, { operative: skillFiles.includes(path) }),
    ),
  );
}

const tokenCompleteRun = `
Run Authorization permits private work without asking for another approval.
Money Machine Run remains current.
Broad, batch, and stale permission are invalid. A material change needs approval.

## Workflow

1. Stage the exact external action.
2. After an immediately preceding exact approval, the current host may perform
   only that approved action, record an Action receipt, and return it to
   \`moneyprinter\`.
`;

const contradictionCases = [
  {
    name: "rejects a private-work prohibition hidden after positive tokens",
    text: `${tokenCompleteRun}
Run Authorization never permits private work without another approval.`,
    expected: "prohibits private work",
  },
  {
    name: "rejects an execution prohibition hidden after positive tokens",
    text: `${tokenCompleteRun}
Even after an immediately preceding exact approval, never execute the action.`,
    expected: "prohibits execution",
  },
  {
    name: "rejects a forever-staged instruction hidden after positive tokens",
    text: `${tokenCompleteRun}
Even after an immediately preceding exact approval, keep the action staged
forever.`,
    expected: "staged forever",
  },
  {
    name: "rejects run states in the wrong order",
    text: `
Run Authorization permits private work without asking for another approval.
Money Machine Run remains current.
Broad, batch, and stale permission are invalid. A material change needs approval.

## Workflow

1. Record an Action receipt and return it to \`moneyprinter\`.
2. Stage the exact external action.
3. After an immediately preceding exact approval, the current host may perform
   only that approved action.
`,
    expected: "ordered run state",
  },
];

for (const fixture of contradictionCases) {
  check(fixture.name, () =>
    requireViolation(
      contractViolations(fixture.text, { operative: true }),
      fixture.expected,
    ),
  );
}

const approvalFields = [
  "Action",
  "Exact payload",
  "Destination",
  "Channel",
  "Account",
  "Timing",
  "Scope",
  "Volume",
  "Tool",
  "Expected cost",
  "Evidence label",
  "Rollback or correction path",
  "Approver authority status",
  "Third-party data status",
  "Regulated-review status",
  "Approval requested",
];

function requireCanonicalCheckpoint(text) {
  const blocks = [...text.matchAll(/```markdown\n([\s\S]*?)\n```/g)].map(
    (match) => match[1],
  );
  const checkpoint = blocks.find((block) => /^Action:/m.test(block));
  if (!checkpoint) throw new Error("missing canonical markdown checkpoint");

  let cursor = 0;
  for (const field of approvalFields) {
    const remaining = checkpoint.slice(cursor);
    const pattern = new RegExp(`^${field}:`, "m");
    const match = remaining.match(pattern);
    if (!match) throw new Error(`checkpoint missing ordered ${field}`);
    cursor += match.index + match[0].length;
  }
  return checkpoint;
}

for (const path of [
  "skills/payable-test/references/approval-gates.md",
  "skills/cashflow-review/references/decision-rules.md",
]) {
  const text = await read(path);
  check(`${path} has one ordered canonical checkpoint`, () =>
    requireCanonicalCheckpoint(text),
  );
  for (const field of approvalFields) {
    check(`${path} stages ${field}`, () =>
      requireMatch(text, new RegExp(`^${field}:`, "m")),
    );
  }
}

const payableCheckpoint = requireCanonicalCheckpoint(
  await read("skills/payable-test/references/approval-gates.md"),
);
const cashflowCheckpoint = requireCanonicalCheckpoint(
  await read("skills/cashflow-review/references/decision-rules.md"),
);
check("cashflow-review uses the exact payable-test checkpoint", () => {
  if (cashflowCheckpoint !== payableCheckpoint) {
    throw new Error("canonical approval checkpoints differ");
  }
});

const reapprovalFields = [
  "action",
  "payload",
  "destination",
  "channel",
  "account",
  "timing",
  "scope",
  "volume",
  "tool",
  "cost",
  "evidence label",
  "rollback/correction path",
  "authority",
  "data",
  "regulated-review status",
];

function requireReapprovalCoverage(text) {
  const match = text.match(
    /(?:Require a new immediate approval if|Any material change to)([\s\S]{0,900}?)(?:requires a fresh immediate approval|If the rollback path)/i,
  );
  if (!match) throw new Error("missing bounded material-change clause");
  for (const field of reapprovalFields) {
    if (!match[1].toLowerCase().includes(field)) {
      throw new Error(`reapproval clause missing ${field}`);
    }
  }
}

for (const path of [
  "skills/payable-test/references/approval-gates.md",
  "skills/cashflow-review/references/decision-rules.md",
]) {
  const text = await read(path);
  check(`${path} invalidates changed checkpoint fields`, () =>
    requireReapprovalCoverage(text),
  );
}

const deliveryProof = await read("skills/delivery-proof/SKILL.md");
check("delivery-proof coordinates exact-approved delivery", () =>
  requireMatch(deliveryProof, /coordinate[\s\S]{0,120}exact-approved delivery/i),
);
check("delivery-proof waits for an observed delivery result", () =>
  requireMatch(deliveryProof, /wait[\s\S]{0,120}observed delivery result/i),
);
check("delivery-proof preserves delivery proof", () =>
  requireMatch(deliveryProof, /preserve[\s\S]{0,120}(?:delivery )?proof/i),
);

const ethicalAcquisition = await read("skills/ethical-acquisition/SKILL.md");
check("ethical-acquisition prepares the private fulfillment artifact", () => {
  requireMatch(ethicalAcquisition, /## Private fulfillment preparation/);
  requireMatch(ethicalAcquisition, /deliverable workflow/i);
  requireMatch(ethicalAcquisition, /acceptance checklist/i);
  requireMatch(ethicalAcquisition, /delivery capacity and timing/i);
  requireMatch(ethicalAcquisition, /required human review/i);
  requireMatch(ethicalAcquisition, /evidence to preserve/i);
  requireMatch(ethicalAcquisition, /failure or refund handling/i);
});

const cashflowReview = await read("skills/cashflow-review/SKILL.md");
check("cashflow-review returns its decision for reranking", () =>
  requireMatch(
    cashflowReview,
    /return[\s\S]{0,180}(?:STOP|REVISE|REPEAT|SCALE)[\s\S]{0,180}`moneyprinter`[\s\S]{0,180}rerank/i,
  ),
);

if (failures.length > 0) {
  console.error(`money-machine chain contract: ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `money-machine chain contract: ${skillFiles.length} skills and ${referenceFiles.length} references verified`,
  );
}
