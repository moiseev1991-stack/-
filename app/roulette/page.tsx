import CasinoCard from "@/components/common/CasinoCard";
import SiteIcon from "@/components/common/SiteIcon";
import FaqAccordion from "@/components/common/FaqAccordion";
import ContentSection from "@/components/internal/ContentSection";
import CTASection from "@/components/internal/CTASection";
import JsonLd from "@/components/internal/JsonLd";
import MethodologySection from "@/components/internal/MethodologySection";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import { casinoList } from "@/lib/data/casinos";
import {
  rouletteComparisonRows,
  roulettePageBundle,
  rouletteTypes,
} from "@/lib/data/pages/roulette";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import ArticleBody from "@/components/common/ArticleBody";
import { rouletteContent } from "@/lib/content/roulette";

export const metadata = pageMetadata(roulettePageBundle);

export default function RoulettePage() {
  const b = roulettePageBundle;
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
            أفضل كازينوهات الروليت الموصى بها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {casinoList.map((c) => (
              <CasinoCard key={c.id} casino={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">أنواع الروليت أونلاين</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rouletteTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-xl p-5 border border-[#E8E4DA]"
              >
                <div className="mb-2">
                  <SiteIcon name={type.icon} size={30} />
                </div>
                <h3 className="font-semibold text-[#1A1A1A]">{type.title}</h3>
                <p className="text-sm text-[#555] mt-1">{type.slots}</p>
                <p className="text-sm text-[#C8963E] font-medium mt-1">{type.edge}</p>
                <span className="inline-block mt-2 text-xs bg-[#F7F4EE] px-2 py-1 rounded-full text-[#555]">
                  {type.note}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">مقارنة أنواع الروليت</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#F7F4EE]">
                  {["النوع", "عدد الخانات", "حافة الكازينو", "الأفضل لـ"].map((h) => (
                    <th key={h} className="text-end p-3 font-semibold text-[#555]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rouletteComparisonRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}
                  >
                    <td className="p-3 font-medium">{row.type}</td>
                    <td className="p-3 text-[#555]">{row.slots}</td>
                    <td className="p-3 text-[#10B981] font-semibold">{row.edge}</td>
                    <td className="p-3 text-[#555]">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <ContentSection
          title="اللعب المجاني (تجريبي)"
          paragraphs={[
            "استخدم الوضع التجريبي لتعلم جدول الرهانات دون ضغط مالي.",
            "الروليت المباشر غالباً يتطلب رصيداً حقيقياً أو حداً أدنى أعلى.",
          ]}
        />

        <ContentSection
          title="نصائح للمبتدئين"
          paragraphs={[
            "ابدأ بالرهانات الخارجية (مثل الألوان) لفهم الإيقاع قبل الرهانات الداخلية.",
            "تجنب استراتيجيات المضاعفة الطويلة إذا كان رصيدك محدوداً.",
          ]}
        />

        <ContentSection
          title="الروليت بأموال حقيقية مقابل اللعب المجاني"
          paragraphs={[
            "اللعب الحقيقي يتيح سحب الأرباح وفق شروط الكازينو؛ المجاني للتعلم والترفيه فقط.",
            "احترم حدود الوقت والمال، وتذكّر أن النتائج عشوائية.",
          ]}
        />

        <MethodologySection />

        <FaqAccordion items={b.faq} />

        <CTASection
          title="استكشف المزيد من الألعاب"
          body="من دليل الألعاب يمكنك الانتقال إلى السلوتس أو أقسام أخرى بسهولة."
          buttonLabel="ألعاب الكازينو"
          buttonHref={ROUTES.games}
        />

        <p className="text-sm text-center">
          <Link href={ROUTES.slots} className="text-[#C8963E] hover:underline me-2">
            السلوتس
          </Link>
          <Link href={ROUTES.realMoney} className="text-[#C8963E] hover:underline">
            المال الحقيقي
          </Link>
        </p>
      </PageShell>
      <ArticleBody content={rouletteContent} />
    </>
  );
}
