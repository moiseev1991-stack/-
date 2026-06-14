import type { Metadata } from "next";
import CasinoTable from "@/components/common/CasinoTable";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";
import { casinoList } from "@/lib/data/casinos";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import CasinoListSection from "@/components/sections/CasinoListSection";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import Link from "next/link";
import { loadArticle } from "@/lib/articles";

const liveArticle = loadArticle("live-casino");

export const metadata: Metadata = {
  title: liveArticle.title,
  description: liveArticle.description,
  alternates: { canonical: absoluteUrl(`${ROUTES.liveCasino}/`) },
};

const benefits = [
  "دلارات حقيقيون مباشرون عبر بث HD",
  "روليت وبلاك جاك وباكارا مباشر",
  "دعم عربي على مدار الساعة",
  "إيداع وسحب سريع بالجنيه المصري",
];

export default function LiveCasinoPage() {
  return (
    <>
      <PageHero
        h1={liveArticle.h1}
        description={liveArticle.intro}
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "كازينو مباشر", href: ROUTES.liveCasino },
        ]}
        benefits={benefits}
      />
      <PageShell>
        <section>
          <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">
            أفضل كازينوهات اللايف للمصريين
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-[#1A1A1A]">
            لماذا تختار كازينو مباشر؟
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { t: "تجربة واقعية", d: "العب مع دلارات حقيقيين في بيئة كازينو حقيقية عبر بث مباشر بجودة HD." },
              { t: "عدالة مضمونة", d: "نتائج الألعاب المباشرة مرئية ومراقبة، لا مولّد أرقام عشوائي مخفي." },
              { t: "تفاعل مباشر", d: "تحدّث مع الدلار والاعبين الآخرين في الوقت الفعلي." },
              { t: "ألعاب متنوعة", d: "روليت أوروبي، بلاك جاك، باكارا، وعجلة الحظ من كبار المزوّدين." },
            ].map((item) => (
              <div key={item.t} className="rounded-xl border border-[#E8E4DA] bg-white p-5">
                <h3 className="mb-2 font-semibold text-[#C8963E]">{item.t}</h3>
                <p className="text-sm text-[#555]">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-center text-sm">
          <Link href={ROUTES.realMoney} className="text-[#C8963E] hover:underline">
            كازينو بمال حقيقي ←
          </Link>
          {" · "}
          <Link href={ROUTES.bonuses} className="text-[#C8963E] hover:underline">
            أفضل البونصات ←
          </Link>
        </p>
      </PageShell>
      <ArticleBodyLoader kind="liveCasino" />
    </>
  );
}
