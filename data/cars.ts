export interface Car {
  id: string;
  type: 'sale' | 'rental';
  brand: string;
  model: string;
  year: number;
  price: number; // For sale: price in USD, For rental: price per day
  image: string;
  gallery: string[];
  mileage: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric';
  features: string[];
  description: string;
  popular?: boolean;
}

export const cars: Car[] = [
  {
    id: "1",
    type: "sale",
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2022,
    price: 10000000,
    image: "https://www.netcarshow.com/Toyota-Land_Cruiser_ROX_Concept-2024-wallpaper.jpg",
    gallery: [
      "https://www.netcarshow.com/Toyota-Land_Cruiser_ROX_Concept-2024-Side_Profile.2a17b981.jpg",
      "https://www.netcarshow.com/Toyota-Land_Cruiser_ROX_Concept-2024-wallpaper.jpg",
      "https://www.netcarshow.com/Toyota-Land_Cruiser_ROX_Concept-2024-Rear.2a17b981.jpg",
    ],
    mileage: 5000,
    transmission: "Automatic",
    fuel: "Diesel",
    features: ["Bluetooth", "Cruise Control", "Navigation", "Leather Seats", "Sunroof", "4x4"],
    description: "Ce Toyota Land Cruiser 2022 est en excellent état avec seulement 5 000 km au compteur. Idéal pour les terrains difficiles de Djibouti, ce véhicule robuste offre confort et fiabilité. Équipé d'une transmission automatique et d'un moteur diesel puissant, il est parfait pour les familles et les professionnels.",
    popular: true
  },
  {
    id: "2",
    type: "sale",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 15000000,
    image: "https://media.ed.edmunds-media.com/mercedes-benz/c-class/2023/oem/2023_mercedes-benz_c-class_sedan_amg-c-43_fq_oem_1_1600.jpg",
    gallery: [
      "https://www.netcarshow.com/Mercedes-Benz-C-Class-2022-Front_Three-Quarter.9c265c10.jpg",
      "https://www.netcarshow.com/Mercedes-Benz-C-Class-2022-Side_Profile.9c265c10.jpg",
      "https://www.netcarshow.com/Mercedes-Benz-C-Class-2022-Rear_Three-Quarter.9c265c10.jpg",
    ],
    mileage: 3000,
    transmission: "Automatic",
    fuel: "Gasoline",
    features: ["Bluetooth", "Cruise Control", "Navigation", "Leather Seats", "Climate Control", "Parking Sensors"],
    description: "Cette Mercedes-Benz C-Class 2023 représente l'élégance et la performance. Avec seulement 3 000 km, elle est comme neuve. Son intérieur luxueux en cuir et ses technologies avancées en font un choix de premier ordre pour ceux qui recherchent un véhicule haut de gamme à Djibouti."
  },
  {
    id: "3",
    type: "sale",
    brand: "Nissan",
    model: "Patrol",
    year: 2021,
    price: 8000000,
    image: "https://www.netcarshow.com/Nissan-Patrol_Nismo-2021-wallpaper.jpg",
    gallery: [
      "https://www.netcarshow.com/Nissan-Patrol_Nismo-2021-wallpaper.jpg",
      "https://www.netcarshow.com/Nissan-Patrol_Nismo-2021-Rear_Three-Quarter.359df512.jpg",
      "https://www.netcarshow.com/Nissan-Patrol_Nismo-2021-Interior.359df512.jpg",
    ],
    mileage: 20000,
    transmission: "Automatic",
    fuel: "Diesel",
    features: ["Bluetooth", "Cruise Control", "Navigation", "Leather Seats", "Sunroof", "4x4", "Camera de recul"],
    description: "Le Nissan Patrol 2021 est reconnu pour sa robustesse et son confort. Ce modèle avec 20 000 km est parfaitement adapté aux conditions routières de Djibouti. Spacieux et puissant, il vous accompagnera dans toutes vos aventures, qu'elles soient urbaines ou hors des sentiers battus.",
    popular: true
  },
  {
    id: "4",
    type: "sale",
    brand: "Toyota",
    model: "Hilux",
    year: 2022,
    price: 12000000,
    image: "https://www.netcarshow.com/Toyota-Hilux_GR_Sport_II-2024-Front_Three-Quarter.43c2155a.jpg",
    gallery: [
      "https://www.netcarshow.com/Toyota-HiLux-2016-Front.bddf2a58.jpg",
      "https://www.netcarshow.com/Toyota-HiLux-2016-Front_Three-Quarter.bddf2a58.jpg",
      "https://www.netcarshow.com/Toyota-HiLux-2016-Side_Profile.bddf2a58.jpg",
    ],
    mileage: 15000,
    transmission: "Manual",
    fuel: "Diesel",
    features: ["Bluetooth", "4x4", "Climatisation", "Vitres électriques", "Airbags"],
    description: "Le Toyota Hilux 2022 est le pickup idéal pour combiner travail et loisirs. Avec 15 000 km, ce véhicule fiable et résistant est équipé d'une transmission manuelle et d'un moteur diesel économique. Parfait pour les entrepreneurs et les amateurs d'aventure à Djibouti."
  },
  {
    id: "5",
    type: "rental",
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 7500,
    image: "https://media.ed.edmunds-media.com/hyundai/tucson/2022/oem/2022_hyundai_tucson_4dr-suv_limited_fq_oem_1_1600.jpg",
    gallery: [
      "https://media.ed.edmunds-media.com/hyundai/tucson/2022/oem/2022_hyundai_tucson_4dr-suv_limited_rq_oem_1_1600.jpg",
      "https://www.netcarshow.com/Hyundai-Tucson_US-Version-2022-Interior.84285f19.jpg",
      "https://www.netcarshow.com/Hyundai-Tucson_US-Version-2022-Engine_Bay.84285f19.jpg",
    ],
    mileage: 25000,
    transmission: "Automatic",
    fuel: "Gasoline",
    features: ["Bluetooth", "Cruise Control", "Navigation", "Climatisation", "Caméra de recul"],
    description: "Le Hyundai Tucson 2022 est un SUV compact idéal pour explorer Djibouti. Disponible à la location pour 75$ par jour, il offre un excellent rapport qualité-prix. Économique en carburant et facile à conduire, c'est le compagnon parfait pour vos déplacements professionnels ou touristiques.",
    popular: true
  },
  {
    id: "6",
    type: "rental",
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 5500,
    image: "https://www.netcarshow.com/Toyota-Corolla_EU-Version-2014-Front_Three-Quarter.c1cd3e7a.jpg",
    gallery: [
      "https://www.netcarshow.com/Toyota-Corolla_EU-Version-2014-Front_Three-Quarter.c1cd3e7a.jpg",
      "https://www.netcarshow.com/Toyota-Corolla_EU-Version-2014-Side_Profile.c1cd3e7a.jpg",
      "https://www.netcarshow.com/Toyota-Corolla_EU-Version-2014-Rear_Three-Quarter.c1cd3e7a.jpg",
    ],
    mileage: 30000,
    transmission: "Automatic",
    fuel: "Gasoline",
    features: ["Bluetooth", "Climatisation", "Vitres électriques", "Verrouillage centralisé"],
    description: "La Toyota Corolla 2022 est une berline fiable et économique disponible à la location pour seulement 55$ par jour. Parfaite pour la ville, elle combine confort, faible consommation de carburant et facilité de conduite. Idéale pour les voyageurs d'affaires ou les touristes souhaitant explorer Djibouti en toute tranquillité."
  },
  {
    id: "7",
    type: "rental",
    brand: "Mitsubishi",
    model: "Pajero",
    year: 2021,
    price: 8500,
    image: "https://www.netcarshow.com/Mitsubishi-Pajero_European_Specs-2007-Rear_Three-Quarter.ed5eea56.jpg",
    gallery: [
      "https://www.netcarshow.com/Mitsubishi-Pajero_European_Specs-2007-Rear_Three-Quarter.ed5eea56.jpg",
      "https://www.netcarshow.com/Mitsubishi-Pajero_European_Specs-2007-Interior.ed5eea56.jpg",
      "https://www.netcarshow.com/Mitsubishi-Pajero_European_Specs-2007-Engine_Bay.ed5eea56.jpg",
    ],
    mileage: 40000,
    transmission: "Automatic",
    fuel: "Diesel",
    features: ["Bluetooth", "4x4", "Climatisation", "GPS", "Sièges en cuir", "7 places"],
    description: "Le Mitsubishi Pajero 2021 est un 4x4 robuste parfait pour les aventures hors route à Djibouti. À 85$ par jour, ce véhicule spacieux et puissant vous permettra d'explorer tous les terrains avec confort et sécurité. Idéal pour les familles ou les groupes souhaitant découvrir les paysages uniques du pays.",
    popular: true
  },
  {
    id: "8",
    type: "rental",
    brand: "Kia",
    model: "Sportage",
    year: 2022,
    price: 7000,
    image: "https://www.netcarshow.com/Kia-Sportage-2014-wallpaper.jpg",
    gallery: [
      "https://www.netcarshow.com/Kia-Sportage-2014-wallpaper.jpg",
      "https://www.netcarshow.com/Kia-Sportage-2014-Side_Profile.81ec4d08.jpg",
      "https://www.netcarshow.com/Kia-Sportage-2014-Front.81ec4d08.jpg",
    ],
    mileage: 20000,
    transmission: "Automatic",
    fuel: "Gasoline",
    features: ["Bluetooth", "Cruise Control", "Navigation", "Climatisation", "Caméra de recul"],
    description: "Le Kia Sportage 2022 est un SUV moderne et polyvalent disponible à 70$ par jour. Son confort, sa maniabilité et ses équipements technologiques en font un excellent choix pour découvrir Djibouti. Que ce soit pour un usage professionnel ou des vacances, ce véhicule répondra à toutes vos attentes."
  }
];

export const getCarsByType = (type: 'sale' | 'rental') => {
  return cars.filter(car => car.type === type);
};

export const getCarById = (id: string) => {
  return cars.find(car => car.id === id);
};

export const getPopularCars = () => {
  return cars.filter(car => car.popular);
};