import React, { useState, useEffect, useRef } from "react";
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

  // Usar useRef para almacenar los límites y evitar re-renderizados
  const limits = useRef({
    maxFeatured: parseInt(import.meta.env.VITE_MAX_FEATURED_TOOLS || "6", 10),
    maxNew: parseInt(import.meta.env.VITE_MAX_NEW_TOOLS || "4", 10),
  });

  // Cargar datos - Ahora este efecto solo se ejecuta una vez al montar el componente
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // En un entorno real, estas podrían ser llamadas a API
        const allTools = getAllTools();
        const allCategories = getAllCategories();
        const featured = getFeaturedTools(limits.current.maxFeatured);
        const newest = getNewestTools(limits.current.maxNew);

        setTools(allTools);
        setCategories(allCategories);
        setFeaturedTools(featured);
        setNewestTools(newest);

        // Registrar vista de página en analytics
        analytics.trackPageView("Home");
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    // Este efecto solo debe ejecutarse una vez al montar el componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
     <section className="relative rounded-2xl overflow-hidden mb-16 border border-slate-200/80 dark:border-slate-800 shadow-sm">
  
  {/* ESTILO: Se aplica el fondo 'Cielo Suave' completo para consistencia */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-200 dark:from-sky-900 dark:via-cyan-900 dark:to-blue-900"></div>
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-white/30 to-transparent blur-3xl"></div>
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.07]"></div>
  </div>

  {/* Contenido con el layout centrado y los nuevos estilos de texto */}
  <div className="relative py-12 px-6 sm:px-10 md:py-16 lg:py-20 max-w-4xl mx-auto text-center">
    
    {/* ESTILO: Se aplica la tipografía adaptable para modo claro/oscuro */}
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-sky-900 dark:text-white dark:drop-shadow-md leading-snug mb-6 animate-fade-in tracking-wide max-w-3xl mx-auto">
      Eleva Tu Proyecto con Herramientas que Marcan la Diferencia
    </h1>

    <p className="text-base md:text-lg lg:text-xl text-sky-800/90 dark:text-white/90 dark:drop-shadow-sm mb-8 max-w-2xl mx-auto animate-fade-in delay-150 leading-relaxed tracking-normal">
      Explora stacks, librerías y utilidades diseñadas para optimizar cada etapa de tu proceso como desarrollador.
    </p>

    {/* El buscador se mantiene, integrado en el nuevo diseño */}
    <div className="max-w-2xl mx-auto mb-8 animate-fade-in delay-300">
      <SearchBar
        onSearch={handleSearch}
        placeholder="Busca entre +100 herramientas para desarrolladores..."
        autoFocus={false}
      />
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
          categories={categories.slice(0, 12)}
          onCategoryClick={(category) => {
            analytics.trackEvent(EventType.CATEGORY_VIEW, { category });
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
              className="inline-flex items-center px-6 py-3 bg-[#4DA6B3] hover:bg-[#67B9C4] text-white rounded-lg transition-colors"

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
  const colors: Record<Category, string> = {
    // === DESARROLLO CORE ===
    frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300',
    backend: 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300',
    fullstack: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    mobile: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    desktop: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    api: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',
    languages: 'bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300',

    // === INFRAESTRUCTURA Y OPERACIONES ===
    devops: 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300',
    hosting: 'bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300',
    cloud: 'bg-cyan alkoh-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',
    infrastructure: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    networking: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300',
    cdn: 'bg-sky-100 text-sky-800 dark:bg-sky-800/20 dark:text-sky-300',
    monitoring: 'bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300',
    performance: 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',

    // === DATOS Y PERSISTENCIA ===
    database: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    storage: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    backup: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300',
    analytics: 'bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300',
    'data-engineering': 'bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300',

    // === HERRAMIENTAS DE DESARROLLO ===
    testing: 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',
    security: 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300',
    automation: 'bg-stone-100 text-stone-800 dark:bg-stone-800/20 dark:text-stone-300',
    documentation: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800/20 dark:text-neutral-300',
    'version-control': 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',

    // === DISEÑO Y UX ===
    design: 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',
    'ui-libraries': 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',

    // === PRODUCTIVIDAD ===
    productivity: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    collaboration: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    'project-management': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',

    // === TECNOLOGÍAS EMERGENTES ===
    ai: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300',
    blockchain: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    iot: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    'ar-vr': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',

    // === APLICACIONES ESPECÍFICAS ===
    cms: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    ecommerce: 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300',
    gaming: 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300',
    social: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',

    // === SERVICIOS DE NEGOCIO ===
    payment: 'bg-rose-100 text-rose-800 dark:bg-rose-800/20 dark:text-rose-300',
    email: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    sms: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    crm: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    erp: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    marketing: 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',
    seo: 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300',

    // === UTILIDADES ===
    localization: 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300',
    education: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    utilities: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300',
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
    fullstack: "Fullstack",
    mobile: "Móvil",
    desktop: "Escritorio",
    api: "API",
    languages: "Lenguajes de Programación",

    // === INFRAESTRUCTURA Y OPERACIONES ===
    devops: "DevOps",
    hosting: "Hosting",
    cloud: "Cloud",
    infrastructure: "Infraestructura",
    networking: "Redes",
    cdn: "CDN",
    monitoring: "Monitoreo",
    performance: "Rendimiento",

    // === DATOS Y PERSISTENCIA ===
    database: "Base de Datos",
    storage: "Almacenamiento",
    backup: "Respaldo",
    analytics: "Analíticas",
    "data-engineering": "Ingeniería de Datos",

    // === HERRAMIENTAS DE DESARROLLO ===
    testing: "Testing",
    security: "Seguridad",
    automation: "Automatización",
    documentation: "Documentación",
    "version-control": "Control de Versiones",

    // === DISEÑO Y UX ===
    design: "Diseño",
    "ui-libraries": "Bibliotecas de UI",

    // === PRODUCTIVIDAD ===
    productivity: "Productividad",
    collaboration: "Colaboración",
    "project-management": "Gestión de Proyectos",

    // === TECNOLOGÍAS EMERGENTES ===
    ai: "IA",
    blockchain: "Blockchain",
    iot: "IoT",
    "ar-vr": "AR/VR",

    // === APLICACIONES ESPECÍFICAS ===
    cms: "CMS",
    ecommerce: "E-commerce",
    gaming: "Gaming",
    social: "Redes Sociales",

    // === SERVICIOS DE NEGOCIO ===
    payment: "Pagos",
    email: "Email",
    sms: "SMS",
    crm: "CRM",
    erp: "ERP",
    marketing: "Marketing",
    seo: "SEO",

    // === UTILIDADES ===
    localization: "Localización",
    education: "Educación",
    utilities: "Utilidades",
  };
  return labels[category] || category;
};



export default HomePage;
