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
    image: "/1.jpg",
    gallery: [
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
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
    image: "/4.jpg",
    gallery: [
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
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
    image: "/7.jpg",
    gallery: [
      "/7.jpg",
      "/8.jpg",
      "/9.jpg",
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
    image: "/10.jpg",
    gallery: [
      "/10.jpg",
      "/11.jpg",
      "/12.jpg",
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
    image: "/13.jpg",
    gallery: [
      "/13.jpg",
      "/14.jpg",
      "/15.jpg",
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
    image: "/22.jpg",
    gallery: [
      "/22.jpg",
      "/23.jpg",
      
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
    image: "/16.jpg",
    gallery: [
      "/16.jpg",
      "/17.jpg",
      "/18.jpg",
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
    image: "/19.jpg",
    gallery: [
      "/19.jpg",
      "/20.jpg",
      "/21.jpg",
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