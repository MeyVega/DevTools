import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  ArrowLeft,
  Grid,
  List,
  Search,
  X,
  Trash2,
  Bookmark,
  BookmarkMinus,
  AlertTriangle,
  Filter,
  CheckSquare
} from 'lucide-react';
import { Tool, getCategoryLabel, getCategoryColorClass, getToolById } from '../data/tools';
import useAnalytics from '../hooks/useAnalytics';
import { useBookmarks } from '../contexts/BookmarksContext';

type FilterType = 'all' | 'free' | 'freemium' | 'paid';
type SortType = 'name' | 'date' | 'category';
type ViewType = 'grid' | 'list';

const SavedToolsPage: React.FC = () => {
  // Estados
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSort, setActiveSort] = useState<SortType>('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Analytics y Bookmarks
  const analytics = useAnalytics();
  const { savedTools, removeTool, clearAll } = useBookmarks();

  // Cargar herramientas guardadas
  useEffect(() => {
    setLoading(true);

    try {
      // Obtener las herramientas completas a partir de los IDs guardados
      const savedToolsData: Tool[] = savedTools
        .map(savedToolId => getToolById(savedToolId.id))
        .filter((tool): tool is Tool => tool !== undefined);

      setTools(savedToolsData);

      // Registrar vista en analytics
      analytics.trackPageView('Saved Tools');
    } catch (err) {
      console.error('Error cargando herramientas guardadas:', err);
    } finally {
      setLoading(false);
    }
  }, [savedTools, analytics]);

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
    } else if (activeSort === 'date') {
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    } else if (activeSort === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Manejar cambio de filtro
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    analytics.trackFilter({
      page: 'saved_tools',
      filter_type: 'price',
      filter_value: filter
    });
  };

  // Manejar cambio de ordenamiento
  const handleSortChange = (sort: SortType) => {
    setActiveSort(sort);
    analytics.trackFilter({
      page: 'saved_tools',
      filter_type: 'sort',
      filter_value: sort
    });
  };

  // Manejar cambio de vista
  const handleViewChange = (view: ViewType) => {
    setViewType(view);
    analytics.trackFilter({
      page: 'saved_tools',
      filter_type: 'view',
      filter_value: view
    });
  };

  // Manejar búsqueda
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      analytics.trackSearch(searchTerm, filteredTools.length, {
        page: 'saved_tools',
        context: 'saved_tools_page'
      });
    }
  };

  // Manejar quitar herramienta de guardados
  const handleRemoveTool = (toolId: string, toolName: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    removeTool(toolId);
    analytics.trackToolUnsave(toolId, toolName, { page: 'saved_tools' });
  };

  // Manejar limpiar todos los guardados
  const handleClearAll = () => {
    const count = savedTools.length;
    clearAll();
    analytics.trackClearSavedTools(count);
    setShowClearConfirm(false);
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

      {/* Header */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-400 dark:from-indigo-600/80 dark:to-purple-500/80 rounded-xl overflow-hidden shadow-lg">
          <div className="py-12 px-6 sm:px-12 md:py-16 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Bookmark size={28} className="text-white mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Mis Herramientas Guardadas
              </h1>
            </div>
            <p className="text-xl text-white opacity-90 mb-6 max-w-2xl">
              Accede rápidamente a las herramientas que has guardado para uso futuro
            </p>
            <div className="text-white text-sm">
              {filteredTools.length} {filteredTools.length === 1 ? 'herramienta guardada' : 'herramientas guardadas'}
            </div>
          </div>
        </div>
      </section>

      {/* Sin herramientas guardadas */}
      {tools.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-12 text-center mb-16">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bookmark size={32} className="text-indigo-500 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            No tienes herramientas guardadas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Guarda tus herramientas favoritas para acceder a ellas rápidamente. Puedes guardar herramientas haciendo clic en el icono de marcador en la página de cada herramienta.
          </p>
          <Link
            to="/popular"
            className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors inline-flex items-center"
          >
            Explorar herramientas populares
          </Link>
        </div>
      ) : (
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
                    active={activeSort === 'name'}
                    onClick={() => handleSortChange('name')}
                  >
                    Nombre A-Z
                  </FilterButton>
                  <FilterButton
                    active={activeSort === 'date'}
                    onClick={() => handleSortChange('date')}
                  >
                    Más recientes
                  </FilterButton>
                  <FilterButton
                    active={activeSort === 'category'}
                    onClick={() => handleSortChange('category')}
                  >
                    Categoría
                  </FilterButton>
                </div>
              </div>

              {/* Tipo de vista */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Vista</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleViewChange('grid')}
                    className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                      viewType === 'grid'
                        ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Grid size={18} className="mr-2" />
                    Cuadrícula
                  </button>
                  <button
                    onClick={() => handleViewChange('list')}
                    className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                      viewType === 'list'
                        ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
                    }`}
                  >
                    <List size={18} className="mr-2" />
                    Lista
                  </button>
                </div>
              </div>

              {/* Limpiar guardados */}
              {tools.length > 0 && (
                <div>
                  <button
                    onClick={() => setShowClearConfirm(true)}
                    className="flex items-center justify-center w-full px-4 py-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 rounded-md transition-colors"
                  >
                    <Trash2 size={16} className="mr-2" />
                    Limpiar todos los guardados
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Lista de herramientas */}
          <div className="md:col-span-3">
            {/* Botón móvil para mostrar filtros */}
            <div className="flex justify-between items-center mb-4 md:hidden">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {filteredTools.length} {filteredTools.length === 1 ? 'herramienta guardada' : 'herramientas guardadas'}
              </div>
              <button
                className="inline-flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} className="mr-2" />
                {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
              </button>
            </div>

            {/* Modal de confirmación para limpiar todo */}
            {showClearConfirm && (
              <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 px-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full animate-fade-in-up">
                  <div className="flex items-center mb-4">
                    <AlertTriangle size={24} className="text-red-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      ¿Eliminar todas las herramientas guardadas?
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Esta acción eliminará todas tus herramientas guardadas y no se puede deshacer.
                  </p>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setShowClearConfirm(false)}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleClearAll}
                      className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 rounded-md transition-colors"
                    >
                      Sí, eliminar todo
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Resultados */}
            {filteredTools.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-100 dark:border-gray-700">
                {tools.length > 0 ? (
                  <>
                    <div className="text-gray-600 dark:text-gray-400 mb-4">
                      No se encontraron herramientas guardadas con los filtros seleccionados.
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
                  </>
                ) : (
                  <div className="text-gray-600 dark:text-gray-400">
                    No tienes herramientas guardadas.
                  </div>
                )}
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
                        onClick={() => analytics.trackToolView(tool.id, tool.name, { source: 'saved_tools_page' })}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Botón de quitar de guardados */}
                        <button
                          onClick={(e) => handleRemoveTool(tool.id, tool.name, e)}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors z-10"
                          aria-label="Quitar de guardados"
                        >
                          <BookmarkMinus size={18} />
                        </button>

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
                            <h3 className="font-medium text-gray-900 dark:text-white">{tool.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColorClass(tool.category)}`}>
                                {getCategoryLabel(tool.category)}
                              </span>
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
                        onClick={() => analytics.trackToolView(tool.id, tool.name, { source: 'saved_tools_page_list' })}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Botón de quitar de guardados */}
                        <button
                          onClick={(e) => handleRemoveTool(tool.id, tool.name, e)}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors z-10"
                          aria-label="Quitar de guardados"
                        >
                          <BookmarkMinus size={18} />
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
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  tool.isFree
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                    : tool.hasFreeTier
                                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                }`}>
                                  {tool.isFree ? 'Gratis' : (tool.hasFreeTier ? 'Freemium' : 'De pago')}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center mb-2">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColorClass(tool.category)}`}>
                                {getCategoryLabel(tool.category)}
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
      )}
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
      className={`flex items-center w-full px-3 py-2 rounded-md text-left transition-colors ${
        active
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

export default SavedToolsPage;