import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";
import { loadArticle } from "@/lib/articles";

const article = loadArticle("apps");

export const appsPageBundle: PageSeoBundle = {
  meta: {
    title: article.title,
    description: article.description,
    canonicalPath: `${ROUTES.apps}/`,
  },
  hero: {
    h1: article.h1,
    description: article.intro,
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "تطبيقات الكازينو", href: ROUTES.apps },
    ],
    benefits: [
      "مقارنة كازينوهات مع جدول تفصيلي",
      "خطوات تثبيت آمنة لأنظمة مختلفة",
      "ربط مباشر بقسم سلوتس الموبايل",
    ],
    cta: {
      label: "سلوتس الموبايل",
      href: ROUTES.slotsMobile,
    },
  },
  faq: [
    {
      question: "هل تنزيل التطبيق إلزامي؟",
      answer:
        "لا، معظم الكازينوهات تعمل عبر المتصفح. التطبيق اختياري لمن يفضل أيقونة على الشاشة.",
    },
    {
      question: "كيف أتأكد أن التطبيق أصلي؟",
      answer:
        "حمّل من الموقع الرسمي أو المتجر المعتمد؛ تجنب روابط غير معروفة من رسائل البريد.",
    },
    {
      question: "هل نفس الحساب على التطبيق والويب؟",
      answer:
        "عادةً نعم لنفس الكازينو؛ الرصيد والمكافآت تتبع سياسة المشغّل.",
    },
  ] satisfies FaqItem[],
};

export const appInstallSteps = [
  "اختر كازينو من قائمتنا الموصى بها",
  "افتح رابط التنزيل الرسمي (iOS أو Android)",
  "اتبع تعليمات التثبيت وتفعيل المصادر الموثوقة عند الحاجة",
  "سجّل حساباً وأكمل التحقق ثم استفد من العرض الترحيبي إن رغبت",
];

export const appReviewCriteria = [
  { title: "مصدر التطبيق", text: "هل التنزيل من موقع رسمي أو متجر معتمد؟" },
  { title: "الأذونات", text: "هل يطلب صلاحيات معقولة فقط؟" },
  { title: "التحديثات", text: "هل يُصانى التطبيق بانتظام؟" },
  { title: "الدعم", text: "هل يتوفر دعم داخل التطبيق أو عبر الدردشة؟" },
];

export const appVsBrowser = {
  app: [
    ["✓", "وصول سريع من الشاشة الرئيسية"],
    ["✓", "تجربة لمس محسّنة أحياناً"],
    ["✗", "يحتاج مساحة وتحديثات"],
  ],
  browser: [
    ["✓", "لا تثبيت"],
    ["✓", "يعمل على أي جهاز حديث"],
    ["✗", "أقل تخصيصاً من تطبيق مخصص"],
  ],
};
