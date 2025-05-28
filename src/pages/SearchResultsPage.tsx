import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { 
  ArrowLeft,
  Search,
  Filter,
  X,
  Grid,
  List,
  BookmarkPlus,
  Tag as TagIcon,
  CheckSquare
} from 'lucide-react';
import { Tool, getCategoryLabel, getCategoryColorClass, searchTools } from '../data/tools';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';
import { useBookmarks } from '../contexts/BookmarksContext';

type FilterType = 'all' | 'free' | 'freemium' | 'paid';
type SortType = 'relevance' | 'name' | 'rating';
type ViewType = 'grid' | 'list';

const SearchResultsPage: React.FC = () => {
  // Obtener parámetros de búsqueda de la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Obtener la consulta de búsqueda
  const query = searchParams.get('q') || '';
  const tag = searchParams.get('tag') || '';
  
  // Estados
  const [results, setResults] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSort, setActiveSort] = useState<SortType>('relevance');
  const [searchTerm, setSearchTerm] = useState(query || tag || '');
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  // Analytics y Bookmarks
  const analytics = useAnalytics();
  const { isSaved, toggleTool } = useBookmarks();
  
  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'Search Results'
  });

  // Realizar búsqueda cuando cambian los parámetros
  useEffect(() => {
    const doSearch = async () => {
      setLoading(true);
      try {
        // Reiniciar el término de búsqueda
        setSearchTerm(query || tag || '');
        
        // Realizar la búsqueda
        const searchQuery = query || tag || '';
        if (!searchQuery.trim()) {
          setResults([]);
          setLoading(false);
          return;
        }
        
        // Buscar herramientas
        let searchResults: Tool[] = [];
        
        if (tag) {
          // Buscar por etiqueta
          searchResults = searchTools(tag);
          
          // Registrar vista de etiqueta en analytics
          analytics.trackEvent(EventType.TAG_VIEW, { tag });
        } else {
          // Buscar por consulta general
          searchResults = searchTools(query);
          
          // Registrar búsqueda en analytics
          analytics.trackSearch(query, searchResults.length);
        }
        
        setResults(searchResults);
        
        // Registrar vista en analytics
        analytics.trackPageView(config.current.pageName);
      } catch (err) {
        console.error('Error al realizar búsqueda:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    
    doSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, tag]); // Mantener query y tag como dependencias para reflejar cambios
  
  // Aplicar filtros y ordenamiento
  const filteredResults = results.filter(tool => {
    // Aplicar filtro de precio
    if (activeFilter === 'free' && !tool.isFree) return false;
    if (activeFilter === 'freemium' && !(tool.hasFreeTier && !tool.isFree)) return false;
    if (activeFilter === 'paid' && (tool.isFree || tool.hasFreeTier)) return false;
    
    return true;
  }).sort((a, b) => {
    // Aplicar ordenamiento
    if (activeSort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (activeSort === 'rating') {
      const ratingA = a.stars || 0;
      const ratingB = b.stars || 0;
      return ratingB - ratingA;
    }
    
    // Por defecto, ordenar por relevancia (el orden original de los resultados)
    return 0;
  });
  
  // Manejar cambio de filtro
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    analytics.trackEvent(EventType.FILTER, { 
      page: 'search_results', 
      filter_type: 'price', 
      filter_value: filter 
    });
  };
  
  // Manejar cambio de ordenamiento
  const handleSortChange = (sort: SortType) => {
    setActiveSort(sort);
    analytics.trackEvent(EventType.FILTER, { 
      page: 'search_results', 
      filter_type: 'sort', 
      filter_value: sort 
    });
  };
  
  // Manejar cambio de vista
  const handleViewChange = (view: ViewType) => {
    setViewType(view);
    analytics.trackEvent(EventType.FILTER, { 
      page: 'search_results', 
      filter_type: 'view', 
      filter_value: view 
    });
  };
  
  // Manejar nueva búsqueda
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (searchTerm.trim()) {
      // Actualizar los parámetros de búsqueda
      setSearchParams({ q: searchTerm });
      
      // Registrar búsqueda en analytics
      analytics.trackSearch(searchTerm);
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
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver
        </button>
      </div>
      
      {/* Formulario de búsqueda */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar herramientas..."
              className="w-full py-3 pl-12 pr-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] focus:border-transparent text-gray-800 dark:text-gray-200"
              autoFocus={!query && !tag}
            />
            <button
              type="submit"
              className="absolute left-0 top-0 h-full flex items-center justify-center w-12 text-gray-500 dark:text-gray-400"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
      
      {/* Resultados de búsqueda */}
      {(query || tag) && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {tag ? (
              <span className="flex items-center">
                <TagIcon size={20} className="mr-2 text-[#67A2A8] dark:text-[#9CD1D4]" />
                Resultados para la etiqueta: <span className="ml-2 text-[#67A2A8] dark:text-[#9CD1D4]">{tag}</span>
              </span>
            ) : (
              <span className="flex items-center">
                Resultados para: <span className="ml-2 text-[#67A2A8] dark:text-[#9CD1D4]">{query}</span>
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Se encontraron {filteredResults.length} {filteredResults.length === 1 ? 'resultado' : 'resultados'}
          </p>
        </div>
      )}
      
      {/* Sin resultados iniciales */}
      {!query && !tag ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-12 text-center mb-16">
          <div className="w-16 h-16 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={32} className="text-[#67A2A8] dark:text-[#9CD1D4]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Busca herramientas para desarrolladores
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Ingresa un término de búsqueda para encontrar herramientas por nombre, descripción, categoría o etiquetas.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/categories" 
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              Explorar categorías
            </Link>
            <Link 
              to="/popular" 
              className="px-6 py-3 bg-white dark:bg-gray-700 text-[#67A2A8] dark:text-[#9CD1D4] border border-[#67A2A8] dark:border-[#9CD1D4] hover:bg-[#E3F5F5] dark:hover:bg-[#67A2A8]/20 rounded-lg transition-colors"
            >
              Herramientas populares
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Sin resultados después de una búsqueda */}
          {results.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-12 text-center mb-16">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-amber-500 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                No se encontraron resultados
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                No se encontraron herramientas que coincidan con tu búsqueda. Intenta con otros términos o explora el catálogo por categorías.
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  to="/" 
                  className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
                >
                  Volver al inicio
                </Link>
                <Link 
                  to="/categories" 
                  className="px-6 py-3 bg-white dark:bg-gray-700 text-[#67A2A8] dark:text-[#9CD1D4] border border-[#67A2A8] dark:border-[#9CD1D4] hover:bg-[#E3F5F5] dark:hover:bg-[#67A2A8]/20 rounded-lg transition-colors"
                >
                  Explorar categorías
                </Link>
              </div>
            </div>
          ) : (
            // Resultados de búsqueda
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
                        active={activeSort === 'relevance'} 
                        onClick={() => handleSortChange('relevance')}
                      >
                        Relevancia
                      </FilterButton>
                      <FilterButton 
                        active={activeSort === 'rating'} 
                        onClick={() => handleSortChange('rating')}
                      >
                        Mejor valoradas
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
                </div>
              </div>
              
              {/* Lista de resultados */}
              <div className="md:col-span-3">
                {/* Botón móvil para mostrar filtros */}
                <div className="flex justify-between items-center mb-4 md:hidden">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredResults.length} {filteredResults.length === 1 ? 'resultado' : 'resultados'}
                  </div>
                  <button
                    className="inline-flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} className="mr-2" />
                    {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
                  </button>
                </div>
                
                {/* Sin resultados después de filtrado */}
                {filteredResults.length === 0 ? (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-100 dark:border-gray-700">
                    <div className="text-gray-600 dark:text-gray-400 mb-4">
                      No se encontraron resultados con los filtros seleccionados.
                    </div>
                    <button
                      onClick={() => setActiveFilter('all')}
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
                        {filteredResults.map((tool, index) => (
                          <Link
                            key={tool.id}
                            to={`/tool/${tool.id}`}
                            className="group relative bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
                            onClick={() => analytics.trackToolView(tool.id, tool.name, { source: 'search_results_page' })}
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
                              {highlightSearchTerm(tool.description, searchTerm)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {tool.tags.slice(0, 3).map(tag => (
                                <span 
                                  key={tag} 
                                  className={`text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full ${
                                    tag.toLowerCase() === searchTerm.toLowerCase() ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]' : ''
                                  }`}
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
                        {filteredResults.map((tool, index) => (
                          <Link
                            key={tool.id}
                            to={`/tool/${tool.id}`}
                            className="group relative block bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
                            onClick={() => analytics.trackToolView(tool.id, tool.name, { source: 'search_results_page_list' })}
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
                                    {tool.stars && (
                                      <div className="flex items-center text-amber-500">
                                        {tool.stars.toFixed(1)}
                                        <span className="ml-1">★</span>
                                      </div>
                                    )}
                                    <span className={`ml-3 text-xs px-2 py-1 rounded-full ${
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
                                  {highlightSearchTerm(tool.description, searchTerm)}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                  {tool.tags.map(tag => (
                                    <span 
                                      key={tag} 
                                      className={`text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full ${
                                        tag.toLowerCase() === searchTerm.toLowerCase() ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]' : ''
                                      }`}
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
        </>
      )}
    </Layout>
  );
};

// Función para resaltar el término de búsqueda en un texto
const highlightSearchTerm = (text: string, term: string): React.ReactNode => {
  if (!term.trim()) return text;
  
  try {
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === term.toLowerCase() ? 
            <span key={i} className="bg-yellow-100 dark:bg-yellow-900/30 font-medium">{part}</span> : 
            part
        )}
      </>
    );
  } catch (error) {
    console.error('Error al resaltar el término de búsqueda:', error);
    // Si hay algún error con la expresión regular, devolver el texto sin formato
    return text;
  }
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

export default SearchResultsPage;