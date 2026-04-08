import type { Metadata } from "next";
import type { PageSeoBundle } from "@/lib/types/page";
import { SITE_URL } from "./site";

export function pageMetadata(bundle: PageSeoBundle): Metadata {
  const path = bundle.meta.canonicalPath.startsWith("/")
    ? bundle.meta.canonicalPath
    : `/${bundle.meta.canonicalPath}`;
  return {
    title: bundle.meta.title,
    description: bundle.meta.description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      locale: "ar_EG",
      type: "website",
      title: bundle.meta.title,
      description: bundle.meta.description,
      url: `${SITE_URL}${path}`,
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
