import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  /**
   * Permet de rendre un autre élément (ex: <a>) en héritant des styles.
   * Utilisation: <Button asChild><a href="...">...</a></Button>
   */
  asChild?: boolean;
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth,
      className,
      style,
      type = "button",
      asChild,
      ...props
    },
    ref,
  ) => {
    const v = VARIANT_STYLES[variant];
    const mergedClassName = clsx(
      "inline-flex items-center justify-center font-bold leading-none",
      "select-none whitespace-nowrap",
      "transition duration-150",
      "disabled:opacity-60 disabled:pointer-events-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF963A]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      fullWidth && "w-full",
      SIZE_CLASSES[size],
      className,
    );

    const mergedStyle: React.CSSProperties = {
      background: v.background,
      color: v.text,
      boxShadow: "0px 1px 2.5px 0px #FFFFFF8C inset",
      borderStyle: "solid",
      borderWidth: "0.5px",
      borderColor: v.borderColor,
      ...style,
    };

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<any>;
      const childClassName = clsx(child.props?.className, mergedClassName);
      const childStyle = { ...(child.props?.style ?? {}), ...mergedStyle };
      return React.cloneElement(child, {
        className: childClassName,
        style: childStyle,
      });
    }

    return (
      <button
        ref={ref}
        type={type}
        className={mergedClassName}
        style={mergedStyle}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

