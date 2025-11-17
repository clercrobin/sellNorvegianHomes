import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics, MetaPixel } from "@/components/Analytics";
import { LiveChat } from "@/components/LiveChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NordMaison - Maisons Préfabriquées Norvégiennes en France",
  description:
    "Maisons préfabriquées norvégiennes de haute qualité en France. Performance énergétique exceptionnelle, construction rapide et design scandinave. Conformes RE2020.",
  keywords:
    "maison préfabriquée, maison norvégienne, maison bois, construction rapide, maison passive, RE2020, maison scandinave",
  openGraph: {
    title: "NordMaison - Maisons Norvégiennes en France",
    description:
      "Construisez votre maison scandinave en 4-6 mois. Performance énergétique exceptionnelle, qualité norvégienne.",
    type: "website",
    locale: "fr_FR",
    siteName: "NordMaison",
  },
  twitter: {
    card: "summary_large_image",
    title: "NordMaison - Maisons Norvégiennes en France",
    description:
      "Construisez votre maison scandinave en 4-6 mois. Performance énergétique exceptionnelle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Analytics & Tracking */}
        <GoogleAnalytics />
        <MetaPixel />
        <LiveChat />
      </body>
    </html>
  );
}
