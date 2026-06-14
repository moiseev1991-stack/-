import type { PageSeoBundle } from "@/lib/types/page";
import { ROUTES } from "@/lib/routes";
import type { FaqItem } from "@/lib/types/casino";
import { loadArticle } from "@/lib/articles";

const article = loadArticle("new");

export const newCasinosBundle: PageSeoBundle = {
  meta: {
    title: article.title,
    description: article.description,
    canonicalPath: `${ROUTES.newCasinos}/`,
  },
  hero: {
    h1: article.h1,
    description: article.intro,
    breadcrumb: [
      { label: "الرئيسية", href: ROUTES.home },
      { label: "كازينو جديد", href: ROUTES.newCasinos },
    ],
    benefits: [
      "تمييز العروض الترحيبية دون إخفاء شروط الرهان",
      "ربط بصفحة المال الحقيقي لمقارنة نضج المنصات",
      "أسئلة شائعة حول أمان المواقع الحديثة",
    ],
    cta: {
      label: "كازينوهات المال الحقيقي",
      href: ROUTES.realMoney,
    },
  },
  faq: [
    {
      question: "هل الكازينو الجديد آمن؟",
      answer:
        "الترخيص من جهة معترف بها والشفافية في الشروط مؤشران قويان. تجنب المواقع غير المرخصة.",
    },
    {
      question: "لماذا تقدم الكازينوهات الجديدة بونصاً أكبر؟",
      answer:
        "لجذب لاعبين جدد في سوق تنافسي. اقرأ دائماً شروط الرهان والألعاب المشمولة.",
    },
    {
      question: "هل أفضل من الكازينو القديم؟",
      answer:
        "ليس دائماً: القديم قد يكون أكثر استقراراً في الدفع والدعم. قارن حسب أولوياتك.",
    },
    {
      question: "كيف أربط هذا بسرعة السحب؟",
      answer:
        "بعد اختيار كازينو جديد، راجع صفحة أسرع سحب لمعرفة المواقع التي تصرف بسرعة أكبر.",
    },
  ] satisfies FaqItem[],
};

export const newCasinoReasons = [
  {
    icon: "new_bonus",
    title: "مكافآت إطلاق تنافسية",
    text: "عروض ترحيب مصممة لجذب اللاعبين مع شروط يجب قراءتها بدقة.",
  },
  {
    icon: "new_content",
    title: "محتوى حديث",
    text: "تكامل أسرع مع مزودي ألعاب جدد وعناوين حديثة.",
  },
  {
    icon: "new_ui",
    title: "واجهات عصرية",
    text: "تجربة مستخدم محسّنة للموبايل والتصفح السريع.",
  },
  {
    icon: "new_security",
    title: "معايير أمان محدثة",
    text: "بروتوكولات تشفير وتحقق متوافقة مع التوقعات الحالية.",
  },
];

export const newCasinoChecklist = [
  "ترخيص واضح من جهة تنظيمية معروفة",
  "شروط مكافأة مفهومة ومدة سريان معقولة",
  "تنوع في الألعاب ومن مزودين موثوقين",
  "طرق دفع تناسب اللاعبين في المنطقة",
  "دعم عملاء يستجيب خلال ساعات وليس أياماً",
];
