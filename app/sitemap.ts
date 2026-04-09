import type { MetadataRoute } from "next";
import { POLISE_PAGES } from "@/lib/data/polise-pages";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

const reviewSlugs = ["888starz", "spin-casino", "ruby-fortune", "jackpot-city"];

/** Internal ASCII routes that are valid pages but not listed under ROUTES (Arabic public URLs). */
const extraAppRoutes = ["/new-casinos", "/casino-games", "/payment/fast-withdrawal"];

const routes = [
  ...new Set([
    ROUTES.home,
    ...reviewSlugs.map((s) => `/reviews/${s}`),
    ROUTES.realMoney,
    ROUTES.newCasinos,
    ROUTES.games,
    ROUTES.apps,
    ROUTES.slots,
    ROUTES.slotsMobile,
    ROUTES.roulette,
    ROUTES.blackjack,
    ROUTES.payment,
    ROUTES.paymentFastest,
    ROUTES.freeGames,
    ROUTES.liveCasino,
    ROUTES.bonuses,
    ROUTES.noVerification,
    ...POLISE_PAGES.map((p) => p.path.replace(/\/?$/, "") || "/"),
    ...extraAppRoutes,
  ]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route === "/" ? "/" : route),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
