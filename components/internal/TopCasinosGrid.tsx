import CasinoCard from "@/components/common/CasinoCard";
import type { Casino } from "@/lib/types/casino";

interface Props {
  casinos: Casino[];
  title: string;
  /** Mark one casino as visually featured (uses isTopRated on card) */
  featuredId?: string;
}

export default function TopCasinosGrid({
  casinos,
  title,
  featuredId,
}: Props) {
  const list = casinos.map((c) => {
    if (featuredId) {
      return { ...c, isTopRated: c.id === featuredId };
    }
    return c;
  });

  return (
    <section>
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {list.map((casino) => (
          <CasinoCard key={casino.id} casino={casino} />
        ))}
      </div>
    </section>
  );
}
