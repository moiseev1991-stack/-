/** Canonical site origin for metadata, JSON-LD, and sitemap. */
export const SITE_URL = "https://xn--mgbaac8bf3c9dppecsexff.com";

/**
 * Canonical absolute URL with ASCII-only path (percent-encoded). Avoids
 * `new URL(...).href` returning Unicode in the path, which can break static
 * export / metadata prerender with Arabic segments on Next 16.
 */
export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${encodeURI(p)}`;
}
