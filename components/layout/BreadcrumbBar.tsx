import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function BreadcrumbBar({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-[#E8E4DA] bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-xs text-[#888]">
        {items.map((item, i) => (
          <span key={`${item.href}-${i}`} className="flex items-center gap-2">
            {i > 0 && (
              <span className="select-none text-[#CCC]" aria-hidden>
                /
              </span>
            )}
            {i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#C8963E] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[#C8963E]">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
