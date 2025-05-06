export interface CompanyInfo {
  name: string;
  slogan: string;
  description: {
    short: string;
    full: string;
  };
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
  };
  social: {
    facebook: string;
    instagram: string;
  };
  mapLocation: {
    lat: number;
    lng: number;
  };
}

export const companyInfo: CompanyInfo = {
  name: "Inmaa Group",
  slogan: "Votre solution automobile à Djibouti",
  description: {
    short: "Inmaa Group est votre partenaire automobile de confiance à Djibouti, offrant des services de vente, de location et de réparation de véhicules depuis plus de 10 ans. Notre expertise locale et notre engagement envers la qualité nous distinguent sur le marché.",
    full: "Fondé en 2013, Inmaa Group s'est imposé comme le leader du secteur automobile à Djibouti. Notre mission est de fournir des solutions automobiles complètes adaptées aux besoins spécifiques du marché djiboutien.\n\nNotre équipe de professionnels qualifiés s'engage à offrir un service personnalisé et de haute qualité. Que vous cherchiez à acheter une voiture neuve ou d'occasion, à louer un véhicule pour une courte ou longue durée, ou à bénéficier de services de réparation et d'entretien, nous sommes là pour vous accompagner.\n\nChez Inmaa Group, nous comprenons les défis uniques posés par l'environnement et les routes de Djibouti. C'est pourquoi nous sélectionnons soigneusement nos véhicules et adaptons nos services pour garantir fiabilité et satisfaction dans toutes les conditions.\n\nNotre vision est de contribuer au développement économique de Djibouti en facilitant la mobilité des personnes et des entreprises grâce à des solutions automobiles innovantes, fiables et accessibles."
  },
  contact: {
    address: "Avenue Georges Pompidou, Djibouti-ville, République de Djibouti",
    phone: "+253 21 35 25 30",
    whatsapp: "+25377214992",
    email: "contact@inmaagroup.dj",
    hours: "Lun - Ven: 8h00 - 17h00 | Sam: 8h00 - 12h00"
  },
  social: {
    facebook: "https://facebook.com/inmaagroup",
    instagram: "https://instagram.com/inmaagroup"
  },
  mapLocation: {
    lat: 11.595,
    lng: 43.148
  }
};