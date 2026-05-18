'use client';

import { Plus } from 'lucide-react';
import { useState, type ReactNode } from 'react';

interface FaqAccordionProps {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function FaqAccordion({
  question,
  children,
  defaultOpen = false,
}: FaqAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-[14px] border bg-white transition-all duration-300 ${
        open
          ? 'border-[#FE6C0E]/30 shadow-[0_8px_24px_-12px_rgba(254,108,14,0.25)]'
          : 'border-[#E5E7EB] hover:border-[#E5E7EB]'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={open}
      >
        <span className="text-[14px] font-semibold leading-snug text-[#1A1A1A] sm:text-[15px]">
          {question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-45 border-[#FE6C0E] text-[#FE6C0E]'
              : 'border-[#E5E7EB] text-[#6B7280]'
          }`}
          aria-hidden
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-[14px] leading-relaxed text-[#6B7280] sm:px-6 sm:pb-6 sm:text-[15px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}