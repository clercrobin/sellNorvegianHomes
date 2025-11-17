"use client";

import { useState } from "react";
import { leadMagnets, getAllLeadMagnetCategories } from "@/lib/lead-magnets";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  FileText,
  CheckCircle,
  Mail,
  BookOpen,
  Tag,
  X,
} from "lucide-react";
import Image from "next/image";
import { trackEvent } from "@/components/Analytics";

export default function RessourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const categories = getAllLeadMagnetCategories();

  const filteredMagnets = selectedCategory
    ? leadMagnets.filter((m) => m.category === selectedCategory)
    : leadMagnets;

  const handleDownload = async (magnetId: string) => {
    setSelectedMagnet(magnetId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const magnet = leadMagnets.find((m) => m.id === selectedMagnet);
    if (!magnet) return;

    try {
      // Track download event
      trackEvent("lead_magnet_download", "lead_generation", magnet.title);

      // Send email to capture lead
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          magnetId: selectedMagnet,
          magnetTitle: magnet.title,
        }),
      });

      if (response.ok) {
        setSubmitted(true);

        // Trigger PDF download
        const link = document.createElement("a");
        link.href = `/downloads/${magnet.fileName}`;
        link.download = magnet.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset after 3 seconds
        setTimeout(() => {
          setSelectedMagnet(null);
          setEmail("");
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error downloading lead magnet:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Guides & Ressources Gratuits
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            Téléchargez nos guides complets pour réussir votre projet de maison
            norvégienne. 100% gratuits, aucune obligation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            Tous les guides
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              <Tag className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        {/* Lead Magnets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMagnets.map((magnet) => (
            <Card
              key={magnet.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="h-20 w-20 text-primary/40" />
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary">
                  {magnet.pages} pages
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {magnet.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {magnet.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {magnet.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Ce que vous allez apprendre :
                  </p>
                  <ul className="space-y-1">
                    {magnet.benefits.slice(0, 3).map((benefit, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {magnet.benefits.length > 3 && (
                    <p className="text-sm text-gray-500 mt-1">
                      + {magnet.benefits.length - 3} autres bénéfices
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{magnet.fileSize}</span>
                  <span>PDF</span>
                </div>

                <Button
                  onClick={() => handleDownload(magnet.id)}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger gratuitement
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Download Section */}
        <Card className="mt-16 bg-gradient-to-br from-slate-100 to-slate-50">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi télécharger nos guides ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expertise vérifiée
                </h3>
                <p className="text-gray-600">
                  Rédigés par nos experts après 800+ maisons construites
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  100% gratuit
                </h3>
                <p className="text-gray-600">
                  Aucun paiement, aucune obligation, téléchargement instantané
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Actionnable
                </h3>
                <p className="text-gray-600">
                  Checklists, tableaux Excel, modèles prêts à utiliser
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Download Modal */}
      {selectedMagnet && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Télécharger le guide
                </h3>
                <button
                  onClick={() => {
                    setSelectedMagnet(null);
                    setEmail("");
                    setSubmitted(false);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {!submitted ? (
                <>
                  <p className="text-gray-600 mb-6">
                    Entrez votre email pour recevoir le guide{" "}
                    <strong>
                      {
                        leadMagnets.find((m) => m.id === selectedMagnet)
                          ?.title
                      }
                    </strong>
                    . Le téléchargement démarrera automatiquement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre email
                      </label>
                      <Input
                        type="email"
                        placeholder="votre@email.fr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger maintenant
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Nous respectons votre vie privée. Pas de spam, vous
                      pouvez vous désinscrire à tout moment.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Téléchargement en cours !
                  </h3>
                  <p className="text-gray-600">
                    Le guide a également été envoyé par email. Vérifiez votre
                    boîte de réception.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
