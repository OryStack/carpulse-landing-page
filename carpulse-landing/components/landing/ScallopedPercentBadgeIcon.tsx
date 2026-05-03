import type { SVGProps } from "react";

/** Badge festonné (8 lobes) + % - aligné maquette Figma, grille 24×24 comme Lucide. */
const BADGE_PATH =
  "M 12 2.85 Q 14.81 5.21 18.47 5.53 Q 18.79 9.19 21.15 12 Q 18.79 14.81 18.47 18.47 Q 14.81 18.79 12 21.15 Q 9.19 18.79 5.53 18.47 Q 5.21 14.81 2.85 12 Q 5.21 9.19 5.53 5.53 Q 9.19 5.21 12 2.85 Z";

export function ScallopedPercentBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d={BADGE_PATH} />
      <path d="M15.5 8.5 8.5 15.5" />
      <circle cx={9.25} cy={9.25} r={1.35} />
      <circle cx={14.75} cy={14.75} r={1.35} />
    </svg>
  );
}
