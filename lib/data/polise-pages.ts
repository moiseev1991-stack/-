/**
 * Legal / info pages. `path` is the public Arabic URL (alias created by add-arabic-aliases.mjs).
 * The actual Next.js app directory is at `app/info/<ascii-slug>/` but users see the Arabic path.
 */
export type PolisePageDef = {
  /** Key for content + in-page nav (Arabic segment) */
  slug: string;
  /** Public-facing Arabic URL path, trailing slash for static export */
  path: string;
  /** Filename inside polise/ */
  file: string;
  /** Arabic label: footer anchors, <h1>, in-page nav */
  label: string;
};

export const POLISE_PAGES: PolisePageDef[] = [
  { slug: "من-نحن", path: "/من-نحن/", file: "من-نحن.txt", label: "من نحن" },
  {
    slug: "سياسة-الخصوصية",
    path: "/سياسة-الخصوصية/",
    file: "سياسة-الخصوصية.txt",
    label: "سياسة الخصوصية",
  },
  {
    slug: "سياسة-ملفات-تعريف-الارتباط",
    path: "/سياسة-ملفات-تعريف-الارتباط/",
    file: "سياسة-ملفات-تعريف-الارتباط.txt",
    label: "سياسة ملفات تعريف الارتباط (الكوكيز)",
  },
  {
    slug: "شروط-الاستخدام",
    path: "/شروط-الاستخدام/",
    file: "شروط-الاستخدام.txt",
    label: "شروط الاستخدام",
  },
  {
    slug: "اخلاء-المسوولية-والمقامرة-المسوولة",
    path: "/اخلاء-المسوولية-والمقامرة-المسوولة/",
    file: "اخلاء-المسوولية-والمقامرة-المسوولة.txt",
    label: "إخلاء المسؤولية والمقامرة المسؤولة",
  },
  { slug: "اتصل-بنا", path: "/اتصل-بنا/", file: "اتصل-بنا_eg.txt", label: "اتصل بنا" },
  {
    slug: "كيف-نقيم-الكازينوهات",
    path: "/كيف-نقيم-الكازينوهات/",
    file: "كيف-نقيم-الكازينوهات.txt",
    label: "كيف نقيّم الكازينوهات",
  },
];

const map = new Map<string, PolisePageDef>();
for (const p of POLISE_PAGES) map.set(p.slug, p);

export function getPolisePage(slug: string): PolisePageDef | undefined {
  return map.get(slug);
}
