import Link from "next/link";
import type { GameItem } from "@/lib/types/casino";
import GameCard from "@/components/common/GameCard";
import { ROUTES } from "@/lib/routes";

interface Props {
  games: GameItem[];
  /** Max cards shown on homepage; default 6 */
  limit?: number;
}

export default function FreeGamesSection({ games, limit = 6 }: Props) {
  const visible = games.slice(0, limit);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #f9f6f0 0%, #f2ede3 100%)",
        borderTop: "1px solid #ede8df",
        borderBottom: "1px solid #ede8df",
      }}
      className="px-4 py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              className="mb-1 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#C8963E" }}
            >
              العاب مجانية
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#111] md:text-3xl">
              الألعاب المجانية لدينا
            </h2>
            <p className="mt-1.5 text-sm text-[#777]">
              جرّب أفضل الألعاب بدون إيداع أو تسجيل
            </p>
          </div>

          <Link
            href={ROUTES.freeGames}
            className="inline-flex items-center gap-1.5 rounded-full border px-5 py-2 text-sm font-semibold transition-colors hover:border-[#C8963E] hover:text-[#C8963E]"
            style={{
              borderColor: "#ddd8cf",
              color: "#555",
              textDecoration: "none",
            }}
          >
            عرض جميع الألعاب
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 10L8 7L5 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        {games.length > limit && (
          <div className="mt-10 text-center">
            <Link
              href={ROUTES.freeGames}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0ea572]"
              style={{
                background: "#10B981",
                boxShadow: "0 4px 16px rgba(16,185,129,0.3)",
                textDecoration: "none",
              }}
            >
              عرض جميع {games.length} لعبة
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 11L9 8L6 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
