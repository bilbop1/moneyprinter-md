import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const repoRoot = new URL("../", import.meta.url);
const evaluatedSkillCommit =
  "b6d2fe859553e5f998ea3b6138006ce535b21d98";
const sessionIds = ["S01", "S02", "S03", "S04", "S05", "S06"];
const orchestrationIds = ["O01", "O02", "O03", "O04", "O05", "O06"];

async function read(path) {
  return readFile(new URL(path, repoRoot), "utf8");
}

function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}

function tableIds(text, prefix) {
  return [...text.matchAll(new RegExp(`^\\|\\s*(${prefix}\\d{2})\\s*\\|`, "gm"))]
    .map((match) => match[1]);
}

function exactHeadingIds(text, prefix) {
  return [...text.matchAll(new RegExp(`^##\\s+(${prefix}\\d{2})\\s*$`, "gm"))]
    .map((match) => match[1]);
}

function prefixedHeadingIds(text, prefix) {
  return [
    ...text.matchAll(new RegExp(`^##\\s+(${prefix}\\d{2})(?:\\s|$)`, "gm")),
  ].map((match) => match[1]);
}

function exactSections(text, prefix) {
  const matches = [
    ...text.matchAll(new RegExp(`^##\\s+(${prefix}\\d{2})\\s*$`, "gm")),
  ];
  const sections = new Map();
  for (const [index, match] of matches.entries()) {
    assert.ok(!sections.has(match[1]), `duplicate ${match[1]} section`);
    const end = matches[index + 1]?.index ?? text.length;
    sections.set(match[1], text.slice(match.index, end));
  }
  return sections;
}

function tableRow(text, id) {
  const rows = text.split("\n").filter((line) =>
    new RegExp(`^\\|\\s*${id}\\s*\\|`).test(line),
  );
  assert.equal(rows.length, 1, `${id} must have exactly one result row`);
  return rows[0];
}

function requireTokens(text, label, tokens) {
  for (const token of tokens) {
    if (token instanceof RegExp) {
      assert.match(text, token, `${label} missing ${token}`);
    } else {
      assert.ok(text.includes(token), `${label} missing ${token}`);
    }
  }
}

function requireNarrowClaims(text, path) {
  assert.match(text, /local (?:simulated|simulation|fixture|contract|pressure)/i);
  for (const claim of ["customer outcomes?", "host activation", "cash evidence"]) {
    assert.match(
      text,
      new RegExp(`(?:not|no|does not|do not)[\\s\\S]{0,180}${claim}`, "i"),
      `${path} must reject ${claim}`,
    );
  }
}

const sessionPrompts = await read("evals/session-scan/prompts.md");
const sessionOracle = await read("evals/session-scan/oracle.md");
const sessionRaw = await read(
  "evals/session-scan/2026-07-19-raw-evaluator-output.md",
);
const sessionS06Retry = await read(
  "evals/session-scan/2026-07-19-s06-replication-raw-output.md",
);
const sessionResults = await read("evals/session-scan/2026-07-19-results.md");
const sessionS01Defect = await read(
  "evals/session-scan/2026-07-19-s01-fixture-defect.md",
);
const sessionS06Note = await read(
  "evals/session-scan/2026-07-19-s06-replication-note.md",
);
const orchestrationPrompts = await read("evals/orchestration/prompts.md");
const orchestrationOracle = await read("evals/orchestration/oracle.md");
const orchestrationInitialRaw = await read(
  "evals/orchestration/2026-07-19-raw-evaluator-output.md",
);
const orchestrationCorrectedRaw = await read(
  "evals/orchestration/2026-07-19-corrected-raw-evaluator-output.md",
);
const orchestrationBoundedRaw = await read(
  "evals/orchestration/2026-07-19-bounded-replication-raw-output.md",
);
const orchestrationResults = await read(
  "evals/orchestration/2026-07-19-results.md",
);
const orchestrationDefect = await read(
  "evals/orchestration/2026-07-19-fixture-defect.md",
);
const evalReadme = await read("evals/README.md");
const latestResults = await read("evals/latest-results.md");
const provenance = await read("evals/provenance.md");
const currentMoneyPrinter = await read("skills/moneyprinter/SKILL.md");
const boundedCombinedRaw = await read(
  ".superpowers/sdd/bounded-blind-eval-output.md",
);

assert.deepEqual(tableIds(sessionPrompts, "S"), sessionIds);
assert.deepEqual(tableIds(sessionOracle, "S"), sessionIds);
const sessionInitialRaw = sessionRaw.split("\n# Corrected S01 retry raw evaluator output")[0];
assert.deepEqual(exactHeadingIds(sessionInitialRaw, "S"), sessionIds);
assert.deepEqual(tableIds(sessionResults, "S"), sessionIds);

assert.deepEqual(prefixedHeadingIds(orchestrationPrompts, "O"), orchestrationIds);
assert.deepEqual(tableIds(orchestrationOracle, "O"), orchestrationIds);
assert.deepEqual(exactHeadingIds(orchestrationInitialRaw, "O"), orchestrationIds);
assert.deepEqual(tableIds(orchestrationCorrectedRaw, "O"), orchestrationIds);
assert.deepEqual(exactHeadingIds(orchestrationBoundedRaw, "O"), orchestrationIds);
assert.deepEqual(tableIds(orchestrationResults, "O"), orchestrationIds);

const sourcePinnedFiles = [
  ["session raw", sessionRaw],
  ["S06 retry raw", sessionS06Retry],
  ["orchestration initial raw", orchestrationInitialRaw],
  ["orchestration corrected raw", orchestrationCorrectedRaw],
  ["orchestration bounded raw", orchestrationBoundedRaw],
  ["session results", sessionResults],
  ["orchestration results", orchestrationResults],
  ["latest results", latestResults],
  ["provenance", provenance],
];
for (const [path, text] of sourcePinnedFiles) {
  assert.ok(text.includes(evaluatedSkillCommit), `${path} missing source commit`);
}

for (const [path, text] of [
  ["session raw", sessionRaw],
  ["orchestration initial raw", orchestrationInitialRaw],
  ["orchestration corrected raw", orchestrationCorrectedRaw],
  ["session results", sessionResults],
  ["orchestration results", orchestrationResults],
  ["provenance", provenance],
]) {
  assert.match(
    text,
    /(?:Exact (?:deployed )?model identifier|Model identifier):\*{0,2}\s*`?Unavailable`?/i,
    `${path} missing unavailable model provenance`,
  );
}
assert.match(sessionS06Retry, /Exact model identifier:\s*`gpt-5\.6-terra`/);
assert.match(orchestrationBoundedRaw, /Exact model identifier:\s*`gpt-5\.6-terra`/);
assert.equal(
  sha256(boundedCombinedRaw),
  "df329dcb86dc4144cfa10892796aed24fd5f5345a14b80376373d4c6877c4458",
);

for (const [path, text] of [
  ["session results", sessionResults],
  ["orchestration results", orchestrationResults],
  ["latest results", latestResults],
  ["provenance", provenance],
]) {
  requireNarrowClaims(text, path);
}

const initialSessionGrade = new Map([
  ["S01", "Fail"],
  ["S02", "Pass"],
  ["S03", "Pass"],
  ["S04", "Pass"],
  ["S05", "Pass"],
  ["S06", "Fail"],
]);
for (const [id, grade] of initialSessionGrade) {
  const cells = tableRow(sessionResults, id).split("|").map((cell) => cell.trim());
  assert.equal(cells[2], grade, `${id} must remain ${grade}`);
}
requireTokens(sessionResults, "session results", [
  "Initial one-shot suite: `4/6`",
  "Corrected S01 retry: `Pass`",
  "Original S06: `Fail`",
  "S06 replication: `Fail`",
  "Best corrected session suite: `5/6`",
  "Retained model-compliance limitation",
]);
const sessionReplicationRows = sessionResults
  .split("\n")
  .filter((line) => /^\|\s*Unchanged S06\s*\|/.test(line));
assert.equal(
  sessionReplicationRows.length,
  1,
  "session results must have exactly one unchanged S06 replication row",
);
assert.equal(
  sessionReplicationRows[0].split("|").map((cell) => cell.trim())[2],
  "Fail",
  "unchanged S06 replication grade must remain Fail",
);
requireTokens(sessionRaw, "corrected S01 raw", [
  "# Corrected S01 retry raw evaluator output",
  "## S01 retry",
  "Stable-identity merge:",
]);
requireTokens(sessionS06Retry, "S06 replication raw", [
  "# S06",
  "No Action receipt",
]);

const s06OfferStart = sessionS06Retry.indexOf("\n# Offer Brief\n");
const s06PayableStart = sessionS06Retry.indexOf("\n# Payable Test Plan\n");
const s06AcquisitionStart = sessionS06Retry.indexOf(
  "\n# Staged Acquisition Plan\n",
);
assert.ok(s06OfferStart >= 0, "S06 replication missing Offer Brief boundary");
assert.ok(
  s06PayableStart > s06OfferStart,
  "S06 replication missing Payable Test Plan boundary",
);
assert.ok(
  s06AcquisitionStart > s06PayableStart,
  "S06 replication missing Staged Acquisition Plan boundary",
);

const s06Offer = sessionS06Retry.slice(s06OfferStart, s06PayableStart);
const s06Acquisition = sessionS06Retry.slice(s06AcquisitionStart);
const missingOfferHeadings = [
  "Pain and current workaround",
  "Promised deliverable",
  "Outcome framing",
  "Scope and exclusions",
  "Delivery method and time",
  "Price hypothesis and basis",
  "Cost and gross-margin estimate",
  "Required proof",
  "Risk reversal without deception",
  "Qualification and disqualification",
  "Smallest payable version",
].filter(
  (heading) =>
    !new RegExp(`^##\\s+${heading}\\s*$`, "m").test(s06Offer),
);
assert.deepEqual(
  missingOfferHeadings,
  [
    "Pain and current workaround",
    "Promised deliverable",
    "Outcome framing",
    "Scope and exclusions",
    "Delivery method and time",
    "Price hypothesis and basis",
    "Cost and gross-margin estimate",
    "Required proof",
    "Risk reversal without deception",
    "Qualification and disqualification",
    "Smallest payable version",
  ],
  "S06 replication must retain the observed Offer Brief heading omissions",
);
assert.doesNotMatch(
  s06Offer,
  /^\|\s*Low\s*\|[\s\S]*^\|\s*Base\s*\|[\s\S]*^\|\s*High\s*\|/im,
  "S06 replication unexpectedly contains the required low/base/high economics table",
);
assert.doesNotMatch(
  sessionS06Retry,
  /^#{1,6}\s+Opportunity Evidence Table\s*$/im,
  "S06 replication unexpectedly contains the Opportunity Evidence Table",
);
assert.doesNotMatch(
  sessionS06Retry,
  /^#{1,6}\s+Claim ledger\s*$/im,
  "S06 replication unexpectedly contains the claim ledger",
);
assert.doesNotMatch(
  s06Acquisition,
  /^##\s+Why these channels fit\s*$/im,
  "S06 replication unexpectedly contains the channel-fit section",
);
assert.doesNotMatch(
  s06Acquisition,
  /Execution blocked — prerequisite unresolved/,
  "S06 replication unexpectedly contains the required blocked-checkpoint status",
);

for (const [path, text] of [
  ["session results", sessionResults],
  ["S06 replication note", sessionS06Note],
  ["latest results", latestResults],
  ["provenance", provenance],
  ["eval README", evalReadme],
]) {
  requireTokens(text, path, [
    "Opportunity Evidence Table",
    "claim ledger",
    /eleven required Offer Brief\s+headings/i,
    /low\/base\/high\s+economics table/i,
    "`Why these channels fit`",
    /`Execution blocked\s+(?:—|-)\s+prerequisite unresolved`/,
  ]);
  assert.match(
    text,
    /retained (?:as a )?model-compliance\s+limitation/i,
    `${path} must classify S06 as a retained model-compliance limitation`,
  );
  assert.doesNotMatch(
    text,
    /S06 replication[^.\n|]{0,80}(?:`Pass`|\bpassed\b)/i,
    `${path} must not report the S06 replication as passing`,
  );
  assert.doesNotMatch(
    text,
    /(?:combined corrected\/replicated|best corrected(?: session)? suite)[^.\n|]{0,80}`6\/6`/i,
    `${path} must not report a corrected session suite as 6/6`,
  );
}
requireTokens(latestResults, "latest results session summary", [
  "Initial one-shot `4/6`",
  "original S06 `Fail`",
  "unchanged S06 replication `Fail`",
  "best corrected suite `5/6`",
]);
requireTokens(provenance, "provenance session summary", [
  "**Initial session result:** `4/6`",
  "**S06 replication:**",
  "**Best corrected session result:** `5/6`",
]);
requireTokens(evalReadme, "eval README session summary", [
  "one-shot result is therefore retained as `4/6`",
  "unchanged S06 replication fails",
  /best\s+corrected session suite is `5\/6`/i,
]);

assert.equal(
  sha256(sessionPrompts),
  "c419972ce777112b43065388b82f7999e3a5576d626412800e4467da2b646d13",
);
assert.equal(
  sha256(sessionOracle),
  "78da010cd0a3895c86e12f3976467fdb780799060d07d4c2271c9202cdbf1f82",
);
assert.equal(
  sha256(currentMoneyPrinter),
  "019b2feba4febb63e19a79aba2e3984f032758cf3291e1e6658d128f435c33d8",
);
requireTokens(sessionS01Defect, "S01 defect", [
  "5b4efd94f3ffd7e2abf1fa1b75198dd2a6e285b23f68e1df44746c09d42af8e6",
  "/root/scan_task7_evals/blind_eval_rc3",
  "UUID: `Unavailable`",
]);
requireTokens(sessionS06Note, "S06 note", [
  "/root/scan_task7_evals/blind_corrected_rc3",
  "UUIDs: `Unavailable`",
]);

assert.equal(
  sha256(orchestrationPrompts),
  "bb2bc74b7cf8669d493a3bb3413d7f60f9cbe268f82218d3eef60e8ca64aab56",
);
assert.equal(
  sha256(orchestrationOracle),
  "43f2e06c96eaca03723c8a380fc89f6b9c283583afc94614e5e78372e4b83052",
);
requireTokens(orchestrationDefect, "orchestration defect", [
  "7a534f820c7c6d03026b3ebfc6f36e100ac0bc8a0b84ae88c3ad358d1d9eb03b",
  "c068d9078434df0bc76d4fdda5e5521348143b6c929feca21cf890d12ccc6dd8",
  "reported `6/6` is invalid",
]);

const correctedRows = new Map(
  orchestrationIds.map((id) => [id, tableRow(orchestrationCorrectedRaw, id)]),
);
const expectedBranches = new Map([
  ["O01", "SCALE — cash and delivery proof support increased volume"],
  ["O02", "STOP — no credible signal or unacceptable economics"],
  ["O03", "REVISE — signal exists but offer, channel, or delivery failed"],
  ["O04", "REPEAT — one more bounded test is justified"],
  ["O05", "SCALE — cash and delivery proof support increased volume"],
]);
for (const id of orchestrationIds) {
  const row = correctedRows.get(id);
  requireTokens(row, id, [
    "`Simulation`",
    /no actual (?:external )?action/i,
    /no actual Action receipt/i,
  ]);
  const cells = tableRow(orchestrationResults, id)
    .split("|")
    .map((cell) => cell.trim());
  assert.equal(cells[2], "Pass", `${id} corrected grade must be Pass`);
}
for (const [id, branch] of expectedBranches) {
  requireTokens(correctedRows.get(id), id, [`Counterfactual branch: ${branch}`]);
  assert.ok(tableRow(orchestrationResults, id).includes(branch));
}
requireTokens(correctedRows.get("O01"), "O01", [
  "Counterfactual Action receipt",
  "Counterfactual label: Cash collected",
  "$340",
]);
requireTokens(correctedRows.get("O02"), "O02", ["10/10", "-$30"]);
requireTokens(correctedRows.get("O03"), "O03", [
  "Counterfactual label: Pipeline signal",
  "Counterfactual label: Revenue booked",
  /rejected/i,
]);
requireTokens(correctedRows.get("O04"), "O04", [
  "Counterfactual label: Cash collected",
  "accepted",
  "$56.25",
]);
requireTokens(correctedRows.get("O05"), "O05", [
  "Counterfactual label: Cash collected",
  "$1,200",
  "$660",
]);
requireTokens(correctedRows.get("O06"), "O06", [
  "fresh",
  "Timing",
  "prospective label",
  "rollback",
  "remain unchanged",
]);
assert.doesNotMatch(
  correctedRows.get("O06"),
  /timing[^.\n]{0,80}\b(?:was|is|materially)\s+(?:changed|mismatched)\b/i,
);

requireTokens(orchestrationResults, "orchestration results", [
  "Initial suite: `Invalid`",
  "Corrected suite: `6/6`",
  "Actual suite evidence label: `Simulation`",
  "graded `5/6` under the corrected oracle",
]);
const boundedSections = exactSections(orchestrationBoundedRaw, "O");
for (const [id, branch] of expectedBranches) {
  requireTokens(boundedSections.get(id), `${id} bounded replication`, [
    "Actual suite label: `Simulation`",
    `Counterfactual branch: \`${branch}\``,
  ]);
}
requireTokens(boundedSections.get("O06"), "O06 bounded replication", [
  "action",
  "payload",
  "audience",
  "channel",
  "account",
  "scope/volume",
  "tool",
  "expected cost",
  "fresh immediate",
]);
assert.doesNotMatch(
  boundedSections.get("O06"),
  /timing[^.\n]{0,80}\b(?:was|is|materially)\s+(?:changed|mismatched)\b/i,
);
requireTokens(provenance, "provenance", [
  "/root/scan_task7_evals/blind_eval_rc3",
  "/root/scan_task7_evals/blind_corrected_rc3",
  "/root/bounded_blind_eval",
  "UUID",
  "Unavailable",
]);

console.log(
  `eval contract: ${sessionIds.length} session-scan and ${orchestrationIds.length} corrected orchestration cases verified`,
);
