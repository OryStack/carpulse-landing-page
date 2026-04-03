import Image from "next/image";

const LOGO_WIDTH = 121;
const LOGO_HEIGHT = 40;

type CarPulseLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Logo fourni (icône + wordmark « CarPulse ») — ne pas dupliquer le texte à côté.
 */
export function CarPulseLogo({ className = "", priority }: CarPulseLogoProps) {
  return (
    <Image
      src="/logo-carpulse.png"
      alt="CarPulse"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`h-9 w-auto sm:h-10 ${className}`}
      priority={priority}
    />
  );
}
