import type { Metadata } from "next";
import CasinoTable from "@/components/common/CasinoTable";
import ArticleBody from "@/components/common/ArticleBody";
import { noVerificationContent } from "@/lib/content/no-verification";
import { casinoList } from "@/lib/data/casinos";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "كازينو بدون توثيق مصر 2026 | تسجيل سريع آمن",
  description:
    "دليل 2026 للكازينو بدون توثيق في مصر: مقارنة المواقع، طرق الدفع، المخاطر القانونية، ونصائح اختيار آمن.",
  alternates: { canonical: "https://كازينوعربياونلاين.com/بدون-توثيق" },
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
        h1="كازينو بدون توثيق مصر 2026"
        description="دليل شامل للكازينو بدون توثيق: مقارنة المواقع، فهم المخاطر، واختيار الأنسب لك."
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "كازينو بدون توثيق", href: ROUTES.noVerification },
        ]}
        benefits={benefits}
      />
      <PageShell>
        <section>
          <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">
            مقارنة الكازينوهات
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-[#1A1A1A]">
            المخاطر التي يجب معرفتها
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {risks.map((item) => (
              <div key={item.t} className="rounded-xl border border-[#E8E4DA] bg-white p-5">
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
      <ArticleBody content={noVerificationContent} />
    </>
  );
}
