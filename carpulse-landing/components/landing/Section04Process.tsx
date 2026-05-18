'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Rocket, ScanSearch } from 'lucide-react';

import { Container } from './Container';

const BRAND_ORANGE = '#FE5E00';

type ProcessSlide = {
  title: string;
  body: string;
  visualSrc: string;
  visualAlt: string;
  footer?: 'objectif' | 'resultat';
};

const slides: ProcessSlide[] = [
  {
    title: '1. Analyse des annonces',
    body: 'CarPulse scanne en continu les nouvelles annonces publiées sur les principales plateformes automobiles. Chaque véhicule est analysé selon plusieurs critères : prix, kilométrage, version, équipements et historique du marché.',
    visualSrc: '/process/decor-magnifier.png',
    visualAlt:
      'Annonces automobiles analysées, avec une loupe illustrant la veille du marché',
    footer: 'objectif',
  },
  {
    title: '2. Comparaison avec le marché',
    body: "L'algorithme compare chaque véhicule aux transactions et annonces similaires. Cela permet d'identifier rapidement les écarts de prix et les véhicules potentiellement sous-évalués.",
    visualSrc: '/process/decor-automation.png',
    visualAlt:
      'Comparaison du prix de vente, du prix du marché et de la marge potentielle',
  },
  {
    title: '3. Détection des opportunités',
    body: 'Les véhicules présentant un potentiel sont automatiquement sélectionnés et classés. Chaque opportunité inclut un score, une estimation du prix marché et une analyse rapide du véhicule.',
    visualSrc: '/process/decor-comparison.png',
    visualAlt:
    "Sélection d'opportunités et alertes sur les bonnes affaires automobiles",
    footer: 'resultat',
  },
];

function ProcessNavDot({
  active,
  onClick,
  stepLabel,
}: {
  active: boolean;
  onClick: () => void;
  stepLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Afficher l'étape : ${stepLabel}`}
      aria-current={active ? 'step' : undefined}
      className={
        active
          ? 'h-2 w-2 shrink-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-[width,opacity] lg:h-2 lg:w-8 lg:shadow-[0_0_14px_rgba(255,255,255,0.4)]'
          : 'h-2 w-2 shrink-0 rounded-full bg-white/25 transition hover:bg-white/40 lg:bg-white/30 lg:hover:bg-white/45'
      }
    />
  );
}

const navBtnClass =
  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A67C52]/70 bg-white/[0.06] text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE5E00]/45 sm:h-10 sm:w-10 lg:h-11 lg:w-11 lg:rounded-[16px] lg:border-white/30';

export function Section04Process() {
  const [index, setIndex] = useState(0);
  const n = slides.length;
  const isSlide1 = index === 0;
  const isSlide2 = index === 1;
  const isSlide3 = index === 2;
  const hasGradientTitle = isSlide1 || isSlide2 || isSlide3;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest('input, textarea, select, [contenteditable=true]')) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const slide = slides[index];

  return (
    <section
      id="processus"
      aria-roledescription="carousel"
      aria-label="Comment CarPulse détecte les opportunités du marché"
      className="relative overflow-hidden bg-black py-8 text-white sm:py-10"
    >
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden
      >
        <Image
          src="/process/process-bg.png"
          alt=""
          fill
          className="object-cover object-bottom-right"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/55 via-black/25 to-black/35" />
      </div>

      <Container className="relative z-10">
        <p className="mx-auto max-w-[860px] text-center text-balance text-xl leading-snug text-[#FFBC71] sm:text-3xl lg:text-[2rem] lg:leading-tight">
          <span className="lg:hidden">Comment ça marche&nbsp;?</span>
          <span className="hidden lg:inline uppercase">
  Comment CarPulse détecte les opportunités du marché
</span>
        </p>
        <h2 className="mx-auto mt-3 max-w-[860px] text-center text-balance text-xl font-bold leading-snug sm:mt-5 sm:text-3xl lg:text-[2rem] lg:leading-tight">
          <span className="lg:hidden">
            CarPulse travaille pour vous – 24h/24, sans rien laisser passer
          </span>
          <span className="hidden lg:inline">
            Un processus simple qui transforme des milliers d'annonces en
            opportunités exploitables.
          </span>
        </h2>

        <div
          key={index}
          className="mt-6 grid items-center gap-6 sm:mt-10 sm:gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16"
        >
          <div className="order-2 min-w-0 max-lg:text-left lg:order-1 lg:pr-4">
            <h3
              className={
                hasGradientTitle
                  ? 'bg-clip-text text-[28px] font-bold leading-[1.05] tracking-tight text-transparent sm:text-[44px] lg:text-[52px]'
                  : 'text-xl font-bold sm:text-3xl lg:text-[1.75rem] lg:leading-tight'
              }
              style={
                hasGradientTitle
                  ? {
                      backgroundImage:
                        'linear-gradient(43.89deg, #FE5E00 0%, #FFBC71 100%)',
                    }
                  : { color: BRAND_ORANGE }
              }
            >
              {isSlide1 ? (
                <>
                  1. Analyse des
                  <br className="hidden sm:block" />
                  annonces
                </>
              ) : isSlide2 ? (
                <>
                  2. Comparaison
                  <br className="hidden sm:block" />
                  avec le marché
                </>
              ) : isSlide3 ? (
                <>
                  3. Détection des
                  <br className="hidden sm:block" />
                  opportunités
                </>
              ) : (
                slide.title
              )}
            </h3>
            <p
              className={
                isSlide1 || isSlide2
                  ? 'mt-4 max-w-[520px] text-[15px] leading-[1.5] text-white/80 sm:mt-6 sm:text-[18px] sm:leading-[1.55]'
                  : 'mt-4 text-[15px] leading-relaxed text-white/88 sm:mt-5 sm:text-[18px]'
              }
            >
              {isSlide1 ? (
                <>
                  CarPulse scanne en continu les nouvelles annonces publiées sur
                  les principales plateformes automobiles. Chaque véhicule est
                  analysé selon plusieurs critères : prix, kilométrage, version,
                  équipements et historique du marché.
                </>
              ) : isSlide2 ? (
                <>
                  L&apos;algorithme compare chaque véhicule aux transactions et
                  annonces similaires. Cela permet d&apos;identifier rapidement les
                  écarts de prix et les véhicules potentiellement sous-évalués.
                </>
              ) : isSlide3 ? (
                <>
                  Les véhicules présentant un potentiel sont automatiquement
                  sélectionnés et classés. Chaque opportunité inclut un score,
                  une estimation du prix marché et une analyse rapide du
                  véhicule.
                </>
              ) : (
                slide.body
              )}
            </p>

            {slide.footer === 'objectif' ? (
              <div className="mt-5 flex gap-2.5 sm:mt-8 sm:gap-3">
                <ScanSearch
                  className="mt-2.5 h-4 w-4 shrink-0 sm:mt-3 sm:h-[18px] sm:w-[18px]"
                  style={{ color: '#FF8E2B' }}
                  aria-hidden
                />
                <p
                  className="text-[15px] leading-[1.5] sm:text-[18px] sm:leading-[1.55]"
                  style={{ color: '#FFD8A8' }}
                >
                  <span className="font-bold" style={{ color: '#FF8E2B' }}>
                    Objectif :
                  </span>{' '}
                  repérer les véhicules sous-évalués dès leur mise en ligne.
                </p>
              </div>
            ) : null}

            {slide.footer === 'resultat' ? (
              <div className="mt-5 flex gap-2.5 sm:mt-8 sm:gap-3">
                <Rocket
                  className="mt-0.5 h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]"
                  style={{ color: '#FF8E2B' }}
                  aria-hidden
                />
                <p
                  className="text-[14px] leading-[1.5] sm:text-[16px] sm:leading-[1.55]"
                  style={{ color: '#FFD8A8' }}
                >
                  <span className="font-bold" style={{ color: '#FF8E2B' }}>
                    Résultat :
                  </span>{' '}
                  vous ne manquez plus aucune bonne affaire. Vous décidez,
                  achetez et revendez plus vite avec des marges maîtrisées.
                </p>
              </div>
            ) : null}
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2 lg:max-w-none lg:justify-self-end">
            <div className="relative aspect-[4/3] w-full max-lg:max-h-[200px] sm:aspect-[5/4] sm:max-h-none lg:aspect-[4/3]">
              <Image
                src={slide.visualSrc}
                alt={slide.visualAlt}
                fill
                className={
                  isSlide1
                    ? 'object-contain object-right drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)] lg:scale-[1.06] lg:translate-x-4'
                    : 'object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]'
                }
                sizes="(min-width: 1024px) 50vw, 90vw"
                priority={index === 0}
              />
            </div>
          </div>
        </div>

        <div
          className="mt-6 flex items-center justify-center gap-4 sm:mt-12 sm:gap-6 lg:mt-14 lg:gap-6"
          role="group"
          aria-label="Contrôles du carrousel"
        >
          <button
            type="button"
            className={navBtnClass}
            aria-label="Étape précédente"
            onClick={() => go(-1)}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
          <div className="flex items-center gap-2.5 sm:gap-3">
            {slides.map((s, i) => (
              <ProcessNavDot
                key={s.title}
                active={i === index}
                stepLabel={s.title}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={navBtnClass}
            aria-label="Étape suivante"
            onClick={() => go(1)}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  );
}