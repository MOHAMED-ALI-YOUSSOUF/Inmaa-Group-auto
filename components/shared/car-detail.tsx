"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Fuel, ArrowLeft, Send } from "lucide-react";
import { Car } from "@/data/cars";
import { companyInfo } from "@/data/company";
import { Icons } from "@/components/shared/icons";
import { PageHeader } from "../layout/page-header";

interface CarDetailProps {
  car: Car;
  type: 'sale' | 'rental';
}

export function CarDetail({ car, type }: CarDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  
  const formattedPrice = type === 'sale' 
    ? `${car.price.toLocaleString()} DJF` 
    : `${car.price} DJF / jour`;
  
  const backLink = type === 'sale' ? '/vente' : '/location';
  const backLinkText = type === 'sale' ? 'Retour aux véhicules à vendre' : 'Retour aux véhicules à louer';
  
  const whatsappMessage = type === 'sale'
    ? `Bonjour, je suis intéressé par l'achat du véhicule ${car.brand} ${car.model} (${car.year}) à ${car.price}$. Pouvez-vous me donner plus d'informations ?`
    : `Bonjour, je souhaite louer le véhicule ${car.brand} ${car.model} (${car.year}) à ${car.price}$ par jour. Est-il disponible ?`;
  
  const whatsappLink = `https://wa.me/${companyInfo.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (

      <div className="container mx-auto px-4 py-10">
      <Link href={backLink} className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
        <ArrowLeft size={16} className="mr-2" />
        {backLinkText}
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <div className="relative rounded-lg overflow-hidden h-[400px] mb-4">
            <Image
              src={car.gallery[currentImage]}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {car.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative h-20 rounded overflow-hidden transition-opacity duration-200 ${
                  currentImage === index ? "ring-2 ring-blue-700" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${car.brand} ${car.model} - vue ${index + 1}`}
                  fill
                  sizes="100px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Car Details */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {car.brand} {car.model}
          </h1>
          <p className="text-gray-500 mb-6">Année {car.year}</p>
          
          <div className="flex items-center mb-8">
            <span className="text-3xl font-bold text-blue-700 mr-3">
              {formattedPrice}
            </span>
            {type === 'rental' && (
              <span className="text-gray-500">Location</span>
            )}
          </div>
          
          {/* Features */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Caractéristiques</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="flex items-center">
                <Icons.car className="w-5 h-5 text-blue-700 mr-2" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center">
                <Icons.gauge className="w-5 h-5 text-blue-700 mr-2" />
                <span>{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex items-center">
                <Fuel className="w-5 h-5 text-blue-700 mr-2" />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-700 mr-2" />
                <span>{car.year}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{car.description}</p>
          </div>
          
          {/* Equipment/Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Équipements</h3>
            <div className="grid grid-cols-2 gap-y-3">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Icons.check className="w-5 h-5 text-green-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700" size="lg">
              <Send className="mr-2 h-5 w-5" />
              Contacter via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}