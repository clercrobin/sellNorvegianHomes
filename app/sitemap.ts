import { MetadataRoute } from "next";
import { houses } from "@/lib/houses";
import { getAllPosts } from "@/lib/blog";
import { leadMagnets } from "@/lib/lead-magnets";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nordmaison.fr";

  // Static pages
  const staticPages = [
    "",
    "/maisons",
    "/a-propos",
    "/processus",
    "/faq",
    "/contact",
    "/blog",
    "/ressources",
    "/calculateur",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // House model pages
  const housePages = houses.map((house) => ({
    url: `${baseUrl}/maisons/${house.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = getAllPosts();
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error getting blog posts for sitemap:", error);
  }

  return [...staticPages, ...housePages, ...blogPages];
}
