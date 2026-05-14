/**
 * URL de la page « Planifier une démo ».
 *
 * Basée sur NEXT_PUBLIC_CARPULSE_CLIENT_URL.
 * Compatible SSR/CSR.
 */

const DEFAULT_CLIENT_URL = "https://app.getcarpulse.com";

export function getDemoUrl(): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_CARPULSE_CLIENT_URL ??
    DEFAULT_CLIENT_URL;

  return `${baseUrl}/planifier-demo`;
}