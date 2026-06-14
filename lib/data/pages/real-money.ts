import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";
import { loadArticle } from "@/lib/articles";

const article = loadArticle("real-money");

export const realMoneyPageBundle: PageSeoBundle = {
  meta: {
    title: article.title,
    description: article.description,
    canonicalPath: `${ROUTES.realMoney}/`,
  },
  hero: {
    h1: article.h1,
    description: article.intro,
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "كازينو بالمال الحقيقي", href: ROUTES.realMoney },
    ],
    benefits: [
      "جدول مقارنة شامل للكازينوهات",
      "روابط لطرق الدفع والسحب السريع",
      "تذكير دائم بالمقامرة المسؤولة",
    ],
    cta: {
      label: "كازينوهات جديدة",
      href: ROUTES.newCasinos,
    },
  },
  faq: [
    {
      question: "كيف أبدأ بلعب آمن بمال حقيقي؟",
      answer:
        "اختر كازينو مرخّصاً، اقرأ شروط البونص، ابدأ بإيداع صغير، واستخدم أدوات الحد إن توفرت.",
    },
    {
      question: "ما أسرع طريقة لاستلام الأرباح؟",
      answer:
        "راجع صفحة أسرع سحب وصفحة طرق الدفع لمعرفة الخيارات المناسبة لبلدك وحسابك.",
    },
    {
      question: "هل يمكن الجمع بين البونص والألعاب المفضلة؟",
      answer:
        "يعتمد على شروط العرض؛ بعض البونصات تستثني ألعاباً معينة أو ترفع متطلبات الرهان.",
    },
  ] satisfies FaqItem[],
};

export const realMoneyHighlights = [
  {
    icon: "rm_bonus",
    title: "المكافآت",
    text: "قارن نسبة الترحيب ومدة الصلاحية ومتطلبات الرهان قبل القبول.",
  },
  {
    icon: "rm_payment",
    title: "الدفع والسحب",
    text: "تأكد من توفر طريقة إيداع وسحب مناسبة لك دون مفاجآت في الرسوم.",
  },
  {
    icon: "rm_shield",
    title: "الترخيص والأمان",
    text: "الترخيص من جهة معترف بها خطوة أساسية قبل أي إيداع.",
  },
];

export const gettingStartedSteps = [
  "اختر كازينو من الجدول أو البطاقات أعلاه",
  "أنشئ حساباً وقدّم وثائق التحقق عند الطلب",
  "أودع مبلغاً ضمن ميزانيتك واقبل البونص فهم شروطه",
  "العب بوعي وخذ استراحات؛ القمار ترفيه وليس دخلًا مضمونًا",
];
