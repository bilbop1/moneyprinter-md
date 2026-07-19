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

const exactActionFiles = [...skillFiles, ...referenceFiles];

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

function rejectMatch(text, pattern) {
  if (pattern.test(text)) throw new Error(`forbidden ${pattern}`);
}

for (const path of [...skillFiles, ...referenceFiles]) {
  const text = await read(path);
  check(`${path} accepts Run Authorization`, () =>
    requireMatch(text, /Run\s+Authorization/),
  );
  check(`${path} returns state to MoneyPrinter`, () =>
    requireMatch(text, /return[\s\S]{0,180}`moneyprinter`/i),
  );
  check(`${path} does not restore a legacy private-stage approval stop`, () => {
    for (const pattern of forbiddenLegacyPatterns) {
      rejectMatch(text, pattern);
    }
  });
}

for (const path of skillFiles) {
  const text = await read(path);
  check(`${path} consumes Money Machine Run`, () =>
    requireMatch(text, /Money Machine Run/),
  );
  check(`${path} permits private continuation without another approval`, () =>
    requireMatch(text, /without\s+(?:asking for|requiring) another approval/i),
  );
  check(`${path} rejects non-exact permission`, () => {
    requireMatch(text, /broad/i);
    requireMatch(text, /batch/i);
    requireMatch(text, /stale/i);
    requireMatch(text, /material(?:ly)? change/i);
  });
}

for (const path of exactActionFiles) {
  const text = await read(path);
  check(`${path} permits only the immediately approved exact action`, () =>
    requireMatch(
      text,
      /After\s+an\s+immediately\s+preceding\s+exact\s+approval,\s+the\s+current\s+host\s+may\s+perform\s+only\s+that\s+approved\s+action/i,
    ),
  );
  check(`${path} records an Action receipt`, () =>
    requireMatch(text, /Action receipt/),
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
