import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const TITLE = "أفضل برامج وتطبيقات المراهنات 2026 | تحميل Android وiOS";
const DESCRIPTION =
  "تطبيقات مراهنات لمستخدمي مصر: Android (APK) وiOS، خطوات التثبيت، الأمان، وتجربة الاستخدام مقارنة بالمتصفح.";
const canonical = absoluteUrl(`${ROUTES.bettingApps}/`);

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

export default function BettingAppsPage() {
  return (
    <HubSkeleton
      hero={{
        h1: "برنامج مراهنات — أفضل التطبيقات في مصر",
        description:
          "قارن أفضل تطبيقات المراهنات الرياضية: تجربة المستخدم، توافر التطبيق على Android (APK) وiOS، الأمان وسهولة الإيداع/السحب.",
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "تطبيقات المراهنات", href: ROUTES.bettingApps },
        ],
        benefits: [
          "تطبيقات رسمية فقط — تجنب APK مزيف",
          "خطوات تثبيت آمنة على Android وiOS",
          "مقارنة الأداء مع نسخة المتصفح",
        ],
        cta: {
          label: "اكتشف مواقع المراهنات",
          href: ROUTES.betting,
        },
      }}
      topCasinosTitle="مواقع لها تطبيقات مراهنات موصى بها"
      faq={[
        {
          question: "هل تطبيقات المراهنات أأمن من المتصفح؟",
          answer:
            "التطبيقات الرسمية من المتاجر أو من الموقع الرسمي للمشغّل أكثر استقراراً وحماية من الإصدارات غير الموثوقة. تجنّب ملفات APK من مصادر مجهولة.",
        },
        {
          question: "هل تطبيقات Android متاحة على Google Play؟",
          answer:
            "تقييد Google Play لتطبيقات المراهنات يختلف حسب البلد. كثير من المواقع تقدّم تنزيل APK رسمي من موقعها الرسمي مع تعليمات تثبيت آمنة.",
        },
      ]}
    />
  );
}
