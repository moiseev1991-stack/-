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
  appInstallSteps,
  appReviewCriteria,
  appVsBrowser,
  appsPageBundle,
} from "@/lib/data/pages/apps";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";

export const metadata = pageMetadata(appsPageBundle);

export default function AppsPage() {
  const b = appsPageBundle;
  const appCasinos = casinoList.map((c) =>
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
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">
            أفضل تطبيقات الكازينو الموصى بها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {appCasinos.map((c) => (
              <CasinoCard key={c.id} casino={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">مقارنة سريعة</h2>
          <CasinoTable casinos={appCasinos} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مزايا تطبيقات الكازينو
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border border-[#E8E4DA]">
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-[#1A1A1A]">
                <SiteIcon name="badge_ios" size={22} />
                iPhone وiPad
              </h3>
              <p className="text-sm text-[#555] mb-4 leading-relaxed">
                تطبيقات iOS غالباً ما تكون أسرع في التحميل مع واجهة لمس نظيفة.
              </p>
              <div className="space-y-2">
                {appCasinos.slice(0, 3).map((c) => (
                  <div
                    key={c.id}
                    className="flex justify-between items-center text-sm py-2 border-b border-[#F0EDE5]"
                  >
                    <span className="font-medium">{c.name}</span>
                    <a
                      href={c.affiliateLink}
                      className="text-xs bg-[#10B981] text-white px-3 py-1 rounded-lg"
                    >
                      تنزيل
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E8E4DA]">
              <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-[#1A1A1A]">
                <SiteIcon name="badge_android" size={22} />
                Android
              </h3>
              <p className="text-sm text-[#555] mb-4 leading-relaxed">
                قد يُعرض ملف APK من الموقع الرسمي؛ ثبّت فقط من المصادر الموثوقة.
              </p>
              <div className="space-y-2">
                {appCasinos.slice(0, 3).map((c) => (
                  <div
                    key={c.id}
                    className="flex justify-between items-center text-sm py-2 border-b border-[#F0EDE5]"
                  >
                    <span className="font-medium">{c.name}</span>
                    <a
                      href={c.affiliateLink}
                      className="text-xs bg-[#10B981] text-white px-3 py-1 rounded-lg"
                    >
                      تنزيل
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContentSection
          title="كيف تثبّت التطبيق بأمان؟"
          list={appInstallSteps}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            التطبيق مقابل المتصفح
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-[#E8E4DA]">
              <h3 className="font-semibold mb-3">التطبيق</h3>
              {appVsBrowser.app.map(([icon, text]) => (
                <p
                  key={text}
                  className={`text-sm py-1 ${icon === "✓" ? "text-[#10B981]" : "text-[#EF4444]"}`}
                >
                  {icon} {text}
                </p>
              ))}
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E8E4DA]">
              <h3 className="font-semibold mb-3">المتصفح</h3>
              {appVsBrowser.browser.map(([icon, text]) => (
                <p
                  key={text}
                  className={`text-sm py-1 ${icon === "✓" ? "text-[#10B981]" : "text-[#EF4444]"}`}
                >
                  {icon} {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <ContentSection
          title="الأمان والتثبيت"
          paragraphs={[
            "حمّل التطبيق من الموقع الرسمي أو المتجر المعتمد فقط.",
            "راجع أذونات التطبيق وتأكد من تحديثات الأمان.",
          ]}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            ماذا نراجع في تطبيقات الكازينو؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {appReviewCriteria.map((x) => (
              <div
                key={x.title}
                className="bg-[#F7F4EE] rounded-xl p-4 border border-[#E8E4DA]"
              >
                <h3 className="font-semibold text-[#1A1A1A] text-sm">{x.title}</h3>
                <p className="text-sm text-[#555] mt-1">{x.text}</p>
              </div>
            ))}
          </div>
        </section>

        <MethodologySection />

        <FaqAccordion items={b.faq} />

        <CTASection
          title="سلوتس محسّنة للهاتف"
          body="إذا كان تركيزك على السلوتس على الجوال، راجع دليل سلوتس الموبايل."
          buttonLabel="سلوتس الموبايل"
          buttonHref={ROUTES.slotsMobile}
        />

        <p className="text-sm text-center">
          <Link href={ROUTES.payment} className="text-[#C8963E] hover:underline">
            طرق الدفع
          </Link>
        </p>
      </PageShell>
      <ArticleBodyLoader kind="apps" />
    </>
  );
}
