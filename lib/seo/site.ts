/** Canonical site origin for metadata, JSON-LD, and sitemap. */
export const SITE_URL = "https://xn--mgbaac8bf3c9dppecsexff.com";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return new URL(encodeURI(p), SITE_URL).toString();
}
