export interface GarageService {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: string;
  image: string;
  gallery: string[];
}

export const garageServices: GarageService[] = [
  {
    id: "1",
    name: "Diagnostic électronique",
    shortDescription: "Analyse complète des systèmes électroniques de votre véhicule avec équipement de pointe.",
    fullDescription: "Notre service de diagnostic électronique utilise des équipements de dernière génération pour analyser tous les systèmes de votre véhicule. Nos techniciens certifiés identifient rapidement les problèmes potentiels en lisant les codes d'erreur et en effectuant des tests approfondis. Ce service est essentiel pour maintenir la performance et la fiabilité de votre voiture, particulièrement dans les conditions climatiques exigeantes de Djibouti.",
    benefits: [
      "Détection précise des problèmes",
      "Rapport détaillé des anomalies",
      "Recommandations personnalisées",
      "Prévention des pannes majeures",
      "Compatible avec toutes les marques"
    ],
    icon: "cpu",
    image: "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "2",
    name: "Vidange et entretien",
    shortDescription: "Service complet de vidange d'huile et entretien régulier pour prolonger la durée de vie de votre véhicule.",
    fullDescription: "Notre service de vidange et d'entretien régulier est fondamental pour garantir les performances et la longévité de votre véhicule. Nos mécaniciens expérimentés utilisent des huiles et des filtres de haute qualité adaptés au climat de Djibouti. Chaque service comprend une inspection complète de 25 points pour s'assurer que votre voiture reste en parfait état de fonctionnement. Nous respectons scrupuleusement les spécifications du constructeur tout en adaptant nos services aux conditions locales.",
    benefits: [
      "Huiles et filtres premium",
      "Inspection complète 25 points",
      "Respect des spécifications constructeur",
      "Adaptation aux conditions locales",
      "Conseils d'entretien personnalisés"
    ],
    icon: "oil-can",
    image: "https://images.pexels.com/photos/6873085/pexels-photo-6873085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/6873085/pexels-photo-6873085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6873074/pexels-photo-6873074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "3",
    name: "Climatisation",
    shortDescription: "Maintenance et réparation de systèmes de climatisation pour un confort optimal dans le climat chaud de Djibouti.",
    fullDescription: "Dans le climat chaud de Djibouti, un système de climatisation fonctionnel est essentiel. Notre service spécialisé comprend le diagnostic, la recharge de gaz, la réparation des fuites et le remplacement des composants défectueux. Nos techniciens qualifiés assurent que votre système fonctionne de manière optimale pour maintenir une température confortable à l'intérieur de votre véhicule, même lors des journées les plus chaudes. Nous utilisons uniquement des gaz réfrigérants conformes aux normes environnementales.",
    benefits: [
      "Diagnostic complet du système",
      "Recharge de gaz écologique",
      "Détection et réparation de fuites",
      "Nettoyage des conduits et filtres",
      "Optimisation pour climat désertique"
    ],
    icon: "snowflake",
    image: "https://images.pexels.com/photos/13710476/pexels-photo-13710476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/13710476/pexels-photo-13710476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
      "https://images.pexels.com/photos/3807326/pexels-photo-3807326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "4",
    name: "Suspension et direction",
    shortDescription: "Réparation et entretien des systèmes de suspension et direction pour une conduite sûre sur tous les terrains.",
    fullDescription: "Les routes variées de Djibouti exigent un système de suspension et de direction en parfait état. Notre service complet inclut l'inspection, la réparation et le remplacement des composants de suspension et de direction. Nous vérifions les amortisseurs, les ressorts, les rotules, les barres stabilisatrices et le système de direction pour garantir une tenue de route optimale et un confort de conduite maximal. Nos techniciens sont formés pour travailler sur tous les types de véhicules, des berlines aux 4x4 robustes.",
    benefits: [
      "Amélioration de la tenue de route",
      "Réduction de l'usure des pneus",
      "Confort de conduite accru",
      "Sécurité optimale",
      "Adaptation pour conditions routières locales"
    ],
    icon: "truck",
    image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     
      "https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "5",
    name: "Freinage",
    shortDescription: "Maintenance et réparation des systèmes de freinage pour une sécurité optimale sur la route.",
    fullDescription: "La sécurité est notre priorité, et un système de freinage fiable est non négociable. Notre service de freinage comprend l'inspection complète, la réparation et le remplacement des composants: plaquettes, disques, étriers, tambours, cylindres et liquide de frein. Nous utilisons des pièces de qualité équivalente ou supérieure à l'origine pour garantir des performances de freinage optimales. Nos techniciens sont formés pour diagnostiquer précisément les problèmes et recommander les solutions les plus appropriées.",
    benefits: [
      "Sécurité maximale",
      "Pièces de haute qualité",
      "Diagnostic précis",
      "Performances de freinage optimales",
      "Tests rigoureux après service"
    ],
    icon: "disc-brake",
    image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     
      "https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  },
  {
    id: "6",
    name: "Électricité automobile",
    shortDescription: "Diagnostic et réparation des systèmes électriques: batterie, démarreur, alternateur et circuits.",
    fullDescription: "Les systèmes électriques modernes sont complexes et essentiels au bon fonctionnement de votre véhicule. Notre service d'électricité automobile couvre tous les aspects, de la batterie aux systèmes de confort et de divertissement. Nos techniciens spécialisés diagnostiquent et réparent les problèmes liés à la batterie, au démarreur, à l'alternateur, aux faisceaux de câbles et aux systèmes électroniques. Nous utilisons des équipements de diagnostic spécifiques pour identifier rapidement les défaillances et proposer des solutions durables.",
    benefits: [
      "Diagnostic précis des défaillances",
      "Réparation des courts-circuits",
      "Remplacement des composants défectueux",
      "Test complet des systèmes",
      "Solutions adaptées au climat local"
    ],
    icon: "zap",
    image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
      "https://images.pexels.com/photos/5835363/pexels-photo-5835363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  }
];

export const getServiceById = (id: string) => {
  return garageServices.find(service => service.id === id);
};