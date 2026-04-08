"use client";

import { useEffect, useState } from "react";
import { mdToHtml } from "@/lib/utils/markdown";

/** Loads markdown on the client only — avoids huge RSC props during static export. */
export type ArticleBodyLoaderKind =
  | "home"
  | "blackjack"
  | "bonuses"
  | "liveCasino"
  | "apps"
  | "slotsMobile"
  | "payment"
  | "realMoney"
  | "newCasino"
  | "roulette"
  | "fastWithdrawal"
  | "freeGames"
  | "casinoGames"
  | "slots"
  | "noVerification";

async function loadMarkdown(kind: ArticleBodyLoaderKind): Promise<string> {
  switch (kind) {
    case "home":
      return (await import("@/lib/content/home")).homeContent;
    case "blackjack":
      return (await import("@/lib/content/blackjack")).blackjackContent;
    case "bonuses":
      return (await import("@/lib/content/bonuses")).bonusesContent;
    case "liveCasino":
      return (await import("@/lib/content/live-casino")).liveCasinoContent;
    case "apps":
      return (await import("@/lib/content/apps")).appsContent;
    case "slotsMobile":
      return (await import("@/lib/content/slots-mobile")).slotsMobileContent;
    case "payment":
      return (await import("@/lib/content/payment")).paymentContent;
    case "realMoney":
      return (await import("@/lib/content/real-money")).realMoneyContent;
    case "newCasino":
      return (await import("@/lib/content/new-casino")).newCasinoContent;
    case "roulette":
      return (await import("@/lib/content/roulette")).rouletteContent;
    case "fastWithdrawal":
      return (await import("@/lib/content/fast-withdrawal")).fastWithdrawalContent;
    case "freeGames":
      return (await import("@/lib/content/free-games")).freeGamesContent;
    case "casinoGames":
      return (await import("@/lib/content/casino-games")).casinoGamesContent;
    case "slots":
      return (await import("@/lib/content/slots")).slotsContent;
    case "noVerification":
      return (await import("@/lib/content/no-verification")).noVerificationContent;
    default: {
      const _x: never = kind;
      return _x;
    }
  }
}

export default function ArticleBodyLoader({ kind }: { kind: ArticleBodyLoaderKind }) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadMarkdown(kind).then((raw) => {
      if (!cancelled) setHtml(mdToHtml(raw));
    });
    return () => {
      cancelled = true;
    };
  }, [kind]);

  return (
    <section
      dir="rtl"
      className="px-4 py-14"
      style={{ background: "#fff", borderTop: "1px solid #ede8df" }}
    >
      {html ? (
        <div
          className="mx-auto max-w-4xl article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div
          className="mx-auto max-w-4xl article-body min-h-[min(40vh,24rem)]"
          aria-busy="true"
        />
      )}
    </section>
  );
}
