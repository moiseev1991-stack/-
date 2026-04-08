"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/types/casino";

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = active === idx;
        return (
          <div
            key={idx}
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow ${
              open
                ? "border-[#C8963E]/45 shadow-md ring-1 ring-[#C8963E]/15"
                : "border-[#E0D9CC] hover:border-[#C8963E]/35 hover:shadow"
            } `}
          >
            <button
              type="button"
              onClick={() => setActive(open ? null : idx)}
              aria-expanded={open}
              className="flex w-full cursor-pointer items-start gap-2 p-5 text-end transition-colors hover:bg-[#FAFAF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8963E]"
            >
              <span className="min-w-0 flex-1 text-base font-semibold leading-relaxed text-[#1A1A1A]">
                {item.question}
              </span>
              <svg
                className={`mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8963E] transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                } `}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="border-t border-[#F0EDE5] px-5 pb-5 pt-0">
                <p className="pt-4 text-sm leading-relaxed text-[#555]">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
