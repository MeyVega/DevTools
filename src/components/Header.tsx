import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, ChevronDown, Bell, Bookmark } from 'lucide-react';
import SearchBar from './SearchBar';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState<string | null>(null);
  
  // Cambiar la apariencia del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Manejar el modo oscuro
  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  // Cambiar modo claro/oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };
  
  // Manejar la búsqueda
  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    }
    
    // Cerrar la barra de búsqueda en móvil cuando se realiza la búsqueda
    if (window.innerWidth < 768) {
      setIsSearchOpen(false);
    }
  };
  
  // Cerrar menú al hacer clic en un enlace (para móvil)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  // Toggle submenu
  const toggleSubmenu = (menu: string) => {
    if (showSubmenu === menu) {
      setShowSubmenu(null);
    } else {
      setShowSubmenu(menu);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-[#67A2A8] text-white w-10 h-10 rounded-lg flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M12 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
              <polyline points="2 8.5 7 3 12 8.5" />
              <polyline points="2 15.5 7 21 12 15.5" />
              <line x1="7" y1="3" x2="7" y2="21" />
            </svg>
          </div>
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-[#67A2A8]'}`}>
            DevTools Catalog
          </span>
        </Link>
        
        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" label="Inicio" isScrolled={isScrolled} onClick={handleLinkClick} />
          
          <div className="relative">
            <button 
              className={`px-3 py-2 rounded-md flex items-center ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
              }`}
              onClick={() => toggleSubmenu('categories')}
            >
              Categorías
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform ${showSubmenu === 'categories' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {/* Dropdown para categorías */}
            {showSubmenu === 'categories' && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                <Link 
                  to="/category/frontend" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E3F5F5] hover:text-[#67A2A8]"
                  onClick={handleLinkClick}
                >
                  Frontend
                </Link>
                <Link 
                  to="/category/backend" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E3F5F5] hover:text-[#67A2A8]"
                  onClick={handleLinkClick}
                >
                  Backend
                </Link>
                <Link 
                  to="/category/devops" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E3F5F5] hover:text-[#67A2A8]"
                  onClick={handleLinkClick}
                >
                  DevOps
                </Link>
                <Link 
                  to="/category/design" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E3F5F5] hover:text-[#67A2A8]"
                  onClick={handleLinkClick}
                >
                  Design
                </Link>
                <Link 
                  to="/categories" 
                  className="block px-4 py-2 text-sm font-medium text-[#67A2A8] border-t border-gray-100 mt-1 pt-1"
                  onClick={handleLinkClick}
                >
                  Ver todas las categorías
                </Link>
              </div>
            )}
          </div>
          
          <NavLink to="/popular" label="Populares" isScrolled={isScrolled} onClick={handleLinkClick} />
          <NavLink to="/newest" label="Novedades" isScrolled={isScrolled} onClick={handleLinkClick} />
          <NavLink to="/blog" label="Blog" isScrolled={isScrolled} onClick={handleLinkClick} />
          <NavLink to="/about" label="Acerca de" isScrolled={isScrolled} onClick={handleLinkClick} />
        </nav>
        
        {/* Botones de acción Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Búsqueda en desktop */}
          {isSearchOpen ? (
            <div className="relative w-64">
              <SearchBar 
                onSearch={handleSearch} 
                className="w-full"
                autoFocus={true}
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button 
              className={`p-2 rounded-full ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
              }`}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          )}
          
          {/* Alternar modo oscuro */}
          <button 
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
            }`}
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Botones de usuario */}
          <button 
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
            }`}
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>
          
          <Link
            to="/saved"
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
            }`}
            aria-label="Saved tools"
          >
            <Bookmark size={20} />
          </Link>
          
          <Link
            to="/login" 
            className="ml-2 px-4 py-2 bg-[#67A2A8] text-white rounded-md hover:bg-[#9CD1D4] transition-colors"
          >
            Acceder
          </Link>
        </div>
        
        {/* Controles Mobile */}
        <div className="flex items-center md:hidden">
          {/* Búsqueda en mobile */}
          <button 
            className={`p-2 mr-2 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
            }`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          {/* Botón de menú mobile */}
          <button 
            className={`p-2 rounded-full ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Barra de búsqueda mobile */}
      {isSearchOpen && (
        <div className="container mx-auto px-4 py-2 md:hidden">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}
      
      {/* Menú mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <Link
              to="/" 
              className="block py-2 px-4 text-gray-800 hover:bg-[#E3F5F5] rounded-md"
              onClick={handleLinkClick}
            >
              Inicio
            </Link>
            <div className="py-2 px-4">
              <button 
                className="flex items-center justify-between w-full text-gray-800"
                onClick={() => toggleSubmenu('mobile-categories')}
              >
                <span>Categorías</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${showSubmenu === 'mobile-categories' ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {showSubmenu === 'mobile-categories' && (
                <div className="mt-2 ml-4 space-y-1">
                  <Link
                    to="/category/frontend" 
                    className="block py-2 px-3 text-gray-700 hover:bg-[#E3F5F5] rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    Frontend
                  </Link>
                  <Link
                    to="/category/backend" 
                    className="block py-2 px-3 text-gray-700 hover:bg-[#E3F5F5] rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    Backend
                  </Link>
                  <Link
                    to="/category/devops" 
                    className="block py-2 px-3 text-gray-700 hover:bg-[#E3F5F5] rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    DevOps
                  </Link>
                  <Link
                    to="/category/design" 
                    className="block py-2 px-3 text-gray-700 hover:bg-[#E3F5F5] rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    Design
                  </Link>
                  <Link
                    to="/categories" 
                    className="block py-2 px-3 text-[#67A2A8] font-medium text-sm"
                    onClick={handleLinkClick}
                  >
                    Ver todas las categorías
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/popular" 
              className="block py-2 px-4 text-gray-800 hover:bg-[#E3F5F5] rounded-md"
              onClick={handleLinkClick}
            >
              Populares
            </Link>
            <Link
              to="/newest" 
              className="block py-2 px-4 text-gray-800 hover:bg-[#E3F5F5] rounded-md"
              onClick={handleLinkClick}
            >
              Novedades
            </Link>
            <Link
              to="/blog" 
              className="block py-2 px-4 text-gray-800 hover:bg-[#E3F5F5] rounded-md"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
            <Link
              to="/about" 
              className="block py-2 px-4 text-gray-800 hover:bg-[#E3F5F5] rounded-md"
              onClick={handleLinkClick}
            >
              Acerca de
            </Link>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex space-x-2">
                <button 
                  className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="p-2 rounded-full text-gray-700 hover:bg-gray-100">
                  <Bell size={20} />
                </button>
                <Link to="/saved" className="p-2 rounded-full text-gray-700 hover:bg-gray-100">
                  <Bookmark size={20} />
                </Link>
              </div>
              
              <Link
                to="/login" 
                className="px-4 py-2 bg-[#67A2A8] text-white rounded-md hover:bg-[#9CD1D4] transition-colors"
                onClick={handleLinkClick}
              >
                Acceder
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

// Componente de enlace de navegación
interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled, onClick }) => {
  return (
    <Link
      to={to} 
      className={`px-3 py-2 rounded-md ${
        isScrolled 
          ? 'text-gray-700 hover:bg-gray-100' 
          : 'text-gray-800 hover:bg-white hover:bg-opacity-20'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;