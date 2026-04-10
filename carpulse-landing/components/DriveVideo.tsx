"use client";

import * as React from "react";

type DriveVideoProps = {
  /** ID Google Drive du fichier (recommandé). */
  fileId?: string;
  /** URL Google Drive publique (ex: `https://drive.google.com/file/d/<id>/preview`). */
  driveUrl?: string;
  title?: string;
  /**
   * Charge le lecteur seulement quand il entre dans le viewport et tente
   * d'activer l'autoplay (via `?autoplay=1`).
   */
  autoplayOnView?: boolean;
  /** Largeur max du conteneur (ex: `800px`) */
  maxWidth?: string;
  className?: string;
};

export function DriveVideo({
  fileId,
  driveUrl,
  title = "Lecteur Vidéo Drive",
  autoplayOnView = false,
  maxWidth = "800px",
  className,
}: DriveVideoProps) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = React.useState(!autoplayOnView);

  React.useEffect(() => {
    if (!autoplayOnView) return;
    if (shouldLoad) return;

    const el = wrapperRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { root: null, threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [autoplayOnView, shouldLoad]);

  const baseSrc =
    driveUrl ??
    (fileId
      ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`
      : "");

  const src =
    shouldLoad && baseSrc
      ? `${baseSrc}${baseSrc.includes("?") ? "&" : "?"}autoplay=1`
      : "";

  return (
    <div style={{ maxWidth, margin: "0 auto" }} className={className}>
      <div
        ref={wrapperRef}
        style={{ width: "100%", aspectRatio: "16 / 9" }}
        aria-label={title}
      >
        {src ? (
          <iframe
            title={title}
            frameBorder={0}
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            src={src}
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        ) : null}
      </div>
    </div>
  );
}

