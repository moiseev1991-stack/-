import Link from "next/link";
import { POLISE_PAGES } from "@/lib/data/polise-pages";
import { ROUTES } from "@/lib/routes";

const cols = [
  {
    title: "كازينو بالمال الحقيقي",
    links: [
      { label: "كل كازينو المال الحقيقي", href: ROUTES.realMoney },
      { label: "ألعاب الكازينو", href: ROUTES.games },
      { label: "تطبيقات الكازينو", href: ROUTES.apps },
      { label: "كازينو جديد", href: ROUTES.newCasinos },
    ],
  },
  {
    title: "ألعاب الكازينو",
    links: [
      { label: "سلوتس أونلاين", href: ROUTES.slots },
      { label: "تطبيقات السلوتس", href: ROUTES.slotsMobile },
      { label: "روليت", href: ROUTES.roulette },
      { label: "بلاك جاك", href: ROUTES.blackjack },
    ],
  },
  {
    title: "طرق الدفع",
    links: [
      { label: "أسرع سحب", href: ROUTES.paymentFastest },
      { label: "طرق الدفع", href: ROUTES.payment },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#18181A" }} className="text-[#A0A0A0]">
      <div className="h-0.5 bg-[#C8963E]" />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-base font-bold text-white">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#B8B8B8] transition-colors hover:text-[#E8B86D]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav
          aria-label="معلومات قانونية"
          className="mt-10 border-t border-white/10 pt-8"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#6A6A6A]">
            معلومات وشروط
          </p>
          <ul className="flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-x-6 sm:gap-y-2">
            {POLISE_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.path}
                  className="text-sm text-[#9A9A9A] transition-colors hover:text-[#E8B86D]"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
            <div className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M10 1L12.39 7.26L19 7.64L14 12.14L15.56 19L10 15.77L4.44 19L6 12.14L1 7.64L7.61 7.26L10 1Z"
                  fill="#C8963E"
                />
              </svg>
              <span className="text-base font-bold text-white">كازينو عربي أونلاين</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
              {["eCOGRA", "18+", "GamCare", "MGA"].map((b) => (
                <span
                  key={b}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-[#C8C8C8]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-1.5 border-t border-white/5 pt-5 text-center md:text-start">
            <p className="text-xs text-[#808080]">حقوق النشر © 2026 كازينو عربي أونلاين — جميع الحقوق محفوظة</p>
            <p className="text-xs text-[#6A6A6A]">تحذير: المقامرة قد تسبب الإدمان. يُرجى اللعب بمسؤولية.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
