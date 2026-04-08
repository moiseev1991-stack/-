import Link from "next/link";
import { POLISE_PAGES } from "@/lib/data/polise-pages";
import { mdToHtml } from "@/lib/utils/markdown";

type Props = {
  slug: string;
  title: string;
  markdown: string;
};

export default function PoliseArticle({ slug, title, markdown }: Props) {
  const html = mdToHtml(markdown);

  return (
    <div className="bg-[#F7F4EE] py-10" dir="rtl">
      <div className="mx-auto max-w-4xl px-4">
        <nav
          aria-label="معلومات قانونية"
          className="mb-8 flex flex-wrap gap-x-5 gap-y-2 border-b border-[#e8e4da] pb-6 text-sm"
        >
          {POLISE_PAGES.map((p) => {
            const active = p.slug === slug;
            return (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className={
                  active
                    ? "font-bold text-[#8B6914]"
                    : "text-[#1A1A1A] transition-colors hover:text-[#C8963E]"
                }
              >
                {p.label}
              </Link>
            );
          })}
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-extrabold text-[#111] md:text-3xl">{title}</h1>
        </header>

        <div className="article-body pb-8" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
