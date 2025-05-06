import { PageHeader } from "@/components/layout/page-header";
import { ServiceCard } from "@/components/shared/service-card";
import { garageServices } from "@/data/services";

export default function GaragePage() {
  return (
    <main>
      <PageHeader 
        title="Services Garage" 
        description="Confiez l'entretien et la réparation de votre véhicule à nos experts qualifiés."
        backgroundImage="https://images.pexels.com/photos/3807495/pexels-photo-3807495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Nos services de garage</h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Chez Inmaa Group, notre garage offre une gamme complète de services d'entretien et de réparation pour tous types de véhicules. Nos techniciens qualifiés utilisent des équipements de pointe pour assurer la fiabilité et la performance de votre voiture dans les conditions spécifiques de Djibouti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {garageServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Pourquoi choisir notre garage ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Expertise locale</h4>
              <p className="text-slate-600">
                Notre équipe connaît parfaitement les défis spécifiques posés par l'environnement et les routes de Djibouti.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Équipement moderne</h4>
              <p className="text-slate-600">
                Nous utilisons des outils de diagnostic et de réparation à la pointe de la technologie pour tous types de véhicules.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Pièces de qualité</h4>
              <p className="text-slate-600">
                Nous n'utilisons que des pièces d'origine ou de qualité équivalente pour garantir la durabilité des réparations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Transparence</h4>
              <p className="text-slate-600">
                Nous expliquons clairement les travaux nécessaires et fournissons des devis détaillés avant toute intervention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Service rapide</h4>
              <p className="text-slate-600">
                Nous respectons les délais annoncés et travaillons efficacement pour minimiser l'immobilisation de votre véhicule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Garantie</h4>
              <p className="text-slate-600">
                Tous nos services et réparations sont couverts par une garantie pour votre tranquillité d'esprit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}