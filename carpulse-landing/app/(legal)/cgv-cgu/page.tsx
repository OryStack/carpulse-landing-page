// app/(legal)/cgv-cgu/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente et d'Utilisation – CarPulse",
  description:
    "Conditions générales de vente et d'utilisation de la plateforme CarPulse (Pierrick Mettraux – Piamedia).",
};

const CLIENT_URL =
  process.env.NEXT_PUBLIC_CARPULSE_CLIENT_URL ??
  'https://app.getcarpulse.com';

export default function CGVCGUPage() {
  return (
    <>
      {/* En-tête */}
      <header className="mb-10">
        <h1 className="text-[28px] font-bold leading-tight text-[#1A1A1A] sm:text-4xl">
          Conditions Générales de Vente et d&apos;Utilisation
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
          Les présentes Conditions Générales de Vente et d&apos;Utilisation
          (ci-après « CGV/CGU ») régissent les relations entre CarPulse
          (dénomination sociale : Pierrick Mettraux – Piamedia) et tout
          utilisateur de la plateforme{' '}
          <a
            href={CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE6C0E] transition hover:underline"
          >
            {CLIENT_URL.replace(/^https?:\/\//, '')}
          </a>{' '}
          (ci-après « la Plateforme »).
        </p>
      </header>

      {/* Article 1 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          1. Objet
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          CarPulse est une solution SaaS d&apos;aide à l&apos;achat-revente de
          véhicules d&apos;occasion. La Plateforme identifie, analyse et livre
          en temps réel des opportunités de marché (ci-après « deals ») à
          destination des particuliers qui se lancent dans l&apos;achat-revente
          ainsi que des professionnels (acheteurs-revendeurs, garages utilisant
          ce service en activité annexe).
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Les présentes conditions s&apos;appliquent à toute souscription à un
          abonnement ou utilisation de la Plateforme.
        </p>
      </section>

      {/* Article 2 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          2. Acceptation des conditions
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Toute souscription à un abonnement ou utilisation de la Plateforme
          vaut acceptation pleine et entière des présentes CGV/CGU.
          L&apos;utilisateur déclare avoir la capacité juridique de contracter
          et reconnaît avoir pris connaissance des conditions avant validation
          de sa commande.
        </p>
      </section>

      {/* Article 3 */}
      <section className="mb-10">
        <h2 className="mb-6 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          3. Description des services
        </h2>

        {/* 3.1 */}
        <div className="mb-8">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.1. Fonctionnement général
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            CarPulse collecte de manière autonome les annonces de véhicules
            d&apos;occasion publiées sur des plateformes tierces (scraping).
            Chaque annonce est soumise à trois méthodes d&apos;analyse
            propriétaires permettant de déterminer si elle constitue un deal
            rentable. Dès qu&apos;un deal est détecté, l&apos;utilisateur
            concerné le reçoit dans les secondes suivantes, sans délai.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Chaque deal est accompagné :
          </p>
          <ul className="mt-3 space-y-2 pl-5">
            {[
              "d'un score de rentabilité calculé automatiquement",
              "d'un mini-rapport généré par IA détaillant les raisons de l'opportunité (prix, rareté, fiabilité, etc.)",
              "d'un lien direct vers l'annonce d'origine",
            ].map((item) => (
              <li
                key={item}
                className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3.2 */}
        <div className="mb-8">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.2. Zone de livraison des deals
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Les deals sont livrés selon un rayon d&apos;action géographique
            paramétré par l&apos;utilisateur depuis son tableau de bord. Le
            rayon minimal est de 100 km. L&apos;utilisateur peut
            l&apos;élargir jusqu&apos;à 200 km à tout moment sans surcoût.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Plus le rayon d&apos;action est restreint, plus le volume de deals
            disponibles peut être limité. CarPulse ne peut garantir un nombre
            fixe de deals sur des zones très étroites.
          </p>
        </div>

        {/* 3.3 */}
        <div className="mb-8">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.3. Réactivité et durée de vie des deals
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Les deals sont livrés en temps réel dès leur détection. CarPulse
            mesure les temps de connexion afin d&apos;évaluer la pertinence des
            deals dans le temps. Un deal consulté plusieurs jours après sa
            réception peut ne plus être disponible sur le marché.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            L&apos;utilisateur est seul responsable de sa réactivité. CarPulse
            ne peut être tenu responsable d&apos;un deal non exploité en raison
            d&apos;une connexion tardive.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Les notifications sont envoyées immédiatement après analyse, par
            e-mail et via le tableau de bord.
          </p>
        </div>

        {/* 3.4 — Tableau */}
        <div className="mb-8">
          <h3 className="mb-4 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.4. Offres d&apos;abonnement
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[520px] text-[13px] sm:text-[14px]">
              <thead>
                <tr className="border-b border-gray-200 bg-[#FFF9F2]">
                  {['Plan', 'Deals', 'Filtres', 'Zone'].map((h) => (
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
                    plan: 'Standard',
                    deals:
                      'Volume mensuel indiqué à la souscription (± quelques deals)',
                    filtres: 'Aucun — deals pertinents du marché',
                    zone: '100 à 200 km',
                  },
                  {
                    plan: 'Premium',
                    deals:
                      'Volume mensuel indiqué à la souscription (± quelques deals)',
                    filtres: 'Filtres personnalisables (marque, budget, type…)',
                    zone: '100 à 200 km',
                  },
                  {
                    plan: 'Entreprise',
                    deals: 'Sur mesure',
                    filtres: 'Sur mesure',
                    zone: 'Sur mesure',
                  },
                ].map((row) => (
                  <tr key={row.plan} className="bg-white">
                    <td className="px-4 py-3 font-semibold text-[#FE6C0E]">
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-[#374151]">{row.deals}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.filtres}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.zone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-[13px] leading-relaxed text-[#6B7280]">
              Le nombre de deals indiqué est fourni à titre indicatif. CarPulse
              s&apos;engage à en délivrer un volume approchant, à quelques deals
              près, sans garantie d&apos;un nombre exact.
            </p>
            <p className="text-[13px] leading-relaxed text-[#6B7280]">
              <strong className="text-[#374151]">Plan Premium :</strong> si les
              critères sélectionnés sont trop restrictifs, des deals aléatoires
              pertinents sont envoyés en complément afin de maintenir le niveau
              de service.
            </p>
          </div>
        </div>

        {/* 3.5 */}
        <div className="mb-8">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.5. Remplacement de deals non pertinents
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            L&apos;utilisateur peut archiver un deal s&apos;il l&apos;estime
            non exploitable (véhicule accidenté, pricing manifestement erroné,
            annonce non conforme). Le deal archivé est remplacé automatiquement
            par un nouveau deal sélectionné aléatoirement parmi les
            opportunités disponibles.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Cette fonctionnalité est soumise à la disponibilité de deals sur la
            zone et la période concernées.
          </p>
        </div>

        {/* 3.6 */}
        <div className="mb-8">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.6. Outil de gestion financière
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            CarPulse met à disposition un outil de suivi financier intégré au
            tableau de bord. L&apos;utilisateur peut y saisir manuellement ses
            transactions d&apos;achat et de revente. Cet outil est fourni à
            titre de service complémentaire et n&apos;engage pas la
            responsabilité de CarPulse quant à l&apos;exactitude des calculs
            issus de données saisies par l&apos;utilisateur.
          </p>
        </div>

        {/* 3.7 */}
        <div className="mb-8">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.7. Programme de fidélisation
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            CarPulse propose un système de fidélisation basé sur
            l&apos;ancienneté d&apos;abonnement. L&apos;utilisateur débloque
            automatiquement des paliers et des avantages supplémentaires selon
            le nombre de mois consécutifs passés sur la Plateforme. Le détail
            des paliers et des prestations associées est disponible dans
            l&apos;onglet « Grade » du tableau de bord. Ces avantages sont
            activés automatiquement sans démarche de la part de
            l&apos;utilisateur.
          </p>
        </div>

        {/* 3.8 */}
        <div>
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            3.8. Plan Entreprise
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Le plan Entreprise est entièrement configuré sur mesure (volume de
            deals, exclusivité, zone élargie, etc.). Il fait l&apos;objet
            d&apos;un contrat spécifique distinct des présentes CGV/CGU, remis
            et signé par les deux parties avant toute activation du service.
          </p>
        </div>
      </section>

      {/* Article 4 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          4. Modalités d&apos;abonnement et de paiement
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          L&apos;abonnement est facturé mensuellement, payable par carte
          bancaire via Stripe (certifié PCI-DSS niveau 1). Le prélèvement
          s&apos;effectue automatiquement à la même date chaque mois.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          La période d&apos;abonnement débute le jour du paiement. Les deals
          sont délivrés immédiatement et continuent tout au long du mois. À
          chaque renouvellement, le compteur de deals est réinitialisé et la
          livraison reprend sur la nouvelle période. L&apos;utilisateur peut
          consulter l&apos;ensemble de ses deals à tout moment depuis son espace
          client.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          L&apos;utilisateur reçoit trois notifications de rappel avant chaque
          renouvellement :
        </p>
        <ul className="mt-3 space-y-2 pl-5">
          {['7 jours avant', '3 jours avant', 'le jour du renouvellement'].map(
            (item) => (
              <li
                key={item}
                className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
              >
                {item}
              </li>
            ),
          )}
        </ul>

        {/* Résiliation */}
        <div className="mt-6 rounded-xl border border-orange-100 bg-[#FFF9F2] p-5">
          <h3 className="mb-2 text-[15px] font-semibold text-[#1A1A1A]">
            Résiliation
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            La résiliation peut être effectuée à tout moment depuis le tableau
            de bord (en un clic) ou par e-mail à{' '}
            <a
              href="mailto:contact@getcarpulse.com"
              className="text-[#FE6C0E] transition hover:underline"
            >
              contact@getcarpulse.com
            </a>
            . Elle prend effet à la fin de la période en cours. Aucun
            remboursement n&apos;est accordé pour une période entamée, sauf
            application de la garantie satisfaction ci-dessous.
          </p>
        </div>
      </section>

      {/* Article 5 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          5. Garantie satisfaction
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          CarPulse propose une garantie de satisfaction de{' '}
          <strong>30 jours</strong> à compter de la souscription initiale.
        </p>

        {/* 5.1 */}
        <div className="mt-6">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            5.1. Conditions d&apos;application
          </h3>
          <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            Si l&apos;utilisateur estime que les deals reçus sont non pertinents
            (erreurs de catégorie, incohérences manifestes, volume
            significativement inférieur à celui indiqué dans son plan), il peut
            demander un remboursement intégral du premier mois à{' '}
            <a
              href="mailto:contact@getcarpulse.com"
              className="text-[#FE6C0E] transition hover:underline"
            >
              contact@getcarpulse.com
            </a>
            , en précisant les motifs de son insatisfaction.
          </p>
        </div>

        {/* 5.2 */}
        <div className="mt-6">
          <h3 className="mb-3 text-[15px] font-semibold text-[#1A1A1A] sm:text-[17px]">
            5.2. Limitations
          </h3>
          <p className="mb-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            La garantie ne couvre pas :
          </p>
          <ul className="space-y-2 pl-5">
            {[
              "l'absence d'achat ou de revente décidée par l'utilisateur",
              'les résultats commerciaux dépendant de sa propre stratégie',
              "la sous-performance liée à un rayon d'action trop restreint ou à des filtres trop restrictifs (plan Premium)",
              "la non-consultation des deals ou une connexion tardive rendant un deal inexploitable",
              "un volume réduit dû à une pénurie temporaire de deals sur la zone choisie",
            ].map((item) => (
              <li
                key={item}
                className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
            CarPulse se réserve le droit de refuser une demande abusive ou non
            fondée.
          </p>
        </div>
      </section>

      {/* Article 6 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          6. Utilisation de la Plateforme
        </h2>
        <p className="mb-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          L&apos;accès au compte est strictement personnel. Sont expressément
          interdits :
        </p>
        <ul className="space-y-2 pl-5">
          {[
            'le partage de compte ou de ses identifiants',
            "l'extraction automatisée de données (scraping, bots)",
            'la revente ou redistribution de deals et informations issus de la Plateforme',
            "toute utilisation contraire à l'objet du service",
          ].map((item) => (
            <li
              key={item}
              className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Tout manquement entraînera une suspension immédiate sans
          remboursement.
        </p>
      </section>

      {/* Article 7 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          7. Responsabilité
        </h2>
        <p className="mb-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          CarPulse agit comme fournisseur d&apos;informations et d&apos;outils
          d&apos;aide à la décision. Les annonces analysées sont issues de
          plateformes tierces et peuvent comporter des inexactitudes
          indépendantes de la volonté de CarPulse.
        </p>
        <ul className="space-y-2 pl-5">
          {[
            "CarPulse ne garantit pas la disponibilité ni la véracité des annonces tierces au moment de leur consultation",
            "CarPulse ne peut être tenu responsable des pertes financières ou mauvaises décisions résultant de l'utilisation du service",
            "CarPulse ne peut être tenu responsable d'un deal devenu inexploitable en raison d'une réaction tardive de l'utilisateur",
          ].map((item) => (
            <li
              key={item}
              className="relative pl-3 text-[14px] leading-relaxed text-[#374151] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FE6C0E] sm:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          L&apos;utilisateur reste seul décisionnaire de ses transactions.
          CarPulse fournit une aide à la décision, non un conseil en
          investissement.
        </p>
      </section>

      {/* Article 8 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          8. Propriété intellectuelle
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Tous les éléments graphiques, algorithmiques, les méthodes
          d&apos;analyse et les contenus textuels de CarPulse sont la propriété
          exclusive de Pierrick Mettraux – Piamedia. Toute reproduction,
          revente ou diffusion non autorisée est strictement interdite.
        </p>
      </section>

      {/* Article 9 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          9. Données personnelles et confidentialité
        </h2>

        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          CarPulse accorde une importance particulière à la protection des
          données personnelles de ses utilisateurs. Le traitement des données
          collectées dans le cadre de l&apos;utilisation de la Plateforme est
          régi par notre Politique de Confidentialité, document distinct
          disponible à l&apos;adresse suivante :
        </p>

        <a
          href={`${CLIENT_URL}/politique-confidentialite`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-[14px] font-medium text-[#FE6C0E] transition hover:underline sm:text-[15px]"
        >
          {CLIENT_URL.replace(/^https?:\/\//, '')}
          /politique-confidentialite
        </a>

        <p className="mt-3 text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Cette politique détaille notamment les données collectées, les
          finalités du traitement, les sous-traitants (dont Stripe), les durées
          de conservation et les droits de l&apos;utilisateur conformément au
          RGPD (UE 2016/679) et à la LPD suisse.
        </p>
      </section>

      {/* Article 10 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          10. Droit applicable et juridiction
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Les présentes CGV/CGU sont régies par le droit suisse. Tout différend
          sera soumis aux tribunaux compétents du canton de Vaud, après
          tentative de résolution amiable.
        </p>
      </section>

      {/* Article 11 */}
      <section className="mb-10">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          11. Modifications
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] sm:text-[15px]">
          Toute mise à jour sera publiée sur cette page avec la date de
          révision. En cas de modification substantielle, les utilisateurs
          concernés seront informés par e-mail.
        </p>
      </section>

      {/* Article 12 — Contact */}
      <section className="mb-2">
        <h2 className="mb-4 text-[18px] font-bold text-[#1A1A1A] sm:text-2xl">
          12. Contact
        </h2>
        <div className="rounded-xl border border-orange-100 bg-[#FFF9F2] p-5">
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
        </div>
      </section>
    </>
  );
}