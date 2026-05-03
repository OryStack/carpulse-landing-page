/**
 * URL de la page « Planifier une démo » dans l'app, en fonction du domaine courant.
 *
 * - getcarpulse.com         → app.getcarpulse.com/planifier-demo
 * - dev.getcarpulse.com     → dev-app.getcarpulse.com/planifier-demo
 * - staging.getcarpulse.com → staging-app.getcarpulse.com/planifier-demo
 * - localhost / autre       → app.getcarpulse.com/planifier-demo (fallback)
 *
 * Côté serveur (SSR/SSG) on retourne le fallback — le client met à jour
 * via le hook `useDemoUrl` après hydratation.
 */
export function getDemoUrl(): string {
  const PATH = "/planifier-demo";
  const FALLBACK_HOST = "app.getcarpulse.com";

  if (typeof window === "undefined") {
    return `https://${FALLBACK_HOST}${PATH}`;
  }

  const host = window.location.hostname;

  if (host === "getcarpulse.com" || host === "www.getcarpulse.com") {
    return `https://app.getcarpulse.com${PATH}`;
  }

  if (host.endsWith(".getcarpulse.com")) {
    const subdomain = host.slice(0, host.indexOf("."));
    return `https://${subdomain}-app.getcarpulse.com${PATH}`;
  }

  return `https://${FALLBACK_HOST}${PATH}`;
}
