import type { MetadataRoute } from "next";
import { POLISE_PAGES } from "@/lib/data/polise-pages";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

const routes = [
  ROUTES.home,
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
  ...POLISE_PAGES.map((p) => `/${p.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route === "/" ? "/" : route),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
