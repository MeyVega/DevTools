import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Tool,
  Tag,
  getAllTags,
  getToolsByTag,
  getTagLabel,
  getTagColorClass,
} from "../data/tools";
import {
  ArrowLeft,
  Search,
  Grid,
  List,
  CheckSquare,
} from "lucide-react";
import useAnalytics from "../hooks/useAnalytics";
import { EventType } from "../utils/analytics";

// Definir tipos para filtros y vistas
type FilterType = "all" | "free" | "freemium" | "paid";
type SortType = "name" | "rating" | "date";
type ViewType = "grid" | "list";

const TagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeSort, setActiveSort] = useState<SortType>("rating");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState<ViewType>("grid");

  // Analytics
  const analytics = useAnalytics();

  // Referencia para tags
  const config = useRef({
    tags: getAllTags(),
  });

  // Cargar herramientas al cambiar el tag
  useEffect(() => {
    const loadTag = async () => {
      setLoading(true);
      setError(null);

      if (!tag) {
        setError("No se especificó un tag");
        setLoading(false);
        return;
      }

      try {
        // Validar que el tag existe
        const tagExists = config.current.tags.includes(tag as Tag);
        if (!tagExists) {
          setError(`El tag '${getTagLabel(tag as Tag)}' no existe`);
          setLoading(false);
          return;
        }

        // Obtener herramientas para este tag
        const tagTools = getToolsByTag(tag as Tag);
        setTools(tagTools);

        // Registrar vista en analytics
        analytics.trackEvent(EventType.TAG_VIEW, { tag });

        // Resetear filtros y búsqueda
        setActiveFilter("all");
        setActiveSort("rating");
        setSearchTerm("");
      } catch (err) {
        console.error("Error cargando tag:", err);
        setError("Error al cargar las herramientas");
      } finally {
        setLoading(false);
      }
    };

    loadTag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  // Aplicar filtros y ordenamiento
  const filteredTools = tools
    .filter((tool) => {
      // Filtro de precio
      if (activeFilter === "free" && !tool.isFree) return false;
      if (activeFilter === "freemium" && !(tool.hasFreeTier && !tool.isFree))
        return false;
      if (activeFilter === "paid" && (tool.isFree || tool.hasFreeTier))
        return false;

      // Búsqueda
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        return (
          tool.name.toLowerCase().includes(search) ||
          tool.description.toLowerCase().includes(search) ||
          tool.tags.some((t) => t.toLowerCase().includes(search))
        );
      }

      return true;
    })
    .sort((a, b) => {
      // Ordenamiento
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
      tag,
      filter_type: "price",
      filter_value: filter,
    });
  };

  // Manejar cambio de ordenamiento
  const handleSortChange = (sort: SortType) => {
    setActiveSort(sort);
    analytics.trackEvent(EventType.FILTER, {
      tag,
      filter_type: "sort",
      filter_value: sort,
    });
  };

  // Manejar cambio de vista
  const handleViewChange = (view: ViewType) => {
    setViewType(view);
    analytics.trackEvent(EventType.FILTER, {
      tag,
      filter_type: "view",
      filter_value: view,
    });
  };

  // Manejar búsqueda
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      analytics.trackSearch(searchTerm, filteredTools.length, {
        tag,
        context: "tag_page",
      });
    }
  };

  // Estado de carga
  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#67A2A8]"></div>
        </div>
      </Layout>
    );
  }

  // Estado de error
  if (error) {
    return (
      <Layout>
        <div className="py-12 max-w-2xl mx-auto text-center">
          <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">
              {error}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lo sentimos, no pudimos encontrar este tag.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al Inicio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const tagColor = getTagColorClass(tag as Tag);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Navegación */}
        <div className="mb-4">
          <Link
            to="/tags"
            className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Todas las etiquetas
          </Link>
        </div>

        {/* Header */}
        <section className="mb-6">
          <div className={`${tagColor} rounded-lg p-6 shadow-sm`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getTagLabel(tag as Tag)}
                </h1>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {filteredTools.length} herramientas encontradas
              </div>
            </div>
          </div>
        </section>

        {/* Filtros y Búsqueda */}
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Búsqueda */}
            <form
              onSubmit={handleSearch}
              className="relative flex-1 max-w-md"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar herramientas..."
                className="w-full py-2 pl-10 pr-4 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#67A2A8]"
              />
              <button
                type="submit"
                className="absolute left-0 top-0 h-full flex items-center justify-center w-10 text-gray-500 dark:text-gray-400"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Filtros y Vista */}
            <div className="flex items-center gap-4">
              <select
                value={activeFilter}
                onChange={(e) => handleFilterChange(e.target.value as FilterType)}
                className="py-2 px-3 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#67A2A8]"
              >
                <option value="all">Todos</option>
                <option value="free">Gratis</option>
                <option value="freemium">Freemium</option>
                <option value="paid">De pago</option>
              </select>
              <select
                value={activeSort}
                onChange={(e) => handleSortChange(e.target.value as SortType)}
                className="py-2 px-3 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#67A2A8]"
              >
                <option value="rating">Mejor valoradas</option>
                <option value="date">Más recientes</option>
                <option value="name">Nombre A-Z</option>
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => handleViewChange("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewType === "grid"
                      ? "bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => handleViewChange("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewType === "list"
                      ? "bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Herramientas */}
        {filteredTools.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No se encontraron herramientas con los filtros seleccionados.
            </p>
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
            {/* Vista de Cuadrícula */}
            {viewType === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={`/tool/${tool.id}`}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1"
                    onClick={() =>
                      analytics.trackToolView(tool.id, tool.name, {
                        source: "tag_page_grid",
                      })
                    }
                  >
                    <div className="flex items-center mb-3">
                      {tool.image ? (
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-10 h-10 rounded mr-3 object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-[#E3F5F5] dark:bg-[#67A2A8]/30 text-[#67A2A8] dark:text-[#9CD1D4] rounded flex items-center justify-center mr-3">
                          {tool.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {tool.name}
                        </h3>
                        {tool.stars && (
                          <div className="flex items-center text-amber-500 text-sm">
                            {tool.stars.toFixed(1)} ★
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                      {tool.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {getTagLabel(t)}
                        </span>
                      ))}
                      {tool.tags.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                          +{tool.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Vista de Lista */}
            {viewType === "list" && (
              <div className="space-y-4">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={`/tool/${tool.id}`}
                    className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1"
                    onClick={() =>
                      analytics.trackToolView(tool.id, tool.name, {
                        source: "tag_page_list",
                      })
                    }
                  >
                    <div className="flex items-start">
                      {tool.image ? (
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-12 h-12 rounded mr-4 object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-[#E3F5F5] dark:bg-[#67A2A8]/30 text-[#67A2A8] dark:text-[#9CD1D4] rounded flex items-center justify-center mr-4 flex-shrink-0">
                          {tool.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {tool.name}
                          </h3>
                          <div className="flex items-center">
                            {tool.stars && (
                              <span className="text-amber-500 text-sm mr-2">
                                {tool.stars.toFixed(1)} ★
                              </span>
                            )}
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
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
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {tool.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tool.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                            >
                              {getTagLabel(t)}
                            </span>
                          ))}
                          {tool.tags.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                              +{tool.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <section className="mt-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ¿Falta alguna herramienta? ¡Sugiere una!
            </p>
            <Link
              to="/suggest"
              className="px-4 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-md transition-colors"
              onClick={() =>
                analytics.trackButtonClick("suggest_tool", {
                  from: "tag_page",
                  tag,
                })
              }
            >
              Sugerir herramienta
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Componente para botón de filtro (si decides usar botones en lugar de select)
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
      className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
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

export default TagPage;