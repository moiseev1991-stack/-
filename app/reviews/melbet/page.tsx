import type { Metadata } from "next";
import BrandReviewSkeleton from "@/components/internal/BrandReviewSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { reviewPublicPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const SLUG = "melbet";
const BRAND = "Melbet";
const article = loadArticle("melbet");
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

export default function MelbetReviewPage() {
  return (
    <BrandReviewSkeleton
      slug={SLUG}
      brandName={BRAND}
      metaTitle={article.title}
      metaDescription={article.description}
      h1={article.h1}
      intro={article.intro}
      highlights={[
        { label: "أسواق الرهان", value: "+1000" },
        { label: "تطبيق", value: "Android · iOS" },
        { label: "البونص الترحيبي", value: "حتى 100%" },
      ]}
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "هل يقبل Melbet اللاعبين من الدول العربية؟",
          answer:
            "نعم تاريخياً تقبل Melbet الدولية لاعبين من معظم الدول العربية. تحقق من توافر الخدمة من بلدك على الصفحة الرسمية قبل التسجيل.",
        },
        {
          question: "هل يتوفّر تطبيق Melbet على Google Play؟",
          answer:
            "تطبيق Android غالباً يُنزَّل بصيغة APK من الموقع الرسمي بسبب سياسات Google Play. تطبيق iOS متاح عبر App Store حسب المنطقة.",
        },
      ]}
    />
  );
}
