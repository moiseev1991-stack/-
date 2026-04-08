/**
 * Reusable promo card shown in the right column of hero sections.
 * Displays country badge, key stats, and card suit icons.
 * Hidden on mobile, visible md+.
 */
export default function HeroPromoCard() {
  return (
    <div className="hidden items-start justify-center md:flex md:justify-end">
      <div
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 18,
          boxShadow:
            "0 24px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        className="w-[17rem] max-w-full p-6 text-center"
      >
        {/* Country badge */}
        <div className="mb-5 flex items-center justify-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.13)",
              borderRadius: 999,
              padding: "5px 13px 5px 6px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.28)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/egypt-flag-round.png"
              alt="علم مصر"
              width={28}
              height={28}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                width: 28,
                height: 28,
                flexShrink: 0,
                boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1,
              }}
            >
              EG&nbsp;·&nbsp;مصر
            </span>
          </div>
        </div>

        <p className="mb-2 text-xs font-medium text-[#B8B8B8]">
          أكثر من 8,000 لعبة متاحة
        </p>
        <p className="mb-2 text-3xl font-bold text-[#E8B86D]">100%</p>
        <span className="mb-4 inline-block rounded-full border border-emerald-600/45 bg-emerald-950/50 px-3 py-1 text-xs font-semibold text-emerald-300">
          مرخّص وآمن 100%
        </span>
        <div
          className="mt-4 flex justify-center gap-3 text-2xl leading-none"
          style={{ color: "#C8963E" }}
        >
          <span aria-hidden>♠</span>
          <span aria-hidden>♥</span>
          <span aria-hidden>♦</span>
          <span aria-hidden>♣</span>
        </div>
      </div>
    </div>
  );
}
