const paymentMethods = [
  { id: "visa", label: "Visa", color: "bg-blue-600", text: "VISA" },
  { id: "mastercard", label: "Mastercard", color: "bg-red-500", text: "MC" },
  { id: "paypal", label: "PayPal", color: "bg-blue-500", text: "PayPal" },
  { id: "skrill", label: "Skrill", color: "bg-purple-600", text: "Skrill" },
  { id: "neteller", label: "Neteller", color: "bg-orange-500", text: "Neteller" },
  { id: "bitcoin", label: "Bitcoin", color: "bg-yellow-500", text: "₿" },
  { id: "paysafecard", label: "Paysafecard", color: "bg-blue-700", text: "PSC" },
];

interface PaymentIconsProps {
  methods: string[];
  size?: "sm" | "md";
}

export default function PaymentIcons({ methods, size = "sm" }: PaymentIconsProps) {
  const filtered = paymentMethods.filter((m) => methods.includes(m.id));

  return (
    <div className="flex flex-wrap gap-1.5">
      {filtered.map((method) => (
        <span
          key={method.id}
          title={method.label}
          className={`${method.color} text-white font-bold rounded px-2 ${
            size === "sm" ? "text-xs py-0.5" : "text-sm py-1"
          }`}
        >
          {method.text}
        </span>
      ))}
    </div>
  );
}
