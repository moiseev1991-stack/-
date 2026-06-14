import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";
import { loadArticle } from "@/lib/articles";

const article = loadArticle("roulette");

export const roulettePageBundle: PageSeoBundle = {
  meta: {
    title: article.title,
    description: article.description,
    canonicalPath: `${ROUTES.roulette}/`,
  },
  hero: {
    h1: article.h1,
    description: article.intro,
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "الروليت", href: ROUTES.roulette },
    ],
    benefits: [
      "مقارنة كازينوهات مع جدول تفصيلي",
      "شرح الفروق بين أنواع الروليت الشائعة",
      "روابط لألعاب الكازينو والسلوتس",
    ],
    cta: {
      label: "دليل ألعاب الكازينو",
      href: ROUTES.games,
    },
  },
  faq: [
    {
      question: "أي روليت أفضل للمبتدئين؟",
      answer:
        "الأوروبي أو الفرنسي بقاعدة La Partage يقللان حافة الكازينو مقارنة بالأمريكي.",
    },
    {
      question: "هل يمكن اللعب مجاناً؟",
      answer:
        "كثير من المواقع توفر وضع تجريبي؛ الروليت المباشر يتطلب غالباً رصيداً حقيقياً.",
    },
    {
      question: "ما علاقة الروليت بالسلوتس؟",
      answer:
        "كلاهما في الكازينو أونلاين؛ إن أردت ألعاباً أبسط حظاً جرّب السلوتس من القسم المخصص.",
    },
  ] satisfies FaqItem[],
};

export const rouletteTypes = [
  {
    icon: "roulette_eu",
    title: "الروليت الأوروبية",
    slots: "37 خانة (0–36)",
    edge: "حافة الكازينو: 2.7%",
    note: "خيار متوازن لمعظم اللاعبين",
  },
  {
    icon: "roulette_us",
    title: "الروليت الأمريكية",
    slots: "38 خانة (0، 00، 1–36)",
    edge: "حافة الكازينو: 5.26%",
    note: "حافة أعلى بسبب خانة مزدوجة الصفر",
  },
  {
    icon: "roulette_fr",
    title: "الروليت الفرنسية",
    slots: "37 خانة + قواعد La Partage أحياناً",
    edge: "قد تنخفض حتى ~1.35% على رهانات محددة",
    note: "مناسبة لمن يبحث عن أفضل احتمالات",
  },
  {
    icon: "roulette_live",
    title: "الروليت المباشرة",
    slots: "بث مع موزع حقيقي",
    edge: "تختلف حسب الطاولة",
    note: "تجربة أقرب للكازينو الأرضي",
  },
];

export const rouletteComparisonRows = [
  { type: "الأوروبية", slots: "37", edge: "2.7%", best: "المبتدئين" },
  { type: "الأمريكية", slots: "38", edge: "5.26%", best: "تنوع الطاولات" },
  { type: "الفرنسية", slots: "37", edge: "~1.35% (حسب الرهان)", best: "تحسين الحافة" },
  { type: "المباشرة", slots: "37/38", edge: "متفاوت", best: "التجربة الحية" },
];
