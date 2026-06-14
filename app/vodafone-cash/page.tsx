import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("vodafone-cash");
const canonical = absoluteUrl(`${ROUTES.vodafoneCash}/`);

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

export default function VodafoneCashPage() {
  return (
    <HubSkeleton
      hero={{
        h1: article.h1,
        description: article.intro,
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "طرق الدفع", href: ROUTES.payment },
          { label: "فودافون كاش", href: ROUTES.vodafoneCash },
        ],
        benefits: [
          "إيداع سريع من المحفظة المصرية",
          "نصائح لتسريع السحب وتجنّب الرفض",
          "روابط لمواقع تقبل فودافون كاش حالياً",
        ],
        cta: {
          label: "أسرع طرق السحب",
          href: ROUTES.paymentFastest,
        },
      }}
      topCasinosTitle="منصات تقبل فودافون كاش"
      contentSlot={<ArticleContent markdown={article.body} />}
      faq={[
        {
          question: "هل كل المواقع تدعم فودافون كاش مباشرة؟",
          answer:
            "لا. بعض المواقع تدعمه مباشرة، وبعضها يتطلب بوابة وسيطة أو محفظة إلكترونية ممولة من فودافون كاش. راجع صفحة الإيداع الرسمية قبل التسجيل.",
        },
        {
          question: "هل السحب عبر فودافون كاش فوري؟",
          answer:
            "غالباً يكون السحب أسرع بعد اكتمال التحقق من الهوية (KYC). الأوقات تختلف حسب المشغّل والبنك الوسيط.",
        },
      ]}
    />
  );
}
