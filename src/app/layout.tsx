import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";

import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TKZ E-SPORTS | Comunidade Competitiva desde 2014",
    template: "%s | TKZ E-SPORTS",
  },
  description:
    "Comunidade competitiva de Teresina que conecta atletas, criadores e fãs desde 2014. League of Legends, Wild Rift, TFT e eFootball.",
  keywords: ["TKZ", "E-sports", "League of Legends", "Piauí", "Teresina", "comunidade gamer", "competitivo"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "TKZ E-SPORTS",
    title: "TKZ E-SPORTS | Comunidade Competitiva desde 2014",
    description:
      "De Teresina para o competitivo: comunidade, atletas e criadores unidos desde 2014.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "TKZ E-SPORTS — Comunidade Competitiva" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TKZ E-SPORTS | Comunidade Competitiva desde 2014",
    description: "De Teresina para o competitivo: comunidade, atletas e criadores unidos desde 2014.",
    images: ["/images/og-image.png"],
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
    <html lang="pt-BR" className={`${rajdhani.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SportsTeam", "Organization"],
              name: "TKZ E-Sports",
              alternateName: "TKZ",
              url: "https://tkzesports.com.br",
              sport: "Esports",
              foundingDate: "2014",
              logo: "https://tkzesports.com.br/images/LogoTKZ.png",
              description:
                "Comunidade competitiva de Teresina que conecta atletas, criadores e fãs desde 2014. League of Legends, Wild Rift, TFT e eFootball.",
              location: {
                "@type": "Place",
                name: "Teresina",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Teresina",
                  addressRegion: "Piauí",
                  addressCountry: "BR",
                },
              },
              sameAs: [
                "https://www.instagram.com/esportstkz/",
                "https://discord.gg/5CnzeWUJPG",
              ],
            }),
          }}
        />
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
