import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) results = results.concat(walk(full));
    else if (f.endsWith(".tsx") || f.endsWith(".ts")) results.push(full);
  }
  return results;
}

const files = [
  ...walk(path.join(root, "app")),
  ...walk(path.join(root, "components")),
];

let count = 0;
for (const f of files) {
  let code = fs.readFileSync(f, "utf8");
  if (!code.includes("ResponsibleGamblingSection")) continue;

  // Remove import line
  code = code.replace(/^import ResponsibleGamblingSection from [^\n]+\n/m, "");
  // Remove JSX tag (handles optional whitespace/newlines)
  code = code.replace(/\n?\s*<ResponsibleGamblingSection\s*\/>/g, "");

  fs.writeFileSync(f, code, "utf8");
  console.log("cleaned:", f.replace(root, ""));
  count++;
}
console.log("Done, cleaned", count, "files");
