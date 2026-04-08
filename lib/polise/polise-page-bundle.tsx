import type { Metadata } from "next";
import PoliseArticle from "@/components/internal/PoliseArticle";
import type { PolisePageDef } from "@/lib/data/polise-pages";
import { getPolisePage } from "@/lib/data/polise-pages";
import {
  extractPoliseMetaDescription,
  extractPoliseMetaTitle,
  preparePoliseMarkdown,
  readPoliseFile,
} from "@/lib/polise/load-polise";
import { SITE_URL } from "@/lib/seo/site";

/**
 * Explicit Arabic route folders (e.g. app/من-نحن/page.tsx) — dynamic [slug]
 * with Unicode segments can 404 on Next 16; this factory keeps pages DRY.
 */
export function createPolisePageExports(slug: string, canonicalPath = `/${slug}`) {
  const found = getPolisePage(slug);
  if (!found) {
    throw new Error(`createPolisePageExports: unknown slug "${slug}"`);
  }
  const pageDef: PolisePageDef = found;

  async function generateMetadata(): Promise<Metadata> {
    const raw = await readPoliseFile(pageDef.file);
    const title = extractPoliseMetaTitle(raw) ?? pageDef.label;
    const description = extractPoliseMetaDescription(raw) ?? "";
    return {
      title,
      description,
      alternates: { canonical: `${SITE_URL}${canonicalPath}` },
      openGraph: {
        locale: "ar_EG",
        type: "website",
        title,
        description,
        url: `${SITE_URL}${canonicalPath}`,
      },
    };
  }

  async function Page() {
    const raw = await readPoliseFile(pageDef.file);
    const markdown = preparePoliseMarkdown(raw);
    return (
      <PoliseArticle slug={slug} title={pageDef.label} markdown={markdown} />
    );
  }

  return { Page, generateMetadata };
}
