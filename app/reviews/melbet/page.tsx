import type { Metadata } from "next";
import BrandReviewSkeleton from "@/components/internal/BrandReviewSkeleton";
import { reviewPublicPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const SLUG = "melbet";
const BRAND = "Melbet";
const TITLE = "مراجعة Melbet 2026 | بونص، تطبيق، سحب";
const DESCRIPTION =
  "مراجعة Melbet 2026 للاعبين العرب: التسجيل، البونص الترحيبي، التطبيق، الأسواق الرياضية وأوقات السحب.";
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

export default function MelbetReviewPage() {
  return (
    <BrandReviewSkeleton
      slug={SLUG}
      brandName={BRAND}
      metaTitle={TITLE}
      metaDescription={DESCRIPTION}
      h1="مراجعة ميلبيت Melbet"
      intro="نراجع Melbet للاعبين العرب: التسجيل بسرعة، المكافأة الترحيبية وشروط الرهان، تطبيقات Android وiOS، وأوقات السحب الفعلية. النشر التحريري الكامل قيد التحضير."
      highlights={[
        { label: "أسواق الرهان", value: "+1000" },
        { label: "تطبيق", value: "Android · iOS" },
        { label: "البونص الترحيبي", value: "حتى 100%" },
      ]}
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
