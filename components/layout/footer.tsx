import Link from "next/link";
import { Facebook, Instagram, Map, Phone, Mail, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Inmaa Group</h3>
            <p className="text-blue-100 mb-4">
              {companyInfo.description.short}
            </p>
            <div className="flex space-x-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/vente" className="text-blue-100 hover:text-white transition-colors">
                  Vente de véhicules
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-blue-100 hover:text-white transition-colors">
                  Location de véhicules
                </Link>
              </li>
              <li>
                <Link href="/garage" className="text-blue-100 hover:text-white transition-colors">
                  Services garage
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-blue-100 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vente" className="text-blue-100 hover:text-white transition-colors">
                  Achat de véhicules neufs
                </Link>
              </li>
              <li>
                <Link href="/vente" className="text-blue-100 hover:text-white transition-colors">
                  Achat de véhicules d'occasion
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-blue-100 hover:text-white transition-colors">
                  Location courte durée
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-blue-100 hover:text-white transition-colors">
                  Location longue durée
                </Link>
              </li>
              <li>
                <Link href="/garage" className="text-blue-100 hover:text-white transition-colors">
                  Entretien et réparation
                </Link>
              </li>
              <li>
                <Link href="/garage" className="text-blue-100 hover:text-white transition-colors">
                  Diagnostics électroniques
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Map size={18} className="mt-1 mr-3 flex-shrink-0 text-blue-300" />
                <span className="text-blue-100">{companyInfo.contact.address}</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-300" />
                <a href={`tel:${companyInfo.contact.phone}`} className="text-blue-100 hover:text-white transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-300" />
                <a href={`mailto:${companyInfo.contact.email}`} className="text-blue-100 hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mt-1 mr-3 flex-shrink-0 text-blue-300" />
                <span className="text-blue-100">{companyInfo.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Inmaa Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}