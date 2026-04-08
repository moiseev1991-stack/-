"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/lib/nav-links";

const NAV_HREFS: Set<string> = new Set(navLinks.map((link) => link.href));

function isActiveNav(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  // Only match children if no more-specific nav link covers this path
  if (pathname.startsWith(`${href}/`) && !NAV_HREFS.has(pathname)) return true;
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-[#E8E4DA] bg-white transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between border-b border-[#F0EDE5] px-4">
          <Link href="/" className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M10 1L12.39 7.26L19 7.64L14 12.14L15.56 19L10 15.77L4.44 19L6 12.14L1 7.64L7.61 7.26L10 1Z"
                fill="#C8963E"
              />
            </svg>
            <span className="text-lg font-bold text-[#C8963E]">
              كازينو عربي أونلاين
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-1 text-[#C8963E] md:hidden"
            aria-label="القائمة"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <nav className="hidden border-b border-[#F0EDE5] md:block" aria-label="التنقل الرئيسي">
          <div className="mx-auto max-w-7xl overflow-x-auto overscroll-x-contain px-3 scrollbar-hide sm:px-4">
            <ul className="flex min-h-[48px] w-max min-w-full items-center justify-between gap-x-1.5 gap-y-1 py-2.5 lg:gap-x-3">
              {navLinks.map((link) => {
                const active = isActiveNav(pathname, link.href);
                return (
                  <li key={link.href} className="min-w-[5rem] shrink-0 basis-0 flex-1 text-center">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-2 py-2.5 text-sm font-semibold leading-snug transition-colors ${
                        active
                          ? "bg-[#F7F4EE] text-[#C8963E] ring-1 ring-[#C8963E]/25"
                          : "text-[#1A1A1A] hover:bg-[#FAFAF8] hover:text-[#C8963E]"
                      } `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={[...navLinks]} />
    </>
  );
}
