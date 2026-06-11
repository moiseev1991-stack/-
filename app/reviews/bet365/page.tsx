import type { Metadata } from "next";
import BrandReviewSkeleton from "@/components/internal/BrandReviewSkeleton";
import { reviewPublicPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const SLUG = "bet365";
const BRAND = "Bet365";
const TITLE = "مراجعة Bet365 للاعبين العرب 2026";
const DESCRIPTION =
  "مراجعة Bet365 للاعبين العرب: هل يقبل اللاعبين من مصر؟ بدائل ممكنة، طرق الدفع، البث المباشر وسرعة السحب.";
const canonical = absoluteUrl(reviewPublicPath(SLUG));

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    locale: "ar_EG",
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: canonical,
  },
};

export default function Bet365ReviewPage() {
  return (
    <BrandReviewSkeleton
      slug={SLUG}
      brandName={BRAND}
      metaTitle={TITLE}
      metaDescription={DESCRIPTION}
      h1="مراجعة Bet365 — هل يقبل اللاعبين من مصر؟"
      intro="نوضّح حالة Bet365 للاعبين من مصر: قبول التسجيل، البدائل المتاحة، وطرق الدفع المعتمدة. المراجعة التحريرية الكاملة قيد التحضير."
      highlights={[
        { label: "السمعة", value: "عالمية" },
        { label: "البث المباشر", value: "متوفّر" },
        { label: "تطبيق", value: "Android · iOS" },
      ]}
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
