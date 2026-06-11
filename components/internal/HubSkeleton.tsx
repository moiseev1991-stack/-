import type { ReactNode } from "react";
import FaqAccordion from "@/components/common/FaqAccordion";
import CasinoTable from "@/components/common/CasinoTable";
import JsonLd from "@/components/internal/JsonLd";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import TopCasinosGrid from "@/components/internal/TopCasinosGrid";
import { casinoList } from "@/lib/data/casinos";
import { jsonLdBreadcrumbFromHero } from "@/lib/seo/metadata";
import type { PageHeroData } from "@/lib/types/page";
import type { FaqItem } from "@/lib/types/casino";

interface Props {
  hero: PageHeroData;
  faq: FaqItem[];
  /** Heading shown above the top-casinos grid block. */
  topCasinosTitle?: string;
  /** Optional richer content slot rendered between the grid and the table. */
  contentSlot?: ReactNode;
}

/**
 * Skeleton template for SEO landing hubs ahead of the text fill-in step.
 * Renders: JSON-LD (FAQ + BreadcrumbList), hero (h1 + breadcrumbs + CTA),
 * a "top casinos" rating block, an optional content slot, the comparison
 * table, and a FAQ accordion. Self-canonical comes from the calling page's
 * `metadata`.
 */
export default function HubSkeleton({
  hero,
  faq,
  topCasinosTitle,
  contentSlot,
}: Props) {
  return (
    <>
      <JsonLd
        faq={faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(hero.breadcrumb)}
      />
      <PageHero {...hero} />
      <PageShell>
        <TopCasinosGrid
          casinos={casinoList.slice(0, 4)}
          title={topCasinosTitle ?? "أفضل الكازينوهات الموصى بها"}
        />

        {contentSlot && <section>{contentSlot}</section>}

        <section>
          <h2 className="mb-4 text-xl font-bold text-[#1A1A1A]">
            مقارنة الكازينوهات (ملخص)
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <FaqAccordion items={faq} />
      </PageShell>
    </>
  );
}
