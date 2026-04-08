import Link from "next/link";

interface Props {
  title: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "dark" | "light";
}

export default function CTASection({
  title,
  body,
  buttonLabel,
  buttonHref,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={`rounded-xl p-6 md:p-8 ${
        isDark
          ? "text-white"
          : "bg-[#F0EDE5] border border-[#E8E4DA] text-[#1A1A1A]"
      }`}
      style={isDark ? { background: "#1C1C1E" } : undefined}
    >
      <h2 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : ""}`}>
        {title}
      </h2>
      <p
        className={`text-sm mb-6 max-w-2xl leading-relaxed ${
          isDark ? "text-[#A0A0A0]" : "text-[#555]"
        }`}
      >
        {body}
      </p>
      <Link
        href={buttonHref}
        className="inline-block bg-[#10B981] hover:bg-[#0EA572] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
