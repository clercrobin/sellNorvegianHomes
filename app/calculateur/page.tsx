"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Slider } from "react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import {
  Home,
  Bed,
  Bath,
  Zap,
  TrendingUp,
  Calculator,
  Download,
  Mail,
} from "lucide-react";
import { trackEvent } from "@/components/Analytics";

export default function CalculateurPage() {
  // Calculator state
  const [surface, setSurface] = useState(120);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [houseType, setHouseType] = useState<"plain-pied" | "étage" | "chalet">(
    "étage"
  );
  const [region, setRegion] = useState("standard");
  const [options, setOptions] = useState({
    garage: false,
    solarPanels: false,
    terrasse: false,
    finitionsHautDeGamme: false,
  });

  // Lead capture state
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Price calculation
  const basePrice = surface * 1800; // €1800/m² base rate

  const typeMult iplier = {
    "plain-pied": 1.0,
    étage: 1.05,
    chalet: 0.95,
  };

  const regionMultiplier: Record<string, number> = {
    standard: 1.0,
    "ile-de-france": 1.15,
    montagne: 1.08,
    sud: 0.98,
  };

  const optionsPrices = {
    garage: 15000,
    solarPanels: 12000,
    terrasse: 8000,
    finitionsHautDeGamme: surface * 150,
  };

  const housePrice =
    basePrice *
    typeMultiplier[houseType] *
    regionMultiplier[region];

  const optionsTotal = Object.entries(options).reduce((sum, [key, enabled]) => {
    return enabled ? sum + optionsPrices[key as keyof typeof optionsPrices] : sum;
  }, 0);

  const foundation = 12000;
  const raccordements = 5000;
  const totalPrice = housePrice + optionsTotal + foundation + raccordements;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Track event
    trackEvent("calculator_email_submit", "lead_generation", email);

    // Send calculation results via email
    // In production, call your API
    console.log("Email submitted:", email, {
      surface,
      bedrooms,
      bathrooms,
      houseType,
      region,
      options,
      totalPrice,
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Calculator className="h-5 w-5" />
            <span className="font-semibold">Calculateur de Budget</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Estimez le coût de votre maison norvégienne
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Configurez votre projet et obtenez une estimation détaillée en temps
            réel. Prix transparents, sans surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Surface */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">
                      Surface habitable
                    </h3>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {surface} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="200"
                  value={surface}
                  onChange={(e) => setSurface(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>60 m²</span>
                  <span>200 m²</span>
                </div>
              </CardContent>
            </Card>

            {/* Bedrooms & Bathrooms */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Bed className="h-4 w-4 text-primary" />
                      Chambres
                    </label>
                    <Select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(Number(e.target.value))}
                      className="w-full"
                    >
                      <option value={1}>1 chambre</option>
                      <option value={2}>2 chambres</option>
                      <option value={3}>3 chambres</option>
                      <option value={4}>4 chambres</option>
                      <option value={5}>5+ chambres</option>
                    </Select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Bath className="h-4 w-4 text-primary" />
                      Salles de bains
                    </label>
                    <Select
                      value={bathrooms}
                      onChange={(e) => setBathrooms(Number(e.target.value))}
                      className="w-full"
                    >
                      <option value={1}>1 salle de bains</option>
                      <option value={2}>2 salles de bains</option>
                      <option value={3}>3 salles de bains</option>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Type & Region */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Type de maison
                    </label>
                    <Select
                      value={houseType}
                      onChange={(e) =>
                        setHouseType(
                          e.target.value as typeof houseType
                        )
                      }
                      className="w-full"
                    >
                      <option value="plain-pied">Plain-pied</option>
                      <option value="étage">À étage</option>
                      <option value="chalet">Chalet</option>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Région
                    </label>
                    <Select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full"
                    >
                      <option value="standard">France (standard)</option>
                      <option value="ile-de-france">Île-de-France</option>
                      <option value="montagne">Montagne / Alpes</option>
                      <option value="sud">Sud de la France</option>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Options */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Options & équipements
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      key: "garage",
                      label: "Garage intégré",
                      price: 15000,
                    },
                    {
                      key: "solarPanels",
                      label: "Panneaux solaires",
                      price: 12000,
                    },
                    {
                      key: "terrasse",
                      label: "Terrasse en bois (20m²)",
                      price: 8000,
                    },
                    {
                      key: "finitionsHautDeGamme",
                      label: "Finitions haut de gamme",
                      price: surface * 150,
                    },
                  ].map((option) => (
                    <label
                      key={option.key}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={
                            options[option.key as keyof typeof options]
                          }
                          onChange={(e) =>
                            setOptions({
                              ...options,
                              [option.key]: e.target.checked,
                            })
                          }
                          className="w-5 h-5 text-primary rounded"
                        />
                        <span className="font-medium">{option.label}</span>
                      </div>
                      <span className="text-primary font-semibold">
                        +{formatPrice(option.price)}
                      </span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">
                      Estimation totale
                    </h3>
                  </div>

                  <div className="text-4xl font-bold mb-6">
                    {formatPrice(totalPrice)}
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b border-white/20">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Maison ({surface}m²)</span>
                      <span className="font-semibold">
                        {formatPrice(housePrice)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Fondations</span>
                      <span className="font-semibold">
                        {formatPrice(foundation)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Raccordements</span>
                      <span className="font-semibold">
                        {formatPrice(raccordements)}
                      </span>
                    </div>
                    {optionsTotal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Options</span>
                        <span className="font-semibold">
                          {formatPrice(optionsTotal)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 text-sm text-white/80 mb-6">
                    <p>✓ Maison hors d'eau/hors d'air</p>
                    <p>✓ Montage sur votre terrain</p>
                    <p>✓ Garantie décennale incluse</p>
                    <p>✓ Performance énergétique RE2020</p>
                  </div>

                  {!showEmailForm && !submitted && (
                    <Button
                      onClick={() => {
                        setShowEmailForm(true);
                        trackEvent(
                          "calculator_download_clicked",
                          "lead_generation",
                          "budget_calculator"
                        );
                      }}
                      className="w-full bg-white text-primary hover:bg-slate-100"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Recevoir cette estimation par email
                    </Button>
                  )}

                  {showEmailForm && !submitted && (
                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="votre@email.fr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-white text-primary hover:bg-slate-100"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Envoyer l'estimation
                      </Button>
                    </form>
                  )}

                  {submitted && (
                    <div className="bg-white/20 p-4 rounded-lg text-center">
                      <p className="font-semibold mb-2">✅ Envoyé !</p>
                      <p className="text-sm text-white/80">
                        Vous recevrez votre estimation détaillée dans quelques
                        minutes.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Besoin d'aide ?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Nos conseillers peuvent affiner cette estimation selon vos
                    besoins spécifiques.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Demander un devis personnalisé
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto">
          <p>
            * Cette estimation est indicative et basée sur nos prix moyens.
            Le prix final peut varier selon les spécificités de votre terrain,
            les adaptations nécessaires et les finitions choisies. Demandez un
            devis personnalisé pour un chiffrage précis.
          </p>
        </div>
      </div>
    </div>
  );
}
