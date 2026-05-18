'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

import { CarPulseLogo } from './CarPulseLogo';
import { Container } from './Container';
import { DemoFlowButton } from './DemoFlowButton';
import { MobileSidebar } from './MobileSidebar';

const NAV_LINKS = [
  { href: '#comment', label: 'Comment ça marche' },
  { href: '#faq', label: 'FAQ' },
  { href: '#connexion', label: 'Se connecter' },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-[14px] backdrop-saturate-150 border-b border-white/40 shadow-[0_1px_20px_-8px_rgba(0,0,0,0.08)]'
            : 'bg-white/40 backdrop-blur-[10px] border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between sm:h-20">
<Link
  href="/"
  className="inline-flex items-center"
  aria-label="CarPulse"
>
  <CarPulseLogo variant="image-dark" />
</Link>

            {/* Desktop nav + CTA (groupés à droite) */}
            <div className="hidden items-center gap-8 lg:flex">
              <nav
                className="flex items-center gap-7"
                aria-label="Navigation principale"
              >
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-[14px] font-medium text-[#374151] transition-colors hover:text-[#FE6C0E]"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <DemoFlowButton
                variant="primary"
                size="sm"
                className="rounded-[12px] bg-[#1A1A1A] px-5 py-2 text-[13px] font-semibold text-white hover:bg-[#000] border-transparent"
                style={{
                  background: '#1A1A1A',
                  borderColor: 'transparent',
                  color: '#FFFFFF',
                }}
              >
                Démo
              </DemoFlowButton>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#E5E7EB] bg-white/70 text-[#1A1A1A] transition-colors hover:bg-white lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </Container>
      </header>

      {/* Spacer pour compenser le header fixed */}
      <div className="h-16 sm:h-20" aria-hidden />

      <MobileSidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}