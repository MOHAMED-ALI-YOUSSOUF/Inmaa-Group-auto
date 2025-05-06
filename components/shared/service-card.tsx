import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GarageService } from "@/data/services";
import { Icons } from "@/components/shared/icons";

interface ServiceCardProps {
  service: GarageService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Get the icon component dynamically
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          {Icon && <Icon className="h-6 w-6 text-blue-700" />}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {service.name}
        </h3>
        <p className="text-slate-600 mb-6">
          {service.shortDescription}
        </p>
        <Link href={`/garage/${service.id}`}>
          <Button variant="outline" className="w-full group">
            En savoir plus
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}