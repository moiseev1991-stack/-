import { mdToHtml } from "@/lib/utils/markdown";

interface Props {
  content: string;
}

/**
 * Renders a trusted markdown string as styled article HTML.
 * Designed for placement near the bottom of content pages.
 */
export default function ArticleBody({ content }: Props) {
  const html = mdToHtml(content);

  return (
    <section
      dir="rtl"
      className="px-4 py-14"
      style={{ background: "#fff", borderTop: "1px solid #ede8df" }}
    >
      <div
        className="mx-auto max-w-4xl article-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
