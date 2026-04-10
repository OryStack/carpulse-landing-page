"use client";

import * as React from "react";

import { Button } from "./button";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  planifierDemoHref: string;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function DemoModal({ isOpen, onClose, planifierDemoHref }: DemoModalProps) {
  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Planifier une démo"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={cx(
          "relative w-full max-w-[760px] overflow-hidden rounded-[18px] bg-[#FFF7ED]",
          "shadow-[0_24px_80px_-12px_rgba(0,0,0,0.35)]",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#111827]/70 transition hover:bg-black/5 hover:text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE6C0E]/40"
          aria-label="Fermer"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>

        <div className="px-6 py-14 text-center sm:px-10 sm:py-16">
          <div className="mx-auto mb-6 h-12 w-12 select-none rounded-full bg-white shadow-sm">
            <div className="grid h-full w-full place-items-center text-[#FE6C0E]">
              <span aria-hidden className="text-2xl">
                👋
              </span>
            </div>
          </div>

          <h2 className="text-balance text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
            Prêt à prendre la route avec{" "}
            <span className="text-[#FE6C0E]">CarPulse</span> ?
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-pretty text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
            L&apos;accès à CarPulse se fait uniquement après une courte démonstration
            personnalisée de la plateforme. Notre équipe validera ensuite votre profil et
            activera votre compte.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              variant="primary"
              size="md"
              className="rounded-[16px] px-8"
              style={{
                background: "linear-gradient(69.08deg, #FE6C0E 7.63%, #FF963A 54.5%)",
                borderColor: "#FFBC71",
                boxShadow: "0px 4px 10px 0px #FFFFFF40 inset",
              }}
              onClick={() => {
                window.location.assign(planifierDemoHref);
              }}
            >
              Planifier une démo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

