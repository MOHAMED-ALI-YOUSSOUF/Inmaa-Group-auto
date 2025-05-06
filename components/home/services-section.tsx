import Link from "next/link";
import {
  Car,
  Key,
  Wrench,
  ArrowRight,
  ShieldCheck,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "sale",
    title: "Vente de véhicules",
    description:
      "Large gamme de véhicules neufs et d'occasion sélectionnés avec rigueur pour répondre aux besoins du marché djiboutien.",
    icon: <Car className="h-10 w-10 text-blue-600" />,
    link: "/vente",
  },
  {
    id: "rental",
    title: "Location de voitures",
    description:
      "Flexibilité maximale avec nos options de location courte et longue durée. Véhicules adaptés à tous les besoins.",
    icon: <Key className="h-10 w-10 text-blue-600" />,
    link: "/location",
  },
  {
    id: "garage",
    title: "Services garage",
    description:
      "Entretien, réparation et diagnostics par des techniciens qualifiés utilisant des équipements de pointe.",
    icon: <Wrench className="h-10 w-10 text-blue-600" />,
    link: "/garage",
  },
  {
    id: "warranty",
    title: "Garantie qualité",
    description:
      "Tous nos véhicules et services sont couverts par une garantie, vous assurant tranquillité d'esprit et satisfaction.",
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    link: "/a-propos",
  },
  {
    id: "customization",
    title: "Solutions personnalisées",
    description:
      "Des offres adaptées à vos besoins spécifiques, qu'ils soient personnels ou professionnels.",
    icon: <User className="h-10 w-10 text-blue-600" />,
    link: "/contact",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nos services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Inmaa Group vous propose une gamme complète de services automobiles
            pour répondre à tous vos besoins de mobilité à Djibouti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-5">{service.description}</p>
              <Link href={service.link}>
                <Button variant="outline" className="mt-2 group">
                  En savoir plus
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}