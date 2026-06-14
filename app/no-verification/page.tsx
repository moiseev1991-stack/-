import type { Metadata } from "next";
import CasinoTable from "@/components/common/CasinoTable";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import { casinoList } from "@/lib/data/casinos";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import Link from "next/link";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";
import { loadArticle } from "@/lib/articles";

const noVerificationArticle = loadArticle("no-verification");

export const metadata: Metadata = {
  title: noVerificationArticle.title,
  description: noVerificationArticle.description,
  alternates: { canonical: absoluteUrl(`${ROUTES.noVerification}/`) },
};

const benefits = [
  "تسجيل سريع بدون مستندات هوية",
  "إيداع وسحب فوري بطرق دفع محلية",
  "ألعاب متاحة فور الاشتراك",
  "مع الحفاظ على الخصوصية",
];

const risks = [
  { t: "حدود سحب منخفضة", d: "المواقع بدون KYC غالباً تضع حدود سحب يومية/شهرية أقل من المواقع الموثّقة." },
  { t: "حماية محدودة", d: "في حالة نزاع، غياب KYC يضعف موقفك القانوني أمام الكازينو." },
  { t: "مخاطر الترخيص", d: "بعض هذه المواقع تعمل بتراخيص ضعيفة. تحقق دائماً من جهة التنظيم." },
  { t: "الوضع القانوني", d: "اللعب عبر الإنترنت من مصر قد يكون مقيداً. تحقق من القوانين المحلية." },
];

export default function NoVerificationPage() {
  return (
    <>
      <PageHero
        h1={noVerificationArticle.h1}
        description={noVerificationArticle.intro}
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "كازينو بدون توثيق", href: ROUTES.noVerification },
        ]}
        benefits={benefits}
      />
      <PageShell>
        <section>
          <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">مقارنة الكازينوهات</h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-[#1A1A1A]">المخاطر التي يجب معرفتها</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {risks.map((item, i) => (
              <div key={i} className="rounded-xl border border-[#E8E4DA] bg-white p-5">
                <h3 className="mb-2 font-semibold text-[#C8963E]">{item.t}</h3>
                <p className="text-sm text-[#555]">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="mb-2 font-bold text-blue-800">بديل أكثر أماناً</h3>
          <p className="text-sm text-blue-700">
            المواقع المرخّصة مع KYC مُكتمل توفر حماية أقوى لأموالك ونزاعاتك.
            إكمال التوثيق مرة واحدة يُجنّبك مشاكل السحب مستقبلاً.
          </p>
        </section>

        <p className="mt-6 text-center text-sm">
          <Link href={ROUTES.realMoney} className="text-[#C8963E] hover:underline">
            كازينو موثوق بمال حقيقي ←
          </Link>
          {" · "}
          <Link href={ROUTES.payment} className="text-[#C8963E] hover:underline">
            طرق الدفع ←
          </Link>
        </p>
      </PageShell>
      <ArticleBodyLoader kind="noVerification" />
    </>
  );
}
