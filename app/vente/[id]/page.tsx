import { notFound } from "next/navigation";
import { CarDetail } from "@/components/shared/car-detail";
import { getCarById } from "@/data/cars";

interface VenteDetailPageProps {
  params: {
    id: string;
  };
}

export default function VenteDetailPage({ params }: VenteDetailPageProps) {
  const car = getCarById(params.id);

  if (!car || car.type !== 'sale') {
    notFound();
  }

  return (
    <main className="pt-24">
      <CarDetail car={car} type="sale" />
    </main>
  );
}