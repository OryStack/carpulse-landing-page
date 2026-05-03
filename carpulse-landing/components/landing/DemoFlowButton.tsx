"use client";

import * as React from "react";

import { useDemoUrl } from "../AppLink";
import { Button } from "../ui/button";

type DemoFlowButtonProps = {
  children: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  /** Destination après clic. Si omis, résolu dynamiquement vers /planifier-demo de l'app. */
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
  planifierDemoHref,
  onClick,
}: DemoFlowButtonProps) {
  const defaultHref = useDemoUrl();
  const href = planifierDemoHref ?? defaultHref;

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      style={style}
      asChild
    >
      <a
        href={href}
        onClick={() => onClick?.()}
      >
        {children}
      </a>
    </Button>
  );
}

