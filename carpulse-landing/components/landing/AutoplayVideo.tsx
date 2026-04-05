"use client";

import * as React from "react";

type AutoplayVideoProps = {
  src: string;
  className?: string;
};

export function AutoplayVideo({ src, className }: AutoplayVideoProps) {
  const ref = React.useRef<HTMLVideoElement | null>(null);
  const [needsUserGesture, setNeedsUserGesture] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    let cancelled = false;

    async function start() {
      const el = ref.current;
      if (!el) return;

      // Les navigateurs bloquent souvent autoplay+son.
      // On démarre en muet (autorisé), puis on tente d'activer le son.
      el.muted = true;
      el.volume = 1;

      try {
        await el.play();
      } catch {
        if (!cancelled) setNeedsUserGesture(true);
        return;
      }

      try {
        el.muted = false;
        await el.play();
      } catch {
        // Son bloqué sans interaction : on garde la lecture muette.
        if (!cancelled) setNeedsUserGesture(true);
      }
    }

    void start();
    return () => {
      cancelled = true;
    };
  }, []);

  const onUserStart = async () => {
    const el = ref.current;
    if (!el) return;
    try {
      el.muted = false;
      el.volume = 1;
      await el.play();
      setNeedsUserGesture(false);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={className}
      suppressHydrationWarning
      onPointerDown={needsUserGesture ? onUserStart : undefined}
    >
      {mounted ? (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          playsInline
          loop
          preload="metadata"
          controls
        />
      ) : null}

      {needsUserGesture ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
          <div className="rounded-full bg-black/70 px-4 py-2 text-[12px] font-semibold text-white">
            Touchez pour activer le son
          </div>
        </div>
      ) : null}
    </div>
  );
}

