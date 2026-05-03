import type { Metadata } from "next";

import { Button } from "../components/ui/button";

export const metadata: Metadata = {
  title: "Page introuvable - CarPulse",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

const ACCENT = "#FE6C0E";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
      style={{
        background:
          "linear-gradient(1.29deg, #FF882B -22.66%, #FFF7ED 42.29%, #FFFFFF 94.04%)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[420px] bg-[radial-gradient(ellipse_70%_60%_at_40%_60%,rgba(255,136,43,0.55),transparent_70%)] blur-2xl sm:-left-32 sm:h-[380px] sm:w-[520px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[420px] bg-[radial-gradient(ellipse_70%_60%_at_60%_60%,rgba(255,136,43,0.55),transparent_70%)] blur-2xl sm:-right-32 sm:h-[380px] sm:w-[520px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[640px]">
        <p
          className="text-[120px] font-extrabold leading-none tracking-tight sm:text-[180px]"
          style={{
            background: "linear-gradient(180deg, #FF882B 0%, #FE5E00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>
        <h1 className="mt-2 text-balance text-[28px] font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-[36px] md:text-[44px]">
          Cette page a pris un{" "}
          <span style={{ color: ACCENT }}>mauvais virage</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-[480px] text-pretty text-[17px] leading-relaxed text-[#6B7280]">
          La page que vous cherchez n&apos;existe pas, a été déplacée, ou est
          partie chercher des voitures sous-évaluées.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            variant="primary"
            size="md"
            className="w-full max-w-[280px] rounded-[16px] px-8 sm:w-auto sm:min-w-[200px]"
            style={{
              background: `linear-gradient(180deg, ${ACCENT} 0%, #FF8A3D 100%)`,
              borderColor: "#FFB366",
            }}
            asChild
          >
            <a href="/">Retour à l&apos;accueil</a>
          </Button>
          <Button
            variant="tertiary"
            size="md"
            className="w-full max-w-[280px] rounded-[16px] px-8 sm:w-auto sm:min-w-[200px]"
            asChild
          >
            <a href="/#faq">Consulter la FAQ</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
