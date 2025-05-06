"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { CarCard } from "@/components/shared/car-card";
import { CarFilters } from "@/components/shared/car-filters";
import { getCarsByType, Car } from "@/data/cars";

export default function VentePage() {
  const carsForSale = getCarsByType('sale');
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsForSale);

  return (
    <main>
      <PageHeader 
        title="Véhicules à vendre" 
        description="Découvrez notre sélection de véhicules de qualité, soigneusement choisis pour le marché djiboutien."
        backgroundImage="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-1/4 lg:pr-8">
            <CarFilters 
              cars={carsForSale} 
              onFilterChange={setFilteredCars} 
            />
          </div>
          
          {/* Car listings */}
          <div className="w-full lg:w-3/4">
            {filteredCars.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    {filteredCars.length} véhicule{filteredCars.length > 1 ? 's' : ''} disponible{filteredCars.length > 1 ? 's' : ''}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold mb-2">Aucun véhicule trouvé</h3>
                <p>Veuillez modifier vos filtres pour voir plus de résultats.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}