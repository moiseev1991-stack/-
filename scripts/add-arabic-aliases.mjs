/**
 * After `npm run build:static` creates ASCII-named directories in out/,
 * this script copies each to its canonical Arabic alias so the Apache server
 * can serve both  /no-verification/  and  /بدون-توثيق/  from the same artifact.
 */
import { cpSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "out");

/** [asciiSrc, arabicDst] — src is relative to out/ */
const COPIES = [
  ["no-verification",                          "بدون-توثيق"],
  ["blackjack",                                "بلاك-جاك"],
  ["bonuses",                                  "بونص-ترحيب"],
  ["free-games",                               "العاب-مجانية"],
  ["games",                                    "العاب-كازينو"],
  ["live-casino",                              "كازينو-مباشر"],
  ["new",                                      "كازينو-جديد"],
  ["payment",                                  "طرق-الدفع"],
  ["real-money",                               "كازينو-حقيقي"],
  ["roulette",                                 "روليت"],
  ["slots",                                    "سلوتس"],
  ["apps",                                     "تطبيقات"],
  // Nested routes copied to flat Arabic names (matching old canonical URLs)
  ["payment/fastest-withdrawals",              "اسرع-سحب"],
  ["slots/mobile",                             "سلوتس-موبايل"],
  // Legal / info pages
  ["info/about-us",                            "من-نحن"],
  ["info/privacy-policy",                      "سياسة-الخصوصية"],
  ["info/cookie-policy",                       "سياسة-ملفات-تعريف-الارتباط"],
  ["info/terms-of-use",                        "شروط-الاستخدام"],
  ["info/disclaimer-and-responsible-gaming",   "اخلاء-المسوولية-والمقامرة-المسوولة"],
  ["info/contact-us",                          "اتصل-بنا"],
  ["info/how-we-rate-casinos",                 "كيف-نقيم-الكازينوهات"],
];

let errors = 0;
for (const [src, dst] of COPIES) {
  const srcPath = join(outDir, src);
  const dstPath = join(outDir, dst);
  if (!existsSync(srcPath)) {
    console.error(`✗ Source not found: out/${src}`);
    errors++;
    continue;
  }
  cpSync(srcPath, dstPath, { recursive: true });
  console.log(`✓  out/${src}  →  out/${dst}`);
}

if (errors > 0) {
  console.error(`\n${errors} error(s) — aborting.`);
  process.exit(1);
}
console.log("\n✓ All Arabic aliases created.");
