import { BlacklistedCasino } from "@/lib/types/casino";
import BlacklistCard from "@/components/common/BlacklistCard";
import SectionTitle from "@/components/common/SectionTitle";

interface Props {
  casinos: BlacklistedCasino[];
}

export default function BlacklistSection({ casinos }: Props) {
  return (
    <section className="bg-[#F7F4EE] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="القائمة السوداء للكازينوهات"
          subtitle="هذه الكازينوهات حصلت على تقييمات سلبية بسبب ممارسات غير عادلة — تجنّبها"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {casinos.map((c) => (
            <BlacklistCard key={c.id} casino={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
