import type { Metadata } from "next";
import { casinoListByRank, blacklistedCasinos } from "@/lib/data/casinos";
import { gamesList } from "@/lib/data/games";
import { mainFaq } from "@/lib/data/faq";

import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/common/TrustBar";
import CasinoListSection from "@/components/sections/CasinoListSection";
import TopTableSection from "@/components/sections/TopTableSection";
import BlacklistSection from "@/components/sections/BlacklistSection";
import FreeGamesSection from "@/components/sections/FreeGamesSection";
import HowWeRateSection from "@/components/sections/HowWeRateSection";
import GameTypesSection from "@/components/sections/GameTypesSection";
import MobileGamingSection from "@/components/sections/MobileGamingSection";
import TraditionalCasinosSection from "@/components/sections/TraditionalCasinosSection";
import FaqSection from "@/components/sections/FaqSection";
import ArticleBodyLoader from "@/components/common/ArticleBodyLoader";
import { absoluteUrl } from "@/lib/seo/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { loadArticle } from "@/lib/articles";

const homeArticle = loadArticle("home");

export const metadata: Metadata = {
  title: homeArticle.title,
  description: homeArticle.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { locale: "ar_EG", type: "website" },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "أفضل كازينوهات الإنترنت في مصر 2026",
            itemListElement: casinoListByRank.map((c) => ({
              "@type": "ListItem",
              position: c.rank,
              name: c.name,
              url: c.affiliateLink,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: mainFaq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <HeroSection />
      <TrustBar />
      <CasinoListSection casinos={casinoListByRank} />
      <TopTableSection casinos={casinoListByRank} />
      <FreeGamesSection games={gamesList} />
      <HowWeRateSection />
      <GameTypesSection />
      <MobileGamingSection />
      <TraditionalCasinosSection />
      <BlacklistSection casinos={blacklistedCasinos} />
      <ArticleBodyLoader kind="home" />
      <FaqSection items={mainFaq} />
    </>
  );
}
