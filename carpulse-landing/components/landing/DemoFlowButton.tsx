"use client";

import * as React from "react";

import { DemoModal } from "../ui/DemoModal";
import { Button } from "../ui/button";

type DemoFlowButtonProps = {
  children: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  /** Destination après clic dans le modal. */
  planifierDemoHref?: string;
  /** Callback optionnel au clic (avant ouverture modal). */
  onClick?: () => void;
};

export function DemoFlowButton({
  children,
  variant = "primary",
  size = "md",
  className,
  style,
  fullWidth,
  planifierDemoHref = "/planifier-demo",
  onClick,
}: DemoFlowButtonProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        style={style}
        onClick={() => {
          onClick?.();
          setOpen(true);
        }}
      >
        {children}
      </Button>

      <DemoModal
        isOpen={open}
        onClose={() => setOpen(false)}
        planifierDemoHref={planifierDemoHref}
      />
    </>
  );
}

