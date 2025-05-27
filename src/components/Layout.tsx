import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
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
  
  // Manejar aceptación de cookies
  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };
  
  // Mostrar preferencias de cookies
  const handleCookiePreferences = () => {
    // Aquí podrías mostrar un modal con opciones de cookies
    console.log('Mostrar preferencias de cookies');
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-b from-[#E3F5F5] to-white text-gray-900'
    } transition-colors duration-300`}>
      <Header />
      
      {/* Contenido principal */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      {showFooter && <Footer />}
      
      {/* Botón de scroll hacia arriba */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 p-3 bg-[#67A2A8] text-white rounded-full shadow-lg hover:bg-[#9CD1D4] transition-colors z-50 dark:bg-[#9CD1D4] dark:text-gray-800 dark:hover:bg-[#E3F5F5]"
        >
          <ArrowUp size={20} />
        </button>
      )}
      
      {/* Notificación de cookies */}
      {showCookieConsent && !cookiesAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 dark:bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-40 shadow-lg border-t border-gray-700">
          <p className="text-sm mr-4 mb-4 sm:mb-0">
            Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra <Link to="/privacy" className="text-[#9CD1D4] hover:underline">política de cookies</Link>.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={handleCookiePreferences}
              className="px-4 py-1.5 bg-gray-700 dark:bg-gray-800 text-sm rounded hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
            >
              Preferencias
            </button>
            <button 
              onClick={handleAcceptCookies}
              className="px-4 py-1.5 bg-[#67A2A8] dark:bg-[#9CD1D4] text-white dark:text-gray-800 text-sm rounded hover:bg-[#9CD1D4] dark:hover:bg-[#E3F5F5] transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;