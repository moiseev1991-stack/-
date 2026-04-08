import InternalHeroBackdrop, {
  DEFAULT_INTERNAL_HERO_BACKDROP,
} from "@/components/internal/InternalHeroBackdrop";
import HeroPromoCard from "@/components/common/HeroPromoCard";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface HeroInnerProps {
  h1: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
}

export default function HeroInner({ h1, description, breadcrumb }: HeroInnerProps) {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-12 md:py-16">
        <InternalHeroBackdrop variant={DEFAULT_INTERNAL_HERO_BACKDROP} />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
            {/* Text column */}
            <div>
              <h1
                className="mb-2 text-3xl font-bold text-white md:text-4xl"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.45)" }}
              >
                {h1}
              </h1>
              <p className="text-sm text-[#A0A0A0]">{description}</p>
            </div>

            {/* Promo card */}
            <HeroPromoCard />
          </div>
        </div>
      </section>
    </>
  );
}
