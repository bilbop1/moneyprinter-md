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
  "S06 replication: `Pass`",
  "Combined corrected/replicated suite: `6/6`",
]);
requireTokens(sessionRaw, "corrected S01 raw", [
  "# Corrected S01 retry raw evaluator output",
  "## S01 retry",
  "Stable-identity merge:",
]);
requireTokens(sessionS06Retry, "S06 replication raw", [
  "# S06",
  "# Offer Brief",
  "# Payable Test Plan",
  "# Staged Acquisition Plan",
  "## Private fulfillment preparation",
  "No Action receipt",
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
