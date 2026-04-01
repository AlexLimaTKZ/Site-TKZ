import type { Metadata } from "next";
import { Inter, Bebas_Neue, Permanent_Marker } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";

import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TKZ E-SPORTS | Organização de E-Sports Competitivo",
    template: "%s | TKZ E-SPORTS",
  },
  description:
    "A organização de e-sports que está revolucionando o cenário competitivo brasileiro. League of Legends, Wild Rift, TFT e eFootball.",
  keywords: ["TKZ", "E-sports", "League of Legends", "Piauí", "Teresina", "organização", "competitivo"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "TKZ E-SPORTS",
    title: "TKZ E-SPORTS | Organização de E-Sports Competitivo",
    description:
      "A organização de e-sports que está revolucionando o cenário competitivo brasileiro.",
    images: [{ url: "/images/LogoTKZ.png", width: 512, height: 512, alt: "Logo TKZ E-SPORTS" }],
  },
  icons: {
    icon: "/images/LogoTKZ.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable} ${permanentMarker.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <CTABanner />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
