"use client";

import * as React from "react";

type DriveVideoProps = {
  /** ID Google Drive du fichier (recommandé). */
  fileId?: string;
  /** URL Google Drive publique (ex: `https://drive.google.com/file/d/<id>/preview`). */
  driveUrl?: string;
  title?: string;
  /** Largeur max du conteneur (ex: `800px`) */
  maxWidth?: string;
  className?: string;
};

export function DriveVideo({
  fileId,
  driveUrl,
  title = "Lecteur Vidéo Drive",
  maxWidth = "800px",
  className,
}: DriveVideoProps) {
  const src =
    driveUrl ??
    (fileId
      ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`
      : "");

  return (
    <div style={{ maxWidth, margin: "0 auto" }} className={className}>
      <div style={{ width: "100%", aspectRatio: "16 / 9" }}>
      <iframe
        title={title}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
        loading="lazy"
        src={src}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
      </div>
    </div>
  );
}

