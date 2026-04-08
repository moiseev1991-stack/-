import SectionTitle from "@/components/common/SectionTitle";

const casinos = [
  {
    name: "كازينو شرم الشيخ",
    image: "/casinos/sharm-casino.png",
    desc: "أحد أقدم الكازينوهات في مصر (منذ 1991): طاولات ألعاب وماكينات سلوتس وبوكر.",
    address: "شرم الشيخ، جنوب محافظة سيناء، مصر",
    phone: "+20693600100",
    hours: "7/24",
  },
  {
    name: "كازينو طابا هيلتون",
    image: "/casinos/taba-casino.png",
    desc: "في منتجع هيلتون طابا — طاولات متنوعة وماكينات سلوتس ضمن أجواء منتجع.",
    address: "طابا، شمال محافظة سيناء، مصر",
    phone: "+20693530446",
    hours: "7/24",
  },
  {
    name: "كازينو لندن في القاهرة",
    image: "/casinos/london-casino-cairo.png",
    desc: "من أشهر وجهات القاهرة — مساحة واسعة وطاولات وماكينات سلوتس.",
    address: "القاهرة، مصر",
    phone: "+20225777444",
    hours: "7/24",
  },
];

export default function TraditionalCasinosSection() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="الكازينوهات التقليدية"
          subtitle="أبرز الكازينوهات البرية في جمهورية مصر العربية"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {casinos.map((c, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl border border-[#E8E4DA] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-[#1A1A1A]">{c.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#555]">{c.desc}</p>
                <dl className="space-y-2 border-t border-[#F0EDE5] pt-3 text-sm text-[#555]">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-[#888]">العنوان</dt>
                    <dd className="min-w-0 flex-1">{c.address}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-[#888]">هاتف</dt>
                    <dd className="tabular-nums">{c.phone}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-[#888]">أوقات العمل</dt>
                    <dd>{c.hours}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
