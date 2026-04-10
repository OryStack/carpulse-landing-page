import { MapPin } from "lucide-react";
import { DemoFlowButton } from "./DemoFlowButton";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type CarOpportunityCardProps = {
  imageClass?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Ratio de l'image (ex: "1024 / 705") pour respecter la taille originale. */
  imageAspectRatio?: string;
  /** Object-fit pour l'image (maquette: cover). */
  imageFit?: "cover" | "contain";
  /** Pin carte (maquette mobile) */
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
  imageAspectRatio = "16 / 10",
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
        <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#FE5E00] px-3.5 py-1 text-[11px] font-bold leading-none text-white shadow-[0_6px_16px_rgba(0,0,0,0.22)] ring-2 ring-white">
          Meilleur deal
        </div>
      ) : null}

      <article
        className={`relative flex flex-col overflow-hidden rounded-[28px] border bg-white ${
          highlight
            ? "border-[#FE5E00] shadow-[0_14px_38px_rgba(254,94,0,0.14)] ring-1 ring-[#FE5E00]/20"
            : "border-[#E5E7EB] shadow-[0_10px_30px_rgba(17,24,39,0.08)]"
        }`}
      >

      <div className="relative w-full bg-white p-3">
        <div className="relative overflow-hidden rounded-2xl bg-[#F3F4F6]">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: imageAspectRatio }}
          >
            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageSrc}
                alt={imageAlt}
                className={cx("h-full w-full", imageFit === "contain" ? "object-contain" : "object-cover")}
              />
            ) : (
              <div
                className={`absolute inset-0 bg-linear-to-br ${imageClass}`}
                aria-hidden
              />
            )}
          </div>
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#374151] shadow-[0_8px_18px_rgba(17,24,39,0.12)]">
            <span className="text-[#F59E0B]" aria-hidden>
              ★
            </span>
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

      <div className="flex flex-1 flex-col px-5 pb-5">
        <h3 className="line-clamp-2 text-[18px] font-bold leading-snug tracking-tight text-[#111827]">
          {title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-[13px] text-[#6B7280]">
          <MapPin
            className="h-3.5 w-3.5 shrink-0 text-[#FE6C0E] md:hidden"
            strokeWidth={2}
            aria-hidden
          />
          <span className="hidden text-[#9CA3AF] md:inline" aria-hidden>
            ●
          </span>
          {meta}
        </p>

        <div className="mt-4 h-px w-full bg-[#E5E7EB]" />

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] text-[#6B7280]">{saleLabel}</p>
            <p className="text-[18px] font-bold text-[#FE5E00]">{sale}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#6B7280]">Prix du marché</p>
            <p className="text-[18px] font-bold text-[#111827]">{market}</p>
          </div>
        </div>

        <div
          className={`mt-4 flex items-center justify-between gap-2 rounded-2xl px-4 py-3 ${tone.box}`}
        >
          <div>
            <p className="text-[11px] text-[#6B7280]">Marge potentielle</p>
            <p className={`text-[18px] font-bold ${tone.margin}`}>{margin}</p>
          </div>
          <span
            className={`shrink-0 rounded-xl border bg-white px-3 py-1.5 text-[12px] font-bold ${tone.badge}`}
          >
            {marginBadge}
          </span>
        </div>

        <DemoFlowButton
          variant="tertiary"
          size="md"
          className="mt-4 w-full rounded-[16px] bg-[#F3F4F6] py-3.5 text-[13px] font-semibold text-[#111827]/80 transition hover:bg-[#E5E7EB]"
          style={{
            background: "#F3F4F6",
            borderColor: "#E5E7EB",
            color: "rgba(17, 24, 39, 0.8)",
            boxShadow: "none",
          }}
        >
          Voir détails
        </DemoFlowButton>
      </div>
      </article>
    </div>
  );
}
