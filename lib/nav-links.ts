import { ROUTES } from "@/lib/routes";

/** Central list for Header + MobileMenu — keep in sync with app routes */
export const navLinks = [
  { label: "كازينو بالمال الحقيقي", href: ROUTES.realMoney },
  { label: "كازينو جديد", href: ROUTES.newCasinos },
  { label: "ألعاب الكازينو", href: ROUTES.games },
  { label: "تطبيقات الكازينو", href: ROUTES.apps },
  { label: "سلوتس", href: ROUTES.slots },
  { label: "سلوتس للموبايل", href: ROUTES.slotsMobile },
  { label: "روليت", href: ROUTES.roulette },
  { label: "بلاك جاك", href: ROUTES.blackjack },
  { label: "مواقع المراهنات", href: ROUTES.betting },
  { label: "أسرع سحب", href: ROUTES.paymentFastest },
  { label: "طرق الدفع", href: ROUTES.payment },
  { label: "ألعاب مجانية", href: ROUTES.freeGames },
] as const;
