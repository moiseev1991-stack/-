export interface PaymentMethodRow {
  id: string;
  name: string;
  icon: string;
  deposit: string;
  withdrawal: string;
  minDeposit: string;
  safety: string;
}

export const paymentMethodsTable: PaymentMethodRow[] = [
  {
    id: "visa-mc",
    name: "Visa / Mastercard",
    icon: "pay_row_visa",
    deposit: "فوري",
    withdrawal: "1–3 أيام",
    minDeposit: "$10",
    safety: "⭐⭐⭐⭐⭐",
  },
  {
    id: "skrill",
    name: "Skrill",
    icon: "pay_row_wallet",
    deposit: "فوري",
    withdrawal: "خلال 24 ساعة",
    minDeposit: "$10",
    safety: "⭐⭐⭐⭐",
  },
  {
    id: "neteller",
    name: "Neteller",
    icon: "pay_row_net",
    deposit: "فوري",
    withdrawal: "خلال 24 ساعة",
    minDeposit: "$10",
    safety: "⭐⭐⭐⭐",
  },
  {
    id: "bank",
    name: "تحويل بنكي",
    icon: "pay_row_bank",
    deposit: "1–3 أيام",
    withdrawal: "3–5 أيام",
    minDeposit: "$50",
    safety: "⭐⭐⭐⭐⭐",
  },
  {
    id: "ewallet",
    name: "محافظ رقمية / Apple Pay",
    icon: "pay_row_mobile",
    deposit: "فوري",
    withdrawal: "1–2 أيام",
    minDeposit: "$10",
    safety: "⭐⭐⭐⭐",
  },
  {
    id: "crypto",
    name: "Bitcoin / عملات رقمية",
    icon: "pay_row_crypto",
    deposit: "فوري",
    withdrawal: "1–24 ساعة",
    minDeposit: "$20",
    safety: "⭐⭐⭐⭐⭐",
  },
];
