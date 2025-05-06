import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { companyInfo } from "@/data/company";

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="À propos de nous" 
        description="Découvrez l'histoire et les valeurs d'Inmaa Group, votre partenaire automobile à Djibouti."
        backgroundImage="https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre histoire</h2>
            <div className="prose max-w-none text-slate-600">
              <p className="mb-4 text-lg">
                {companyInfo.description.full.split('\n\n')[0]}
              </p>
              <p className="mb-4">
                {companyInfo.description.full.split('\n\n')[1]}
              </p>
              <p className="mb-4">
                {companyInfo.description.full.split('\n\n')[2]}
              </p>
              <p>
                {companyInfo.description.full.split('\n\n')[3]}
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Inmaa Group Showroom"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre mission et nos valeurs</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Ce qui nous guide chaque jour dans notre engagement envers nos clients et la communauté.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Excellence</h3>
              <p className="text-slate-600 text-center">
                Nous nous efforçons constamment d'offrir des services et des produits de la plus haute qualité, dépassant les attentes de nos clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Intégrité</h3>
              <p className="text-slate-600 text-center">
                Nous menons nos activités avec honnêteté, transparence et respect, en construisant des relations de confiance durables avec nos clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Innovation</h3>
              <p className="text-slate-600 text-center">
                Nous cherchons continuellement à améliorer nos services et à adopter les meilleures pratiques pour répondre aux besoins évolutifs du marché djiboutien.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre équipe</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Des professionnels passionnés et expérimentés dédiés à vous offrir le meilleur service possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Ahmed Hassan"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ahmed Hassan</h3>
              <p className="text-blue-700">Directeur Général</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Fatima Abdallah"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Fatima Abdallah</h3>
              <p className="text-blue-700">Directrice des Ventes</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Omar Youssouf"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Omar Youssouf</h3>
              <p className="text-blue-700">Chef Mécanicien</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Aisha Mohammed"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Aisha Mohammed</h3>
              <p className="text-blue-700">Responsable Location</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}