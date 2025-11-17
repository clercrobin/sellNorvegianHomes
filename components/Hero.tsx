import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Votre maison scandinave prête à vivre, assemblée en quelques mois
            en France
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Maisons préfabriquées norvégiennes alliant performance énergétique
            exceptionnelle, qualité de fabrication et construction rapide.
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-8">
            Conformes aux normes françaises RE2020, nos maisons en bois massif
            offrent un confort de vie optimal et des économies d'énergie
            durables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/maisons">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Découvrir nos modèles
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-300">
            <div>
              <div className="text-3xl font-bold text-primary">4-6</div>
              <div className="text-sm text-gray-600 mt-1">mois de construction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">&lt;30</div>
              <div className="text-sm text-gray-600 mt-1">kWh/m²/an</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">RE2020</div>
              <div className="text-sm text-gray-600 mt-1">conforme</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
