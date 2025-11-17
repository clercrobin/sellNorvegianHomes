import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  content: string;
  readingTime: string;
}

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Get all blog posts sorted by date
 */
export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author || "NordMaison",
        category: data.category || "Construction",
        image: data.image,
        content,
        readingTime: readingTime(content).text,
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || "NordMaison",
      category: data.category || "Construction",
      image: data.image,
      content,
      readingTime: readingTime(content).text,
    } as BlogPost;
  } catch {
    return null;
  }
}

/**
 * Get all blog categories
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category === category);
}
