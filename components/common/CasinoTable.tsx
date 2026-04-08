"use client";

import Link from "next/link";
import CasinoLogo from "@/components/common/CasinoLogo";
import { Casino } from "@/lib/types/casino";

interface Props {
  casinos: Casino[];
  title?: string;
}

export default function CasinoTable({ casinos, title }: Props) {
  return (
    <div>
      {title && (
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#1A1A1A]">{title}</h2>
      )}
      <div className="-mx-1 overflow-x-auto rounded-xl border border-[#E8E4DA] shadow-sm sm:mx-0">
        <table className="w-full min-w-[820px] text-base">
          <thead>
            <tr className="border-b border-[#E8E4DA] bg-[#EDE8DC] text-[#1A1A1A]">
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 72 }}>
                الترتيب
              </th>
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 200 }}>
                الكازينو
              </th>
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 220 }}>
                عروض المكافآت
              </th>
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 100 }}>
                عدد الألعاب
              </th>
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 110 }}>
                سرعة الصرف
              </th>
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 100 }}>
                معدل الفوز
              </th>
              <th className="px-4 py-4 text-end text-sm font-bold" style={{ width: 130 }}>
                العب
              </th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, idx) => {
              const isFirst = casino.rank === 1;
              return (
                <tr
                  key={casino.id}
                  className={`border-t border-[#F0EDE5] ${
                    isFirst
                      ? "bg-gradient-to-l from-amber-50/95 to-amber-50/40 ring-1 ring-inset ring-[#C8963E]/35"
                      : idx % 2 === 0
                        ? "bg-white"
                        : "bg-[#FAFAF8]"
                  } `}
                >
                  <td
                    className={`px-4 py-4 align-middle text-center text-sm font-bold tabular-nums ${
                      isFirst ? "border-s-[3px] border-[#C8963E]" : ""
                    }`}
                  >
                    <span className={isFirst ? "text-[#9A732E]" : "text-[#C8963E]"}>
                      #{casino.rank}
                    </span>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <div className="flex min-w-0 items-center gap-3">
                      <CasinoLogo
                        casinoId={casino.id}
                        src={casino.logo}
                        alt={casino.name}
                        name={casino.name}
                        variant="table"
                      />
                      <span className="hidden min-w-0 text-sm font-semibold text-[#1A1A1A] sm:inline">
                        {casino.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <span className="text-sm font-medium leading-snug text-[#B8862F]">
                      {casino.bonus}
                    </span>
                  </td>
                  <td className="px-4 py-4 align-middle text-center text-sm tabular-nums text-[#555]">
                    {casino.gamesCount || "—"}
                  </td>
                  <td className="px-4 py-4 align-middle text-center">
                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {casino.payoutDays} أيام
                    </span>
                  </td>
                  <td className="px-4 py-4 align-middle text-center text-sm font-semibold tabular-nums text-[#10B981]">
                    {casino.rtp}%
                  </td>
                  <td className="px-4 py-4 align-middle text-center">
                    <Link
                      href={casino.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex min-h-[40px] min-w-[6.5rem] items-center justify-center rounded-lg bg-[#10B981] px-4 text-sm font-bold text-white transition-colors hover:bg-[#0EA572]"
                    >
                      إلعب الآن
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
