import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">NordMaison</h3>
            <p className="text-sm text-slate-400">
              Maisons préfabriquées norvégiennes pour le marché français.
              Performance énergétique et qualité scandinave.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/maisons" className="hover:text-white transition-colors">
                  Nos modèles
                </Link>
              </li>
              <li>
                <Link href="/processus" className="hover:text-white transition-colors">
                  Notre processus
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Demander un devis
                </Link>
              </li>
              <li>
                <span className="text-slate-400">Accompagnement permis</span>
              </li>
              <li>
                <span className="text-slate-400">Suivi de chantier</span>
              </li>
              <li>
                <span className="text-slate-400">Service après-vente</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@nordmaison.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@nordmaison.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+33123456789"
                  className="hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>France métropolitaine</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} NordMaison. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
