import React, { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronDown, Tag as TagIcon } from 'lucide-react';
import type { Category } from '../data/tools';
import { getAllCategories, getAllTags } from '../data/tools';

interface SearchFilterProps {
  onSearch: (searchParams: SearchParams) => void;
  initialParams?: Partial<SearchParams>;
  className?: string;
}

export interface SearchParams {
  query: string;
  categories: Category[];
  tags: string[];
  showFreeOnly: boolean;
  showNewOnly: boolean;
  showFeaturedOnly: boolean;
  sortBy: 'name' | 'stars' | 'newest';
}

const SearchFilter: React.FC<SearchFilterProps> = ({ 
  onSearch, 
  initialParams = {}, 
  className = '' 
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [categories] = useState<Category[]>(getAllCategories());
  const [tags] = useState<string[]>(getAllTags().slice(0, 12)); // Limitamos a 12 tags populares
  
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query: '',
    categories: [],
    tags: [],
    showFreeOnly: false,
    showNewOnly: false,
    showFeaturedOnly: false,
    sortBy: 'stars',
    ...initialParams
  });
  
  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchParams);
    }, 300);
    
    return () => {
      clearTimeout(handler);
    };
  }, [searchParams, onSearch]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prev => ({
      ...prev,
      query: e.target.value
    }));
  };
  
  const toggleCategory = (category: Category) => {
    setSearchParams(prev => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter(c => c !== category)
        };
      } else {
        return {
          ...prev,
          categories: [...prev.categories, category]
        };
      }
    });
  };
  
  const toggleTag = (tag: string) => {
    setSearchParams(prev => {
      if (prev.tags.includes(tag)) {
        return {
          ...prev,
          tags: prev.tags.filter(t => t !== tag)
        };
      } else {
        return {
          ...prev,
          tags: [...prev.tags, tag]
        };
      }
    });
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => ({
      ...prev,
      sortBy: e.target.value as SearchParams['sortBy']
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const clearFilters = () => {
    setSearchParams({
      query: '',
      categories: [],
      tags: [],
      showFreeOnly: false,
      showNewOnly: false,
      showFeaturedOnly: false,
      sortBy: 'stars'
    });
  };
  
  const hasActiveFilters = 
    searchParams.categories.length > 0 || 
    searchParams.tags.length > 0 || 
    searchParams.showFreeOnly || 
    searchParams.showNewOnly ||
    searchParams.showFeaturedOnly;
  
  return (
    <div className={`w-full bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 overflow-hidden transition-all duration-300 ${className}`}>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Buscar herramientas de desarrollo..."
            className="w-full py-3 pl-10 pr-4 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] transition-all dark:text-white"
            value={searchParams.query}
            onChange={handleInputChange}
          />
          {searchParams.query && (
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              onClick={() => setSearchParams(prev => ({ ...prev, query: '' }))}
              aria-label="Limpiar búsqueda"
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <button
            className={`flex items-center text-sm font-medium ${
              isAdvancedOpen 
                ? 'text-[#67A2A8] dark:text-[#9CD1D4]' 
                : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            aria-expanded={isAdvancedOpen}
          >
            <Filter size={16} className="mr-1" />
            Filtros avanzados
            <ChevronDown 
              size={16} 
              className={`ml-1 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div className="flex items-center">
            <label className="text-sm mr-2 text-gray-600 dark:text-gray-300">Ordenar por:</label>
            <select
              className="text-sm bg-gray-50 dark:bg-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] dark:text-white"
              value={searchParams.sortBy}
              onChange={handleSortChange}
              aria-label="Ordenar resultados"
            >
              <option value="stars">Popularidad</option>
              <option value="newest">Más recientes</option>
              <option value="name">Nombre</option>
            </select>
          </div>
        </div>
      </div>
      
      {isAdvancedOpen && (
        <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Categorías</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                      searchParams.categories.includes(category)
                        ? 'bg-[#67A2A8] text-white dark:bg-[#9CD1D4] dark:text-gray-800'
                        : 'bg-white text-gray-600 hover:bg-[#E3F5F5] hover:text-[#67A2A8] dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                    } transition-colors`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Tags populares</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center ${
                      searchParams.tags.includes(tag)
                        ? 'bg-[#67A2A8] text-white dark:bg-[#9CD1D4] dark:text-gray-800'
                        : 'bg-white text-gray-600 hover:bg-[#E3F5F5] hover:text-[#67A2A8] dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                    } transition-colors`}
                    onClick={() => toggleTag(tag)}
                  >
                    <TagIcon size={12} className="mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Opciones</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded text-[#67A2A8] focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] dark:border-gray-500"
                    name="showFreeOnly"
                    checked={searchParams.showFreeOnly}
                    onChange={handleCheckboxChange}
                  />
                  <span>Solo herramientas gratuitas</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded text-[#67A2A8] focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] dark:border-gray-500"
                    name="showNewOnly"
                    checked={searchParams.showNewOnly}
                    onChange={handleCheckboxChange}
                  />
                  <span>Solo herramientas nuevas</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded text-[#67A2A8] focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] dark:border-gray-500"
                    name="showFeaturedOnly"
                    checked={searchParams.showFeaturedOnly}
                    onChange={handleCheckboxChange}
                  />
                  <span>Solo herramientas destacadas</span>
                </label>
              </div>
            </div>
          </div>
          
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Filtros activos: <span className="font-medium text-[#67A2A8] dark:text-[#9CD1D4]">{
                  [
                    ...searchParams.categories,
                    ...searchParams.tags,
                    searchParams.showFreeOnly ? 'Gratuitas' : null,
                    searchParams.showNewOnly ? 'Nuevas' : null,
                    searchParams.showFeaturedOnly ? 'Destacadas' : null
                  ].filter(Boolean).join(', ')
                }</span>
              </div>
              <button
                className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                onClick={clearFilters}
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;