import type { Metadata } from "next";
import CasinoTable from "@/components/common/CasinoTable";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";
import { casinoList } from "@/lib/data/casinos";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import Link from "next/link";
import { loadArticle } from "@/lib/articles";

const bonusesArticle = loadArticle("bonuses");

export const metadata: Metadata = {
  title: bonusesArticle.title,
  description: bonusesArticle.description,
  alternates: { canonical: absoluteUrl(`${ROUTES.bonuses}/`) },
};

const benefits = [
  "بونص ترحيب حتى 100% على أول إيداع",
  "شروط رهان شفافة وقابلة للتحقق",
  "دعم Vodafone Cash وفوري وميزة",
  "مكافآت بدون إيداع في بعض المواقع",
];

const bonusTypes = [
  { t: "بونص الإيداع", d: "مضاعفة مبلغ أول إيداع بنسبة 50-100%، مع حد أقصى ومتطلبات رهان." },
  { t: "بونص بدون إيداع", d: "رصيد مجاني أو دورات مجانية عند التسجيل دون الحاجة لإيداع." },
  { t: "دورات مجانية", d: "تُمنح للسلوتس المحددة، الأرباح قابلة للسحب بعد استيفاء شروط الرهان." },
  { t: "برامج الولاء", d: "نقاط تتراكم مع كل رهان تُحوَّل لمكافآت أو عروض خاصة." },
];

export default function BonusesPage() {
  return (
    <>
      <PageHero
        h1={bonusesArticle.h1}
        description={bonusesArticle.intro}
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "بونص ترحيب", href: ROUTES.bonuses },
        ]}
        benefits={benefits}
      />
      <PageShell>
        <section>
          <h2 className="mb-4 text-xl font-bold text-[#1A1A1A]">
            أنواع البونصات في الكازينو
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {bonusTypes.map((item) => (
              <div key={item.t} className="rounded-xl border border-[#E8E4DA] bg-white p-5">
                <h3 className="mb-2 font-semibold text-[#C8963E]">{item.t}</h3>
                <p className="text-sm text-[#555]">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">
            مقارنة الكازينوهات والعروض
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="mb-2 font-bold text-amber-800">تنبيه قبل المطالبة بالبونص</h3>
          <ul className="space-y-1 text-sm text-amber-700">
            <li>• اقرأ متطلبات الرهان (Wagering Requirements) بالكامل</li>
            <li>• تحقق من الألعاب المؤهلة للمساهمة في الرهان</li>
            <li>• انتبه لمدة صلاحية البونص</li>
            <li>• تأكد من الحد الأقصى للسحب من أرباح البونص</li>
          </ul>
        </section>

        <p className="mt-6 text-center text-sm">
          <Link href={ROUTES.realMoney} className="text-[#C8963E] hover:underline">
            كازينو بمال حقيقي ←
          </Link>
          {" · "}
          <Link href={ROUTES.newCasinos} className="text-[#C8963E] hover:underline">
            كازينو جديد ←
          </Link>
        </p>
      </PageShell>
      <ArticleBodyLoader kind="bonuses" />
    </>
  );
}
