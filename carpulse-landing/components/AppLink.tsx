"use client";

import {
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import { getDemoUrl } from "../lib/appUrl";

const noopSubscribe = () => () => {};

export function useDemoUrl(): string {
  return useSyncExternalStore(
    noopSubscribe,
    getDemoUrl,
    getDemoUrl,
  );
}

type DemoLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function DemoLink({ children, ...rest }: DemoLinkProps) {
  const href = useDemoUrl();
  return (
    <a {...rest} href={href}>
      {children}
    </a>
  );
}
