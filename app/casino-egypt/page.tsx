import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("casino-egypt");
const canonical = absoluteUrl(`${ROUTES.casinoEgypt}/`);
const TITLE = "كازينو مصر 2026 | أفضل الكازينوهات للاعبين المصريين";
const DESCRIPTION =
  "دليل كازينو أونلاين في مصر: مواقع تقبل الجنيه، طرق دفع محلية، مكافآت ترحيبية موثوقة وسحب سريع.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    locale: "ar_EG",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: canonical,
  },
};

export default function CasinoEgyptPage() {
  return (
    <HubSkeleton
      hero={{
        h1: "كازينو مصر — دليل الكازينوهات أونلاين",
        description:
          "اخترنا أفضل الكازينوهات للاعبين من مصر: قبول الجنيه المصري، فودافون كاش، تطبيقات Android وiOS، ودعم عربي.",
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
