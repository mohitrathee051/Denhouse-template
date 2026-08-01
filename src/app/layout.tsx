import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import FloatingCall from "@/components/FloatingCall";
import ScrollTop from "@/components/ScrollTop";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium PG & Real Estate in India`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "PG accommodation",
    "paying guest",
    "real estate India",
    "buy property",
    "rent apartment",
    "Denhouse Group",
    "co-living",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium PG & Real Estate in India`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/logos/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium PG & Real Estate in India`,
    description: SITE_DESCRIPTION,
    images: ["/images/logos/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsapp />
        <FloatingCall />
        <ScrollTop />
      </body>
    </html>
  );
}
