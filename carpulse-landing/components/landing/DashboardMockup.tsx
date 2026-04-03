import {
  IconBell,
  IconChevronDown,
  IconSearch,
} from "./icons";

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
          ? "bg-[#FFF3EB] text-[#FF7A22] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-[#FF7A22]"
          : "text-[#4B5563]"
      }`}
    >
      <span className="h-4 w-4 rounded bg-gray-200/80" aria-hidden />
      {label}
    </div>
  );
}

function DealRow({
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
        className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
          badgeTone === "orange"
            ? "bg-[#FFF3EB] text-[#FF7A22]"
            : "bg-[#EFF6FF] text-[#2563EB]"
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
          <p className="text-sm font-bold text-[#FF7A22]">{sale}</p>
        </div>
        <div className="text-right text-[10px] leading-tight">
          <p className="text-[#6B7280]">Prix marché</p>
          <p className="text-sm font-bold text-[#1A1A1A]">{market}</p>
        </div>
        <div className="text-right text-[10px] leading-tight">
          <p className="text-[#6B7280]">Marge potentielle</p>
          <p className="text-sm font-bold text-emerald-600">{margin}</p>
        </div>
        <button
          type="button"
          className="mt-1 rounded-lg bg-[#FF7A22] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm"
        >
          Voir détails
        </button>
      </div>
    </div>
  );
}

function FilterToggle({ label, dot, on }: { label: string; dot: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 text-[11px]">
      <div className="flex min-w-0 items-center gap-2">
        <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
        <span className="truncate text-[#374151]">{label}</span>
      </div>
      <span
        className={`relative h-5 w-9 shrink-0 rounded-full ${on ? "bg-[#FF7A22]" : "bg-gray-200"}`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${on ? "left-4" : "left-0.5"}`}
        />
      </span>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative z-10 overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)]">
      <div className="flex min-h-[420px]">
        {/* Sidebar */}
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

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex flex-wrap items-center gap-3 border-b border-gray-100 px-4 py-3">
            <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-[12px] text-[#9CA3AF]">
              <IconSearch className="h-4 w-4 text-gray-400" />
              Rechercher…
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button
                type="button"
                className="rounded-full p-2 text-gray-500 hover:bg-gray-50"
                aria-label="Notifications"
              >
                <IconBell className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 rounded-full border border-gray-200 py-1 pl-1 pr-2">
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-100" />
                <div className="text-left">
                  <p className="text-[12px] font-semibold text-[#1A1A1A]">
                    Marc Dubois
                  </p>
                </div>
                <IconChevronDown className="h-4 w-4 text-gray-400" />
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
                    ? "text-[#FF7A22] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-[#FF7A22]"
                    : "text-[#6B7280]"
                }`}
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
              <IconSearch className="h-3.5 w-3.5" />
              Rechercher deals
            </span>
          </div>

          <div className="flex-1 space-y-3 overflow-hidden p-4">
            <DealRow
              title="2019 Mazda CX-3 Skyactiv-G 120 ch…"
              meta="Lyon • Il y a 2 h"
              sale="14 500 €"
              market="16 200 €"
              margin="+1 700 €"
              badge="Nouveau"
              badgeTone="orange"
            />
            <DealRow
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

        {/* Filters panel */}
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
  );
}
