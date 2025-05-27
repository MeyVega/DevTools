import React from "react";
import { Link } from "react-router-dom";
import NewsletterSignup from './NewsletterSignup';
import {
  Twitter,
  Github,
  Mail,
  Coffee,
  ChevronRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#67A2A8] dark:bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de navegación del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Columna de información */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="bg-white text-[#67A2A8] dark:bg-gray-700 dark:text-[#9CD1D4] w-8 h-8 rounded flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
                  <polyline points="2 8.5 7 3 12 8.5" />
                  <polyline points="2 15.5 7 21 12 15.5" />
                  <line x1="7" y1="3" x2="7" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">DevTools Catalog</h3>
            </Link>
            <p className="text-[#E3F5F5] dark:text-gray-300 mb-4 text-sm">
              Una colección de herramientas útiles para desarrolladores,
              cuidadosamente seleccionada para mejorar tu flujo de trabajo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 dark:bg-gray-700 rounded-full hover:bg-opacity-20 dark:hover:bg-gray-600 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 dark:bg-gray-700 rounded-full hover:bg-opacity-20 dark:hover:bg-gray-600 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:info@devtoolscatalog.com"
                className="p-2 bg-white bg-opacity-10 dark:bg-gray-700 rounded-full hover:bg-opacity-20 dark:hover:bg-gray-600 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white bg-opacity-10 dark:bg-gray-700 rounded-full hover:bg-opacity-20 dark:hover:bg-gray-600 transition-all"
                aria-label="Buy me a coffee"
              >
                <Coffee size={18} />
              </a>
            </div>
          </div>

          {/* Columna de enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explora</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/categories"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Categorías
                </Link>
              </li>
              <li>
                <Link
                  to="/popular"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Más populares
                </Link>
              </li>
              <li>
                <Link
                  to="/newest"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Nuevas adiciones
                </Link>
              </li>
              <li>
                <Link
                  to="/free"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Herramientas gratuitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna de recursos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Guías
                </Link>
              </li>
              <li>
                <Link
                  to="/suggest"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  Sugerir herramienta
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  FAQs
                </Link>
              </li>
              <li className="pt-4">
                <a
                  href="https://github.com/yourusername/dev-tools-catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors flex items-center"
                >
                  <Github size={14} className="mr-1" />
                  Código fuente
                </a>
              </li>
            </ul>
          </div>

          {/* Columna del newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div className="bg-white bg-opacity-10 dark:bg-gray-700 p-4 rounded-lg">
              <NewsletterSignup
                title="" // Sin título, ya que ya tenemos uno arriba
                description="Suscríbete para recibir actualizaciones y nuevas herramientas directamente en tu correo."
                buttonText="Suscribirse"
                className="bg-transparent shadow-none p-0 dark:bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-[#9CD1D4] border-opacity-30 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#E3F5F5] dark:text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} DevTools Catalog. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-4 text-sm text-[#E3F5F5] dark:text-gray-400">
              <Link
                to="/privacy"
                className="hover:text-white dark:hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/terms"
                className="hover:text-white dark:hover:text-white transition-colors"
              >
                Términos de Uso
              </Link>
              <Link
                to="/contact"
                className="hover:text-white dark:hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;