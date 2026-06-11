import type { FaqItem } from "@/lib/types/casino";
import { absoluteUrl } from "./site";

export const BRAND_NAME_AR = "كازينو عربي أونلاين";

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbListJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: BRAND_NAME_AR,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/favicon.svg"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: BRAND_NAME_AR,
    url: absoluteUrl("/"),
    inLanguage: "ar-EG",
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
  };
}

/**
 * Review schema for casino / brand review pages.
 * `ratingValue` is optional — only emit when a visible rating is shown on the page
 * (otherwise the structured data and the page diverge, which Google may flag).
 */
export function casinoReviewJsonLd(input: {
  brandName: string;
  reviewUrl: string;
  brandUrl?: string;
  ratingValue?: number;
  bestRating?: number;
  reviewBody?: string;
}) {
  const {
    brandName,
    reviewUrl,
    brandUrl,
    ratingValue,
    bestRating = 5,
    reviewBody,
  } = input;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    url: reviewUrl,
    itemReviewed: {
      "@type": "Organization",
      name: brandName,
      ...(brandUrl ? { url: brandUrl } : {}),
    },
    author: {
      "@type": "Organization",
      name: BRAND_NAME_AR,
      url: absoluteUrl("/"),
    },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    ...(ratingValue != null
      ? {
          reviewRating: {
            "@type": "Rating",
            ratingValue,
            bestRating,
            worstRating: 1,
          },
        }
      : {}),
    ...(reviewBody ? { reviewBody } : {}),
  };
}
