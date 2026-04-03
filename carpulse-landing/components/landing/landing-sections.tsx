import type { ReactNode } from "react";

import Image from "next/image";

import { CarOpportunityCard } from "./CarOpportunityCard";
import { CarPulseLogo } from "./CarPulseLogo";
import { Container } from "./Container";
import {
  Section07Audience,
  Section08Testimonials,
  Section09PricingTrust,
  Section10FaqCta,
  SiteFooter,
} from "./landing-bottom-sections";
import { IconBell, IconMapPin, IconTarget } from "./icons";
import { Button } from "../ui/button";

const ORANGE = "#FF7A22";

const brandLogos = [
  { alt: "BMW", src: "/brands/bmw.png", w: 64, h: 64 },
  { alt: "Jaguar", src: "/brands/jaguar.png", w: 114, h: 64 },
  { alt: "Mercedes-Benz", src: "/brands/mercedes.png", w: 128, h: 72 },
  { alt: "Audi", src: "/brands/audi.png", w: 87, h: 32 },
  { alt: "Tesla", src: "/brands/tesla.png", w: 62, h: 64 },
  { alt: "Chevrolet", src: "/brands/chevrolet.png", w: 113, h: 64 },
  { alt: "Kia", src: "/brands/kia.png", w: 113, h: 64 },
  { alt: "Hyundai", src: "/brands/hyundai.png", w: 118, h: 64 },
] as const;

function SectionGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,122,34,0.14),transparent_65%)]"
      aria-hidden
    />
  );
}

export function Section01Hero() {
  return (
    <section
      className="relative overflow-hidden pb-10 pt-3 sm:pb-14 sm:pt-4"
      style={{
        background:
          "linear-gradient(1.29deg, #FF882B -22.66%, #FFF7ED 42.29%, #FFFFFF 94.04%)",
      }}
    >
      {/* glows proches du design (bas gauche/droite) */}
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[420px] bg-[radial-gradient(ellipse_70%_60%_at_40%_60%,rgba(255,136,43,0.55),transparent_70%)] blur-2xl sm:-left-32 sm:h-[380px] sm:w-[520px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[420px] bg-[radial-gradient(ellipse_70%_60%_at_60%_60%,rgba(255,136,43,0.55),transparent_70%)] blur-2xl sm:-right-32 sm:h-[380px] sm:w-[520px]"
        aria-hidden
      />

      <Container>
        <header className="flex items-center justify-between gap-6 py-6 sm:py-7">
          <a href="#" className="inline-flex items-center">
            <CarPulseLogo priority />
          </a>
          <nav className="flex items-center gap-5 text-[12px] font-medium text-[#4B5563] sm:gap-6 sm:text-[13px]">
            <a href="#comment" className="hover:text-[#1A1A1A]">
              Comment ça marche
            </a>
            <a href="#faq" className="hover:text-[#1A1A1A]">
              FAQ
            </a>
            <a href="#connexion" className="hover:text-[#1A1A1A]">
              Se connecter
            </a>
            <Button variant="secondary" size="sm" className="ml-1">
              Démo
            </Button>
          </nav>
        </header>

        <div className="relative pb-4 pt-3 text-center sm:pt-7">
          <h1 className="mx-auto max-w-[920px] text-balance text-[32px] font-bold leading-[1.06] tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
            Détectez les{" "}
            <span style={{ color: ORANGE }}>voitures sous-évaluées</span> avant
            vos concurrents.
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-pretty text-[13px] leading-relaxed text-[#4B5563] sm:mt-6 sm:text-[14px]">
            CarPulse analyse automatiquement le marché des annonces automobiles
            et vous envoie uniquement les véhicules avec un réel potentiel de
            marge.
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <Button variant="primary" size="md" className="min-w-[176px]">
              Découvrir CarPulse
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative mt-10 sm:mt-12">
        <Container>
          <div className="mx-auto max-w-[1080px]">
            <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_28px_90px_-18px_rgba(0,0,0,0.16)]">
            <Image
              src="/landing/dashboard-mes-deals.png"
              alt="Aperçu du dashboard CarPulse (Mes deals)"
              width={1024}
              height={752}
              priority
              className="h-auto w-full select-none"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export function Section02Logos() {
  return (
    <section
      className="relative z-20 -mt-26 bg-white py-9 pt-16 sm:-mt-20 sm:py-10 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90.02deg, #FFFFFF -3.45%, rgba(255, 255, 255, 0.425676) 17.96%, rgba(255, 255, 255, 0) 75.41%, #FFFFFF 104.13%)",
        }}
        aria-hidden
      />
      <Container>
        <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:flex-nowrap sm:justify-between sm:gap-x-8 lg:gap-x-12">
          {brandLogos.map((b) => (
            <div
              key={b.src}
              className="flex h-9 items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={b.w}
                height={b.h}
                className="h-[34px] w-auto select-none object-contain sm:h-[38px]"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#FFE4CC] bg-[#FFFBF7] p-8 shadow-sm">
      <div className="text-[#FF7A22]">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-[#1A1A1A]">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[#4B5563]">
        {children}
      </p>
    </div>
  );
}

export function Section03SingleFlow() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute -inset-x-10 -top-10 bottom-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,122,34,0.12),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-[#E5E5E5] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]" />
        </div>

        <h2 className="mx-auto mt-14 max-w-4xl text-center text-balance text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
          Un seul flux pour les{" "}
          <span style={{ color: ORANGE }}>meilleures opportunités</span>{" "}
          automobiles
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          <FeatureCard
            title="Gagnez du temps"
            icon={
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
                <path d="M16 10v7l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          >
            Plus besoin de fouiller les plateformes, les meilleures opportunités
            viennent à vous.
          </FeatureCard>
          <FeatureCard
            title="Augmentez vos marges"
            icon={
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                <path
                  d="M8 22l6-8 5 6 5-14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="22" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
          >
            Chaque véhicule est noté selon son écart au prix du marché.
          </FeatureCard>
          <FeatureCard
            title="Décidez plus vite"
            icon={
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                <path
                  d="M10 26l4-14 4 6 4-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Un mini-rapport explique en quelques secondes pourquoi le deal vaut
            le coup.
          </FeatureCard>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-[28px] bg-gradient-to-b from-[#FF8F4A] to-[#FF6A12] px-6 py-12 text-center shadow-[0_20px_50px_-15px_rgba(255,106,0,0.45)] sm:px-12 sm:py-14">
          <p className="text-2xl font-bold text-white sm:text-[1.65rem] sm:leading-snug">
            Réservez une démo gratuite de 15 minutes
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/95">
            Découvrez comment CarPulse détecte les meilleures affaires avant tout
            le monde.
          </p>
          <button
            type="button"
            className="mt-8 rounded-xl bg-[#1A1A1A] px-8 py-3.5 text-[14px] font-bold text-white transition hover:bg-black"
          >
            Réserver une démo gratuite
          </button>
        </div>
      </Container>
    </section>
  );
}

function WhyStatCard({
  icon,
  title,
  children,
  titleClass = "text-[#1A1A1A]",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  titleClass?: string;
}) {
  return (
    <div className="rounded-2xl bg-[#FFF7ED] p-8 sm:p-10">
      <div className="text-[#FF7A22]">{icon}</div>
      <p className={`mt-6 text-2xl font-bold ${titleClass}`}>{title}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-[#4B5563]">
        {children}
      </p>
    </div>
  );
}

export function Section04Why() {
  return (
    <section id="comment" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-block rounded-full bg-[#FFF3EB] px-4 py-1.5 text-[12px] font-semibold text-[#FF7A22]">
              Pourquoi CarPulse ?
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              <span style={{ color: ORANGE }}>Le sourcing automobile,</span>
              <br />
              <span className="text-[#1A1A1A]">
                c’est devenu une course contre la montre
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#4B5563] lg:pt-2">
            <p>
              Les bonnes affaires disparaissent en quelques heures. Sans
              veille structurée, vous passez à côté des véhicules les plus
              rentables.
            </p>
            <p>
              CarPulse surveille le marché en continu et ne vous envoie que ce
              qui mérite vraiment votre attention : écart de prix, liquidité,
              et potentiel de marge.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          <WhyStatCard
            title="3h par jour"
            icon={
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M19 19l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 12h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            }
          >
            Temps moyen passé à chercher des annonces
          </WhyStatCard>
          <WhyStatCard
            title="70 % des bonnes affaires"
            icon={
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                <path d="M6 22V10M12 22V6M18 22v-8M24 22v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          >
            Partent en quelques heures
          </WhyStatCard>
          <WhyStatCard
            title="100 % automatisé"
            titleClass="text-[#FF7A22]"
            icon={
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                <path d="M8 18l3 3 6-10 4 4 5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          >
            CarPulse surveille le marché pour vous
          </WhyStatCard>
        </div>
      </Container>
    </section>
  );
}

function MiniListingCard({
  title,
  sub,
  price,
  className = "",
}: {
  title: string;
  sub: string;
  price: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-[200px] rounded-xl border border-gray-100 bg-white p-3 shadow-lg ${className}`}
    >
      <div className="flex gap-2">
        <div className="h-14 w-20 shrink-0 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100" />
        <div className="min-w-0">
          <p className="truncate text-[11px] font-bold text-[#1A1A1A]">{title}</p>
          <p className="text-[10px] text-[#6B7280]">{sub}</p>
          <p className="mt-1 text-[12px] font-bold text-[#FF7A22]">{price}</p>
        </div>
      </div>
    </div>
  );
}

export function Section04Process() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 text-white sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,34,0.35),transparent_65%)] blur-2xl"
        aria-hidden
      />
      <Container className="relative">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF7A22]">
          Comment CarPulse détecte les opportunités du marché
        </p>
        <h2 className="mx-auto mt-5 max-w-[820px] text-center text-balance text-2xl font-bold leading-snug sm:text-3xl lg:text-[2rem]">
          Un processus simple qui transforme des milliers d’annonces en
          opportunités exploitables.
        </h2>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-[#FF7A22] sm:text-3xl">
              1. Analyse des annonces
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-white/80">
              CarPulse scanne en continu les annonces, normalise les données
              (prix, kilométrage, équipements, historique) et les compare au prix
              marché estimé pour isoler les écarts significatifs.
            </p>
            <div className="mt-8 flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <IconTarget className="mt-0.5 h-6 w-6 shrink-0 text-[#FF7A22]" />
              <p className="text-[14px] leading-relaxed">
                <span className="font-bold text-[#FF7A22]">Objectif :</span>{" "}
                <span className="text-white/90">
                  repérer les véhicules sous-évalués dès leur mise en ligne.
                </span>
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px]">
            <MiniListingCard
              title="Mazda CX-3 Skyactiv"
              sub="72 000 km • Essence"
              price="14 500 €"
              className="left-4 top-6 z-10 rotate-[-4deg]"
            />
            <MiniListingCard
              title="Mercedes GLA 200 d"
              sub="98 000 km • Diesel"
              price="21 900 €"
              className="right-2 top-20 z-20 rotate-[3deg]"
            />
            <div className="absolute left-1/2 top-1/2 z-30 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF7A22] shadow-[0_20px_60px_rgba(255,122,34,0.45)]">
              <div className="relative flex h-[86px] w-[86px] items-center justify-center rounded-full border-[3px] border-white/90 bg-white/10">
                <svg viewBox="0 0 40 40" className="h-10 w-10 text-white" fill="none" aria-hidden>
                  <path d="M8 28V14M16 28V10M24 28v-8M32 28V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            aria-label="Précédent"
          >
            ‹
          </button>
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            aria-label="Suivant"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  );
}

export function Section05Opportunities() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Opportunités <span style={{ color: ORANGE }}>détectées</span> pour
            vous
          </h2>
          <button
            type="button"
            className="shrink-0 rounded-lg bg-[#FF7A22] px-6 py-3 text-[14px] font-bold text-white shadow-sm transition hover:brightness-105"
          >
            Analyse complètes
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          <CarOpportunityCard
            rating="7.4/10"
            title="2020 Volvo V60 D4 190 ch…"
            meta="Strasbourg • 72 400 km"
            sale="22 800 CHF"
            market="25 600 CHF"
            margin="+2 800 CHF"
            marginBadge="+10.9% Bonne"
            marginTone="blue"
            imageClass="from-slate-400 to-slate-300"
          />
          <CarOpportunityCard
            highlight
            rating="8.1/10"
            title="2019 BMW 320d M Sport…"
            meta="Genève • 58 200 km"
            sale="28 500 CHF"
            market="31 900 CHF"
            margin="+3 400 CHF"
            marginBadge="+12.2% Elevée"
            marginTone="green"
            imageClass="from-zinc-500 to-zinc-400"
          />
          <CarOpportunityCard
            rating="7.2/10"
            title="2018 Audi A4 Avant 2.0 TDI…"
            meta="Lausanne • 89 000 km"
            sale="19 200 CHF"
            market="21 400 CHF"
            margin="+2 200 CHF"
            marginBadge="+11.4% Bonne"
            marginTone="blue"
            imageClass="from-stone-400 to-stone-300"
          />
        </div>
      </Container>
    </section>
  );
}

function BeigePanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[28px] bg-[#FDF8F3] p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8">
      {children}
    </div>
  );
}

function AutomationDecor() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-[#FF7A22]/[0.12]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M-40 120 C 200 40, 400 280, 620 200 S 980 80, 1240 200"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M80 420 C 320 300, 520 520, 780 440 S 1080 360, 1280 520"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Section06Automation() {
  return (
    <section
      id="marche"
      className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-24 sm:pt-20"
    >
      <AutomationDecor />
      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="max-w-xl text-balance text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl">
            Une analyse du marché{" "}
            <span style={{ color: ORANGE }}>entièrement automatisée</span>
          </h2>
          <button
            type="button"
            className="shrink-0 rounded-2xl bg-[#FF7A22] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_12px_36px_-10px_rgba(255,122,34,0.5)] transition hover:brightness-105"
          >
            Réserver une démo gratuite
          </button>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          <div className="space-y-16 md:space-y-20">
            <div>
              <BeigePanel>
                <div className="flex min-h-[200px] items-center justify-center">
                  <div className="relative h-40 w-40 rounded-full bg-[#FF7A22] shadow-lg">
                    <div className="absolute inset-3 rounded-full bg-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <svg viewBox="0 0 40 40" className="h-12 w-12" fill="none" aria-hidden>
                        <path d="M8 28V14M16 28V10M24 28v-8M32 28V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </BeigePanel>
              <h3 className="mt-6 text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                Analyse intelligente du marché
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Veille continue sur les nouvelles annonces, consolidation des
                signaux prix / liquidité / demande pour prioriser les deals.
              </p>
            </div>

            <div>
              <BeigePanel>
                <div className="mx-auto max-w-sm rounded-2xl border border-gray-100 bg-white p-4 shadow-md">
                  <div className="h-36 rounded-xl bg-gradient-to-br from-gray-300 to-gray-200" />
                  <div className="mt-3 flex justify-between text-[11px] text-[#6B7280]">
                    <span>Prix du marché</span>
                    <span>Prix d&apos;achat</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span>16 600 CHF</span>
                    <span>14 135,59 CHF</span>
                  </div>
                  <div className="mt-3 rounded-xl bg-[#FF7A22] py-2 text-center text-[12px] font-bold text-white">
                    Marge potentielle 2 544,41 CHF +18%
                  </div>
                </div>
              </BeigePanel>
              <h3 className="mt-6 text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                Scoring clair et objectif
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Indices de rentabilité lisibles : marge estimée, risque, et
                comparatif marché — pour décider vite, sans tableur.
              </p>
            </div>

            <div>
              <BeigePanel>
                <div className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-inner">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-slate-300 to-slate-200" />
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-lg border border-gray-100 px-2 py-2">
                      Marque ▾
                    </div>
                    <div className="rounded-lg border border-gray-100 px-2 py-2">
                      Modèle ▾
                    </div>
                    <div className="col-span-2 rounded-lg border border-gray-100 px-2 py-2">
                      Localisation ▾
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-2/3 rounded-full bg-[#FF7A22]" />
                  </div>
                </div>
              </BeigePanel>
              <h3 className="mt-6 text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                Filtrage sur mesure (Plan Pro)
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Ciblez marque, année, kilométrage, budget et zone : ne recevez
                que les opportunités alignées avec votre stock et votre
                stratégie.
              </p>
            </div>
          </div>

          <div className="space-y-16 md:mt-24 md:space-y-20">
            <div>
              <h3 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                Alerte instantanée
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Soyez notifié dès qu’un modèle à fort potentiel apparaît sur le
                marché — avant qu’il ne soit visible partout.
              </p>
              <BeigePanel>
                <div className="relative min-h-[200px]">
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A22] text-white shadow-lg">
                    <IconBell className="h-6 w-6" />
                  </div>
                  <div className="pt-10">
                    <div className="mx-auto max-w-[220px] rounded-xl border bg-white p-2 shadow-md">
                      <div className="h-28 rounded-lg bg-gradient-to-br from-blue-400 to-blue-300" />
                    </div>
                  </div>
                </div>
              </BeigePanel>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                Zone d&apos;action personnalisée
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Définissez un rayon d&apos;action réaliste : priorisez les
                annonces proches de votre point de vente pour réduire les
                frictions logistiques.
              </p>
              <BeigePanel>
                <div className="relative flex min-h-[200px] items-center justify-center">
                  <div className="absolute inset-6 rounded-full border border-[#FF7A22]/25" />
                  <div className="absolute inset-12 rounded-full border border-[#FF7A22]/20" />
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF7A22] text-white shadow-xl">
                    <IconMapPin className="h-9 w-9" />
                  </div>
                </div>
              </BeigePanel>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                Suivi analytique de performance
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Visualisez marges, volumes et rentabilité : comprenez ce qui
                fonctionne sur votre marché et ajustez votre sourcing.
              </p>
              <BeigePanel>
                <div className="relative mx-auto max-w-sm rounded-2xl border border-gray-100 bg-white p-4 shadow-md">
                  <div className="absolute -top-6 right-6 z-10 rounded-xl border border-gray-100 bg-white px-3 py-2 text-[11px] font-bold shadow-lg">
                    <span className="text-[#FF7A22]">27 000 CHF</span>
                    <div className="mt-1 h-8 w-24 rounded bg-gradient-to-r from-[#FF7A22]/30 to-transparent" />
                  </div>
                  <div className="mt-6 grid h-32 grid-cols-6 items-end gap-1">
                    {[40, 65, 45, 80, 55, 70, 50, 90, 60, 75].map((h, i) => (
                      <div
                        key={i}
                        className="rounded-t bg-[#FF7A22]/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </BeigePanel>
            </div>
          </div>
        </div>

        <h2 className="mx-auto mt-24 max-w-3xl text-center text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Le <span style={{ color: ORANGE }}>marché automobile</span> analysé
          en continu
        </h2>

        <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-[#F3E8DC] bg-[#FDF8F3] p-8 shadow-sm sm:p-12">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
            {[
              {
                k: "1",
                n: "+300K",
                l: "Annonces analysées",
                icon: (
                  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden>
                    <path d="M16 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="18" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                k: "2",
                n: "+6000",
                l: "Nouvelles annonces chaque jour",
                icon: (
                  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden>
                    <path d="M6 22V10M12 22V6M18 22v-8M24 22v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                k: "3",
                n: "+80",
                l: "Opportunité rentable envoyée par jour",
                icon: (
                  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden>
                    <path d="M8 22L14 10l4 8 6-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`text-center sm:text-left ${i === 1 ? "sm:border-x sm:border-[#E8DDD0] sm:px-8" : ""}`}
              >
                <div className="inline-flex text-[#FF7A22]">{s.icon}</div>
                <p className="mt-4 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                  {s.n}
                </p>
                <p className="mt-2 text-[14px] leading-snug text-[#6B7280]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="rounded-2xl bg-[#FF7A22] px-10 py-4 text-[15px] font-bold text-white shadow-[0_14px_40px_-10px_rgba(255,122,34,0.55)] transition hover:brightness-105"
          >
            Voir les opportunités CarPulse
          </button>
        </div>
      </Container>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Section01Hero />
      <Section02Logos />
      <Section03SingleFlow />
      <Section04Why />
      <Section04Process />
      <Section05Opportunities />
      <Section06Automation />
      <Section07Audience />
      <Section08Testimonials />
      <Section09PricingTrust />
      <Section10FaqCta />
      <SiteFooter />
    </main>
  );
}
