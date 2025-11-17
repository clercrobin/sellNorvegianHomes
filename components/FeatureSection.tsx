import { Thermometer, Zap, Clock, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeatureSection() {
  const features = [
    {
      icon: Thermometer,
      title: "Performance énergétique exceptionnelle",
      description:
        "Isolation renforcée et triple vitrage pour des consommations 3 fois inférieures aux normes. Confort thermique optimal hiver comme été.",
    },
    {
      icon: Home,
      title: "Qualité de fabrication en usine",
      description:
        "Préfabrication en Norvège dans des conditions optimales. Précision millimétrique, matériaux premium et contrôles qualité rigoureux.",
    },
    {
      icon: Clock,
      title: "Construction ultra-rapide",
      description:
        "De 4 à 6 mois seulement du permis de construire à la remise des clés. Montage sur site en 3 à 5 semaines, minimisant les aléas de chantier.",
    },
    {
      icon: Zap,
      title: "Design chaleureux et contemporain",
      description:
        "Architecture scandinave intemporelle alliant lignes épurées et matériaux naturels. Espaces lumineux et aérés pour une qualité de vie unique.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi une maison préfabriquée norvégienne ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avantages uniques de nos maisons scandinaves
            adaptées au climat et aux normes françaises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
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
