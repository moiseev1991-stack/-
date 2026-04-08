import type { ComponentType } from "react";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { ROUTES } from "@/lib/routes";
import {
  IconBonusRibbon,
  IconGameVariety,
  IconMobileExperience,
  IconShieldLicense,
  IconSupport,
  IconWithdrawSpeed,
} from "./MethodologyIcons";

type Criterion = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
};

const criteria: Criterion[] = [
  {
    Icon: IconShieldLicense,
    title: "الأمان والترخيص",
    text: "التحقق من الترخيص ومعايير حماية البيانات والمدفوعات.",
  },
  {
    Icon: IconBonusRibbon,
    title: "المكافآت والشفافية",
    text: "تقييم قيمة العرض ووضوح شروط الرهان والمدة.",
  },
  {
    Icon: IconWithdrawSpeed,
    title: "سرعة السحب",
    text: "مقارنة أوقات المعالجة المعلنة وطرق الدفع المتاحة.",
    link: ROUTES.paymentFastest,
    linkLabel: "صفحة أسرع سحب",
  },
  {
    Icon: IconGameVariety,
    title: "تنوع الألعاب",
    text: "جودة المزودين وتنوع السلوتس والطاولات والبث المباشر.",
    link: ROUTES.games,
    linkLabel: "دليل الألعاب",
  },
  {
    Icon: IconMobileExperience,
    title: "تجربة الموبايل",
    text: "الأداء على الهاتف عبر التطبيق أو المتصفح.",
    link: ROUTES.slotsMobile,
    linkLabel: "سلوتس الموبايل",
  },
  {
    Icon: IconSupport,
    title: "الدعم",
    text: "سرعة الاستجابة وقنوات التواصل واللغات المتاحة.",
  },
];

export default function MethodologySection() {
  return (
    <section className="rounded-xl border border-[#E8E4DA] bg-[#F7F4EE] px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="كيف نُقيّم الكازينوهات" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {criteria.map((c) => {
            const Icon = c.Icon;
            return (
              <div
                key={c.title}
                className="group rounded-2xl border border-[#E8E4DA] bg-white p-5 shadow-sm transition-all hover:border-[#C8963E]/40 hover:shadow-md focus-within:ring-2 focus-within:ring-[#C8963E]/20"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E8DCC8] bg-gradient-to-b from-[#FDF9F2] to-[#F5EDE0] transition-colors group-hover:border-[#C8963E]/35 group-hover:from-[#FFF9F0] group-hover:to-[#F0E6D4]"
                    aria-hidden
                  >
                    <Icon className="opacity-95" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A]">{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#555]">{c.text}</p>
                {c.link && (
                  <Link
                    href={c.link}
                    className="mt-3 inline-block text-sm font-semibold text-[#C8963E] underline-offset-2 hover:underline"
                  >
                    {c.linkLabel}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
