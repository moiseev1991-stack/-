import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("betting");
const canonical = absoluteUrl(`${ROUTES.betting}/`);

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

export default function BettingPage() {
  return (
    <HubSkeleton
      hero={{
        h1: article.h1,
        description: article.intro,
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "مواقع المراهنات", href: ROUTES.betting },
        ],
        benefits: [
          "مقارنة شفافة للترخيص والأسواق",
          "تركيز على طرق الدفع المتاحة محلياً",
          "نصائح للمراهنة المسؤولة",
        ],
        cta: {
          label: "اكتشف تطبيقات المراهنات",
          href: ROUTES.bettingApps,
        },
      }}
      topCasinosTitle="أفضل مواقع مراهنات للاعبين من مصر"
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "هل المراهنة الرياضية قانونية في مصر؟",
          answer:
            "ينظّم اللعب في مصر قوانين محلية متشددة. يلجأ كثير من اللاعبين إلى مواقع دولية مرخّصة من خارج البلاد. تحقق دائماً من القوانين المحلية قبل التسجيل.",
        },
        {
          question: "هل أستطيع الإيداع بفودافون كاش في مواقع المراهنات؟",
          answer:
            "بعض المواقع تدعم فودافون كاش مباشرة أو عبر بوابات وسيطة. راجع دليلنا لفودافون كاش لمعرفة المنصات المتوافقة.",
        },
      ]}
    />
  );
}
