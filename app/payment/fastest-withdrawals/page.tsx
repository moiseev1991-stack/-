import ArticleBody from "@/components/common/ArticleBody";
import { fastWithdrawalContent } from "@/lib/content/fast-withdrawal";

import FastWithdrawalsPageContent from "@/components/internal/FastWithdrawalsPageContent";
import JsonLd from "@/components/internal/JsonLd";
import PageHero from "@/components/internal/PageHero";
import { fastestWithdrawalsBundle } from "@/lib/data/pages/fastest-withdrawals";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata(fastestWithdrawalsBundle);

export default function FastestWithdrawalsPage() {
  const b = fastestWithdrawalsBundle;
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <FastWithdrawalsPageContent />
      <ArticleBody content={fastWithdrawalContent} />
    </>
  );
}
