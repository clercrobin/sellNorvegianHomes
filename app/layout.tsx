import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NordMaison - Maisons Préfabriquées Norvégiennes en France",
  description:
    "Maisons préfabriquées norvégiennes de haute qualité en France. Performance énergétique exceptionnelle, construction rapide et design scandinave. Conformes RE2020.",
  keywords:
    "maison préfabriquée, maison norvégienne, maison bois, construction rapide, maison passive, RE2020, maison scandinave",
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
      </body>
    </html>
  );
}
