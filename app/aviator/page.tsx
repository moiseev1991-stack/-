import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("aviator");
const canonical = absoluteUrl(`${ROUTES.aviator}/`);

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

export default function AviatorPage() {
  return (
    <HubSkeleton
      hero={{
        h1: article.h1,
        description: article.intro,
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "لعبة الطيارة", href: ROUTES.aviator },
        ],
        benefits: [
          "شرح آلية كراش-قيمز خطوة بخطوة",
          "RTP رسمي ونصائح إدارة الرصيد",
          "مواقع موثوقة تقدّم Aviator",
        ],
        cta: {
          label: "ألعاب قمار بمال حقيقي",
          href: ROUTES.gamblingGames,
        },
      }}
      topCasinosTitle="أفضل المواقع التي تقدّم Aviator"
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "ما RTP لعبة الطيارة Aviator؟",
          answer:
            "RTP الرسمي للعبة Aviator من Spribe حوالي 97%. هذا متوسط نظري على المدى الطويل، وليس ضمانة للجلسة الواحدة.",
        },
        {
          question: "هل توجد استراتيجية مضمونة للفوز؟",
          answer:
            "لا. لعبة الطيارة لعبة حظ بحت بنتائج موّلدة عشوائياً ومحققة من جهات تدقيق مستقلة. ضع حدوداً واضحة للخسارة والربح.",
        },
      ]}
    />
  );
}
