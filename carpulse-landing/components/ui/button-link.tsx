import Link from "next/link";
import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const VARIANT_STYLES: Record<
  ButtonVariant,
  { background: string; borderColor: string; text: string }
> = {
  primary: {
    background: "linear-gradient(43.89deg, #FE5E00 0%, #FF963A 100%)",
    borderColor: "#FFBC71",
    text: "#FFFFFF",
  },
  secondary: {
    background: "#262626",
    borderColor: "#404040",
    text: "#FFFFFF",
  },
  tertiary: {
    background: "#FFFFFF",
    borderColor: "#404040",
    text: "#262626",
  },
};

/** Rayon max 16px (spec design) */
const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "h-9 px-4 text-[13px] rounded-xl",
  sm: "h-10 px-5 text-[13px] rounded-[16px]",
  md: "h-11 px-6 text-[14px] rounded-[16px]",
  lg: "h-12 px-8 text-[15px] rounded-[16px]",
  xl: "h-14 px-10 text-[16px] rounded-[16px]",
};

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      href,
      variant = "primary",
      size = "md",
      fullWidth,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const v = VARIANT_STYLES[variant];

    return (
      <Link
        ref={ref}
        href={href}
        className={clsx(
          "inline-flex items-center justify-center font-bold leading-none",
          "select-none whitespace-nowrap",
          "transition duration-150",
          "disabled:opacity-60 disabled:pointer-events-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF963A]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          fullWidth && "w-full",
          SIZE_CLASSES[size],
          className,
        )}
        style={{
          background: v.background,
          color: v.text,
          boxShadow: "0px 1px 2.5px 0px #FFFFFF8C inset",
          borderStyle: "solid",
          borderWidth: "0.5px",
          borderColor: v.borderColor,
          ...style,
        }}
        {...props}
      />
    );
  },
);
ButtonLink.displayName = "ButtonLink";

