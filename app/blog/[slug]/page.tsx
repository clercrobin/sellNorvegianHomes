import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Mail,
} from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

// MDX Components
const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3" {...props} />
  ),
  p: (props: any) => <p className="text-lg text-gray-700 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="text-lg text-gray-700" {...props} />,
  a: (props: any) => (
    <a
      className="text-primary hover:text-primary/80 underline font-medium"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-gray-700 my-6"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-slate-100 px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article non trouvé | NordMaison",
    };
  }

  return {
    title: `${post.title} | Blog NordMaison`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
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
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-white/90">{post.description}</p>

          {post.category && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-1 bg-white/20 px-4 py-2 rounded-full">
                <Tag className="h-4 w-4" />
                {post.category}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="relative h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">
                  Partager cet article :
                </span>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-br from-primary to-primary/80 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Une question sur votre projet ?
            </h2>
            <p className="text-white/90 mb-6">
              Nos experts sont là pour vous conseiller et répondre à toutes vos
              questions.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-slate-100"
              >
                Demander un devis gratuit
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Continuer la lecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Voir tous les articles
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Découvrez tous nos guides et conseils
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/maisons">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Nos modèles de maisons
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explorez notre catalogue complet
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
