import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const TITLE = "كازينو ومراهنات فودافون كاش 2026 | إيداع وسحب فوري";
const DESCRIPTION =
  "كازينوهات ومواقع مراهنات تقبل فودافون كاش في مصر: شروط الإيداع، أوقات السحب، الحدود والأمان. اختر منصة متوافقة قبل التسجيل.";
const canonical = absoluteUrl(`${ROUTES.vodafoneCash}/`);

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

export default function VodafoneCashPage() {
  return (
    <HubSkeleton
      hero={{
        h1: "ألعاب قمار بمال حقيقي عبر فودافون كاش",
        description:
          "دليلنا لاستخدام فودافون كاش في كازينو أونلاين ومواقع المراهنات بمصر: شروط الإيداع، حدود السحب، والمواقع المتوافقة.",
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
