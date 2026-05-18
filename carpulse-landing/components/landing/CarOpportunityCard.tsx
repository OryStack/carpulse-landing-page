import { MapPin } from "lucide-react";

import { DemoLink } from "../AppLink";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type CarOpportunityCardProps = {
  imageClass?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  showMapPin?: boolean;
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
  imageSrc,
  imageAlt = "",
  imageFit = "cover",
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
  showMapPin,
}: CarOpportunityCardProps) {
  const tone =
    marginTone === "green"
      ? {
          margin: "text-emerald-600",
          box: "bg-emerald-50",
          badge: "border-emerald-300 text-emerald-700",
        }
      : {
          margin: "text-sky-600",
          box: "bg-sky-50",
          badge: "border-sky-300 text-sky-700",
        };

  return (
    <div className="relative overflow-visible">
      {highlight ? (
        <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#FE5E00] px-3 py-0.5 text-[10px] font-bold leading-none text-white shadow-[0_6px_16px_rgba(0,0,0,0.22)] ring-2 ring-white sm:px-3.5 sm:py-1 sm:text-[11px]">
          Meilleur deal
        </div>
      ) : null}

      <article
        className={`relative flex h-auto flex-col overflow-hidden rounded-[24px] border bg-white sm:h-[520px] sm:rounded-[28px] ${
          highlight
            ? "border-[#FE5E00] shadow-[0_14px_38px_rgba(254,94,0,0.14)] ring-1 ring-[#FE5E00]/20"
            : "border-[#E5E7EB] shadow-[0_10px_30px_rgba(17,24,39,0.08)]"
        }`}
      >
        {/* Image - hauteur fixe, ratio ignoré */}
        <div className="shrink-0 p-2.5 sm:p-3">
          <div className="relative h-[168px] overflow-hidden rounded-xl bg-[#F3F4F6] sm:h-[210px] sm:rounded-2xl">
            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageSrc}
                alt={imageAlt}
                className={cx(
                  "h-full w-full",
                  imageFit === "contain" ? "object-contain" : "object-cover"
                )}
              />
            ) : (
              <div
                className={`absolute inset-0 bg-linear-to-br ${imageClass}`}
                aria-hidden
              />
            )}

            {/* Rating badge */}
            <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#374151] shadow-[0_8px_18px_rgba(17,24,39,0.12)] sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[11px]">
              <span className="text-[#F59E0B]" aria-hidden>★</span>
              {rating}
            </div>

            {showMapPin ? (
              <div
                className="pointer-events-none absolute right-2 top-2 z-10 md:hidden"
                aria-hidden
              >
                <MapPin
                  className="h-6 w-6 text-[#FE6C0E] drop-shadow-md"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* Contenu */}
        <div className="flex flex-1 flex-col px-4 pb-4 pt-0.5 sm:px-5 sm:pb-5">
          <h3 className="line-clamp-2 text-[16px] font-bold leading-snug tracking-tight text-[#111827] sm:text-[18px]">
            {title}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#6B7280] sm:mt-2 sm:text-[13px]">
            <MapPin
              className="h-3.5 w-3.5 shrink-0 text-[#FE6C0E] md:hidden"
              strokeWidth={2}
              aria-hidden
            />
            <span className="hidden text-[#9CA3AF] md:inline" aria-hidden>●</span>
            {meta}
          </p>

          <div className="mt-3 h-px w-full bg-[#E5E7EB] sm:mt-4" />

          <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">
            <div>
              <p className="text-[10px] text-[#6B7280] sm:text-[11px]">{saleLabel}</p>
              <p className="text-[16px] font-bold text-[#FE5E00] sm:text-[18px]">{sale}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#6B7280] sm:text-[11px]">Prix du marché</p>
              <p className="text-[16px] font-bold text-[#111827] sm:text-[18px]">{market}</p>
            </div>
          </div>

          <div
            className={`mt-3 flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 sm:mt-4 sm:rounded-2xl sm:px-4 sm:py-3 ${tone.box}`}
          >
            <div>
              <p className="text-[10px] text-[#6B7280] sm:text-[11px]">Marge potentielle</p>
              <p className={`text-[16px] font-bold sm:text-[18px] ${tone.margin}`}>{margin}</p>
            </div>
            <span
              className={`shrink-0 rounded-lg border bg-white px-2.5 py-1 text-[11px] font-bold sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-[12px] ${tone.badge}`}
            >
              {marginBadge}
            </span>
          </div>

          <DemoLink className="mt-3 flex w-full items-center justify-center rounded-[14px] bg-[#F3F4F6] py-3 text-center text-[12px] font-semibold text-[#111827]/80 transition hover:bg-[#E5E7EB] sm:mt-auto sm:rounded-[16px] sm:py-3.5 sm:text-[13px]">
            Voir détails
          </DemoLink>
        </div>
      </article>
    </div>
  );
}