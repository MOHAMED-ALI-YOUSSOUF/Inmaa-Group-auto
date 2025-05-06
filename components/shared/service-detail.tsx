import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft, Check } from "lucide-react";
import { GarageService } from "@/data/services";
import { companyInfo } from "@/data/company";
import { Icons } from "@/components/shared/icons";

interface ServiceDetailProps {
  service: GarageService;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];
  
  const whatsappMessage = `Bonjour, je souhaite prendre rendez-vous pour le service "${service.name}". Pouvez-vous me donner plus d'informations ?`;
  const whatsappLink = `https://wa.me/${companyInfo.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/garage" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6">
        <ArrowLeft size={16} className="mr-2" />
        Retour aux services
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Service Image */}
        <div>
          <div className="relative rounded-lg overflow-hidden h-[400px] mb-4">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-24 rounded overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${service.name} - image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 15vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Details */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              {Icon && <Icon className="h-6 w-6 text-blue-700" />}
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
              {service.name}
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
          </div>
          
          {/* Benefits */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Avantages</h3>
            <div className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recommendation */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Recommandation</h3>
            <p className="text-blue-700">
              Pour des performances optimales, nous recommandons d'effectuer cette maintenance selon les intervalles recommandés par le constructeur ou tous les 6 mois pour les conditions spécifiques de Djibouti.
            </p>
          </div>
          
          {/* Contact Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto bg-green-700 hover:bg-green-600 text-gray-50" size="lg">
              <Send className="mr-2 h-5 w-5" />
              Prendre rendez-vous via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}