export interface House {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  surface: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  type: "plain-pied" | "étage" | "chalet";
  features: string[];
  idealFor: string[];
  technicalDetails: {
    isolation: string;
    materials: string;
    roof: string;
    construction: string;
  };
  imageUrl: string;
}

export const houses: House[] = [
  {
    id: "1",
    slug: "fjord-90",
    name: "Fjord 90",
    subtitle: "Maison plain-pied contemporaine",
    description:
      "Maison de plain-pied idéale pour un couple ou une petite famille. Design épuré et performance énergétique exceptionnelle.",
    longDescription:
      "Le modèle Fjord 90 incarne l'essence du design scandinave : simplicité, fonctionnalité et harmonie avec la nature. Cette maison de plain-pied de 90 m² offre un espace de vie ouvert et lumineux, avec de grandes baies vitrées orientées sud pour maximiser les apports solaires passifs. La construction en bois massif garantit une isolation thermique et phonique remarquable, tandis que le système de ventilation double flux assure un air intérieur sain toute l'année.",
    surface: 90,
    bedrooms: 2,
    bathrooms: 1,
    price: 185000,
    type: "plain-pied",
    features: [
      "Isolation renforcée (épaisseur 240mm)",
      "Triple vitrage avec gaz argon",
      "Ventilation double flux avec récupération de chaleur",
      "Bardage en bois certifié PEFC",
      "Chauffage par pompe à chaleur air/eau",
      "Panneaux solaires en option",
    ],
    idealFor: [
      "Couple recherchant une résidence principale économe en énergie",
      "Retraités souhaitant une maison de plain-pied sans entretien",
      "Primo-accédants avec un budget maîtrisé",
    ],
    technicalDetails: {
      isolation:
        "Laine de bois 240mm en murs, 300mm en toiture. Coefficient thermique U = 0.15 W/m²K",
      materials:
        "Structure en bois massif d'épicéa, bardage en mélèze, menuiseries en pin scandinave",
      roof: "Toit mono-pente avec étanchéité EPDM ou toit à double pente avec couverture bac acier",
      construction:
        "Préfabrication en usine en Norvège, montage sur site en 3 à 4 semaines",
    },
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    slug: "lofoten-120",
    name: "Lofoten 120",
    subtitle: "Maison familiale à étage",
    description:
      "Spacieuse maison à étage de 120 m² avec 3 chambres. Parfaite pour une famille, alliant confort et efficacité énergétique.",
    longDescription:
      "Le Lofoten 120 est conçu pour les familles modernes qui recherchent espace et confort sans compromis sur la performance énergétique. Avec ses 120 m² répartis sur deux niveaux, cette maison offre un rez-de-chaussée entièrement dédié aux espaces de vie (salon, cuisine, salle à manger) et un étage privatif avec trois chambres et une salle de bains familiale. Les matériaux naturels et la construction en bois massif créent une atmosphère chaleureuse et saine.",
    surface: 120,
    bedrooms: 3,
    bathrooms: 2,
    price: 245000,
    type: "étage",
    features: [
      "Espace de vie ouvert de 45 m² avec cuisine américaine",
      "3 chambres dont une suite parentale avec salle d'eau",
      "Isolation thermique renforcée conforme RE2020",
      "Grandes terrasses en bois composite",
      "Système de récupération des eaux de pluie",
      "Pré-équipement pour borne de recharge électrique",
    ],
    idealFor: [
      "Familles avec 2 enfants cherchant une maison durable",
      "Télétravailleurs nécessitant un bureau à domicile",
      "Propriétaires soucieux de réduire leur empreinte carbone",
    ],
    technicalDetails: {
      isolation:
        "Laine de bois 260mm en murs, 320mm en toiture. Étanchéité à l'air testée < 0.6 m³/h.m²",
      materials:
        "Ossature bois Douglas, bardage claire-voie en red cedar, planchers en pin massif",
      roof: "Toiture à double pente 35°, couverture en tuiles photovoltaïques disponibles",
      construction:
        "Modules préfabriqués en Norvège, assemblage en 4 à 5 semaines sur dalle béton ou vide sanitaire",
    },
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    slug: "nordkapp-150",
    name: "Nordkapp 150",
    subtitle: "Grande maison familiale premium",
    description:
      "Maison haut de gamme de 150 m² avec 4 chambres. Volumes généreux et prestations premium pour un confort optimal.",
    longDescription:
      "Le Nordkapp 150 représente le summum de notre savoir-faire norvégien. Cette grande maison de 150 m² allie espace, luminosité et technologies de pointe pour offrir un confort de vie exceptionnel. Chaque détail a été pensé pour créer un cocon familial où il fait bon vivre en toutes saisons. Les larges ouvertures sur l'extérieur, la hauteur sous plafond généreuse et les finitions soignées en font une résidence d'exception.",
    surface: 150,
    bedrooms: 4,
    bathrooms: 2,
    price: 325000,
    type: "étage",
    features: [
      "Suite parentale de 25 m² avec dressing et salle de bains privative",
      "Salon cathédrale avec poutres apparentes",
      "Cuisine équipée haut de gamme incluse",
      "Bureau / chambre d'amis au rez-de-chaussée",
      "Double garage intégré en option",
      "Domotique et gestion énergétique intelligente",
    ],
    idealFor: [
      "Familles nombreuses recherchant confort et espace",
      "Propriétaires souhaitant une maison haut de gamme éco-responsable",
      "Projets de résidence principale avec budget confortable",
    ],
    technicalDetails: {
      isolation:
        "Triple isolation : laine de bois 280mm + fibre de bois 60mm extérieur. Performance passive",
      materials:
        "Bois massif certifié FSC, bardage en bois brûlé technique Shou Sugi Ban, menuiseries alu-bois",
      roof: "Charpente traditionnelle ou fermettes, couverture zinc ou ardoise naturelle",
      construction:
        "Fabrication sur mesure en Norvège, transport et montage en 5 à 6 semaines",
    },
    imageUrl: "/placeholder.svg",
  },
  {
    id: "4",
    slug: "aurore-80",
    name: "Aurore 80",
    subtitle: "Chalet cosy et compact",
    description:
      "Chalet de 80 m² au charme authentique. Idéal pour une résidence secondaire ou une maison de campagne.",
    longDescription:
      "L'Aurore 80 capture l'essence du chalet scandinave traditionnel dans un format compact et moderne. Avec ses 80 m² intelligemment agencés, ce modèle offre tout le confort nécessaire pour un couple ou une petite famille. L'ambiance chaleureuse créée par le bois omniprésent et le poêle à bois central en fait un refuge parfait pour les week-ends et les vacances en pleine nature.",
    surface: 80,
    bedrooms: 2,
    bathrooms: 1,
    price: 165000,
    type: "chalet",
    features: [
      "Architecture chalet avec toit à forte pente",
      "Poêle à bois scandinave inclus",
      "Mezzanine avec coin lecture / couchage d'appoint",
      "Grande terrasse couverte en bois",
      "Isolation adaptée aux climats montagnards",
      "Kit solaire autonome en option",
    ],
    idealFor: [
      "Résidence secondaire à la montagne ou en campagne",
      "Couple recherchant une tiny house de qualité",
      "Projet de gîte ou location saisonnière",
    ],
    technicalDetails: {
      isolation:
        "Laine de roche 220mm murs, 280mm toiture. Résistance renforcée à l'humidité",
      materials:
        "Madriers empilés en pin nordique, double peau intérieure, bardage naturel non traité",
      roof: "Toit à 2 pentes 45°, couverture shingle bitumé ou bac acier imitation tuile",
      construction:
        "Pré-découpe en Norvège, kit livré et monté en 2 à 3 semaines",
    },
    imageUrl: "/placeholder.svg",
  },
  {
    id: "5",
    slug: "bergen-110",
    name: "Bergen 110",
    subtitle: "Maison moderne à étage",
    description:
      "Maison contemporaine de 110 m² avec 3 chambres. Design moderne et fonctionnel pour une vie quotidienne facilitée.",
    longDescription:
      "Le Bergen 110 marie architecture contemporaine et traditions constructives norvégiennes. Cette maison à étage de 110 m² se distingue par ses lignes épurées, ses grandes ouvertures et son agencement intelligent. Le rez-de-chaussée accueille un espace de vie fluide et lumineux, tandis que l'étage abrite trois chambres confortables et une salle de bains familiale. C'est le choix idéal pour les familles modernes qui apprécient le design sans fioritures et la qualité de construction.",
    surface: 110,
    bedrooms: 3,
    bathrooms: 1,
    price: 225000,
    type: "étage",
    features: [
      "Architecture cubique avec toit plat ou mono-pente",
      "Baies vitrées coulissantes XXL",
      "Cuisine ouverte avec îlot central",
      "Cellier / buanderie intégré",
      "Isolation phonique renforcée entre étages",
      "Carport en bois intégré à l'architecture",
    ],
    idealFor: [
      "Familles urbaines ou péri-urbaines",
      "Amateurs d'architecture contemporaine minimaliste",
      "Projets sur petits terrains nécessitant optimisation",
    ],
    technicalDetails: {
      isolation:
        "Laine de bois 250mm murs, 310mm toiture. Traitement des ponts thermiques optimisé",
      materials:
        "Ossature bois lamellé-collé, bardage composite ou crépi sur isolant, menuiseries aluminium",
      roof: "Toit plat végétalisé ou mono-pente avec relevé étanchéité membrane TPO",
      construction:
        "Modules fabriqués en Norvège, montage express en 3 semaines, finitions 2 semaines",
    },
    imageUrl: "/placeholder.svg",
  },
  {
    id: "6",
    slug: "tromso-135",
    name: "Tromsø 135",
    subtitle: "Maison familiale grand confort",
    description:
      "Maison spacieuse de 135 m² avec 4 chambres. Équilibre parfait entre espace, confort et efficience énergétique.",
    longDescription:
      "Le Tromsø 135 incarne la maison familiale idéale : suffisamment spacieuse pour accueillir confortablement 4 à 6 personnes, mais sans excès pour maîtriser les coûts de construction et d'exploitation. Avec ses 135 m², elle offre toutes les pièces nécessaires à une vie familiale harmonieuse : quatre chambres, deux salles d'eau, un grand séjour et une cuisine moderne. La qualité de construction norvégienne garantit une durabilité exceptionnelle et des coûts de chauffage dérisoires.",
    surface: 135,
    bedrooms: 4,
    bathrooms: 2,
    price: 285000,
    type: "étage",
    features: [
      "4 vraies chambres de plus de 10 m² chacune",
      "Salle de bains + salle d'eau séparée",
      "Cellier / espace de rangement 8 m²",
      "Balcon à l'étage orienté sud",
      "Pré-installation VMC double flux thermodynamique",
      "Garantie décennale constructeur",
    ],
    idealFor: [
      "Familles avec 3 enfants ou plus",
      "Projets de grande maison avec budget contrôlé",
      "Propriétaires privilégiant longévité et faibles charges",
    ],
    technicalDetails: {
      isolation:
        "Isolation répartie : laine de bois 270mm + pare-pluie rigide isolant 40mm",
      materials:
        "Murs en caissons bois préfabriqués, bardage bois vertical et horizontal, parquet massif",
      roof: "Charpente traditionnelle, couverture au choix (tuiles, ardoises, bac acier)",
      construction:
        "Modules assemblés en Norvège, expédition par camions, montage 4 à 5 semaines",
    },
    imageUrl: "/placeholder.svg",
  },
];

export function getHouseBySlug(slug: string): House | undefined {
  return houses.find((house) => house.slug === slug);
}

export function getHousesByType(type: string): House[] {
  if (type === "all") return houses;
  return houses.filter((house) => house.type === type);
}
