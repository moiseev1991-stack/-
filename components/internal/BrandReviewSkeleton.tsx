import Link from "next/link";
import FaqAccordion from "@/components/common/FaqAccordion";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import {
  breadcrumbListJsonLd,
  casinoReviewJsonLd,
  faqPageJsonLd,
} from "@/lib/seo/jsonld";
import { reviewPublicPath, ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import type { FaqItem } from "@/lib/types/casino";

export interface BrandReviewProps {
  /** Lowercase slug under /مراجعات/<slug>/ — matches the file path */
  slug: string;
  /** Display name of the operator */
  brandName: string;
  /** Page <title> */
  metaTitle: string;
  /** Meta description */
  metaDescription: string;
  /** Visible <h1> */
  h1: string;
  /** Short subline under the h1 */
  intro: string;
  /** Optional official site (drives JSON-LD itemReviewed.url) */
  brandUrl?: string;
  /** Editorial rating out of 5 — only shown when set */
  editorialRating?: number;
  /** 3–4 highlight rows for the trust strip */
  highlights: { label: string; value: string }[];
  /** Initial FAQ items (text team can extend) */
  faq: FaqItem[];
}

/**
 * Minimal review skeleton for brand pages that are NOT in casinoList
 * (sportsbooks, hybrid platforms). Covers self-canonical via the caller's
 * metadata, JSON-LD (Review, BreadcrumbList, FAQPage), a visible breadcrumb
 * trail, a rating block, and a FAQ slot — enough surface for indexation
 * before the full editorial text lands.
 */
export default function BrandReviewSkeleton({
  slug,
  brandName,
  h1,
  intro,
  brandUrl,
  editorialRating,
  highlights,
  faq,
}: BrandReviewProps) {
  const publicPath = reviewPublicPath(slug);
  const canonical = absoluteUrl(publicPath);
  const breadcrumb = [
    { label: "الرئيسية", href: "/" },
    { label: "مواقع المراهنات", href: ROUTES.betting },
    { label: `مراجعة ${brandName}`, href: publicPath },
  ];
  const jsonLdBreadcrumb = breadcrumb.map((b) => ({
    name: b.label,
    path: b.href === "/" ? "/" : b.href.replace(/\/?$/, "/"),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListJsonLd(jsonLdBreadcrumb)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            casinoReviewJsonLd({
              brandName,
              reviewUrl: canonical,
              brandUrl,
              ratingValue: editorialRating,
              reviewBody: intro,
            })
          ),
        }}
      />
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd(faq)),
          }}
        />
      )}

      <PageHero
        h1={h1}
        description={intro}
        breadcrumb={breadcrumb}
        benefits={highlights.map((h) => `${h.label}: ${h.value}`)}
      />

      <PageShell>
        <article className="space-y-8">
          {/* Rating block */}
          <section
            aria-labelledby="rating-block"
            className="rounded-xl border border-[#E8E4DA] bg-white p-6 shadow-sm"
          >
            <h2 id="rating-block" className="mb-4 text-lg font-bold text-[#1A1A1A]">
              تقييم {brandName} السريع
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                editorialRating != null
                  ? { label: "تقييم التحرير", value: `${editorialRating}/5` }
                  : null,
                ...highlights,
              ]
                .filter((x): x is { label: string; value: string } => x !== null)
                .map((cell) => (
                  <div
                    key={cell.label}
                    className="rounded-xl border border-[#E8E4DA] bg-gradient-to-b from-white to-[#FAFAF8] px-4 py-3 text-center shadow-sm"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#A89878]">
                      {cell.label}
                    </p>
                    <p className="mt-1 text-base font-bold tabular-nums text-[#1A1A1A]">
                      {cell.value}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Empty content slot — text team fills later */}
          <section
            aria-labelledby="content-slot"
            className="rounded-xl border border-dashed border-[#E8E4DA] bg-[#FFFCF7] p-6 text-[#555]"
          >
            <h2 id="content-slot" className="mb-2 text-lg font-bold text-[#1A1A1A]">
              ماذا يقدّم {brandName} للاعبين من مصر؟
            </h2>
            <p className="text-sm leading-relaxed">
              مراجعتنا التحريرية الكاملة قيد التحضير. ستجد قريباً تفاصيل المكافأة، أسواق الرهان،
              طرق الدفع المتاحة محلياً (بما فيها فودافون كاش)، وأوقات السحب الفعلية.
            </p>
          </section>

          {/* FAQ slot */}
          {faq.length > 0 && (
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="mb-4 text-xl font-bold text-[#1A1A1A]">
                أسئلة شائعة عن {brandName}
              </h2>
              <FaqAccordion items={faq} />
            </section>
          )}

          {/* Final CTAs */}
          <section className="flex flex-wrap gap-3 border-t border-[#F0EDE5] pt-6">
            <Link
              href={ROUTES.betting}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#10B981] px-6 text-sm font-bold text-white hover:bg-[#0EA572]"
            >
              قارن مع مواقع مراهنات أخرى
            </Link>
            <Link
              href={ROUTES.vodafoneCash}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#E8E4DA] bg-white px-6 text-sm font-semibold text-[#1A1A1A] hover:bg-[#FAF8F4]"
            >
              دليل فودافون كاش
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-transparent px-2 text-sm font-medium text-[#C8963E] underline-offset-4 hover:underline"
            >
              العودة للرئيسية
            </Link>
          </section>
        </article>
      </PageShell>
    </>
  );
}
