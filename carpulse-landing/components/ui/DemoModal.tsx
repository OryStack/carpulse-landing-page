"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  /**
   * URL de redirection vers la page "planifier une démo".
   * Par défaut: `/planifier-demo`.
   */
  planifierDemoHref?: string;
};

// Icône “main” (SVG fourni) pour coller au design Figma.
const WaveHandIcon = () => (
  <svg
    width="114"
    height="114"
    viewBox="0 0 114 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#clip0_1916_11286)">
      <path
        d="M39.2766 55.3969L41.423 58.3609C42.4508 59.7983 43.5053 61.2073 44.5473 62.5949L44.7967 62.9298C44.9309 62.8395 45.0609 62.7475 45.1868 62.6537L51.9217 58.6459L49.9053 54.9979C45.9848 47.9121 42.0696 40.828 38.1312 33.7565C37.7642 33.0751 37.3162 32.4406 36.7971 31.8666C36.1226 31.1076 35.2459 30.5564 34.2695 30.2777C32.1551 29.6899 29.8253 30.4843 28.1936 32.3528C26.2984 34.5117 26.261 37.2263 28.0814 39.7967C31.7846 45.0122 35.5342 50.201 39.2766 55.3969ZM54.736 50.1244L57.6413 56.1557L58.5016 55.8493C59.8643 55.2811 61.2109 54.7004 62.4934 54.134L64.9052 53.2825L63.7759 49.4333C62.57 45.2901 61.3765 41.2003 60.0923 37.1426C58.6245 32.4366 57.0303 27.458 55.0549 22.67C54.7437 21.8812 54.2522 21.1761 53.6196 20.6113C52.9871 20.0465 52.2311 19.6377 51.4122 19.4174C49.9196 19.0006 48.2256 19.1573 46.6349 19.8627C45.0621 20.5681 43.963 21.6618 43.4679 22.9977C42.9798 24.3301 43.1187 25.8673 43.8651 27.4384C47.4632 35.0087 51.1005 42.5665 54.736 50.1244ZM113.109 51.5529C112.367 50.1849 110.568 49.4457 108.416 49.6523C103.633 50.1155 100.144 52.4721 98.0614 56.6776C97.47 57.8497 96.9499 59.0431 96.4226 60.2312C95.6816 61.9109 94.9353 63.5853 94.0625 65.1973C93.0917 66.9412 91.7184 68.5995 90.0867 70.0085C89.5755 70.4449 88.0419 71.763 86.225 71.2589C84.8944 70.8973 84.132 69.7502 83.6689 68.9184C83.1915 68.0705 82.6963 67.1371 82.4576 66.063L82.308 65.3826C81.5635 62.0409 80.8213 58.6969 80.0815 55.3506L74.7021 57.0659C64.3423 60.3488 52.4293 64.7716 42.6449 72.6893L36.7454 77.4452C37.1943 77.9439 37.6467 78.4397 38.1027 78.9325C38.9401 79.8927 39.5745 81.0124 39.9677 82.2243C42.1444 88.4996 44.8946 95.0707 50.0674 100.459C54.0948 104.652 58.4001 106.583 63.5515 106.494C67.4399 106.424 71.1841 105.243 76.0736 102.563C76.7202 102.208 78.0134 101.619 79.4509 101.627C84.3012 101.627 88.0686 99.8195 90.9613 96.1198C94.0946 92.071 95.7547 87.4273 95.8883 82.3436C96.0504 75.4823 99.2424 69.4563 105.633 63.913L106.914 62.8372C108.213 61.7488 109.444 60.7193 110.382 59.5739C111.798 57.8301 112.798 56.104 113.27 54.5793C113.626 53.4375 113.567 52.3919 113.109 51.5529ZM37.5844 64.9105C34.3746 60.8475 31.1505 56.7631 27.9104 52.6983C27.6521 52.3866 27.1676 52.0481 26.8274 51.8166C26.2507 51.4321 25.6197 51.1361 24.9553 50.9384C24.0148 50.6784 23.1331 50.7407 22.1855 51.1361C20.463 51.8558 19.5154 53.0777 19.1966 54.9943C18.8563 57.0196 19.5581 58.7937 21.5425 60.949L24.9322 64.6149C28.1206 68.0723 31.3073 71.5243 34.4761 74.9853L39.7789 67.6911L37.5844 64.9105ZM69.125 45.4308C69.6861 47.3795 70.4823 50.1903 71.0844 52.1033H79.3351C78.5923 48.548 77.8496 45.1493 77.1353 41.7044C76.5296 38.76 76.0166 35.7568 75.5001 32.8035C75.1456 30.7622 74.7876 28.6924 74.3993 26.6493C73.9825 24.4601 72.8941 22.9229 71.0719 21.9842C70.7191 21.7958 70.3463 21.6476 69.9604 21.5424C68.5318 21.1434 67.0605 21.3519 65.9152 22.1499C64.8571 22.8855 64.2212 24.0308 64.1161 25.365C64.0402 26.3828 64.1268 27.4061 64.3726 28.3967C65.9142 34.0865 67.4984 39.7647 69.125 45.4308Z"
        fill="#FF8E2B"
      />
      <path
        d="M82.6142 37.6378C84.5076 27.8641 82.4236 18.4929 75.6958 11.017C74.0624 9.19479 76.565 6.26998 78.2216 8.11179C85.8774 16.6244 88.5653 27.1427 86.3993 38.3485C85.9273 40.7835 82.1493 40.0781 82.6142 37.6378ZM97.0601 42.0001C98.6614 28.7102 94.9778 16.3429 85.2273 6.95042C82.8635 4.66685 85.938 0.50229 88.3427 2.81435C99.4292 13.5019 104.037 27.3582 102.21 42.6004C101.804 45.9242 96.67 45.3185 97.0601 42.0001ZM27.032 76.0415C19.4101 71.2981 14.492 64.1749 13.6816 55.1421C13.4767 52.9423 10.0122 52.8051 10.2063 55.0281C11.1433 65.3131 16.4407 73.5371 25.1813 78.9735C27.0819 80.1527 28.9308 77.2296 27.032 76.0415ZM21.0524 88.2645C11.2858 81.168 5.37025 71.1484 5.13691 58.9469C5.08525 55.9829 0.443317 55.4628 0.498536 58.4677C0.765723 72.3472 7.09628 83.8951 18.2897 92.0336C20.7371 93.797 23.4838 90.0404 21.0524 88.2645Z"
        fill="#FFD8A8"
      />
    </g>
    <defs>
      <clipPath id="clip0_1916_11286">
        <rect width="114" height="114" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export function DemoModal({
  isOpen,
  onClose,
  planifierDemoHref = "/planifier-demo",
}: DemoModalProps) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  if (typeof window === "undefined" || !hydrated) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleScheduleDemo = () => {
    onClose();
    router.push(planifierDemoHref);
  };

  return createPortal(
    <div
      className="demo-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Planifier une démo"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        className="demo-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 860,
          padding: "72px 96px 72px",
          background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          className="demo-modal-close-btn"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={24} strokeWidth={2} />
        </button>

        <div className="demo-modal-icon">
          <WaveHandIcon />
        </div>

        <h2 className="demo-modal-title">
          Prêt à prendre la route avec
          <br />
          <span className="demo-modal-title-highlight">CarPulse ?</span>
        </h2>

        <p className="demo-modal-description">
          L&apos;accès à CarPulse se fait uniquement après une courte démonstration
          personnalisée de la plateforme. Notre équipe validera ensuite votre
          profil et activera votre compte.
        </p>

        <button
          type="button"
          className="demo-modal-cta-btn"
          onClick={handleScheduleDemo}
        >
          Planifier une démo
        </button>
      </div>
    </div>,
    document.body,
  );
}

