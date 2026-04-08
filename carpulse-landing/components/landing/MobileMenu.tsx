"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { DemoFlowButton } from "./DemoFlowButton";

const LINKS = [
  { href: "#comment", label: "Comment ça marche" },
  { href: "#faq", label: "FAQ" },
  { href: "#connexion", label: "Se connecter" },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#1A1A1A] transition hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE6C0E]/40"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-white px-6 pb-8 pt-6 shadow-[-8px_0_40px_rgba(0,0,0,0.12)]"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1A1A1A] hover:bg-[#F3F4F6]"
                aria-label="Fermer"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-[#374151] transition hover:bg-[#F9FAFB] hover:text-[#111827]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-8">
              <DemoFlowButton
                variant="secondary"
                size="md"
                fullWidth
                className="rounded-[16px]"
                onClick={() => setOpen(false)}
              >
                Démo
              </DemoFlowButton>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
