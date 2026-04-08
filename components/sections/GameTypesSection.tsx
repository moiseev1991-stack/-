import Link from "next/link";
import SiteIcon from "@/components/common/SiteIcon";
import SectionTitle from "@/components/common/SectionTitle";
import { ROUTES } from "@/lib/routes";

const types = [
  {
    icon: "game_slots",
    title: "لعبة السلوتس",
    text: "من الكلاسيكية ثلاثية البكرات إلى الفيديو سلوتس بمئات الخطوط — ترفيه غني ومعدلات عائد تصل إلى 99%.",
  },
  {
    icon: "game_jackpot",
    title: "سلوتس الجاك بوت التقدمية",
    text: "الجائزة تتراكم مع كل رهان حتى يفوز لاعب محظوظ؛ ألعاب مثل Mega Moolah مشهورة بجوائز بالملايين.",
  },
  {
    icon: "game_videopoker",
    title: "لعبة الفيديو بوكر",
    text: "يمزج استراتيجية البوكر مع بساطة السلوتس؛ مع إتقان الاستراتيجية قد يصل العائد إلى نحو 99.5%.",
  },
  {
    icon: "game_poker",
    title: "لعبة البوكر",
    text: "طاولات Texas Hold'em وOmaha مع لاعبين حقيقيين — مستويات تناسب المبتدئين والمحترفين.",
  },
  {
    icon: "game_blackjack",
    title: "البلاك جاك",
    text: "لعبة مهارة بارزة: الاستراتيجية الأساسية تقلّص ميزة الكازينو إلى أقل من 0.5%.",
  },
  {
    icon: "game_roulette",
    title: "الروليت",
    text: "الأوروبية (ميزة 2.7%) مقابل الأمريكية (5.26%)؛ الفرنسية غالباً أفضل مع قواعد مثل La Partage.",
  },
  {
    icon: "game_live",
    title: "اللايف ديلر",
    text: "ديلر حقيقي وبث مباشر بجودة عالية — تجربة قريبة من الكازينو الأرضي من المنزل.",
  },
  {
    icon: "game_sports",
    title: "الرهان الرياضي",
    text: "بطولات عالمية ومحلية مع أوضاع رهان واضحة وحدود تناسب مختلف الأنماط.",
  },
];

export default function GameTypesSection() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="كازينوهات الإنترنت وألعاب المقامرة" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {types.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E8E4DA] bg-[#FFFCF7] p-5 shadow-sm transition-all hover:border-[#C8963E]/35 hover:shadow-md focus-within:ring-2 focus-within:ring-[#C8963E]/25"
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#E8DCC8] bg-gradient-to-b from-[#FDF9F2] to-[#F5EDE0]">
                  <SiteIcon name={t.icon} size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1.5 text-lg font-bold text-[#1A1A1A]">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-[#555]">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#555]">
          <Link href={ROUTES.games} className="font-semibold text-[#C8963E] hover:underline">
            دليل ألعاب الكازينو
          </Link>
          <span className="text-[#CCC]" aria-hidden>
            ·
          </span>
          <Link href={ROUTES.slots} className="font-semibold text-[#C8963E] hover:underline">
            السلوتس
          </Link>
          <span className="text-[#CCC]" aria-hidden>
            ·
          </span>
          <Link href={ROUTES.roulette} className="font-semibold text-[#C8963E] hover:underline">
            الروليت
          </Link>
        </p>
      </div>
    </section>
  );
}
