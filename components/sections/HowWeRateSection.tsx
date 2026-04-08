import Link from "next/link";
import SiteIcon from "@/components/common/SiteIcon";
import SectionTitle from "@/components/common/SectionTitle";
import { ROUTES } from "@/lib/routes";

const blocks: {
  icon: string;
  title: string;
  text: string;
  rating?: string;
  cta?: string;
}[] = [
  {
    icon: "hwr_shield",
    title: "الأمن والحماية",
    text: "نتحقق من الترخيص (مثل MGA وUKGC) وشهادات مثل eCOGRA، وتشفير SSL لحماية البيانات والمدفوعات.",
  },
  {
    icon: "hwr_bonus",
    title: "المكافآت الترحيبية",
    text: "نقيّم نسبة المكافأة والحد الأقصى وشروط الرهان والألعاب المؤهّلة — نبحث عن توازن بين القيمة والوضوح.",
  },
  {
    icon: "hwr_payment",
    title: "إيداع وسحب الأموال",
    text: "نراجع طرق الدفع (بطاقات، محافظ، تحويل) وسرعة السحب وسياسات التحقق من الهوية.",
  },
  {
    icon: "hwr_games",
    title: "تنوع ألعاب المقامرة",
    text: "سلوتس وروليت وبلاك جاك وبوكر ولايف ديلر — مع مراجعة جودة مزودين مثل NetEnt وEvolution.",
    rating: "4.1/5",
    cta: "شاهِد الكازينوهات الموصى بها",
  },
];

export default function HowWeRateSection() {
  return (
    <section className="bg-[#F7F4EE] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="كيف نقوم بالتقييم والمراجعة" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {blocks.map((b, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-[#E8E4DA] bg-white p-5 shadow-sm transition-all hover:border-[#C8963E]/40 hover:shadow-md focus-within:ring-2 focus-within:ring-[#C8963E]/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E8DCC8] bg-gradient-to-b from-[#FDF9F2] to-[#F5EDE0] transition-colors group-hover:border-[#C8963E]/35">
                  <SiteIcon name={b.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">{b.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#555]">{b.text}</p>
              {b.rating && (
                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#F0EDE5] pt-3">
                  <span className="text-sm font-bold text-[#F59E0B]">★ {b.rating}</span>
                  {b.cta && (
                    <Link
                      href={ROUTES.realMoney}
                      className="text-sm font-semibold text-[#C8963E] underline-offset-2 hover:underline"
                    >
                      {b.cta}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
