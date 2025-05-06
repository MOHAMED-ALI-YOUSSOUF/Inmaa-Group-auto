import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPopularCars, type Car } from "@/data/cars";

export function PopularCarsSection() {
  const popularCars = getPopularCars();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Véhicules populaires
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules les plus demandés, disponibles à la vente et à la location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={`/${popularCars[0]?.type === 'sale' ? 'vente' : 'location'}`}>
            <Button variant="primary" size="lg">
              Voir plus de véhicules <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: Car }) {
  const formattedPrice = car.type === 'sale' 
    ? `${car.price.toLocaleString()} DJF` 
    : `${car.price} DJF / jour`;
  
  const linkPath = car.type === 'sale'
    ? `/vente/${car.id}`
    : `/location/${car.id}`;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56">
        <Image 
          src={car.image} 
          alt={`${car.brand} ${car.model}`} 
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold uppercase py-1 px-2 rounded">
          {car.type === 'sale' ? 'Vente' : 'Location'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {car.brand} {car.model}
        </h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">{car.year}</span>
          <span className="text-lg font-bold text-blue-700">{formattedPrice}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {car.fuel}
          </span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {car.transmission}
          </span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {car.mileage.toLocaleString()} km
          </span>
        </div>
        <Link href={linkPath}>
          <Button variant="outline" className="w-full mt-2 group">
            Voir les détails
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}