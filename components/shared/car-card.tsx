import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
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