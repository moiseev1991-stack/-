import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";

export const slotsMobileBundle: PageSeoBundle = {
  meta: {
    title: "أفضل سلوتس الموبايل في مصر 2026 | iOS وAndroid",
    description:
      "قارن أفضل تجارب السلوتس على الهاتف: تطبيقات، متصفح، وأداء على الشبكات المختلفة.",
    canonicalPath: `${ROUTES.slotsMobile}/`,
  },
  hero: {
    h1: "أفضل سلوتس الموبايل في مصر",
    description:
      "العب السلوتس من أي مكان: عبر تطبيق الكازينو أو المتصفح. نركز على السرعة، الاستقرار، وجودة الواجهة على الشاشات الصغيرة.",
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "السلوتس", href: ROUTES.slots },
      { label: "الموبايل", href: ROUTES.slotsMobile },
    ],
    benefits: [
      "مقارنة كازينوهات بخبرة موبايل قوية",
      "جدول يوضح المكافآت وسرعة السحب",
      "ربط بصفحة التطبيقات لمن يفضل التثبيت الكامل",
    ],
    cta: {
      label: "تطبيقات الكازينو",
      href: ROUTES.apps,
    },
  },
  faq: [
    {
      question: "هل السلوتس على الموبايل مطابقة للكمبيوتر؟",
      answer:
        "نفس الألعاب غالباً، مع واجهة لمس. بعض العناوين محسّنة للهاتف بالكامل.",
    },
    {
      question: "هل أحتاج تطبيقاً أم يكفي المتصفح؟",
      answer:
        "المتصفح كافٍ في أغلب الكازينوهات؛ التطبيق يمنح أحياناً وصولاً أسرع وإشعارات.",
    },
    {
      question: "كيف أحمي حسابي على الموبايل؟",
      answer:
        "فعّل القفل الحيوي على الهاتف، لا تحفظ كلمات المرور على أجهزة مشتركة، واستخدم شبكة موثوقة.",
    },
    {
      question: "أين أجد سلوتس سطح المكتب؟",
      answer:
        "ارجع لصفحة السلوتس العامة لمقارنة أوسع تشمل اللعب من الحاسوب.",
    },
  ] satisfies FaqItem[],
};

export const mobilePlayModes = [
  {
    title: "تطبيق iOS",
    points: ["تجربة سلسة على iPhone وiPad", "تحديثات عبر المتجر عند توفر التطبيق"],
  },
  {
    title: "تطبيق Android",
    points: ["تنزيل APK من الموقع الرسمي أحياناً", "تأكد من السماح للمصادر الموثوقة فقط"],
  },
  {
    title: "المتصفح",
    points: ["لا يشغل مساحة تخزين", "يعمل على معظم الأجهزة الحديثة"],
  },
];

export const topMobileSlotGames = [
  "Starburst",
  "Book of Dead",
  "Sweet Bonanza",
  "Gates of Olympus",
];

export const mobileTips = [
  "استخدم WiFi مستقراً لتقليل انقطاع الدورات",
  "راقب استهلاك البطارية في الجلسات الطويلة",
  "فعّل حدود الإنفاق إن توفرت في الكازينو",
];
