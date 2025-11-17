import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getHouseBySlug, houses } from "@/lib/houses";
import { formatPrice } from "@/lib/utils";
import {
  Home,
  Bed,
  Bath,
  ArrowRight,
  CheckCircle2,
  Building2,
  TreePine,
  Clock,
} from "lucide-react";

export async function generateStaticParams() {
  return houses.map((house) => ({
    slug: house.slug,
  }));
}

export default function HouseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const house = getHouseBySlug(params.slug);

  if (!house) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-slate-200 rounded-lg" />

            {/* Info */}
            <div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {house.type}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {house.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{house.subtitle}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">
                    {house.surface} m²
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">
                    {house.bedrooms} chambres
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">
                    {house.bathrooms} salle{house.bathrooms > 1 ? "s" : ""} de
                    bains
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  À partir de {formatPrice(house.price)}
                </div>
                <p className="text-sm text-gray-600">
                  Prix indicatif TTC hors fondations et raccordements
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" className="w-full lg:w-auto">
                  Demander un devis pour ce modèle
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              À propos du modèle {house.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {house.longDescription}
            </p>

            {/* Features */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Points forts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {house.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Ideal for */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Idéal pour
            </h3>
            <div className="space-y-3 mb-12">
              {house.idealFor.map((use, index) => (
                <div key={index} className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>

            {/* Technical details */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Caractéristiques techniques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TreePine className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Isolation</h4>
                      <p className="text-sm text-gray-600">
                        {house.technicalDetails.isolation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Matériaux</h4>
                      <p className="text-sm text-gray-600">
                        {house.technicalDetails.materials}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Home className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Toiture</h4>
                      <p className="text-sm text-gray-600">
                        {house.technicalDetails.roof}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Construction</h4>
                      <p className="text-sm text-gray-600">
                        {house.technicalDetails.construction}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-slate-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Intéressé par ce modèle ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Demandez un devis personnalisé et recevez une étude
                    complète de votre projet sous 48h.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full mb-4">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/maisons">
                    <Button variant="outline" className="w-full">
                      Comparer les modèles
                    </Button>
                  </Link>

                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <h4 className="font-semibold mb-3">Ce qui est inclus :</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Structure complète préfabriquée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Isolation thermique et phonique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Menuiseries triple vitrage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toiture étanche posée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Montage sur votre terrain</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
