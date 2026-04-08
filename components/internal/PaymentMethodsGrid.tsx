import SiteIcon from "@/components/common/SiteIcon";
import type { PaymentMethodRow } from "@/lib/data/payment-methods";

interface Props {
  methods: PaymentMethodRow[];
  title?: string;
}

export default function PaymentMethodsGrid({ methods, title = "طرق الدفع الرئيسية" }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {methods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-xl p-4 border border-[#E8E4DA]"
          >
            <div className="flex items-center gap-3 mb-3">
              <SiteIcon name={method.icon} size={26} className="text-[#C8963E]" />
              <h3 className="font-semibold text-[#1A1A1A]">{method.name}</h3>
            </div>
            <div className="space-y-1 text-xs text-[#555]">
              <div className="flex justify-between gap-2">
                <span>الإيداع:</span>
                <span className="text-[#10B981] font-medium">{method.deposit}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>السحب:</span>
                <span className="font-medium">{method.withdrawal}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>الحد الأدنى:</span>
                <span>{method.minDeposit}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>تقييم الأمان:</span>
                <span>{method.safety}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
