import { FaqItem } from "@/lib/types/casino";
import FaqAccordion from "@/components/common/FaqAccordion";
import SectionTitle from "@/components/common/SectionTitle";

interface Props {
  items: FaqItem[];
  title?: string;
}

export default function FaqSection({ items, title = "أسئلة شائعة" }: Props) {
  return (
    <section className="bg-[#F7F4EE] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={title} />
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
