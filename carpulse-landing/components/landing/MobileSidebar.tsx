'use client';

import { useEffect } from 'react';
import {
  X,
  Zap,
  HelpCircle,
  LogIn,
  Tag,
  MessageSquareQuote,
} from 'lucide-react';

import { CarPulseLogo } from './CarPulseLogo';
import { DemoFlowButton } from './DemoFlowButton';

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { href: '#comment', label: 'Comment ça marche', Icon: Zap },
  { href: '#faq', label: 'FAQ', Icon: HelpCircle },
  { href: '#connexion', label: 'Se connecter', Icon: LogIn },
] as const;

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(85vw,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Menu de navigation"
      >
        {/* Header drawer */}
        <div className="flex items-center justify-between px-5 py-5">
          <CarPulseLogo variant="image-dark" />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#E5E7EB] text-[#374151] transition-colors hover:bg-[#FFF7ED] hover:text-[#FE6C0E]"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Nav items */}
        <nav
          className="flex-1 overflow-y-auto px-3 py-5"
          aria-label="Navigation mobile"
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-[12px] px-4 py-3.5 transition-colors hover:bg-[#FFF7ED] active:bg-[#FFF0E0]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF7ED] text-[#FE6C0E] transition-colors group-hover:bg-white">
                    <Icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>
                  <span className="text-[15px] font-medium text-[#1A1A1A]">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-5">
          <DemoFlowButton
            variant="primary"
            size="lg"
            fullWidth
            className="rounded-[14px]"
            style={{
              background: 'linear-gradient(180deg, #FE6C0E 0%, #FF8A3D 100%)',
              borderColor: '#FFB366',
              boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
            }}
            onClick={onClose}
          >
            Réserver une démo
          </DemoFlowButton>
        </div>
      </aside>
    </div>
  );
}