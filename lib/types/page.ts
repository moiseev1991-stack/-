import type { ReactNode } from "react";
import type { FaqItem } from "./casino";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageHeroData {
  h1: string;
  description: string | ReactNode;
  breadcrumb: BreadcrumbItem[];
  /** 2–4 benefit lines */
  benefits?: string[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

/** `icon` is a key for `<SiteIcon name={...} />` (see `components/common/SiteIcon.tsx`). */
export interface InfoCardItem {
  icon: string;
  title: string;
  text: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
}

/** Shared shape for page copy + SEO: metadata, hero, FAQ. */
export interface PageSeoBundle {
  meta: PageMeta;
  hero: PageHeroData;
  faq: FaqItem[];
}
