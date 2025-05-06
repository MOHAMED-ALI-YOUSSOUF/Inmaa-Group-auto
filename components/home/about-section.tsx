import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/company";

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden h-[500px]">
            <Image
              src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Inmaa Group Showroom"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h5 className="text-blue-700 font-semibold mb-2">À PROPOS DE NOUS</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Votre partenaire automobile de confiance à Djibouti
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {companyInfo.description.short}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-700 font-bold">10+</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Années d'expérience</h4>
                  <p className="text-slate-600">Dans l'industrie automobile</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-700 font-bold">500+</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Clients satisfaits</h4>
                  <p className="text-slate-600">Particuliers et entreprises</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-700 font-bold">50+</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Véhicules disponibles</h4>
                  <p className="text-slate-600">Pour la vente et la location</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-700 font-bold">6+</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Services garage</h4>
                  <p className="text-slate-600">Pour tous types de véhicules</p>
                </div>
              </div>
            </div>
            <Link href="/a-propos">
              <Button variant="primary" size="lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}