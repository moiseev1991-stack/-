/** App routes use ASCII paths only — Next 16 static export fails prerender on Unicode `app/` segments. */
export function encodeRoutePath(path: string): string {
  if (path === "/") return "/";
  return encodeURI(path);
}

export const ROUTES = {
  home: "/",
  payment: "/payment",
  paymentFastest: "/payment/fastest-withdrawals",
  slots: "/slots",
  slotsMobile: "/slots/mobile",
  newCasinos: "/new",
  roulette: "/roulette",
  apps: "/apps",
  games: "/games",
  realMoney: "/real-money",
  liveCasino: "/live-casino",
  bonuses: "/bonuses",
  noVerification: "/no-verification",
  blackjack: "/blackjack",
  freeGames: "/free-games",
} as const;
