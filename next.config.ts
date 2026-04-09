import type { NextConfig } from "next";

/** Set STATIC_EXPORT=1 for a static HTML build (Apache/nginx without Node.js). */
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        skipTrailingSlashRedirect: true,
      }
    : {
        output: "standalone",
      }),
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  async rewrites() {
    if (staticExport) {
      return { beforeFiles: [], afterFiles: [], fallback: [] };
    }
    return {
      beforeFiles: [
        { source: "/legal/about-us", destination: "/info/about-us" },
        { source: "/legal/privacy-policy", destination: "/info/privacy-policy" },
        { source: "/legal/cookie-policy", destination: "/info/cookie-policy" },
        { source: "/legal/terms-of-use", destination: "/info/terms-of-use" },
        {
          source: "/legal/disclaimer-and-responsible-gaming",
          destination: "/info/disclaimer-and-responsible-gaming",
        },
        { source: "/legal/contact-us", destination: "/info/contact-us" },
        { source: "/legal/how-we-rate-casinos", destination: "/info/how-we-rate-casinos" },
        // Canonical Arabic one-level URLs -> stable internal routes
        { source: "/%D9%83%D8%A7%D8%B2%D9%8A%D9%86%D9%88-%D8%AD%D9%82%D9%8A%D9%82%D9%8A", destination: "/real-money" },
        { source: "/%D9%83%D8%A7%D8%B2%D9%8A%D9%86%D9%88-%D8%AC%D8%AF%D9%8A%D8%AF", destination: "/new" },
        { source: "/%D8%A7%D9%84%D8%B9%D8%A7%D8%A8-%D9%83%D8%A7%D8%B2%D9%8A%D9%86%D9%88", destination: "/games" },
        { source: "/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA", destination: "/apps" },
        { source: "/%D8%B3%D9%84%D9%88%D8%AA%D8%B3", destination: "/slots" },
        { source: "/%D8%B3%D9%84%D9%88%D8%AA%D8%B3-%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84", destination: "/slots/mobile" },
        { source: "/%D8%B1%D9%88%D9%84%D9%8A%D8%AA", destination: "/roulette" },
        { source: "/%D8%A8%D9%84%D8%A7%D9%83-%D8%AC%D8%A7%D9%83", destination: "/blackjack" },
        { source: "/%D8%B7%D8%B1%D9%82-%D8%A7%D9%84%D8%AF%D9%81%D8%B9", destination: "/payment" },
        { source: "/%D8%A7%D8%B3%D8%B1%D8%B9-%D8%B3%D8%AD%D8%A8", destination: "/payment/fastest-withdrawals" },
        { source: "/%D8%A7%D9%84%D8%B9%D8%A7%D8%A8-%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9", destination: "/free-games" },
        { source: "/%D9%83%D8%A7%D8%B2%D9%8A%D9%86%D9%88-%D9%85%D8%A8%D8%A7%D8%B4%D8%B1", destination: "/live-casino" },
        { source: "/%D8%A8%D9%88%D9%86%D8%B5-%D8%AA%D8%B1%D8%AD%D9%8A%D8%A8", destination: "/bonuses" },
        { source: "/%D8%A8%D8%AF%D9%88%D9%86-%D8%AA%D9%88%D8%AB%D9%8A%D9%82", destination: "/no-verification" },

        // Arabic legal pages -> stable internal policy routes
        { source: "/%D9%85%D9%86-%D9%86%D8%AD%D9%86", destination: "/info/about-us" },
        { source: "/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9", destination: "/info/privacy-policy" },
        { source: "/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D9%85%D9%84%D9%81%D8%A7%D8%AA-%D8%AA%D8%B9%D8%B1%D9%8A%D9%81-%D8%A7%D9%84%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7", destination: "/info/cookie-policy" },
        { source: "/%D8%B4%D8%B1%D9%88%D8%B7-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85", destination: "/info/terms-of-use" },
        { source: "/%D8%A7%D8%AE%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%B3%D9%88%D9%88%D9%84%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%85%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D9%88%D9%88%D9%84%D8%A9", destination: "/info/disclaimer-and-responsible-gaming" },
        { source: "/%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7", destination: "/info/contact-us" },
        { source: "/%D9%83%D9%8A%D9%81-%D9%86%D9%82%D9%8A%D9%85-%D8%A7%D9%84%D9%83%D8%A7%D8%B2%D9%8A%D9%86%D9%88%D9%87%D8%A7%D8%AA", destination: "/info/how-we-rate-casinos" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    // STATIC_EXPORT=1: redirects are not emitted; run scripts/add-arabic-aliases.mjs after build
    // so out/مراجعات/ mirrors out/reviews/ for Arabic review URLs on static hosts.
    if (staticExport) {
      return [];
    }
    return [
      {
        source: "/%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A7%D8%AA/:slug",
        destination: "/reviews/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
