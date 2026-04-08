import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
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
    return [
      // Latin / legacy paths -> canonical Arabic one-level paths
      { source: "/real-money", destination: "/كازينو-حقيقي", permanent: true },
      { source: "/new", destination: "/كازينو-جديد", permanent: true },
      { source: "/new-casinos", destination: "/كازينو-جديد", permanent: true },
      { source: "/games", destination: "/العاب-كازينو", permanent: true },
      { source: "/casino-games", destination: "/العاب-كازينو", permanent: true },
      { source: "/apps", destination: "/تطبيقات", permanent: true },
      { source: "/slots", destination: "/سلوتس", permanent: true },
      { source: "/slots/mobile", destination: "/سلوتس-موبايل", permanent: true },
      { source: "/roulette", destination: "/روليت", permanent: true },
      { source: "/blackjack", destination: "/بلاك-جاك", permanent: true },
      { source: "/payment", destination: "/طرق-الدفع", permanent: true },
      { source: "/payment/fast-withdrawal", destination: "/اسرع-سحب", permanent: true },
      { source: "/payment/fastest-withdrawals", destination: "/اسرع-سحب", permanent: true },
      { source: "/free-games", destination: "/العاب-مجانية", permanent: true },
      { source: "/live-casino", destination: "/كازينو-مباشر", permanent: true },
      { source: "/bonuses", destination: "/بونص-ترحيب", permanent: true },
      { source: "/no-verification", destination: "/بدون-توثيق", permanent: true },

      // Legacy Arabic nested paths -> canonical Arabic one-level paths
      { source: "/سلوتس/موبايل", destination: "/سلوتس-موبايل", permanent: true },
      { source: "/طرق-الدفع/اسرع-سحب", destination: "/اسرع-سحب", permanent: true },

      // Legacy legal aliases -> Arabic legal pages
      { source: "/legal/about-us", destination: "/من-نحن", permanent: true },
      { source: "/legal/privacy-policy", destination: "/سياسة-الخصوصية", permanent: true },
      { source: "/legal/cookie-policy", destination: "/سياسة-ملفات-تعريف-الارتباط", permanent: true },
      { source: "/legal/terms-of-use", destination: "/شروط-الاستخدام", permanent: true },
      { source: "/legal/disclaimer-and-responsible-gaming", destination: "/اخلاء-المسوولية-والمقامرة-المسوولة", permanent: true },
      { source: "/legal/contact-us", destination: "/اتصل-بنا", permanent: true },
      { source: "/legal/how-we-rate-casinos", destination: "/كيف-نقيم-الكازينوهات", permanent: true },
    ];
  },
};

export default nextConfig;
