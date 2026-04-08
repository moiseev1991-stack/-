import CasinoTable from "@/components/common/CasinoTable";
import SiteIcon from "@/components/common/SiteIcon";
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
  gettingStartedSteps,
  realMoneyHighlights,
  realMoneyPageBundle,
} from "@/lib/data/pages/real-money";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";

export const metadata = pageMetadata(realMoneyPageBundle);

export default function RealMoneyPage() {
  const b = realMoneyPageBundle;
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <PageShell>
        <TopCasinosGrid
          title="كازينوهات المال الحقيقي الموصى بها"
          casinos={casinoList}
          featuredId="888starz"
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مقارنة شاملة للكازينوهات
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            ما الذي يميز تجربة المال الحقيقي؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {realMoneyHighlights.map((item) => (
              <div key={item.title} className="bg-[#F7F4EE] rounded-xl p-5 border border-[#E8E4DA]">
                <div className="mb-3">
                  <SiteIcon name={item.icon} size={28} />
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#555]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ContentSection
          title="الدفع والسحب"
          paragraphs={[
            "اختر طريقة إيداع تدعمها المنصة وتناسب مصرفك أو محفظتك.",
            "للمقارنة التفصيلية لسرعة السحب، استخدم صفحة أسرع سحب ودليل طرق الدفع.",
          ]}
        />

        <ContentSection
          title="الأمان والترخيص"
          paragraphs={[
            "الترخيص من جهة معترف بها يعني التزاماً بمعايير حماية اللاعبين والمدفوعات.",
            "لا تشارك بيانات الدخول مع أي شخص، وفعّل التحقق الثنائي إن وُجد.",
          ]}
        />

        <ContentSection
          title="ألعاب شائعة بمال حقيقي"
          paragraphs={[
            "السلوتس والروليت والبلاك جاك من أكثر الخيارات طلباً. ابدأ بما يناسب مستواك.",
            "يمكنك التنقل بين أدلاء السلوتس والروليت ومركز الألعاب من الروابط أدناه.",
          ]}
        />

        <ContentSection
          title="كيفية البدء"
          list={gettingStartedSteps}
        />

        <MethodologySection />

        <FaqAccordion items={b.faq} />

        <CTASection
          title="جرب أيضاً الكازينوهات الجديدة"
          body="قارن العروض الترحيبية في المواقع الحديثة مع الاستقرار والدفع في المواقع الراسخة."
          buttonLabel="كازينوهات جديدة"
          buttonHref={ROUTES.newCasinos}
          variant="light"
        />

        <p className="text-sm text-center text-[#555]">
          <Link href={ROUTES.slots} className="text-[#C8963E] hover:underline me-2">
            السلوتس
          </Link>
          <Link href={ROUTES.payment} className="text-[#C8963E] hover:underline me-2">
            الدفع
          </Link>
          <Link href={ROUTES.games} className="text-[#C8963E] hover:underline">
            الألعاب
          </Link>
        </p>
      </PageShell>
      <ArticleBodyLoader kind="realMoney" />
    </>
  );
}
