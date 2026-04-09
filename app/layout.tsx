import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Avoid static prerender of Arabic-segment routes (InvalidCharacterError in Next 16 on some workers).
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
  verification: {
    google: "CRNURpE3F0v9PhBpEQ40fjedcL2RoIjPfSCCbdwPSCc",
  },
  openGraph: { locale: "ar_EG", type: "website" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} data-site="casino-arabic-online-repo">
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-cairo), Cairo, sans-serif" }}
      >
        <Header />
        <main className="flex-1" aria-label="محتوى الصفحة">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
