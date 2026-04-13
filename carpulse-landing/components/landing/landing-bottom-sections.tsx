import Image from 'next/image';
import type { ReactNode } from 'react';

import { CarPulseLogo } from './CarPulseLogo';
import { Container } from './Container';
import { DemoFlowButton } from './DemoFlowButton';
import { PricingPlanCard, type PlanFeature } from './PricingPlanCard';
import { Button } from '../ui/button';
import {
  CircleCheck,
  Building2,
  CreditCard,
  MapPin,
  ShieldCheck,
  Star,
  Store,
  Truck,
  User,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const ORANGE = '#FF7A22';
/** Accent Figma section audience / stats marché */
const AUDIENCE_ACCENT = '#FE6C0E';

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
      label: 'Garages & petits marchands',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M7.7414 26.6663C7.43651 26.6663 7.18051 26.5632 6.9734 26.357C6.76629 26.1508 6.66318 25.8948 6.66407 25.589V13.7436C6.66407 13.4023 6.74051 13.0792 6.8934 12.7743C7.04629 12.4694 7.25696 12.2183 7.5254 12.021L14.7054 6.58365C14.9036 6.44054 15.1107 6.33298 15.3267 6.26098C15.5427 6.18898 15.7681 6.15342 16.0027 6.15431C16.2374 6.1552 16.4614 6.19076 16.6747 6.26098C16.8881 6.3312 17.093 6.43876 17.2894 6.58365L24.4694 12.0196C24.7387 12.217 24.9494 12.4685 25.1014 12.7743C25.2543 13.0792 25.3307 13.4023 25.3307 13.7436V25.589C25.3307 25.8948 25.2276 26.1508 25.0214 26.357C24.8152 26.5632 24.5592 26.6663 24.2534 26.6663H23.0747C22.7698 26.6663 22.5138 26.5632 22.3067 26.357C22.0996 26.1508 21.9965 25.8948 21.9974 25.589V15.7196C21.9974 15.4139 21.8943 15.1579 21.6881 14.9516C21.4818 14.7454 21.2258 14.6423 20.9201 14.6423H11.0747C10.7698 14.6423 10.5138 14.7454 10.3067 14.9516C10.0996 15.1579 9.99651 15.4139 9.9974 15.7196V25.5903C9.9974 25.8961 9.89429 26.1521 9.68807 26.3583C9.48185 26.5645 9.22585 26.6672 8.92007 26.6663H7.7414ZM12.4081 25.3063C12.1032 25.3063 11.8472 25.2036 11.6401 24.9983C11.433 24.793 11.3298 24.537 11.3307 24.2303V22.385C11.3307 22.0792 11.4338 21.8232 11.6401 21.617C11.8463 21.4108 12.1023 21.3076 12.4081 21.3076H19.5867C19.8925 21.3076 20.1485 21.4108 20.3547 21.617C20.561 21.8232 20.6641 22.0788 20.6641 22.3836V24.2303C20.6641 24.5352 20.561 24.7912 20.3547 24.9983C20.1485 25.2054 19.8925 25.3085 19.5867 25.3076L12.4081 25.3063ZM12.4081 19.973C12.1032 19.973 11.8472 19.8703 11.6401 19.665C11.433 19.4596 11.3298 19.2036 11.3307 18.897V17.0516C11.3307 16.7459 11.4338 16.4899 11.6401 16.2836C11.8463 16.0774 12.1023 15.9743 12.4081 15.9743H19.5867C19.8925 15.9743 20.1485 16.0774 20.3547 16.2836C20.561 16.4899 20.6641 16.7459 20.6641 17.0516V18.897C20.6641 19.2019 20.561 19.4574 20.3547 19.6636C20.1485 19.8699 19.8925 19.9734 19.5867 19.9743L12.4081 19.973Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: 'Revendeurs indépendants',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M20.0052 3.27766C18.7107 2.8718 17.3618 2.66587 16.0052 2.667C8.64121 2.667 2.67188 8.63633 2.67188 16.0003C2.67188 23.3643 8.64121 29.3337 16.0052 29.3337C23.3692 29.3337 29.3385 23.3643 29.3385 16.0003C29.3397 14.6437 29.1337 13.2948 28.7279 12.0003"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.34375 26.0003L8.09042 24.6937C8.67349 23.6729 9.5161 22.8245 10.5328 22.2344C11.5495 21.6443 12.7042 21.3336 13.8798 21.3337H18.1411C19.3164 21.3338 20.4708 21.6447 21.4873 22.2347C22.5037 22.8248 23.3461 23.6731 23.9291 24.6937L24.6758 26.0003M20.0104 13.3337C20.0104 14.3945 19.589 15.4119 18.8388 16.1621C18.0887 16.9122 17.0713 17.3337 16.0104 17.3337C14.9496 17.3337 13.9321 16.9122 13.182 16.1621C12.4318 15.4119 12.0104 14.3945 12.0104 13.3337C12.0104 12.2728 12.4318 11.2554 13.182 10.5052C13.9321 9.75509 14.9496 9.33366 16.0104 9.33366C17.0713 9.33366 18.0887 9.75509 18.8388 10.5052C19.589 11.2554 20.0104 12.2728 20.0104 13.3337ZM25.3091 2.69499C25.3171 2.65766 25.3704 2.65766 25.3784 2.69499C25.5769 3.66479 26.0559 4.55492 26.7559 5.25489C27.4558 5.95485 28.346 6.43382 29.3158 6.63233C29.3531 6.64033 29.3531 6.69366 29.3158 6.70166C28.346 6.90017 27.4558 7.37913 26.7559 8.0791C26.0559 8.77906 25.5769 9.6692 25.3784 10.639C25.3704 10.6763 25.3171 10.6763 25.3091 10.639C25.1106 9.6692 24.6316 8.77906 23.9316 8.0791C23.2317 7.37913 22.3415 6.90017 21.3718 6.70166C21.3344 6.69366 21.3344 6.64033 21.3718 6.63233C22.3415 6.43382 23.2317 5.95485 23.9316 5.25489C24.6316 4.55492 25.1106 3.66479 25.3091 2.69499Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'Commerçants auto & importateurs',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M16 5C12.1 5 9 8.1 9 12C8.99317 13.1469 9.26985 14.2777 9.80544 15.2918C10.341 16.3059 11.119 17.172 12.07 17.813C8.51 19.346 6 22.892 6 27H8C8 22.6 11.6 19 16 19C19.9 19 23 15.9 23 12C23 8.1 19.9 5 16 5ZM16 7C18.8 7 21 9.2 21 12C21 14.8 18.8 17 16 17C13.2 17 11 14.8 11 12C11 9.2 13.2 7 16 7ZM21 19C19.9 19 19 19.9 19 21V25.4L25 31.4C25.4 31.8 25.9 32 26.4 32C26.9 32 27.4 31.8 27.8 31.4L31.4 27.8C31.8 27.4 32 26.9 32 26.4C32 25.9 31.8 25.4 31.4 25L25.4 19H21ZM21 21H24.6L30 26.4L26.4 30L21 24.6V21ZM23 22C22.7348 22 22.4804 22.1054 22.2929 22.2929C22.1054 22.4804 22 22.7348 22 23C22 23.2652 22.1054 23.5196 22.2929 23.7071C22.4804 23.8946 22.7348 24 23 24C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: 'Nouvelles entreprises du secteur auto',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M9.59688 9.6002C9.59688 7.90281 10.2712 6.27494 11.4714 5.07471C12.6716 3.87448 14.2995 3.2002 15.9969 3.2002C17.6943 3.2002 19.3221 3.87448 20.5224 5.07471C21.7226 6.27494 22.3969 7.90281 22.3969 9.6002C22.3969 13.117 19.4913 16.0002 15.9969 16.0002C14.2995 16.0002 12.6716 15.3259 11.4714 14.1257C10.2712 12.9254 9.59688 11.2976 9.59688 9.6002ZM17.9585 17.6002H8.01288C7.5913 17.5981 7.17346 17.6793 6.78337 17.8392C6.39328 17.999 6.03863 18.2344 5.73978 18.5318C5.44094 18.8291 5.2038 19.1826 5.04198 19.5719C4.88017 19.9612 4.79687 20.3786 4.79688 20.8002C4.79688 23.5058 6.12968 25.5458 8.21288 26.8754C9.51048 27.7026 11.0945 28.253 12.8369 28.5474C12.7605 28.0102 12.7943 27.4631 12.9361 26.9394C11.4369 26.6706 10.1201 26.1938 9.07367 25.525C7.39367 24.453 6.39688 22.8962 6.39688 20.8002C6.39688 19.9154 7.11367 19.2002 8.01127 19.2002H17.5873C17.6513 18.6551 17.775 18.1218 17.9585 17.6002ZM15.9969 4.8002C14.7238 4.8002 13.5029 5.30591 12.6028 6.20608C11.7026 7.10626 11.1969 8.32716 11.1969 9.6002C11.1969 10.8732 11.7026 12.0941 12.6028 12.9943C13.5029 13.8945 14.7238 14.4002 15.9969 14.4002C17.2699 14.4002 18.4908 13.8945 19.391 12.9943C20.2912 12.0941 20.7969 10.8732 20.7969 9.6002C20.7969 8.32716 20.2912 7.10626 19.391 6.20608C18.4908 5.30591 17.2699 4.8002 15.9969 4.8002ZM25.4241 14.4386C26.0097 14.5058 26.1777 15.2066 25.7601 15.6258L24.2001 17.1858C23.7477 17.6381 23.4936 18.2517 23.4936 18.8914C23.4936 19.5311 23.7477 20.1446 24.2001 20.597C24.6524 21.0493 25.266 21.3035 25.9057 21.3035C26.5454 21.3035 27.1589 21.0493 27.6113 20.597L29.1713 19.037C29.5889 18.6194 30.2913 18.7874 30.3585 19.373C30.4699 20.3239 30.337 21.2875 29.9722 22.1726C29.6075 23.0578 29.023 23.8354 28.274 24.4317C27.525 25.028 26.6363 25.4235 25.6919 25.5806C24.7475 25.7378 23.7786 25.6514 22.8769 25.3298L18.5153 29.693C18.2913 29.917 18.0254 30.0947 17.7327 30.2159C17.4401 30.3371 17.1264 30.3995 16.8097 30.3995C16.4929 30.3995 16.1793 30.3371 15.8866 30.2159C15.594 30.0947 15.3281 29.917 15.1041 29.693C14.8801 29.469 14.7024 29.2031 14.5812 28.9105C14.46 28.6178 14.3976 28.3042 14.3976 27.9874C14.3976 27.6706 14.46 27.357 14.5812 27.0643C14.7024 26.7717 14.8801 26.5058 15.1041 26.2818L19.4657 21.9202C19.1439 21.0183 19.0576 20.0493 19.2148 19.1047C19.3721 18.1602 19.7676 17.2713 20.3642 16.5223C20.9607 15.7733 21.7385 15.1888 22.6239 14.8242C23.5093 14.4596 24.4731 14.3269 25.4241 14.4386Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[#F9F9F9] px-6 py-12 sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <h2 className="mx-auto max-w-[1120px] text-center text-balance text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
            <span style={{ color: AUDIENCE_ACCENT }}>
              CarPulse s&apos;adresse à tous les professionnels de
              l&apos;automobile
            </span>
            <br />
            <span className="text-black">
              qui vivent du marché de l&apos;occasion de l&apos;achat à la
              revente.
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

          <div className="mt-14 grid gap-[8px] lg:mt-16 lg:grid-cols-2 lg:items-stretch">
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
                  'linear-gradient(180.1deg, #000000 20.41%, #FE6C0E 167.05%)',
              }}
            >
              <div>
                <h3 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-[2.25rem]">
                  <span style={{ color: AUDIENCE_ACCENT }}>
                    Que vous vendiez{' '}
                  </span>
                  <br />
                  <span className="text-[1.35em] font-extrabold text-[#FE6C0E] sm:text-[1.45em]">
                    2 ou 200
                  </span>
                  <span className="text-white">
                    {' '}
                    voitures <br /> par mois
                  </span>
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
                    'linear-gradient(69.08deg, #FE6C0E 7.63%, #FF963A 54.5%)',
                  borderColor: '#FFBC71',
                  boxShadow: '0px 4px 10px 0px #FFFFFF40 inset',
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

/** Extrait les initiales d'un nom (ex: "Julien" → "J", "Sarah M." → "SM", "Équipe Delta Auto" → "ED") */
function getInitials(name: string): string {
  const words = name.replace(/[.]/g, '').split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('');
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
  const initials = getInitials(name);

  return (
    <article
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] sm:p-8 ${
        faded ? 'opacity-50 sm:opacity-40' : ''
      }`}
    >
      <StarRow />
      <p className="mt-4 text-[15px] leading-relaxed text-[#374151]">{quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7A22] to-[#FFA560] text-sm font-bold text-white">
          {initials}
        </div>
        <div>
          <p className="font-bold text-[#1A1A1A]">{name}</p>
          <p className="text-[13px] text-[#6B7280]">{role}</p>
        </div>
      </div>
    </article>
  );
}

/** Images des avatars utilisateurs */
const USER_AVATARS = [
  '/Ellipse 747.png',
  '/Ellipse 748.png',
  '/Ellipse 749.png',
];

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
            <span className="text-[#FE6C0E]">Ils en parlent</span>{' '}
            <span>mieux</span>
            <br />
            <span className="text-[#1A1A1A]">que nous</span>
          </span>
          <span className="hidden md:inline">
            <span style={{ color: ORANGE }}>Ils en parlent</span>{' '}
            <span className="text-[#1A1A1A]">mieux que nous</span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-[#6B7280] md:mt-5">
          Des particuliers, des marchands et des passionnés qui ont tous la même
          longueur d&apos;avance.
        </p>

        <div className="mx-auto mt-8 flex items-center justify-center gap-4 sm:gap-4">
          <div className="flex -space-x-2" aria-hidden>
            {["/Ellipse%20747.png", "/Ellipse%20748.png", "/Ellipse%20749.png"].map(
              (src, i) => (
              <div
                key={i}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white sm:h-11 sm:w-11"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`Utilisateur ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#FE6C0E]" aria-hidden />
                )}
              </div>
              ),
            )}
          </div>
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
            <StarRow n={4} />
            <span className="text-[15px] font-bold text-[#1A1A1A]">
              +500 utilisateurs
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent sm:h-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white to-transparent sm:h-32" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                duration: 42,
                className: 'testimonials-marquee-col',
                items: [
                  {
                    quote:
                      "Je me suis mis à l'achat-revente il y a quelques mois, sans trop savoir par où commencer. Grâce à CarPulse, j'ai pu repérer mes premières vraies bonnes affaires rapidement.",
                    name: 'Julien',
                    role: 'AutoStart Import, Vaud',
                    faded: false,
                  },
                  {
                    quote:
                      "Le scoring et les mini-rapports nous font gagner un temps fou : on sait en un coup d'œil si le véhicule vaut le déplacement.",
                    name: 'Sarah M.',
                    role: 'Garage Léman, Genève',
                    faded: true,
                  },
                ],
              },
              {
                duration: 48,
                className: 'testimonials-marquee-col max-md:hidden md:mt-14',
                items: [
                  {
                    quote:
                      "Nous sourcions plusieurs marques : CarPulse centralise les signaux et évite qu'on rate les annonces qui partent en quelques heures.",
                    name: 'Marc D.',
                    role: 'Revendeur indépendant, Neuchâtel',
                    faded: false,
                  },
                  {
                    quote:
                      "L'alerte instantanée sur la zone d'action est devenue notre réflexe du matin — avant le café.",
                    name: 'Équipe Delta Auto',
                    role: 'Import & négoce, Zurich',
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
  { text: 'Scoring', available: true },
  { text: 'Mini-rapport IA', available: true },
  { text: 'Notifications', available: true },
  { text: 'Accès plateforme', available: true },
  { text: 'Sans engagement', available: true },
  { text: 'Filtres illimités', available: false },
  { text: 'Tableau analytique', available: false },
  { text: 'Support prioritaire', available: false },
  { text: 'Accès anticipé', available: false },
];

const PRICING_PRO_FEATURES: PlanFeature[] = [
  { text: "Zone d'action étendue", available: true },
  { text: 'Scoring', available: true },
  { text: 'Mini-rapport IA', available: true },
  { text: 'Notifications', available: true },
  { text: 'Accès plateforme', available: true },
  { text: 'Sans engagement', available: true },
  { text: 'Filtres illimités', available: true },
  { text: 'Tableau analytique', available: true },
  { text: 'Support prioritaire', available: true },
  { text: 'Accès anticipé', available: true },
  { text: 'Gestion multi-utilisateurs', available: false },
  { text: 'Accompagnement dédié', available: false },
];

const PRICING_ENTERPRISE_FEATURES: PlanFeature[] = [
  { text: 'Volumes et zones personnalisés', available: true },
  { text: 'Gestion multi-utilisateurs', available: true },
  { text: 'Accompagnement dédié', available: true },
  { text: 'Reporting avancé', available: true },
];

type ApiPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  billing_cycle: 'monthly' | 'yearly' | string;
  is_active: boolean;
  kind: 'standard' | 'personalized' | string;
  max_collaborators: number;
  max_deals_per_month: number;
  deal_criteria_limit: number;
  priority_level: number;
  allow_filter_creation: boolean;
  deal_distribution_enabled: boolean;
  distribution_strategy: 'exclusive' | string;
  max_recipients_per_deal: number;
};

type PlansResponse = {
  count: number;
  page: number;
  page_size: number;
  results: ApiPlan[];
};

function joinUrl(base: string, path: string) {
  const b = base.endsWith('/') ? base : `${base}/`;
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${b}${p}`;
}

async function fetchPlans(): Promise<ApiPlan[] | null> {
  const base = process.env.CARPULSE_CLIENT_API;
  if (!base) return null;

  const url = new URL(joinUrl(base, 'plans'));
  url.searchParams.set('page', '1');
  url.searchParams.set('page_size', '20');
  url.searchParams.set('status', 'active');
  url.searchParams.set('type', 'all');
  url.searchParams.set('sort_by', 'price');
  url.searchParams.set('sort_order', 'asc');

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
  if (plan.billing_cycle === 'monthly') return ' / mois';
  if (plan.billing_cycle === 'yearly') return ' / an';
  return ' / mois';
}

function planFeaturesFromApi(plan: ApiPlan): PlanFeature[] {
  const f: PlanFeature[] = [];

  if (
    Number.isFinite(plan.max_deals_per_month) &&
    plan.max_deals_per_month > 0
  ) {
    f.push({
      text: `Jusqu'à ${plan.max_deals_per_month} deals / mois`,
      available: true,
    });
  }
  if (Number.isFinite(plan.max_collaborators) && plan.max_collaborators > 0) {
    f.push({
      text: `Jusqu'à ${plan.max_collaborators} collaborateurs`,
      available: true,
    });
  }
  if (
    Number.isFinite(plan.deal_criteria_limit) &&
    plan.deal_criteria_limit > 0
  ) {
    f.push({
      text: `${plan.deal_criteria_limit} critères de deal`,
      available: true,
    });
  }

  f.push({
    text: 'Création de filtres',
    available: Boolean(plan.allow_filter_creation),
  });

  f.push({
    text: 'Distribution des deals',
    available: Boolean(plan.deal_distribution_enabled),
  });

  if (plan.deal_distribution_enabled && plan.distribution_strategy) {
    f.push({
      text: `Stratégie: ${plan.distribution_strategy}`,
      available: true,
    });
  }

  if (
    Number.isFinite(plan.max_recipients_per_deal) &&
    plan.max_recipients_per_deal > 0
  ) {
    f.push({
      text: `Jusqu'à ${plan.max_recipients_per_deal} destinataires / deal`,
      available: true,
    });
  }

  if (Number.isFinite(plan.priority_level) && plan.priority_level > 0) {
    f.push({
      text: `Priorité support: niveau ${plan.priority_level}`,
      available: true,
    });
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
            Choisissez le plan <span className="text-[#F97316]">adapté</span> à
            votre activité
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B7280]">
            Accédez aux meilleurs deals automobiles, optimisez votre sourcing et
            développez votre activité.
          </p>
        </div>

        <div
          className={`mt-14 grid gap-6 lg:items-stretch lg:gap-5 ${
            plansFromApi?.length ? 'lg:grid-cols-3' : 'lg:grid-cols-3'
          }`}
        >
          {plansFromApi?.length
            ? plansFromApi.map((plan, idx) => {
                const isCustom = plan.kind === 'personalized';
                const variant = isCustom
                  ? 'custom'
                  : idx === 0
                    ? 'starter'
                    : 'premium';

                const buttonVariant = isCustom
                  ? 'custom'
                  : idx === 0
                    ? 'starter'
                    : 'premium';

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
                      isCustom ? 'Tarification personnalisée' : undefined
                    }
                    dealCountLabel={
                      plan.max_deals_per_month
                        ? `Jusqu'à ${plan.max_deals_per_month} deals`
                        : '—'
                    }
                    features={planFeaturesFromApi(plan)}
                    buttonText={
                      isCustom
                        ? 'Demander une offre personnalisée'
                        : `Choisir ${plan.name}`
                    }
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
                  description="Pour les petits garages et marchands qui démarrent leur veille sur l'occasion."
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
                t: 'Garantie satisfaction',
                d: "Remboursement si l'outil ne vous\napporte pas de valeur.",

                icon: <ShieldCheck className="h-8 w-8" aria-hidden />,
              },
              {
                t: 'Paiement sécurisé',
                d: 'Transactions protégées et\nabonnement simple à gérer.',
                icon: <CreditCard className="h-8 w-8" aria-hidden />,
              },
              {
                t: 'Sans engagement',
                d: 'Vous pouvez arrêter à tout\nmoment',
                icon: <CircleCheck className="h-8 w-8" aria-hidden />,
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
const FAQ_CTA_ORANGE = '#FE6C0E';

const FAQ_ITEMS = [
  "Combien d'opportunités vais-je recevoir ?",
  "D'où proviennent les annonces analysées par CarPulse ?",
  'Comment CarPulse détermine si un véhicule est rentable ?',
  'CarPulse est-il destiné aux particuliers ?',
  'Puis-je arrêter mon abonnement à tout moment ?',
  'Que se passe-t-il si les opportunités ne sont pas pertinentes pour mon activité ?',
] as const;

export function Section10FaqCta() {
  return (
    <>
      <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="hidden sm:inline">
              <span style={{ color: FAQ_CTA_ORANGE }}>Questions</span>{' '}
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
                Prêt à repérer les{' '}
                <span style={{ color: FAQ_CTA_ORANGE }}>
                  meilleures affaires
                </span>{' '}
                avant tout le monde ?
              </h2>
              <DemoFlowButton
                variant="primary"
                size="lg"
                className="mt-8 rounded-[16px] px-10"
                style={{
                  background: FAQ_CTA_ORANGE,
                  borderColor: '#FFB366',
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

function SocialIcon({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
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
    { href: '#processus', label: 'Comment ça marche ?' },
    { href: '#marche', label: 'Analyse du marché' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#confidentialite', label: 'Politique de Confidentialité' },
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
