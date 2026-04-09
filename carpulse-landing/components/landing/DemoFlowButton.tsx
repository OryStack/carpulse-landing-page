"use client";

import * as React from "react";

import { Button } from "../ui/button";

type DemoFlowButtonProps = {
  children: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  /** Destination après clic. */
  planifierDemoHref?: string;
  /** Callback optionnel au clic (avant redirection). */
  onClick?: () => void;
};

export function DemoFlowButton({
  children,
  variant = "primary",
  size = "md",
  className,
  style,
  fullWidth,
  planifierDemoHref = "https://dev.getcarpulse.com/planifier-demo",
  onClick,
}: DemoFlowButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      style={style}
      onClick={() => {
        onClick?.();
        window.location.assign(planifierDemoHref);
      }}
    >
      {children}
    </Button>
  );
}

