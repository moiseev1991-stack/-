import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";
import { loadArticle } from "@/lib/articles";

const article = loadArticle("slots");

export const slotsPageBundle: PageSeoBundle = {
  meta: {
    title: article.title,
    description: article.description,
    canonicalPath: `${ROUTES.slots}/`,
  },
  hero: {
    h1: article.h1,
    description: article.intro,
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "السلوتس", href: ROUTES.slots },
    ],
    benefits: [
      "قوائم كازينوهات مختبرة مع جدول مقارنة",
      "شرح أنواع السلوتس والمزودين",
      "رابط لسلوتس الموبايل والألعاب الأخرى",
    ],
    cta: {
      label: "سلوتس على الموبايل",
      href: ROUTES.slotsMobile,
    },
  },
  faq: [
    {
      question: "ما أفضل سلوتس للمبتدئين؟",
      answer:
        "ابدأ بسلوتس متوسطة التقلب وRTP معلن فوق 96%. جرّب الوضع التجريبي أولاً.",
    },
    {
      question: "هل السلوتس عادلة؟",
      answer:
        "في المواقع المرخّصة تُختبر مولدات الأرقام العشوائية من جهات مستقلة. العب فقط في كازينوهات موثوقة.",
    },
    {
      question: "ما الفرق بين السلوتس المجانية والحقيقية؟",
      answer:
        "المجانية للتجربة فقط؛ اللعب بمال حقيقي يفتح السحب لكنه يحمل مخاطرة مالية.",
    },
    {
      question: "أين أجد الروليت والألعاب الأخرى؟",
      answer:
        "من صفحة ألعاب الكازينو يمكنك الانتقال إلى الروليت والأقسام الأخرى بسهولة.",
    },
  ] satisfies FaqItem[],
};

export const slotTypes = [
  {
    icon: "slot_classic",
    title: "السلوتس الكلاسيكية",
    text: "3 بكرات وبساطة في القواعد؛ مناسبة لمن يفضل جلسات سريعة.",
  },
  {
    icon: "slot_video",
    title: "سلوتس الفيديو",
    text: "5 بكرات، ميزات بونص، ورسوم غنية؛ الأكثر انتشاراً اليوم.",
  },
  {
    icon: "slot_jackpot",
    title: "الجاك بوت التقدمي",
    text: "جوائز تتراكم مع الرهانات؛ احتمال ضربة كبيرة مع مخاطرة أعلى.",
  },
  {
    icon: "slot_3d",
    title: "سلوتس ثلاثية الأبعاد",
    text: "تجربة بصرية غنية؛ تتطلب جهازاً قوياً على الموبايل.",
  },
];

export const topRtpSlots = [
  { name: "Mega Moolah", provider: "Microgaming", rtp: "96.92%", volatility: "عالي" },
  { name: "Starburst", provider: "NetEnt", rtp: "96.09%", volatility: "منخفض" },
  { name: "Book of Dead", provider: "Play'n GO", rtp: "96.21%", volatility: "عالي" },
  { name: "Gonzo's Quest", provider: "NetEnt", rtp: "96.00%", volatility: "متوسط" },
  { name: "Dead or Alive", provider: "NetEnt", rtp: "96.82%", volatility: "عالي" },
];

export const slotProviders = [
  { name: "NetEnt", note: "تصميم عصري وسلوتس شهيرة" },
  { name: "Microgaming", note: "مكتبة ضخمة وجوائز تقدمية" },
  { name: "Play'n GO", note: "تنوع في المواضيع والميزات" },
  { name: "Pragmatic Play", note: "إصدار أسبوعي وعروض ترويجية" },
];

export const slotBonusesIntro = [
  "مكافآت الترحيب قد تشمل دورات مجانية على سلوتس محددة.",
  "اقرأ شروط الرهان: بعض البونصات تقتصر على سلوتس فقط.",
  "لا تتعامل مع العروض كضمان ربح؛ القمار ترفيه وليس دخلاً.",
];
