/**
 * Regenerates lib/content/<kind>.ts from lib/data/articles/<key>.md.
 *
 * The TS exports drive `ArticleBodyLoader` — they hold the editorial body
 * markdown that gets rendered on home/games/slots/etc. We strip the
 * `**Title:**` / `**Description:**` frontmatter lines (those live in
 * page metadata) and keep the H1 + body intact.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const articlesDir = path.join(root, "lib", "data", "articles");
const contentDir = path.join(root, "lib", "content");

// article key → lib/content filename (without .ts) — must match
// ArticleBodyLoader's switch cases.
const MAP = [
  ["home", "home"],
  ["games", "casino-games"],
  ["slots", "slots"],
  ["slots-mobile", "slots-mobile"],
  ["roulette", "roulette"],
  ["blackjack", "blackjack"],
  ["live-casino", "live-casino"],
  ["real-money", "real-money"],
  ["bonuses", "bonuses"],
  ["no-verification", "no-verification"],
  ["fastest-withdrawal", "fast-withdrawal"],
  ["payment", "payment"],
  ["apps", "apps"],
  ["new", "new-casino"],
];

let written = 0;
for (const [articleKey, kind] of MAP) {
  const src = path.join(articlesDir, `${articleKey}.md`);
  if (!fs.existsSync(src)) {
    console.warn("MISSING article:", articleKey);
    continue;
  }
  let raw = fs.readFileSync(src, "utf8");
  raw = raw.replace(/^\s*\*\*Title:\*\*[^\n]*\n/m, "");
  raw = raw.replace(/^\s*\*\*Description:\*\*[^\n]*\n/m, "");
  raw = raw.trimStart();

  const escaped = raw.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  const safeName = kind.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const ts = `// AUTO-GENERATED — do not edit manually. Source: lib/data/articles/${articleKey}.md\nexport const ${safeName}Content = \`${escaped}\`;\n`;

  const out = path.join(contentDir, `${kind}.ts`);
  fs.writeFileSync(out, ts, "utf8");
  console.log("✓", articleKey, "→", path.relative(root, out));
  written++;
}

console.log(`\nDone. Wrote ${written} content files.`);
