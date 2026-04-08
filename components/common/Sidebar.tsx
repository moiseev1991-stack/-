import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const popularLinks = [
  { label: "كازينو بالمال الحقيقي", href: ROUTES.realMoney },
  { label: "أسرع سحب", href: ROUTES.paymentFastest },
  { label: "ألعاب مجانية", href: ROUTES.freeGames },
  { label: "روليت أونلاين", href: ROUTES.roulette },
  { label: "بلاك جاك أونلاين", href: ROUTES.blackjack },
];

const guideLinks = [
  { label: "كازينو جديد 2026", href: ROUTES.newCasinos },
  { label: "طرق الدفع", href: ROUTES.payment },
  { label: "تطبيقات الكازينو", href: ROUTES.apps },
  { label: "ألعاب الكازينو", href: ROUTES.games },
  { label: "سلوتس موبايل", href: ROUTES.slotsMobile },
];

function SidebarBlock({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="bg-white border border-[#E8E4DA] rounded-xl p-4 mb-4">
      <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3 pb-2 border-b border-[#E8E4DA]">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#C8963E] transition-colors"
            >
              <span className="text-[#C8963E]">›</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block flex-shrink-0">
      <SidebarBlock title="الأكثر شعبية" links={popularLinks} />
      <SidebarBlock title="دليل اللاعب" links={guideLinks} />
    </aside>
  );
}
