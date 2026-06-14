import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("casino-egypt");
const canonical = absoluteUrl(`${ROUTES.casinoEgypt}/`);

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

export default function CasinoEgyptPage() {
  return (
    <HubSkeleton
      hero={{
        h1: article.h1,
        description: article.intro,
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "كازينو مصر", href: ROUTES.casinoEgypt },
        ],
        benefits: [
          "مواقع تقبل اللاعبين من مصر",
          "تنوّع طرق الدفع المحلية والدولية",
          "تركيز على اللعب المسؤول",
        ],
        cta: {
          label: "كازينو بالمال الحقيقي",
          href: ROUTES.realMoney,
        },
      }}
      topCasinosTitle="أفضل الكازينوهات للاعبين المصريين"
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "هل توجد كازينوهات مرخّصة محلياً في مصر؟",
          answer:
            "لا يوجد ترخيص محلي عام لكازينوهات الإنترنت في مصر. يلعب المصريون عادة على مواقع دولية مرخّصة من جزر مالطا أو كوراساو أو جبل طارق.",
        },
        {
          question: "هل أستطيع الإيداع بالجنيه المصري؟",
          answer:
            "بعض الكازينوهات تقبل الجنيه مباشرة، وبعضها يحوّل إلى دولار/يورو. تحقق من سعر الصرف ورسوم العملة قبل الإيداع.",
        },
      ]}
    />
  );
}
