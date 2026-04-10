import {
  BarChart3,
  Bell,
  CarFront,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  User,
} from "lucide-react";

const ORANGE = "#FE6C0E";
const DEMO_HREF = "https://dev.getcarpulse.com/planifier-demo";

function NavItem({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`relative flex cursor-default items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium ${
        active
          ? "bg-[#FFF3EB] text-[#FE6C0E] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-[#FE6C0E]"
          : "text-[#4B5563]"
      }`}
    >
      <span className="h-4 w-4 rounded bg-gray-200/80" aria-hidden />
      {label}
    </div>
  );
}

/** Carte activité — layout horizontal compact (maquette mobile « Mon activité ») */
function ActivityCardMobile({
  title,
  price,
  date,
  status,
  statusVariant,
}: {
  title: string;
  price: string;
  date: string;
  status: string;
  statusVariant: "success" | "warning";
}) {
  const badge =
    statusVariant === "success"
      ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80"
      : "bg-amber-50 text-amber-800 ring-1 ring-amber-200/80";

  return (
    <div className="flex items-stretch gap-2 rounded-[11px] border border-gray-100 bg-white p-2 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div
        className="h-14 w-14 shrink-0 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100"
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold leading-tight text-[#111827]">
            {title}
          </p>
          <p
            className="mt-0.5 text-[12px] font-semibold leading-none"
            style={{ color: ORANGE }}
          >
            {price}
          </p>
          <p className="mt-1 text-[10px] leading-none text-[#9CA3AF]">{date}</p>
        </div>
        <div className="mt-1.5 flex justify-end">
          <span
            className={`rounded-full px-1.5 py-[2px] text-[9px] font-semibold leading-none ${badge}`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="flex shrink-0 items-center self-center">
        <ChevronRight className="h-4 w-4 text-[#D1D5DB]" aria-hidden />
      </div>
    </div>
  );
}

function DealRowDesktop({
  title,
  meta,
  sale,
  market,
  margin,
  badge,
  badgeTone,
}: {
  title: string;
  meta: string;
  sale: string;
  market: string;
  margin: string;
  badge: string;
  badgeTone: "orange" | "blue";
}) {
  return (
    <div className="relative flex gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      <span
        className={`absolute right-2 top-2 rounded-full px-1.5 py-[2px] text-[9px] font-semibold leading-none ${
          badgeTone === "orange"
            ? "bg-[#FFF3EB] text-[#FE6C0E] ring-1 ring-[#FE6C0E]/20"
            : "bg-[#EFF6FF] text-[#2563EB] ring-1 ring-blue-200/60"
        }`}
      >
        {badge}
      </span>
      <div className="h-[72px] w-[96px] shrink-0 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100" />
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="truncate text-[13px] font-bold text-[#1A1A1A]">{title}</p>
        <p className="mt-1 text-[11px] text-[#6B7280]">{meta}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["60 000 km", "Essence", "190 ch"].map((t) => (
            <span
              key={t}
              className="rounded-md bg-gray-50 px-2 py-0.5 text-[10px] text-[#4B5563]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <div className="text-right text-[10px] leading-tight">
          <p className="text-[#6B7280]">Prix de vente</p>
          <p className="text-sm font-bold" style={{ color: ORANGE }}>
            {sale}
          </p>
        </div>
        <div className="text-right text-[10px] leading-tight">
          <p className="text-[#6B7280]">Prix marché</p>
          <p className="text-sm font-bold text-[#1A1A1A]">{market}</p>
        </div>
        <div className="text-right text-[10px] leading-tight">
          <p className="text-[#6B7280]">Marge potentielle</p>
          <p className="text-sm font-bold text-emerald-600">{margin}</p>
        </div>
        <a
          href={DEMO_HREF}
          className="mt-1 rounded-[16px] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm"
          style={{ background: ORANGE }}
        >
          Voir détails
        </a>
      </div>
    </div>
  );
}

function FilterToggle({
  label,
  dot,
  on,
}: {
  label: string;
  dot: string;
  on?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 text-[11px]">
      <div className="flex min-w-0 items-center gap-2">
        <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
        <span className="truncate text-[#374151]">{label}</span>
      </div>
      <span
        className={`relative h-5 w-9 shrink-0 rounded-full ${on ? "bg-[#FE6C0E]" : "bg-gray-200"}`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${on ? "left-4" : "left-0.5"}`}
        />
      </span>
    </div>
  );
}

function MobileActivityView() {
  const tabs = ["Tout", "Ventes", "Achats"] as const;
  const activeTabIndex = 0;

  return (
    <div className="overflow-hidden rounded-[14px] border border-gray-200/90 bg-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)]">
      {/* Barre d’app — Figma */}
      <header className="flex items-center gap-2 bg-[#141414] px-2.5 py-2.5">
        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[16px] text-white/90 transition hover:bg-white/10"
          aria-label="Retour"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
        <h2 className="flex-1 text-center text-[15px] font-semibold tracking-tight text-white">
          Mon activité
        </h2>
        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[16px] text-white/90 transition hover:bg-white/10"
          aria-label="Rechercher"
        >
          <Search className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
      </header>

      {/* Stats — cartes crème Figma (#FFF7ED) */}
      <div className="border-b border-gray-100 bg-white px-2.5 py-3">
        <p className="mb-2.5 text-center text-[13px] font-bold leading-snug text-[#111827]">
          Pilotez votre activité en un clin d&apos;œil.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Véhicules en stock", value: "24", Icon: CarFront },
            { label: "Leads reçus", value: "18", Icon: User },
            { label: "Ventes du mois", value: "7", Icon: BarChart3 },
          ].map(({ label, value, Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#FFE8D4]/90 bg-[#FFF7ED] px-1.5 py-2.5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <Icon
                className="mx-auto h-3.5 w-3.5"
                style={{ color: ORANGE }}
                strokeWidth={2}
                aria-hidden
              />
              <p className="mt-1 text-[15px] font-bold leading-none text-[#111827]">
                {value}
              </p>
              <p className="mt-0.5 text-[9px] font-medium leading-snug text-[#6B7280]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Onglets — soulignement orange épais, espacement serré */}
      <div className="flex border-b border-gray-200 bg-white px-0">
        {tabs.map((label, i) => {
          const isActive = i === activeTabIndex;
          return (
            <button
              key={label}
              type="button"
              className={`relative flex-1 px-1 py-2.5 text-center text-[13px] font-semibold transition-colors ${
                isActive ? "" : "text-[#6B7280]"
              }`}
              style={isActive ? { color: ORANGE } : undefined}
            >
              {label}
              {isActive ? (
                <span
                  className="absolute bottom-0 left-3 right-3 h-[3px] rounded-t-full"
                  style={{ background: ORANGE }}
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Liste */}
      <div className="max-h-[min(52vh,420px)] space-y-2 overflow-y-auto bg-[#F3F4F6] p-2.5">
        <ActivityCardMobile
          title="Peugeot 208"
          price="18 900 €"
          date="12/05/2024"
          status="Validé"
          statusVariant="success"
        />
        <ActivityCardMobile
          title="Renault Clio IV"
          price="12 400 €"
          date="10/05/2024"
          status="En attente"
          statusVariant="warning"
        />
        <ActivityCardMobile
          title="Volkswagen Golf"
          price="21 200 €"
          date="08/05/2024"
          status="Validé"
          statusVariant="success"
        />
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <>
      {/* Vue mobile « Mon activité » — Figma */}
      <div className="lg:hidden">
        <MobileActivityView />
      </div>

      {/* Vue desktop — dashboard large */}
      <div className="relative z-10 hidden overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)] lg:block">
        <div className="flex min-h-[420px]">
          <aside className="hidden w-[200px] shrink-0 border-r border-gray-100 bg-[#F9FAFB] lg:block">
            <div className="space-y-1 p-3">
              <NavItem label="Mon activité" />
              <NavItem label="Mes deals" active />
              <NavItem label="Finances" />
              <NavItem label="Filtres" />
              <NavItem label="Mon abonnement" />
            </div>
            <div className="mt-6 space-y-1 border-t border-gray-100 p-3">
              <NavItem label="Paramètres" />
              <NavItem label="Support & assistance" />
              <NavItem label="Feedback" />
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <header className="flex flex-wrap items-center gap-3 border-b border-gray-100 px-4 py-3">
              <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-[12px] text-[#9CA3AF]">
                <Search className="h-4 w-4 text-gray-400" />
                Rechercher…
              </div>
              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-[16px] p-2 text-gray-500 hover:bg-gray-50"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2 rounded-[16px] border border-gray-200 py-1 pl-1 pr-2">
                  <span className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-100" />
                  <div className="text-left">
                    <p className="text-[12px] font-semibold text-[#1A1A1A]">
                      Marc Dubois
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </header>

            <div className="flex flex-wrap gap-2 border-b border-gray-100 px-4 py-2">
              {[
                ["Tous", "08", true],
                ["Nouveaux", "", false],
                ["À l'étude", "", false],
                ["Traités", "", false],
                ["Archivés", "", false],
              ].map(([label, count, active]) => (
                <button
                  key={String(label)}
                  type="button"
                  className={`relative pb-2 text-[12px] font-medium ${
                    active
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-[#FE6C0E]"
                      : "text-[#6B7280]"
                  }`}
                  style={active ? { color: ORANGE } : undefined}
                >
                  {label}
                  {count ? (
                    <span className="ml-1 rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] text-[#4B5563]">
                      {count}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 border-b border-gray-50 px-4 py-2">
              <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] text-[#374151]">
                Marge Plus élevée ▾
              </span>
              <span className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] text-[#9CA3AF]">
                <Search className="h-3.5 w-3.5" />
                Rechercher deals
              </span>
            </div>

            <div className="flex-1 space-y-3 overflow-hidden p-4">
              <DealRowDesktop
                title="2019 Mazda CX-3 Skyactiv-G 120 ch…"
                meta="Lyon • Il y a 2 h"
                sale="14 500 €"
                market="16 200 €"
                margin="+1 700 €"
                badge="Nouveau"
                badgeTone="orange"
              />
              <DealRowDesktop
                title="2018 Mercedes GLA 200 d…"
                meta="Paris • Il y a 5 h"
                sale="21 900 €"
                market="24 100 €"
                margin="+2 200 €"
                badge="Traités"
                badgeTone="blue"
              />
            </div>
          </div>

          <aside className="hidden w-[176px] shrink-0 border-l border-gray-100 bg-white xl:block">
            <p className="border-b border-gray-50 px-3 py-3 text-[12px] font-bold text-[#1A1A1A]">
              Filtres
            </p>
            <div className="divide-y divide-gray-50 px-3">
              <FilterToggle label="BMW Sport" dot="bg-blue-500" on />
              <FilterToggle label="Mercedes AMG" dot="bg-gray-400" />
              <FilterToggle label="Audi S-Line" dot="bg-red-500" on />
              <FilterToggle label="Volvo R-Design" dot="bg-sky-500" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
