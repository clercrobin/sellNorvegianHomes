"use client";

import { useState } from "react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { faqItems, getFaqByCategory } from "@/lib/faq";
import { ArrowRight } from "lucide-react";

export default function FaqPage() {
  const [category, setCategory] = useState<string>("all");

  const filteredFaqs = getFaqByCategory(category);

  const categories = [
    { value: "all", label: "Toutes les questions" },
    { value: "general", label: "Questions générales" },
    { value: "construction", label: "Construction & délais" },
    { value: "technique", label: "Aspects techniques" },
    { value: "financement", label: "Financement" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos maisons préfabriquées
              norvégiennes. Si vous ne trouvez pas la réponse à votre question,
              n'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat.value
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-gray-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <FaqAccordion items={filteredFaqs} />

        <div className="mt-8 text-center text-gray-600">
          <p>
            {filteredFaqs.length} question
            {filteredFaqs.length > 1 ? "s" : ""} affichée
            {filteredFaqs.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nos conseillers sont à votre disposition pour répondre à toutes vos
            interrogations et vous accompagner dans votre projet.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Nous contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
