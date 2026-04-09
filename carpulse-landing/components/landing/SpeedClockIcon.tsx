import type { SVGProps } from "react";

/**
 * Icône type Figma : cadran ouvert à droite + aiguilles en L + traits de vitesse.
 * Pas d’équivalent unique dans Lucide ; SVG maison, même grille 24×24 que Lucide.
 */
export function SpeedClockIcon(props: SVGProps<SVGSVGElement>) {
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
      {/* Arc principal (ouverture à droite, r=10 comme Clock Lucide) */}
      <path d="M 20.66 7 A 10 10 0 1 0 20.66 17" />
      {/* Aiguilles vers ~9h et ~6h */}
      <path d="M12 12H7M12 12v6" />
      {/* Traits de vitesse */}
      <path d="M21.3 9.5h2.2M21.3 14h1.4" />
    </svg>
  );
}
