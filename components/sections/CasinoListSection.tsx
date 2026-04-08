import { Casino } from "@/lib/types/casino";
import CasinoCard from "@/components/common/CasinoCard";
import SectionTitle from "@/components/common/SectionTitle";

interface Props {
  casinos: Casino[];
  title?: string;
  subtitle?: string;
}

export default function CasinoListSection({
  casinos,
  title = "كازينوهات الإنترنت صاحبة أعلى تصنيف في جمهورية مصر العربية",
  subtitle = "تم التحقق من جميع الكازينوهات بواسطة فريق خبرائنا",
}: Props) {
  return (
    <section id="casino-list" className="bg-[#F7F4EE] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
          {casinos.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
          ))}
        </div>
      </div>
    </section>
  );
}
