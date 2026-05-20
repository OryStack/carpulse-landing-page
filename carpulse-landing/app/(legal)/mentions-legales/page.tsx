import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales – CarPulse',
  description:
    'Mentions légales du site CarPulse, édité par Pierrick Mettraux – Piamedia.',
};

const CLIENT_URL =
  process.env.NEXT_PUBLIC_CARPULSE_CLIENT_URL ;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
      {children}
    </p>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-orange-100 bg-[#FFF9F2] p-5">
      {children}
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <span className="w-full shrink-0 text-[13px] font-semibold text-[#6B7280] sm:w-44 sm:text-[14px]">
        {label}
      </span>
      <span className="text-[14px] leading-relaxed text-[#374151]">
        {children}
      </span>
    </div>
  );
}

/* ─── Page ─── */

export default function MentionsLegalesPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <header className="mb-10">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-[#FFF9F2] px-3 py-1.5">
          <span className="text-base" aria-hidden="true">
            🧾
          </span>

          <span className="text-[12px] font-semibold tracking-wide text-[#FE6C0E]">
            Mentions légales
          </span>
        </div>

        <h1 className="text-[28px] font-bold leading-tight text-[#1A1A1A] sm:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#6B7280]">
          <span>CarPulse</span>

          <span aria-hidden="true">·</span>

          <a
            href={CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE6C0E] transition hover:underline"
          >
            {CLIENT_URL ? CLIENT_URL.replace(/^https?:\/\//, '') : ''}
       
          </a>
        </div>
      </header>

      {/* ── Éditeur du site ── */}
      <section className="mb-10">
        <SectionTitle>Éditeur du site</SectionTitle>

        <InfoBox>
          <div className="space-y-3">
            <InfoRow label="Raison sociale">
              Pierrick Mettraux – Piamedia
            </InfoRow>

            <InfoRow label="Activité">
              Entreprise individuelle opérant dans le marketing digital
            </InfoRow>

            <InfoRow label="Adresse">
              Route du Genevrex 17, 1071 Chexbres, Suisse
            </InfoRow>

            <InfoRow label="E-mail">
              <a
                href="mailto:info@carpulse.com"
                className="text-[#FE6C0E] transition hover:underline"
              >
                info@carpulse.com
              </a>
            </InfoRow>
          </div>
        </InfoBox>
      </section>

      {/* ── Responsable de la publication ── */}
      <section className="mb-10">
        <SectionTitle>Responsable de la publication</SectionTitle>

        <div className="rounded-xl border border-gray-100 bg-[#FAFAFA] p-5">
          <div className="space-y-3">
            <InfoRow label="Nom">Pierrick Mettraux</InfoRow>

            <InfoRow label="E-mail de contact">
              <a
                href="mailto:info@carpulse.com"
                className="text-[#FE6C0E] transition hover:underline"
              >
                info@carpulse.com
              </a>
            </InfoRow>
          </div>
        </div>
      </section>

      {/* ── Hébergement ── */}
      <section className="mb-10">
        <SectionTitle>Hébergement du site</SectionTitle>

        <Paragraph>Le site est hébergé par :</Paragraph>

        <div className="mt-4 rounded-xl border border-gray-100 bg-[#FAFAFA] p-5">
          <div className="space-y-3">
            <InfoRow label="Société">Infomaniak Network SA</InfoRow>

            <InfoRow label="Adresse">
              Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse
            </InfoRow>

            <InfoRow label="Site web">
              <a
                href="https://www.infomaniak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FE6C0E] transition hover:underline"
              >
                https://www.infomaniak.com
              </a>
            </InfoRow>
          </div>
        </div>
      </section>

      {/* ── Propriété intellectuelle ── */}
      <section className="mb-10">
        <SectionTitle>Propriété intellectuelle</SectionTitle>

        <Paragraph>
          L&apos;ensemble des éléments du site CarPulse (textes, graphismes,
          logos, marques, vidéos, icônes, etc.) est protégé par les
          dispositions du Code de la propriété intellectuelle et des lois
          internationales.
        </Paragraph>

        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Toute reproduction, distribution, modification ou utilisation de ces
          éléments sans autorisation écrite préalable est strictement interdite.
        </p>
      </section>

      {/* ── Responsabilité ── */}
      <section className="mb-10">
        <SectionTitle>Responsabilité</SectionTitle>

        <Paragraph>
          Les informations présentes sur le site CarPulse sont fournies à titre
          indicatif et peuvent être modifiées à tout moment. CarPulse ne
          saurait être tenu responsable des erreurs, omissions, ou de
          l&apos;indisponibilité du service.
        </Paragraph>

        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Les données relatives aux véhicules et annonces proviennent de sources
          publiques et peuvent comporter des inexactitudes indépendantes de la
          volonté de CarPulse.
        </p>

        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
          <p className="text-[13px] leading-relaxed text-[#374151]">
            Les informations fournies par la plateforme (scoring, analyses,
            estimations de prix) constituent des outils d&apos;aide à la
            décision et ne sauraient être assimilées à des conseils
            professionnels en investissement.
          </p>
        </div>
      </section>

      {/* ── Protection des données ── */}
      <section className="mb-10">
        <SectionTitle>Protection des données personnelles</SectionTitle>

        <Paragraph>
          CarPulse s&apos;engage à protéger la vie privée de ses utilisateurs
          conformément à la Loi fédérale sur la protection des données (LPD) et
          au Règlement général sur la protection des données (RGPD).
        </Paragraph>

        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Pour en savoir plus sur la collecte et le traitement de vos données,
          consultez notre{' '}
          <a
            href="/politique-confidentialite"
            className="font-medium text-[#FE6C0E] transition hover:underline"
          >
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      {/* ── Contact ── */}
      <section className="mb-2">
        <SectionTitle>Contact</SectionTitle>

        <Paragraph>
          Pour toute question ou demande relative au site, vous pouvez nous
          contacter à :
        </Paragraph>

        <InfoBox>
          <a
            href="mailto:info@carpulse.com"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#FE6C0E] transition hover:underline"
          >
            <span aria-hidden="true">📩</span>
            info@carpulse.com
          </a>
        </InfoBox>
      </section>
    </>
  );
}