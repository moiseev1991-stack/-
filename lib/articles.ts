import fs from "node:fs";
import path from "node:path";

export type ArticleKey =
  | "1xbet"
  | "888starz"
  | "apps"
  | "aviator"
  | "bet365"
  | "betting-apps"
  | "betting"
  | "blackjack"
  | "bonuses"
  | "casino-egypt"
  | "fastest-withdrawal"
  | "gambling-games"
  | "games"
  | "home"
  | "jackpot-city"
  | "live-casino"
  | "melbet"
  | "new"
  | "no-verification"
  | "payment"
  | "real-money"
  | "roulette"
  | "ruby-fortune"
  | "slots-mobile"
  | "slots"
  | "spin-casino"
  | "vodafone-cash";

export interface Article {
  /** Title from `**Title:** ...` line. */
  title: string;
  /** Description from `**Description:** ...` line. */
  description: string;
  /** H1 (first `# ...` line). */
  h1: string;
  /** Intro paragraph (lines between h1 and first `##`). */
  intro: string;
  /** Markdown body starting from the first `##` heading. */
  body: string;
  /** Full raw markdown. */
  raw: string;
}

const dir = path.join(process.cwd(), "lib", "data", "articles");

export function loadArticle(key: ArticleKey): Article {
  const file = path.join(dir, `${key}.md`);
  const raw = fs.readFileSync(file, "utf8");

  const lines = raw.split(/\r?\n/);
  let title = "";
  let description = "";
  let h1 = "";
  const introLines: string[] = [];
  const bodyLines: string[] = [];

  let mode: "frontmatter" | "intro" | "body" = "frontmatter";

  for (const line of lines) {
    if (mode === "frontmatter") {
      const t = line.match(/^\*\*Title:\*\*\s*(.+?)\s*$/);
      const d = line.match(/^\*\*Description:\*\*\s*(.+?)\s*$/);
      const h = line.match(/^#\s+(.+?)\s*$/);
      if (t) { title = t[1]; continue; }
      if (d) { description = d[1]; continue; }
      if (h) { h1 = h[1]; mode = "intro"; continue; }
      // ignore other lines before h1
      continue;
    }
    if (mode === "intro") {
      if (line.startsWith("## ")) {
        mode = "body";
        bodyLines.push(line);
        continue;
      }
      introLines.push(line);
      continue;
    }
    bodyLines.push(line);
  }

  return {
    title,
    description,
    h1,
    intro: introLines.join("\n").trim(),
    body: bodyLines.join("\n").trim(),
    raw,
  };
}
