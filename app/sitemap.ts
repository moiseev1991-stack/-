import type { MetadataRoute } from "next";
import { POLISE_PAGES } from "@/lib/data/polise-pages";
import { casinoList } from "@/lib/data/casinos";
import { reviewPublicPath, ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

/**
 * Slugs of casino reviews exposed at /مراجعات/<slug>/.
 * Sourced from casinoList so the sitemap stays in sync with new review pages
 * — every casino with a `reviewLink` becomes an entry.
 */
const casinoReviewSlugs = casinoList
  .filter((c) => c.reviewLink)
  .map((c) => c.id);

/**
 * Betting / brand review skeletons under /مراجعات/<slug>/ that are NOT in
 * casinoList (separate brand verticals — sportsbooks, etc.).
 * Keep in sync with the static review pages under app/reviews/<slug>/.
 */
const bettingReviewSlugs = ["1xbet", "melbet", "bet365"];

/** Indexable POLISE / info pages (skip the ones marked `noindex`). */
const indexablePolisePaths = POLISE_PAGES
  .filter((p) => !p.noindex)
  .map((p) => p.path);

const routes: string[] = [
  ...new Set([
    ROUTES.home,
    // Hubs
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
    // New SEO landing pages (skeletons — text fill-in pending)
    `${ROUTES.betting}/`,
    `${ROUTES.bettingApps}/`,
    `${ROUTES.vodafoneCash}/`,
    `${ROUTES.gamblingGames}/`,
    `${ROUTES.casinoEgypt}/`,
    `${ROUTES.aviator}/`,
    // Reviews
    ...casinoReviewSlugs.map(reviewPublicPath),
    ...bettingReviewSlugs.map(reviewPublicPath),
    // Indexable info pages (about-us, how-we-rate)
    ...indexablePolisePaths,
  ]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    // absoluteUrl() percent-encodes Arabic segments — sitemap loc must be ASCII-safe.
    url: absoluteUrl(route === "/" ? "/" : route),
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
