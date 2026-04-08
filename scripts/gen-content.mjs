/**
 * Reads .txt files from /text, strips Title/Description meta lines,
 * and writes lib/content/*.ts exports.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const MAP = [
  ["العاب-كازينو-اونلاين.txt",                "casino-games"],
  ["العاب-كازينو-مجانية-بدون-تسجيل.txt",      "free-games"],
  ["بلاك-جاك-اونلاين-كازينو.txt",             "blackjack"],
  ["تطبيق-كازينو-اونلاين.txt",                "apps"],
  ["روليت-اونلاين-كازينو.txt",                "roulette"],
  ["سحب-ارباح-كازينو-سريع.txt",               "fast-withdrawal"],
  ["سلوتس-كازينو-اونلاين.txt",                "slots"],
  ["سلوتس-موبايل-كازينو.txt",                 "slots-mobile"],
  ["طرق-دفع-كازينو-اونلاين.txt",              "payment"],
  ["كازينو-اونلاين-مصر.txt",                  "home"],
  ["كازينو-بمال-حقيقي.txt",                   "real-money"],
  ["كازينو-جديد-اونلاين.txt",                 "new-casino"],
  ["كازينو-مباشر-اونلاين-مصر-2026.txt",       "live-casino"],
  ["بونص-ترحيب-كازينو-مصر.txt",               "bonuses"],
  ["كازينو-بدون-توثيق-مصر-2026.txt",          "no-verification"],
];

const contentDir = path.join(root, "lib", "content");
fs.mkdirSync(contentDir, { recursive: true });

for (const [txtFile, exportName] of MAP) {
  const src = path.join(root, "text", txtFile);
  if (!fs.existsSync(src)) {
    console.warn("MISSING:", txtFile);
    continue;
  }

  let raw = fs.readFileSync(src, "utf8");

  // Strip leading Title/Description meta lines (lines starting with **Title:** or **Description:**)
  raw = raw.replace(/^\s*\*\*Title:\*\*[^\n]*\n/m, "");
  raw = raw.replace(/^\s*\*\*Description:\*\*[^\n]*\n/m, "");
  raw = raw.trimStart();

  // Escape backticks and ${ for template literal embedding
  const escaped = raw.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

  // Convert hyphenated name to camelCase for valid JS identifier
  const safeName = exportName.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const tsContent = `// AUTO-GENERATED — do not edit manually. Source: text/${txtFile}\nexport const ${safeName}Content = \`${escaped}\`;\n`;

  const outFile = path.join(contentDir, `${exportName}.ts`);
  fs.writeFileSync(outFile, tsContent, "utf8");
  console.log("✓", exportName, "→", outFile.replace(root, ""));
}

console.log("\nDone. Generated", MAP.length, "content files.");
