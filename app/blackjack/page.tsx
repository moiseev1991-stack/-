import type { Metadata } from "next";
import { casinoList } from "@/lib/data/casinos";
import { gamesList } from "@/lib/data/games";
import InnerLayout from "@/components/layout/InnerLayout";
import CasinoListSection from "@/components/sections/CasinoListSection";
import FreeGamesSection from "@/components/sections/FreeGamesSection";
import FaqSection from "@/components/sections/FaqSection";
import SectionTitle from "@/components/common/SectionTitle";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import { loadArticle } from "@/lib/articles";

const blackjackArticle = loadArticle("blackjack");

export const metadata: Metadata = {
  title: blackjackArticle.title,
  description: blackjackArticle.description,
  alternates: { canonical: absoluteUrl(`${ROUTES.blackjack}/`) },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما هي الاستراتيجية الأساسية للبلاك جاك؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الاستراتيجية الأساسية هي جدول يحدد القرار الأمثل بناءً على بطاقاتك وبطاقة الدلار. تطبيقها يقلل ميزة الكازينو إلى أقل من 0.5%.",
      },
    },
  ],
};

const faq = [
  {
    question: "ما هي الاستراتيجية الأساسية للبلاك جاك؟",
    answer: "الاستراتيجية الأساسية هي جدول يحدد القرار الأمثل بناءً على بطاقاتك وبطاقة الدلار. تطبيقها يقلل ميزة الكازينو إلى أقل من 0.5%.",
  },
  {
    question: "ما هو بلاك جاك اللايف ديلر؟",
    answer: "بلاك جاك اللايف ديلر يتيح اللعب مع دلار حقيقي عبر بث مباشر، مما يوفر تجربة الكازينو الواقعي من المنزل.",
  },
  {
    question: "هل يمكنني اللعب بجنيهات مصرية؟",
    answer: "نعم، بعض الكازينوهات تقبل الجنيه المصري. بديلاً يمكنك استخدام بطاقات Visa أو Mastercard الصادرة من البنوك المصرية.",
  },
];

const strategy = [
  { title: "Stand (وقف)", desc: "إذا كان مجموعك 17 أو أكثر. وقف على 12-16 إذا كانت بطاقة الدلار 4-6." },
  { title: "Hit (سحب)", desc: "إذا كان مجموعك 8 أو أقل. سحب على 12-16 إذا كانت بطاقة الدلار 7 أو أكثر." },
  { title: "Double Down (مضاعفة)", desc: "ضاعف رهانك على 11، وعلى 10 إذا كانت بطاقة الدلار 9 أو أقل." },
];

export default function BlackjackPage() {
  const bjGames = gamesList.filter((g) => g.category === "blackjack" || g.category === "live");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <InnerLayout
        h1={blackjackArticle.h1}
        description={blackjackArticle.intro}
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "بلاك جاك", href: ROUTES.blackjack },
        ]}
      >
        <section className="py-6">
          <SectionTitle
            title="الاستراتيجية الأساسية للبلاك جاك"
            subtitle="تطبيقها يقلل ميزة الكازينو إلى أقل من 0.5%"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strategy.map((s, i) => (
              <div key={i} className="bg-white border border-[#E8E4DA] rounded-xl p-4">
                <h3 className="text-sm font-semibold text-[#C8963E] mb-2">{s.title}</h3>
                <p className="text-xs text-[#555]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <FreeGamesSection games={bjGames.length ? bjGames : gamesList.slice(0, 4)} />
        <CasinoListSection casinos={casinoList} title="أفضل الكازينوهات لألعاب البلاك جاك" />
        <FaqSection items={faq} title="أسئلة شائعة حول البلاك جاك" />
      </InnerLayout>
      <ArticleBodyLoader kind="blackjack" />
    </>
  );
}
