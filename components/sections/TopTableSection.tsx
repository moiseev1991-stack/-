import { Casino } from "@/lib/types/casino";
import CasinoTable from "@/components/common/CasinoTable";

interface Props {
  casinos: Casino[];
}

export default function TopTableSection({ casinos }: Props) {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <CasinoTable casinos={casinos} title="أفضل 10 كازينوهات على الإنترنت للاعبين في مِصر" />
      </div>
    </section>
  );
}
