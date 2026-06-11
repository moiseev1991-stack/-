import type { Metadata } from "next";
import { gamesList } from "@/lib/data/games";
import GameCard from "@/components/common/GameCard";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";
import PageShell from "@/components/internal/PageShell";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

const canonical = absoluteUrl(`${ROUTES.freeGames}/`);

export const metadata: Metadata = {
  title: "ألعاب كازينو مجانية 2026 — العب بدون تسجيل | كازينو عربي أونلاين",
  description:
    "ألعاب كازينو مجانية بدون تسجيل أو إيداع: سلوتس، روليت، بلاك جاك. جرّب اللعبة قبل أن تلعب بمال حقيقي.",
  alternates: { canonical },
  openGraph: {
    locale: "ar_EG",
    type: "website",
    title: "ألعاب كازينو مجانية 2026 — العب بدون تسجيل | كازينو عربي أونلاين",
    description:
      "ألعاب كازينو مجانية بدون تسجيل أو إيداع: سلوتس، روليت، بلاك جاك. جرّب اللعبة قبل أن تلعب بمال حقيقي.",
    url: canonical,
  },
};

export default function FreeGamesPage() {
  return (
    <>
      <section
        className="px-6 py-12 text-center"
        style={{
          background: "linear-gradient(160deg, #1c1c1e 0%, #242426 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#C8963E]">
          العاب مجانية
        </p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-white">
          العب مجانًا بدون تسجيل
        </h1>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-[#A0A0A0]">
          جرّب أفضل الألعاب مجاناً — بدون إيداع أو تسجيل
        </p>
      </section>

      <PageShell>
        <section
          className="rounded-xl p-4 md:p-6"
          style={{ background: "#F5F2EC", minHeight: "50vh" }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#1a1a1a]">
              الألعاب المجانية لدينا
            </h2>
            <span className="text-xs font-medium text-[#999]">
              {gamesList.length} لعبة متاحة
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5">
            {gamesList.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
        <ArticleBodyLoader kind="freeGames" />
      </PageShell>
    </>
  );
}
