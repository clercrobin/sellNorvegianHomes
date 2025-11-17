import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileText,
  Hammer,
  Truck,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Notre processus - NordMaison",
  description:
    "Découvrez les étapes de construction de votre maison norvégienne en France. Du premier contact à la remise des clés en 4 à 6 mois.",
};

export default function ProcessusPage() {
  const timeline = [
    {
      phase: "Phase 1 : Étude et conception",
      duration: "2 à 4 semaines",
      steps: [
        "Premier rendez-vous gratuit (visio ou sur site)",
        "Analyse de votre terrain et contraintes locales",
        "Présentation détaillée des modèles et options",
        "Première estimation budgétaire complète",
        "Signature du contrat d'étude",
        "Adaptation du plan à votre terrain",
        "Constitution du dossier de permis de construire",
      ],
    },
    {
      phase: "Phase 2 : Validation administrative",
      duration: "2 à 3 mois",
      steps: [
        "Dépôt du permis de construire en mairie",
        "Instruction du dossier par les services",
        "Obtention du permis (délai légal 2 mois)",
        "Affichage du permis sur le terrain",
        "Finalisation du financement bancaire",
        "Validation technique finale avec le fabricant",
      ],
    },
    {
      phase: "Phase 3 : Fabrication en Norvège",
      duration: "6 à 8 semaines",
      steps: [
        "Lancement de la production en usine",
        "Découpe et assemblage des modules",
        "Intégration de l'isolation et des menuiseries",
        "Contrôles qualité à chaque étape",
        "Préparation pour le transport",
        "Suivi photo de l'avancement (envoyé au client)",
      ],
    },
    {
      phase: "Phase 4 : Préparation du terrain",
      duration: "2 à 3 semaines",
      steps: [
        "Terrassement et nivellement",
        "Réalisation des fondations (dalle ou vide sanitaire)",
        "Raccordements provisoires (eau, électricité)",
        "Contrôle technique avant livraison",
        "Préparation de la zone de déchargement",
      ],
    },
    {
      phase: "Phase 5 : Montage sur site",
      duration: "3 à 5 semaines",
      steps: [
        "Transport des modules depuis la Norvège",
        "Déchargement et positionnement des modules",
        "Assemblage de la structure complète",
        "Pose de la toiture et étanchéité",
        "Installation des menuiseries extérieures",
        "Mise hors d'eau / hors d'air",
      ],
    },
    {
      phase: "Phase 6 : Finitions et livraison",
      duration: "3 à 4 semaines",
      steps: [
        "Raccordements définitifs (eau, électricité, assainissement)",
        "Finitions intérieures (peinture, sols, équipements)",
        "Installation du système de chauffage",
        "Tests et mise en service",
        "Visite de réception avec levée des réserves",
        "Remise des clés et documents (garanties, notices)",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Un processus transparent et maîtrisé
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              De la première prise de contact à la remise des clés, nous vous
              accompagnons à chaque étape avec rigueur et transparence.
            </p>

            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
              <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">
                  Délai total moyen
                </div>
                <div className="text-2xl font-bold text-primary">
                  4 à 6 mois
                </div>
                <div className="text-sm text-gray-600">
                  Du permis de construire à la remise des clés
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual timeline */}
      <ProcessTimeline />

      {/* Detailed timeline */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Détail des étapes
            </h2>
            <p className="text-lg text-gray-600">
              Un suivi précis pour une totale tranquillité d'esprit.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {phase.phase}
                    </h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Key advantages */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Les avantages de notre méthode
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Planning respecté
                </h3>
                <p className="text-gray-600">
                  La préfabrication en usine élimine les aléas météo et assure
                  le respect des délais annoncés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Qualité garantie
                </h3>
                <p className="text-gray-600">
                  Fabrication en conditions optimales avec contrôles qualité
                  stricts à chaque étape de production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Chantier propre</h3>
                <p className="text-gray-600">
                  Montage rapide en 3 à 5 semaines seulement. Moins de
                  nuisances pour le voisinage et l'environnement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour un premier échange gratuit et sans engagement.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Demander un rendez-vous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
