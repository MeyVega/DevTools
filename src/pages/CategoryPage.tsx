import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Category,
  Tool,
  getToolsByCategory,
  getCategoryLabel,
  getAllCategories,
} from "../data/tools";
import {
  ArrowLeft,
  Code,
  Grid,
  List,
  Filter,
  X,
  CheckSquare,
  Search,
} from "lucide-react";
import useAnalytics from "../hooks/useAnalytics";
import { EventType } from "../utils/analytics";

// Definir los filtros disponibles
type FilterType = "all" | "free" | "freemium" | "paid";
type SortType = "name" | "rating" | "date";
type ViewType = "grid" | "list";

const CategoryPage: React.FC = () => {
  // Obtener categoría desde URL
  const { category } = useParams<{ category: string }>();

  // Estado para los datos y la UI
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeSort, setActiveSort] = useState<SortType>("rating");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Analytics
  const analytics = useAnalytics();

  // Usar useRef para mantener valores estables
  const config = useRef({
    categories: getAllCategories(),
  });

  // Validar la categoría y cargar datos
  useEffect(() => {
    const loadCategory = async () => {
      setLoading(true);
      setError(null);

      try {
        // Validar que la categoría existe
        const categoryExists = config.current.categories.includes(category as Category);

        if (!categoryExists) {
          setError(`La categoría '${category}' no existe`);
          setLoading(false);
          return;
        }

        // Obtener herramientas para esta categoría
        const categoryTools = getToolsByCategory(category as Category);
        setTools(categoryTools);

        // Registrar vista en analytics
        analytics.trackEvent(EventType.CATEGORY_VIEW, { category });

        // Resetear filtros y búsqueda
        setActiveFilter("all");
        setActiveSort("rating");
        setSearchTerm("");
      } catch (err) {
        console.error("Error cargando categoría:", err);
        setError("Error al cargar las herramientas");
      } finally {
        setLoading(false);
      }
    };

    loadCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]); // Solo depende de category para recargar al cambiar la categoría

  // Aplicar filtros y ordenamiento
  const filteredTools = tools
    .filter((tool) => {
      // Aplicar filtro de precio
      if (activeFilter === "free" && !tool.isFree) return false;
      if (activeFilter === "freemium" && !(tool.hasFreeTier && !tool.isFree))
        return false;
      if (activeFilter === "paid" && (tool.isFree || tool.hasFreeTier))
        return false;

      // Aplicar búsqueda
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        return (
          tool.name.toLowerCase().includes(search) ||
          tool.description.toLowerCase().includes(search) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(search))
        );
      }

      return true;
    })
    .sort((a, b) => {
      // Aplicar ordenamiento
      if (activeSort === "name") {
        return a.name.localeCompare(b.name);
      } else if (activeSort === "rating") {
        const ratingA = a.stars || 0;
        const ratingB = b.stars || 0;
        return ratingB - ratingA;
      } else if (activeSort === "date") {
        return (
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );
      }
      return 0;
    });

  // Manejar cambio de filtro
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    analytics.trackEvent(EventType.FILTER, {
      category,
      filter_type: "price",
      filter_value: filter,
    });
  };

  // Manejar cambio de ordenamiento
  const handleSortChange = (sort: SortType) => {
    setActiveSort(sort);
    analytics.trackEvent(EventType.FILTER, {
      category,
      filter_type: "sort",
      filter_value: sort,
    });
  };

  // Manejar cambio de vista
  const handleViewChange = (view: ViewType) => {
    setViewType(view);
    analytics.trackEvent(EventType.FILTER, {
      category,
      filter_type: "view",
      filter_value: view,
    });
  };

  // Manejar búsqueda
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      analytics.trackSearch(searchTerm, filteredTools.length, {
        category,
        context: "category_page",
      });
    }
  };

  // Obtener colores para la categoría
  const getCategoryColor = (
    cat: string
  ): { bg: string; text: string; darkBg: string; darkText: string } => {
    const colors: Record<
      string,
      { bg: string; text: string; darkBg: string; darkText: string }
    > = {
      frontend: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        darkBg: "dark:bg-blue-900/20",
        darkText: "dark:text-blue-300",
      },
      backend: {
        bg: "bg-green-100",
        text: "text-green-800",
        darkBg: "dark:bg-green-900/20",
        darkText: "dark:text-green-300",
      },
      devops: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        darkBg: "dark:bg-purple-900/20",
        darkText: "dark:text-purple-300",
      },
      design: {
        bg: "bg-pink-100",
        text: "text-pink-800",
        darkBg: "dark:bg-pink-900/20",
        darkText: "dark:text-pink-300",
      },
      productivity: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        darkBg: "dark:bg-yellow-900/20",
        darkText: "dark:text-yellow-300",
      },
      testing: {
        bg: "bg-orange-100",
        text: "text-orange-800",
        darkBg: "dark:bg-orange-900/20",
        darkText: "dark:text-orange-300",
      },
      database: {
        bg: "bg-indigo-100",
        text: "text-indigo-800",
        darkBg: "dark:bg-indigo-900/20",
        darkText: "dark:text-indigo-300",
      },
      api: {
        bg: "bg-cyan-100",
        text: "text-cyan-800",
        darkBg: "dark:bg-cyan-900/20",
        darkText: "dark:text-cyan-300",
      },
      security: {
        bg: "bg-red-100",
        text: "text-red-800",
        darkBg: "dark:bg-red-900/20",
        darkText: "dark:text-red-300",
      },
      mobile: {
        bg: "bg-violet-100",
        text: "text-violet-800",
        darkBg: "dark:bg-violet-900/20",
        darkText: "dark:text-violet-300",
      },
      ai: {
        bg: "bg-emerald-100",
        text: "text-emerald-800",
        darkBg: "dark:bg-emergal-900/20",
        darkText: "dark:text-emerald-300",
      },
    };

    return (
      colors[cat] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
        darkBg: "dark:bg-gray-700",
        darkText: "dark:text-gray-300",
      }
    );
  };

  // Mostrar estado de carga
  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#67A2A8]"></div>
        </div>
      </Layout>
    );
  }

  // Mostrar error
  if (error) {
    return (
      <Layout>
        <div className="py-12 max-w-4xl mx-auto text-center">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">
              {error}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lo sentimos, no pudimos encontrar la categoría solicitada.
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center px-4 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Ver todas las categorías
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Colores para la categoría actual
  const categoryColor = getCategoryColor(category as string);

  return (
    <Layout>
      {/* Navegación / Breadcrumbs */}
      <div className="mb-6">
        <Link
          to="/categories"
          className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Todas las categorías
        </Link>
      </div>

      {/* Header */}
      <section className="mb-8">
        <div
          className={`${categoryColor.bg} ${categoryColor.darkBg} rounded-xl overflow-hidden shadow-sm p-8 md:p-10`}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:flex-1 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm mr-4">
                  <Code
                    className={`h-6 w-6 ${categoryColor.text} ${categoryColor.darkText}`}
                  />
                </div>
                <h1
                  className={`text-2xl md:text-3xl font-bold ${categoryColor.text} ${categoryColor.darkText}`}
                >
                  {getCategoryLabel(category as Category)}
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                {getCategoryDescription(category as Category)}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {filteredTools.length} herramientas encontradas
              </div>

              <button
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} className="mr-2" />
                {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros y Herramientas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {/* Sidebar de filtros */}
        <div
          className={`md:col-span-1 ${
            showFilters ? "block" : "hidden md:block"
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-4">
            <div className="flex items-center justify-between mb-4 md:hidden">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Filtros
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setShowFilters(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Búsqueda */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Buscar
              </h3>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar en esta categoría..."
                    className="w-full py-2 pl-10 pr-4 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute left-0 top-0 h-full flex items-center justify-center w-10 text-gray-500 dark:text-gray-400"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* Filtros de precio */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Precio
              </h3>
              <div className="space-y-2">
                <FilterButton
                  active={activeFilter === "all"}
                  onClick={() => handleFilterChange("all")}
                >
                  Todos
                </FilterButton>
                <FilterButton
                  active={activeFilter === "free"}
                  onClick={() => handleFilterChange("free")}
                >
                  Gratis
                </FilterButton>
                <FilterButton
                  active={activeFilter === "freemium"}
                  onClick={() => handleFilterChange("freemium")}
                >
                  Freemium
                </FilterButton>
                <FilterButton
                  active={activeFilter === "paid"}
                  onClick={() => handleFilterChange("paid")}
                >
                  De pago
                </FilterButton>
              </div>
            </div>

            {/* Ordenamiento */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Ordenar por
              </h3>
              <div className="space-y-2">
                <FilterButton
                  active={activeSort === "rating"}
                  onClick={() => handleSortChange("rating")}
                >
                  Mejor valoradas
                </FilterButton>
                <FilterButton
                  active={activeSort === "date"}
                  onClick={() => handleSortChange("date")}
                >
                  Más recientes
                </FilterButton>
                <FilterButton
                  active={activeSort === "name"}
                  onClick={() => handleSortChange("name")}
                >
                  Nombre A-Z
                </FilterButton>
              </div>
            </div>

            {/* Tipo de vista */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Vista
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewChange("grid")}
                  className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                    viewType === "grid"
                      ? "bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                  }`}
                >
                  <Grid size={18} className="mr-2" />
                  Cuadrícula
                </button>
                <button
                  onClick={() => handleViewChange("list")}
                  className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                    viewType === "list"
                      ? "bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                  }`}
                >
                  <List size={18} className="mr-2" />
                  Lista
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de herramientas */}
        <div className="md:col-span-3">
          {/* Resultados */}
          {filteredTools.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                No se encontraron herramientas con los filtros seleccionados.
              </div>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchTerm("");
                }}
                className="text-[#67A2A8] dark:text-[#9CD1D4] font-medium hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              {/* Vista de cuadrícula */}
              {viewType === "grid" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool, index) => (
                    <Link
                      key={tool.id}
                      to={`/tool/${tool.id}`}
                      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
                      onClick={() =>
                        analytics.trackToolView(tool.id, tool.name, {
                          source: "category_page",
                        })
                      }
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center mb-4">
                        {tool.image ? (
                          <div className="w-12 h-12 rounded overflow-hidden mr-3">
                            <img
                              src={tool.image}
                              alt={tool.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-[#E3F5F5] dark:bg-[#67A2A8]/30 text-[#67A2A8] dark:text-[#9CD1D4] rounded flex items-center justify-center mr-3">
                            {tool.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {tool.name}
                          </h3>
                          <div className="flex items-center">
                            {tool.stars && (
                              <div className="flex items-center text-amber-500 text-sm">
                                {tool.stars.toFixed(1)}
                                <span className="ml-1">★</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {tool.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                            +{tool.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Vista de lista */}
              {viewType === "list" && (
                <div className="space-y-4">
                  {filteredTools.map((tool, index) => (
                    <Link
                      key={tool.id}
                      to={`/tool/${tool.id}`}
                      className="block bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
                      onClick={() =>
                        analytics.trackToolView(tool.id, tool.name, {
                          source: "category_page_list",
                        })
                      }
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start">
                        {tool.image ? (
                          <div className="w-14 h-14 rounded overflow-hidden mr-4 flex-shrink-0">
                            <img
                              src={tool.image}
                              alt={tool.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 bg-[#E3F5F5] dark:bg-[#67A2A8]/30 text-[#67A2A8] dark:text-[#9CD1D4] rounded flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-lg font-semibold">
                              {tool.name.charAt(0)}
                            </span>
                          </div>
                        )}

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <h3 className="font-medium text-gray-900 dark:text-white text-lg">
                              {tool.name}
                            </h3>
                            <div className="flex items-center mt-1 sm:mt-0">
                              {tool.stars && (
                                <div className="flex items-center text-amber-500">
                                  {tool.stars.toFixed(1)}
                                  <span className="ml-1">★</span>
                                </div>
                              )}
                              <span
                                className={`ml-3 text-xs px-2 py-1 rounded-full ${
                                  tool.isFree
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                    : tool.hasFreeTier
                                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                }`}
                              >
                                {tool.isFree
                                  ? "Gratis"
                                  : tool.hasFreeTier
                                  ? "Freemium"
                                  : "De pago"}
                              </span>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {tool.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {tool.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* CTA / Newsletter */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿Te gustaría ver más herramientas?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Si conoces alguna herramienta que debería estar en este catálogo, no
            dudes en compartirla con nosotros.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/suggest"
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
              onClick={() =>
                analytics.trackButtonClick("suggest_tool", {
                  from: "category_page",
                  category,
                })
              }
            >
              Sugerir herramienta
            </Link>

            <Link
              to="/categories"
              className="px-6 py-3 bg-white text-[#67A2A8] hover:bg-gray-100 border border-[#67A2A8] rounded-lg transition-colors"
            >
              Explorar otras categorías
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Componente para botón de filtro
interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  active,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center w-full px-3 py-2 rounded-md text-left transition-colors ${
        active
          ? "bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      {active ? (
        <CheckSquare size={16} className="mr-2 flex-shrink-0" />
      ) : (
        <div className="w-4 h-4 mr-2" />
      )}
      <span>{children}</span>
    </button>
  );
};

// Función para obtener descripciones de categorías
const getCategoryDescription = (category: Category): string => {
  const descriptions: Record<Category, string> = {
    frontend:
      "Herramientas para construir interfaces de usuario atractivas y funcionales, incluyendo frameworks, librerías y componentes.",
    backend:
      "Todo lo necesario para el desarrollo del lado del servidor, desde APIs hasta bases de datos y servicios.",
    devops:
      "Herramientas para automatizar, gestionar y mejorar el ciclo de vida del desarrollo y la infraestructura.",
    design:
      "Recursos para diseño UI/UX, prototipos, maquetación y diseño visual de aplicaciones.",
    productivity:
      "Mejora tu flujo de trabajo con herramientas que incrementan la eficiencia y productividad.",
    testing:
      "Frameworks y utilidades para pruebas unitarias, de integración, end-to-end y más.",
    database:
      "Sistemas de gestión de bases de datos, ORMs, herramientas de migración y visualización.",
    api: "Todo para diseñar, documentar, probar y consumir APIs de forma efectiva.",
    security:
      "Protege tus aplicaciones con estas herramientas de seguridad y auditoría.",
    mobile:
      "Desarrolla apps móviles con frameworks cross-platform y herramientas nativas.",
    ai: "Integra inteligencia artificial, machine learning y procesamiento de datos en tus proyectos.",
    
    // Agregar las nuevas categorías:
    analytics:
      "Analiza el comportamiento de usuarios, métricas de rendimiento y datos de aplicaciones web.",
    monitoring:
      "Supervisa la salud, rendimiento y disponibilidad de tus aplicaciones y servicios.",
    cms:
      "Sistemas de gestión de contenido para crear y administrar sitios web dinámicos.",
    hosting:
      "Plataformas de alojamiento web, servicios en la nube y soluciones de deployment.",
    cdn:
      "Redes de distribución de contenido para acelerar la entrega de tus aplicaciones web.",
    payment:
      "Integra sistemas de pago seguro, procesamiento de transacciones y facturación.",
    email:
      "Servicios de marketing por correo, transaccionales y gestión de campañas de email.",
    documentation:
      "Crea y mantén documentación técnica, wikis y bases de conocimiento.",
    automation:
      "Automatiza tareas repetitivas, flujos de trabajo y procesos de desarrollo.",
    gaming:
      "Engines, frameworks y herramientas para desarrollo de videojuegos y aplicaciones interactivas.",
    ecommerce:
      "Plataformas y herramientas para crear tiendas online y sistemas de comercio electrónico.",
    marketing:
      "Herramientas de marketing digital, SEO, redes sociales y análisis de campañas.",
    seo:
      "Optimiza tu sitio web para motores de búsqueda y mejora su visibilidad online.",
    social:
      "Gestiona presencia en redes sociales, programa contenido y analiza engagement.",
    performance:
      "Optimiza la velocidad, rendimiento y experiencia de usuario de tus aplicaciones.",
    crm:
      "Gestiona relaciones con clientes, ventas, leads y procesos comerciales.",
    erp:
      "Sistemas de planificación empresarial para gestionar recursos y procesos organizacionales.",
    backup:
      "Soluciones de respaldo, recuperación de datos y continuidad del negocio.",
    storage:
      "Servicios de almacenamiento en la nube, gestión de archivos y bases de datos.",
    networking:
      "Herramientas de redes, VPNs, CDNs y gestión de infraestructura de conectividad.",
    localization:
      "Traduce y adapta tus aplicaciones para diferentes idiomas y mercados globales.",
  };

  return (
    descriptions[category] ||
    "Explora nuestra colección de herramientas en esta categoría."
  );
};

export default CategoryPage;