export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "construction" | "technique" | "financement";
}

export const faqItems: FaqItem[] = [
  {
    question: "Quels sont les délais de construction d'une maison norvégienne ?",
    answer:
      "Le délai total varie entre 4 et 6 mois du dépôt du permis de construire à la remise des clés. La préfabrication en usine en Norvège prend 6 à 8 semaines, le transport 1 à 2 semaines, et le montage sur site seulement 3 à 5 semaines selon le modèle. Les finitions et raccordements nécessitent encore 2 à 3 semaines. C'est 2 à 3 fois plus rapide qu'une construction traditionnelle française.",
    category: "construction",
  },
  {
    question:
      "Les maisons norvégiennes sont-elles conformes aux normes françaises ?",
    answer:
      "Absolument. Toutes nos maisons sont conçues pour respecter la réglementation environnementale RE2020 en vigueur en France. Elles respectent également les DTU (Documents Techniques Unifiés) français et sont conformes aux normes parasismiques et de résistance au vent selon les zones géographiques. Nos partenaires locaux assurent la conformité avec les PLU (Plans Locaux d'Urbanisme) de votre commune.",
    category: "general",
  },
  {
    question: "Dois-je posséder un terrain pour commander une maison ?",
    answer:
      "Pas nécessairement au moment du premier contact. Nous pouvons vous accompagner dans la recherche de terrain et valider sa compatibilité avec le modèle choisi. Cependant, pour engager la fabrication, vous devrez disposer d'un terrain viabilisé avec permis de construire déposé. Nous vous aidons dans toutes ces démarches administratives.",
    category: "general",
  },
  {
    question:
      "Quel est le coût réel d'une maison préfabriquée norvégienne ?",
    answer:
      "Nos prix affichés correspondent à la maison hors d'eau / hors d'air montée sur votre terrain (structure, isolation, menuiseries, toiture). Il faut prévoir en sus : les fondations (8 000 à 15 000 €), les raccordements VRD (variable), les finitions intérieures si non incluses (15 000 à 40 000 € selon standing), et la terrasse extérieure. Au total, comptez environ +25 à 35% du prix de base pour une maison clés en main. Nous fournissons un devis détaillé dès le premier rendez-vous.",
    category: "financement",
  },
  {
    question:
      "Quelle est la performance énergétique de vos maisons ?",
    answer:
      "Nos maisons atteignent systématiquement le label BBC (Bâtiment Basse Consommation) et sont compatibles avec le label Passivhaus. Concrètement, la consommation de chauffage est généralement inférieure à 30 kWh/m²/an, soit 3 à 4 fois moins qu'une maison standard. L'isolation renforcée (240 à 280 mm de laine de bois), le triple vitrage et la ventilation double flux garantissent un confort thermique exceptionnel été comme hiver.",
    category: "technique",
  },
  {
    question: "Puis-je personnaliser le plan de ma maison ?",
    answer:
      "Oui, dans une certaine mesure. Nos modèles standard permettent des adaptations : position des cloisons intérieures, taille et emplacement des ouvertures, choix des revêtements et finitions, ajout d'une terrasse ou d'un garage. Pour des modifications structurelles importantes, nous proposons une prestation sur-mesure avec surcoût. Notre bureau d'études évalue la faisabilité de chaque demande.",
    category: "general",
  },
  {
    question:
      "Qui s'occupe du permis de construire et des démarches administratives ?",
    answer:
      "Nous vous accompagnons de A à Z. Notre architecte partenaire en France réalise le dossier de permis de construire adapté à votre terrain et votre commune (5 000 à 8 000 € selon complexité). Nous gérons aussi les déclarations préalables, le respect des règles d'urbanisme local et la conformité RE2020. Vous restez le demandeur officiel, mais nous prenons en charge toute la partie technique.",
    category: "construction",
  },
  {
    question: "Quelles garanties sont fournies ?",
    answer:
      "Comme toute construction en France, vous bénéficiez de la garantie décennale obligatoire couvrant les dommages compromettant la solidité ou l'habitabilité. Nos constructeurs partenaires sont assurés et certifiés. De plus, nous offrons une garantie de parfait achèvement (1 an) et une garantie biennale sur les équipements (2 ans). La structure bois elle-même est garantie 30 ans contre les défauts de fabrication par le fabricant norvégien.",
    category: "construction",
  },
  {
    question:
      "Comment se passe le financement ? Puis-je obtenir un prêt immobilier ?",
    answer:
      "Oui, nos maisons sont éligibles aux prêts immobiliers classiques, au PTZ (Prêt à Taux Zéro) sous conditions, et aux éco-prêts (Éco-PTZ) grâce à leurs performances énergétiques. Les banques apprécient la qualité de construction et la maîtrise des coûts. Nous fournissons tous les documents nécessaires au montage de dossier : devis détaillé, planning prévisionnel, attestations de conformité. Plusieurs de nos clients ont obtenu des financements à taux préférentiels grâce au label BBC.",
    category: "financement",
  },
  {
    question: "Le bois est-il un matériau durable et résistant ?",
    answer:
      "Le bois utilisé provient de forêts gérées durablement en Norvège (certifications PEFC/FSC) et bénéficie d'un traitement adapté au climat français. Les maisons en bois norvégiennes tiennent facilement 100 ans et plus avec un entretien minimal. Le bois est naturellement résistant, régule l'humidité et offre d'excellentes propriétés mécaniques. En Scandinavie, de nombreuses maisons en bois ont plus de 200 ans. L'entretien du bardage extérieur (lasure ou peinture) se fait tous les 10 à 15 ans.",
    category: "technique",
  },
  {
    question:
      "Que se passe-t-il si j'ai un problème après la construction ?",
    answer:
      "Nous assurons un suivi après-vente avec un interlocuteur dédié. Pendant la première année (garantie de parfait achèvement), toute réserve ou désordre est pris en charge rapidement. Ensuite, la garantie décennale prend le relais. Nos partenaires constructeurs français restent disponibles pour l'entretien, les extensions éventuelles ou les conseils techniques. Vous recevez également un guide d'entretien complet de votre maison en bois.",
    category: "construction",
  },
  {
    question:
      "Puis-je visiter une maison témoin avant de me décider ?",
    answer:
      "Oui, nous organisons régulièrement des visites de maisons témoins et de chantiers en cours dans différentes régions de France. Vous pouvez ainsi constater la qualité de construction, toucher les matériaux et échanger avec des propriétaires. Nous proposons également des visites virtuelles 3D de nos modèles et pouvons vous mettre en relation avec des clients ayant déjà construit. Contactez-nous pour connaître les prochaines portes ouvertes près de chez vous.",
    category: "general",
  },
];

export function getFaqByCategory(
  category: string
): FaqItem[] {
  if (category === "all") return faqItems;
  return faqItems.filter((item) => item.category === category);
}
