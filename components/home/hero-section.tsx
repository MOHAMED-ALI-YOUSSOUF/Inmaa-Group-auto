"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroBackgrounds = [
  "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4024576/pexels-photo-4024576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3589586/pexels-photo-3589586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroBackgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-blue-900/60" /> */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Votre solution automobile à Djibouti
          </h1>
          <p className="text-xl text-white/90 mb-8 md:text-2xl">
            Vente, location et services garage de qualité pour répondre à tous vos besoins
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/vente">
              <Button variant="primary" size="xl" className="w-full sm:w-auto">
                Voir nos véhicules <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/location">
              <Button variant="accent" size="xl" className="w-full sm:w-auto">
                Réserver une voiture <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}