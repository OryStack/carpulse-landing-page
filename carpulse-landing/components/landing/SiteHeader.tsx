"use client";

import { useEffect, useState } from "react";

import { CarPulseLogo } from "./CarPulseLogo";
import { Container } from "./Container";
import { DemoFlowButton } from "./DemoFlowButton";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        {/* Header mobile */}
        <header className="relative flex items-center justify-between px-2 py-2 md:hidden">
          <a href="/" aria-label="Accueil CarPulse" className="inline-flex shrink-0 items-center">
            <CarPulseLogo variant="image-dark" priority />
          </a>
          <MobileMenu />
        </header>

        {/* Header desktop */}
        <header className="relative hidden gap-4 py-2 sm:gap-6 sm:py-4 md:flex md:flex-row md:items-center md:justify-between">
          <a href="/" aria-label="Accueil CarPulse" className="inline-flex shrink-0 items-center">
            <CarPulseLogo variant="image-dark" priority />
          </a>
          <nav
            className="hidden w-full min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[18px] font-medium text-[#4B5563] sm:gap-x-5 md:flex md:w-auto md:flex-nowrap md:justify-end md:gap-6 md:text-[16px]"
            aria-label="Navigation principale"
          >
            <a href="#processus" className="hover:text-[#1A1A1A]">
              Comment ça marche
            </a>
            <a href="#faq" className="hover:text-[#1A1A1A]">
              FAQ
            </a>
            <a
              href="https://dev.getcarpulse.com/login"
              className="hover:text-[#1A1A1A]"
              target="_blank"
              rel="noreferrer"
            >
              Se connecter
            </a>
            <DemoFlowButton variant="secondary" size="sm" className="ml-0 md:ml-1">
              Démo
            </DemoFlowButton>
          </nav>
        </header>
      </Container>
    </div>
  );
}
