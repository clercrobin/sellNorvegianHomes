import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] opacity-10 bg-cover bg-center" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fadeIn">
            Votre maison scandinave prête à vivre, assemblée en quelques mois
            en France
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-4 animate-fadeIn stagger-1">
            Maisons préfabriquées norvégiennes alliant performance énergétique
            exceptionnelle, qualité de fabrication et construction rapide.
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-8 animate-fadeIn stagger-2">
            Conformes aux normes françaises RE2020, nos maisons en bois massif
            offrent un confort de vie optimal et des économies d'énergie
            durables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn stagger-3">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/maisons">
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-primary hover:text-white hover:border-primary transition-all">
                Découvrir nos modèles
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-300 animate-fadeIn stagger-4">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">4-6</div>
              <div className="text-sm text-gray-600 mt-1">mois de construction</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">&lt;30</div>
              <div className="text-sm text-gray-600 mt-1">kWh/m²/an</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">RE2020</div>
              <div className="text-sm text-gray-600 mt-1">conforme</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
