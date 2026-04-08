import type { Metadata } from "next";
import { casinoList, blacklistedCasinos } from "@/lib/data/casinos";
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

export const metadata: Metadata = {
  title: "أفضل كازينوهات الإنترنت المصرية لعام 2026 | كازينو عربي أونلاين",
  description:
    "اكتشف أفضل كازينوهات الإنترنت للاعبين المصريين. مكافآت ضخمة، سحب سريع، وألعاب متنوعة. تقييمات موثوقة من خبراء الكازينو.",
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "أفضل كازينوهات الإنترنت في مصر 2026",
            itemListElement: casinoList.map((c) => ({
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
      <CasinoListSection casinos={casinoList} />
      <TopTableSection casinos={casinoList} />
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
