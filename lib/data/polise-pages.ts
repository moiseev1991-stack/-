/** Legal / info pages: content in /polise; `path` is the real app route (ASCII) for static export. */
export type PolisePageDef = {
  /** Key for content + in-page nav (Arabic segment) */
  slug: string;
  /** Canonical URL path (ASCII), trailing slash for static export */
  path: string;
  /** Filename inside polise/ */
  file: string;
  /** Arabic label: footer anchors, <h1>, in-page nav */
  label: string;
};

export const POLISE_PAGES: PolisePageDef[] = [
  { slug: "من-نحن", path: "/info/about-us/", file: "من-نحن.txt", label: "من نحن" },
  {
    slug: "سياسة-الخصوصية",
    path: "/info/privacy-policy/",
    file: "سياسة-الخصوصية.txt",
    label: "سياسة الخصوصية",
  },
  {
    slug: "سياسة-ملفات-تعريف-الارتباط",
    path: "/info/cookie-policy/",
    file: "سياسة-ملفات-تعريف-الارتباط.txt",
    label: "سياسة ملفات تعريف الارتباط (الكوكيز)",
  },
  {
    slug: "شروط-الاستخدام",
    path: "/info/terms-of-use/",
    file: "شروط-الاستخدام.txt",
    label: "شروط الاستخدام",
  },
  {
    slug: "اخلاء-المسوولية-والمقامرة-المسوولة",
    path: "/info/disclaimer-and-responsible-gaming/",
    file: "اخلاء-المسوولية-والمقامرة-المسوولة.txt",
    label: "إخلاء المسؤولية والمقامرة المسؤولة",
  },
  { slug: "اتصل-بنا", path: "/info/contact-us/", file: "اتصل-بنا_eg.txt", label: "اتصل بنا" },
  {
    slug: "كيف-نقيم-الكازينوهات",
    path: "/info/how-we-rate-casinos/",
    file: "كيف-نقيم-الكازينوهات.txt",
    label: "كيف نقيّم الكازينوهات",
  },
];

const map = new Map<string, PolisePageDef>();
for (const p of POLISE_PAGES) map.set(p.slug, p);

export function getPolisePage(slug: string): PolisePageDef | undefined {
  return map.get(slug);
}
