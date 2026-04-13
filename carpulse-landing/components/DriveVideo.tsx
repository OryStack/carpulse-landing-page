"use client";

import * as React from "react";

type DriveVideoProps = {
  fileId?: string;
  driveUrl?: string;
  title?: string;
  /**
   * Autoplay uniquement quand la vidéo entre dans le viewport.
   * L'iframe est chargée dès le chargement de la page.
   */
  autoplayOnView?: boolean;
  maxWidth?: string;
  className?: string;
  /** Ajout d'une image de couverture pour masquer le chargement lent */
  thumbnailUrl?: string;
};

export function DriveVideo({
  fileId,
  driveUrl,
  title = "Lecteur Vidéo Drive",
  autoplayOnView = false,
  maxWidth = "800px",
  className,
  thumbnailUrl,
}: DriveVideoProps) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) setInView(true);
      },
      { root: null, threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const normalizeVimeoUrl = (url: string): string => {
    if (!url) return url;
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (!match?.[1]) return url;

    const id = match[1];
    return `https://player.vimeo.com/video/${encodeURIComponent(id)}`;
  };

  const baseSrcRaw =
    driveUrl ??
    (fileId
      ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`
      : "");

  const baseSrc = normalizeVimeoUrl(baseSrcRaw);

  const withQueryParam = (
    url: string,
    key: string,
    value: string
  ): string => {
    if (!url) return url;
    const hasQuery = url.includes("?");
    const hasHash = url.includes("#");
    if (hasHash) {
      const [beforeHash, hash] = url.split("#", 2);
      return `${withQueryParam(beforeHash, key, value)}#${hash}`;
    }
    const separator = hasQuery ? "&" : "?";
    return `${url}${separator}${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}`;
  };

  const isVimeo = /player\.vimeo\.com\/video\/\d+/i.test(baseSrc);

  const src =
    autoplayOnView && inView
      ? (() => {
          let u = withQueryParam(baseSrc, "autoplay", "1");
          if (isVimeo) {
            // Vimeo + mobile : autoplay nécessite généralement muted + playsinline.
            u = withQueryParam(u, "muted", "1");
            u = withQueryParam(u, "playsinline", "1");
          }
          return u;
        })()
      : baseSrc;

  return (
    <div style={{ maxWidth, margin: "0 auto" }} className={className}>
      <div
        ref={wrapperRef}
        style={{ width: "100%", aspectRatio: "16 / 9", position: 'relative', backgroundColor: '#000' }}
        aria-label={title}
      >
        {/* Image de couverture : s'affiche tant que la vidéo n'est pas prête */}
        {thumbnailUrl && !isLoaded && (
          <img
            src={thumbnailUrl}
            alt="Aperçu vidéo"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        )}

        {src && (
          <iframe
            key={src}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            src={src}
            style={{ 
              width: "100%", 
              height: "100%", 
              border: "none",
              // On cache l'iframe jusqu'à ce qu'elle soit chargée si on a une thumbnail
              visibility: (thumbnailUrl && !isLoaded) ? 'hidden' : 'visible',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
    </div>
  );
}