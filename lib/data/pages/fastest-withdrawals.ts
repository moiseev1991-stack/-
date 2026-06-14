import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";
import { loadArticle } from "@/lib/articles";

const article = loadArticle("fastest-withdrawal");

export const fastestWithdrawalsBundle: PageSeoBundle = {
  meta: {
    title: article.title,
    description: article.description,
    canonicalPath: `${ROUTES.paymentFastest}/`,
  },
  hero: {
    h1: article.h1,
    description: article.intro,
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "طرق الدفع", href: ROUTES.payment },
      { label: "أسرع سحب", href: ROUTES.paymentFastest },
    ],
    benefits: [
      "ترتيب الكازينوهات حسب سرعة السحب المعلنة",
      "جدول مقارنة يوضح المكافآت وعدد الألعاب ومعدل الفوز",
      "تحذيرات من مواقع ننصح بتجنبها",
    ],
    cta: {
      label: "دليل طرق الدفع الكامل",
      href: ROUTES.payment,
    },
  },
  faq: [
    {
      question: "ما أسرع كازينو في السحب في مصر؟",
      answer:
        "يختلف حسب طريقة الدفع وحالتك (KYC). الكازينوهات التي تدعم محافظ إلكترونية وعملات رقمية غالباً الأسرع.",
    },
    {
      question: "لماذا يتأخر أول سحب؟",
      answer:
        "غالباً بسبب التحقق من الهوية لأول مرة. بعد الموافقة تصبح الطلبات التالية أسرع.",
    },
    {
      question: "هل توجد رسوم سحب؟",
      answer:
        "بعض الكازينوهات مجانية، والبعض يفرض نسبة أو حداً أدنى. اقرأ الشروط قبل اللعب.",
    },
    {
      question: "كيف أربط هذه الصفحة بدليل الدفع؟",
      answer:
        "ابدأ باختيار طريقة دفع مناسبة في صفحة طرق الدفع، ثم ارجع هنا لمقارنة سرعة صرف الكازينوهات.",
    },
  ] satisfies FaqItem[],
};

export const fastMethods = [
  {
    icon: "fast_wallet",
    title: "المحافظ الإلكترونية",
    names: "Skrill, Neteller",
    time: "أقل من 24 ساعة",
    color: "#10B981",
  },
  {
    icon: "fast_crypto",
    title: "العملات الرقمية",
    names: "Bitcoin, Ethereum",
    time: "1–4 ساعات",
    color: "#C8963E",
  },
  {
    icon: "fast_card",
    title: "بطاقات Visa / Mastercard",
    names: "Visa, Mastercard",
    time: "1–3 أيام",
    color: "#3B82F6",
  },
];

export const withdrawalTips = [
  "أكمل التحقق من الهوية (KYC) مبكراً",
  "فضّل المحافظ الإلكترونية للسحب السريع",
  "استوفِ شروط الرهان قبل طلب السحب",
  "اقرأ حدود السحب اليومية والأسبوعية",
];

export const withdrawalDelayFactors = [
  "التأخر في إرسال وثائق التحقق",
  "طلب السحب أثناء وجود بونص نشط",
  "معالجة الطلبات في أيام العمل فقط",
  "اختيار طريقة دفع بطيئة مثل التحويل البنكي",
];
