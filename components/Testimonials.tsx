import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sophie et Marc D.",
      location: "Annecy, Haute-Savoie",
      text: "Notre maison Lofoten 120 a été montée en 4 semaines chrono ! La qualité de construction est impressionnante et notre facture de chauffage a été divisée par trois. Nous ne regrettons absolument pas notre choix.",
      rating: 5,
    },
    {
      name: "Thomas L.",
      location: "Bordeaux, Gironde",
      text: "L'accompagnement de A à Z nous a vraiment rassurés. Le permis de construire a été obtenu rapidement et le planning a été respecté à la lettre. La transparence des coûts était un vrai plus.",
      rating: 5,
    },
    {
      name: "Émilie R.",
      location: "Lyon, Rhône",
      text: "Je cherchais une maison écologique sans compromis sur le design. Le modèle Bergen 110 était parfait. L'ambiance chaleureuse du bois et la luminosité naturelle rendent chaque journée agréable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils ont choisi NordMaison
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits partout en
            France.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
