import type { FaqItem } from "@/lib/types/casino";
import { breadcrumbListJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";

interface Props {
  faq: FaqItem[];
  breadcrumbNames: { name: string; path: string }[];
}

export default function JsonLd({ faq, breadcrumbNames }: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListJsonLd(breadcrumbNames)),
        }}
      />
    </>
  );
}
