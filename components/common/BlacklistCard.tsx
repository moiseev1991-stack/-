import Link from "next/link";
import { BlacklistedCasino } from "@/lib/types/casino";
import { ROUTES } from "@/lib/routes";
import CasinoLogo from "@/components/common/CasinoLogo";

interface Props {
  casino: BlacklistedCasino;
}

export default function BlacklistCard({ casino }: Props) {
  return (
    <div className="rounded-2xl border border-red-200/80 bg-gradient-to-b from-red-50/90 to-white p-5 shadow-sm ring-1 ring-red-100/60">
      <CasinoLogo
        casinoId={casino.id}
        src={casino.logo}
        alt={casino.name}
        name={casino.name}
        variant="blacklist"
      />

      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-[#1A1A1A]">{casino.name}</h3>
        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-1 text-sm font-extrabold tabular-nums text-red-700 ring-1 ring-red-200/80">
          ★ {casino.expertRating}/5
        </span>
      </div>

      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-700">لماذا يجب أن تتجنبه</p>
      <ul className="mb-5 space-y-2">
        {casino.reasons.map((r, i) => (
          <li
            key={i}
            className="flex items-start gap-2 rounded-lg border border-red-100/80 bg-red-50/50 px-2.5 py-2 text-sm leading-snug text-[#444]"
          >
            <span className="mt-0.5 flex-shrink-0 font-bold text-red-500">✗</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ROUTES.realMoney}
        className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-[#10B981] text-sm font-bold text-white shadow-md shadow-emerald-900/15 transition-colors hover:bg-[#0EA572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8963E]"
      >
        راجع بدائل موثوقة
      </Link>
    </div>
  );
}
