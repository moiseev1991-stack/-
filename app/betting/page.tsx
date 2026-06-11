import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const TITLE = "أفضل مواقع المراهنات في مصر 2026 | مراهنات رياضية";
const DESCRIPTION =
  "مواقع مراهنات رياضية تقبل اللاعبين من مصر: مقارنة المكافآت، أسواق الرهان، طرق الدفع وسرعة السحب. اقرأ قبل التسجيل.";
const canonical = absoluteUrl(`${ROUTES.betting}/`);

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

export default function BettingPage() {
  return (
    <HubSkeleton
      hero={{
        h1: "مواقع مراهنات عالمية تقبل اللاعبين من مصر",
        description:
          "دليل عملي لاختيار موقع مراهنات رياضية موثوق: ترخيص، أسواق رهان، عروض، وطرق دفع شائعة في مصر مثل فودافون كاش.",
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
