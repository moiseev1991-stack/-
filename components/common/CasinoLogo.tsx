import type { CSSProperties } from "react";
import { getCasinoLogoOverride } from "@/lib/data/casino-logo-overrides";
import type { CasinoLogoVariant } from "@/lib/types/casino-logo";

interface Props {
  casinoId: string;
  src: string;
  alt: string;
  /** Display name (tooltip / future use); falls back to alt */
  name?: string;
  variant: CasinoLogoVariant;
  className?: string;
}

const variantInner: Record<
  CasinoLogoVariant,
  { wrap: string; inner: string; img: string }
> = {
  card: {
    wrap: "mx-auto mb-3 mt-6 w-full max-w-[16.5rem]",
    inner:
      "flex h-[6.25rem] min-h-[6.25rem] w-full min-w-0 items-center justify-center overflow-hidden rounded-xl border border-[#E8E4DA] bg-[#FAFAF8] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
    img: "block h-auto max-h-full w-auto max-w-full object-contain object-center align-middle",
  },
  featured: {
    wrap: "mx-auto mb-3 mt-6 w-full max-w-[18rem]",
    inner:
      "flex h-[7.25rem] min-h-[7.25rem] w-full min-w-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[#E5D9C8] bg-gradient-to-b from-[#FCFAF6] to-[#F3EFE8] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]",
    img: "block h-auto max-h-full w-auto max-w-full object-contain object-center align-middle",
  },
  table: {
    wrap: "flex shrink-0 self-center",
    inner:
      "flex h-16 w-[10.25rem] min-h-16 min-w-[10.25rem] max-w-[10.25rem] items-center justify-center overflow-hidden rounded-lg border border-[#E8E4DA] bg-[#FAFAF8] px-2 py-2 sm:h-[4.5rem] sm:w-[11.25rem] sm:min-h-[4.5rem] sm:min-w-[11.25rem] sm:max-w-[11.25rem]",
    img: "block h-auto max-h-full w-auto max-w-full object-contain object-center align-middle",
  },
  blacklist: {
    wrap: "mb-4 w-full",
    inner:
      "flex h-16 w-full max-w-[240px] min-h-16 items-center justify-center overflow-hidden rounded-lg border border-red-100/90 bg-white/90 px-3 py-2.5 shadow-sm sm:h-[4.25rem]",
    img: "block h-auto max-h-full w-auto max-w-full object-contain object-center align-middle",
  },
};

export default function CasinoLogo({
  casinoId,
  src,
  alt,
  name,
  variant,
  className = "",
}: Props) {
  const o = getCasinoLogoOverride(casinoId);
  const v = variantInner[variant];

  const innerStyle: CSSProperties = {
    ...(o.background ? { background: o.background } : {}),
    ...(o.paddingPx != null ? { padding: o.paddingPx } : {}),
  };

  const innerClass =
    o.paddingPx != null ? `${v.inner} !p-0` : v.inner;

  const imgStyle: CSSProperties = {
    objectPosition: o.objectPosition ?? "center center",
    maxWidth: o.maxWidthPct != null ? `${o.maxWidthPct}%` : "100%",
    maxHeight: o.maxHeightPct != null ? `${o.maxHeightPct}%` : "100%",
    transform: o.scale != null && o.scale !== 1 ? `scale(${o.scale})` : undefined,
    transformOrigin: "center center",
  };

  const imgClass = [v.img, o.invert ? "invert" : ""].filter(Boolean).join(" ");

  return (
    <div className={`${v.wrap} ${className}`.trim()} title={name ?? alt}>
      <div className={`${innerClass} min-w-0`} style={innerStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={imgClass}
          style={imgStyle}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
