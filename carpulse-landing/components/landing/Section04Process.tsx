"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Rocket, ScanSearch } from "lucide-react";

import { Container } from "./Container";

const BRAND_ORANGE = "#FE5E00";

type ProcessSlide = {
  title: string;
  body: string;
  visualSrc: string;
  visualAlt: string;
  footer?: "objectif" | "resultat";
};

const slides: ProcessSlide[] = [
  {
    title: "1. Analyse des annonces",
    body:
      "CarPulse scanne en continu les nouvelles annonces publiées sur les principales plateformes automobiles. Chaque véhicule est analysé selon plusieurs critères : prix, kilométrage, version, équipements et historique du marché.",
    visualSrc: "/process/decor-magnifier.png",
    visualAlt:
      "Annonces automobiles analysées, avec une loupe illustrant la veille du marché",
    footer: "objectif",
  },
  {
    title: "2. Comparaison avec le marché",
    body:
      "L'algorithme compare chaque véhicule aux transactions et annonces similaires. Cela permet d'identifier rapidement les écarts de prix et les véhicules potentiellement sous-évalués.",
    visualSrc: "/process/decor-automation.png",
    visualAlt:
      "Comparaison du prix de vente, du prix du marché et de la marge potentielle",
  },
  {
    title: "3. Détection des opportunités",
    body:
      "Les véhicules présentant un potentiel sont automatiquement sélectionnés et classés. Chaque opportunité inclut un score, une estimation du prix marché et une analyse rapide du véhicule.",
    visualSrc: "/process/decor-comparison.png",
    visualAlt:
      "Sélection d’opportunités et alertes sur les bonnes affaires automobiles",
    footer: "resultat",
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
      aria-label={`Afficher l’étape : ${stepLabel}`}
      aria-current={active ? "step" : undefined}
      className={
        active
          ? "h-2 w-8 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.4)] transition-[width,opacity]"
          : "h-2 w-2 rounded-full bg-white/30 transition hover:bg-white/45"
      }
    />
  );
}

const navBtnClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-white/30 bg-white/[0.06] text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE5E00]/45";

export function Section04Process() {
  const [index, setIndex] = useState(0);
  const n = slides.length;
  const isSlide1 = index === 0;
  const isSlide2 = index === 1;
  const isSlide3 = index === 2;
  const hasGradientTitle = isSlide1 || isSlide2 || isSlide3;

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + n) % n);
  }, [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea, select, [contenteditable=true]")) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = slides[index];

  return (
    <section
      id="processus"
      aria-roledescription="carousel"
      aria-label="Comment CarPulse détecte les opportunités du marché"
      className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <Image
          src="/process/process-bg.png"
          alt=""
          fill
          className="object-cover object-bottom-right"
          sizes="100vw"
          priority
        />
        {/* Léger voile pour la lisibilité du texte à gauche, sans masquer la texture Figma */}
        <div className="absolute inset-0 bg-linear-to-br from-black/55 via-black/25 to-black/35" />
      </div>

      <Container className="relative z-10">
        <p
          className="mx-auto max-w-[860px] text-[#FFBC71] text-center text-balance text-2xl leading-snug sm:text-3xl lg:text-[2rem] lg:leading-tight"
        >
          Comment CarPulse détecte les opportunités
          du marché
          <br />
        </p>
        <h2 className="mx-auto mt-5 max-w-[860px] text-center text-balance text-2xl font-bold leading-snug sm:text-3xl lg:text-[2rem] lg:leading-tight">
          Un processus simple qui transforme des milliers <br />d’annonces en
          opportunités exploitables.
        </h2>

        <div
          key={index}
          className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16"
        >
          <div className="min-w-0 lg:pr-4">
            <h3
              className={
                hasGradientTitle
                  ? "bg-clip-text text-[38px] font-bold leading-[1.02] tracking-tight text-transparent sm:text-[44px] lg:text-[52px]"
                  : "text-2xl font-bold sm:text-3xl lg:text-[1.75rem] lg:leading-tight"
              }
              style={
                hasGradientTitle
                  ? {
                      backgroundImage:
                        "linear-gradient(43.89deg, #FE5E00 0%, #FFBC71 100%)",
                    }
                  : { color: BRAND_ORANGE }
              }
            >
              {isSlide1 ? (
                <>
                  1. Analyse des
                  <br />
                  annonces
                </>
              ) : isSlide2 ? (
                <>
                  2. Comparaison
                  <br />
                  avec le marché
                </>
              ) : isSlide3 ? (
                <>
                  3. Détection des
                  <br />
                  opportunités
                </>
              ) : (
                slide.title
              )}
            </h3>
            <p
              className={
                isSlide1 || isSlide2
                  ? "mt-6 max-w-[520px] text-[13px] leading-[1.55] text-white/80 sm:text-[13.5px]"
                  : "mt-5 text-[15px] leading-relaxed text-white/88"
              }
            >
              {isSlide1 ? (
                <>
                  CarPulse scanne en continu les nouvelles annonces
                  <br />
                  publiées sur les principales plateformes automobiles.
                  <br />
                  Chaque véhicule est analysé selon plusieurs critères : prix,
                  <br />
                  kilométrage, version, équipements et historique du marché.
                </>
              ) : isSlide2 ? (
                <>
                  L&apos;algorithme compare chaque véhicule aux transactions et
                  <br />
                  annonces similaires.
                  <br />
                  Cela permet d&apos;identifier rapidement les écarts de prix et les
                  <br />
                  véhicules potentiellement sous-évalués.
                </>
              ) : isSlide3 ? (
                <>
                  Les véhicules présentant un potentiel sont automatiquement sélectionnés
                  <br />
                  et classés. Chaque opportunité inclut un score, une estimation du prix
                  <br />
                  marché et une analyse rapide du véhicule.
                </>
              ) : (
                slide.body
              )}
            </p>

            {slide.footer === "objectif" ? (
              <div
                className={
                  isSlide1
                    ? "mt-7 inline-flex max-w-[520px] items-start gap-3 rounded-[10px] px-4 py-3"
                    : "mt-8 flex gap-3 rounded-xl border border-white/12 bg-white/6 p-4 backdrop-blur-sm"
                }
              >
                <ScanSearch
                  className={isSlide1 ? "mt-0.5 h-[18px] w-[18px] shrink-0" : "mt-0.5 h-6 w-6 shrink-0"}
                  style={{ color: isSlide1 ? "#FF8E2B" : BRAND_ORANGE }}
                  aria-hidden
                />
                <p
                  className={
                    isSlide1
                      ? "text-[12.5px] leading-[1.45]"
                      : "text-[14px] leading-relaxed text-white/90"
                  }
                  style={isSlide1 ? { color: "#FFD8A8" } : undefined}
                >
                  <span className="font-bold" style={{ color: isSlide1 ? "#FF8E2B" : BRAND_ORANGE }}>
                    Objectif :
                  </span>{" "}
                  repérer les véhicules sous-évalués dès leur <br /> mise en ligne.
                </p>
              </div>
            ) : null}

            {slide.footer === "resultat" ? (
              <div
                className={
                  isSlide3
                    ? "mt-7 inline-flex max-w-[560px] items-start gap-3"
                    : "mt-8 flex gap-3 rounded-xl border border-white/12 bg-white/6 p-4 backdrop-blur-sm"
                }
              >
                <Rocket
                  className={isSlide3 ? "mt-0.5 h-[18px] w-[18px] shrink-0" : "mt-0.5 h-6 w-6 shrink-0"}
                  style={{ color: isSlide3 ? "#FF8E2B" : BRAND_ORANGE }}
                  aria-hidden
                />
                <p
                  className={isSlide3 ? "text-[12.5px] leading-[1.45]" : "text-[14px] leading-relaxed text-white/90"}
                  style={isSlide3 ? { color: "#FFD8A8" } : undefined}
                >
                  <span className="font-bold" style={{ color: isSlide3 ? "#FF8E2B" : BRAND_ORANGE }}>
                    Résultat :
                  </span>{" "}
                  {isSlide3 ? (
                    <>
                      vous ne manquez plus aucune bonne
                      <br />
                      affaire. Vous décidez, achetez et revendez plus vite
                      <br />
                      avec des marges maîtrisées.
                    </>
                  ) : (
                    <>
                      vous ne manquez plus aucune bonne affaire. Vous décidez,
                      achetez et revendez plus vite avec des marges maîtrisées.
                    </>
                  )}
                </p>
              </div>
            ) : null}
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none lg:justify-self-end">
            <div
              className={
                isSlide1
                  ? "relative aspect-5/4 w-full overflow-visible"
                  : "relative aspect-4/3 w-full sm:aspect-5/4"
              }
            >
              <Image
                src={slide.visualSrc}
                alt={slide.visualAlt}
                fill
                className={
                  isSlide1
                    ? "object-contain object-right drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)] lg:scale-[1.06] lg:translate-x-4"
                    : "object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
                }
                sizes="(min-width: 1024px) 50vw, 90vw"
                priority={index === 0}
              />
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex items-center justify-center gap-5 sm:mt-14 sm:gap-6"
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
