import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ArrowUp, Cookie, Check, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  showCookieConsent?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showFooter = true,
  showCookieConsent = true
}) => {
  useScrollTop();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [cookieAnimationOut, setCookieAnimationOut] = useState(false);
  const { theme } = useTheme();

  // Verificar si el usuario ya ha aceptado las cookies
  useEffect(() => {
    const cookiesStatus = localStorage.getItem('cookiesAccepted');
    if (cookiesStatus === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  // Monitorear el scroll para mostrar/ocultar el botón "scroll to top"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll hacia arriba cuando se hace clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Manejar aceptación de cookies con animación
  const handleAcceptCookies = () => {
    setCookieAnimationOut(true);
    setTimeout(() => {
      localStorage.setItem('cookiesAccepted', 'true');
      setCookiesAccepted(true);
    }, 300);
  };

  return (
    <div className={`min-h-screen flex flex-col relative overflow-x-hidden ${theme === 'dark'
      ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white'
      : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900'
      } transition-all duration-500`}>

      {/* Efectos decorativos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark'
          ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
          : 'bg-gradient-to-br from-blue-200 to-cyan-200'
          }`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-15 ${theme === 'dark'
          ? 'bg-gradient-to-tr from-purple-500 to-pink-500'
          : 'bg-gradient-to-tr from-purple-200 to-pink-200'
          }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-10 ${theme === 'dark'
          ? 'bg-gradient-to-r from-green-500 to-emerald-500'
          : 'bg-gradient-to-r from-green-200 to-emerald-200'
          }`}></div>
      </div>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex-grow relative z-10">
        <div className={`${theme === 'dark'
          ? 'bg-gray-900/50'
          : 'bg-white/60'
          } backdrop-blur-sm rounded-3xl p-8 lg:p-12 transition-all duration-300`}>
          {children}
        </div>
      </main>

      {/* Footer */}
      {showFooter && <Footer />}

      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="p-2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white hover:dark:bg-gray-700 transition-colors duration-200"
          >
            <ArrowUp size={20} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      )}


      {/* Notificación de cookies moderna */}
      {showCookieConsent && !cookiesAccepted && (
        <div className={`fixed bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-md z-50 transform transition-all duration-500 ${cookieAnimationOut ? 'translate-y-full opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
          }`}>
          <div className={`${theme === 'dark'
            ? 'bg-gray-800/95 border-gray-700'
            : 'bg-white/95 border-gray-200'
            } backdrop-blur-xl rounded-2xl shadow-2xl border p-6 relative overflow-hidden`}>

            {/* Efecto decorativo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"></div>

            {/* Icono de cookie */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Cookie className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  🍪 Cookies y Privacidad
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico del sitio.
                  <Link
                    to="/privacy"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium ml-1 hover:underline"
                  >
                    Leer política de privacidad
                  </Link>
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptCookies}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-sm font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    <Check className="w-4 h-4" />
                    Aceptar todas
                  </button>
                </div>

                {/* Indicador de seguridad */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Tus datos están protegidos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;