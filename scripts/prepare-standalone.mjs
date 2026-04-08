/**
 * After `next build` with output: "standalone", Next does not copy `public/` or `.next/static/`.
 * Without them, CSS and assets 404 in production. This script mirrors the official `cp` steps.
 * @see node_modules/next/dist/docs/.../output.md
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const standalone = path.join(root, ".next", "standalone");

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(standalone))) {
    console.error(
      "prepare-standalone: missing .next/standalone — run `next build` first (output: standalone).",
    );
    process.exit(1);
  }

  const pubSrc = path.join(root, "public");
  const pubDest = path.join(standalone, "public");
  if (await exists(pubSrc)) {
    await fs.cp(pubSrc, pubDest, { recursive: true });
    console.log("prepare-standalone: copied public/ → .next/standalone/public/");
  }

  const staticSrc = path.join(root, ".next", "static");
  const staticDest = path.join(standalone, ".next", "static");
  if (await exists(staticSrc)) {
    await fs.mkdir(path.join(standalone, ".next"), { recursive: true });
    await fs.cp(staticSrc, staticDest, { recursive: true });
    console.log("prepare-standalone: copied .next/static → .next/standalone/.next/static/");
  } else {
    console.warn("prepare-standalone: no .next/static (unexpected after build).");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
