import Link from "next/link";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  /** Optional link aligned with the title row (e.g. «عرض الكل») */
  action?: { label: string; href: string };
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  action,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[#555]">
              {subtitle}
            </p>
          )}
        </div>
        {action && (
          <Link
            href={action.href}
            className="shrink-0 text-sm font-semibold text-[#C8963E] underline-offset-4 transition-colors hover:text-[#9A732E] hover:underline"
          >
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
