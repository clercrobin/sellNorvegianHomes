import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  Globe,
  Users,
  TreePine,
  ArrowRight,
  Heart,
} from "lucide-react";

export const metadata = {
  title: "À propos - NordMaison",
  description:
    "Découvrez NordMaison, spécialiste des maisons préfabriquées norvégiennes en France. Notre mission, nos valeurs et notre engagement pour une construction durable.",
};

export default function AProposPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence norvégienne",
      description:
        "Nous travaillons avec des fabricants norvégiens reconnus pour leur savoir-faire centenaire et leurs standards de qualité parmi les plus élevés au monde.",
    },
    {
      icon: TreePine,
      title: "Engagement écologique",
      description:
        "Bois issus de forêts gérées durablement, performance énergétique passive, faible empreinte carbone : nos maisons respectent la planète.",
    },
    {
      icon: Users,
      title: "Accompagnement humain",
      description:
        "Un interlocuteur dédié du premier contact à la remise des clés. Nous vous guidons à chaque étape avec transparence et bienveillance.",
    },
    {
      icon: Globe,
      title: "Ancrage local",
      description:
        "Nos partenaires français assurent le montage, les finitions et le suivi de chantier. Nous créons des emplois locaux et respectons les normes françaises.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              L'excellence norvégienne au service de votre projet en France
            </h1>
            <p className="text-xl text-gray-600">
              NordMaison est né d'une passion pour l'architecture scandinave et
              d'une conviction : les Français méritent des maisons aussi
              performantes, durables et confortables que celles construites en
              Norvège.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre histoire
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Après avoir découvert la qualité exceptionnelle des maisons en
                bois norvégiennes lors de plusieurs voyages en Scandinavie,
                nous avons décidé en 2018 de rendre cette excellence accessible
                aux familles françaises.
              </p>
              <p>
                Nous avons noué des partenariats solides avec des fabricants
                norvégiens de référence, certifiés et reconnus depuis plusieurs
                générations. Parallèlement, nous avons constitué un réseau de
                partenaires français (architectes, constructeurs, artisans) pour
                assurer un service complet et conforme aux réglementations
                locales.
              </p>
              <p>
                Aujourd'hui, nous avons accompagné plus de 150 familles dans
                toute la France pour concrétiser leur rêve de maison
                scandinave. Chaque projet est unique, mais tous partagent la
                même promesse : qualité, rapidité et performance énergétique.
              </p>
            </div>
          </div>

          <div className="aspect-video bg-slate-200 rounded-lg" />
        </div>
      </div>

      {/* Values */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui nous guide au quotidien dans l'accompagnement de vos
              projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-6">
            <Heart className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Notre mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rendre accessible à tous les Français la possibilité de vivre
                dans une maison performante, saine et respectueuse de
                l'environnement. Nous voulons démocratiser l'habitat passif et
                prouver qu'il est possible de construire rapidement, à un coût
                maîtrisé, sans sacrifier la qualité ni le confort.
              </p>
              <p className="text-gray-700">
                Chaque maison que nous livrons est une étape vers un avenir où
                l'habitat sera sobre en énergie, durable dans le temps et
                agréable à vivre au quotidien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à construire votre maison norvégienne ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Parlons de votre projet et voyons ensemble comment NordMaison peut
            vous accompagner.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Demander un premier rendez-vous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
