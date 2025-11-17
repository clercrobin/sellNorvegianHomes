import { getAllPosts, getAllCategories } from "@/lib/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Conseils & Actualités | NordMaison",
  description:
    "Découvrez nos guides, conseils et actualités sur les maisons préfabriquées norvégiennes. Construction écologique, réglementation, inspiration.",
  openGraph: {
    title: "Blog NordMaison - Tout savoir sur les maisons norvégiennes",
    description:
      "Guides complets, conseils d'experts et inspiration pour votre projet de maison préfabriquée.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Blog & Ressources
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            Guides complets, conseils d'experts et inspiration pour votre
            projet de maison norvégienne préfabriquée.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full">
              Tous les articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="rounded-full"
              >
                <Tag className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <Card className="p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Bientôt disponible
            </h3>
            <p className="text-gray-600 mb-6">
              Nous préparons des articles passionnants sur les maisons
              norvégiennes. Revenez bientôt !
            </p>
            <Link href="/contact">
              <Button>
                Contactez-nous pour en savoir plus
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                        Lire plus
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>

                    {post.category && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Nos conseillers sont là pour répondre à toutes vos questions et
              vous accompagner dans la réalisation de votre maison norvégienne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-slate-100"
                >
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link href="/maisons">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Découvrir nos modèles
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
