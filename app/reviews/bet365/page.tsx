import type { Metadata } from "next";
import BrandReviewSkeleton from "@/components/internal/BrandReviewSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { reviewPublicPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const SLUG = "bet365";
const BRAND = "Bet365";
const article = loadArticle("bet365");
const canonical = absoluteUrl(reviewPublicPath(SLUG));

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical },
  openGraph: {
    locale: "ar_EG",
    type: "article",
    title: article.title,
    description: article.description,
    url: canonical,
  },
};

export default function Bet365ReviewPage() {
  return (
    <BrandReviewSkeleton
      slug={SLUG}
      brandName={BRAND}
      metaTitle={article.title}
      metaDescription={article.description}
      h1={article.h1}
      intro={article.intro}
      highlights={[
        { label: "السمعة", value: "عالمية" },
        { label: "البث المباشر", value: "متوفّر" },
        { label: "تطبيق", value: "Android · iOS" },
      ]}
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "هل يقبل Bet365 اللاعبين من مصر؟",
          answer:
            "سياسة Bet365 تختلف حسب بلد الإقامة. كثيراً ما يُقيَّد التسجيل من مصر. تحقق من التوافر مباشرة على الصفحة الرسمية، ولا تستخدم وسائل ملتوية لتجاوز قيود الإقامة.",
        },
        {
          question: "ما البدائل الممكنة إن لم يكن Bet365 متاحاً؟",
          answer:
            "راجع مواقع المراهنات الدولية التي تقبل اللاعبين من مصر مثل 1xbet وMelbet وغيرها — نقارنها في صفحة مواقع المراهنات لدينا.",
        },
      ]}
    />
  );
}
