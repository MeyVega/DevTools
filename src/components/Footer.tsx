import React from "react";
import { Link } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";
import {
  Twitter,
  Github,
  Mail,
  Heart,
  ChevronRight,
  Zap,
  Users,
  Bookmark,
  Gift,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Shield,
  FileText,
  Phone,
  Info,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#67A2A8] via-[#5A9BA1] to-[#4D8B91] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#9CD1D4] rounded-full mix-blend-multiply filter blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white rounded-full mix-blend-multiply filter blur-xl transform translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center mb-6 group">
              <div className="relative">
                <div className="relative bg-white text-[#67A2A8] dark:bg-gray-100 dark:text-[#67A2A8] w-12 h-12 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  {/* Imagen ocupando todo el contenedor */}
                  <img
                    src="/src/img/logodemo.png"
                    alt="Logo"
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Efecto de brillo sobre la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#E3F5F5] bg-clip-text text-transparent">
                  MayTools
                </h3>
                <p className="text-xs text-[#B8D8DA] dark:text-gray-400 font-medium">
                  Herramientas para devs
                </p>
              </div>
            </Link>

            <p className="text-[#E3F5F5] dark:text-gray-300 mb-6 text-sm leading-relaxed">
              Una colección de herramientas útiles para desarrolladores,
              cuidadosamente seleccionada para mejorar tu flujo de trabajo.
            </p>

            {/* Social media with better styling */}
            <div className="flex space-x-3">
              {[
                {
                  icon: Twitter,
                  href: "https://x.com/MaySpacedu",
                  label: "Twitter",
                  color: "hover:bg-blue-500",
                },
                {
                  icon: Github,
                  href: "https://github.com/MaySpaceDu/maydev-tools",
                  label: "GitHub",
                  color: "hover:bg-gray-600",
                },
                {
                  icon: Mail,
                  href: "mayspacede@gmail.com",
                  label: "Email",
                  color: "hover:bg-green-500",
                },
                {
                  icon: Heart,
                  href: "https://www.patreon.com/c/MaySpace",
                  label: "Buy me a Heart",
                  color: "hover:bg-yellow-500",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group relative p-3 bg-white bg-opacity-10 dark:bg-gray-700 rounded-xl ${color} transition-all duration-300 hover:bg-opacity-100 hover:shadow-lg hover:scale-105`}
                  aria-label={label}
                >
                  <Icon
                    size={18}
                    className="group-hover:text-white transition-colors"
                  />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Zap size={20} className="mr-2 text-[#9CD1D4]" />
              Explora
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/categories", text: "Categorías", icon: Bookmark },
                { to: "/popular", text: "Más populares", icon: Users },
                { to: "/newest", text: "Nuevas adiciones", icon: Zap },
                { to: "/free", text: "Herramientas gratuitas", icon: Gift },
              ].map(({ to, text, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="p-1 bg-white bg-opacity-10 rounded-lg mr-3 group-hover:bg-opacity-20 transition-all">
                      <Icon size={14} />
                    </div>
                    <span className="group-hover:font-medium">{text}</span>
                    <ChevronRight
                      size={14}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <BookOpen size={20} className="mr-2 text-[#9CD1D4]" />
              Recursos
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/blog", text: "Blog", icon: BookOpen },
                {
                  to: "/suggest",
                  text: "Sugerir herramienta",
                  icon: MessageSquare,
                },
                { to: "/faqs", text: "FAQs", icon: HelpCircle },
              ].map(({ to, text, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="p-1 bg-white bg-opacity-10 rounded-lg mr-3 group-hover:bg-opacity-20 transition-all">
                      <Icon size={14} />
                    </div>
                    <span className="group-hover:font-medium">{text}</span>
                    <ChevronRight
                      size={14}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white border-opacity-20">
                <a
                  href="https://github.com/MaySpaceDu/maydev-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-[#E3F5F5] dark:text-gray-300 hover:text-white dark:hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <div className="p-1 bg-white bg-opacity-10 rounded-lg mr-3 group-hover:bg-opacity-20 transition-all">
                    <Github size={14} />
                  </div>
                  <span className="group-hover:font-medium">Código fuente</span>
                  <ChevronRight
                    size={14}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <Mail size={18} className="mr-2 text-[#9CD1D4]" />
              Newsletter
            </h4>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#9CD1D4] opacity-5 rounded-lg"></div>
              <div className="relative bg-white bg-opacity-5 dark:bg-gray-700 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-10">
                <NewsletterSignup
                  title=""
                  description="Suscríbete para recibir actualizaciones en tu correo!"
                  buttonText="Suscribirse"
                  className="bg-transparent shadow-none p-0 dark:bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with improved styling */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 h-px"></div>
          <div className="pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-sm text-[#E3F5F5] dark:text-gray-400">
                &copy; {currentYear} MayTools. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-2 text-xs text-[#B8D8DA] dark:text-gray-500">
                <span>Hecho con</span>
                <span className="text-red-400 animate-pulse">♥</span>
                <span>para developers</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm">
              {[
                {
                  to: "/privacy",
                  text: "Política de Privacidad",
                  icon: Shield,
                },
                { to: "/terms", text: "Términos de Uso", icon: FileText },
                { to: "/contact", text: "Contacto", icon: Phone },
                { to: "/about", text: "Acerca de", icon: Info },
              ].map(({ to, text, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex items-center text-[#E3F5F5] dark:text-gray-400 hover:text-white dark:hover:text-white transition-all duration-200"
                >
                  <Icon
                    size={14}
                    className="mr-1 group-hover:scale-110 transition-transform"
                  />
                  <span>{text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
