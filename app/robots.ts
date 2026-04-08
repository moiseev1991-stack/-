import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Use punycode in robots for maximum crawler compatibility.
    sitemap: "https://xn--mgbaac8bf3c9dppecsexff.com/sitemap.xml",
  };
}
