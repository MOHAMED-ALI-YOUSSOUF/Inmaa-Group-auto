"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Car } from "@/data/cars";

export interface FilterOptions {
  brands: string[];
  minPrice: number;
  maxPrice: number;
  selectedBrands: string[];
  priceRange: [number, number];
}

interface CarFiltersProps {
  cars: Car[];
  onFilterChange: (filtered: Car[]) => void;
}

export function CarFilters({ cars, onFilterChange }: CarFiltersProps) {
  // Extract unique brands and price range from cars data
  const allBrands = Array.from(new Set(cars.map(car => car.brand)));
  const prices = cars.map(car => car.price);
  const minAvailablePrice = Math.min(...prices);
  const maxAvailablePrice = Math.max(...prices);

  // State for filters
  const [filters, setFilters] = useState<FilterOptions>({
    brands: allBrands,
    minPrice: minAvailablePrice,
    maxPrice: maxAvailablePrice,
    selectedBrands: [],
    priceRange: [minAvailablePrice, maxAvailablePrice],
  });

  const [showBrands, setShowBrands] = useState(false);

  const latestFilter = useRef(onFilterChange);

  useEffect(() => {
    latestFilter.current = onFilterChange;
  }, [onFilterChange]);

  // Apply filters to cars (this should only run when filters or cars change)
  useEffect(() => {
    const filteredCars = cars.filter(car => {
      // Filter by brand
      const brandMatch = filters.selectedBrands.length === 0 || 
                        filters.selectedBrands.includes(car.brand);
      
      // Filter by price
      const priceMatch = car.price >= filters.priceRange[0] && 
                        car.price <= filters.priceRange[1];
      
      return brandMatch && priceMatch;
    });

    // Only trigger onFilterChange if filteredCars has changed
    if (filteredCars.length !== cars.length) {
      latestFilter.current(filteredCars);
    }
  }, [filters, cars]); // Dependency array ensures this effect runs only when filters or cars change


  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setFilters(prev => {
      const newSelectedBrands = prev.selectedBrands.includes(brand)
        ? prev.selectedBrands.filter(b => b !== brand)
        : [...prev.selectedBrands, brand];
      
      return {
        ...prev,
        selectedBrands: newSelectedBrands,
      };
    });
  };

  // Handle price range change
  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = parseInt(e.target.value);
    setFilters(prev => {
      const newRange = [...prev.priceRange] as [number, number];
      newRange[index] = value;
      return {
        ...prev,
        priceRange: newRange,
      };
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      ...filters,
      selectedBrands: [],
      priceRange: [minAvailablePrice, maxAvailablePrice],
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Filtres</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={resetFilters}
          className="text-sm"
        >
          Réinitialiser
        </Button>
      </div>

      {/* Brand filter */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => setShowBrands(!showBrands)}
        >
          <h4 className="text-sm font-medium mb-2">Marque</h4>
          <ChevronsUpDown size={16} className="text-gray-500" />
        </div>
        
        {showBrands && (
          <div className="space-y-2 mt-2">
            {allBrands.map(brand => (
              <div key={brand} className="flex items-center">
                <button
                  className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-700"
                  onClick={() => toggleBrand(brand)}
                >
                  <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                    filters.selectedBrands.includes(brand) 
                      ? 'border-blue-700 bg-blue-700' 
                      : 'border-gray-300'
                  }`}>
                    {filters.selectedBrands.includes(brand) && (
                      <Check size={12} className="text-white" />
                    )}
                  </div>
                  <span>{brand}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price range filter */}
      <div>
        <h4 className="text-sm font-medium mb-2">Prix</h4>
        <div className="space-y-4">
          <div>
            <label htmlFor="min-price" className="text-xs text-gray-500">
              Prix minimum: {filters.priceRange[0].toLocaleString()} $
            </label>
            <input
              id="min-price"
              type="range"
              min={minAvailablePrice}
              max={maxAvailablePrice}
              value={filters.priceRange[0]}
              onChange={e => handlePriceChange(e, 0)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="text-xs text-gray-500">
              Prix maximum: {filters.priceRange[1].toLocaleString()} $
            </label>
            <input
              id="max-price"
              type="range"
              min={minAvailablePrice}
              max={maxAvailablePrice}
              value={filters.priceRange[1]}
              onChange={e => handlePriceChange(e, 1)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
