/**
 * Image utilities for NordMaison
 * Helper functions for managing house images and fallbacks
 */

export interface ImageSource {
  src: string;
  fallback: string;
  alt: string;
}

/**
 * Get the image source for a house model
 * Returns the real image if available, otherwise a placeholder
 */
export function getHouseImage(slug: string, name: string): ImageSource {
  const realImagePath = `/houses/${slug}.jpg`;
  const fallbackPath = "/placeholder.svg";

  return {
    src: realImagePath,
    fallback: fallbackPath,
    alt: `Maison norvégienne ${name}`,
  };
}

/**
 * Get hero background image
 */
export function getHeroImage(): ImageSource {
  return {
    src: "/hero-bg.jpg",
    fallback: "/placeholder.svg",
    alt: "Maison norvégienne dans un paysage scandinave",
  };
}

/**
 * Get about/process image
 */
export function getPageImage(
  category: "about" | "process",
  name: string
): ImageSource {
  return {
    src: `/${category}/${name}.jpg`,
    fallback: "/placeholder.svg",
    alt: `${category} - ${name}`,
  };
}

/**
 * Generate a beautiful gradient placeholder based on house type
 */
export function getPlaceholderGradient(
  type: "plain-pied" | "étage" | "chalet"
): string {
  const gradients = {
    "plain-pied":
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Purple-blue
    étage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Pink-red
    chalet: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Light blue
  };

  return gradients[type];
}

/**
 * Image sizes for different use cases
 */
export const IMAGE_SIZES = {
  hero: { width: 1920, height: 1080 },
  houseCard: { width: 800, height: 600 },
  houseDetail: { width: 1600, height: 1200 },
  about: { width: 1200, height: 800 },
  process: { width: 1200, height: 800 },
  thumbnail: { width: 400, height: 300 },
};
