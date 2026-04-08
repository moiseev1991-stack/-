import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readPoliseFile(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), "polise", filename);
  return readFile(filePath, "utf-8");
}

/** Remove SEO lines **Title:** / **Description:** (not shown in body). */
export function stripPoliseFrontMatter(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  for (const raw of lines) {
    const t = raw.trim();
    if (/^\*\*Title:\*\*/i.test(t)) continue;
    if (/^\*\*Description:\*\*/i.test(t)) continue;
    out.push(raw);
  }
  return out.join("\n").replace(/^\s+/, "");
}

/** Avoid duplicate title: first body line was often `# ...` mirroring nav. */
export function stripLeadingMarkdownH1(md: string): string {
  return md.replace(/^#\s+[^\n]+\n+/, "");
}

export function extractPoliseMetaTitle(md: string): string | undefined {
  const m = md.match(/^\s*\*\*Title:\*\*\s*(.+)$/im);
  return m?.[1]?.trim();
}

export function extractPoliseMetaDescription(md: string): string | undefined {
  const m = md.match(/^\s*\*\*Description:\*\*\s*(.+)$/im);
  return m?.[1]?.trim();
}

export function preparePoliseMarkdown(raw: string): string {
  let s = stripPoliseFrontMatter(raw);
  s = stripLeadingMarkdownH1(s);
  return s.trim();
}
