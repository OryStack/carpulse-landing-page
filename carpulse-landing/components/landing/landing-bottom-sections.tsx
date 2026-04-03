import Image from "next/image";
import type { ReactNode } from "react";

import { CarPulseLogo } from "./CarPulseLogo";
import { Container } from "./Container";
import { IconMapPin } from "./icons";
import { Button } from "../ui/button";

const ORANGE = "#FF7A22";

/* ——— Section 7 : Cible professionnels ——— */

function AudienceIconCircle({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FF7A22] text-white shadow-md sm:h-[72px] sm:w-[72px]">
      {children}
    </div>
  );
}

export function Section07Audience() {
  const personas = [
    {
      label: "Garages & petits marchands",
      icon: (
        <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" aria-hidden>
          <path
            d="M5 14h18v10H5V14zm2-6h14l2 6H5l2-6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M11 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Revendeurs indépendants",
      icon: (
        <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" aria-hidden>
          <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M7 22c1-4 4-6 7-6s6 2 7 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="22" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M22 5v1.5M22 9.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Commerçants auto & importateurs",
      icon: (
        <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" aria-hidden>
          <circle cx="11" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 22c0-3 2.5-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M18 8l3 3-3 3M18 11h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Nouvelles entreprises du secteur auto",
      icon: (
        <svg viewBox="0 0 28 28" className="h-8 w-8" fill="none" aria-hidden>
          <circle cx="12" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 22c0-3 2.5-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M20 15v6M17 18h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[#F9F9F9] px-6 py-12 sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <h2 className="mx-auto max-w-[920px] text-center text-balance text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
            <span style={{ color: ORANGE }}>
              CarPulse s&apos;adresse à tous les professionnels de l&apos;automobile
            </span>
            <br />
            <span className="text-[#1A1A1A]">
              qui vivent du marché de l&apos;occasion de l&apos;achat à la revente.
            </span>
          </h2>

          <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-[32px] hidden h-px bg-[#FFD4B8] sm:block"
              aria-hidden
            />
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-4 lg:gap-6">
              {personas.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center text-center sm:px-1"
                >
                  <AudienceIconCircle>{p.icon}</AudienceIconCircle>
                  <p className="mt-4 max-w-[160px] text-[13px] font-medium leading-snug text-[#374151] sm:text-[14px]">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-stretch">
            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] sm:rounded-[32px] lg:min-h-[360px]">
              <Image
                src="/landing/audience-hero.png"
                alt="Professionnel automobile en concession avec une tablette"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-between rounded-[28px] bg-gradient-to-b from-black to-[#4A2400] p-8 shadow-xl sm:rounded-[32px] sm:p-10 lg:p-12">
              <div>
                <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[1.85rem]">
                  Que vous vendiez{" "}
                  <span style={{ color: ORANGE }}>2 ou 200</span> voitures par
                  mois
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
                  CarPulse s&apos;adapte à votre activité et vous aide à acheter
                  plus intelligemment.
                </p>
              </div>
              <Button variant="primary" size="lg" className="mt-8 sm:mt-10" fullWidth>
                Essayer CarPulse
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ——— Section 8 : Témoignages ——— */

function StarRow({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5 text-[#FF7A22]" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-[15px] leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  faded,
}: {
  quote: string;
  name: string;
  role: string;
  faded?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] sm:p-8 ${
        faded ? "opacity-50 sm:opacity-40" : ""
      }`}
    >
      <StarRow />
      <p className="mt-4 text-[15px] leading-relaxed text-[#374151]">{quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br from-gray-300 to-gray-200" />
        <div>
          <p className="font-bold text-[#1A1A1A]">{name}</p>
          <p className="text-[13px] text-[#6B7280]">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function Section08Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-16 top-24 h-64 w-64 text-[#FF7A22]/15 sm:right-8 lg:top-32"
        aria-hidden
      >
        <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
          <path
            d="M60 8l14 40h44l-36 26 14 40-36-26-36 26 14-40-36-26h44z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Container className="relative">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
          <span style={{ color: ORANGE }}>Ils en parlent</span>{" "}
          <span className="text-[#1A1A1A]">mieux que nous</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-[#6B7280]">
          Des particuliers, des marchands et des passionnés qui ont tous la
          même longueur d&apos;avance.
        </p>

        <div className="mx-auto mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <div className="flex -space-x-2" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-200 to-amber-100"
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <StarRow n={4} />
            <span className="text-[15px] font-bold text-[#1A1A1A]">
              +500 utilisateurs
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-white to-transparent sm:h-40" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <TestimonialCard
                quote="Je me suis mis à l&apos;achat-revente il y a quelques mois, sans trop savoir par où commencer. Grâce à CarPulse, j&apos;ai pu repérer mes premières vraies bonnes affaires rapidement."
                name="Julien"
                role="AutoStart Import, Vaud"
              />
              <TestimonialCard
                quote="Le scoring et les mini-rapports nous font gagner un temps fou : on sait en un coup d&apos;œil si le véhicule vaut le déplacement."
                name="Sarah M."
                role="Garage Léman, Genève"
                faded
              />
            </div>
            <div className="flex flex-col gap-6 md:mt-12 md:gap-8">
              <TestimonialCard
                quote="Nous sourcions plusieurs marques : CarPulse centralise les signaux et évite qu&apos;on rate les annonces qui partent en quelques heures."
                name="Marc D."
                role="Revendeur indépendant, Neuchâtel"
              />
              <TestimonialCard
                quote="L&apos;alerte instantanée sur la zone d&apos;action est devenue notre réflexe du matin — avant le café."
                name="Équipe Delta Auto"
                role="Import & négoce, Zurich"
                faded
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ——— Section 9 : Tarifs + confiance ——— */

function Check({ ok }: { ok: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
        ok
          ? "bg-emerald-100 text-emerald-600"
          : "bg-red-50 text-red-500 line-through decoration-red-400/0"
      }`}
      aria-hidden
    >
      {ok ? "✓" : "✕"}
    </span>
  );
}

function PricingFeature({
  children,
  ok,
}: {
  children: ReactNode;
  ok: boolean;
}) {
  return (
    <li className="flex gap-3 text-[14px] leading-snug text-[#374151]">
      <Check ok={ok} />
      <span className={ok ? "" : "text-[#9CA3AF] line-through"}>{children}</span>
    </li>
  );
}

export function Section09PricingTrust() {
  return (
    <section id="offres" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#FFD4B8] bg-[#FFF3EB] px-4 py-1.5 text-[12px] font-semibold text-[#FF7A22]">
            Offres d&apos;abonnements
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Choisissez le plan{" "}
            <span style={{ color: ORANGE }}>adapté</span> à votre activité
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B7280]">
            Accédez aux meilleurs deals automobiles, optimisez votre sourcing et
            développez votre activité.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
          {/* Starter */}
          <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1A1A1A]">Starter</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
              Idéal pour les petits garages qui démarrent leur veille.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-[#1A1A1A]">149 CHF</span>
              <span className="text-[15px] text-[#6B7280]"> / mois</span>
            </div>
            <Button variant="secondary" size="lg" fullWidth className="mt-6">
              Commencer avec Starter
            </Button>
            <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-6 text-[13px] text-[#374151]">
              <span className="text-[#FF7A22]" aria-hidden>
                🚗
              </span>
              Jusqu&apos;à <strong>20 deals</strong> /mois
            </div>
            <ul className="mt-4 space-y-3 border-t border-gray-100 pt-4">
              <PricingFeature ok>Scoring</PricingFeature>
              <PricingFeature ok>Mini-rapport IA</PricingFeature>
              <PricingFeature ok>Notifications</PricingFeature>
              <PricingFeature ok>Accès complet</PricingFeature>
              <PricingFeature ok>Sans engagement</PricingFeature>
              <PricingFeature ok={false}>Filtres personnalisés</PricingFeature>
              <PricingFeature ok={false}>Tableau analytique</PricingFeature>
              <PricingFeature ok={false}>Support prioritaire</PricingFeature>
              <PricingFeature ok={false}>Accès anticipé</PricingFeature>
            </ul>
          </div>

          {/* Pro */}
          <div className="relative flex flex-col rounded-3xl border-2 border-[#FF7A22] bg-white shadow-[0_20px_50px_-20px_rgba(255,122,34,0.35)] lg:-mt-2 lg:scale-[1.02]">
            <div className="flex items-center justify-center gap-2 rounded-t-[22px] bg-[#FF7A22] py-2.5 text-[13px] font-bold text-white">
              <span aria-hidden>★</span> Le plus populaire
            </div>
            <div className="flex flex-1 flex-col p-8 pt-7">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Pro</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
                Pour les revendeurs qui veulent scaler leur sourcing.
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-[#1A1A1A]">€279</span>
                <span className="text-[15px] text-[#6B7280]"> / mois</span>
              </div>
              <Button variant="primary" size="lg" fullWidth className="mt-6">
                Passer à Pro
              </Button>
              <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-6 text-[13px] text-[#374151]">
                <span className="text-[#FF7A22]" aria-hidden>
                  🚗
                </span>
                Jusqu&apos;à <strong>40 deals</strong> /mois
              </div>
              <ul className="mt-4 space-y-3 border-t border-gray-100 pt-4">
                <PricingFeature ok>Tout Starter</PricingFeature>
                <PricingFeature ok>Zone d&apos;action 2× étendue</PricingFeature>
                <PricingFeature ok>Filtres personnalisés</PricingFeature>
                <PricingFeature ok>Tableau analytique</PricingFeature>
                <PricingFeature ok>Support prioritaire</PricingFeature>
                <PricingFeature ok>Accès anticipé</PricingFeature>
                <PricingFeature ok={false}>Gestion multi-utilisateurs</PricingFeature>
                <PricingFeature ok={false}>Accompagnement dédié</PricingFeature>
              </ul>
            </div>
          </div>

          {/* Entreprise */}
          <div className="flex flex-col rounded-3xl bg-[#1F1F1F] p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold">Entreprise</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/65">
              Pour les groupes et acteurs à fort volume.
            </p>
            <div className="mt-6 text-2xl font-bold leading-snug">
              Tarification personnalisée
            </div>
            <Button variant="tertiary" size="lg" fullWidth className="mt-6">
              Demander une offre personnalisée
            </Button>
            <div className="mt-6 flex items-start gap-2 border-t border-white/10 pt-6 text-[13px] text-white/90">
              <span className="text-white" aria-hidden>
                🚗
              </span>
              <span>
                Volume et exclusivités des deals selon vos besoins.
              </span>
            </div>
            <ul className="mt-4 space-y-3 border-t border-white/10 pt-4 text-[14px] text-white/95">
              {[
                "Volumes et zones personnalisés",
                "Gestion multi-utilisateurs",
                "Accompagnement dédié",
                "Reporting avancé",
              ].map((line) => (
                <li key={line} className="flex gap-3 leading-snug">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-bold text-emerald-400"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[28px] bg-[#FFF9F2] px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                t: "Garantie satisfaction",
                d: "Remboursement si l'outil ne vous apporte pas de valeur.",
                icon: (
                  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                    <path d="M8 14l8-6 8 6v10a2 2 0 01-2 2H10a2 2 0 01-2-2V14z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M13 16l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                t: "Paiement sécurisé",
                d: "Transactions protégées et abonnement simple à gérer.",
                icon: (
                  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                    <rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M6 15h20" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M10 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                t: "Sans engagement",
                d: "Vous pouvez arrêter à tout moment.",
                icon: (
                  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
                    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M11 16l4 4 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.t} className="text-center md:text-left">
                <div className="inline-flex text-[#FF7A22]">{item.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">
                  {item.t}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ——— Section 10 : FAQ + CTA ——— */

const FAQ_ITEMS = [
  "Combien d'opportunités vais-je recevoir ?",
  "D'où proviennent les annonces analysées par CarPulse ?",
  "Comment CarPulse détermine si un véhicule est rentable ?",
  "CarPulse est-il destiné aux particuliers ?",
  "Puis-je arrêter mon abonnement à tout moment ?",
  "Que se passe-t-il si les opportunités ne sont pas pertinentes pour mon activité ?",
] as const;

export function Section10FaqCta() {
  return (
    <>
      <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            <span style={{ color: ORANGE }}>Questions</span>{" "}
            <span className="text-[#1A1A1A]">fréquentes</span>
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {FAQ_ITEMS.map((q) => (
              <details
                key={q}
                className="group rounded-xl border border-gray-200 bg-[#F9FAFB] px-5 py-4 transition hover:border-gray-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-medium text-[#374151] [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg leading-none text-[#6B7280] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 border-t border-gray-200/80 pt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Notre équipe peut vous répondre en détail lors d&apos;une démo
                  de 15 minutes — les réponses dépendent de votre plan et de
                  votre zone.
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 pt-4 sm:pb-20 lg:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-[#FFF7ED] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <pattern
                  id="topo"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 40 Q20 20 40 40 T80 40M0 60 Q30 40 60 60 T100 60M20 0 Q40 20 20 40"
                    fill="none"
                    stroke="#92400e"
                    strokeWidth="0.6"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo)" />
            </svg>

            <div className="pointer-events-none absolute left-4 top-6 hidden sm:block lg:left-10 lg:top-10">
              <div className="relative">
                <IconMapPin className="relative z-10 mx-auto h-6 w-6 text-[#FF7A22]" />
                <div className="mt-1 h-20 w-32 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-600 shadow-lg" />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-8 left-6 hidden md:block">
              <div className="relative">
                <IconMapPin className="relative z-10 mx-auto h-6 w-6 text-[#FF7A22]" />
                <div className="mt-1 h-16 w-28 rounded-2xl bg-gradient-to-br from-red-600 to-red-400 shadow-lg" />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-10 right-8 hidden md:block">
              <div className="relative">
                <IconMapPin className="relative z-10 mx-auto h-6 w-6 text-[#FF7A22]" />
                <div className="mt-1 h-[72px] w-32 rounded-2xl bg-gradient-to-br from-slate-400 to-slate-300 shadow-lg" />
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-2xl font-bold leading-snug text-[#1A1A1A] sm:text-3xl lg:text-[2rem]">
                Prêt à repérer les{" "}
                <span style={{ color: ORANGE }}>meilleures affaires</span> avant
                tout le monde ?
              </h2>
              <Button variant="primary" size="lg" className="mt-8">
                Réserver ma démo maintenant
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ——— Footer ——— */

function SocialIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <a
      href="#"
      className="text-white/80 transition hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-white px-2 py-1.5 ring-1 ring-white/10"
          >
            <CarPulseLogo />
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/90 sm:gap-x-8">
            <a href="#comment" className="hover:text-white">
              Comment ça marche ?
            </a>
            <a href="#marche" className="hover:text-white">
              Analyse du marché
            </a>
            <a href="#temoignages" className="hover:text-white">
              Témoignages
            </a>
            <a href="#confidentialite" className="hover:text-white">
              Politique de Confidentialité
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-zinc-400">
              2026 CarPulse. Tous droits réservés
            </p>
            <div className="flex items-center gap-5">
              <SocialIcon label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13.5 22v-8h2.7l.5-3.2H13.5V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.7c-.8-.1-1.7-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7v3.2h2.1V22h4.4z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="X">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.9 3H22l-7.6 8.7L23 21h-6.9l-5.4-6.3L5 21H2l8.1-9.3L2 3h7.1l4.9 5.7L18.9 3zm-2.4 16.2h1.7L7.5 4.7H5.6l10.9 14.5z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
