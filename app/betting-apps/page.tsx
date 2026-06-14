import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import ArticleContent from "@/components/internal/ArticleContent";
import { loadArticle } from "@/lib/articles";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const article = loadArticle("betting-apps");
const canonical = absoluteUrl(`${ROUTES.bettingApps}/`);

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

export default function BettingAppsPage() {
  return (
    <HubSkeleton
      hero={{
        h1: article.h1,
        description: article.intro,
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
      contentSlot={<ArticleContent markdown={article.body} />}
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
