import ArticleBody from "@/components/common/ArticleBody";
import SiteIcon from "@/components/common/SiteIcon";
import { newCasinoContent } from "@/lib/content/new-casino";

import CasinoCard from "@/components/common/CasinoCard";
import CasinoTable from "@/components/common/CasinoTable";
import FaqAccordion from "@/components/common/FaqAccordion";
import ContentSection from "@/components/internal/ContentSection";
import CTASection from "@/components/internal/CTASection";
import JsonLd from "@/components/internal/JsonLd";
import MethodologySection from "@/components/internal/MethodologySection";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import TopCasinosGrid from "@/components/internal/TopCasinosGrid";
import { casinoList } from "@/lib/data/casinos";
import {
  newCasinoChecklist,
  newCasinoReasons,
  newCasinosBundle,
} from "@/lib/data/pages/new-casinos";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export const metadata = pageMetadata(newCasinosBundle);

export default function NewCasinosPage() {
  const b = newCasinosBundle;
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <PageShell>
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">
            كازينو جديد بارز هذا العام
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {casinoList.slice(0, 4).map((casino) => (
              <div key={casino.id} className="relative">
                <span className="absolute top-2 end-2 z-10 bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-medium">
                  جديد 2026
                </span>
                <CasinoCard
                  casino={{
                    ...casino,
                    isTopRated: casino.id === "yyy-casino",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        <TopCasinosGrid
          title="المزيد من الكازينوهات الحديثة والراسخة"
          casinos={casinoList}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">مقارنة شاملة</h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            لماذا يجرب اللاعبون الكازينوهات الجديدة؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newCasinoReasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-5 border border-[#E8E4DA]"
              >
                <div className="mb-2">
                  <SiteIcon name={r.icon} size={28} />
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">{r.title}</h3>
                <p className="text-sm text-[#555]">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ContentSection
          title="مكافآت الترحيب في الكازينوهات الجديدة"
          paragraphs={[
            "غالباً ما تقدم المواقع الحديثة حزماً تنافسية لجذب اللاعبين، لكن شروط الرهان والألعاب المشمولة تختلف.",
            "اقرأ المدة والحد الأقصى للبونص وتأكد من أن الألعاب التي تحبها مؤهّلة.",
          ]}
        />

        <ContentSection
          title="كيف نختار الكازينوهات الجديدة؟"
          list={newCasinoChecklist}
        />

        <ContentSection
          title="الترخيص والأمان"
          paragraphs={[
            "الترخيص من جهة معترف بها خطوة أساسية. تجنب المواقع التي تخفي معلومات الشركة أو شروط السحب.",
            "للمقارنة مع كازينوهات راسخة من حيث الاستقرار والدفع، راجع صفحة المال الحقيقي.",
          ]}
        />

        <MethodologySection />

        <FaqAccordion items={b.faq} />

        <CTASection
          title="قارن خيارات المال الحقيقي"
          body="إذا كنت تفضّل سمعة أطول وسياسات دفع مختبرة، تصفح قائمة كازينوهات المال الحقيقي."
          buttonLabel="كازينوهات المال الحقيقي"
          buttonHref={ROUTES.realMoney}
        />

        <p className="text-sm text-center">
          <Link href={ROUTES.paymentFastest} className="text-[#C8963E] hover:underline">
            أسرع كازينوهات السحب
          </Link>
        </p>
      </PageShell>
      <ArticleBody content={newCasinoContent} />
    </>
  );
}
