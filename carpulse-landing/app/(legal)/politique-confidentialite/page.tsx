// app/(legal)/politique-confidentialite/page.tsx

import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité – CarPulse',
  description:
    'Découvrez comment CarPulse (Pierrick Mettraux – Piamedia) collecte, utilise et protège vos données personnelles conformément au RGPD et à la LPD suisse.',
};

const CLIENT_URL =
  process.env.NEXT_PUBLIC_CARPULSE_CLIENT_URL ??
  'https://app.getcarpulse.com';

/* ─── Sous-composants locaux ─── */

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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 pl-5">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-orange-100 bg-[#FFF9F2] p-5">
      {children}
    </div>
  );
}

function ContactBlock() {
  return (
    <InfoBox>
      <address className="not-italic space-y-1 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
        <p className="font-semibold text-[#1A1A1A]">
          Pierrick Mettraux – Piamedia
        </p>
        <p>Route du Genevrex 17, 1071 Chexbres, Suisse</p>
        <a
          href="mailto:contact@getcarpulse.com"
          className="text-[#FE6C0E] transition hover:underline"
        >
          contact@getcarpulse.com
        </a>
      </address>
    </InfoBox>
  );
}

/* ─── Page ─── */

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* ── En-tête ── */}
      <header className="mb-10">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-[#FFF9F2] px-3 py-1.5">
          <ShieldCheck
            className="h-4 w-4 text-[#FE6C0E]"
            aria-hidden="true"
          />
          <span className="text-[12px] font-semibold tracking-wide text-[#FE6C0E]">
            Confidentialité
          </span>
        </div>

        <h1 className="text-[28px] font-bold leading-tight text-[#1A1A1A] sm:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#6B7280]">
          <span>CarPulse</span>
          <span aria-hidden="true">·</span>
          <span>Dernière mise à jour : mai 2026</span>
          <span aria-hidden="true">·</span>

          <a
            href={CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE6C0E] transition hover:underline"
          >
            {CLIENT_URL.replace(/^https?:\/\//, '')}
          </a>
        </div>

        <p className="mt-6 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          La présente politique de confidentialité explique comment CarPulse
          (dénomination sociale : Pierrick Mettraux – Piamedia) collecte,
          utilise et protège les données personnelles de ses utilisateurs
          professionnels. Elle s&apos;applique à l&apos;ensemble des services
          proposés sur le site{' '}
          <a
            href={CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE6C0E] transition hover:underline"
          >
            {CLIENT_URL.replace(/^https?:\/\//, '')}
          </a>{' '}
          et via la plateforme CarPulse (ci-après « la Plateforme »).
        </p>
      </header>

      {/* ── Article 1 : Responsable du traitement ── */}
      <section className="mb-10">
        <SectionTitle>1. Responsable du traitement</SectionTitle>
        <ContactBlock />
        <p className="mt-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          CarPulse (Pierrick Mettraux – Piamedia) agit en qualité de
          responsable du traitement (<em>data controller</em>) au sens du
          Règlement Général sur la Protection des Données (RGPD – UE 2016/679)
          et de la Loi fédérale sur la protection des données (LPD). Ses
          sous-traitants, dont Stripe, agissent en qualité de sous-traitants
          (<em>data processors</em>) pour les finalités décrites ci-dessous.
        </p>
      </section>

      {/* ── Article 2 : Données collectées ── */}
      <section className="mb-10">
        <SectionTitle>2. Données collectées</SectionTitle>
        <Paragraph>
          Nous collectons uniquement les données nécessaires à la fourniture et
          à l&apos;amélioration de nos services.
        </Paragraph>

        {/* a */}
        <div className="mt-6">
          <SubTitle>a) Données d&apos;identification</SubTitle>
          {/* FIX 1 : double quotes sur toutes les chaînes contenant une apostrophe */}
          <BulletList
            items={[
              'Nom, prénom',
              "Nom de l'entreprise / garage",
              'Adresse e-mail professionnelle',
              'Numéro de téléphone professionnel',
              'Identifiants de connexion à la Plateforme',
            ]}
          />
        </div>

        {/* b */}
        <div className="mt-6">
          <SubTitle>b) Données de facturation</SubTitle>
          {/* FIX 1 */}
          <BulletList
            items={[
              'Adresse postale',
              'Informations de paiement (gérées de manière sécurisée via Stripe)',
              "Historique d'abonnements et factures",
            ]}
          />
        </div>

        {/* c */}
        <div className="mt-6">
          <SubTitle>c) Données d&apos;usage</SubTitle>
          {/* FIX 1 */}
          <BulletList
            items={[
              "Statistiques de connexion et d'interaction avec la Plateforme",
              "Préférences utilisateur (filtres, zones d'analyse, marques suivies)",
              'Logs techniques pour la maintenance et la sécurité',
            ]}
          />
        </div>

        {/* d */}
        <div className="mt-6">
          <SubTitle>
            d) Données collectées par Stripe lors du paiement
          </SubTitle>
          <Paragraph>
            Lors du règlement en ligne, Stripe collecte directement certaines
            données sur ses propres scripts (Stripe.js / Stripe Elements)
            intégrés à la Plateforme. Ces données comprennent notamment :
          </Paragraph>
          {/* FIX 1 */}
          <BulletList
            items={[
              "Les informations de carte bancaire (numéro, date d'expiration, CVV) — jamais stockées sur nos serveurs",
              "L'adresse e-mail et l'adresse de facturation",
              'Des données techniques sur l\u2019appareil et le navigateur utilisé',
              'Des données comportementales (mouvements de souris, patterns de frappe) à des fins de détection de fraude via Stripe Radar',
              "L'adresse IP et les métadonnées de transaction",
            ]}
          />
          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
            <p className="text-[13px] leading-relaxed text-[#374151]">
              Les informations de carte bancaire sont transmises directement à
              Stripe et ne transitent jamais par nos serveurs. CarPulse ne
              stocke aucune donnée de carte.{' '}
              <strong>Stripe est certifié PCI-DSS niveau 1.</strong>
            </p>
          </div>
        </div>

        {/* e */}
        <div className="mt-6">
          <SubTitle>e) Données issues de la communication</SubTitle>
          <BulletList
            items={[
              'Échanges par e-mail ou via le support client',
              'Informations collectées lors de démos, appels ou formulaires de contact',
            ]}
          />
        </div>
      </section>

      {/* ── Article 3 : Finalités ── */}
      <section className="mb-10">
        <SectionTitle>3. Finalités du traitement</SectionTitle>
        <Paragraph>
          Vos données sont utilisées exclusivement pour :
        </Paragraph>
        {/* FIX 1 */}
        <BulletList
          items={[
            "Fournir l'accès à la Plateforme CarPulse et exécuter le contrat d'abonnement",
            'Gérer la facturation, les paiements et la relation client',
            'Améliorer les performances et la pertinence du service',
            'Garantir la sécurité et prévenir les abus',
            'Offrir un support technique et commercial personnalisé',
            'Envoyer des communications B2B utiles (actualités, nouveautés produits)',
            'Respecter nos obligations légales (comptabilité, conformité, sécurité)',
          ]}
        />
        <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#1A1A1A] sm:text-[15px]">
          CarPulse ne revend aucune donnée à des tiers.
        </p>
      </section>

      {/* ── Article 4 : Base légale ── */}
      <section className="mb-10">
        <SectionTitle>4. Base légale du traitement</SectionTitle>
        <Paragraph>
          Conformément au RGPD et à la LPD, le traitement repose sur :
        </Paragraph>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Exécution du contrat",
              desc: "Nécessaire pour vous fournir l'accès à la Plateforme et gérer votre abonnement.",
            },
            {
              label: "Intérêt légitime",
              desc: "Amélioration du service, sécurité de la Plateforme et prévention des abus.",
            },
            {
              label: "Consentement",
              desc: "Cookies non essentiels et communications marketing (révocable à tout moment).",
            },
            {
              label: "Obligations légales",
              desc: "Respect des obligations comptables, fiscales et de conformité applicables.",
            },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-100 bg-[#FAFAFA] p-4"
            >
              <p className="text-[13px] font-semibold text-[#1A1A1A]">
                {label}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Article 5 : Partage & sous-traitance ── */}
      <section className="mb-10">
        <SectionTitle>5. Partage et sous-traitance</SectionTitle>
        <Paragraph>
          Vos données peuvent être traitées par des partenaires strictement
          nécessaires à la fourniture du service. CarPulse agit en qualité de
          responsable du traitement (<em>data controller</em>) ; chacun des
          prestataires ci-dessous agit en qualité de sous-traitant (
          <em>data processor</em>) dans les limites du contrat qui nous lie.
        </Paragraph>

        {/* Tableau sous-traitants */}
        <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[560px] text-[13px] sm:text-[14px]">
            <thead>
              <tr className="border-b border-gray-200 bg-[#FFF9F2]">
                {['Prestataire', 'Rôle', 'Pays / Conformité'].map((h) => (
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
                  name: 'Stripe',
                  role: 'Paiements et facturation — data processor',
                  location: 'UE / États-Unis – RGPD, PCI-DSS L1, Swiss-U.S. DPF',
                },
                {
                  name: 'Hostinger',
                  role: 'Hébergement des serveurs',
                  location: 'UE – RGPD',
                },
                {
                  name: 'HubSpot (CRM)',
                  role: 'Gestion de la relation client',
                  location: 'UE / États-Unis – CCT',
                },
                {
                  name: 'Google Workspace',
                  role: 'Outils internes et e-mail',
                  location: 'UE / États-Unis – CCT',
                },
                {
                  name: 'Infomaniak',
                  role: 'Gestion du nom de domaine',
                  location: 'Suisse – LPD / RGPD',
                },
              ].map((row) => (
                <tr key={row.name} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-[#FE6C0E]">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-[#374151]">{row.role}</td>
                  <td className="px-4 py-3 text-[#374151]">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-[#6B7280]">
          Tous nos sous-traitants s&apos;engagent contractuellement à garantir
          la confidentialité et la sécurité des données.
        </p>

        {/* Spécificités Stripe */}
        <div className="mt-6">
          <SubTitle>Spécificités Stripe</SubTitle>
          <Paragraph>
            Stripe Inc. (San Francisco, CA) est notre sous-traitant pour le
            traitement des paiements. Dans ce cadre :
          </Paragraph>
          {/* FIX 1 */}
          <BulletList
            items={[
              "Les transferts de données vers les États-Unis sont encadrés par les Clauses Contractuelles Types (CCT) de la Commission européenne et le Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF), auquel Stripe est certifié.",
              "Un Accord de Traitement de Données (DPA) est conclu entre CarPulse et Stripe conformément à l'article 28 du RGPD. Ce DPA fait partie intégrante du Stripe Services Agreement.",
              "Stripe peut partager certaines données avec des prestataires de moyens de paiement (Visa, Mastercard, etc.) dans le cadre strict de l'exécution des transactions.",
            ]}
          />
          <p className="mt-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Pour en savoir plus sur les pratiques de Stripe en matière de
            données :{' '}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FE6C0E] transition hover:underline"
            >
              https://stripe.com/privacy
            </a>
          </p>
        </div>
      </section>

      {/* ── Article 6 : Conservation & sécurité ── */}
      <section className="mb-10">
        <SectionTitle>6. Conservation et sécurité</SectionTitle>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: 'Données clients',
              value: 'Durée du contrat + 3 ans après sa fin',
            },
            {
              label: 'Données de facturation',
              value: '10 ans (obligations comptables et fiscales)',
            },
            {
              label: 'Données techniques',
              value: 'Supprimées automatiquement après 12 mois',
            },
            {
              label: 'Transactions Stripe',
              value:
                'Conformément aux obligations légales applicables (10 ans maximum)',
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-100 bg-[#FAFAFA] p-4"
            >
              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#6B7280]">
                {label}
              </p>
              <p className="mt-1 text-[13px] font-medium text-[#1A1A1A] sm:text-[14px]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
          <p className="text-[13px] leading-relaxed text-[#374151]">
            Les serveurs sont hébergés dans des centres certifiés ISO 27001.
            Les échanges sont chiffrés (HTTPS / TLS). L&apos;accès interne aux
            données est restreint au personnel autorisé uniquement.
          </p>
        </div>
      </section>

      {/* ── Article 7 : Vos droits ── */}
      <section className="mb-10">
        <SectionTitle>7. Vos droits (RGPD + LPD)</SectionTitle>
        <Paragraph>
          Conformément aux lois applicables, vous disposez des droits suivants :
        </Paragraph>

        <div className="mt-4 space-y-2.5">
          {[
            {
              right: "Droit d'accès",
              desc: 'Obtenir une copie de vos données',
            },
            {
              right: 'Droit de rectification',
              desc: 'Corriger toute donnée inexacte',
            },
            {
              right: "Droit à l'effacement",
              desc: 'Demander la suppression de vos données (sous conditions)',
            },
            {
              right: 'Droit à la portabilité',
              desc: 'Recevoir vos données dans un format structuré',
            },
            {
              right: "Droit d'opposition",
              desc: 'Refuser certains traitements (prospection commerciale, par exemple)',
            },
            {
              right: 'Droit de limitation',
              desc: "Demander la suspension temporaire d'un traitement",
            },
          ].map(({ right, desc }) => (
            <div
              key={right}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#FAFAFA] px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FE6C0E]/10">
                <span className="h-2 w-2 rounded-full bg-[#FE6C0E]" />
              </span>
              <p className="text-[13px] leading-relaxed text-[#374151] sm:text-[14px]">
                <strong className="text-[#1A1A1A]">{right} :</strong>{' '}
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-orange-100 bg-[#FFF9F2] p-5">
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Pour exercer ces droits :{' '}
            <a
              href="mailto:contact@getcarpulse.com"
              className="font-medium text-[#FE6C0E] transition hover:underline"
            >
              contact@getcarpulse.com
            </a>{' '}
            — réponse sous 30 jours maximum.
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-[14px] font-medium text-[#374151] sm:text-[15px]">
            En cas de désaccord, vous pouvez contacter :
          </p>
          <BulletList
            items={[
              'En Suisse : Préposé fédéral à la protection des données et à la transparence (PFPDT)',
              "Dans l'UE : votre autorité nationale de protection des données",
            ]}
          />
        </div>
      </section>

      {/* ── Article 8 : Cookies ── */}
      <section className="mb-10">
        <SectionTitle>8. Cookies et outils d&apos;analyse</SectionTitle>
        <Paragraph>
          CarPulse utilise des cookies techniques et analytiques pour le bon
          fonctionnement du site et l&apos;amélioration de l&apos;expérience
          utilisateur. Les cookies non essentiels ne sont activés
          qu&apos;après votre consentement.
        </Paragraph>
        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Lorsque vous effectuez un paiement, Stripe peut déposer des cookies
          sur votre appareil via ses scripts (Stripe.js / Elements) à des fins
          de sécurité, de détection de fraude et de suivi de session. Ces
          cookies sont soumis à la politique de cookies de Stripe.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Voir notre{' '}
          <a
            href="/politique-cookies"
            className="text-[#FE6C0E] transition hover:underline"
          >
            Politique de cookies
          </a>{' '}
          (document séparé) pour le détail complet des traceurs utilisés.
        </p>
      </section>

      {/* ── Article 9 : Modifications ── */}
      <section className="mb-10">
        <SectionTitle>9. Modifications</SectionTitle>
        <Paragraph>
          CarPulse se réserve le droit de modifier la présente politique à tout
          moment. Toute mise à jour sera publiée sur cette page avec mention de
          la date de révision. En cas de modification substantielle, les
          utilisateurs concernés en seront informés par e-mail.
        </Paragraph>
      </section>

      {/* ── Article 10 : Contact ── */}
      <section className="mb-2">
        <SectionTitle>10. Contact</SectionTitle>
        <p className="mb-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Pour toute question ou demande relative à la protection de vos
          données :
        </p>
        <ContactBlock />
      </section>
    </>
  );
}