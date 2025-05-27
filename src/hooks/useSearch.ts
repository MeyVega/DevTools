import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addToSearchHistory } from '../utils/storage';
import useAnalytics from './useAnalytics';

/**
 * Interfaz para los parámetros de búsqueda
 */
export interface SearchOptions {
  /**
   * Retraso en milisegundos para debounce (por defecto 300ms)
   */
  debounceTime?: number;
  
  /**
   * Si es true, añadirá el término de búsqueda al historial (por defecto true)
   */
  saveToHistory?: boolean;
  
  /**
   * Máximo número de elementos en el historial (por defecto 5)
   */
  maxHistoryItems?: number;
  
  /**
   * Si es true, actualizará la URL con el parámetro de búsqueda (por defecto false)
   */
  updateUrl?: boolean;
  
  /**
   * Nombre del parámetro de búsqueda en la URL (por defecto 'q')
   */
  queryParam?: string;
  
  /**
   * Si es true, realizará la búsqueda al cargar el componente (por defecto true)
   */
  searchOnLoad?: boolean;
}

/**
 * Hook personalizado para manejar la búsqueda
 * @param initialQuery Query inicial
 * @param onSearch Función a ejecutar cuando cambia la búsqueda
 * @param options Opciones de configuración adicionales
 */
export const useSearch = <T = unknown>(
  initialQuery: string = '',
  onSearch: (query: string) => T[] | Promise<T[]>,
  options: SearchOptions = {}
) => {
  // Opciones por defecto
  const {
    debounceTime = 300,
    saveToHistory = true,
    maxHistoryItems = 5,
    updateUrl = false,
    queryParam = 'q',
    searchOnLoad = true
  } = options;
  
  // Estado para el query actual, resultados y estado de carga
  const [query, setQuery] = useState<string>(initialQuery);
  const [results, setResults] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Hooks de react-router
  const navigate = useNavigate();
  const location = useLocation();
  
  // Analytics
  const analytics = useAnalytics();
  
  // Extraer query de la URL si existe
  useEffect(() => {
    if (updateUrl && searchOnLoad) {
      const params = new URLSearchParams(location.search);
      const urlQuery = params.get(queryParam);
      
      if (urlQuery && urlQuery !== query) {
        setQuery(urlQuery);
      }
    }
  }, [location.search, queryParam, query, updateUrl, searchOnLoad]);
  
  // Función para realizar la búsqueda
  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.trim().length === 0) {
      setResults([]);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const searchResults = await onSearch(searchQuery);
      setResults(searchResults);
      
      // Registrar evento de búsqueda
      analytics.trackSearch(searchQuery, searchResults.length);
      
      // Guardar en historial si está habilitado
      if (saveToHistory && searchQuery.trim()) {
        addToSearchHistory(searchQuery, maxHistoryItems);
      }
      
      // Actualizar URL si está habilitado
      if (updateUrl) {
        const searchParams = new URLSearchParams(location.search);
        if (searchQuery) {
          searchParams.set(queryParam, searchQuery);
        } else {
          searchParams.delete(queryParam);
        }
        
        const newSearch = searchParams.toString();
        const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`;
        
        navigate(newPath, { replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al realizar la búsqueda');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [onSearch, navigate, location, saveToHistory, maxHistoryItems, updateUrl, queryParam, analytics]);
  
  // Debounce para la búsqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      performSearch(query);
    }, debounceTime);
    
    return () => {
      clearTimeout(handler);
    };
  }, [query, debounceTime, performSearch]);
  
  // Ejecutar búsqueda inicial si es necesario
  useEffect(() => {
    if (searchOnLoad && initialQuery) {
      performSearch(initialQuery);
    }
  }, []);
  
  // Función para cambiar el query
  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);
  
  // Función para limpiar la búsqueda
  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    
    if (updateUrl) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete(queryParam);
      
      const newSearch = searchParams.toString();
      const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`;
      
      navigate(newPath, { replace: true });
    }
  }, [navigate, location, updateUrl, queryParam]);
  
  // Función para realizar la búsqueda inmediatamente (sin debounce)
  const searchNow = useCallback((searchQuery: string = query) => {
    performSearch(searchQuery);
  }, [query, performSearch]);
  
  return {
    query,
    results,
    isLoading,
    error,
    handleSearch,
    clearSearch,
    searchNow
  };
};

export default useSearch;