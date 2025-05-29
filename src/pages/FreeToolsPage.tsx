import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Tag, Search, Grid, List, Gift } from 'lucide-react';
import Layout from '../components/Layout';
import ToolCard from '../components/ToolCard';
import { tools, Category, getCategoryLabel} from '../data/tools';
import useAnalytics from '../hooks/useAnalytics';

type ViewType = 'grid' | 'list';
type SortType = 'name' | 'category';

const FreeToolsPage: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [sortBy, setSortBy] = useState<SortType>('name');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const analytics = useAnalytics();

  // Referencia para analytics
  const config = useRef({
    pageName: 'Free Tools Page'
  });

  // Registrar vista de página
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
  }, [analytics]);

  // Filtrar herramientas gratuitas
  const freeTools = tools.filter(tool => tool.isFree);

  // Filtrar por búsqueda y categoría
  const filteredTools = freeTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Ordenar herramientas
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  // Obtener categorías únicas de las herramientas gratuitas
  const categories = Array.from(new Set(freeTools.map(tool => tool.category)));

  // Handlers
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    analytics.trackSearch(e.target.value, undefined, { page: 'free_tools' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    analytics.trackFilter({ category, page: 'free_tools' });
  };

  const handleSortChange = (sort: SortType) => {
    setSortBy(sort);
    analytics.trackFilter({ sort_by: sort, page: 'free_tools' });
  };

  const handleViewChange = (view: ViewType) => {
    setViewType(view);
    analytics.trackFilter({ view_type: view, page: 'free_tools' });
  };

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
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 rounded-xl overflow-hidden shadow-sm relative">
          <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

          <div className="relative py-10 px-4 sm:px-8 md:py-12 max-w-3xl mx-auto text-left">
            <div className="flex items-center mb-4 animate-fade-in">
              <Gift size={24} className="text-white mr-2.5" />
              <h2 className="text-xl md:text-2xl font-semibold text-white drop-shadow-sm leading-snug">
                Herramientas Gratuitas
              </h2>
            </div>

            <p className="text-base md:text-lg text-white/90 mb-5 max-w-2xl animate-fade-in delay-100 leading-relaxed">
              Una colección de las mejores herramientas gratuitas para desarrolladores.
            </p>

            <div className="text-white/80 text-sm animate-fade-in delay-200">
              {filteredTools.length} herramientas encontradas
            </div>
          </div>
        </div>
      </section>


      {/* Filtros y Herramientas */}
      <section className="mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          {/* Barra de filtros */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Búsqueda */}
            <div className="flex-1">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar herramientas..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-2">
              {/* Categorías */}
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="all">Todas las categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {getCategoryLabel(category as Category)}
                  </option>
                ))}
              </select>

              {/* Ordenar por */}
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as SortType)}
                className="px-4 py-2 border rounded-lg focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="name">Ordenar por nombre</option>
                <option value="category">Ordenar por categoría</option>
              </select>

              {/* Vista */}
              <div className="flex rounded-lg border dark:border-gray-600 overflow-hidden">
                <button
                  onClick={() => handleViewChange('grid')}
                  className={`p-2 ${viewType === 'grid'
                    ? 'bg-[#67A2A8] text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  aria-label="Vista en cuadrícula"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => handleViewChange('list')}
                  className={`p-2 ${viewType === 'list'
                    ? 'bg-[#67A2A8] text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  aria-label="Vista en lista"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Lista de herramientas */}
          {sortedTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No se encontraron herramientas que coincidan con tu búsqueda.
              </p>
            </div>
          ) : viewType === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTools.map((tool) => (
                <Link
                  key={tool.id}
                  to={`/tool/${tool.id}`}
                  className="block transition-transform hover:scale-105"
                >
                  <ToolCard tool={tool} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedTools.map((tool) => (
                <Link
                  key={tool.id}
                  to={`/tool/${tool.id}`}
                  className="block bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-[#E3F5F5] dark:hover:bg-gray-700 transition-colors"
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
                        <span className="text-lg font-semibold">{tool.name.charAt(0)}</span>
                      </div>
                    )}

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center mb-1">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate mr-2">
                          {tool.name}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300`}>
                          Gratis
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {tool.description}
                      </p>
                      <div className="mt-2 flex items-center">
                        <Tag size={14} className="text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getCategoryLabel(tool.category as Category)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FreeToolsPage; 