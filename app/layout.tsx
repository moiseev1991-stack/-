import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Avoid static prerender of Arabic-segment routes (redirect pages) — triggers InvalidCharacterError in Next 16
export const dynamic = "force-dynamic";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أفضل كازينوهات الإنترنت المصرية لعام 2026 | كازينو عربي أونلاين",
  description:
    "اكتشف أفضل كازينوهات الإنترنت للاعبين المصريين. مكافآت ضخمة، سحب سريع، وألعاب متنوعة. تقييمات موثوقة من خبراء الكازينو.",
  openGraph: { locale: "ar_EG", type: "website" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} data-site="casino-arabic-online-repo">
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-cairo), Cairo, sans-serif" }}
      >
        <Header />
        <main className="flex-1">
          <h2 className="sr-only">أقسام الصفحة</h2>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
