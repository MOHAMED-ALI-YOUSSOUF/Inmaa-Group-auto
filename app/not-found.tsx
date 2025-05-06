import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-6xl font-extrabold text-blue-700">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Page non trouvée
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Nous sommes désolés, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="/">
            <Button size="lg">
              Retour à l'accueil
            </Button>
          </Link>
          <div className="flex space-x-4">
            <Link href="/vente" className="text-blue-700 hover:text-blue-900">
              Voir nos véhicules à vendre
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-blue-700 hover:text-blue-900">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}