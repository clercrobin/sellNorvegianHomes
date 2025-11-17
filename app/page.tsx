import Link from "next/link";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { HouseCard } from "@/components/HouseCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import { houses } from "@/lib/houses";
import { faqItems } from "@/lib/faq";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredHouses = houses.slice(0, 3);
  const featuredFaqs = faqItems.slice(0, 4);

  return (
    <>
      <Hero />

      <FeatureSection />

      {/* Nos modèles section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos modèles de maisons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De la maison compacte au chalet familial, découvrez nos modèles
              de 80 à 150 m² conçus en Norvège et adaptés au marché français.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredHouses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/maisons">
              <Button size="lg" variant="outline">
                Voir tous nos modèles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <Testimonials />

      {/* FAQ condensée section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir sur nos maisons norvégiennes.
            </p>
          </div>

          <FaqAccordion items={featuredFaqs} />

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline">Voir toutes les questions</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA finale section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parlons de votre projet de maison norvégienne en France
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Nos conseillers sont à votre écoute pour étudier votre projet et
            vous proposer la solution la mieux adaptée à vos besoins et votre
            budget.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100"
            >
              Demander un appel gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
