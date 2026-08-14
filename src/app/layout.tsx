import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollTopOnLoad from "@/components/ScrollTopOnLoad";
import { LanguageProvider } from "@/lib/language";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anton Maynik — Lead Graphic Designer",
  description:
    "Создаю визуальные решения для брендов, цифровых продуктов и маркетинговых коммуникаций. Ведущий дизайнер отдела маркетинга Globalnet и GNM.",
  openGraph: {
    title: "Anton Maynik — Lead Graphic Designer",
    description:
      "Визуальные решения для брендов, цифровых продуктов и маркетинговых коммуникаций.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <noscript>
          {/* Without JS the reveal observer never runs — show everything. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <LanguageProvider>
          <ScrollTopOnLoad />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
