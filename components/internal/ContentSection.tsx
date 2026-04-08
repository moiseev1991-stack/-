interface Props {
  title: string;
  paragraphs?: string[];
  list?: string[];
  twoColumn?: boolean;
}

export default function ContentSection({
  title,
  paragraphs = [],
  list,
  twoColumn,
}: Props) {
  return (
    <section className="bg-white rounded-xl p-6 border border-[#E8E4DA]">
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">{title}</h2>
      {paragraphs.length > 0 && (
        <div
          className={
            twoColumn
              ? "grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#555] leading-relaxed"
              : "space-y-3 text-sm text-[#555] leading-relaxed"
          }
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      {list && list.length > 0 && (
        <ul className="mt-4 space-y-2">
          {list.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#555]">
              <span className="text-[#C8963E] font-bold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
