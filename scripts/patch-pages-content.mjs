/**
 * Patches each target page to import and render ArticleBody with the matching content.
 * Inserts <ArticleBody> before <ResponsibleGamblingSection /> or before </> closing.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/**
 * page file path (relative to root) → content module export name
 * Pages that are pure redirects are excluded.
 */
const TARGET_PAGES = [
  // Arabic pages with real content
  ["app/\u0628\u0644\u0627\u0643-\u062c\u0627\u0643/page.tsx",                   "blackjack",      false],
  ["app/\u0627\u0644\u0639\u0627\u0628-\u0645\u062c\u0627\u0646\u064a\u0629/page.tsx",           "free-games",     true],  // client

  // English content pages
  ["app/games/page.tsx",                                "casino-games",   false],
  ["app/roulette/page.tsx",                             "roulette",       false],
  ["app/slots/page.tsx",                                "slots",          false],
  ["app/slots/mobile/page.tsx",                         "slots-mobile",   false],
  ["app/apps/page.tsx",                                 "apps",           false],
  ["app/payment/page.tsx",                              "payment",        false],
  ["app/payment/fastest-withdrawals/page.tsx",          "fast-withdrawal",false],
  ["app/new/page.tsx",                                  "new-casino",     false],
  ["app/real-money/page.tsx",                           "real-money",     false],
  ["app/page.tsx",                                      "home",           false],
];

let patched = 0;
let skipped = 0;

for (const [relPath, contentKey, isClientComp] of TARGET_PAGES) {
  const filePath = path.join(root, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn("SKIP (not found):", relPath);
    skipped++;
    continue;
  }

  let code = fs.readFileSync(filePath, "utf8");

  // Skip if already patched
  if (code.includes("ArticleBody")) {
    console.log("ALREADY PATCHED:", relPath);
    skipped++;
    continue;
  }

  // Skip pure redirect files
  if (code.includes("redirect(") && code.split("\n").length < 10) {
    console.warn("SKIP (redirect):", relPath);
    skipped++;
    continue;
  }

  const articleImport = `import ArticleBody from "@/components/common/ArticleBody";`;
  const contentImport = `import { ${contentKey.replace(/-/g, "_")}Content } from "@/lib/content/${contentKey}";`;
  const articleJsx    = `      <ArticleBody content={${contentKey.replace(/-/g, "_")}Content} />`;

  // Ensure underscore-named export (gen-content.mjs uses camelCase: hyphens → underscores)
  // Re-check: gen-content uses exportName directly (camelCase with hyphens kept).
  // Actually gen-content.mjs uses the exportName as-is but with hyphens in some names.
  // Let's compute the real export name: replace hyphens with camelCase.
  const exportName = contentKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + "Content";
  const contentImportFixed = `import { ${exportName} } from "@/lib/content/${contentKey}";`;
  const articleJsxFixed    = `      <ArticleBody content={${exportName}} />`;

  // 1. Add imports after the last existing import line
  const importInsertMatch = code.match(/^(import .+;\n)+/m);
  if (importInsertMatch) {
    const lastImportEnd = code.lastIndexOf("\nimport ");
    const insertAt = code.indexOf("\n", lastImportEnd + 1) + 1;
    code = code.slice(0, insertAt) + articleImport + "\n" + contentImportFixed + "\n" + code.slice(insertAt);
  } else {
    code = articleImport + "\n" + contentImportFixed + "\n\n" + code;
  }

  // 2. Insert <ArticleBody> before <ResponsibleGamblingSection /> if present
  if (code.includes("<ResponsibleGamblingSection")) {
    code = code.replace(
      /(\s+)<ResponsibleGamblingSection\s*\/>/,
      "\n" + articleJsxFixed + "\n$1<ResponsibleGamblingSection />"
    );
  } else if (code.includes("<FaqSection") && relPath.includes("page.tsx") && relPath === "app/page.tsx") {
    // Homepage: insert before FaqSection
    code = code.replace(
      /(\s+)<FaqSection /,
      "\n" + articleJsxFixed + "\n$1<FaqSection "
    );
  } else {
    // Client components or pages without ResponsibleGamblingSection:
    // insert before the final closing </>
    code = code.replace(/(\s+)<\/>\s*\);\s*\}$/, "\n" + articleJsxFixed + "\n$1</>\n  );\n}");
  }

  fs.writeFileSync(filePath, code, "utf8");
  console.log("PATCHED:", relPath, "→ content:", exportName);
  patched++;
}

console.log(`\nDone. Patched: ${patched}, Skipped: ${skipped}`);
