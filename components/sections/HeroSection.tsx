import Link from "next/link";
import InternalHeroBackdrop, {
  DEFAULT_INTERNAL_HERO_BACKDROP,
} from "@/components/internal/InternalHeroBackdrop";
import HeroPromoCard from "@/components/common/HeroPromoCard";

interface Props {
  title?: string;
  subtitle?: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroSection({
  title = "أفضل كازينوهات الإنترنت المصرية لعام 2026",
  subtitle = "اكتشف أفضل تجارب القمار أونلاين المتاحة للاعبين المصريين. نراجع ونقيّم مئات الكازينوهات لتختار منها الأفضل.",
  bullets = [
    "مكافآت اشتراك ضخمة كحوافز",
    "إيداع وسحب سريع مع خيارات بنكية متنوعة",
    "خدمة عملاء 7/24 باللغة العربية",
    "ألعاب متنوعة من أفضل مزودي البرامج",
  ],
  ctaText = "استعرض أفضل الكازينوهات",
  ctaHref = "#casino-list",
}: Props) {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <InternalHeroBackdrop variant={DEFAULT_INTERNAL_HERO_BACKDROP} />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-6 lg:gap-8">
          {/* Text */}
          <div className="max-w-xl md:max-w-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(200,150,62,0.55)] bg-white/[0.04] px-3.5 py-1.5">
              <span className="block h-1.5 w-1.5 rounded-full bg-[#C8963E]" />
              <span className="text-xs font-semibold text-[#E8B86D]">
                مصر #1 موقع كازينو موثوق
              </span>
            </div>

            <h1 className="mb-3 text-3xl font-bold leading-[1.2] tracking-tight text-white drop-shadow-sm md:text-4xl lg:text-[2.65rem]">
              {title}
            </h1>
            <p className="mb-6 text-base leading-relaxed text-[#C8C8C8]">{subtitle}</p>

            <ul className="mb-8 space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C8963E]" />
                  <span className="text-[0.9375rem] leading-relaxed text-white/95">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#10B981] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-950/30 ring-2 ring-[#C8963E]/35 transition-colors hover:bg-[#0EA572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8963E]"
            >
              {ctaText}
            </Link>
          </div>

          {/* Promo card */}
          <HeroPromoCard />
        </div>
      </div>
    </section>
  );
}
