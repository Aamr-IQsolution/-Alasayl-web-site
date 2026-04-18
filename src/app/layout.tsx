import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Alasayl Transport",
  description: "Professioneel goederenvervoer in Nederland.",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: "Alasayl Transport",
    description: "Professioneel goederenvervoer in Nederland.",
    url: "https://alasayl.nl",
    siteName: "Alasayl Transport",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Alasayl Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alasayl Transport",
    description: "Professioneel goederenvervoer in Nederland.",
    images: ["/images/logo/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${cairo.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
