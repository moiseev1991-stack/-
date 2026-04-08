import ArticleBody from "@/components/common/ArticleBody";
import { casinoGamesContent } from "@/lib/content/casino-games";

import CasinoCard from "@/components/common/CasinoCard";
import SiteIcon from "@/components/common/SiteIcon";
import CasinoTable from "@/components/common/CasinoTable";
import FaqAccordion from "@/components/common/FaqAccordion";
import ContentSection from "@/components/internal/ContentSection";
import CTASection from "@/components/internal/CTASection";
import JsonLd from "@/components/internal/JsonLd";
import MethodologySection from "@/components/internal/MethodologySection";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import { casinoList } from "@/lib/data/casinos";
import {
  freeVsReal,
  gameCategoryCards,
  gamesPageBundle,
} from "@/lib/data/pages/games";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export const metadata = pageMetadata(gamesPageBundle);

export default function GamesHubPage() {
  const b = gamesPageBundle;
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <PageShell>
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            استكشف فئات الألعاب الشائعة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gameCategoryCards.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-white border border-[#E8E4DA] rounded-xl p-4 hover:border-[#C8963E] transition-colors group"
              >
                <div className="mb-2">
                  <SiteIcon name={cat.icon} size={32} />
                </div>
                <h3 className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#C8963E]">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#888] mt-1">{cat.count}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">
            كازينوهات بمكتبة ألعاب واسعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {casinoList.map((c) => (
              <CasinoCard key={c.id} casino={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">مقارنة الكازينوهات</h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            ألعاب مجانية مقابل ألعاب بمال حقيقي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freeVsReal.map((col) => (
              <div
                key={col.title}
                className="bg-white rounded-xl p-5 border border-[#E8E4DA]"
              >
                <h3 className="font-semibold text-[#1A1A1A] mb-3">{col.title}</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  {col.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-[#C8963E]">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContentSection
          title="كيف تختار لعبة تناسبك؟"
          paragraphs={[
            "ابدأ بما يناسب مستوى الخبرة: السلوتس للبساطة، البلاك جاك والبوكر لمن يريد قرارات تؤثر على النتائج.",
            "حدد ميزانية جلسة واضحة واستخدم أدوات الحد إن وُجدت.",
          ]}
        />

        <MethodologySection />

        <FaqAccordion items={b.faq} />

        <CTASection
          title="تعمّق في السلوتس أو الروليت"
          body="من هنا يمكنك الانتقال مباشرة إلى أدلة السلوتس أو الروليت للمقارنة التفصيلية."
          buttonLabel="دليل السلوتس"
          buttonHref={ROUTES.slots}
        />

        <p className="text-sm text-center text-[#555]">
          <Link href={ROUTES.roulette} className="text-[#C8963E] hover:underline me-2">
            الروليت
          </Link>
          <Link href={ROUTES.realMoney} className="text-[#C8963E] hover:underline">
            المال الحقيقي
          </Link>
        </p>
      </PageShell>
      <ArticleBody content={casinoGamesContent} />
    </>
  );
}
