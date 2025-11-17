/**
 * Structured Data (JSON-LD) components for SEO
 * Helps search engines understand page content for rich snippets
 */

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationSchema({
  name = "NordMaison",
  url = "https://nordmaison.fr",
  logo = "https://nordmaison.fr/logo.png",
  description = "Construction de maisons préfabriquées norvégiennes en France. Haute performance énergétique, construction rapide, qualité scandinave.",
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      availableLanguage: ["French"],
    },
    sameAs: [
      "https://www.facebook.com/nordmaison",
      "https://www.instagram.com/nordmaison",
      "https://www.linkedin.com/company/nordmaison",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  brand?: string;
  category?: string;
}

export function ProductSchema({
  name,
  description,
  image,
  price,
  brand = "NordMaison",
  category = "Construction",
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: typeof window !== "undefined" ? window.location.href : "",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "NordMaison",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "NordMaison",
      logo: {
        "@type": "ImageObject",
        url: "https://nordmaison.fr/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
}

export function LocalBusinessSchema({
  name = "NordMaison",
  description = "Construction de maisons préfabriquées norvégiennes en France",
  telephone = "+33 1 XX XX XX XX",
  email = "contact@nordmaison.fr",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    priceRange: "€€€",
    openingHours: "Mo-Fr 09:00-18:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
