"use client";

import { useId } from "react";

import styles from "./pricing-plan-card.module.css";

export interface PlanFeature {
  text: string;
  available: boolean;
}

export type PlanVariant = "starter" | "premium" | "custom";
export type ButtonVariant = "starter" | "premium" | "custom" | "current";

export interface PricingPlanCardProps {
  variant: PlanVariant;
  name: string;
  description: string;
  price?: string;
  period?: string;
  /** Sans prix (Entreprise) : libellé principal sous le titre */
  customPriceLabel?: string;
  dealCountLabel: string;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: ButtonVariant;
  isPopular?: boolean;
  isCurrent?: boolean;
  onButtonClick?: () => void;
  className?: string;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1L10.163 5.279L15 6.056L11.5 9.428L12.326 14.2L8 11.969L3.674 14.2L4.5 9.428L1 6.056L5.837 5.279L8 1Z"
        fill="#FEF08A"
      />
    </svg>
  );
}

function CarIconGray({ maskId }: { maskId: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <mask
        id={maskId}
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="22"
        height="21"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 16C7.08152 16 7.39946 15.8683 7.63388 15.6339C7.8683 15.3995 8 15.0815 8 14.75C8 14.4185 7.8683 14.1005 7.63388 13.8661C7.39946 13.6317 7.08152 13.5 6.75 13.5C6.41848 13.5 6.10054 13.6317 5.86612 13.8661C5.6317 14.1005 5.5 14.4185 5.5 14.75C5.5 15.0815 5.6317 15.3995 5.86612 15.6339C6.10054 15.8683 6.41848 16 6.75 16ZM17.25 16C17.5815 16 17.8995 15.8683 18.1339 15.6339C18.3683 15.3995 18.5 15.0815 18.5 14.75C18.5 14.4185 18.3683 14.1005 18.1339 13.8661C17.8995 13.6317 17.5815 13.5 17.25 13.5C16.9185 13.5 16.6005 13.6317 16.3661 13.8661C16.1317 14.1005 16 14.4185 16 14.75C16 15.0815 16.1317 15.3995 16.3661 15.6339C16.6005 15.8683 16.9185 16 17.25 16Z"
          fill="white"
        />
        <path
          d="M3.5 18.5C3.10218 18.5 2.72064 18.342 2.43934 18.0607C2.15804 17.7794 2 17.3978 2 17V12.355C1.99997 11.7976 2.15522 11.2513 2.44834 10.7772C2.74146 10.3031 3.16086 9.92005 3.6595 9.671L4.0005 9.501L5.1555 4.546C5.25796 4.10641 5.50611 3.71441 5.8596 3.43372C6.21309 3.15304 6.65113 3.00018 7.1025 3H16.9465C17.4012 2.99998 17.8423 3.15489 18.1972 3.4392C18.552 3.72351 18.7994 4.12024 18.8985 4.564L20.001 9.501L20.341 9.671C20.8394 9.92005 21.2586 10.303 21.5516 10.7768C21.8446 11.2507 21.9999 11.7968 22 12.354V17C22 17.3978 21.842 17.7794 21.5607 18.0607C21.2794 18.342 20.8978 18.5 20.5 18.5H19.5015V19C19.5015 19.5306 19.2907 20.0395 18.9155 20.4147C18.5403 20.79 18.0314 21.0007 17.5007 21.0007C16.9701 21.0007 16.4612 20.79 16.086 20.4147C15.7108 20.0395 15.5 19.5306 15.5 19V18.5H8.5V19C8.5 19.5304 8.28929 20.0391 7.91421 20.4142C7.53914 20.7893 7.03043 21 6.5 21C5.96957 21 5.46086 20.7893 5.08579 20.4142C4.71071 20.0391 4.5 19.5304 4.5 19V18.5H3.5Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 11H17L16.174 7.283C16.1246 7.06094 16.001 6.86234 15.8236 6.71999C15.6462 6.57764 15.4255 6.50004 15.198 6.5H8.802C8.57452 6.50004 8.35384 6.57764 8.1764 6.71999C7.99897 6.86234 7.87536 7.06094 7.826 7.283L7 11Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M0 0H24V24H0V0Z" fill="#737373" />
      </g>
    </svg>
  );
}

function CarIconWhite({ maskId }: { maskId: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <mask
        id={maskId}
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="22"
        height="21"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 16C7.08152 16 7.39946 15.8683 7.63388 15.6339C7.8683 15.3995 8 15.0815 8 14.75C8 14.4185 7.8683 14.1005 7.63388 13.8661C7.39946 13.6317 7.08152 13.5 6.75 13.5C6.41848 13.5 6.10054 13.6317 5.86612 13.8661C5.6317 14.1005 5.5 14.4185 5.5 14.75C5.5 15.0815 5.6317 15.3995 5.86612 15.6339C6.10054 15.8683 6.41848 16 6.75 16ZM17.25 16C17.5815 16 17.8995 15.8683 18.1339 15.6339C18.3683 15.3995 18.5 15.0815 18.5 14.75C18.5 14.4185 18.3683 14.1005 18.1339 13.8661C17.8995 13.6317 17.5815 13.5 17.25 13.5C16.9185 13.5 16.6005 13.6317 16.3661 13.8661C16.1317 14.1005 16 14.4185 16 14.75C16 15.0815 16.1317 15.3995 16.3661 15.6339C16.6005 15.8683 16.9185 16 17.25 16Z"
          fill="white"
        />
        <path
          d="M3.5 18.5C3.10218 18.5 2.72064 18.342 2.43934 18.0607C2.15804 17.7794 2 17.3978 2 17V12.355C1.99997 11.7976 2.15522 11.2513 2.44834 10.7772C2.74146 10.3031 3.16086 9.92005 3.6595 9.671L4.0005 9.501L5.1555 4.546C5.25796 4.10641 5.50611 3.71441 5.8596 3.43372C6.21309 3.15304 6.65113 3.00018 7.1025 3H16.9465C17.4012 2.99998 17.8423 3.15489 18.1972 3.4392C18.552 3.72351 18.7994 4.12024 18.8985 4.564L20.001 9.501L20.341 9.671C20.8394 9.92005 21.2586 10.303 21.5516 10.7768C21.8446 11.2507 21.9999 11.7968 22 12.354V17C22 17.3978 21.842 17.7794 21.5607 18.0607C21.2794 18.342 20.8978 18.5 20.5 18.5H19.5015V19C19.5015 19.5306 19.2907 20.0395 18.9155 20.4147C18.5403 20.79 18.0314 21.0007 17.5007 21.0007C16.9701 21.0007 16.4612 20.79 16.086 20.4147C15.7108 20.0395 15.5 19.5306 15.5 19V18.5H8.5V19C8.5 19.5304 8.28929 20.0391 7.91421 20.4142C7.53914 20.7893 7.03043 21 6.5 21C5.96957 21 5.46086 20.7893 5.08579 20.4142C4.71071 20.0391 4.5 19.5304 4.5 19V18.5H3.5Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 11H17L16.174 7.283C16.1246 7.06094 16.001 6.86234 15.8236 6.71999C15.6462 6.57764 15.4255 6.50004 15.198 6.5H8.802C8.57452 6.50004 8.35384 6.57764 8.1764 6.71999C7.99897 6.86234 7.87536 7.06094 7.826 7.283L7 11Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M0 0H24V24H0V0Z" fill="white" />
      </g>
    </svg>
  );
}

export function PricingPlanCard({
  variant,
  name,
  description,
  price,
  period = " / mois",
  customPriceLabel = "Tarification personnalisée",
  dealCountLabel,
  features,
  buttonText,
  buttonVariant,
  isPopular = false,
  isCurrent = false,
  onButtonClick,
  className = "",
}: PricingPlanCardProps) {
  const uid = useId();
  const maskGray = `${uid}-car-gray`;
  const maskWhite = `${uid}-car-white`;

  const isDark = variant === "custom";
  const hasBoldDealCount = variant === "starter" || variant === "premium";

  const btnClass = [
    styles.btn,
    isCurrent && styles.btnCurrent,
    !isCurrent && buttonVariant === "starter" && styles.btnStarter,
    !isCurrent && buttonVariant === "premium" && styles.btnPremium,
    !isCurrent && buttonVariant === "custom" && styles.btnCustom,
  ]
    .filter(Boolean)
    .join(" ");

  const renderDealCount = () => {
    if (hasBoldDealCount) {
      return (
        <span
          className={[styles.dealText, isDark && styles.dealTextDark]
            .filter(Boolean)
            .join(" ")}
        >
          <strong
            className={[styles.dealCountBold, isDark && styles.dealCountBoldDark]
              .filter(Boolean)
              .join(" ")}
          >
            {dealCountLabel}
          </strong>
          <span className={styles.dealCountSuffix}> /mois</span>
        </span>
      );
    }
    return (
      <span
        className={[
          styles.dealText,
          styles.dealTextNormal,
          isDark && styles.dealTextDark,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {dealCountLabel}
      </span>
    );
  };

  const cardContent = (
    <div className={styles.body}>
      <div className={styles.headerSection}>
        <h3
          className={[styles.planName, isDark && styles.planNameDark]
            .filter(Boolean)
            .join(" ")}
        >
          {name}
        </h3>
        <p
          className={[
            styles.planDescription,
            isDark && styles.planDescriptionDark,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      </div>

      {price ? (
        <div className={styles.priceBlock}>
          <span
            className={[
              styles.priceAmount,
              isDark && styles.priceAmountDark,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {price}
          </span>
          <span
            className={[
              styles.pricePeriod,
              isDark && styles.pricePeriodDark,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {period}
          </span>
        </div>
      ) : (
        <p className={styles.customTitle}>{customPriceLabel}</p>
      )}

      <button
        type="button"
        className={btnClass}
        onClick={onButtonClick}
        disabled={isCurrent}
      >
        {isCurrent ? "Votre plan actuel" : buttonText}
      </button>

      <div
        className={[
          styles.featuresSection,
          isDark && styles.featuresSectionDark,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.dealHeader}>
          {isDark ? (
            <CarIconWhite maskId={maskWhite} />
          ) : (
            <CarIconGray maskId={maskGray} />
          )}
          {renderDealCount()}
        </div>

        <div
          className={[
            styles.featuresDivider,
            isDark && styles.featuresDividerDark,
          ]
            .filter(Boolean)
            .join(" ")}
        />

        <ul className={styles.featuresList}>
          {features.map((feature, i) => (
            <li
              key={i}
              className={[
                styles.featureItem,
                !feature.available && styles.featureItemUnavailable,
                isDark && styles.featureItemDark,
                isDark &&
                  !feature.available &&
                  styles.featureItemDarkUnavailable,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {feature.available ? (
                <CheckIcon
                  className={[
                    styles.featureIconCheck,
                    isDark && styles.featureIconCheckDark,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              ) : (
                <XIcon
                  className={[
                    styles.featureIconX,
                    isDark && styles.featureIconXDark,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (isPopular) {
    return (
      <div className={`${styles.popularWrapper} ${className}`}>
        <div className={styles.popularBadge}>
          <StarIcon />
          <span className={styles.popularBadgeText}>Le plus populaire</span>
        </div>
        <div className={styles.cardInPopular}>{cardContent}</div>
      </div>
    );
  }

  const cardClass = [styles.card, isDark && styles.cardDark, className]
    .filter(Boolean)
    .join(" ");

  return <div className={cardClass}>{cardContent}</div>;
}
