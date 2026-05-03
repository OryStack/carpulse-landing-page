import type { ReactNode } from 'react';

import Image from 'next/image';

import { CarOpportunityCard } from './CarOpportunityCard';
import { DriveVideo } from '../DriveVideo';
import { Container } from './Container';
import { DashboardMockup } from './DashboardMockup';
import { DemoFlowButton } from './DemoFlowButton';
import { Section04Process } from './Section04Process';
import {
  Section07Audience,
  Section08Testimonials,
  Section09PricingTrust,
  Section10FaqCta,
} from './landing-bottom-sections';
import { Button } from '../ui/button';
import { Search, Medal, ClockFading } from 'lucide-react';
import { ScallopedPercentBadgeIcon } from './ScallopedPercentBadgeIcon';

const MOBILE_ACCENT = '#FE6C0E';
const HERO_VIDEO_URL = 'https://vimeo.com/1181924989?share=copy&fl=sv&fe=ci';

const brandLogos = [
  { alt: 'BMW', src: '/brands/bmw.png', w: 64, h: 64 },
  { alt: 'Jaguar', src: '/brands/jaguar.png', w: 114, h: 64 },
  { alt: 'Mercedes-Benz', src: '/brands/mercedes.png', w: 128, h: 72 },
  { alt: 'Audi', src: '/brands/audi.png', w: 87, h: 32 },
  { alt: 'Tesla', src: '/brands/tesla.png', w: 62, h: 64 },
  { alt: 'Chevrolet', src: '/brands/chevrolet.png', w: 113, h: 64 },
  { alt: 'Kia', src: '/brands/kia.png', w: 113, h: 64 },
  { alt: 'Hyundai', src: '/brands/hyundai.png', w: 118, h: 64 },
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
          'linear-gradient(1.29deg, #FF882B -22.66%, #FFF7ED 42.29%, #FFFFFF 94.04%)',
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
        <div className="relative pb-4 pt-12 text-center">
          <h1 className="mx-auto mt-6 max-w-[920px] text-balance text-[28px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:mt-20 sm:text-[30px] md:text-4xl lg:text-[44px] lg:leading-[1.08]">
            Détectez les{' '}
            <span style={{ color: MOBILE_ACCENT }}>voitures sous-évaluées</span>{' '}
            avant <br/> vos concurrents.
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-pretty text-[18px] leading-relaxed text-[#6B7280] sm:mt-5 md:mt-6">
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
                borderColor: '#FFB366',
              }}
              asChild
            >
              <a href="#processus">Découvrir CarPulse</a>
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative mt-8 sm:mt-12">
  <Container>
    <div className="mx-auto w-fit max-w-full">
      <div className="relative z-10 overflow-hidden rounded-[12px]  sm:rounded-[16px]">
        <div className="flex justify-center">
          <Image
            src="/landing/Frame_2304.png"
            alt="Aperçu du dashboard CarPulse (Mes deals)"
            width={1156}
            height={613}
            priority
            className="h-auto w-[1156px] max-w-full select-none"
            sizes="(max-width: 1156px) 100vw, 1156px"
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
    <section className="relative z-20 -mt-15 overflow-hidden bg-white py-9 sm:-mt-20 pt-16 sm:py-10">
      {/* fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32"
        style={{ background: 'linear-gradient(90deg, #FFFFFF 60%, transparent)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32"
        style={{ background: 'linear-gradient(270deg, #FFFFFF 60%, transparent)' }}
        aria-hidden
      />

      <Container>
        <h2 className="mb-8 text-center text-xl font-bold tracking-tight text-[#1A1A1A] md:hidden">
          Ils nous font confiance
        </h2>
      </Container>

      <div className="flex">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex shrink-0 animate-marquee items-center gap-x-14 px-7"
            aria-hidden={i === 1}
          >
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
        ))}
      </div>
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
    <div className="rounded-3xl border border-[#FFE4CC] bg-[#FFF7ED] p-6 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.06)] sm:p-7 md:border-[1.5px] md:border-[#FFD8A8] md:bg-linear-to-b md:from-[#FDEFDE] md:to-[#FFFCF8] md:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.14)]">
      <div className="text-[#FE6C0E] md:text-[#FF7A22]">{icon}</div>
      <h3 className="mt-4 text-[20px] font-bold leading-snug text-[#1A1A1A] sm:mt-5">
        {title}
      </h3>
      <p className="mt-2.5 text-[16px] leading-relaxed text-[#4B5563]">
        {children}
      </p>
    </div>
  );
}

export function Section03SingleFlow() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24">

<div
  className="pointer-events-none absolute left-1/2 -translate-x-1/2"
  style={{ top: '0px' }}
  aria-hidden
>
  <div className="relative
    w-[900px] h-[520px]
    sm:w-[1200px] sm:h-[700px]
    lg:w-[1600px] lg:h-[900px]
    -translate-x-0 translate-y-[20%]
    sm:translate-y-[28%]
    lg:translate-y-[35%]
  ">
    <Image
      src="/decor/Ellipse_790.png"
      alt=""
      fill
      className="object-contain"
      sizes="(max-width: 640px) 900px, (max-width: 1024px) 1200px, 1600px"
    />
  </div>
</div>

      <Container>
        <div className="mx-auto max-w-5xl">

          {/* Vidéo + anneau orange */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-white bg-[#E5E5E5] shadow-[0_24px_64px_rgba(0,0,0,0.10)] sm:rounded-[28px]">
              <div className="relative aspect-video w-full">
                <DriveVideo
                  driveUrl={HERO_VIDEO_URL}
                  title="Vidéo CarPulse"
                  maxWidth="100%"
                  autoplayOnView
                />
              </div>
            </div>

            {/* Ellipse_792 - anneau orange, centré, dépasse légèrement sous la vidéo */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 translate-y-[15%]"
              style={{ width: '220px', height: '220px' }}
              aria-hidden
            >
              <Image
                src="/decor/Ellipse_792.png"
                alt=""
                fill
                className="object-contain"
                sizes="220px"
              />
            </div>
          </div>

          <h2 className="relative z-10 mt-16 text-center text-balance text-3xl font-bold tracking-tight text-[#1A1A1A] sm:mt-20 sm:text-4xl md:text-5xl">
            Un seul flux pour les{' '}
            <span style={{ color: MOBILE_ACCENT }}>meilleures opportunités</span>{' '}
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
                <ScallopedPercentBadgeIcon
                  className="h-8 w-8 shrink-0"
                  aria-hidden
                />
              }
              title="Augmentez vos marges"
            >
              Chaque véhicule est noté selon son écart au prix du marché.
            </FeatureCard>
            <FeatureCard
              icon={<Medal className="h-8 w-8" aria-hidden />}
              title="Décidez plus vite"
            >
              Un mini-rapport explique en quelques secondes pourquoi le deal vaut
              le coup.
            </FeatureCard>
          </div>

          <div className="relative z-10 mt-10 md:mt-16">
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
                <p className="text-xl font-bold leading-snug text-white max-md:text-[1.5rem] md:text-[1.65rem]">
                  Réservez une démo <br className="md:hidden" />
                  gratuite de 15 minutes
                </p>
                <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/95 md:text-[15px]">
                  Découvrez comment CarPulse détecte les meilleures affaires avant
                  tout le monde.
                </p>
                <DemoFlowButton
                  variant="secondary"
                  size="lg"
                  className="mt-8 max-md:w-full max-md:max-w-sm max-md:border-[#1F1F1F]! max-md:bg-[#1F1F1F]! max-md:text-white! max-md:hover:opacity-95"
                  style={{
                    boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
                  }}
                >
                  <span className="md:inline">Réserver une démo gratuite</span>
                </DemoFlowButton>
              </div>
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
  titleClass = 'text-[#111827]',
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
      <p className="text-[16px] leading-relaxed text-[#6B7280]">{children}</p>
    </div>
  );
}

export function Section04Why() {
  return (
    <section id="comment" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#FE6C0E]/35 bg-[#FFF7ED] px-4 py-1.5 text-[12px] font-semibold text-[#FE6C0E]">
                Pourquoi CarPulse ?
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl sm:leading-[1.15]">
                <span className="block text-[#FE6C0E]">
                  Le sourcing{'\u00A0'}automobile,
                </span>
                <span className="mt-1 block text-[#111827] sm:mt-0.5">
                  c'est devenu une 
                  course contre <br /> la montre
                </span>
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-[#6B7280] lg:pt-1">
              <p>
                Chaque jour, des milliers de nouvelles annonces apparaissent.{' '}
                <br />
                Les marges se resserrent et les meilleures opportunités
                disparaissent souvent en quelques heures.
              </p>
              <p>
                Trouver le bon véhicule demande du temps : <br />
                parcourir les annonces, comparer les prix, appeler les vendeurs.
                CarPulse surveille le marché en continu et vous alerte dès qu'un
                véhicule réellement rentable apparaît.
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M5.33594 11.9999H10.6693V26.6666H5.33594V11.9999ZM21.3359 17.3333H26.6693V26.6666H21.3359V17.3333ZM13.3359 5.33325H18.6693V26.6666H13.3359V5.33325Z"
                    fill="#FF8E2B"
                  />
                </svg>
              }
            >
              Partent en quelques heures
            </WhyStatCard>
            <WhyStatCard
              title="100 % automatisé"
              titleClass="text-[#FE6C0E]"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M19.4591 7.99997L20.2491 6.24997L21.9991 5.45997C22.0864 5.4202 22.1604 5.35615 22.2123 5.27548C22.2642 5.1948 22.2918 5.1009 22.2918 5.00497C22.2918 4.90904 22.2642 4.81514 22.2123 4.73446C22.1604 4.65379 22.0864 4.58974 21.9991 4.54997L20.2491 3.75997L19.4591 1.99997C19.4193 1.91268 19.3552 1.83867 19.2746 1.78677C19.1939 1.73487 19.1 1.70728 19.0041 1.70728C18.9081 1.70728 18.8142 1.73487 18.7336 1.78677C18.6529 1.83867 18.5888 1.91268 18.5491 1.99997L17.7591 3.74997L15.9991 4.53997C15.9118 4.57974 15.8378 4.64379 15.7859 4.72446C15.734 4.80514 15.7064 4.89904 15.7064 4.99497C15.7064 5.0909 15.734 5.1848 15.7859 5.26548C15.8378 5.34615 15.9118 5.4102 15.9991 5.44997L17.7491 6.23997L18.5391 7.99997C18.7191 8.38997 19.2791 8.38997 19.4591 7.99997ZM11.4991 9.49997L9.90906 5.99997C9.55906 5.21997 8.43906 5.21997 8.08906 5.99997L6.49906 9.49997L2.99906 11.09C2.21906 11.45 2.21906 12.56 2.99906 12.91L6.49906 14.5L8.08906 18C8.44906 18.78 9.55906 18.78 9.90906 18L11.4991 14.5L14.9991 12.91C15.7791 12.55 15.7791 11.44 14.9991 11.09L11.4991 9.49997ZM18.5391 16L17.7491 17.75L15.9991 18.54C15.9118 18.5797 15.8378 18.6438 15.7859 18.7245C15.734 18.8051 15.7064 18.899 15.7064 18.995C15.7064 19.0909 15.734 19.1848 15.7859 19.2655C15.8378 19.3462 15.9118 19.4102 15.9991 19.45L17.7491 20.24L18.5391 22C18.5788 22.0873 18.6429 22.1613 18.7236 22.2132C18.8042 22.2651 18.8981 22.2927 18.9941 22.2927C19.09 22.2927 19.1839 22.2651 19.2646 22.2132C19.3452 22.1613 19.4093 22.0873 19.4491 22L20.2391 20.25L21.9991 19.46C22.0864 19.4202 22.1604 19.3562 22.2123 19.2755C22.2642 19.1948 22.2918 19.1009 22.2918 19.005C22.2918 18.909 22.2642 18.8151 22.2123 18.7345C22.1604 18.6538 22.0864 18.5897 21.9991 18.55L20.2491 17.76L19.4591 16C19.4181 15.9126 19.3531 15.8386 19.2716 15.7868C19.1901 15.735 19.0956 15.7075 18.9991 15.7075C18.9025 15.7075 18.808 15.735 18.7265 15.7868C18.6451 15.8386 18.58 15.9126 18.5391 16Z"
                    fill="#FF8E2B"
                  />
                </svg>
              }
            >
              CarPulse surveille le marché pour vous
            </WhyStatCard>
          </div>

          <div className="mt-12 rounded-[32px] border border-[#FFD8A8] px-6 py-10 text-center max-sm:border-[#FEB578] max-sm:bg-[radial-gradient(ellipse_130%_110%_at_50%_38%,#FFFFFF_0%,#FFFCF9_35%,#FEF3EA_100%)] max-sm:py-12 sm:mt-14 sm:bg-[linear-gradient(180deg,#FEF8F2_0%,#FFFFFF_55%,#FFFFFF_100%)] sm:px-10 sm:py-12 lg:mt-16">
            <p className="mx-auto max-w-2xl text-xl font-bold leading-snug text-[#111827] max-sm:text-[1.35rem] max-sm:leading-tight sm:text-balance sm:text-2xl">
              Prenez de l&apos;avance avec <br className="sm:hidden" />
              <span className="mt-1 block text-[#FE6C0E] sm:mt-0 sm:inline">
                CarPulse
              </span>
            </p>
            <DemoFlowButton
              variant="primary"
              size="lg"
              className="mt-8 max-sm:mx-auto max-sm:w-full max-sm:max-w-sm"
              style={{
                background:
                  'linear-gradient(69.08deg, #FE5E00 7.63%, #FF963A 54.5%)',
                boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
              }}
            >
              Réserver une démo gratuite
            </DemoFlowButton>
          </div>

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
              Opportunités{' '}
              <span style={{ color: MOBILE_ACCENT }}>détectées</span> <br />{' '}
              pour vous
            </h2>
            <div className="hidden shrink-0 lg:flex lg:items-end">
              <DemoFlowButton
                variant="primary"
                size="sm"
                className="rounded-[16px] px-6 text-[12px] font-bold"
                style={{ background: '#FE6C0E', borderColor: '#FE6C0E' }}
              >
                Analyses complètes
              </DemoFlowButton>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
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
              imageFit="cover"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <DemoFlowButton
            variant="primary"
            size="sm"
            className="rounded-[16px] px-10 text-[13px] font-bold"
            style={{ background: '#FE6C0E', borderColor: '#FE6C0E' }}
          >
            Analyses complètes
          </DemoFlowButton>
        </div>
      </Container>
    </section>
  );
}

export function Section06Automation() {
  const features = [
    {
      k: "analyse",
      title: "Analyse intelligente du marché",
      desc: "CarPulse scanne en continu toutes les nouvelles annonces disponibles. Aucune ne passe à la trappe : chaque véhicule est analysé au moment même de sa mise en ligne.",
      aria: "Veille des annonces : cartes opportunités et indicateur de performance",
      bg: "/automation/analyse-intelligente.png",
      bgSize: "85%",
    },
    {
      k: "scoring",
      title: "Scoring clair et objectif",
      desc: "Chaque véhicule est évalué selon un indice de rentabilité et de cohérence marché. Plus de doute : uniquement des décisions rapides et fiables.",
      aria: "Scoring : comparaison prix marché, prix d’achat et marge potentielle",
      bg: "/automation/scoring-objectif.png",
      bgSize: "85%",
    },
    {
      k: "filtrage",
      title: "Filtrage sur mesure (Plan Pro)",
      desc: "Créez vos propres filtres : marque, année, kilométrage, budget... L’application ne vous montre que ce que vous voulez vraiment acheter.",
      aria:
        "Filtres avancés : marque, kilométrage, localisation, rayon et fourchette de prix",
      bg: "/automation/filtrage-sur-mesure.png",
      bgSize: "82%",
    },
    {
      k: "alerte",
      title: "Alerte instantanée",
      desc: "Dès qu’un modèle à fort potentiel apparaît, vous êtes prévenu avant tout le monde. Fini les heures passées à rafraîchir les plateformes.",
      aria: "Alertes : véhicule mis en avant et notifications sur les annonces",
      bg: "/automation/alerte-instantanee.png",
      bgSize: "82%",
    },
    {
      k: "zone",
      title: "Zone d'action personnalisée",
      desc: "Définissez votre rayon d'action - CarPulse ne vous envoie que les opportunités dans votre périmètre réel.",
      aria: "Carte avec rayon d’action et annonces à proximité",
      bg: "/automation/zone-action.png",
      bgSize: "82%",
    },
    {
      k: "suivi",
      title: "Suivi analytique de performance",
      desc: "Visualisez vos marges, achats et reventes dans un mini tableau de bord. Gardez une vision claire de votre rentabilité mensuelle.",
      aria: "Tableau de bord analytique : bénéfices et statistiques",
      bg: "/automation/suivi-performance.png",
      bgSize: "80%",
    },
  ] as const;

  return (
    <section
      id="marche"
      className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-24 sm:pt-20"
    >
        <div
    className="pointer-events-none absolute left-0 top-[30%] z-0 hidden -translate-x-1/6 md:block"
    style={{ width: '1200px', height: '720px' }}
    aria-hidden
  >
    <Image
      src="/decor/Ellipse_787.png"
      alt=""
      fill
      className="object-contain"
      sizes="1200px"
    />
  </div>

  {/* Motif droit - caché sur mobile */}
  <div
    className="pointer-events-none absolute right-0 top-[55%] z-0 hidden translate-x-1/6 md:block"
    style={{ width: '1200px', height: '720px' }}
    aria-hidden
  >
    <Image
      src="/decor/Ellipse_788.png"
      alt=""
      fill
      className="object-contain"
      sizes="1200px"
    />
  </div>

      <Container className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="mx-auto max-w-xl text-balance text-center text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:mx-0 md:text-left">
            Une analyse du marché{' '}
            <span className="text-[#FE5E00]">entièrement automatisée</span>
          </h2>
          <div className="hidden shrink-0 md:flex md:items-start md:self-auto">
            <DemoFlowButton
              variant="primary"
              size="lg"
              className="w-auto max-w-none self-auto rounded-[16px] px-7"
              style={{
                background:
                  'linear-gradient(69.08deg, #FE5E00 7.63%, #FF963A 54.5%)',
                borderColor: '#FFBC71',
                boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
              }}
            >
              Réserver une démo gratuite
            </DemoFlowButton>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mx-auto lg:mt-16 lg:max-w-5xl lg:grid-cols-2">
          {features.map((f, idx) => (
            <article
              key={f.k}
              className="group relative overflow-hidden rounded-[24px] border border-[#F3E4D7] bg-[#FDF8F3] shadow-[0px_10px_28px_rgba(17,24,39,0.06)]"
            >
              <div className="flex h-full flex-col gap-4 px-4 py-5 sm:gap-5 sm:px-5">
                <header
                  className={[
                    "space-y-2",
                    idx % 2 === 1 ? "order-1" : "order-2",
                  ].join(" ")}
                >
                  <h3 className="text-[24px] font-bold leading-tight tracking-tight text-[#111827] sm:text-[22px]">
                    {f.title}
                  </h3>
                  <p className="text-[18px] leading-relaxed text-[#6B7280] sm:text-[16px]">
                    {f.desc}
                  </p>
                </header>

                <div
                  className={[
                    "rounded-[22px] bg-[#F7EFE6] ",
                    idx % 2 === 1 ? "order-2" : "order-1",
                  ].join(" ")}
                >
                  <div
                    aria-label={f.aria}
                    className="h-[160px] w-full rounded-[18px] bg-center bg-no-repeat sm:h-[175px] lg:h-[180px]"
                    style={{
                      backgroundImage: `url('${f.bg}')`,
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <DemoFlowButton
            variant="primary"
            size="sm"
            className="rounded-[16px] px-10 text-[13px] font-bold"
            style={{
              background:
                'linear-gradient(69.08deg, #FE5E00 7.63%, #FF963A 54.5%)',
              borderColor: '#FFBC71',
              boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
            }}
          >
            Réserver une démo gratuite
          </DemoFlowButton>
        </div>

        <h2 className="mx-auto mt-24 max-w-3xl text-center text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Le <span className="text-[#FE6C0E]">marché automobile</span> analysé
          en continu
        </h2>

        <div className="mx-auto mt-10 max-w-5xl rounded-[32px] border-[1.5px] border-[#FFD8A8] px-6 py-10 sm:px-10 sm:py-12" style={{ background: "linear-gradient(180deg, #FFFCF8 30.29%, #FDEFDE 100%)" }}>
          <div className="grid gap-10 divide-y divide-[#FFBC71] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-y-0 sm:divide-[#FFBC71]">
            {[
              {
                k: '1',
                n: '+300K',
                l: 'Annonces analysées',
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <g filter="url(#statsMktF1)">
                      <path
                        d="M18.3359 3.33353C18.7759 3.33353 19.2109 3.35353 19.6409 3.39353C19.0642 4.40933 18.6699 5.51831 18.4759 6.6702L18.3359 6.66686C11.8909 6.66686 6.66927 11.8869 6.66927 18.3335C6.66927 24.7802 11.8909 30.0002 18.3359 30.0002C21.3701 30.004 24.2857 28.8222 26.4609 26.7069L26.7109 26.4569C28.8253 24.2818 30.0064 21.3669 30.0026 18.3335L29.9976 18.1919C31.1496 17.9974 32.2586 17.6025 33.2743 17.0252C33.6177 20.8636 32.4639 24.6861 30.0543 27.6935L37.1926 34.8319L34.8343 37.1885L27.6976 30.0519C25.0422 32.1806 21.7393 33.3384 18.3359 33.3335C10.0559 33.3335 3.33594 26.6135 3.33594 18.3335C3.33594 10.0535 10.0559 3.33353 18.3359 3.33353ZM27.5526 2.19853C27.6157 2.04249 27.724 1.90886 27.8636 1.81477C28.0031 1.72068 28.1676 1.67041 28.3359 1.67041C28.5043 1.67041 28.6687 1.72068 28.8083 1.81477C28.9479 1.90886 29.0562 2.04249 29.1193 2.19853L29.5426 3.21686C30.2504 4.94136 31.5926 6.32881 33.2926 7.09353L34.4893 7.62686C34.6427 7.69746 34.7728 7.81058 34.8639 7.95281C34.955 8.09505 35.0035 8.26043 35.0035 8.42936C35.0035 8.59829 34.955 8.76367 34.8639 8.90591C34.7728 9.04815 34.6427 9.16127 34.4893 9.23186L33.2226 9.7952C31.5649 10.5391 30.246 11.877 29.5259 13.5452L29.1143 14.4885C29.0502 14.6421 28.9421 14.7734 28.8036 14.8657C28.6651 14.9579 28.5024 15.0072 28.3359 15.0072C28.1695 15.0072 28.0068 14.9579 27.8683 14.8657C27.7298 14.7734 27.6217 14.6421 27.5576 14.4885L27.1476 13.5469C26.4271 11.8774 25.1069 10.5388 23.4476 9.7952L22.1809 9.23186C22.0275 9.16127 21.8975 9.04815 21.8063 8.90591C21.7152 8.76367 21.6668 8.59829 21.6668 8.42936C21.6668 8.26043 21.7152 8.09505 21.8063 7.95281C21.8975 7.81058 22.0275 7.69746 22.1809 7.62686L23.3776 7.09353C25.0783 6.32916 26.421 4.94166 27.1293 3.21686L27.5526 2.19853Z"
                        fill="url(#statsMktG1)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="statsMktF1"
                        x="3.33594"
                        y="1.67041"
                        width="33.8594"
                        height="39.5181"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_statsMkt1"
                        />
                      </filter>
                      <linearGradient
                        id="statsMktG1"
                        x1="3.33594"
                        y1="19.4284"
                        x2="37.1926"
                        y2="19.4284"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF8E01" />
                        <stop offset="1" stopColor="#FF6801" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
              {
                k: '2',
                n: '+6000',
                l: 'Nouvelles annonces chaque jour',
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <g filter="url(#statsMktF2)">
                      <path
                        d="M12.9245 22.3V33.6833C12.9245 34.3641 12.6541 35.0169 12.1728 35.4982C11.6914 35.9796 11.0386 36.25 10.3579 36.25H7.3412C7.00274 36.2522 6.66719 36.1874 6.35386 36.0594C6.04053 35.9314 5.75561 35.7427 5.51551 35.5042C5.2754 35.2656 5.08485 34.9819 4.95482 34.6694C4.8248 34.3569 4.75786 34.0218 4.75787 33.6833V22.3C4.75565 21.9601 4.82096 21.6232 4.95 21.3088C5.07904 20.9944 5.26924 20.7087 5.50957 20.4684C5.7499 20.228 6.03556 20.0378 6.34999 19.9088C6.66441 19.7798 7.00133 19.7145 7.3412 19.7167H10.3579C10.6963 19.7167 11.0315 19.7836 11.344 19.9136C11.6564 20.0437 11.9401 20.2342 12.1787 20.4743C12.4172 20.7144 12.606 20.9993 12.734 21.3127C12.862 21.626 12.9267 21.9615 12.9245 22.3ZM24.0912 6.33333V33.6833C24.0912 34.0218 24.0243 34.3569 23.8942 34.6694C23.7642 34.9819 23.5737 35.2656 23.3336 35.5042C23.0935 35.7427 22.8085 35.9314 22.4952 36.0594C22.1819 36.1874 21.8463 36.2522 21.5079 36.25H18.4912C17.8089 36.25 17.1544 35.9801 16.6704 35.4993C16.1864 35.0184 15.9123 34.3656 15.9079 33.6833V6.33333C15.9122 5.64954 16.1858 4.99499 16.6693 4.51147C17.1529 4.02794 17.8074 3.75437 18.4912 3.75H21.5079C22.193 3.75 22.8501 4.02217 23.3346 4.50664C23.819 4.99111 24.0912 5.64819 24.0912 6.33333ZM35.2412 14.9667V33.6833C35.2412 34.3641 34.9708 35.0169 34.4894 35.4982C34.0081 35.9796 33.3553 36.25 32.6745 36.25H29.6579C29.3194 36.2522 28.9839 36.1874 28.6705 36.0594C28.3572 35.9314 28.0723 35.7427 27.8322 35.5042C27.5921 35.2656 27.4015 34.9819 27.2715 34.6694C27.1415 34.3569 27.0745 34.0218 27.0745 33.6833V14.9667C27.0745 14.6274 27.1414 14.2915 27.2712 13.9781C27.401 13.6646 27.5913 13.3799 27.8312 13.14C28.0711 12.9001 28.3558 12.7098 28.6693 12.58C28.9827 12.4502 29.3186 12.3833 29.6579 12.3833H32.7412C33.4118 12.405 34.0477 12.6867 34.5143 13.1688C34.9808 13.651 35.2416 14.2957 35.2412 14.9667Z"
                        fill="url(#statsMktG2)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="statsMktF2"
                        x="4.75781"
                        y="3.75"
                        width="30.4844"
                        height="36.5"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_statsMkt2"
                        />
                      </filter>
                      <linearGradient
                        id="statsMktG2"
                        x1="4.75781"
                        y1="19.9991"
                        x2="35.2412"
                        y2="19.9991"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF8E01" />
                        <stop offset="1" stopColor="#FF6801" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
              {
                k: '3',
                n: '+80',
                l: 'Opportunité rentable envoyée par jour',
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <g filter="url(#statsMktF3)">
                      <path
                        d="M10.5 24.7954C12.4 24.7954 14.0625 26.4732 14.0625 28.3901C14.0625 30.3071 12.4 31.9849 10.5 31.9849C8.6 31.9849 6.9375 30.3071 6.9375 28.3901C6.93753 26.4732 8.60002 24.7954 10.5 24.7954ZM29.5 24.9849C31.433 24.9849 33 26.5519 33 28.4849C32.9998 30.4177 31.4329 31.9849 29.5 31.9849C27.5671 31.9849 26.0002 30.4177 26 28.4849C26 26.5519 27.567 24.9849 29.5 24.9849ZM16.6748 8.26123C23.0873 6.82348 29.2625 11.1371 30.6875 17.6069H34.4873C36.8623 17.6069 39 19.764 39 22.3999V25.2749C39 26.9523 37.5746 28.3901 35.9121 28.3901H35.2002C35.2002 25.275 32.5875 22.6392 29.5 22.6392C26.4125 22.6392 23.7998 25.275 23.7998 28.3901H16.2002C16.2002 25.275 13.5875 22.6392 10.5 22.6392C7.41252 22.6392 4.79984 25.275 4.7998 28.3901H4.08789C2.42539 28.3901 1 26.9523 1 25.2749V22.1597C1.00015 19.7635 3.13778 17.6069 5.5127 17.6069H7.1748C8.12482 12.8145 11.9249 9.21976 16.6748 8.26123ZM21.1875 11.856C16.9125 10.6578 12.1621 13.054 10.9746 17.6069H26.8877C25.9377 14.7314 23.8 12.5748 21.1875 11.856Z"
                        fill="url(#statsMktG3)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="statsMktF3"
                        x="1"
                        y="7.98438"
                        width="38"
                        height="28.0005"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_statsMkt3"
                        />
                      </filter>
                      <linearGradient
                        id="statsMktG3"
                        x1="1"
                        y1="19.984"
                        x2="39"
                        y2="19.984"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF8E01" />
                        <stop offset="1" stopColor="#FF6801" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.k} className="text-left sm:px-6 sm:py-1 lg:px-10">
                <div className="inline-flex text-[#FE6C0E]">{s.icon}</div>
                <p className="mt-4 text-3xl font-bold text-black sm:text-4xl">
                  {s.n}
                </p>
                <p className="mt-2 text-[16px] leading-snug text-[#6B7280]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <DemoFlowButton
            variant="primary"
            size="xl"
            className="rounded-[16px] px-10"
            style={{
              background:
                'linear-gradient(69.08deg, #FE6C0E 7.63%, #FF963A 54.5%)',
              borderColor: '#FFBC71',
              boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
            }}
          >
            Voir les opportunités CarPulse
          </DemoFlowButton>
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
    </main>
  );
}

export { Section04Process };
