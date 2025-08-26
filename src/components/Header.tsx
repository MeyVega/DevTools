import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Moon, Sun, ChevronDown, Bookmark } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import SearchBar from "./SearchBar";
import NavLink from "./NavLink";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const searchRef = useRef<HTMLDivElement>(null);

  // Cambiar la apariencia del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar búsqueda cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Manejar la búsqueda
  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    }

    // Cerrar la barra de búsqueda cuando se realiza la búsqueda
    setIsSearchOpen(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-gradient-to-b from-white/80 to-transparent dark:from-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              {/* Logo principal con gradiente y efectos */}
              <div
                className="relative bg-white text-[#67A2A8] dark:bg-gray-100 dark:text-[#67A2A8] w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden"
              >
                <img
                  src="/src/img/logodemo.png" 
                  alt="Logo"
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-bold text-xl lg:text-2xl transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-800 dark:text-white"
                    : "bg-gradient-to-r from-[#67A2A8] to-[#4D8B91] bg-clip-text text-transparent dark:from-[#9CD1D4] dark:to-[#67A2A8]"
                } group-hover:scale-105`}
              >
                MayTools
              </span>
            </div>
          </Link>

          {/* Navegación Desktop mejorada */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              label="Inicio"
              isScrolled={isScrolled}
              onClick={handleLinkClick}
            />

            <div className="relative group">
              <button
                className={`px-4 py-2 rounded-xl flex items-center transition-all duration-200 group ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-[#67A2A8]/10 hover:text-[#67A2A8] dark:hover:bg-[#9CD1D4]/10 dark:hover:text-[#9CD1D4]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/20 backdrop-blur-sm"
                }`}
                onClick={() => toggleSubmenu("categories")}
              >
                Categorías
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-all duration-200 ${
                    showSubmenu === "categories" ? "rotate-180" : ""
                  } group-hover:scale-110`}
                />
              </button>

              {showSubmenu === "categories" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl py-3 z-50 border border-gray-200/50 dark:border-gray-700/50 animate-in slide-in-from-top-2 duration-200">
                  {[
                    { to: "/category/frontend", label: "Frontend", icon: "🎨" },
                    { to: "/category/backend", label: "Backend", icon: "⚙️" },
                    { to: "/category/devops", label: "DevOps", icon: "🚀" },
                    { to: "/category/design", label: "Design", icon: "✨" },
                  ].map(({ to, label, icon }) => (
                    <Link
                      key={to}
                      to={to}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 hover:text-[#67A2A8] dark:hover:text-[#9CD1D4] transition-all duration-200 group"
                      onClick={handleLinkClick}
                    >
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                        {icon}
                      </span>
                      <span className="font-medium">{label}</span>
                    </Link>
                  ))}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-4 my-2"></div>
                  <Link
                    to="/categories"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-[#67A2A8] dark:text-[#9CD1D4] hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    <span className="text-lg mr-3">📋</span>
                    Ver todas las categorías
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/popular"
              label="Populares"
              isScrolled={isScrolled}
              onClick={handleLinkClick}
            />
            <NavLink
              to="/newest"
              label="Novedades"
              isScrolled={isScrolled}
              onClick={handleLinkClick}
            />
            <NavLink
              to="/free"
              label="Gratuitas"
              isScrolled={isScrolled}
              onClick={handleLinkClick}
            />
            <NavLink
              to="/blog"
              label="Blog"
              isScrolled={isScrolled}
              onClick={handleLinkClick}
            />
            <NavLink
              to="/about"
              label="Acerca de"
              isScrolled={isScrolled}
              onClick={handleLinkClick}
            />
          </nav>

          {/* Botones de acción */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Búsqueda en desktop */}
            <div className="relative" ref={searchRef}>
              {isSearchOpen ? (
                <div className="relative w-72 animate-in slide-in-from-right-2 duration-300">
                  <SearchBar
                    onSearch={handleSearch}
                    className="w-full"
                    autoFocus={true}
                  />
                </div>
              ) : (
                <button
                  className={`p-3 rounded-2xl transition-all duration-200 group ${
                    isScrolled
                      ? "text-gray-700 hover:bg-[#67A2A8]/10 hover:text-[#67A2A8] dark:text-gray-300 dark:hover:bg-[#9CD1D4]/10 dark:hover:text-[#9CD1D4]"
                      : "text-gray-800 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-800/20 backdrop-blur-sm"
                  }`}
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>
              )}
            </div>

            {/* Alternar modo oscuro */}
            <button
              className={`p-3 rounded-2xl relative overflow-hidden transition-all duration-200 group ${
                isScrolled
                  ? "text-gray-700 hover:bg-[#67A2A8]/10 hover:text-[#67A2A8] dark:text-gray-300 dark:hover:bg-[#9CD1D4]/10 dark:hover:text-[#9CD1D4]"
                  : "text-gray-800 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-800/20 backdrop-blur-sm"
              }`}
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
              }
            >
              <div className="relative z-10">
                {theme === "dark" ? (
                  <Sun
                    size={20}
                    className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300"
                  />
                )}
              </div>
            </button>

            {/* Botón de guardados */}
            <Link
              to="/saved"
              className={`p-3 rounded-2xl relative transition-all duration-200 group ${
                isScrolled
                  ? "text-gray-700 hover:bg-[#67A2A8]/10 hover:text-[#67A2A8] dark:text-gray-300 dark:hover:bg-[#9CD1D4]/10 dark:hover:text-[#9CD1D4]"
                  : "text-gray-800 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-800/20 backdrop-blur-sm"
              }`}
              aria-label="Herramientas guardadas"
            >
              <Bookmark
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              {/* Badge de notificación */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </Link>
          </div>

          {/* Controles Mobile */}
          <div className="flex items-center lg:hidden space-x-2">
            {/* Búsqueda en mobile */}
            <button
              className={`p-2 rounded-xl transition-all duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:bg-[#67A2A8]/10"
                  : "text-gray-800 hover:bg-white/20 backdrop-blur-sm"
              }`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Botón de menú mobile */}
            <button
              className={`p-2 rounded-xl transition-all duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:bg-[#67A2A8]/10"
                  : "text-gray-800 hover:bg-white/20 backdrop-blur-sm"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda mobile */}
      {isSearchOpen && (
        <div className="container mx-auto px-4 py-3 lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50">
          <SearchBar onSearch={handleSearch} className="" autoFocus={true} />
        </div>
      )}

      {/* Menú mobile  */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <nav className="container mx-auto px-4 py-6">
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 rounded-xl transition-all duration-200 group"
                onClick={handleLinkClick}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                  🏠
                </span>
                Inicio
              </Link>

              <div className="py-2 px-4">
                <button
                  className="flex items-center justify-between w-full text-gray-800 dark:text-gray-200 py-2 group"
                  onClick={() => toggleSubmenu("mobile-categories")}
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                      📁
                    </span>
                    <span>Categorías</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      showSubmenu === "mobile-categories" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showSubmenu === "mobile-categories" && (
                  <div className="mt-3 ml-6 space-y-2 animate-in slide-in-from-top-1 duration-200">
                    {[
                      {
                        to: "/category/frontend",
                        label: "Frontend",
                        icon: "🎨",
                      },
                      { to: "/category/backend", label: "Backend", icon: "⚙️" },
                      { to: "/category/devops", label: "DevOps", icon: "🚀" },
                      { to: "/category/design", label: "Design", icon: "✨" },
                    ].map(({ to, label, icon }) => (
                      <Link
                        key={to}
                        to={to}
                        className="flex items-center py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 rounded-lg text-sm transition-all duration-200 group"
                        onClick={handleLinkClick}
                      >
                        <span className="text-base mr-3 group-hover:scale-110 transition-transform">
                          {icon}
                        </span>
                        {label}
                      </Link>
                    ))}
                    <Link
                      to="/categories"
                      className="flex items-center py-2 px-3 text-[#67A2A8] dark:text-[#9CD1D4] font-medium text-sm hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 rounded-lg transition-all duration-200 group"
                      onClick={handleLinkClick}
                    >
                      <span className="text-base mr-3 group-hover:scale-110 transition-transform">
                        📋
                      </span>
                      Ver todas las categorías
                    </Link>
                  </div>
                )}
              </div>

              {[
                { to: "/popular", label: "Populares", icon: "🔥" },
                { to: "/newest", label: "Novedades", icon: "✨" },
                { to: "/free", label: "Gratuitas", icon: "🆓" },
                { to: "/blog", label: "Blog", icon: "📝" },
                { to: "/about", label: "Acerca de", icon: "ℹ️" },
              ].map(({ to, label, icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 rounded-xl transition-all duration-200 group"
                  onClick={handleLinkClick}
                >
                  <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  {label}
                </Link>
              ))}
            </div>

            {/* Controles adicionales mobile */}
            <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    className="p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 transition-all duration-200"
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <Link
                    to="/saved"
                    className="relative p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-[#67A2A8]/10 dark:hover:bg-[#9CD1D4]/10 transition-all duration-200"
                  >
                    <Bookmark size={20} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
