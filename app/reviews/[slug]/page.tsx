import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CasinoLogo from "@/components/common/CasinoLogo";
import FaqAccordion from "@/components/common/FaqAccordion";
import ArticleContent from "@/components/internal/ArticleContent";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import { casinoReviewSections } from "@/lib/content/casino-reviews";
import { casinoList } from "@/lib/data/casinos";
import {
  breadcrumbListJsonLd,
  casinoReviewJsonLd,
  faqPageJsonLd,
} from "@/lib/seo/jsonld";
import { reviewPublicPath, ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import { loadArticle, type ArticleKey } from "@/lib/articles";

const ARTICLE_BY_SLUG: Record<string, ArticleKey> = {
  "888starz": "888starz",
  "jackpot-city": "jackpot-city",
  "ruby-fortune": "ruby-fortune",
  "spin-casino": "spin-casino",
};

function tryLoadReviewArticle(slug: string) {
  const key = ARTICLE_BY_SLUG[slug];
  if (!key) return undefined;
  try {
    return loadArticle(key);
  } catch {
    return undefined;
  }
}

function reviewSlugs(): string[] {
  return casinoList.filter((c) => c.reviewLink).map((c) => c.id);
}

export function generateStaticParams() {
  return reviewSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const casino = casinoList.find((c) => c.id === slug && c.reviewLink);
  const copy = casino ? casinoReviewSections[slug] : undefined;
  if (!casino || !copy) {
    notFound();
  }
  const publicPath = reviewPublicPath(slug);
  const canonical = absoluteUrl(publicPath);
  const article = tryLoadReviewArticle(slug);
  const title =
    article?.title ?? `مراجعة ${casino.name} 2026 | بونص، سحب، وآراء الخبراء`;
  const description =
    article?.description ??
    [
      `مراجعة ${casino.name} 2026: مكافأة مذكورة "${casino.bonus}".`,
      `RTP مرجعي ${casino.rtp}%، سحب مقدَّر ${casino.payoutDays} يوم.`,
      "مقارنة تحريرية للبونص والشروط والسحب قبل فتح حساب.",
    ].join(" ");
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      locale: "ar_EG",
      type: "article",
      title,
      description,
      url: canonical,
    },
  };
}

function paymentLabelsAr(keys: string[]): string {
  const map: Record<string, string> = {
    visa: "فيزا",
    mastercard: "ماستركارد",
    skrill: "سكريل",
    neteller: "نتلر",
    paypal: "باي بال",
    paysafecard: "باي سيف كارد",
    bitcoin: "بيتكوين",
    bitcoincash: "بيتكوين كاش",
    ripple: "ريبل",
    tron: "ترون",
    litecoin: "لايتكوين",
    dogecoin: "دوجكوين",
    webmoney: "ويب موني",
  };
  return keys.map((k) => map[k] ?? k).join("، ");
}

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = casinoList.find((c) => c.id === slug && c.reviewLink);
  const copy = casinoReviewSections[slug];

  if (!casino || !copy) {
    notFound();
  }

  const article = tryLoadReviewArticle(slug);

  const descriptionNode = (() => {
    const text = copy.summary;
    if (!casino.siteUrl) return text;
    const idx = text.indexOf(casino.name);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <a
          href={casino.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C8963E] underline underline-offset-2 hover:text-[#e0aa50]"
        >
          {casino.name}
        </a>
        {text.slice(idx + casino.name.length)}
      </>
    );
  })();

  const breadcrumb = [
    { label: "الرئيسية", href: "/" },
    { label: `مراجعة ${casino.name}`, href: reviewPublicPath(slug) },
  ];

  const jsonLdBreadcrumb = breadcrumb.map((b) => ({
    name: b.label,
    path: b.href === "/" ? "/" : b.href.replace(/\/?$/, "/"),
  }));

  const paymentsAr = paymentLabelsAr(casino.paymentMethods);

  const relatedReviews = casinoList
    .filter((c) => c.reviewLink && c.id !== slug)
    .slice(0, 3);

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
              brandName: casino.name,
              reviewUrl: absoluteUrl(reviewPublicPath(slug)),
              brandUrl: casino.siteUrl,
              // Only emit ratingValue when there's a visible editor score on the page
              // (the trust strip below renders `${casino.expertRating}/5`).
              ratingValue: casino.expertRating,
              reviewBody: copy.summary,
            })
          ),
        }}
      />
      {copy.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd(copy.faq)),
          }}
        />
      )}

      <PageHero
        h1={`مراجعة ${casino.name} 2026`}
        description={descriptionNode}
        breadcrumb={breadcrumb}
        benefits={[
          ...(casino.expertRating != null
            ? [`تقييم التحرير: ${casino.expertRating}/5`]
            : []),
          `RTP مرجعي: ${casino.rtp}%`,
          `زمن سحب مقدَّر: ${casino.payoutDays} يوم`,
          casino.gamesCount ? `ألعاب مدرجة: ${casino.gamesCount}` : "",
        ].filter(Boolean)}
        cta={{
          label: "افتح الحساب والعب الآن",
          href: casino.affiliateLink,
          external: false,
        }}
      />

      <PageShell>
        <article className="space-y-8">
          {/* Trust strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "تقييم التحرير", value: casino.expertRating != null ? `${casino.expertRating}/5` : "—" },
              { label: "RTP مرجعي", value: `${casino.rtp}%` },
              { label: "السحب (تقديري)", value: `${casino.payoutDays} يوم` },
              { label: "سنة الانطلاق", value: casino.launchedYear != null ? String(casino.launchedYear) : "—" },
            ].map((cell) => (
              <div
                key={cell.label}
                className="rounded-xl border border-[#E8E4DA] bg-gradient-to-b from-white to-[#FAFAF8] px-4 py-3 text-center shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#A89878]">{cell.label}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-[#1A1A1A]">{cell.value}</p>
              </div>
            ))}
          </div>

          {/* Quick glance + intro */}
          <section className="rounded-xl border border-[#E8E4DA] bg-white p-6 shadow-sm" aria-labelledby="quick-glance">
            <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <CasinoLogo
                casinoId={casino.id}
                src={casino.logo}
                alt={casino.name}
                name={casino.name}
                variant="card"
                className="!mt-0"
              />
              <div className="min-w-0 flex-1 text-center sm:text-start">
                <h2 id="quick-glance" className="text-lg font-bold text-[#1A1A1A]">
                  <Link href="/" className="text-[#C8963E] hover:underline underline-offset-4">
                    {casino.name}
                  </Link>
                  {" "}— لمحة سريعة ومكافأة الترحيب
                </h2>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#B8862F]">{casino.bonus}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#444]">{copy.intro}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#666]">
                  <span className="font-semibold text-[#1A1A1A]">وسائل دفع شائعة في الملف:</span> {paymentsAr}. تحقق
                  من الصفحة الرسمية لأحدث القائمة لبلدك.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-[#F0EDE5] pt-5">
              <a
                href={casino.affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-[#10B981] px-6 text-sm font-bold text-white shadow-md shadow-emerald-900/10 transition-colors hover:bg-[#0EA572] sm:flex-none"
              >
                تسجيل ومكافأة عبر الموقع الرسمي
              </a>
            </div>
          </section>

          {/* Pros / cons */}
          <section aria-labelledby="pros-cons-heading">
            <h2 id="pros-cons-heading" className="mb-4 text-xl font-bold text-[#1A1A1A]">
              الإيجابيات والاحتياطات قبل الإيداع
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-emerald-900">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                    ✓
                  </span>
                  لماذا يختار اللاعبون {casino.name}
                </h3>
                <ul className="list-disc space-y-2 pe-5 text-sm leading-relaxed text-[#1A3D32] marker:text-emerald-600">
                  {copy.pros.map((line, i) => (
                    <li key={`pro-${i}`}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200/90 bg-amber-50/40 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-amber-950">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-xs text-white">
                    !
                  </span>
                  انتبه لهذا (شفافية وامتثال)
                </h3>
                <ul className="list-disc space-y-2 pe-5 text-sm leading-relaxed text-[#4A3B18] marker:text-amber-600">
                  {copy.cons.map((line, i) => (
                    <li key={`con-${i}`}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="rounded-xl border border-[#E8E4DA] bg-[#FFFCF7] p-6" aria-labelledby="who-for">
            <h2 id="who-for" className="mb-2 text-lg font-bold text-[#1A1A1A]">
              لمن تناسب هذه المنصة؟
            </h2>
            <p className="text-sm leading-relaxed text-[#444]">{copy.whoItsFor}</p>
          </section>

          {/* Deep sections */}
          <section aria-labelledby="details-heading">
            <h2 id="details-heading" className="mb-5 text-xl font-bold text-[#1A1A1A]">
              تفاصيل المراجعة التحريرية
            </h2>
            <div className="space-y-6">
              {copy.deepSections.map((s) => (
                <div
                  key={s.heading}
                  className="rounded-xl border border-[#E8E4DA] bg-white p-5 shadow-sm"
                >
                  <h3 className="mb-3 text-base font-bold text-[#1A1A1A]">{s.heading}</h3>
                  <p className="text-sm leading-[1.75] text-[#444]">{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps + mid CTA */}
          <section className="overflow-hidden rounded-xl border-2 border-[#C8963E]/35 bg-gradient-to-br from-[#1a1510] via-[#252018] to-[#1a1510] p-6 text-white shadow-lg" aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="mb-4 text-lg font-bold text-white">
              مسار سريع لأقصى استفادة (بدون مفاجآت)
            </h2>
            <ol className="mb-6 list-decimal space-y-3 pe-5 text-sm leading-relaxed text-[#E8E4DA] marker:font-bold marker:text-[#C8963E]">
              {copy.steps.map((st) => (
                <li key={st.title}>
                  <span className="font-semibold text-white">{st.title}:</span> {st.text}
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
              <a
                href={casino.affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-[#10B981] px-6 text-sm font-bold text-white ring-2 ring-[#C8963E]/40 transition-colors hover:bg-[#0EA572] sm:flex-none"
              >
                انتقل إلى {casino.name} — عرض اليوم
              </a>
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
              >
                قارن مع باقي القائمة
              </Link>
            </div>
          </section>

          {/* Editorial long-form (from lib/data/articles/<slug>.md) */}
          {article && (
            <section
              aria-labelledby="article-heading"
              className="rounded-xl border border-[#E8E4DA] bg-white p-6 shadow-sm"
            >
              <h2 id="article-heading" className="mb-2 text-xl font-bold text-[#1A1A1A]">
                {article.h1}
              </h2>
              {article.intro && (
                <p className="mb-4 text-sm leading-relaxed text-[#555]">
                  {article.intro}
                </p>
              )}
              <ArticleContent markdown={article.body} />
            </section>
          )}

          {/* FAQ */}
          {copy.faq.length > 0 && (
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="mb-4 text-xl font-bold text-[#1A1A1A]">
                أسئلة شائعة قبل التسجيل
              </h2>
              <p className="mb-4 text-sm text-[#555]">
                إجابات عملية من منطق المراجعة — للتفاصيل القانونية والرقمية الرجوع دائماً إلى الموقع الرسمي للمشغّل.
              </p>
              <FaqAccordion items={copy.faq} />
            </section>
          )}

          {/* Related reviews */}
          {relatedReviews.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="mb-4 text-xl font-bold text-[#1A1A1A]">
                مراجعات مشابهة
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedReviews.map((r) => (
                  <Link
                    key={r.id}
                    href={reviewPublicPath(r.id)}
                    className="group block rounded-xl border border-[#E8E4DA] bg-white p-4 shadow-sm transition-colors hover:border-[#C8963E]/40 hover:bg-[#FFFCF7]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#A89878]">
                      مراجعة
                    </p>
                    <p className="mt-1 text-base font-bold text-[#1A1A1A] group-hover:text-[#C8963E]">
                      {r.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#555]">
                      {r.bonus}
                    </p>
                    {r.expertRating != null && (
                      <p className="mt-2 text-xs font-semibold text-[#10B981]">
                        تقييم: {r.expertRating}/5
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Final CTAs */}
          <section className="flex flex-wrap gap-3 border-t border-[#F0EDE5] pt-6">
            <a
              href={casino.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#10B981] px-6 text-sm font-bold text-white hover:bg-[#0EA572]"
            >
              زيارة {casino.name}
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#E8E4DA] bg-white px-6 text-sm font-semibold text-[#1A1A1A] hover:bg-[#FAF8F4]"
            >
              العودة للرئيسية
            </Link>
            <Link
              href={ROUTES.payment}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-transparent px-2 text-sm font-medium text-[#C8963E] underline-offset-4 hover:underline"
            >
              دليل طرق الدفع
            </Link>
          </section>
        </article>
      </PageShell>
    </>
  );
}
