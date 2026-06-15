/**
 * Minimal Markdown-to-HTML converter for article body content.
 * Handles: headings, bold, italic, links, ordered + unordered lists,
 * GFM pipe tables, and pass-through HTML. Does NOT sanitize — content
 * must be trusted (internal only).
 */
export function mdToHtml(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let inUl = false;
  let inOl = false;
  let inParagraph = false;

  const flushUl = () => {
    if (inUl) { out.push("</ul>"); inUl = false; }
  };
  const flushOl = () => {
    if (inOl) { out.push("</ol>"); inOl = false; }
  };
  const flushParagraph = () => {
    if (inParagraph) { out.push("</p>"); inParagraph = false; }
  };
  const flushAll = () => {
    flushUl();
    flushOl();
    flushParagraph();
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // Empty line
    if (!line) {
      flushAll();
      continue;
    }

    // GFM pipe table: detect `| ... |` followed by a separator `| --- | --- |`
    if (line.startsWith("|") && line.endsWith("|") && i + 1 < lines.length) {
      const next = lines[i + 1].trim();
      if (/^\|[\s:|-]+\|$/.test(next) && next.includes("-")) {
        flushAll();
        const header = splitRow(line);
        const headerHtml =
          "<thead><tr>" +
          header.map((c) => `<th>${inline(c)}</th>`).join("") +
          "</tr></thead>";

        const bodyRows: string[] = [];
        let j = i + 2;
        while (j < lines.length) {
          const row = lines[j].trim();
          if (!row.startsWith("|") || !row.endsWith("|")) break;
          const cells = splitRow(row);
          bodyRows.push(
            "<tr>" + cells.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>"
          );
          j++;
        }
        const bodyHtml = bodyRows.length ? `<tbody>${bodyRows.join("")}</tbody>` : "";
        out.push(`<div class="article-table-wrap"><table>${headerHtml}${bodyHtml}</table></div>`);
        i = j - 1;
        continue;
      }
    }

    // Pass-through raw HTML (divs, custom blocks, etc.)
    if (line.startsWith("<")) {
      flushAll();
      out.push(raw);
      continue;
    }

    // Headings — shifted down one level so H1 in source becomes H2
    // (pages already have their own H1 in the hero section)
    if (line.startsWith("#### ")) {
      flushAll();
      out.push(`<h5>${inline(line.slice(5))}</h5>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushAll();
      out.push(`<h4>${inline(line.slice(4))}</h4>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushAll();
      out.push(`<h3>${inline(line.slice(3))}</h3>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushAll();
      out.push(`<h2>${inline(line.slice(2))}</h2>`);
      continue;
    }

    // Unordered list item
    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushOl();
      flushParagraph();
      if (!inUl) { out.push("<ul>"); inUl = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    // Ordered list item: `1. text`, `12) text`
    const olMatch = line.match(/^(\d+)[.)]\s+(.*)$/);
    if (olMatch) {
      flushUl();
      flushParagraph();
      if (!inOl) { out.push("<ol>"); inOl = true; }
      out.push(`<li>${inline(olMatch[2])}</li>`);
      continue;
    }

    // Paragraph text
    flushUl();
    flushOl();
    if (!inParagraph) {
      out.push(`<p>${inline(line)}`);
      inParagraph = true;
    } else {
      // Continuation — append with space
      out[out.length - 1] += " " + inline(line);
    }
  }

  flushAll();

  return out.join("\n");
}

/** Split a `| a | b | c |` row into trimmed cell strings. */
function splitRow(row: string): string[] {
  return row
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

/** Inline markdown: **bold**, *italic*, [link](url) */
function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
}
