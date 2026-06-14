import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("gambling-games");
const canonical = absoluteUrl(`${ROUTES.gamblingGames}/`);

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical },
  openGraph: {
    locale: "ar_EG",
    type: "website",
    title: article.title,
    description: article.description,
    url: canonical,
  },
};

export default function GamblingGamesPage() {
  return (
    <HubSkeleton
      hero={{
        h1: article.h1,
        description: article.intro,
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "ألعاب القمار", href: ROUTES.gamblingGames },
        ],
        benefits: [
          "تركيز على المواقع المرخّصة",
          "تنوّع أنواع الألعاب وأسواق RTP",
          "إرشادات اللعب المسؤول والحدود",
        ],
        cta: {
          label: "كازينو بالمال الحقيقي",
          href: ROUTES.realMoney,
        },
      }}
      topCasinosTitle="أفضل مواقع ألعاب القمار"
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "ما الفرق بين السلوتس والطاولات؟",
          answer:
            "السلوتس ألعاب حظ بحتة بنسب RTP معلنة، بينما الطاولات (بلاك جاك، روليت، بوكر) تجمع بين الحظ والقرار. ميزة الكازينو تختلف بحسب اللعبة والإستراتيجية.",
        },
        {
          question: "هل ألعاب اللايف ديلر آمنة؟",
          answer:
            "نعم في المواقع المرخّصة. اللعب يتم مع موزّع حقيقي عبر بث مباشر، والشركات الموزّعة (Evolution وغيرها) خاضعة لتدقيق مستقل.",
        },
      ]}
    />
  );
}
