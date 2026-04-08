/**
 * Minimal Markdown-to-HTML converter for article body content.
 * Handles: headings, bold, lists, paragraphs, and pass-through HTML.
 * Does NOT sanitize — content must be trusted (internal only).
 */
export function mdToHtml(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let inList = false;
  let inParagraph = false;

  const flushList = () => {
    if (inList) { out.push("</ul>"); inList = false; }
  };
  const flushParagraph = () => {
    if (inParagraph) { out.push("</p>"); inParagraph = false; }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // Empty line
    if (!line) {
      flushList();
      flushParagraph();
      continue;
    }

    // Pass-through raw HTML (tables, divs, etc.)
    if (line.startsWith("<")) {
      flushList();
      flushParagraph();
      out.push(raw);
      continue;
    }

    // Headings — shifted down one level so H1 in source becomes H2
    // (pages already have their own H1 in the hero section)
    if (line.startsWith("#### ")) {
      flushList(); flushParagraph();
      out.push(`<h5>${inline(line.slice(5))}</h5>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList(); flushParagraph();
      out.push(`<h4>${inline(line.slice(4))}</h4>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushList(); flushParagraph();
      out.push(`<h3>${inline(line.slice(3))}</h3>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushList(); flushParagraph();
      out.push(`<h2>${inline(line.slice(2))}</h2>`);
      continue;
    }

    // Unordered list item
    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushParagraph();
      if (!inList) { out.push("<ul>"); inList = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    // Paragraph text
    flushList();
    if (!inParagraph) {
      out.push(`<p>${inline(line)}`);
      inParagraph = true;
    } else {
      // Continuation — append with space
      out[out.length - 1] += " " + inline(line);
    }
  }

  flushList();
  flushParagraph();

  return out.join("\n");
}

/** Inline markdown: **bold**, *italic*, [link](url) */
function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
}
