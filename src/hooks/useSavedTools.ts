import { useState, useEffect, useCallback } from 'react';
import { Tool, getToolById } from '../data/tools';
import { 
  getSavedTools, 
  toggleSavedTool, 
} from '../utils/storage';

interface UseSavedToolsReturn {
  savedTools: Tool[];
  isSaved: (toolId: string) => boolean;
  toggleTool: (toolId: string) => boolean;
  clearAllSaved: () => void;
}

/**
 * Hook personalizado para manejar herramientas guardadas
 * @returns Objeto con herramientas guardadas y funciones para su manejo
 */
export const useSavedTools = (): UseSavedToolsReturn => {
  const [savedToolIds, setSavedToolIds] = useState<string[]>([]);
  const [savedTools, setSavedTools] = useState<Tool[]>([]);

  // Cargar IDs de herramientas guardadas
  useEffect(() => {
    const loadSavedTools = () => {
      const ids = getSavedTools();
      setSavedToolIds(ids);
    };

    loadSavedTools();
    
    // Escuchar cambios en localStorage de otras pestañas
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'savedTools') {
        loadSavedTools();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Actualizar herramientas guardadas cuando cambian los IDs
  useEffect(() => {
    const tools = savedToolIds
      .map(id => getToolById(id))
      .filter((tool): tool is Tool => tool !== undefined);
    
    setSavedTools(tools);
  }, [savedToolIds]);

  // Verificar si una herramienta está guardada
  const isSaved = useCallback((toolId: string): boolean => {
    return savedToolIds.includes(toolId);
  }, [savedToolIds]);

  // Alternar el estado de guardado de una herramienta
  const toggleTool = useCallback((toolId: string): boolean => {
    const isNowSaved = toggleSavedTool(toolId);
    
    if (isNowSaved) {
      setSavedToolIds(prev => [...prev, toolId]);
    } else {
      setSavedToolIds(prev => prev.filter(id => id !== toolId));
    }
    
    return isNowSaved;
  }, []);

  // Eliminar todas las herramientas guardadas
  const clearAllSaved = useCallback(() => {
    localStorage.removeItem('savedTools');
    setSavedToolIds([]);
  }, []);

  return {
    savedTools,
    isSaved,
    toggleTool,
    clearAllSaved
  };
};

export default useSavedTools;