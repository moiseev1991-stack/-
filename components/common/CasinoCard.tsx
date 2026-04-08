"use client";

import Link from "next/link";
import CasinoLogo from "@/components/common/CasinoLogo";
import { Casino } from "@/lib/types/casino";

interface Props {
  casino: Casino;
}

export default function CasinoCard({ casino }: Props) {
  const isTop = casino.isTopRated;

  return (
    <div className="relative flex h-full flex-col">
      {isTop && (
        <div className="-mb-px w-full rounded-t-xl bg-gradient-to-b from-[#D4A84B] to-[#C8963E] px-3 py-2 text-center text-xs font-bold text-white shadow-md">
          الكازينو الأعلى تقييماً #1
        </div>
      )}

      <div
        className={`flex flex-1 flex-col rounded-xl bg-white p-5 ${
          isTop
            ? "rounded-t-none border-2 border-[#C8963E] shadow-xl shadow-amber-900/15 ring-1 ring-[#C8963E]/40"
            : "border border-[#E8E4DA] shadow-sm"
        } `}
      >
        <span className="absolute top-4 start-4 text-xs font-medium text-[#A89878]">
          #{casino.rank}
        </span>

        <CasinoLogo
          casinoId={casino.id}
          src={casino.logo}
          alt={casino.name}
          name={casino.name}
          variant={isTop ? "featured" : "card"}
        />

        <h3 className="mb-3 text-center text-base font-bold leading-snug text-[#1A1A1A]">
          {casino.name}
        </h3>

        <div className="mb-3">
          <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-[#888]">
            علاوة ترحيبية
          </p>
          <p className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold leading-snug text-[#B8862F]">
            {casino.bonus}
          </p>
        </div>

        <div className="mb-3 min-h-[1.25rem] text-center">
          {casino.reviewLink ? (
            <Link
              href={casino.reviewLink}
              className="block truncate text-xs font-medium text-[#C8963E] underline-offset-2 hover:underline"
            >
              قراءة تقييم {casino.name}
            </Link>
          ) : (
            <span className="block text-xs opacity-0">.</span>
          )}
        </div>

        <Link
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mb-4 flex h-11 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[#10B981] px-4 text-sm font-bold leading-none text-white transition-colors hover:bg-[#0EA572]"
        >
          إلعب الآن
        </Link>

        <div className="mb-4 border-t border-[#F0EDE5]" />

        <div className="mt-auto space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="min-w-0">
              <p className="mb-1 truncate text-[10px] font-medium text-[#999]">معدل الفوز</p>
              <p className="text-sm font-semibold tabular-nums text-[#10B981]">{casino.rtp}%</p>
            </div>
            <div className="min-w-0 border-s border-e border-[#F0EDE5] px-1">
              <p className="mb-1 truncate text-[10px] font-medium text-[#999]">السحب</p>
              <p className="text-sm font-semibold tabular-nums text-[#444]">
                {casino.payoutDays} <span className="text-xs font-normal">يوم</span>
              </p>
            </div>
            <div className="min-w-0">
              <p className="mb-1 truncate text-[10px] font-medium text-[#999]">الألعاب</p>
              <p className="text-sm font-semibold tabular-nums text-[#444]">
                {casino.gamesCount ?? "—"}
              </p>
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs font-medium text-[#C8963E]/90">+ مزيد من التفاصيل</span>
          </div>

          {casino.expertRating && (
            <p className="text-center text-xs text-[#777]">
              <span className="font-semibold text-[#1A1A1A]">{casino.expertRating}/5</span>
              <span className="mx-1 text-[#F59E0B]">★</span>
              <span>تقييم الخبراء</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
