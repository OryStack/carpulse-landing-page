import type { Metadata } from 'next';

const clientUrl = process.env.NEXT_PUBLIC_CARPULSE_CLIENT_URL!;

export const metadata: Metadata = {
  title: 'Politique de Cookies – CarPulse',
  description: `Découvrez comment CarPulse utilise les cookies et technologies similaires sur ${clientUrl}.`,
};


function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="mt-3 space-y-2 pl-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function InfoBox({
  children,
  variant = 'orange',
}: {
  children: React.ReactNode;
  variant?: 'orange' | 'blue' | 'gray';
}) {
  const styles = {
    orange: 'border-orange-100 bg-[#FFF9F2]',
    blue: 'border-blue-100 bg-blue-50/50',
    gray: 'border-gray-100 bg-[#FAFAFA]',
  };
  return (
    <div className={`rounded-xl border p-5 ${styles[variant]}`}>
      {children}
    </div>
  );
}

function CookieBadge({
  label,
  color,
}: {
  label: string;
  color: 'green' | 'blue' | 'purple';
}) {
  const styles = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${styles[color]}`}
    >
      {label}
    </span>
  );
}

/* ─── Page ─── */

export default function PolitiqueCookiesPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <header className="mb-10">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-[#FFF9F2] px-3 py-1.5">
          <span className="text-base" aria-hidden>
            🍪
          </span>
          <span className="text-[12px] font-semibold tracking-wide text-[#FE6C0E]">
            Cookies
          </span>
        </div>

        <h1 className="text-[28px] font-bold leading-tight text-[#1A1A1A] sm:text-4xl">
          Politique de cookies
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#6B7280]">
          <span>CarPulse</span>
          <span aria-hidden>·</span>
          <span>Dernière mise à jour : novembre 2025</span>
        </div>

        <p className="mt-6 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          La présente politique explique comment CarPulse, édité par Pierrick
          Mettraux – Piamedia, utilise les cookies et autres technologies
          similaires sur le site{' '}
          <a
            href={clientUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE6C0E] transition hover:underline"
          >
            {clientUrl.replace(/^https?:\/\//, '')}
          </a>
          .
        </p>
      </header>

      {/* ── Article 1 : Qu'est-ce qu'un cookie ? ── */}
      <section className="mb-10">
        <SectionTitle>1. Qu&apos;est-ce qu&apos;un cookie ?</SectionTitle>
        <Paragraph>
          Un cookie est un petit fichier texte enregistré sur votre appareil
          lors de la visite d&apos;un site web.
        </Paragraph>
        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Il permet de reconnaître votre navigateur, de mémoriser vos
          préférences et d&apos;améliorer l&apos;expérience utilisateur.
          Certains cookies sont nécessaires au bon fonctionnement du site,
          d&apos;autres servent à des fins statistiques ou marketing.
        </p>
      </section>

      {/* ── Article 2 : Types de cookies ── */}
      <section className="mb-10">
        <SectionTitle>2. Types de cookies utilisés</SectionTitle>

        <div className="space-y-6">
          {/* a — Nécessaires */}
          <div className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3">
              <CookieBadge label="Nécessaires" color="green" />
            </div>
            <SubTitle>a) Cookies strictement nécessaires</SubTitle>
            <Paragraph>
              Ces cookies sont indispensables au fonctionnement du site et de
              la plateforme (sécurité, connexion, session utilisateur, choix
              linguistiques).
            </Paragraph>
            <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-emerald-100 bg-emerald-50/60 px-4 py-3">
              <span className="mt-0.5 text-base" aria-hidden>
                ➡️
              </span>
              <p className="text-[13px] font-medium leading-relaxed text-emerald-800">
                Vous ne pouvez pas les désactiver via le bandeau, car ils sont
                essentiels.
              </p>
            </div>
          </div>

          {/* b — Analytiques */}
          <div className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3">
              <CookieBadge label="Analytiques" color="blue" />
            </div>
            <SubTitle>b) Cookies analytiques (mesure d&apos;audience)</SubTitle>
            <Paragraph>
              Ces cookies nous aident à comprendre comment les visiteurs
              utilisent notre site afin d&apos;en améliorer le contenu et les
              performances.
            </Paragraph>
            <p className="mt-3 text-[14px] font-medium text-[#374151] sm:text-[15px]">
              Exemples :
            </p>
            <BulletList
              items={[
                'Google Analytics (anonymisation IP activée)',
                'Vercel Analytics (statistiques de performance)',
              ]}
            />
            <p className="mt-4 text-[13px] font-medium text-[#6B7280]">
              Ces cookies ne sont activés qu&apos;après votre consentement.
            </p>
          </div>

          {/* c — Marketing */}
          <div className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3">
              <CookieBadge label="Marketing" color="purple" />
            </div>
            <SubTitle>c) Cookies marketing (le cas échéant)</SubTitle>
            <Paragraph>
              Ces cookies permettent de suivre l&apos;efficacité de nos
              campagnes publicitaires ou de personnaliser certaines offres B2B.
            </Paragraph>
            <p className="mt-3 text-[14px] font-medium text-[#374151] sm:text-[15px]">
              Exemples :
            </p>
            <BulletList
              items={[
                'Meta Pixel (Facebook)',
                'LinkedIn Insight Tag',
              ]}
            />
            <p className="mt-4 text-[13px] font-medium text-[#6B7280]">
              Ces cookies sont optionnels et désactivés par défaut.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article 3 : Gestion du consentement ── */}
      <section className="mb-10">
        <SectionTitle>3. Gestion du consentement</SectionTitle>
        <Paragraph>
          Lors de votre première visite sur le site, un bandeau de consentement
          s&apos;affiche pour vous permettre de :
        </Paragraph>
        <BulletList
          items={[
            'accepter tous les cookies,',
            'refuser tous les cookies non essentiels,',
            'ou personnaliser vos choix.',
          ]}
        />
        <p className="mt-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Vous pouvez à tout moment modifier vos préférences via le lien{' '}
          <strong className="text-[#1A1A1A]">
            &quot;Gérer mes cookies&quot;
          </strong>{' '}
          disponible en bas de page.
        </p>
      </section>

      {/* ── Article 4 : Durée de conservation ── */}
      <section className="mb-10">
        <SectionTitle>4. Durée de conservation</SectionTitle>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[440px] text-[13px] sm:text-[14px]">
            <thead>
              <tr className="border-b border-gray-200 bg-[#FFF9F2]">
                {['Type de cookie', 'Durée maximale', 'Finalité'].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-[#1A1A1A]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  type: 'Nécessaires',
                  badge: 'green' as const,
                  duration: "Jusqu'à 12 mois",
                  purpose: 'Bon fonctionnement du site',
                },
                {
                  type: 'Analytiques',
                  badge: 'blue' as const,
                  duration: '13 mois',
                  purpose: "Statistiques et mesure d'audience",
                },
                {
                  type: 'Marketing',
                  badge: 'purple' as const,
                  duration: '6 à 12 mois',
                  purpose: 'Suivi des performances publicitaires',
                },
              ].map((row) => (
                <tr key={row.type} className="bg-white">
                  <td className="px-4 py-3">
                    <CookieBadge label={row.type} color={row.badge} />
                  </td>
                  <td className="px-4 py-3 font-medium text-[#1A1A1A]">
                    {row.duration}
                  </td>
                  <td className="px-4 py-3 text-[#374151]">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Article 5 : Gestion depuis le navigateur ── */}
      <section className="mb-10">
        <SectionTitle>5. Gestion depuis votre navigateur</SectionTitle>
        <Paragraph>
          Vous pouvez également configurer votre navigateur pour bloquer ou
          supprimer les cookies.
        </Paragraph>
        <p className="mt-3 text-[14px] font-medium text-[#374151] sm:text-[15px]">
          Les liens d&apos;aide des principaux navigateurs :
        </p>
        <ul className="mt-3 space-y-2 pl-5">
          {[
            {
              label: 'Chrome',
              href: 'https://support.google.com/chrome/answer/95647',
            },
            {
              label: 'Firefox',
              href: 'https://support.mozilla.org/fr/kb/activer-desactiver-cookies',
            },
            {
              label: 'Safari',
              href: 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac',
            },
            {
              label: 'Edge',
              href: 'https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
            },
          ].map(({ label, href }) => (
            <li
              key={label}
              className="relative pl-3 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E]"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#FE6C0E] transition hover:underline sm:text-[15px]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
          <p className="text-[13px] leading-relaxed text-[#374151]">
            La désactivation de certains cookies peut affecter le bon
            fonctionnement de la Plateforme CarPulse et limiter l&apos;accès à
            certaines fonctionnalités.
          </p>
        </div>
      </section>

      {/* ── Article 6 : Contact ── */}
      <section className="mb-2">
        <SectionTitle>6. Contact</SectionTitle>
        <p className="mb-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Pour toute question relative à l&apos;utilisation des cookies :
        </p>
        <InfoBox variant="orange">
          <address className="not-italic space-y-1 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            <p className="font-semibold text-[#1A1A1A]">
              Pierrick Mettraux – Piamedia
            </p>
            <p>Route du Genevrex 17</p>
            <p>1071 Chexbres, Suisse</p>
            <a
              href="mailto:info@carpulse.com"
              className="inline-flex items-center gap-1.5 text-[#FE6C0E] transition hover:underline"
            >
              <span aria-hidden>📧</span>
              info@carpulse.com
            </a>
          </address>
        </InfoBox>
      </section>
    </>
  );
}