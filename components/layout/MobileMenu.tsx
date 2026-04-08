"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: Props) {
  const pathname = usePathname();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative ms-auto w-80 max-w-full bg-white h-full overflow-y-auto flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4DA]">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 1L12.39 7.26L19 7.64L14 12.14L15.56 19L10 15.77L4.44 19L6 12.14L1 7.64L7.61 7.26L10 1Z" fill="#C8963E" />
            </svg>
            <span className="font-bold text-[#C8963E]">كازينو عربي أونلاين</span>
          </div>
          <button type="button" onClick={onClose} className="text-[#888] hover:text-[#1A1A1A]" aria-label="إغلاق">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 py-2">
          {links.map((link) => {
            const active = link.href === "/"
              ? pathname === "/"
              : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={`flex items-center px-5 py-3.5 text-sm font-semibold border-b border-[#F0EDE5] min-h-[48px] transition-colors ${
                  active
                    ? "bg-[#F7F4EE] text-[#C8963E]"
                    : "text-[#1A1A1A] hover:text-[#C8963E]"
                }`}
              >
                <span className={`me-2 ${active ? "text-[#C8963E]" : "text-[#C8963E]"}`}>›</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
