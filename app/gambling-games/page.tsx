import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const TITLE = "ألعاب قمار بمال حقيقي 2026 | أفضل مواقع القمار في مصر";
const DESCRIPTION =
  "دليل ألعاب القمار أونلاين بمال حقيقي للاعبين في مصر: سلوتس، روليت، بوكر، بلاك جاك، ولايف ديلر. اختر بأمان ومسؤولية.";
const canonical = absoluteUrl(`${ROUTES.gamblingGames}/`);

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

export default function GamblingGamesPage() {
  return (
    <HubSkeleton
      hero={{
        h1: "ألعاب قمار أونلاين بمال حقيقي",
        description:
          "نختار أفضل مواقع ألعاب القمار للاعبين من مصر — سلوتس، طاولات، لايف ديلر — مع تركيز على الترخيص وسرعة السحب.",
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "ألعاب القمار", href: ROUTES.gamblingGames },
        ],
        benefits: [
          "تركيز على المواقع المرخّصة",
          "تنوّع أنواع الألعاب وأسواق RTP",
          "إرشادات اللعب المسؤول والحدود",
        ],
        cta: {
          label: "كازينو بالمال الحقيقي",
          href: ROUTES.realMoney,
        },
      }}
      topCasinosTitle="أفضل مواقع ألعاب القمار"
      faq={[
        {
          question: "ما الفرق بين السلوتس والطاولات؟",
          answer:
            "السلوتس ألعاب حظ بحتة بنسب RTP معلنة، بينما الطاولات (بلاك جاك، روليت، بوكر) تجمع بين الحظ والقرار. ميزة الكازينو تختلف بحسب اللعبة والإستراتيجية.",
        },
        {
          question: "هل ألعاب اللايف ديلر آمنة؟",
          answer:
            "نعم في المواقع المرخّصة. اللعب يتم مع موزّع حقيقي عبر بث مباشر، والشركات الموزّعة (Evolution وغيرها) خاضعة لتدقيق مستقل.",
        },
      ]}
    />
  );
}
