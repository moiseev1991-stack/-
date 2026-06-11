import type { Metadata } from "next";
import type { PageSeoBundle } from "@/lib/types/page";
import { absoluteUrl } from "./site";

export function pageMetadata(bundle: PageSeoBundle): Metadata {
  const path = bundle.meta.canonicalPath.startsWith("/")
    ? bundle.meta.canonicalPath
    : `/${bundle.meta.canonicalPath}`;
  // absoluteUrl() percent-encodes Arabic segments so the canonical and og:url
  // stay ASCII-safe across crawlers and social-card parsers.
  const canonical = absoluteUrl(path);
  return {
    title: bundle.meta.title,
    description: bundle.meta.description,
    alternates: { canonical },
    openGraph: {
      locale: "ar_EG",
      type: "website",
      title: bundle.meta.title,
      description: bundle.meta.description,
      url: canonical,
    },
  };
}

export function jsonLdBreadcrumbFromHero(
  items: { label: string; href: string }[]
) {
  return items.map((i) => ({
    name: i.label,
    path: i.href === "/" ? "/" : i.href.replace(/\/?$/, "/"),
  }));
}
