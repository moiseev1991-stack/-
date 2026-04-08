/**
 * Static HTML export (STATIC_EXPORT=1) cannot use `export const dynamic = "force-dynamic"` in root layout.
 * Temporarily removes that export, runs `next build`, restores layout.tsx.
 */
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const layoutPath = path.join(root, "app", "layout.tsx");

function stripDynamicBlock(source) {
  const next = source.replace(
    /\r?\n\r?\n\/\/ Avoid static prerender[^\r\n]*\r?\nexport const dynamic = "force-dynamic";\r?\n\r?\n/,
    "\n\n",
  );
  if (next === source) {
    console.error("run-static-export: could not find force-dynamic block in app/layout.tsx");
    process.exit(1);
  }
  return next;
}

const original = fs.readFileSync(layoutPath, "utf8");
let status = 1;
try {
  fs.writeFileSync(layoutPath, stripDynamicBlock(original), "utf8");
  const env = { ...process.env, STATIC_EXPORT: "1" };
  const result = spawnSync("npx", ["next", "build"], {
    cwd: root,
    env,
    stdio: "inherit",
    shell: true,
  });
  status = result.status ?? 1;
} finally {
  fs.writeFileSync(layoutPath, original, "utf8");
}
process.exit(status);
