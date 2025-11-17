import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact - NordMaison",
  description:
    "Contactez NordMaison pour votre projet de maison norvégienne en France. Demandez un devis gratuit et recevez une réponse sous 48h.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez une réponse
            personnalisée sous 48h ouvrées. Un conseiller NordMaison prendra
            contact avec vous pour échanger sur votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande de devis gratuit
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <a
                        href="mailto:contact@nordmaison.fr"
                        className="text-gray-600 hover:text-primary"
                      >
                        contact@nordmaison.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Téléphone
                      </div>
                      <a
                        href="tel:+33123456789"
                        className="text-gray-600 hover:text-primary"
                      >
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">Zone</div>
                      <div className="text-gray-600">
                        France métropolitaine
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Horaires
                      </div>
                      <div className="text-gray-600">
                        Lun - Ven : 9h - 18h
                        <br />
                        Sam : 10h - 16h
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Ce qui se passe ensuite
                </h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Nous analysons votre demande sous 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>
                      Un conseiller vous contacte pour un premier échange
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>
                      Nous vous proposons un rendez-vous (visio ou sur site)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>Vous recevez une première estimation chiffrée</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-slate-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Besoin d'inspiration ?
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Consultez notre catalogue complet de modèles de maisons
                  norvégiennes.
                </p>
                <a
                  href="/maisons"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Découvrir nos modèles →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
