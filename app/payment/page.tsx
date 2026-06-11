import CasinoTable from "@/components/common/CasinoTable";
import SiteIcon from "@/components/common/SiteIcon";
import FaqAccordion from "@/components/common/FaqAccordion";
import CTASection from "@/components/internal/CTASection";
import JsonLd from "@/components/internal/JsonLd";
import MethodologySection from "@/components/internal/MethodologySection";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import PaymentMethodsGrid from "@/components/internal/PaymentMethodsGrid";
import TopCasinosGrid from "@/components/internal/TopCasinosGrid";
import { paymentMethodsTable } from "@/lib/data/payment-methods";
import {
  paymentHowToChoose,
  paymentPageBundle,
  paymentSecurityBullets,
} from "@/lib/data/pages/payment";
import { casinoList } from "@/lib/data/casinos";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import InfoCardsSection from "@/components/internal/InfoCardsSection";
import ContentSection from "@/components/internal/ContentSection";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";

export const metadata = pageMetadata(paymentPageBundle);

export default function PaymentPage() {
  const b = paymentPageBundle;
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <PageShell>
        <TopCasinosGrid
          title="أفضل الكازينوهات بخيارات دفع متعددة"
          casinos={casinoList}
          featuredId="888starz"
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مقارنة طرق الدفع
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#F7F4EE]">
                  {["طريقة الدفع", "الإيداع", "السحب", "الحد الأدنى", "الأمان"].map(
                    (h) => (
                      <th key={h} className="text-end p-3 font-semibold text-[#555]">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {paymentMethodsTable.map((m, i) => (
                  <tr
                    key={m.id}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}
                  >
                    <td className="p-3 font-medium">
                      <span className="me-2 inline-flex align-middle">
                        <SiteIcon name={m.icon} size={22} />
                      </span>
                      {m.name}
                    </td>
                    <td className="p-3 text-[#10B981]">{m.deposit}</td>
                    <td className="p-3">{m.withdrawal}</td>
                    <td className="p-3">{m.minDeposit}</td>
                    <td className="p-3">{m.safety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <PaymentMethodsGrid methods={paymentMethodsTable} />

        <InfoCardsSection
          title="كيفية اختيار كازينو بطرق دفع مناسبة"
          items={paymentHowToChoose.map((x) => ({
            icon: x.icon,
            title: x.title,
            text: x.text,
          }))}
        />

        <ContentSection
          title="الأمان والتحقق وسرعة السحب"
          paragraphs={[
            "الكازينوهات المرخّصة تطلب التحقق من الهوية لحماية حسابك وللمطابقة مع لوائح مكافحة غسيل الأموال.",
            "سرعة السحب تعتمد على طريقة الدفع واكتمال التحقق، وليس على إعلانات «سحب فوري» وحدها.",
          ]}
          list={paymentSecurityBullets}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مقارنة الكازينوهات (ملخص)
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <MethodologySection />

        <FaqAccordion items={b.faq} />

        <CTASection
          title="هل تبحث عن أسرع صرف للأرباح؟"
          body="راجع قائمة الكازينوهات التي تُعالج السحوبات بسرعة مع جدول مقارنة تفصيلي ونصائح عملية."
          buttonLabel="أسرع كازينوهات السحب"
          buttonHref={ROUTES.paymentFastest}
        />

        <section
          aria-labelledby="vodafone-cta"
          className="rounded-xl border border-[#E8E4DA] bg-[#FFFCF7] p-6"
        >
          <h2 id="vodafone-cta" className="mb-2 text-lg font-bold text-[#1A1A1A]">
            تدفع بفودافون كاش؟
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-[#555]">
            دليلنا الكامل لكازينوهات ومراهنات فودافون كاش في مصر: شروط الإيداع، أوقات السحب، والمواقع المتوافقة.
          </p>
          <a
            href="/فودافون-كاش/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#C8963E] px-5 text-sm font-bold text-white hover:bg-[#B8862F]"
          >
            دليل فودافون كاش
          </a>
        </section>
      </PageShell>
      <ArticleBodyLoader kind="payment" />
    </>
  );
}
