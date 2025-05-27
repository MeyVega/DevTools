/**
 * Guarda un valor en localStorage con el key especificado
 * @param key - Clave para el almacenamiento
 * @param value - Valor a guardar (se convertirá a JSON)
 */
export const saveToLocalStorage = (key: string, value: unknown): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  };
  
  /**
   * Obtiene un valor de localStorage con el key especificado
   * @param key - Clave para buscar
   * @param defaultValue - Valor por defecto si no se encuentra la clave
   * @returns El valor almacenado o el valor por defecto
   */
  export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return defaultValue;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error('Error al obtener de localStorage:', error);
      return defaultValue;
    }
  };
  
  /**
   * Elimina un valor de localStorage con el key especificado
   * @param key - Clave a eliminar
   */
  export const removeFromLocalStorage = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar de localStorage:', error);
    }
  };
  
  /**
   * Verifica si una herramienta está guardada en favoritos
   * @param toolId - ID de la herramienta a verificar
   * @returns Boolean indicando si está guardada
   */
  export const isToolSaved = (toolId: string): boolean => {
    const savedTools = getFromLocalStorage<string[]>('savedTools', []);
    return savedTools.includes(toolId);
  };
  
  /**
   * Guarda o elimina una herramienta de favoritos
   * @param toolId - ID de la herramienta
   * @returns Boolean indicando el nuevo estado (guardada o no)
   */
  export const toggleSavedTool = (toolId: string): boolean => {
    const savedTools = getFromLocalStorage<string[]>('savedTools', []);
    
    if (savedTools.includes(toolId)) {
      // Eliminar de favoritos
      const newSavedTools = savedTools.filter(id => id !== toolId);
      saveToLocalStorage('savedTools', newSavedTools);
      return false;
    } else {
      // Agregar a favoritos
      const newSavedTools = [...savedTools, toolId];
      saveToLocalStorage('savedTools', newSavedTools);
      return true;
    }
  };
  
  /**
   * Obtiene todas las herramientas guardadas
   * @returns Array con IDs de herramientas guardadas
   */
  export const getSavedTools = (): string[] => {
    return getFromLocalStorage<string[]>('savedTools', []);
  };
  
  /**
   * Añade un término a la historia de búsqueda
   * @param searchTerm - Término a añadir
   * @param maxItems - Número máximo de términos a mantener
   */
  export const addToSearchHistory = (searchTerm: string, maxItems: number = 5): void => {
    const searchHistory = getFromLocalStorage<string[]>('searchHistory', []);
    
    // Eliminar si ya existe y añadir al principio
    const newHistory = [
      searchTerm,
      ...searchHistory.filter(term => term !== searchTerm)
    ].slice(0, maxItems);
    
    saveToLocalStorage('searchHistory', newHistory);
  };
  
  /**
   * Obtiene el historial de búsqueda
   * @returns Array con términos de búsqueda
   */
  export const getSearchHistory = (): string[] => {
    return getFromLocalStorage<string[]>('searchHistory', []);
  };
  
  /**
   * Limpia el historial de búsqueda
   */
  export const clearSearchHistory = (): void => {
    removeFromLocalStorage('searchHistory');
  };