/**
 * App directories use ASCII paths (Next 16 static export fails on Unicode `app/` segments).
 * These ROUTES values are the public-facing Arabic URLs — they resolve to the aliased
 * directories created by scripts/add-arabic-aliases.mjs during the build.
 */
export function encodeRoutePath(path: string): string {
  if (path === "/") return "/";
  return encodeURI(path);
}

export const ROUTES = {
  home: "/",
  payment: "/طرق-الدفع",
  paymentFastest: "/اسرع-سحب",
  slots: "/سلوتس",
  slotsMobile: "/سلوتس-موبايل",
  newCasinos: "/كازينو-جديد",
  roulette: "/روليت",
  apps: "/تطبيقات",
  games: "/العاب-كازينو",
  realMoney: "/كازينو-حقيقي",
  liveCasino: "/كازينو-مباشر",
  bonuses: "/بونص-ترحيب",
  noVerification: "/بدون-توثيق",
  blackjack: "/بلاك-جاك",
  freeGames: "/العاب-مجانية",
} as const;
