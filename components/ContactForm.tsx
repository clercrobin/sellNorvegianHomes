"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  prefilledModel?: string;
}

export function ContactForm({ prefilledModel }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    budget: "",
    projectType: prefilledModel || "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          region: "",
          budget: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Impossible de soumettre le formulaire");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === "success") {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Demande envoyée avec succès !
          </h3>
          <p className="text-gray-600 mb-4">
            Merci pour votre intérêt. Nous vous répondrons sous 48h ouvrées.
          </p>
          <Button onClick={() => setStatus("idle")} variant="outline">
            Envoyer une nouvelle demande
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
            <p className="text-red-800">{errorMessage}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Prénom *
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Jean"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nom *
          </label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jean.dupont@email.fr"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Téléphone *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="region"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Région / Département *
        </label>
        <Input
          id="region"
          name="region"
          type="text"
          required
          value={formData.region}
          onChange={handleChange}
          placeholder="Ex: Haute-Savoie (74)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Budget approximatif *
          </label>
          <Select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Sélectionner une fourchette</option>
            <option value="150-200k">150 000 - 200 000 €</option>
            <option value="200-250k">200 000 - 250 000 €</option>
            <option value="250-300k">250 000 - 300 000 €</option>
            <option value="300k+">300 000 € et plus</option>
          </Select>
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Type de projet *
          </label>
          <Select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Sélectionner un type</option>
            <option value="Fjord 90">Modèle Fjord 90</option>
            <option value="Lofoten 120">Modèle Lofoten 120</option>
            <option value="Nordkapp 150">Modèle Nordkapp 150</option>
            <option value="Aurore 80">Modèle Aurore 80</option>
            <option value="Bergen 110">Modèle Bergen 110</option>
            <option value="Tromso 135">Modèle Tromsø 135</option>
            <option value="custom">Projet sur mesure</option>
          </Select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Votre message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez-nous votre projet : terrain, délais souhaités, besoins spécifiques..."
        />
      </div>

      <div className="bg-slate-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Temps de réponse :</strong> Nous vous répondons sous 48h
          ouvrées. Un conseiller prendra contact avec vous pour échanger sur
          votre projet et vous proposer un rendez-vous personnalisé.
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        En soumettant ce formulaire, vous acceptez d'être contacté par
        NordMaison concernant votre projet de construction.
      </p>
    </form>
  );
}
