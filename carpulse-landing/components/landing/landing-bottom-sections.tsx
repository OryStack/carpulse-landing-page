import Image from "next/image";
import type { ReactNode } from "react";

import { CarPulseLogo } from "./CarPulseLogo";
import { Container } from "./Container";
import { DemoFlowButton } from "./DemoFlowButton";
import {
  PricingPlanCard,
  type PlanFeature,
} from "./PricingPlanCard";
import { Button } from "../ui/button";
import {
  BadgeCheck,
  Building2,
  CreditCard,
  MapPin,
  ShieldCheck,
  Star,
  Store,
  Truck,
  User,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const ORANGE = "#FF7A22";
/** Accent Figma section audience / stats marché */
const AUDIENCE_ACCENT = "#FE6C0E";

/* ——— Section 7 : Cible professionnels ——— */

function AudienceIconCircle({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FE6C0E] text-white shadow-md sm:h-[72px] sm:w-[72px]">
      {children}
    </div>
  );
}

export function Section07Audience() {
  const personas = [
    {
      label: "Garages & petits marchands",
      icon: <Store className="h-8 w-8" aria-hidden />,
    },
    {
      label: "Revendeurs indépendants",
      icon: <User className="h-8 w-8" aria-hidden />,
    },
    {
      label: "Commerçants auto & importateurs",
      icon: <Truck className="h-8 w-8" aria-hidden />,
    },
    {
      label: "Nouvelles entreprises du secteur auto",
      icon: <Building2 className="h-8 w-8" aria-hidden />,
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[#F9F9F9] px-6 py-12 sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <h2 className="mx-auto max-w-[920px] text-center text-balance text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
            <span style={{ color: AUDIENCE_ACCENT }}>
              CarPulse s&apos;adresse à tous les professionnels de l&apos;automobile
            </span>
            <br />
            <span className="text-black">
              qui vivent du marché de l&apos;occasion de l&apos;achat à la revente.
            </span>
          </h2>

          <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
            {/* Mobile : liste verticale avec ligne */}
            <div className="relative mx-auto max-w-sm sm:hidden">
              <div
                className="pointer-events-none absolute left-8 top-2 h-[calc(100%-16px)] w-px bg-[#FE6C0E]/35"
                aria-hidden
              />
              <div className="space-y-6">
                {personas.map((p) => (
                  <div key={p.label} className="flex items-center gap-5">
                    <AudienceIconCircle>{p.icon}</AudienceIconCircle>
                    <p className="text-[18px] font-semibold leading-snug text-black">
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop/tablette : grille existante */}
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-[32px] hidden h-px bg-[#FE6C0E]/35 sm:block"
              aria-hidden
            />
            <div className="hidden grid-cols-2 gap-10 sm:grid sm:grid-cols-4 sm:gap-4 lg:gap-6">
              {personas.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center text-center sm:px-1"
                >
                  <AudienceIconCircle>{p.icon}</AudienceIconCircle>
                  <p className="mt-4 max-w-[180px] text-[13px] font-medium leading-snug text-black sm:text-[14px]">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-stretch">
            <div className="relative min-h-[280px] overflow-hidden rounded-[20px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] sm:rounded-[24px] lg:min-h-[360px]">
              <Image
                src="/landing/audience-hero.png"
                alt="Professionnel automobile en concession avec une tablette"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div
              className="flex flex-col justify-between rounded-[20px] p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:rounded-[24px] sm:p-10 lg:p-12"
              style={{
                background:
                  "linear-gradient(180.1deg, #000000 20.41%, #FE6C0E 167.05%)",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-[1.85rem]">
                  <span style={{ color: AUDIENCE_ACCENT }}>Que vous vendiez </span>
                  <span className="text-[1.35em] font-extrabold text-[#FE6C0E] sm:text-[1.45em]">
                    2 ou 200
                  </span>
                  <span className="text-white"> voitures par mois</span>
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/90">
                  CarPulse s&apos;adapte à votre activité et vous aide à acheter
                  plus intelligemment.
                </p>
              </div>
              <DemoFlowButton
                variant="primary"
                size="lg"
                className="mt-8 rounded-[16px] sm:mt-10"
                fullWidth
                style={{
                  background:
                    "linear-gradient(69.08deg, #FE6C0E 7.63%, #FF963A 54.5%)",
                  borderColor: "#FFBC71",
                  boxShadow: "0px 4px 10px 0px #FFFFFF40 inset",
                }}
              >
                Essayer CarPulse
              </DemoFlowButton>
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
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
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
        <div className="h-11 w-11 shrink-0 rounded-lg bg-linear-to-br from-gray-300 to-gray-200" />
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
      className="testimonials-static-mobile relative overflow-hidden bg-[#FAFAFA] py-16 sm:bg-white sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-16 top-24 h-64 w-64 text-[#FF7A22]/15 sm:right-8 lg:top-32"
        aria-hidden
      >
        <Star className="h-full w-full" aria-hidden />
      </div>

      <Container className="relative">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.5rem]">
          <span className="md:hidden">
            <span className="text-[#FE6C0E]">Ils en parlent</span> <span>mieux</span>
            <br />
            <span className="text-[#1A1A1A]">que nous</span>
          </span>
          <span className="hidden md:inline">
            <span style={{ color: ORANGE }}>Ils en parlent</span>{" "}
            <span className="text-[#1A1A1A]">mieux que nous</span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-[#6B7280] md:mt-5">
          Des particuliers, des marchands et des passionnés qui ont tous la
          même longueur d&apos;avance.
        </p>

        <div className="mx-auto mt-8 flex items-center justify-center gap-4 sm:gap-4">
          <div className="flex -space-x-2" aria-hidden>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full border-2 border-white bg-linear-to-br from-orange-200 to-amber-100 sm:h-11 sm:w-11"
              />
            ))}
          </div>
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
            <StarRow n={4} />
            <span className="text-[15px] font-bold text-[#1A1A1A]">
              +500 utilisateurs
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-linear-to-b from-white to-transparent sm:h-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-white to-transparent sm:h-32" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                duration: 42,
                className: "testimonials-marquee-col",
                items: [
                  {
                    quote:
                      "Je me suis mis à l'achat-revente il y a quelques mois, sans trop savoir par où commencer. Grâce à CarPulse, j'ai pu repérer mes premières vraies bonnes affaires rapidement.",
                    name: "Julien",
                    role: "AutoStart Import, Vaud",
                    faded: false,
                  },
                  {
                    quote:
                      "Le scoring et les mini-rapports nous font gagner un temps fou : on sait en un coup d'œil si le véhicule vaut le déplacement.",
                    name: "Sarah M.",
                    role: "Garage Léman, Genève",
                    faded: true,
                  },
                ],
              },
              {
                duration: 48,
                className:
                  "testimonials-marquee-col max-md:hidden md:mt-14",
                items: [
                  {
                    quote:
                      "Nous sourcions plusieurs marques : CarPulse centralise les signaux et évite qu'on rate les annonces qui partent en quelques heures.",
                    name: "Marc D.",
                    role: "Revendeur indépendant, Neuchâtel",
                    faded: false,
                  },
                  {
                    quote:
                      "L'alerte instantanée sur la zone d'action est devenue notre réflexe du matin — avant le café.",
                    name: "Équipe Delta Auto",
                    role: "Import & négoce, Zurich",
                    faded: true,
                  },
                ],
              },
            ].map((col, colIdx) => (
              <div
                key={colIdx}
                className={`relative overflow-hidden max-md:h-auto max-md:max-h-none md:h-[min(480px,70vh)] md:max-h-[560px] ${col.className}`}
              >
                <div
                  className="testimonials-marquee-track flex flex-col gap-6 md:gap-8"
                  style={{ animationDuration: `${col.duration}s` }}
                >
                  {[...col.items, ...col.items].map((t, i) => (
                    <TestimonialCard
                      key={`${colIdx}-${i}-${t.name}`}
                      quote={t.quote}
                      name={t.name}
                      role={t.role}
                      faded={t.faded}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ——— Section 9 : Tarifs + confiance ——— */

const PRICING_STARTER_FEATURES: PlanFeature[] = [
  { text: "Scoring", available: true },
  { text: "Mini-rapport IA", available: true },
  { text: "Notifications", available: true },
  { text: "Accès plateforme", available: true },
  { text: "Sans engagement", available: true },
  { text: "Filtres illimités", available: false },
  { text: "Tableau analytique", available: false },
  { text: "Support prioritaire", available: false },
  { text: "Accès anticipé", available: false },
];

const PRICING_PRO_FEATURES: PlanFeature[] = [
  { text: "Zone d’action étendue", available: true },
  { text: "Scoring", available: true },
  { text: "Mini-rapport IA", available: true },
  { text: "Notifications", available: true },
  { text: "Accès plateforme", available: true },
  { text: "Sans engagement", available: true },
  { text: "Filtres illimités", available: true },
  { text: "Tableau analytique", available: true },
  { text: "Support prioritaire", available: true },
  { text: "Accès anticipé", available: true },
  { text: "Gestion multi-utilisateurs", available: false },
  { text: "Accompagnement dédié", available: false },
];

const PRICING_ENTERPRISE_FEATURES: PlanFeature[] = [
  { text: "Volumes et zones personnalisés", available: true },
  { text: "Gestion multi-utilisateurs", available: true },
  { text: "Accompagnement dédié", available: true },
  { text: "Reporting avancé", available: true },
];

type ApiPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  billing_cycle: "monthly" | "yearly" | string;
  is_active: boolean;
  kind: "standard" | "personalized" | string;
  max_collaborators: number;
  max_deals_per_month: number;
  deal_criteria_limit: number;
  priority_level: number;
  allow_filter_creation: boolean;
  deal_distribution_enabled: boolean;
  distribution_strategy: "exclusive" | string;
  max_recipients_per_deal: number;
};

type PlansResponse = {
  count: number;
  page: number;
  page_size: number;
  results: ApiPlan[];
};

function joinUrl(base: string, path: string) {
  const b = base.endsWith("/") ? base : `${base}/`;
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${b}${p}`;
}

async function fetchPlans(): Promise<ApiPlan[] | null> {
  const base = process.env.CARPULSE_CLIENT_API;
  if (!base) return null;

  const url = new URL(joinUrl(base, "plans"));
  url.searchParams.set("page", "1");
  url.searchParams.set("page_size", "20");
  url.searchParams.set("status", "active");
  url.searchParams.set("type", "all");
  url.searchParams.set("sort_by", "price");
  url.searchParams.set("sort_order", "asc");

  const res = await fetch(url.toString(), { next: { revalidate: 300 } });
  if (!res.ok) return null;
  const data = (await res.json()) as PlansResponse;
  return Array.isArray(data?.results) ? data.results : null;
}

function formatPlanPrice(plan: ApiPlan) {
  const priceNum = plan.price?.trim();
  if (!priceNum) return null;
  return `${priceNum} CHF`;
}

function formatPlanPeriod(plan: ApiPlan) {
  if (plan.billing_cycle === "monthly") return " / mois";
  if (plan.billing_cycle === "yearly") return " / an";
  return " / mois";
}

function planFeaturesFromApi(plan: ApiPlan): PlanFeature[] {
  const f: PlanFeature[] = [];

  if (Number.isFinite(plan.max_deals_per_month) && plan.max_deals_per_month > 0) {
    f.push({ text: `Jusqu'à ${plan.max_deals_per_month} deals / mois`, available: true });
  }
  if (Number.isFinite(plan.max_collaborators) && plan.max_collaborators > 0) {
    f.push({ text: `Jusqu'à ${plan.max_collaborators} collaborateurs`, available: true });
  }
  if (Number.isFinite(plan.deal_criteria_limit) && plan.deal_criteria_limit > 0) {
    f.push({ text: `${plan.deal_criteria_limit} critères de deal`, available: true });
  }

  f.push({
    text: "Création de filtres",
    available: Boolean(plan.allow_filter_creation),
  });

  f.push({
    text: "Distribution des deals",
    available: Boolean(plan.deal_distribution_enabled),
  });

  if (plan.deal_distribution_enabled && plan.distribution_strategy) {
    f.push({
      text: `Stratégie: ${plan.distribution_strategy}`,
      available: true,
    });
  }

  if (Number.isFinite(plan.max_recipients_per_deal) && plan.max_recipients_per_deal > 0) {
    f.push({ text: `Jusqu'à ${plan.max_recipients_per_deal} destinataires / deal`, available: true });
  }

  if (Number.isFinite(plan.priority_level) && plan.priority_level > 0) {
    f.push({ text: `Priorité support: niveau ${plan.priority_level}`, available: true });
  }

  return f;
}

export async function Section09PricingTrust() {
  let plansFromApi: ApiPlan[] | null = null;

  try {
    const plans = await fetchPlans();
    plansFromApi = plans?.filter((p) => p.is_active) ?? null;
  } catch {
    // fallback silencieux sur le contenu statique (design)
  }

  return (
    <section id="offres" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center">
          <span className="inline-block rounded-full border-[1.5px] border-[#F97316] bg-[#FFFBF5] px-4 py-1.5 text-[12px] font-semibold tracking-wide text-[#F97316]">
            Offres d&apos;abonnements
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            Choisissez le plan{" "}
            <span className="text-[#F97316]">adapté</span> à votre activité
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B7280]">
            Accédez aux meilleurs deals automobiles, optimisez votre sourcing et
            développez votre activité.
          </p>
        </div>

        <div
          className={`mt-14 grid gap-6 lg:items-stretch lg:gap-5 ${
            plansFromApi?.length ? "lg:grid-cols-3" : "lg:grid-cols-3"
          }`}
        >
          {plansFromApi?.length
            ? plansFromApi.map((plan, idx) => {
                const isCustom = plan.kind === "personalized";
                const variant = isCustom
                  ? "custom"
                  : idx === 0
                    ? "starter"
                    : "premium";

                const buttonVariant = isCustom
                  ? "custom"
                  : idx === 0
                    ? "starter"
                    : "premium";

                const price = formatPlanPrice(plan) ?? undefined;

                return (
                  <PricingPlanCard
                    key={plan.id}
                    variant={variant}
                    name={plan.name}
                    description={plan.description}
                    price={isCustom ? undefined : price}
                    period={isCustom ? undefined : formatPlanPeriod(plan)}
                    customPriceLabel={
                      isCustom ? "Tarification personnalisée" : undefined
                    }
                    dealCountLabel={
                      plan.max_deals_per_month
                        ? `Jusqu'à ${plan.max_deals_per_month} deals`
                        : "—"
                    }
                    features={planFeaturesFromApi(plan)}
                    buttonText={isCustom ? "Demander une offre personnalisée" : `Choisir ${plan.name}`}
                    buttonVariant={buttonVariant}
                    isPopular={!isCustom && idx === 1}
                    className="h-full"
                  />
                );
              })
            : [
                <PricingPlanCard
                  key="starter-fallback"
                  variant="starter"
                  name="Starter"
                  description="Pour les petits garages et marchands qui démarrent leur veille sur l’occasion."
                  price="149 CHF"
                  period=" / mois"
                  dealCountLabel="Jusqu'à 20 deals"
                  features={PRICING_STARTER_FEATURES}
                  buttonText="Commencer avec Starter"
                  buttonVariant="starter"
                  className="h-full"
                />,
                <PricingPlanCard
                  key="pro-fallback"
                  variant="premium"
                  name="Pro"
                  description="Pour les professionnels qui veulent scaler leur sourcing et leur marge."
                  price="279 CHF"
                  period=" / mois"
                  dealCountLabel="Jusqu'à 40 deals"
                  features={PRICING_PRO_FEATURES}
                  buttonText="Passer à Pro"
                  buttonVariant="premium"
                  isPopular
                  className="h-full"
                />,
                <PricingPlanCard
                  key="enterprise-fallback"
                  variant="custom"
                  name="Entreprise"
                  description="Pour les groupes et gros volumes qui nécessitent un accompagnement sur mesure."
                  customPriceLabel="Tarification personnalisée"
                  dealCountLabel="Volume et exclusivités des deals selon vos besoins"
                  features={PRICING_ENTERPRISE_FEATURES}
                  buttonText="Demander une offre personnalisée"
                  buttonVariant="custom"
                  className="h-full"
                />,
              ]}
        </div>

        <div className="mt-16 rounded-[28px] bg-[#FFF9F2] px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                t: "Garantie satisfaction",
                d: "Remboursement si l'outil ne vous apporte pas de valeur.",
                icon: <ShieldCheck className="h-8 w-8" aria-hidden />,
              },
              {
                t: "Paiement sécurisé",
                d: "Transactions protégées et abonnement simple à gérer.",
                icon: <CreditCard className="h-8 w-8" aria-hidden />,
              },
              {
                t: "Sans engagement",
                d: "Vous pouvez arrêter à tout moment.",
                icon: <BadgeCheck className="h-8 w-8" aria-hidden />,
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

/** Accent Figma FAQ + bandeau CTA (pins, titres) */
const FAQ_CTA_ORANGE = "#FE6C0E";

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
            <span className="hidden sm:inline">
              <span style={{ color: FAQ_CTA_ORANGE }}>Questions</span>{" "}
              <span className="text-[#1A1A1A]">fréquentes</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 sm:hidden">
              <span style={{ color: FAQ_CTA_ORANGE }}>Questions</span>
              <span className="text-[#1A1A1A]">fréquentes</span>
            </span>
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

            <div className="pointer-events-none absolute left-1 top-3 w-[min(34%,130px)] max-w-[130px] sm:left-4 sm:top-6 lg:left-10 lg:top-10">
              <div className="relative flex flex-col items-center">
                <MapPin
                  className="relative z-10 h-5 w-5 shrink-0"
                  style={{ color: FAQ_CTA_ORANGE }}
                  aria-hidden
                />
                <Image
                  src="/faq-cta/car-black.png"
                  alt=""
                  width={400}
                  height={260}
                  className="mt-1 h-auto w-full max-h-[88px] object-contain object-bottom drop-shadow-md sm:max-h-[100px] lg:max-h-[112px]"
                  aria-hidden
                />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-20 left-2 w-[min(30%,120px)] max-w-[120px] sm:bottom-6 sm:left-4 md:bottom-8 lg:left-10">
              <div className="relative flex flex-col items-center">
                <MapPin
                  className="relative z-10 h-5 w-5 shrink-0"
                  style={{ color: FAQ_CTA_ORANGE }}
                  aria-hidden
                />
                <Image
                  src="/faq-cta/car-red.png"
                  alt=""
                  width={360}
                  height={240}
                  className="mt-1 h-auto w-full max-h-[74px] object-contain object-bottom drop-shadow-md md:max-h-[82px] lg:max-h-[92px]"
                  aria-hidden
                />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-24 right-1 w-[min(36%,150px)] max-w-[150px] sm:bottom-10 sm:right-4 md:right-8">
              <div className="relative flex flex-col items-center">
                <MapPin
                  className="relative z-10 h-5 w-5 shrink-0"
                  style={{ color: FAQ_CTA_ORANGE }}
                  aria-hidden
                />
                <Image
                  src="/faq-cta/car-silver.png"
                  alt=""
                  width={440}
                  height={280}
                  className="mt-1 h-auto w-full max-h-[88px] object-contain object-bottom drop-shadow-md md:max-h-[100px] lg:max-h-[112px]"
                  aria-hidden
                />
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-2xl px-1 text-center">
              <h2 className="text-balance text-xl font-bold leading-snug text-[#1A1A1A] sm:text-3xl lg:text-[2rem]">
                Prêt à repérer les{" "}
                <span style={{ color: FAQ_CTA_ORANGE }}>meilleures affaires</span>{" "}
                avant tout le monde ?
              </h2>
              <DemoFlowButton
                variant="primary"
                size="lg"
                className="mt-8 rounded-[16px] px-10"
                style={{
                  background: FAQ_CTA_ORANGE,
                  borderColor: "#FFB366",
                }}
              >
                Réserver ma démo maintenant
              </DemoFlowButton>
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
      className="text-white transition hover:opacity-90"
      aria-label={label}
    >
      {children}
    </a>
  );
}

const footerNav = {
  main: [
    { href: "#comment", label: "Comment ça marche ?" },
    { href: "#marche", label: "Analyse du marché" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#confidentialite", label: "Politique de Confidentialité" },
  ],
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#111111] text-white">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <a href="#" className="inline-flex items-center">
              <CarPulseLogo variant="image" />
            </a>

            <nav
              className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 text-[12px] font-medium text-white/85 md:justify-end md:gap-x-8"
              aria-label="Liens pied de page"
            >
              {footerNav.main.map((item) => (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Séparateur Figma : pas toute la largeur du conteneur */}
        <div
          className="mx-auto mt-12 h-px w-full max-w-[min(100%,520px)] bg-[#2a2a2a] md:mt-14"
          aria-hidden
        />

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-[#888888]">
            © 2026 CarPulse. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 md:gap-5">
            <SocialIcon label="Instagram">
              <FaInstagram className="h-5 w-5" aria-hidden />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <FaFacebookF className="h-5 w-5" aria-hidden />
            </SocialIcon>
            <SocialIcon label="X">
              <FaXTwitter className="h-5 w-5" aria-hidden />
            </SocialIcon>
          </div>
        </div>
      </Container>
    </footer>
  );
}
