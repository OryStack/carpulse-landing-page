import type { ReactNode } from "react";

import Image from "next/image";

import { CarOpportunityCard } from "./CarOpportunityCard";
import { DriveVideo } from "../DriveVideo";
import { CarPulseLogo } from "./CarPulseLogo";
import { Container } from "./Container";
import { DashboardMockup } from "./DashboardMockup";
import { MobileMenu } from "./MobileMenu";
import { DemoFlowButton } from "./DemoFlowButton";
import { Section04Process } from "./Section04Process";
import {
  Section07Audience,
  Section08Testimonials,
  Section09PricingTrust,
  Section10FaqCta,
  SiteFooter,
} from "./landing-bottom-sections";
import { Button } from "../ui/button";
import { BarChart3, ScanSearch, Search, Sparkles, Medal, ClockFading ,ChartNoAxesColumn,Car} from "lucide-react";

import { ScallopedPercentBadgeIcon } from "./ScallopedPercentBadgeIcon";

const ORANGE = "#FF7A22";
/** Orange maquette mobile / Figma */
const MOBILE_ACCENT = "#FE6C0E";

/**
 * Vidéo hero :
 * - Google Drive > 100 Mo : utiliser une iframe `/preview` (pas une balise `<video>`).
 * - Définir `NEXT_PUBLIC_HERO_VIDEO_DRIVE_ID` si besoin.
 */
const HERO_VIDEO_DRIVE_ID =
  process.env.NEXT_PUBLIC_HERO_VIDEO_DRIVE_ID ?? "1zT8mgqqjVJ-kyIdTlO3befMHMImON06l";

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
        <header className="relative z-30 hidden gap-4 py-5 sm:gap-6 sm:py-7 md:flex md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4 md:contents">
            <a href="#" className="inline-flex shrink-0 items-center">
              <CarPulseLogo priority />
            </a>
            <div className="shrink-0 md:hidden">
              <MobileMenu />
            </div>
          </div>
          <nav
            className="hidden w-full min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-medium text-[#4B5563] sm:gap-x-5 md:flex md:w-auto md:flex-nowrap md:justify-end md:gap-6 md:text-[13px]"
            aria-label="Navigation principale"
          >
            <a href="#comment" className="hover:text-[#1A1A1A]">
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

        <div className="relative pb-4 pt-2 text-center">
          <h1 className="mx-auto max-w-[920px] text-balance text-[28px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-[30px] md:text-4xl lg:text-[44px] lg:leading-[1.08]">
            Détectez les{" "}
            <span style={{ color: MOBILE_ACCENT }}>voitures sous-évaluées</span>{" "}
            avant vos concurrents.
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-pretty text-[14px] leading-relaxed text-[#6B7280] sm:mt-5 md:mt-6">
            CarPulse analyse automatiquement le marché des annonces automobiles
            et vous envoie uniquement les véhicules avec un réel potentiel de
            marge.
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <Button
              variant="primary"
              size="md"
              className="w-full max-w-[320px] rounded-[16px] px-8 sm:w-auto sm:min-w-[200px]"
              style={{
                background: `linear-gradient(180deg, ${MOBILE_ACCENT} 0%, #FF8A3D 100%)`,
                borderColor: "#FFB366",
              }}
            >
              Découvrir CarPulse
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative mt-8 sm:mt-12">
        <Container>
          <div className="mx-auto w-fit max-w-full">
            <div
              className="h-[12px] w-[980px] mx-auto rounded-t-[12px]"
              style={{ boxShadow: "0px -8px 16.8px 0px #0000000F" }}
              aria-hidden
            />
            <div className="relative z-10 overflow-hidden rounded-[12px] border border-[#E5E5E5] border-solid border-1px sm:rounded-[16px]">
              <div className="flex justify-center">
                <Image
                  src="/landing/dashboard-mes-deals.png"
                  alt="Aperçu du dashboard CarPulse (Mes deals)"
                  width={1024}
                  height={752}
                  priority
                  className="h-auto w-[1024px] max-w-full select-none"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
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
      className="relative z-20 -mt-20 bg-white py-9 pt-16 sm:-mt-20 sm:py-10 "
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
        <h2 className="mb-8 text-center text-xl font-bold tracking-tight text-[#1A1A1A] md:hidden">
          Ils nous font confiance
        </h2>
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
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className="rounded-3xl border border-[#FFE4CC] bg-[#FFF7ED] p-6 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.06)] sm:p-7 md:border-[1.5px] md:border-[#FFD8A8] md:bg-linear-to-b md:from-[#FDEFDE] md:to-[#FFFCF8] md:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.14)]"
    >
      <div className="text-[#FE6C0E] md:text-[#FF7A22]">{icon}</div>
      <h3 className="mt-4 text-[15px] font-bold leading-snug text-[#1A1A1A] sm:mt-5">
        {title}
      </h3>
      <p className="mt-2.5 text-[13px] leading-relaxed text-[#4B5563]">
        {children}
      </p>
    </div>
  );
}

export function Section03SingleFlow() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24">
      <Container>
        <div className="relative mx-auto max-w-5xl isolate">
          {/* décor desktop */}
          <div
            className="pointer-events-none absolute left-1/2 top-[52%] z-0 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,34,0.20),transparent_62%)] blur-2xl md:block"
            aria-hidden
          />
          <div
            className="relative z-10 overflow-hidden rounded-2xl border-2 border-white bg-[#E5E5E5] sm:rounded-[28px]"
          >
            <div className="relative aspect-video w-full">
              <DriveVideo
                fileId={HERO_VIDEO_DRIVE_ID}
                title="Vidéo CarPulse"
                maxWidth="100%"
                autoplayOnView
              />
            </div>
          </div>
        </div>

        <h2 className="relative z-10 mx-auto mt-10 max-w-4xl text-center text-balance text-2xl font-bold tracking-tight text-[#1A1A1A] sm:mt-14 sm:text-3xl md:text-4xl">
          Un seul flux pour les{" "}
          <span style={{ color: MOBILE_ACCENT }}>meilleures opportunités</span>{" "}
          automobiles
        </h2>

        <div className="relative z-10 mt-8 grid gap-4 sm:mt-10 md:mt-12 md:grid-cols-3 md:gap-6">
          <FeatureCard
            icon={<ClockFading className="h-8 w-8 shrink-0" aria-hidden />}
            title="Gagnez du temps"
          >
            Plus besoin de fouiller les plateformes, les meilleures opportunités
            viennent à vous.
          </FeatureCard>
          <FeatureCard
            icon={
              <ScallopedPercentBadgeIcon className="h-8 w-8 shrink-0" aria-hidden />
            }
            title="Augmentez vos marges"
          >
            Chaque véhicule est noté selon son écart au prix du marché.
          </FeatureCard>
          <FeatureCard
            icon={<Medal  className="h-8 w-8" aria-hidden />}
            title="Décidez plus vite"
          >
            Un mini-rapport explique en quelques secondes pourquoi le deal vaut
            le coup.
          </FeatureCard>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-5xl md:mt-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#FE6C0E] px-5 py-10 text-center sm:px-12 sm:py-14 md:bg-[linear-gradient(69.08deg,#FE5E00_7.63%,#FF963A_54.5%)]">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] max-md:block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <pattern
                  id="topo-cta-m"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 40 Q20 20 40 40 T80 40M0 60 Q30 40 60 60 T100 60M20 0 Q40 20 20 40"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo-cta-m)" />
            </svg>
            <div className="relative">
              <p className="text-xl font-bold leading-snug text-white max-md:text-[1.35rem] md:text-[1.65rem]">
                <span className="md:hidden">Prêt à booster vos ventes ?</span>
                <span className="hidden md:inline">
                  Réservez une démo gratuite de 15 minutes
                </span>
              </p>
              <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/95 md:text-[15px]">
                Découvrez comment CarPulse détecte les meilleures affaires avant
                tout le monde.
              </p>
              <DemoFlowButton
                variant="secondary"
                size="lg"
                className="mt-8 max-md:w-full max-md:max-w-sm max-md:border-[#1F1F1F]! max-md:bg-[#1F1F1F]! max-md:text-white! max-md:hover:opacity-95"
                style={{
                  boxShadow: "0px 4px 10px 0px #FFFFFF40 inset",
                }}
              >
                <span className="md:hidden">Réserver ma démo maintenant</span>
                <span className="hidden md:inline">
                  Réserver une démo gratuite
                </span>
              </DemoFlowButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyStatCard({
  icon,
  title,
  children,
  titleClass = "text-[#111827]",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  titleClass?: string;
}) {
  return (
    <div className="rounded-[28px] bg-[#F3F4F6] p-8 sm:p-9">
      <div className="text-[#FE6C0E]">{icon}</div>
      <p className={`mt-6 text-2xl font-bold tracking-tight ${titleClass}`}>
        {title}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-[#6B7280]">{children}</p>
    </div>
  );
}

export function Section04Why() {
  return (
    <section id="comment" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#FE6C0E]/35 bg-[#FFF7ED] px-4 py-1.5 text-[12px] font-semibold text-[#FE6C0E]">
              Pourquoi CarPulse ?
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-4xl">
              <span className="text-[#FE6C0E]">Le sourcing automobile,</span>
              <br />
              c’est devenu une course contre la montre
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#6B7280] lg:pt-1">
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

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-8">
          <WhyStatCard
            title="3h par jour"
            icon={<Search className="h-8 w-8" aria-hidden strokeWidth={1.75} />}
          >
            Temps moyen passé à chercher des annonces
          </WhyStatCard>
          <WhyStatCard
            title="70 % des bonnes affaires"
            icon={
              <ChartNoAxesColumn className="h-8 w-8" aria-hidden strokeWidth={1.75} />
            }
          >
            Partent en quelques heures
          </WhyStatCard>
          <WhyStatCard
            title="100 % automatisé"
            titleClass="text-[#FE6C0E]"
            icon={<Sparkles className="h-8 w-8" aria-hidden strokeWidth={1.75} />}
          >
            CarPulse surveille le marché pour vous
          </WhyStatCard>
        </div>

        <div
          className="mt-12 rounded-[32px] border border-[#FFD8A8] px-6 py-10 text-center sm:mt-14 sm:px-10 sm:py-12 lg:mt-16"
          style={{
            background:
              "linear-gradient(180deg, #FEF8F2 0%, #FFFFFF 55%, #FFFFFF 100%)",
          }}
        >
          <p className="mx-auto max-w-2xl text-balance text-xl font-bold leading-snug text-[#111827] sm:text-2xl">
            Prenez de l&apos;avance avec{" "}
            <span className="text-[#FE6C0E]">CarPulse</span>
          </p>
          <DemoFlowButton
            variant="primary"
            size="lg"
            className="mt-8"
            style={{
              background:
                "linear-gradient(69.08deg, #FE5E00 7.63%, #FF963A 54.5%)",
              boxShadow: "0px 4px 10px 0px #FFFFFF40 inset",
            }}
          >
            Réserver une démo gratuite
          </DemoFlowButton>
        </div>
      </Container>
    </section>
  );
}

export function Section05Opportunities() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-center text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl md:text-left md:text-4xl">
              Opportunités{" "}
              <span style={{ color: MOBILE_ACCENT }}>détectées</span> pour vous
            </h2>
            <Button
              variant="primary"
              size="sm"
              className="hidden shrink-0 rounded-[16px] px-6 text-[12px] font-bold md:inline-flex"
              style={{ background: "#FE6C0E", borderColor: "#FE6C0E" }}
            >
              Analyses complètes
            </Button>
          </div>
          <div className="flex justify-center md:hidden">
            <Button
              variant="primary"
              size="lg"
              className="w-full max-w-md rounded-[16px] px-8 text-[14px] font-bold"
              style={{ background: "#FE6C0E", borderColor: "#FE6C0E" }}
            >
              Analyses complètes
            </Button>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] p-4 sm:mt-12 sm:p-6">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <CarOpportunityCard
              showMapPin
              rating="7.4/10"
              title="2020 Volvo V60 D4 190 ch…"
              meta="Strasbourg • 72 400 km"
              sale="22 800 CHF"
              market="25 600 CHF"
              margin="+2 800 CHF"
              marginBadge="+10.9%  Bonne"
              marginTone="blue"
              imageSrc="/opportunities/card-volvo.jpg"
              imageAlt="Volvo V60 grise"
              imageAspectRatio="1024 / 682"
              imageFit="cover"
            />
            <CarOpportunityCard
              showMapPin
              highlight
              rating="9.3/10"
              title="2021 Audi Q3 2.0 TDI S Line 15…"
              meta="Lyon • 54 200 km"
              sale="27 400 CHF"
              market="31 200 CHF"
              margin="+3 800 CHF"
              marginBadge="+12.2%  Elevée"
              marginTone="green"
              imageSrc="/opportunities/card-audi.jpg"
              imageAlt="Audi Q3 rouge"
              imageAspectRatio="1024 / 573"
              imageFit="cover"
            />
            <CarOpportunityCard
              showMapPin
              rating="5.5/10"
              title="2022 Renault Mégane 1.3 TC…"
              meta="Nantes • 41 000 km"
              sale="16 500 CHF"
              market="17 900 CHF"
              margin="+1 400 CHF"
              marginBadge="+7.8%  Bonne"
              marginTone="blue"
              imageSrc="/opportunities/card-renault.jpg"
              imageAlt="Renault Mégane blanche"
              imageAspectRatio="1024 / 741"
              imageFit="cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}


function AutomationDecor() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-[#FE5E00]/12"
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
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-xl text-balance text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl">
            Une analyse du marché{" "}
            <span className="text-[#FE5E00]">entièrement automatisée</span>
          </h2>
          <DemoFlowButton
            variant="primary"
            size="lg"
            className="w-full max-w-md shrink-0 self-center rounded-[16px] px-7 md:w-auto md:max-w-none md:self-auto"
            style={{
              background:
                "linear-gradient(69.08deg, #FE5E00 7.63%, #FF963A 54.5%)",
              borderColor: "#FFBC71",
              boxShadow: "0px 4px 10px 0px #FFFFFF40 inset",
            }}
          >
            Réserver une démo gratuite
          </DemoFlowButton>
        </div>

        <div className="mt-14 grid gap-16 md:mt-16 md:grid-cols-2 md:gap-x-14 md:gap-y-20">
          <div className="space-y-16 md:space-y-20">
            <div>
              <div
                aria-label="Veille des annonces : cartes opportunités et indicateur de performance"
                className="aspect-811/720 w-full rounded-[40px] bg-[#FDF8F3] bg-[url('/automation/analyse-intelligente.png')] bg-contain bg-center bg-no-repeat"
              />
              <h3 className="mt-6 text-xl font-bold text-[#111827] sm:text-2xl">
                Analyse intelligente du marché
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Veille continue sur les nouvelles annonces, consolidation des
                signaux prix / liquidité / demande pour prioriser les deals.
              </p>
            </div>

            <div>
              <div
                aria-label="Scoring : comparaison prix marché, prix d’achat et marge potentielle"
                className="aspect-811/720 w-full rounded-[40px] bg-[#FDF8F3] bg-[url('/automation/scoring-objectif.png')] bg-contain bg-center bg-no-repeat"
              />
              <h3 className="mt-6 text-xl font-bold text-[#111827] sm:text-2xl">
                Scoring clair et objectif
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Indices de rentabilité lisibles : marge estimée, risque, et
                comparatif marché — pour décider vite, sans tableur.
              </p>
            </div>

            <div>
              <div
                aria-label="Filtres avancés : marque, kilométrage, localisation, rayon et fourchette de prix"
                className="aspect-809/720 w-full rounded-[40px] bg-[#FDF8F3] bg-[url('/automation/filtrage-sur-mesure.png')] bg-contain bg-center bg-no-repeat"
              />
              <h3 className="mt-6 text-xl font-bold text-[#111827] sm:text-2xl">
                Filtrage sur mesure (Plan Pro)
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Ciblez marque, année, kilométrage, budget et zone : ne recevez
                que les opportunités alignées avec votre stock et votre
                stratégie.
              </p>
            </div>
          </div>

          <div className="space-y-16 md:space-y-20">
            <div>
              <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                Alerte instantanée
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Soyez notifié dès qu’un modèle à fort potentiel apparaît sur le
                marché — avant qu’il ne soit visible partout.
              </p>
              <div
                aria-label="Alertes : véhicule mis en avant et notifications sur les annonces"
                className="mt-8 aspect-811/720 w-full rounded-[40px] bg-[#FDF8F3] bg-[url('/automation/alerte-instantanee.png')] bg-contain bg-center bg-no-repeat"
              />

            </div>

            <div>
              <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                Zone d&apos;action personnalisée
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Définissez un rayon d&apos;action réaliste : priorisez les
                annonces proches de votre point de vente pour réduire les
                frictions logistiques.
              </p>
              <div
                aria-label="Carte avec rayon d’action et annonces à proximité"
                className="mt-8 aspect-811/720 w-full rounded-[40px] bg-[#FDF8F3] bg-[url('/automation/zone-action.png')] bg-contain bg-center bg-no-repeat"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                Suivi analytique de performance
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
                Visualisez marges, volumes et rentabilité : comprenez ce qui
                fonctionne sur votre marché et ajustez votre sourcing.
              </p>
              <div
                aria-label="Tableau de bord analytique : bénéfices et statistiques"
                className="mt-8 aspect-813/720 w-full rounded-[40px] bg-[#FDF8F3] bg-[url('/automation/suivi-performance.png')] bg-contain bg-center bg-no-repeat "
              />
            </div>
          </div>
        </div>

        <h2 className="mx-auto mt-24 max-w-3xl text-center text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Le <span className="text-[#FE6C0E]">marché automobile</span> analysé
          en continu
        </h2>

        <div className="mx-auto mt-10 max-w-5xl rounded-[32px] border border-[#FE6C0E] bg-[#FDF8F3] px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <div className="grid gap-10 divide-y divide-[#E5E7EB] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-y-0 sm:divide-[#E5E7EB]">
            {[
              {
                k: "1",
                n: "+300K",
                l: "Annonces analysées",
                icon: <ScanSearch className="h-7 w-7" aria-hidden strokeWidth={1.75} />,
              },
              {
                k: "2",
                n: "+6000",
                l: "Nouvelles annonces chaque jour",
                icon: <ChartNoAxesColumn className="h-7 w-10" aria-hidden strokeWidth={1.75} />,
              },
              {
                k: "3",
                n: "+80",
                l: "Opportunité rentable envoyée par jour",
                icon: <Car className="h-7 w-7" aria-hidden strokeWidth={1.75} />,
              },
            ].map((s) => (
              <div
                key={s.k}
                className="text-center sm:px-6 sm:py-1 lg:px-10"
              >
                <div className="inline-flex text-[#FE6C0E]">{s.icon}</div>
                <p className="mt-4 text-3xl font-bold text-black sm:text-4xl">
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
          <Button
            variant="primary"
            size="xl"
            className="rounded-[16px] px-10"
            style={{
              background:
                "linear-gradient(69.08deg, #FE6C0E 7.63%, #FF963A 54.5%)",
              borderColor: "#FFBC71",
              boxShadow: "0px 4px 10px 0px #FFFFFF40 inset",
            }}
          >
            Voir les opportunités CarPulse
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="relative min-h-screen bg-white text-[#1A1A1A]">
      <div
        id="connexion"
        className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden
      />
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

export { Section04Process };
