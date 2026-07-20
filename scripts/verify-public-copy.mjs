import { readdir, readFile } from "node:fs/promises";

const repoRoot = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, repoRoot), "utf8");
}

const approvedHeadline =
  "One permission. MoneyPrinter tells your current AI host to scan the last 14 days across every detected AI CLI and GUI it can access, figure out what is real, and start building the best path to money.";

const submissions = (await readdir(new URL("launch/submissions/", repoRoot)))
  .filter((name) => name.endsWith(".md"))
  .map((name) => `launch/submissions/${name}`)
  .sort();

const examples = [
  "examples/starting-from-zero.md",
  "examples/roofer-revenue-recovery.md",
  "examples/lawyer-productized-expertise.md",
  "examples/tiktok-shop-conversion.md",
  "examples/existing-business-leverage.md",
];

const currentCopyFiles = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "docs/install.md",
  "docs/compatibility.md",
  "docs/troubleshooting.md",
  "evals/README.md",
  "research/README.md",
  "site/README.md",
  "launch/fact-sheet.md",
  "launch/channel-matrix.md",
  "launch/show-hn.md",
  "ROADMAP.md",
  "CHANGELOG.md",
  ...submissions,
  ...examples,
];

const failures = [];

function check(label, callback) {
  try {
    callback();
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
  }
}

function requireCondition(condition, message) {
  if (!condition) throw new Error(message);
}

function normalize(text) {
  return text.replace(/\s+/g, " ").trim();
}

function requireMatch(text, pattern, message = `missing ${pattern}`) {
  requireCondition(pattern.test(text), message);
}

function rejectMatch(text, pattern, message = `forbidden ${pattern}`) {
  requireCondition(!pattern.test(text), message);
}

function sectionBody(text, heading) {
  const headingPattern = new RegExp(`^## ${heading}\\s*$`, "m");
  const headingMatch = text.match(headingPattern);
  if (!headingMatch) return null;

  const bodyStart = headingMatch.index + headingMatch[0].length;
  const remaining = text.slice(bodyStart);
  const nextHeadingOffset = remaining.search(/^## /m);
  return (
    nextHeadingOffset < 0 ? remaining : remaining.slice(0, nextHeadingOffset)
  ).trim();
}

function withoutSection(text, heading) {
  const headingPattern = new RegExp(`^## ${heading}\\s*$`, "m");
  const headingMatch = text.match(headingPattern);
  if (!headingMatch) return text;

  const bodyStart = headingMatch.index + headingMatch[0].length;
  const remaining = text.slice(bodyStart);
  const nextHeadingOffset = remaining.search(/^## /m);
  const sectionEnd =
    nextHeadingOffset < 0 ? text.length : bodyStart + nextHeadingOffset;
  return `${text.slice(0, headingMatch.index)}${text.slice(sectionEnd)}`;
}

function orderedViolations(text, steps, label) {
  const violations = [];
  let cursor = 0;

  for (const step of steps) {
    const remaining = text.slice(cursor);
    const match = remaining.match(step.pattern);
    if (!match) {
      violations.push(`${label} missing or misordered ${step.name}`);
      break;
    }
    cursor += match.index + match[0].length;
  }

  return violations;
}

function staleInterviewViolations(text) {
  const violations = [];
  if (/^## Interview delta$/im.test(text)) {
    violations.push("legacy Interview delta section");
  }

  const paragraphs = text.split(/\n\s*\n/);
  const interviewFirst =
    /\b(?:short (?:business )?interview|MoneyPrinter interviews|interviews? (?:a |the )?user|Interview (?:a user's|your real|your)|interview[- ]first(?: intake)?)\b/i;
  const allowedContext =
    /\b(?:fallback|empty[- ]history|no useful (?:accessible )?history|current public (?:0\.1\.0-)?rc\.2|published (?:0\.1\.0-)?rc\.2|rc\.2 release)\b/i;

  for (const paragraph of paragraphs) {
    const plainParagraph = normalize(paragraph.replace(/[`>*_]/g, " "));
    if (
      interviewFirst.test(plainParagraph) &&
      !allowedContext.test(plainParagraph)
    ) {
      violations.push("interview-first language outside release or fallback context");
    }
  }

  return violations;
}

function contradictionViolations(text) {
  const violations = [];
  const claimsText = withoutSection(text, "Forbidden claims");
  const contradictions = [
    {
      pattern:
        /\b(?:send|post|publish|purchase|charge|contract|change an account)\b[\s\S]{0,100}\bwithout\b[\s\S]{0,50}\b(?:specific|exact|external-action )?approval\b/i,
      message: "external action allowed without exact approval",
    },
    {
      pattern:
        /\b(?:stop|stops|end|ends)\b[\s\S]{0,80}\b(?:at|after|with)\b[\s\S]{0,30}\b(?:a )?(?:report|recommendation)\b/i,
      message: "run stops at a report or recommendation",
    },
    {
      pattern:
        /\b(?:Run Authorization|route confirmation)\b[\s\S]{0,100}\b(?:never|does not|cannot)\b[\s\S]{0,80}\bprivate (?:research|work|preparation)\b/i,
      message: "confirmed route prohibits private continuation",
    },
    {
      pattern:
        /\bwill\s+(?:make|earn|produce)\s+(?:you\s+)?(?:money|\$[1-9][0-9,]*)\b/i,
      message: "guaranteed money outcome",
    },
  ];

  for (const contradiction of contradictions) {
    if (contradiction.pattern.test(claimsText)) {
      violations.push(contradiction.message);
    }
  }

  for (const sentence of normalize(claimsText).split(/(?<=[.!?])\s+/)) {
    const externalAuthorization =
      /\b(?:scan permission|route confirmation)\b[\s\S]{0,100}\b(?:authorizes?|permits?|allows?)\s+(?:an?\s+)?external action\b/i;
    const negatedAuthorization =
      /\b(?:does?|can|cannot|must|should|will)\s+not\b[\s\S]{0,30}\b(?:authorizes?|authorize|permits?|permit|allows?|allow)\b|\bnever\b[\s\S]{0,20}\b(?:authorizes?|permits?|allows?)\b/i;
    if (
      externalAuthorization.test(sentence) &&
      !negatedAuthorization.test(sentence)
    ) {
      violations.push(
        "scan permission or route confirmation authorizes external action",
      );
    }

    const companionClaim =
      /\b(?:is|acts as|contains|ships with|requires|adds|includes|bundles)\b[\s\S]{0,45}\b(?:a\s+)?(?:MoneyPrinter\s+)?companion app\b/i;
    const companionNegation =
      /\b(?:not|without|no)\b[\s\S]{0,25}\b(?:a\s+)?(?:MoneyPrinter\s+)?companion app\b/i;
    if (companionClaim.test(sentence) && !companionNegation.test(sentence)) {
      violations.push("companion app claim");
    }

    const universalActivation =
      /\b(?:works?|runs?)\s+(?:in|on)?\s*every host\b|\bworks? everywhere\b|\ball hosts? (?:are )?(?:active|activated|verified)\b|\buniversal host activation\b/i;
    const negatedActivation =
      /\b(?:do|does|can|cannot|will|must|should)\s+not[\s\S]{0,30}\b(?:work|run|activate|verify)\b|\bnever[\s\S]{0,20}\b(?:works?|runs?|activates?|verifies?)\b/i;
    if (
      universalActivation.test(sentence) &&
      !negatedActivation.test(sentence)
    ) {
      violations.push("universal host activation claim");
    }

    const guaranteePattern =
      /\b(?:(?:guarantees?|promises?|ensures?|assures?)\s+(?:you\s+)?(?:income|profit|revenue|customers?)|(?:guaranteed|assured)\s+(?:income|profit|revenue|customers?))\b/gi;
    for (const match of sentence.matchAll(guaranteePattern)) {
      const prefix = sentence
        .slice(Math.max(0, match.index - 50), match.index)
        .replace(/>\s*/g, "");
      const negated =
        /\b(?:do|does|did|can|cannot|must|should|will)\s+not(?:\s+\w+){0,3}\s*$|\b(?:no|not|never|cannot|can't|won't)\s*$/i;
      if (!negated.test(prefix)) {
        violations.push("guaranteed income or customer claim");
        break;
      }
    }

    const universalCoverage =
      /\b(?:scan|scans|scanned|read|reads|access|accesses|inspect|inspects|analyze|analyzes)\b.*\b(?:all|every)\b.*\b(?:AI|session|history|source)\b|\b(?:all|every)\b.*\b(?:AI|session|history|source)\b.*\b(?:scan|scans|scanned|read|reads|access|accesses|inspect|inspects|analyze|analyzes)\b/i;
    const boundedCoverage =
      /\b(?:detected|permitted|accessible|can access|coverage gap|blocked|unsupported|partial)\b/i;
    const negatedCoverage =
      /\b(?:do|does|can|cannot|will|must|should)\s+not[\s\S]{0,30}\b(?:scan|read|access|inspect|analyze)\b|\bnever[\s\S]{0,20}\b(?:scans?|reads?|accesses?|inspects?|analyzes?)\b/i;
    if (
      universalCoverage.test(sentence) &&
      !boundedCoverage.test(sentence) &&
      !negatedCoverage.test(sentence)
    ) {
      violations.push("unbounded universal history coverage claim");
    }
  }

  return violations;
}

function releaseClaimViolations(text) {
  const violations = [];
  const positiveClaims = [
    /\b(?:0\.1\.0-)?rc\.3\s+(?:is|is now|remains|has been)\s+(?:public|live|released|published|available)\b/i,
    /\b(?:public|live|released|published|available)\s+(?:version\s+)?(?:0\.1\.0-)?rc\.3\b/i,
    /\b(?:release|installer|listing)\s+(?:0\.1\.0-)?rc\.3\s+(?:is\s+)?(?:live|public|available|published)\b/i,
    /\bcurrent public release\s+(?:is|runs|serves)\s+(?:version\s+)?(?:0\.1\.0-)?rc\.3\b/i,
    /\binstaller\s+(?:now\s+)?(?:serves|installs|delivers|returns)\s+(?:version\s+)?(?:0\.1\.0-)?rc\.3\b/i,
    /\b(?:0\.1\.0-)?rc\.3\s+(?:now\s+)?(?:ships|launches|releases)\s+publicly\b/i,
  ];

  for (const pattern of positiveClaims) {
    if (pattern.test(text)) violations.push("rc.3 described as public or released");
  }

  return violations;
}

function releaseBoundaryViolations(text, kind) {
  const violations = [];
  const normalized = normalize(text);
  const candidate =
    /\b(?:0\.1\.0-)?rc\.3\b[\s\S]{0,80}\bsource candidate\b/i;
  const publicationReceipt =
    /\bdefault-branch installer\b[\s\S]{0,140}\bpublic `?main`?\b[\s\S]{0,180}\breceipt\b[\s\S]{0,80}\bafter publication\b/i;

  if (!candidate.test(normalized)) {
    violations.push("missing rc.3 source-candidate boundary");
  }
  if (!publicationReceipt.test(normalized)) {
    violations.push("missing post-publication remote-install receipt boundary");
  }

  const installCommand = "npx skills add bilbop1/moneyprinter-md";
  const installIndex = text.indexOf(installCommand);
  if (installIndex < 0) {
    violations.push("missing public install command");
  } else {
    const preceding = normalize(text.slice(Math.max(0, installIndex - 700), installIndex));
    if (!/\b(?:0\.1\.0-)?rc\.3\b[\s\S]{0,80}\bsource candidate\b/i.test(preceding)) {
      violations.push("install command is not locally labelled rc.3 source candidate");
    }
    if (!/\b(?:default branch|release handoff)\b/i.test(preceding)) {
      violations.push("install command lacks transitional default-branch context");
    }
  }

  if (kind === "README") {
    const headlineIndex = normalized.indexOf(approvedHeadline);
    const boundaryIndex = normalized.search(/\brelease boundary\b/i);
    if (headlineIndex < 0 || boundaryIndex < headlineIndex) {
      violations.push("release boundary must follow the approved headline");
    }
  }

  return violations;
}

function workflowViolations(text) {
  const normalized = normalize(text);
  const firstLevelTwoHeading = text.search(/^## /m);
  const workflowText =
    firstLevelTwoHeading < 0 ? normalized : normalize(text.slice(0, firstLevelTwoHeading));
  const violations = [];
  const paragraphs = text.split(/\n\s*\n/);
  const firstProse = paragraphs.find(
    (paragraph) =>
      paragraph.trim() &&
      !paragraph.startsWith("#") &&
      !paragraph.startsWith("!["),
  );

  if (normalize(firstProse ?? "") !== approvedHeadline) {
    violations.push("approved headline is not the first prose paragraph");
  }

  violations.push(
    ...orderedViolations(
      workflowText,
      [
        { name: "approved headline", pattern: new RegExp(approvedHeadline.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) },
        { name: "one confirmation", pattern: /\bone confirmation\b/i },
        { name: "cash-first priority", pattern: /\bcash-first\b/i },
        { name: "private research", pattern: /\bprivate research\b/i },
        { name: "offer work", pattern: /\boffer\b/i },
        { name: "payable-test work", pattern: /\bpayable[- ]test\b/i },
        { name: "acquisition preparation", pattern: /\bacquisition preparation\b/i },
        { name: "delivery preparation", pattern: /\bdelivery preparation\b/i },
        { name: "exact external action", pattern: /\bexact external action\b/i },
        { name: "Action receipt", pattern: /\bAction receipt\b/i },
        { name: "rerank", pattern: /\brerank/i },
      ],
      "README workflow",
    ),
  );

  return [...violations, ...contradictionViolations(text)];
}

function securityViolations(text) {
  const violations = [];
  const required = [
    [/history-scan consent/i, "history-scan consent"],
    [/prompt\s+injection/i, "prompt injection"],
    [/untrusted evidence/i, "untrusted history evidence"],
    [/credential (?:stores|paths)/i, "credential paths"],
    [/private keys/i, "private keys"],
    [/(?:authentication|access) tokens/i, "authentication tokens"],
    [/payment credentials/i, "payment credentials"],
    [/\.env/i, ".env files"],
    [/coverage receipt/i, "coverage receipt"],
    [
      /(?:do not|never)[\s\S]{0,80}(?:publish|reproduce)[\s\S]{0,80}raw histor|raw histor[\s\S]{0,80}(?:must not|cannot|do not|never)[\s\S]{0,80}(?:publish|reproduce)/i,
      "raw-history nonpublication",
    ],
    [
      /user controls[\s\S]{0,80}(?:permitted )?(?:source|history) scope/i,
      "user-controlled permitted source scope",
    ],
    [
      /no subject category is excluded solely[\s\S]{0,160}\blegal\b[\s\S]{0,80}\bmedical\b[\s\S]{0,80}\bfinancial\b[\s\S]{0,80}\bregulated\b[\s\S]{0,80}\bconfidential\b[\s\S]{0,80}\bsensitive\b/i,
      "no sole subject-category exclusion",
    ],
    [/one-off external action/i, "one-off external action"],
    [/autonomous or bulk action/i, "autonomous or bulk action"],
  ];

  for (const [pattern, label] of required) {
    if (!pattern.test(text)) violations.push(`missing ${label}`);
  }

  const contradictions = [
    [/\b(?:may|can|should)\s+open[\s\S]{0,40}\.env\b/i, "allows .env access"],
    [
      /\bhistory[\s\S]{0,80}\b(?:may|can)\b[\s\S]{0,80}\b(?:grant permission|authorize|trigger a tool)\b/i,
      "allows history to grant authority",
    ],
    [
      /\braw histor(?:y|ies)[\s\S]{0,80}\b(?:may|can|should)\b[\s\S]{0,50}\b(?:publish|reproduce|share)\b/i,
      "allows raw-history publication",
    ],
  ];

  for (const [pattern, label] of contradictions) {
    if (pattern.test(text)) violations.push(label);
  }

  for (const sentence of normalize(text).split(/(?<=[.!?])\s+/)) {
    const category =
      "(?:legal|medical|financial|regulated|confidential|sensitive)";
    const categoryFirst = new RegExp(
      `\\b${category}\\b[\\s\\S]{0,40}\\b(?:sources?|histories|sessions?|content|records?)\\b[\\s\\S]{0,50}\\bexcluded\\b[\\s\\S]{0,40}\\bsolely\\b`,
      "i",
    );
    const exclusionFirst = new RegExp(
      `\\bexclud(?:e|es|ed|ing)\\b(?:[\\s\\S]{0,70}\\bsolely\\b[\\s\\S]{0,80}\\b${category}\\b|[\\s\\S]{0,70}\\b${category}\\b[\\s\\S]{0,80}\\bsolely\\b)`,
      "i",
    );
    const rejectsExclusion =
      /\bno subject category is excluded solely\b|\b(?:do|does|can|cannot|must|should|will)\s+not[\s\S]{0,30}\bexclud|\bnever[\s\S]{0,20}\bexclud/i;

    if (
      (categoryFirst.test(sentence) || exclusionFirst.test(sentence)) &&
      !rejectsExclusion.test(sentence)
    ) {
      violations.push("allows sole subject-category exclusion");
    }
  }

  return [...violations, ...contradictionViolations(text)];
}

const simulationSections = [
  "Simulated coverage receipt",
  "What appears true",
  "One confirmation",
  "Cash-first ranking",
  "Private work continued",
  "Exact-action approval",
  "Simulated action receipt",
  "Hypothetical result",
  "Correct evidence label",
  "Rerank",
];

function simulationViolations(text) {
  const violations = [];
  const normalized = normalize(text);

  if (!/\*\*Simulation\b/i.test(text)) violations.push("missing Simulation label");
  if (!/\bnot a real-world result\b/i.test(text)) {
    violations.push("missing explicit real-outcome rejection");
  }

  violations.push(
    ...orderedViolations(
      text,
      simulationSections.map((heading) => ({
        name: heading,
        pattern: new RegExp(`^## ${heading}\\s*$`, "m"),
      })),
      "simulation",
    ),
  );

  for (const heading of simulationSections) {
    const body = sectionBody(text, heading);
    if (body === null) continue;
    if (!body || /^(?:TBD|TODO|placeholder|none)\.?$/i.test(body)) {
      violations.push(`${heading} section is empty`);
    }
  }

  const coverage = sectionBody(text, "Simulated coverage receipt") ?? "";
  if (!/\b(?:Scanned|Empty|Blocked|Unsupported)\b/.test(coverage)) {
    violations.push("coverage receipt has no source status");
  }

  const privateWork = sectionBody(text, "Private work continued") ?? "";
  violations.push(
    ...orderedViolations(
      normalize(privateWork),
      [
        {
          name: "research",
          pattern:
            /\b(?:research|evidence note|demand-risk note|source checklist|policy-check worksheet|process-evidence note)\b/i,
        },
        { name: "offer", pattern: /\boffer\b/i },
        { name: "payable test", pattern: /\bpayable[- ]test\b/i },
        {
          name: "acquisition",
          pattern:
            /\b(?:acquisition|owner email|caption and video brief)\b/i,
        },
        { name: "delivery preparation", pattern: /\bdelivery\b/i },
      ],
      "private work",
    ),
  );

  const approval = sectionBody(text, "Exact-action approval") ?? "";
  if (!/\bapproves?\b[\s\S]{0,100}\b(?:one|that)\b[\s\S]{0,80}\bonly\b/i.test(approval)) {
    violations.push("exact-action approval is not limited to one named action");
  }

  const receipt = sectionBody(text, "Simulated action receipt") ?? "";
  if (!/\b(?:hypothetical|simulation|simulated)\b/i.test(receipt)) {
    violations.push("action receipt is not explicitly simulated");
  }

  if (!/Hypothetical cash collected:\s*\**\$0\**/i.test(text)) {
    violations.push("missing hypothetical cash collected $0");
  }
  if (!/Real cash collected:\s*\**\$0\**/i.test(text)) {
    violations.push("missing real cash collected $0");
  }

  const realOutcomeClaims = [
    /\b(?:real|actual) cash collected:\s*\**\$[1-9][0-9,]*/i,
    /\bthis is (?:a )?(?:real|actual) (?:customer|revenue|performance|business) result\b/i,
    /\b(?:real|actual) customer (?:paid|bought|converted)\b/i,
    /\b(?:earned|made|generated|produced|collected)\b[^.!?]{0,50}\$[1-9][0-9,]*[^.!?]{0,50}\b(?:real|actual)\s+(?:cash|income|profit|revenue)\b/i,
    /\b(?:real|actual)\s+(?:cash|income|profit|revenue)\b[^.!?]{0,50}\$[1-9][0-9,]*/i,
  ];
  for (const pattern of realOutcomeClaims) {
    if (pattern.test(normalized)) violations.push("claims a real outcome");
  }

  return violations;
}

function shortListingViolations(text) {
  const body = sectionBody(text, "Short description");
  if (body === null) return ["missing Short description section"];
  if (!/^>\s*(?:With permission|Permissioned)\b/i.test(body)) {
    return ["standalone short description does not lead with permission"];
  }
  return [];
}

function punctuationViolations(text) {
  const violations = [];
  if (/[—–“”‘’]/.test(text)) violations.push("humanizer-blocked punctuation");
  if (/\p{Extended_Pictographic}/u.test(text)) violations.push("emoji");
  return violations;
}

function requireNoViolations(violations) {
  if (violations.length > 0) throw new Error([...new Set(violations)].join("; "));
}

const readme = await read("README.md");
check("README has ordered scan-first workflow", () =>
  requireNoViolations(workflowViolations(readme)),
);
check("README separates the rc.3 candidate from its public receipt", () =>
  requireNoViolations(releaseBoundaryViolations(readme, "README")),
);
check("README rejects a companion app", () => {
  requireMatch(readme, /\bnot a companion app\b/i);
});

const install = await read("docs/install.md");
check("install separates the rc.3 candidate from its public receipt", () =>
  requireNoViolations(releaseBoundaryViolations(install, "install")),
);

const factSheet = await read("launch/fact-sheet.md");
check("fact sheet carries the approved headline", () => {
  requireCondition(
    normalize(factSheet).includes(approvedHeadline),
    "approved headline missing",
  );
  requireMatch(factSheet, /\bnot a companion app\b/i);
});

const security = await read("SECURITY.md");
check("Security has the complete scan boundary", () =>
  requireNoViolations(securityViolations(security)),
);

const compatibility = await read("docs/compatibility.md");
check("compatibility separates install, activation, and history access", () => {
  requireMatch(compatibility, /installer support/i);
  requireMatch(compatibility, /other applications'\s+session stores/i);
  requireMatch(compatibility, /detected, permitted, and\s+accessible/i);
  requireMatch(compatibility, /does not imply cross-application history access/i);
  requireNoViolations(contradictionViolations(compatibility));
});

const clawHub = await read("launch/submissions/clawhub.md");
check("ClawHub v1.0.0 is tied to the rc.1 source commit", () => {
  requireMatch(clawHub, /v1\.0\.0[\s\S]{0,240}\brc\.1(?:-source)?\b/i);
  requireMatch(clawHub, /61549ff7440331588fd43b6c0707e8d783c51144/);
  rejectMatch(clawHub, /v1\.0\.0[\s\S]{0,240}\bhistorical rc\.2\b/i);
});

for (const path of [
  "launch/submissions/hermes.md",
  "launch/submissions/openai-plugins.md",
  "launch/submissions/openspace.md",
  "launch/submissions/product-hunt.md",
  "launch/submissions/skillsdir-dev.md",
]) {
  const text = await read(path);
  check(`${path} short listing leads with permission`, () =>
    requireNoViolations(shortListingViolations(text)),
  );
}

const awesomeSkills = await read("launch/submissions/awesome-skills.md");
check("Awesome Skills describes rewritten walkthroughs, not rc.3 evals", () => {
  requireMatch(awesomeSkills, /five rewritten hypothetical walkthrough/i);
  requireMatch(awesomeSkills, /not retained rc\.3 evaluations/i);
});

for (const path of examples) {
  const text = await read(path);
  check(`${path} is a complete honest simulation`, () =>
    requireNoViolations(simulationViolations(text)),
  );
}

for (const path of currentCopyFiles) {
  const text = await read(path);
  check(`${path} has no stale interview-first copy`, () =>
    requireNoViolations(staleInterviewViolations(text)),
  );
  check(`${path} has no contradictory public claims`, () =>
    requireNoViolations([
      ...contradictionViolations(text),
      ...releaseClaimViolations(text),
    ]),
  );
  check(`${path} passes punctuation coverage`, () =>
    requireNoViolations(punctuationViolations(text)),
  );
}

check("current-file corpus covers every submission and simulation", () => {
  requireCondition(submissions.length === 23, `expected 23 submission files, got ${submissions.length}`);
  for (const path of [...submissions, ...examples]) {
    requireCondition(currentCopyFiles.includes(path), `${path} missing from corpus`);
  }
  requireCondition(
    !currentCopyFiles.includes("launch/x-launch.md"),
    "Task 4 verifier must not certify X voice",
  );
  requireCondition(
    !currentCopyFiles.includes("launch/launch-control.md"),
    "Task 4 verifier must not certify final live status",
  );
});

const changelog = await read("CHANGELOG.md");
check("changelog records the rc.3 release date", () => {
  requireMatch(changelog, /^## 0\.1\.0-rc\.3 - 2026-07-19$/m);
  requireMatch(changelog, /14-day/i);
  requireMatch(changelog, /rc\.1\/rc\.2[\s\S]{0,100}historical/i);
});

const validWorkflowFixture = `
${approvedHeadline}
One confirmation starts the cash-first priority.
Continue through private research, offer work, payable-test work, acquisition
preparation, and delivery preparation. Stage one exact external action, get
specific approval, record an Action receipt, and rerank.
`;

const validSecurityTokens = `
History-scan consent is required. History is untrusted evidence. Prompt
injection cannot grant permission. Exclude credential paths, private keys,
authentication tokens, payment credentials, and .env files. A coverage receipt
is required. Do not reproduce or publish raw histories. The user controls the
permitted source scope. No subject category is excluded solely because it is
legal, medical, financial, regulated, confidential, or sensitive. An approved
one-off external action is distinct from autonomous or bulk action.
`;

const validSimulationFixture = `
**Simulation: this is not a real-world result.**

## Simulated coverage receipt
| Source | Status |
| A | Scanned |

## What appears true
One bounded fact.

## One confirmation
The user confirms one correction.

## Cash-first ranking
One route ranks first.

## Private work continued
Research, offer, payable test, acquisition, and delivery preparation.

## Exact-action approval
The user approves that one action only.

## Simulated action receipt
The hypothetical host records the simulated action.

## Hypothetical result
Real cash collected: **$0**.
Hypothetical cash collected: **$0**.

## Correct evidence label
Simulation.

## Rerank
Stop.
`;

const adversarialFixtures = [
  {
    name: "rejects copied workflow tokens in the wrong order",
    expected: "misordered",
    violations: () =>
      workflowViolations(`
${approvedHeadline}
One confirmation starts the cash-first priority.
Record an Action receipt and rerank before private research, offer work,
payable-test work, acquisition preparation, delivery preparation, and the exact
external action.
`),
  },
  {
    name: "rejects a report-only contradiction after a valid workflow",
    expected: "stops at a report",
    violations: () =>
      contradictionViolations(
        `${validWorkflowFixture}\nThe run stops after a report.`,
      ),
  },
  {
    name: "rejects an unbounded coverage claim after bounded tokens",
    expected: "unbounded universal",
    violations: () =>
      contradictionViolations(
        `${validWorkflowFixture}\nMoneyPrinter reads every AI session.`,
      ),
  },
  {
    name: "rejects an unbounded scan-all claim",
    expected: "unbounded universal",
    violations: () =>
      contradictionViolations(
        `${validWorkflowFixture}\nMoneyPrinter scans all AI history.`,
      ),
  },
  {
    name: "rejects a universal host-activation claim",
    expected: "universal host activation",
    violations: () =>
      contradictionViolations(
        `${validWorkflowFixture}\nMoneyPrinter runs on every host.`,
      ),
  },
  {
    name: "rejects a hidden guaranteed-income claim",
    expected: "guaranteed income",
    violations: () =>
      contradictionViolations(
        `${validWorkflowFixture}\nMoneyPrinter ensures profit.`,
      ),
  },
  {
    name: "rejects a companion-app contradiction",
    expected: "companion app",
    violations: () =>
      contradictionViolations(
        `${validWorkflowFixture}\nMoneyPrinter is a companion app.`,
      ),
  },
  {
    name: "rejects a false public rc.3 claim",
    expected: "public or released",
    violations: () =>
      releaseClaimViolations("The current public release is rc.3."),
  },
  {
    name: "rejects an installer-serves-rc.3 claim",
    expected: "public or released",
    violations: () =>
      releaseClaimViolations("The installer now serves rc.3."),
  },
  {
    name: "rejects an rc.3-ships-publicly claim",
    expected: "public or released",
    violations: () =>
      releaseClaimViolations("MoneyPrinter rc.3 ships publicly today."),
  },
  {
    name: "rejects interview-first copy outside a fallback or release boundary",
    expected: "outside release or fallback",
    violations: () =>
      staleInterviewViolations("The workflow is interview-first."),
  },
  {
    name: "rejects a security contract that opens .env files",
    expected: "allows .env",
    violations: () =>
      securityViolations(`${validSecurityTokens}\nThe scan may open .env files.`),
  },
  {
    name: "rejects sole subject-category exclusion after valid security tokens",
    expected: "allows sole subject-category exclusion",
    violations: () =>
      securityViolations(
        `${validSecurityTokens}\nLegal sources are excluded solely due to subject matter.`,
      ),
  },
  {
    name: "rejects an empty simulation section",
    expected: "section is empty",
    violations: () =>
      simulationViolations(
        validSimulationFixture.replace(
          "## Rerank\nStop.",
          "## Rerank\nTBD",
        ),
      ),
  },
  {
    name: "rejects claimed real cash in a simulation",
    expected: "claims a real outcome",
    violations: () =>
      simulationViolations(
        validSimulationFixture.replace(
          "Real cash collected: **$0**.",
          "Actual cash collected: **$500**.",
        ),
      ),
  },
  {
    name: "rejects claimed actual revenue beside both zero-cash labels",
    expected: "claims a real outcome",
    violations: () =>
      simulationViolations(
        `${validSimulationFixture}\nThe walkthrough earned $500 in actual revenue.`,
      ),
  },
];

check("accepts the complete bounded security fixture", () =>
  requireNoViolations(securityViolations(validSecurityTokens)),
);
check("accepts the complete zero-cash simulation fixture", () =>
  requireNoViolations(simulationViolations(validSimulationFixture)),
);

for (const fixture of adversarialFixtures) {
  check(fixture.name, () => {
    const violations = fixture.violations();
    requireCondition(
      violations.some((violation) => violation.includes(fixture.expected)),
      `fixture escaped; got ${violations.join("; ") || "no violations"}`,
    );
  });
}

check("allows bounded fallback and current rc.2 interview language", () => {
  requireNoViolations(
    staleInterviewViolations(
      "No useful accessible history was found, so use a short fallback interview.",
    ),
  );
  requireNoViolations(
    staleInterviewViolations(
      "The current public rc.2 release uses interview-first intake.",
    ),
  );
});

if (failures.length > 0) {
  console.error(`public copy contract: ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `public copy contract: ${currentCopyFiles.length} current files, ${examples.length} simulations, and ${adversarialFixtures.length} adversarial fixtures verified`,
  );
}
