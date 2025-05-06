import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/shared/service-detail";
import { getServiceById } from "@/data/services";

interface GarageServiceDetailPageProps {
  params: {
    id: string;
  };
}

export default function GarageServiceDetailPage({ params }: GarageServiceDetailPageProps) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-24">
      <ServiceDetail service={service} />
    </main>
  );
}