type CarOpportunityCardProps = {
  imageClass?: string;
  rating: string;
  title: string;
  meta: string;
  saleLabel?: string;
  sale: string;
  market: string;
  margin: string;
  marginBadge: string;
  marginTone: "blue" | "green";
  highlight?: boolean;
};

export function CarOpportunityCard({
  imageClass = "from-slate-300 to-slate-200",
  rating,
  title,
  meta,
  saleLabel = "Prix de vente",
  sale,
  market,
  margin,
  marginBadge,
  marginTone,
  highlight,
}: CarOpportunityCardProps) {
  const tone =
    marginTone === "green"
      ? {
          margin: "text-emerald-600",
          box: "bg-emerald-50/90",
          badge: "border-emerald-200 text-emerald-600",
        }
      : {
          margin: "text-sky-600",
          box: "bg-sky-50/90",
          badge: "border-sky-200 text-sky-600",
        };

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm ${
        highlight ? "border-[#FF7A22] ring-1 ring-[#FF7A22]/20" : "border-gray-100"
      }`}
    >
      {highlight ? (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A22] px-3 py-1 text-[11px] font-bold text-white shadow-sm">
          Meilleur deal
        </div>
      ) : null}

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${imageClass}`}
          aria-hidden
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-[11px] font-semibold text-[#374151] shadow-sm">
          <span className="text-amber-500" aria-hidden>
            ★
          </span>
          {rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-[#1A1A1A]">
          {title}
        </h3>
        <p className="mt-2 flex items-center gap-1 text-[12px] text-[#6B7280]">
          <span aria-hidden>📍</span>
          {meta}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-[11px] text-[#6B7280]">{saleLabel}</p>
            <p className="text-lg font-bold text-[#FF7A22]">{sale}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#6B7280]">Prix du marché</p>
            <p className="text-lg font-bold text-[#1A1A1A]">{market}</p>
          </div>
        </div>

        <div
          className={`mt-4 flex items-center justify-between gap-2 rounded-xl border border-gray-100 p-3 ${tone.box}`}
        >
          <div>
            <p className="text-[11px] text-[#6B7280]">Marge potentielle</p>
            <p className={`text-lg font-bold ${tone.margin}`}>{margin}</p>
          </div>
          <span
            className={`shrink-0 rounded-full border bg-white px-2.5 py-1 text-[11px] font-bold ${tone.badge}`}
          >
            {marginBadge}
          </span>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-[#F3F4F6] py-3 text-[13px] font-semibold text-[#374151] transition hover:bg-gray-200"
        >
          Voir détails
        </button>
      </div>
    </article>
  );
}
