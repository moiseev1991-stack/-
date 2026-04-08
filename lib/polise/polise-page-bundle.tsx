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
import { absoluteUrl } from "@/lib/seo/site";

/** Factory for `app/info/...` pages — canonical URLs use ASCII `path` from POLISE_PAGES. */
export function createPolisePageExports(slug: string) {
  const found = getPolisePage(slug);
  if (!found) {
    throw new Error(`createPolisePageExports: unknown slug "${slug}"`);
  }
  const pageDef: PolisePageDef = found;
  const canonical = absoluteUrl(pageDef.path);

  async function generateMetadata(): Promise<Metadata> {
    const raw = await readPoliseFile(pageDef.file);
    const title = extractPoliseMetaTitle(raw) ?? pageDef.label;
    const description = extractPoliseMetaDescription(raw) ?? "";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        locale: "ar_EG",
        type: "website",
        title,
        description,
        url: canonical,
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
