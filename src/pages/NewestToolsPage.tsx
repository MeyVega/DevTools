import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  ArrowLeft,
  Filter,
  Grid,
  List,
  Search,
  X,
  CheckSquare,
  Clock,
  BookmarkPlus,
  Calendar
} from 'lucide-react';
import { Tool, getNewestTools, getCategoryLabel, getCategoryColorClass } from '../data/tools';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';
import { useBookmarks } from '../contexts/BookmarksContext';
import { formatLastUpdated } from '../utils/dateUtils';

type FilterType = 'all' | 'free' | 'freemium' | 'paid';
type SortType = 'date' | 'name';
type ViewType = 'grid' | 'list';

const NewestToolsPage: React.FC = () => {
  // Estados
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSort, setActiveSort] = useState<SortType>('date');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Analytics y Bookmarks
  const analytics = useAnalytics();
  const { isSaved, toggleTool } = useBookmarks();

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'Newest Tools'
  });

  // Cargar datos
  useEffect(() => {
    const loadTools = async () => {
      setLoading(true);
      try {
        // Obtener herramientas más recientes (todas, ordenadas por fecha)
        const newestTools = getNewestTools();
        setTools(newestTools);

        // Registrar vista en analytics
        analytics.trackPageView(config.current.pageName);
      } catch (err) {
        console.error('Error cargando herramientas nuevas:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Array de dependencias vacío para ejecutar solo al montar

  // Aplicar filtros y búsqueda
  const filteredTools = tools.filter(tool => {
    // Aplicar filtro de precio
    if (activeFilter === 'free' && !tool.isFree) return false;
    if (activeFilter === 'freemium' && !(tool.hasFreeTier && !tool.isFree)) return false;
    if (activeFilter === 'paid' && (tool.isFree || tool.hasFreeTier)) return false;

    // Aplicar búsqueda
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        tool.name.toLowerCase().includes(search) ||
        tool.description.toLowerCase().includes(search) ||
        tool.tags.some(tag => tag.toLowerCase().includes(search)) ||
        tool.category.toLowerCase().includes(search)
      );
    }

    return true;
  }).sort((a, b) => {
    // Aplicar ordenamiento
    if (activeSort === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      // Por defecto, ordenar por fecha (más reciente primero)
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    }
  });

  // Manejar cambio de filtro
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    analytics.trackEvent(EventType.FILTER, {
      page: 'newest_tools',
      filter_type: 'price',
      filter_value: filter
    });
  };

  // Manejar cambio de ordenamiento
  const handleSortChange = (sort: SortType) => {
    setActiveSort(sort);
    analytics.trackEvent(EventType.FILTER, {
      page: 'newest_tools',
      filter_type: 'sort',
      filter_value: sort
    });
  };

  // Manejar cambio de vista
  const handleViewChange = (view: ViewType) => {
    setViewType(view);
    analytics.trackEvent(EventType.FILTER, {
      page: 'newest_tools',
      filter_type: 'view',
      filter_value: view
    });
  };

  // Manejar búsqueda
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      analytics.trackSearch(searchTerm, filteredTools.length, {
        page: 'newest_tools',
        context: 'newest_tools_page'
      });
    }
  };

  // Manejar guardado de herramienta
  const handleToggleSave = (toolId: string, toolName: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const isNowSaved = toggleTool(toolId);

    if (isNowSaved) {
      analytics.trackToolSave(toolId, toolName);
    } else {
      analytics.trackEvent(EventType.TOOL_UNSAVE, { tool_id: toolId, tool_name: toolName });
    }
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

  return (
    <Layout>
      {/* Navegación */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver al inicio
        </Link>
      </div>

      <section className="mb-12">
  {/* Contenedor principal con el estilo final "Cielo Suave" */}
  <div className="relative overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
    
    {/* Capas de fondo */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-200 dark:from-sky-900 dark:via-cyan-900 dark:to-blue-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-white/30 to-transparent blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.07]"></div>
    </div>

    {/* Contenido centrado con colores adaptables */}
    <div className="relative z-10 py-10 px-4 sm:px-8 md:py-12 max-w-3xl mx-auto text-center">
      
      <div className="flex justify-center mb-4 animate-fade-in">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-200/70 dark:bg-white/10 backdrop-blur-sm border border-slate-300/50 dark:border-white/20">
           {/* CONTENIDO: Se usa el ícono 'Clock' */}
           <Clock size={24} className="text-sky-800 dark:text-white" />
        </div>
      </div>
        
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900 dark:text-white dark:drop-shadow-md leading-tight mb-4 animate-fade-in">
        {/* CONTENIDO: Título actualizado */}
        Herramientas Más Recientes
      </h2>

      <p className="text-base md:text-lg text-sky-800/90 dark:text-white/90 dark:drop-shadow-sm mb-6 max-w-2xl mx-auto animate-fade-in delay-100 leading-relaxed">
        {/* CONTENIDO: Descripción actualizada */}
        Las últimas incorporaciones a nuestro catálogo de herramientas para desarrolladores.
      </p>

      <div className="text-sky-700/80 dark:text-white/80 dark:drop-shadow-sm text-sm animate-fade-in delay-200">
        {filteredTools.length} herramientas encontradas
      </div>
    </div>
  </div>
</section>


      {/* Filtros y Herramientas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {/* Sidebar de filtros */}
        <div className={`md:col-span-1 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-4">
            <div className="flex items-center justify-between mb-4 md:hidden">
              <h3 className="font-semibold text-gray-900 dark:text-white">Filtros</h3>
              <button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setShowFilters(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Búsqueda */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Buscar</h3>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar herramienta..."
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
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Precio</h3>
              <div className="space-y-2">
                <FilterButton
                  active={activeFilter === 'all'}
                  onClick={() => handleFilterChange('all')}
                >
                  Todos
                </FilterButton>
                <FilterButton
                  active={activeFilter === 'free'}
                  onClick={() => handleFilterChange('free')}
                >
                  Gratis
                </FilterButton>
                <FilterButton
                  active={activeFilter === 'freemium'}
                  onClick={() => handleFilterChange('freemium')}
                >
                  Freemium
                </FilterButton>
                <FilterButton
                  active={activeFilter === 'paid'}
                  onClick={() => handleFilterChange('paid')}
                >
                  De pago
                </FilterButton>
              </div>
            </div>

            {/* Ordenamiento */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ordenar por</h3>
              <div className="space-y-2">
                <FilterButton
                  active={activeSort === 'date'}
                  onClick={() => handleSortChange('date')}
                >
                  Más recientes
                </FilterButton>
                <FilterButton
                  active={activeSort === 'name'}
                  onClick={() => handleSortChange('name')}
                >
                  Nombre A-Z
                </FilterButton>
              </div>
            </div>

            {/* Tipo de vista */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Vista</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewChange('grid')}
                  className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-colors ${viewType === 'grid'
                      ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
                    }`}
                >
                  <Grid size={18} className="mr-2" />
                  Cuadrícula
                </button>
                <button
                  onClick={() => handleViewChange('list')}
                  className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-colors ${viewType === 'list'
                      ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
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
          {/* Botón móvil para mostrar filtros */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {filteredTools.length} herramientas encontradas
            </div>
            <button
              className="inline-flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} className="mr-2" />
              {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
            </button>
          </div>

          {/* Resultados */}
          {filteredTools.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                No se encontraron herramientas con los filtros seleccionados.
              </div>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="text-[#67A2A8] dark:text-[#9CD1D4] font-medium hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              {/* Vista de cuadrícula */}
              {viewType === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredTools.map((tool, index) => (
                    <Link
                      key={tool.id}
                      to={`/tool/${tool.id}`}
                      className="group relative bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
                      onClick={() => analytics.trackToolView(tool.id, tool.name, { source: 'newest_tools_page' })}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Fecha de actualización */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {formatLastUpdated(tool.lastUpdated)}
                      </div>

                      {/* Botón de guardar */}
                      <button
                        onClick={(e) => handleToggleSave(tool.id, tool.name, e)}
                        className="absolute top-10 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] transition-colors z-10"
                        aria-label={isSaved(tool.id) ? "Quitar de guardados" : "Guardar herramienta"}
                      >
                        <BookmarkPlus size={18} className={isSaved(tool.id) ? "fill-[#67A2A8] dark:fill-[#9CD1D4] text-[#67A2A8] dark:text-[#9CD1D4]" : ""} />
                      </button>

                      <div className="flex items-center mb-4 mt-8">
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
                          <h3 className="font-medium text-gray-900 dark:text-white">{tool.name}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColorClass(tool.category)}`}>
                              {getCategoryLabel(tool.category)}
                            </span>
                            {tool.isNew && (
                              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                                Nuevo
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.slice(0, 3).map(tag => (
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
              {viewType === 'list' && (
                <div className="space-y-4">
                  {filteredTools.map((tool, index) => (
                    <Link
                      key={tool.id}
                      to={`/tool/${tool.id}`}
                      className="group relative block bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
                      onClick={() => analytics.trackToolView(tool.id, tool.name, { source: 'newest_tools_page_list' })}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Botón de guardar */}
                      <button
                        onClick={(e) => handleToggleSave(tool.id, tool.name, e)}
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] transition-colors z-10"
                        aria-label={isSaved(tool.id) ? "Quitar de guardados" : "Guardar herramienta"}
                      >
                        <BookmarkPlus size={18} className={isSaved(tool.id) ? "fill-[#67A2A8] dark:fill-[#9CD1D4] text-[#67A2A8] dark:text-[#9CD1D4]" : ""} />
                      </button>

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
                            <span className="text-lg font-semibold">{tool.name.charAt(0)}</span>
                          </div>
                        )}

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <h3 className="font-medium text-gray-900 dark:text-white text-lg">{tool.name}</h3>
                            <div className="flex items-center mt-1 sm:mt-0">
                              <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                                <Calendar size={14} className="mr-1" />
                                {formatLastUpdated(tool.lastUpdated)}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center mb-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColorClass(tool.category)}`}>
                              {getCategoryLabel(tool.category)}
                            </span>
                            {tool.isNew && (
                              <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                                Nuevo
                              </span>
                            )}
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${tool.isFree
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                : tool.hasFreeTier
                                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                              }`}>
                              {tool.isFree ? 'Gratis' : (tool.hasFreeTier ? 'Freemium' : 'De pago')}
                            </span>
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {tool.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {tool.tags.map(tag => (
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
            Mantente al día con las nuevas herramientas
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter para recibir actualizaciones sobre las últimas herramientas añadidas a nuestro catálogo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/newsletter"
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              Suscribirse al newsletter
            </Link>

            <Link
              to="/suggest"
              className="px-6 py-3 bg-white text-[#67A2A8] hover:bg-gray-100 border border-[#67A2A8] rounded-lg transition-colors"
              onClick={() => analytics.trackButtonClick('suggest_tool', { from: 'newest_tools_page' })}
            >
              Sugerir herramienta
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

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      className={`flex items-center w-full px-3 py-2 rounded-md text-left transition-colors ${active
          ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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

export default NewestToolsPage;