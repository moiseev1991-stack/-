import BlacklistCard from "@/components/common/BlacklistCard";
import SiteIcon from "@/components/common/SiteIcon";
import CasinoCard from "@/components/common/CasinoCard";
import CasinoTable from "@/components/common/CasinoTable";
import FaqAccordion from "@/components/common/FaqAccordion";
import CTASection from "@/components/internal/CTASection";
import MethodologySection from "@/components/internal/MethodologySection";
import PageShell from "@/components/internal/PageShell";
import {
  fastMethods,
  fastestWithdrawalsBundle,
  withdrawalDelayFactors,
  withdrawalTips,
} from "@/lib/data/pages/fastest-withdrawals";
import { blacklistedCasinos, casinoList } from "@/lib/data/casinos";
import { ROUTES } from "@/lib/routes";

const sortOrder: Record<string, number> = {
  "0-1": 1,
  "day 0-1": 1,
  "0-3": 2,
  "1-2": 3,
  "1-3": 4,
  "2": 5,
};

const sortedCasinos = [...casinoList].sort((a, b) => {
  // Keep 888Starz as the visual first card everywhere.
  if (a.id === "888starz" && b.id !== "888starz") return -1;
  if (b.id === "888starz" && a.id !== "888starz") return 1;
  return (sortOrder[a.payoutDays] || 9) - (sortOrder[b.payoutDays] || 9);
});

function getSpeedBadge(days: string) {
  if (days.includes("0-1") || days === "day 0-1") {
    return { label: "سحب فوري", className: "bg-emerald-100 text-emerald-700" };
  }
  if (days.includes("1-2")) {
    return { label: "سحب سريع", className: "bg-blue-100 text-blue-700" };
  }
  return { label: "سحب عادي", className: "bg-gray-100 text-gray-600" };
}

export default function FastWithdrawalsPageContent() {
  const faq = fastestWithdrawalsBundle.faq;

  return (
    <>
      <PageShell>
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">
            أسرع الكازينوهات في صرف الأرباح
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {sortedCasinos.map((casino) => {
              const badge = getSpeedBadge(casino.payoutDays);
              return (
                <div key={casino.id} className="relative">
                  <span
                    className={`absolute top-2 end-2 z-10 text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                  <CasinoCard
                    casino={{
                      ...casino,
                      isTopRated: casino.id === "888starz",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            أسرع طرق السحب حسب الطريقة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fastMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-xl p-5 border-s-4 border-[#E8E4DA]"
                style={{ borderInlineStartColor: method.color }}
              >
                <div className="text-2xl mb-2">{method.icon}</div>
                <h3 className="font-semibold text-[#1A1A1A]">{method.title}</h3>
                <p className="text-xs text-[#888] mt-1">{method.names}</p>
                <p
                  className="text-sm font-semibold mt-2"
                  style={{ color: method.color }}
                >
                  <span className="inline-flex items-center gap-1">
                    <SiteIcon name="pay_choose_time" size={14} />
                    {method.time}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            جدول مقارنة السرعة والمكافآت
          </h2>
          <CasinoTable casinos={sortedCasinos} />
        </section>

        <section className="bg-white rounded-xl p-6 border border-[#E8E4DA]">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            ما الذي يؤثر على سرعة السحب؟
          </h2>
          <ul className="space-y-2">
            {withdrawalDelayFactors.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-[#555]">
                <span className="text-[#C8963E] font-bold">•</span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            نصائح لتسريع عمليات السحب
          </h2>
          <ul className="space-y-3 bg-white rounded-xl p-6 border border-[#E8E4DA]">
            {withdrawalTips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-[#555]">
                <span className="text-[#C8963E] font-bold mt-0.5">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
            كازينوهات ننصح بتجنبها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {blacklistedCasinos.map((c) => (
              <BlacklistCard key={c.id} casino={c} />
            ))}
          </div>
        </section>

        <MethodologySection />

        <FaqAccordion items={faq} />

        <CTASection
          title="إدارة الدفع تبدأ من اختيار الطريقة المناسبة"
          body="ارجع إلى دليل طرق الدفع لمقارنة Visa وSkrill والتحويل البنكي قبل أن تختار الكازينو."
          buttonLabel="دليل طرق الدفع"
          buttonHref={ROUTES.payment}
          variant="light"
        />
      </PageShell>
    </>
  );
}
