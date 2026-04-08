import CasinoTable from "@/components/common/CasinoTable";
import FaqAccordion from "@/components/common/FaqAccordion";
import ContentSection from "@/components/internal/ContentSection";
import CTASection from "@/components/internal/CTASection";
import JsonLd from "@/components/internal/JsonLd";
import InfoCardsSection from "@/components/internal/InfoCardsSection";
import PageHero from "@/components/internal/PageHero";
import PageShell from "@/components/internal/PageShell";
import TopCasinosGrid from "@/components/internal/TopCasinosGrid";
import { casinoList } from "@/lib/data/casinos";
import {
  slotBonusesIntro,
  slotProviders,
  slotsPageBundle,
  slotTypes,
  topRtpSlots,
} from "@/lib/data/pages/slots";
import { jsonLdBreadcrumbFromHero, pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import ArticleBody from "@/components/common/ArticleBody";
import { slotsContent } from "@/lib/content/slots";

export const metadata = pageMetadata(slotsPageBundle);

const sortedByGames = [...casinoList].sort((a, b) => {
  const aNum = parseInt((a.gamesCount || "0").replace(/\D/g, ""), 10);
  const bNum = parseInt((b.gamesCount || "0").replace(/\D/g, ""), 10);
  return bNum - aNum;
});

export default function SlotsPage() {
  const b = slotsPageBundle;
  return (
    <>
      <JsonLd
        faq={b.faq}
        breadcrumbNames={jsonLdBreadcrumbFromHero(b.hero.breadcrumb)}
      />
      <PageHero {...b.hero} />
      <PageShell>
        <TopCasinosGrid
          title="أفضل كازينوهات السلوتس الموصى بها"
          casinos={sortedByGames}
        />

        <InfoCardsSection
          title="أنواع السلوتس الشائعة"
          items={slotTypes.map((x) => ({
            icon: x.icon,
            title: x.title,
            text: x.text,
          }))}
        />

        <ContentSection
          title="السلوتس المجانية مقابل اللعب بأموال حقيقية"
          paragraphs={[
            "الوضع التجريبي يتيح لك فهم الميزات دون مخاطرة مالية.",
            "اللعب بمال حقيقي يفتح السحب وفق شروط الكازينو والرهان، ويجب أن يكون ضمن ميزانية محددة.",
          ]}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">مزودو الألعاب (مختارات)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {slotProviders.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl p-4 border border-[#E8E4DA]"
              >
                <h3 className="font-semibold text-[#C8963E]">{p.name}</h3>
                <p className="text-sm text-[#555] mt-1">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        <ContentSection
          title="بونصات السلوتس: ما الذي تفحصه؟"
          list={slotBonusesIntro}
        />

        <ContentSection
          title="كيف تلعب السلوتس أونلاين بذكاء؟"
          paragraphs={[
            "السلوتس تعمل بمولد أرقام عشوائية معتمد؛ لا توجد استراتيجية مضمونة للفوز.",
            "انتبه لـ RTP والتقلب، وجرّب الوضع المجاني قبل رفع الرهان.",
            "للمزيد حول الألعاب الأخرى راجع قسم الألعاب العام ثم الروليت إن رغبت.",
          ]}
        />

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            أفضل ألعاب سلوتس بأعلى RTP (أمثلة)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#F7F4EE]">
                  {["اسم اللعبة", "المزود", "RTP", "التقلب"].map((h) => (
                    <th key={h} className="text-end p-3 font-semibold text-[#555]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topRtpSlots.map((slot, i) => (
                  <tr
                    key={slot.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}
                  >
                    <td className="p-3 font-medium">{slot.name}</td>
                    <td className="p-3 text-[#555]">{slot.provider}</td>
                    <td className="p-3 text-[#10B981] font-semibold">{slot.rtp}</td>
                    <td className="p-3 text-[#555]">{slot.volatility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            مقارنة الكازينوهات
          </h2>
          <CasinoTable casinos={casinoList} />
        </section>

        <FaqAccordion items={b.faq} />

        <CTASection
          title="جرب السلوتس على هاتفك"
          body="تطبيقات الكازينو ووضع الموبايل يمنحان تجربة سلسة للسلوتس أينما كنت."
          buttonLabel="سلوتس الموبايل"
          buttonHref={ROUTES.slotsMobile}
        />

        <p className="text-sm text-[#555] text-center">
          <Link href={ROUTES.games} className="text-[#C8963E] hover:underline">
            تصفح جميع ألعاب الكازينو
          </Link>
          {" · "}
          <Link href={ROUTES.roulette} className="text-[#C8963E] hover:underline">
            الروليت
          </Link>
        </p>
      </PageShell>
      <ArticleBody content={slotsContent} />
    </>
  );
}
