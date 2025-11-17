import { CheckCircle2 } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      title: "Premier échange et étude de votre projet",
      description:
        "Nous analysons vos besoins, votre terrain et votre budget. Présentation de nos modèles et première estimation chiffrée gratuite.",
    },
    {
      title: "Conception et adaptation au terrain",
      description:
        "Notre architecte adapte le modèle choisi à votre terrain et aux contraintes locales. Préparation du dossier de permis de construire.",
    },
    {
      title: "Préfabrication en usine en Norvège",
      description:
        "Fabrication de votre maison dans nos ateliers norvégiens selon les standards les plus exigeants. Contrôles qualité à chaque étape.",
    },
    {
      title: "Transport et montage en France",
      description:
        "Livraison des modules sur votre terrain. Montage par nos équipes partenaires françaises en 3 à 5 semaines seulement.",
    },
    {
      title: "Finitions et raccordements",
      description:
        "Travaux de finitions intérieures, raccordements aux réseaux et aménagements extérieurs selon votre cahier des charges.",
    },
    {
      title: "Remise des clés et suivi",
      description:
        "Visite finale, réception de votre maison et remise des clés. Accompagnement et garanties pour votre tranquillité d'esprit.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent, du premier contact à la remise
            des clés.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative pb-12 last:pb-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/20" />
              )}

              <div className="relative flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow pt-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-sm text-primary font-semibold mb-2">
                      Étape {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
