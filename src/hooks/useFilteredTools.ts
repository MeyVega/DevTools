import { useState, useEffect, useMemo, useCallback } from 'react';
import { Tool, Category } from '../data/tools';
import { useLocation } from 'react-router-dom';
import useAnalytics from './useAnalytics';

/**
 * Interfaz para los filtros de herramientas
 */
export interface ToolFilters {
  query?: string;
  categories?: Category[];
  tags?: string[];
  isFree?: boolean;
  hasFreeTier?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  sortBy?: 'name' | 'stars' | 'newest';
}

/**
 * Opciones para la configuración del hook useFilteredTools
 */
export interface FilteredToolsOptions {
  /**
   * Si es true, extrae los filtros de la URL (por defecto false)
   */
  readFromUrl?: boolean;

  /**
   * Si es true, actualiza la URL con los filtros aplicados (por defecto false)
   */
  updateUrl?: boolean;

  /**
   * Si es true, realiza el filtrado de manera debounced (por defecto true)
   */
  debounced?: boolean;

  /**
   * Tiempo de debounce en milisegundos (por defecto 300ms)
   */
  debounceTime?: number;
}

/**
 * Hook personalizado para filtrar herramientas
 * @param tools Arreglo de herramientas para filtrar
 * @param initialFilters Filtros iniciales
 * @param options Opciones de configuración
 */
export const useFilteredTools = (
  tools: Tool[],
  initialFilters: ToolFilters = {},
  options: FilteredToolsOptions = {}
) => {
  // Opciones por defecto
  const {
    readFromUrl = false,
    updateUrl = false,
    debounced = true,
    debounceTime = 300
  } = options;

  // Estado para los filtros y resultados
  const [filters, setFilters] = useState<ToolFilters>(initialFilters);
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  // Analytics
  const analytics = useAnalytics();

  // React Router
  const location = useLocation();

  // Extraer filtros de la URL si está habilitado
  useEffect(() => {
    if (readFromUrl) {
      const params = new URLSearchParams(location.search);
      const urlFilters: ToolFilters = {};

      // Extraer query
      const query = params.get('q');
      if (query) urlFilters.query = query;

      // Extraer categorías
      const categories = params.get('categories');
      if (categories) urlFilters.categories = categories.split(',') as Category[];

      // Extraer tags
      const tags = params.get('tags');
      if (tags) urlFilters.tags = tags.split(',');

      // Extraer filtros booleanos
      const isFree = params.get('isFree');
      if (isFree === 'true') urlFilters.isFree = true;

      const hasFreeTier = params.get('hasFreeTier');
      if (hasFreeTier === 'true') urlFilters.hasFreeTier = true;

      const isNew = params.get('isNew');
      if (isNew === 'true') urlFilters.isNew = true;

      const isFeatured = params.get('isFeatured');
      if (isFeatured === 'true') urlFilters.isFeatured = true;

      // Extraer ordenamiento
      const sortBy = params.get('sortBy');
      if (sortBy && ['name', 'stars', 'newest'].includes(sortBy)) {
        urlFilters.sortBy = sortBy as 'name' | 'stars' | 'newest';
      }

      // Actualizar filtros con los valores de la URL
      if (Object.keys(urlFilters).length > 0) {
        setFilters(prevFilters => ({
          ...prevFilters,
          ...urlFilters
        }));
      }
    }
  }, [location.search, readFromUrl]);

  // Actualizar la URL con los filtros aplicados
  const updateUrlWithFilters = useCallback((currentFilters: ToolFilters) => {
    if (!updateUrl) return;

    const searchParams = new URLSearchParams();

    // Añadir query si existe
    if (currentFilters.query) {
      searchParams.set('q', currentFilters.query);
    }

    // Añadir categorías si existen
    if (currentFilters.categories && currentFilters.categories.length > 0) {
      searchParams.set('categories', currentFilters.categories.join(','));
    }

    // Añadir tags si existen
    if (currentFilters.tags && currentFilters.tags.length > 0) {
      searchParams.set('tags', currentFilters.tags.join(','));
    }

    // Añadir filtros booleanos si están activos
    if (currentFilters.isFree) {
      searchParams.set('isFree', 'true');
    }

    if (currentFilters.hasFreeTier) {
      searchParams.set('hasFreeTier', 'true');
    }

    if (currentFilters.isNew) {
      searchParams.set('isNew', 'true');
    }

    if (currentFilters.isFeatured) {
      searchParams.set('isFeatured', 'true');
    }

    // Añadir ordenamiento si existe
    if (currentFilters.sortBy) {
      searchParams.set('sortBy', currentFilters.sortBy);
    }

    // Actualizar URL sin recargar la página
    const newSearch = searchParams.toString();
    const newUrl = `${window.location.pathname}${newSearch ? `?${newSearch}` : ''}`;

    window.history.pushState({ path: newUrl }, '', newUrl);
  }, [updateUrl]);

  // Aplicar filtros a las herramientas
  const applyFilters = useCallback((toolsToFilter: Tool[], currentFilters: ToolFilters) => {
    setIsFiltering(true);

    try {
      let result = [...toolsToFilter];

      // Filtrar por texto
      if (currentFilters.query) {
        const query = currentFilters.query.toLowerCase();
        result = result.filter(
          tool =>
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      // Filtrar por categorías
      if (currentFilters.categories && currentFilters.categories.length > 0) {
        result = result.filter(tool =>
          currentFilters.categories?.includes(tool.category)
        );
      }

      // Filtrar por tags
      if (currentFilters.tags && currentFilters.tags.length > 0) {
        result = result.filter(tool =>
          tool.tags.some(tag => currentFilters.tags?.includes(tag))
        );
      }

      // Filtrar por herramientas gratuitas
      if (currentFilters.isFree) {
        result = result.filter(tool => tool.isFree);
      }

      // Filtrar por herramientas con tier gratuito
      if (currentFilters.hasFreeTier) {
        result = result.filter(tool => tool.hasFreeTier);
      }

      // Filtrar por herramientas nuevas
      if (currentFilters.isNew) {
        result = result.filter(tool => tool.isNew);
      }

      // Filtrar por herramientas destacadas
      if (currentFilters.isFeatured) {
        result = result.filter(tool => tool.isFeatured);
      }

      // Ordenar resultados
      if (currentFilters.sortBy) {
        switch (currentFilters.sortBy) {
          case 'name':
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'stars':
            result.sort((a, b) => (b.stars || 0) - (a.stars || 0));
            break;
          case 'newest':
            result.sort((a, b) =>
              new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
            );
            break;
        }
      }

      // Registrar evento de filtrado si hay filtros activos
      if (Object.keys(currentFilters).length > 0) {
        analytics.trackFilter({
          query: currentFilters.query,
          categories: currentFilters.categories?.join(','),
          tags: currentFilters.tags?.join(','),
          isFree: currentFilters.isFree,
          hasFreeTier: currentFilters.hasFreeTier,
          isNew: currentFilters.isNew,
          isFeatured: currentFilters.isFeatured,
          sortBy: currentFilters.sortBy,
          result_count: result.length
        });
      }

      return result;
    } finally {
      setIsFiltering(false);
    }
  }, [analytics]);

  // Aplicar filtros con debounce
  useEffect(() => {
    if (debounced) {
      const handler = setTimeout(() => {
        const filtered = applyFilters(tools, filters);
        setFilteredTools(filtered);
        updateUrlWithFilters(filters);
      }, debounceTime);

      return () => {
        clearTimeout(handler);
      };
    } else {
      const filtered = applyFilters(tools, filters);
      setFilteredTools(filtered);
      updateUrlWithFilters(filters);
    }
  }, [tools, filters, debounced, debounceTime, applyFilters, updateUrlWithFilters]);

  // Funciones para manejo de filtros
  const setFilter = useCallback(<K extends keyof ToolFilters>(
    key: K,
    value: ToolFilters[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const removeFilter = useCallback((key: keyof ToolFilters) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  // Stats útiles
  const stats = useMemo(() => ({
    total: tools.length,
    filtered: filteredTools.length,
    activeFilters: Object.keys(filters).length
  }), [tools, filteredTools, filters]);

  return {
    filters,
    filteredTools,
    isFiltering,
    stats,
    setFilter,
    setFilters,
    removeFilter,
    clearFilters
  };
};

export default useFilteredTools;