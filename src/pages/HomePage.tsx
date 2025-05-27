import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import StatsSection from "../components/StatsSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedTools from "../components/FeaturedTools";
import NewsletterSignup from "../components/NewsletterSignup";
import {
  Tool,
  Category,
  getAllTools,
  getAllCategories,
  getFeaturedTools,
  getNewestTools,
} from "../data/tools";
import { ArrowRight, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import useAnalytics from "../hooks/useAnalytics";
import { EventType } from "../utils/analytics";

const HomePage: React.FC = () => {
  // Estados para los datos
  const [tools, setTools] = useState<Tool[]>([]);
  const [featuredTools, setFeaturedTools] = useState<Tool[]>([]);
  const [newestTools, setNewestTools] = useState<Tool[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Análisis para seguimiento
  const analytics = useAnalytics();

  // Obtener límites de herramientas desde variables de entorno
  const maxFeatured = parseInt(
    import.meta.env.VITE_MAX_FEATURED_TOOLS || "6",
    10
  );
  const maxNew = parseInt(import.meta.env.VITE_MAX_NEW_TOOLS || "4", 10);

  // Cargar datos
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // En un entorno real, estas podrían ser llamadas a API
        const allTools = getAllTools();
        const allCategories = getAllCategories();
        const featured = getFeaturedTools(maxFeatured);
        const newest = getNewestTools(maxNew);

        setTools(allTools);
        setCategories(allCategories);
        setFeaturedTools(featured);
        setNewestTools(newest);

        // Registrar vista de página en analytics
        //analytics.trackPageView('Home');
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [maxFeatured, maxNew, analytics]);

  // Manejar búsqueda
  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Registrar búsqueda en analytics
      analytics.trackSearch(query);

      // Navegar a la página de resultados (esto lo manejará el componente SearchBar)
    }
  };

  return (
    <Layout>
      {/* Hero Section con búsqueda */}
      <section className="relative bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 rounded-xl overflow-hidden shadow-lg mb-16">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative py-16 px-6 sm:px-12 md:py-20 lg:py-24 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Descubre las Mejores Herramientas para Desarrolladores
          </h1>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
            Una colección cuidadosamente seleccionada de herramientas,
            frameworks y recursos para impulsar tu productividad
          </p>

          {/* Buscador principal */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in delay-300">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Busca entre +100 herramientas para desarrolladores..."
              autoFocus={false}
            />
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-500">
            <Link
              to="/categories"
              className="px-6 py-3 bg-white text-[#67A2A8] hover:bg-gray-100 rounded-lg font-medium transition-colors shadow hover-float"
            >
              Explorar Categorías
            </Link>
            <Link
              to="/newest"
              className="px-6 py-3 bg-transparent text-white border border-white hover:bg-white/10 rounded-lg font-medium transition-colors hover-float"
            >
              Novedades
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      {!loading && (
        <StatsSection
          tools={tools}
          categories={categories}
          className="mb-16 animate-fade-in"
        />
      )}

      {/* Herramientas destacadas */}
      {featuredTools.length > 0 && (
        <section className="mb-20 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <Sparkles size={24} className="mr-3 text-amber-500" />
              Herramientas Destacadas
            </h2>
            <Link
              to="/popular"
              className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-sm font-medium"
            >
              Ver todas
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>

          <FeaturedTools
            tools={featuredTools}
            showTitle={false}
            showViewAll={false}
          />
        </section>
      )}

      {/* Categorías */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Categorías
          </h2>
          <Link
            to="/categories"
            className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-sm font-medium"
          >
            Ver todas
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>

        <CategoriesSection
          categories={categories}
          onCategoryClick={(category) => {
            analytics.trackEvent(EventType.CATEGORY_CLICK, { category });
          }}
        />
      </section>

      {/* Herramientas nuevas */}
      {newestTools.length > 0 && (
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <Clock size={24} className="mr-3 text-green-500" />
              Añadidas Recientemente
            </h2>
            <Link
              to="/newest"
              className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-sm font-medium"
            >
              Ver todas
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newestTools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tool/${tool.id}`}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 cascade-item animate-fade-in"
                onClick={() =>
                  analytics.trackToolView(tool.id, tool.name, {
                    source: "homepage_newest",
                  })
                }
              >
                <div className="flex items-center mb-3">
                  {tool.image ? (
                    <div className="w-10 h-10 rounded overflow-hidden mr-3">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-[#E3F5F5] dark:bg-[#67A2A8]/30 text-[#67A2A8] dark:text-[#9CD1D4] rounded flex items-center justify-center mr-3">
                      {tool.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {tool.name}
                    </h3>
                    <span
                      className={`text-xs ${getCategoryColorClass(
                        tool.category
                      )}`}
                    >
                      {getCategoryLabel(tool.category)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA y Newsletter */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Llamada a la acción */}
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿Conoces una herramienta genial?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ayúdanos a crecer sugiriendo herramientas que te parezcan útiles
            para otros desarrolladores.
          </p>
          <div>
            <Link
              to="/suggest"
              className="inline-flex items-center px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              Sugerir herramienta
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterSignup />
      </section>
    </Layout>
  );
};

// Helper function para obtener la clase de color según la categoría
const getCategoryColorClass = (category: Category): string => {
  const colors: Record<string, string> = {
    frontend:
      "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    backend:
      "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    devops:
      "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    design: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    productivity:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    testing:
      "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    database:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    api: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    security: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    mobile:
      "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    ai: "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300",
  };

  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  );
};

// Helper function para obtener el nombre amigable de la categoría
const getCategoryLabel = (category: Category): string => {
  const labels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    design: "Diseño",
    productivity: "Productividad",
    testing: "Testing",
    database: "Base de datos",
    api: "API",
    security: "Seguridad",
    mobile: "Mobile",
    ai: "IA",
  };

  return labels[category] || category;
};

export default HomePage;
