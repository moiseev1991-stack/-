import Link from "next/link";
import InternalHeroBackdrop, {
  DEFAULT_INTERNAL_HERO_BACKDROP,
} from "@/components/internal/InternalHeroBackdrop";
import HeroPromoCard from "@/components/common/HeroPromoCard";
import type { PageHeroData } from "@/lib/types/page";

export default function PageHero({
  h1,
  description,
  breadcrumb,
  benefits,
  cta,
}: PageHeroData) {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-12 md:py-16">
        <InternalHeroBackdrop variant={DEFAULT_INTERNAL_HERO_BACKDROP} />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
            {/* Text column */}
            <div className="max-w-xl">
              {breadcrumb && breadcrumb.length > 0 && (
                <nav
                  aria-label="فتات الخبز"
                  className="mb-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-[#C8C8C8]"
                >
                  {breadcrumb.map((item, i) => (
                    <span key={`${item.href}-${i}`} className="flex items-center gap-1.5">
                      {i > 0 && (
                        <span className="select-none text-white/40" aria-hidden>
                          ›
                        </span>
                      )}
                      {i < breadcrumb.length - 1 ? (
                        <Link
                          href={item.href}
                          className="transition-colors hover:text-[#E8B86D]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span aria-current="page" className="font-medium text-[#E8B86D]">
                          {item.label}
                        </span>
                      )}
                    </span>
                  ))}
                </nav>
              )}
              <h1
                className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.45)" }}
              >
                {h1}
              </h1>
              <p className="text-base leading-relaxed text-[#C8C8C8]">{description}</p>
              {benefits && benefits.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {benefits.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[0.9375rem] text-[#E8E8E8]">
                      <span className="mt-0.5 flex-shrink-0 font-bold text-[#C8963E]">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              )}
              {cta && (
                <div className="mt-8">
                  {cta.external ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#10B981] px-8 py-3 text-base font-bold text-white shadow-lg shadow-emerald-950/25 ring-2 ring-[#C8963E]/30 transition-colors hover:bg-[#0EA572]"
                    >
                      {cta.label}
                    </a>
                  ) : (
                    <Link
                      href={cta.href}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#10B981] px-8 py-3 text-base font-bold text-white shadow-lg shadow-emerald-950/25 ring-2 ring-[#C8963E]/30 transition-colors hover:bg-[#0EA572]"
                    >
                      {cta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Promo card */}
            <HeroPromoCard />
          </div>
        </div>
      </section>
    </>
  );
}
