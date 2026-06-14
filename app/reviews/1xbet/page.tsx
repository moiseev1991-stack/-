import type { Metadata } from "next";
import BrandReviewSkeleton from "@/components/internal/BrandReviewSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { reviewPublicPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const SLUG = "1xbet";
const BRAND = "1xbet";
const article = loadArticle("1xbet");
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

export default function OneXBetReviewPage() {
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
          question: "هل يقبل 1xbet اللاعبين من مصر؟",
          answer:
            "نعم، تاريخياً يقبل 1xbet لاعبين من مصر عبر نسخه الدولية. تحقق دائماً من توافر الخدمة من بلدك على الموقع الرسمي قبل التسجيل.",
        },
        {
          question: "هل يدعم 1xbet فودافون كاش للإيداع؟",
          answer:
            "وفق آخر تحديث متاح، تدعم بعض نسخ 1xbet المحفظة المصرية مباشرة أو عبر بوابات وسيطة. الشروط قد تتغيّر — راجع صفحة الإيداع الرسمية.",
        },
      ]}
    />
  );
}
