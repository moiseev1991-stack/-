import CasinoTable from "@/components/common/CasinoTable";
import FaqAccordion from "@/components/common/FaqAccordion";
import ContentSection from "@/components/internal/ContentSection";
import CTASection from "@/components/internal/CTASection";
import JsonLd from "@/components/internal/JsonLd";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import TopCasinosGrid from "@/components/internal/TopCasinosGrid";
import { casinoList } from "@/lib/data/casinos";
import {
  mobilePlayModes,
  mobileTips,
  slotsMobileBundle,
  topMobileSlotGames,
} from "@/lib/data/pages/slots-mobile";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import ArticleBody from "@/components/common/ArticleBody";
import { slotsMobileContent } from "@/lib/content/slots-mobile";

export const metadata = pageMetadata(slotsMobileBundle);

export default function MobileSlotsPage() {
  const b = slotsMobileBundle;
  const mobileCasinos = casinoList.map((c) =>
    c.id === "888starz"
      ? { ...c, affiliateLink: "https://888starz-africa.com/apk/" }
      : c
  );
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <PageShell>
        <section
          className="rounded-xl p-6 text-white"
          style={{ background: "#1C1C1E" }}
        >
          <h2 className="text-lg font-bold mb-2">سلوتس الموبايل: العب بثبات</h2>
          <p className="text-sm text-[#A0A0A0] leading-relaxed">
            اختر كازينو يُحسّن واجهة اللمس، ويُقلّل زمن التحميل، ويقدّم نفس العناوين
            المتاحة على سطح المكتب قدر الإمكان.
          </p>
        </section>

        <TopCasinosGrid
          title="أفضل كازينوهات للسلوتس على الهاتف"
          casinos={mobileCasinos}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مقارنة سريعة للكازينوهات
          </h2>
          <CasinoTable casinos={mobileCasinos} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مزايا اللعب من الهاتف
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "مرونة المكان والوقت",
              "واجهات لمس مصممة للأصابع",
              "إشعارات العروض عبر التطبيق أحياناً",
              "تذكير بالحدود عند تفعيل أدوات المسؤولية",
            ].map((t) => (
              <div
                key={t}
                className="bg-white rounded-xl p-4 border border-[#E8E4DA] flex gap-2"
              >
                <span className="text-[#10B981]">✓</span>
                <span className="text-sm text-[#555]">{t}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            iOS وAndroid والمتصفح
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {mobilePlayModes.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-xl p-5 border border-[#E8E4DA]"
              >
                <h3 className="font-semibold text-[#1A1A1A] mb-3">{m.title}</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-[#10B981]">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContentSection
          title="أفضل ألعاب سلوتس على الهاتف (أمثلة شائعة)"
          list={topMobileSlotGames}
        />

        <ContentSection
          title="اللعب المجاني مقابل اللعب الحقيقي على الموبايل"
          paragraphs={[
            "التجربة المجانية مفيدة لتقليل استهلاك البيانات أثناء التعلم.",
            "اللعب الحقيقي يتطلب اتصالاً مستقراً وحساباً مُفعّلاً وفق سياسة الكازينو.",
          ]}
        />

        <section className="bg-white rounded-xl p-6 border border-[#E8E4DA]">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            نصائح للسلوتس على الموبايل
          </h2>
          <ul className="space-y-2">
            {mobileTips.map((t) => (
              <li key={t} className="flex gap-2 text-sm text-[#555]">
                <span className="text-[#C8963E]">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        <FaqAccordion items={b.faq} />

        <CTASection
          title="تطبيقات كاملة للكازينو"
          body="إذا أردت تجربة أوسع من السلوتس فقط، راجع دليل تطبيقات الكازينو."
          buttonLabel="تطبيقات الكازينو"
          buttonHref={ROUTES.apps}
        />

        <p className="text-sm text-center text-[#555]">
          <Link href={ROUTES.slots} className="text-[#C8963E] hover:underline">
            العودة لدليل السلوتس العام
          </Link>
        </p>
      </PageShell>
      <ArticleBody content={slotsMobileContent} />
    </>
  );
}
