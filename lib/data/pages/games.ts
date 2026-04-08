import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";

export const gamesPageBundle: PageSeoBundle = {
  meta: {
    title: "أفضل ألعاب الكازينو أونلاين في مصر 2026 | دليل الأنواع",
    description:
      "سلوتس، روليت، بلاك جاك، بوكر، وبث مباشر: كيف تختار اللعبة وتقارن الكازينوهات بأمان.",
    canonicalPath: `${ROUTES.games}/`,
  },
  hero: {
    h1: "أفضل ألعاب الكازينو أونلاين في مصر",
    description:
      "من الألعاب البسيطة ذات الحظ إلى الألعاب التي ت rewarding للتعلم مثل البلاك جاك. ابدأ بما يناسب مستواك وحدودك.",
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "ألعاب الكازينو", href: ROUTES.games },
    ],
    benefits: [
      "خريطة روابط لأقسام السلوتس والروليت",
      "جدول مقارنة للكازينوهات",
      "تمييز اللعب التجريبي عن المال الحقيقي",
    ],
    cta: {
      label: "السلوتس",
      href: ROUTES.slots,
    },
  },
  faq: [
    {
      question: "ما أسهل لعبة للمبتدئين؟",
      answer:
        "السلوتس لا تتطلب قواعد معقدة. الروليت بسيطة أيضاً مع فهم أنواع الرهانات.",
    },
    {
      question: "أين أجد الروليت فقط؟",
      answer:
        "صفحة الروليت مخصصة لمقارنة المواقع وشرح الأنواع.",
    },
    {
      question: "هل الألعاب المجانية نفس النتائج؟",
      answer:
        "تستخدم غالباً نفس المحرك لكن بدون ربح أو خسارة حقيقية؛ الهدف التدريب والترفيه.",
    },
  ] satisfies FaqItem[],
};

export const gameCategoryCards = [
  { icon: "cat_slots", title: "السلوتس", count: "آلاف العناوين", href: ROUTES.slots },
  { icon: "cat_blackjack", title: "البلاك جاك", count: "استراتيجية ومهارة", href: ROUTES.blackjack },
  { icon: "cat_roulette", title: "الروليت", count: "أوروبي وأمريكي", href: ROUTES.roulette },
  { icon: "cat_poker", title: "البوكر", count: "أنواع متعددة", href: ROUTES.blackjack },
  { icon: "cat_live", title: "ألعاب الموزعين المباشرين", count: "بث حقيقي", href: ROUTES.liveCasino },
  { icon: "cat_dice", title: "الباكارات وأخرى", count: "تنوع الطاولات", href: ROUTES.realMoney },
];

export const freeVsReal = [
  {
    title: "اللعب المجاني / التجريبي",
    points: [
      "مناسب للتعلم والترفيه",
      "لا مخاطرة مالية مباشرة",
      "قد لا تشمل كل ميزات البونص",
    ],
  },
  {
    title: "اللعب بمال حقيقي",
    points: [
      "إمكانية سحب الأرباح وفق الشروط",
      "يشمل عروض الترحيب عند الاستحقاق",
      "يتطلب إدارة مخاطر ومسؤولية",
    ],
  },
];
