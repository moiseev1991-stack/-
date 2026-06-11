import type { Metadata } from "next";
import HubSkeleton from "@/components/internal/HubSkeleton";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const TITLE = "لعبة الطيارة Aviator 2026 | الشرح وأفضل المواقع";
const DESCRIPTION =
  "كل ما تريد معرفته عن لعبة الطيارة Aviator: آلية اللعب، RTP، استراتيجيات، وأفضل المواقع التي تقدّمها للاعبين من مصر.";
const canonical = absoluteUrl(`${ROUTES.aviator}/`);

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

export default function AviatorPage() {
  return (
    <HubSkeleton
      hero={{
        h1: "لعبة الطيارة — كيف تلعب وأين",
        description:
          "Aviator (لعبة الطيارة) لعبة كراش من Spribe — رهان واحد ومضاعف ينمو حتى تسحب. شرح الآلية، RTP، ونصائح للحدود.",
        breadcrumb: [
          { label: "الرئيسية", href: "/" },
          { label: "لعبة الطيارة", href: ROUTES.aviator },
        ],
        benefits: [
          "شرح آلية كراش-قيمز خطوة بخطوة",
          "RTP رسمي ونصائح إدارة الرصيد",
          "مواقع موثوقة تقدّم Aviator",
        ],
        cta: {
          label: "ألعاب قمار بمال حقيقي",
          href: ROUTES.gamblingGames,
        },
      }}
      topCasinosTitle="أفضل المواقع التي تقدّم Aviator"
      faq={[
        {
          question: "ما RTP لعبة الطيارة Aviator؟",
          answer:
            "RTP الرسمي للعبة Aviator من Spribe حوالي 97%. هذا متوسط نظري على المدى الطويل، وليس ضمانة للجلسة الواحدة.",
        },
        {
          question: "هل توجد استراتيجية مضمونة للفوز؟",
          answer:
            "لا. لعبة الطيارة لعبة حظ بحت بنتائج موّلدة عشوائياً ومحققة من جهات تدقيق مستقلة. ضع حدوداً واضحة للخسارة والربح.",
        },
      ]}
    />
  );
}
