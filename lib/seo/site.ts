/** Canonical site origin for metadata, JSON-LD, and sitemap. */
export const SITE_URL = "https://كازينوعربياونلاين.com";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
