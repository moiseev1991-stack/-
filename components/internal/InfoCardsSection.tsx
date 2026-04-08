import SiteIcon from "@/components/common/SiteIcon";
import type { InfoCardItem } from "@/lib/types/page";

interface Props {
  title: string;
  items: InfoCardItem[];
  columns?: 2 | 3 | 4;
}

export default function InfoCardsSection({
  title,
  items,
  columns = 2,
}: Props) {
  const grid =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#1A1A1A]">{title}</h2>
      <div className={`grid grid-cols-1 gap-4 ${grid}`}>
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-[#E8E4DA] bg-white p-5 shadow-sm transition-all hover:border-[#C8963E]/40 hover:shadow-md focus-within:ring-2 focus-within:ring-[#C8963E]/20"
          >
            <div className="mb-2 inline-flex transition-transform group-hover:scale-105">
              <SiteIcon name={item.icon} size={28} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
            <p className="text-sm leading-relaxed text-[#555]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
