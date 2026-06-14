import type { ReactNode } from "react";

interface Props {
  /** Markdown body string (post-frontmatter, post-h1, post-intro). */
  markdown: string;
  /** Heading level for top-level `##` headings (defaults to 2). */
  topLevel?: 2 | 3;
}

/**
 * Lightweight Markdown renderer for the editorial article bodies in
 * `lib/data/articles/`. Supports the subset actually used by the texts:
 * - `## ` and `### ` headings
 * - paragraphs with inline `**bold**` and plain text
 * - unordered `- ` and ordered `1. ` lists
 * - GitHub-style tables (`| col | col |` with header separator row)
 * - blank lines as paragraph breaks
 *
 * Output is RTL-friendly Arabic content styled to match the rest of the site.
 */
export default function ArticleContent({ markdown, topLevel = 2 }: Props) {
  const blocks = parseBlocks(markdown);
  return (
    <div className="article-prose space-y-5 leading-[1.95] text-[#333]">
      {blocks.map((b, i) => renderBlock(b, i, topLevel))}
    </div>
  );
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; header: string[]; rows: string[][] };

function parseBlocks(md: string): Block[] {
  const lines = md.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;
  const isTableSep = (s: string) =>
    /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(s);

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    const h2 = line.match(/^##\s+(.+?)\s*$/);
    if (h2) { blocks.push({ type: "h2", text: h2[1] }); i++; continue; }
    const h3 = line.match(/^###\s+(.+?)\s*$/);
    if (h3) { blocks.push({ type: "h3", text: h3[1] }); i++; continue; }

    if (/^\s*-\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*-\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = splitTableRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", header, rows });
      continue;
    }

    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^##?#?\s/.test(lines[i]) &&
      !/^\s*-\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !(lines[i].includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1]))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: paraLines.join(" ") });
  }
  return blocks;
}

function splitTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map(c => c.trim());
}

function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
    parts.push(<strong key={`b-${key++}`} className="font-bold text-[#1A1A1A]">{m[1]}</strong>);
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length === 0 ? text : parts;
}

function renderBlock(b: Block, key: number, topLevel: 2 | 3): ReactNode {
  switch (b.type) {
    case "h2": {
      if (topLevel === 3) {
        return (
          <h3 key={key} className="mt-8 text-lg font-bold text-[#1A1A1A]">
            {renderInline(b.text)}
          </h3>
        );
      }
      return (
        <h2 key={key} className="mt-10 border-b border-[#E8E4DA] pb-2 text-2xl font-bold text-[#1A1A1A]">
          {renderInline(b.text)}
        </h2>
      );
    }
    case "h3":
      return (
        <h3 key={key} className="mt-6 text-lg font-bold text-[#1A1A1A]">
          {renderInline(b.text)}
        </h3>
      );
    case "p":
      return (
        <p key={key} className="text-[15px] leading-[1.95] text-[#333]">
          {renderInline(b.text)}
        </p>
      );
    case "ul":
      return (
        <ul key={key} className="list-disc space-y-2 pe-6 text-[15px] leading-[1.85] marker:text-[#C8963E]">
          {b.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="list-decimal space-y-2 pe-6 text-[15px] leading-[1.85] marker:font-bold marker:text-[#C8963E]">
          {b.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={key} className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#FAF8F4]">
                {b.header.map((c, i) => (
                  <th
                    key={i}
                    className="border border-[#E8E4DA] px-3 py-2 text-start font-bold text-[#1A1A1A]"
                  >
                    {renderInline(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FFFCF7]"}>
                  {r.map((c, j) => (
                    <td key={j} className="border border-[#E8E4DA] px-3 py-2 text-[#333]">
                      {renderInline(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

