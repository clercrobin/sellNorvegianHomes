/**
 * Lead Magnets Configuration
 * These are downloadable PDF guides that capture leads
 */

export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  pages: number;
  category: string;
  thumbnail: string;
  fileName: string; // PDF file name in /public/downloads/
  fileSize: string;
  benefits: string[];
}

export const leadMagnets: LeadMagnet[] = [
  {
    id: "guide-construction-norvegienne",
    title: "Guide complet : Construire sa maison norvégienne en France",
    description:
      "Tout ce qu'il faut savoir pour réussir son projet de A à Z : réglementation, budget, étapes, pièges à éviter.",
    longDescription:
      "Ce guide de 45 pages vous accompagne dans chaque étape de votre projet. Découvrez les secrets d'une construction réussie, les erreurs à éviter, les aides financières disponibles et un calendrier détaillé. Inclus : checklist complète et budget prévisionnel type.",
    pages: 45,
    category: "Construction",
    thumbnail: "/downloads/guide-construction-thumb.jpg",
    fileName: "guide-construction-maison-norvegienne-france.pdf",
    fileSize: "8.5 MB",
    benefits: [
      "Checklist complète des 127 points à vérifier",
      "Budget prévisionnel détaillé par poste",
      "Calendrier type de construction",
      "Liste des 15 pièges à éviter absolument",
      "Modèles de questions à poser aux constructeurs",
      "Guide des aides financières 2024 (PTZ, éco-PTZ...)",
    ],
  },
  {
    id: "economie-energie-re2020",
    title: "RE2020 : Comment économiser 1500€/an sur vos factures",
    description:
      "Décryptage complet de la nouvelle réglementation et stratégies pour maximiser vos économies d'énergie.",
    longDescription:
      "Comprenez en détail la RE2020 et découvrez comment une maison norvégienne vous permet de dépasser largement les normes. Ce guide de 32 pages inclut des simulations personnalisées selon votre région, des comparatifs détaillés et des conseils d'experts pour optimiser votre installation.",
    pages: 32,
    category: "Économie d'énergie",
    thumbnail: "/downloads/economie-energie-thumb.jpg",
    fileName: "guide-re2020-economie-energie.pdf",
    fileSize: "6.2 MB",
    benefits: [
      "Tableau comparatif : maison traditionnelle vs norvégienne",
      "Calcul d'économies personnalisé par région",
      "Guide des équipements (PAC, panneaux solaires, VMC)",
      "Aides et subventions disponibles (jusqu'à 30 000€)",
      "10 astuces pour réduire encore vos factures",
      "Témoignages chiffrés de propriétaires",
    ],
  },
  {
    id: "financement-aides-2024",
    title: "Financement 2024 : Obtenez jusqu'à 30 000€ d'aides",
    description:
      "Guide exhaustif des aides nationales et locales, avec simulations et dossiers types pour maximiser vos subventions.",
    longDescription:
      "Ne laissez pas d'argent sur la table ! Ce guide de 28 pages détaille toutes les aides disponibles en 2024 : PTZ, éco-PTZ, MaPrimeRénov', aides régionales... Inclus : simulateurs, conditions d'éligibilité, dossiers types et calendrier de demande optimal.",
    pages: 28,
    category: "Financement",
    thumbnail: "/downloads/financement-thumb.jpg",
    fileName: "guide-financement-aides-2024.pdf",
    fileSize: "4.8 MB",
    benefits: [
      "Liste complète des 18 aides disponibles",
      "Simulateur d'éligibilité PTZ 2024",
      "Dossiers types pour chaque aide",
      "Calendrier : quand demander quoi",
      "Astuces pour cumuler les aides",
      "Contacts des organismes (ANAH, Ademe...)",
    ],
  },
  {
    id: "terrain-guide-achat",
    title: "Acheter le bon terrain : le guide de l'acheteur averti",
    description:
      "Comment choisir, analyser et négocier votre terrain pour éviter les mauvaises surprises et économiser des milliers d'euros.",
    longDescription:
      "Le terrain représente 30 à 50% de votre budget total. Ce guide de 36 pages vous aide à faire le bon choix. Apprenez à décrypter le PLU, analyser la qualité du sol, négocier le prix et éviter les terrains à risques. Inclus : checklist de visite et modèle de promesse de vente.",
    pages: 36,
    category: "Terrain",
    thumbnail: "/downloads/terrain-thumb.jpg",
    fileName: "guide-achat-terrain-construction.pdf",
    fileSize: "7.1 MB",
    benefits: [
      "Checklist de visite de terrain (42 points)",
      "Comment décrypter un PLU en 10 minutes",
      "Détection des terrains à problèmes (argile, inondation...)",
      "Négociation : économisez 10 à 20% sur le prix",
      "Étude de sol : ce qu'il faut savoir",
      "Modèle de promesse de vente commenté",
    ],
  },
  {
    id: "comparatif-constructeurs",
    title: "Choisir son constructeur : le comparateur indépendant",
    description:
      "Grille d'analyse objective pour comparer les constructeurs, poser les bonnes questions et éviter les arnaques.",
    longDescription:
      "Tous les constructeurs ne se valent pas. Ce guide de 24 pages vous donne une méthodologie claire pour comparer les offres, vérifier la solidité financière d'un constructeur et poser les 50 questions essentielles. Inclus : grille de comparaison Excel et signaux d'alerte.",
    pages: 24,
    category: "Construction",
    thumbnail: "/downloads/comparatif-constructeurs-thumb.jpg",
    fileName: "guide-choix-constructeur-maison.pdf",
    fileSize: "3.9 MB",
    benefits: [
      "Grille de comparaison Excel (20 critères)",
      "50 questions à poser obligatoirement",
      "Comment vérifier la santé financière",
      "10 signaux d'alerte d'un mauvais constructeur",
      "Contrat CCMI : les clauses à surveiller",
      "Checklist garanties et assurances",
    ],
  },
  {
    id: "domotique-maison-connectee",
    title: "Maison connectée : le guide de la domotique intelligente",
    description:
      "Équipez votre maison norvégienne avec les meilleures technologies : chauffage, sécurité, confort, économies.",
    longDescription:
      "La domotique peut vous faire économiser jusqu'à 30% supplémentaires sur vos factures d'énergie. Ce guide de 30 pages présente les équipements essentiels, les installations recommandées et les budgets associés. Inclus : schémas d'installation et configurationstype.",
    pages: 30,
    category: "Équipements",
    thumbnail: "/downloads/domotique-thumb.jpg",
    fileName: "guide-domotique-maison-connectee.pdf",
    fileSize: "9.2 MB",
    benefits: [
      "Sélection des 15 équipements essentiels",
      "Budget domotique : du minimum au haut de gamme",
      "Schémas d'installation détaillés",
      "Programmation type : économies maximales",
      "Compatibilité Google Home / Alexa / HomeKit",
      "Économies réalisables : calcul détaillé",
    ],
  },
];

/**
 * Get a lead magnet by ID
 */
export function getLeadMagnetById(id: string): LeadMagnet | undefined {
  return leadMagnets.find((magnet) => magnet.id === id);
}

/**
 * Get lead magnets by category
 */
export function getLeadMagnetsByCategory(category: string): LeadMagnet[] {
  return leadMagnets.filter((magnet) => magnet.category === category);
}

/**
 * Get all categories
 */
export function getAllLeadMagnetCategories(): string[] {
  const categories = leadMagnets.map((magnet) => magnet.category);
  return Array.from(new Set(categories));
}
