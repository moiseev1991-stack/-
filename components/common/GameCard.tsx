import type { GameItem } from "@/lib/types/casino";

const CATEGORY_LABEL: Record<string, string> = {
  slots: "سلوتس",
  roulette: "روليت",
  blackjack: "بلاك جاك",
  poker: "بوكر",
  live: "مباشر",
};

interface Props {
  game: GameItem;
}

export default function GameCard({ game }: Props) {
  const cfg = game.previewCfg ?? {};
  const fit = cfg.fit ?? "cover";
  const position = cfg.objectPosition ?? "center";
  const previewBg = cfg.bg ?? "#0f0f14";
  const overlay =
    cfg.overlay ??
    (fit === "contain"
      ? "none"
      : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 50%, transparent 100%)");

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
      style={{
        border: "1px solid #e5e0d8",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 0 0 0 transparent",
      }}
    >
      {/* ── PREVIEW AREA 16/9 ── */}
      <div
        className="relative w-full overflow-hidden rounded-t-2xl"
        style={{ aspectRatio: "16 / 9", background: previewBg }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.image}
          alt={game.nameAr}
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: fit,
            objectPosition: position,
          }}
          className="transition-transform duration-500 group-hover:scale-[1.06]"
        />

        {/* Gradient overlay — bottom fade for cover mode */}
        {overlay !== "none" && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: overlay }}
          />
        )}

        {/* Category pill — top-end corner (RTL-aware) */}
        <div className="absolute end-2.5 top-2.5">
          <span
            className="inline-flex items-center rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wide"
            style={{
              background: "rgba(0,0,0,0.52)",
              color: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {CATEGORY_LABEL[game.category] ?? game.category}
          </span>
        </div>

        {/* Free badge — top-start */}
        <div className="absolute start-2.5 top-2.5">
          <span
            className="inline-flex items-center rounded-full px-2.5 py-[3px] text-[10px] font-bold"
            style={{
              background: "rgba(16,185,129,0.85)",
              color: "#fff",
              backdropFilter: "blur(6px)",
            }}
          >
            مجاني
          </span>
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        {/* Title + provider */}
        <div className="mb-4 min-w-0">
          <h3
            className="truncate font-bold leading-snug text-[#111]"
            style={{ fontSize: 15 }}
            title={game.nameAr}
          >
            {game.nameAr}
          </h3>
          <p
            className="mt-0.5 truncate font-medium"
            style={{ fontSize: 11, color: "#aaa" }}
          >
            {game.provider}
          </p>
        </div>

        {/* Actions — push to bottom */}
        <div className="mt-auto flex flex-col gap-2">
          {/* Primary CTA */}
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-xl font-bold text-white transition-colors hover:bg-[#0ea572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
            style={{
              background: "#10B981",
              minHeight: 42,
              fontSize: 13,
              letterSpacing: "0.01em",
            }}
          >
            العب مجاناً
          </button>

          {/* Secondary CTA */}
          <a
            href="#"
            className="flex w-full items-center justify-center gap-1 rounded-xl border font-semibold transition-colors hover:border-[#C8963E] hover:text-[#C8963E]"
            style={{
              minHeight: 38,
              fontSize: 12,
              color: "#888",
              borderColor: "#e5e0d8",
              textDecoration: "none",
            }}
          >
            العب بمال حقيقي
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
              style={{ flexShrink: 0 }}
            >
              <path
                d="M4.5 9L7.5 6L4.5 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
