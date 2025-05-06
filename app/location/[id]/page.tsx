import { notFound } from "next/navigation";
import { CarDetail } from "@/components/shared/car-detail";
import { getCarById } from "@/data/cars";

interface LocationDetailPageProps {
  params: {
    id: string;
  };
}

export default function LocationDetailPage({ params }: LocationDetailPageProps) {
  const car = getCarById(params.id);

  if (!car || car.type !== 'rental') {
    notFound();
  }

  return (
    <main className="pt-24">
      <CarDetail car={car} type="rental" />
    </main>
  );
}