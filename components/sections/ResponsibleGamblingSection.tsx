const tips = [
  "اعتبر القمار مجرد شكل من أشكال الترفيه فقط",
  "لا تراهن على ما لا يمكنك تكبد خسارته",
  "فهم وقبول احتمالات اللعبة",
  "قراءة الشروط والأحكام بتروي",
  "عدم مطاردة الخسائر",
  "تجنب شرب المشروبات الكحوليات أثناء اللعب",
];

export default function ResponsibleGamblingSection() {
  return (
    <section style={{ background: "#1C1C1E" }} className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-white">المقامرة المسئولة</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-3">
          {tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-base font-bold text-[#C8963E]">✓</span>
              <p className="text-[0.9375rem] leading-relaxed text-[#C4C4C4]">{tip}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-[#9A9A9A]">للمساعدة تواصل مع:</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="https://www.gamblingtherapy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#E8B86D] underline-offset-2 hover:underline"
              >
                Gambling Therapy
              </a>
              <span className="hidden text-[#555] sm:inline" aria-hidden>
                ·
              </span>
              <a
                href="https://www.gamblersanonymous.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#E8B86D] underline-offset-2 hover:underline"
              >
                Gamblers Anonymous
              </a>
              <span className="inline-flex items-center rounded-full border border-red-700/50 bg-red-950/50 px-3 py-1.5 text-xs font-bold text-red-300">
                +18 فقط
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
