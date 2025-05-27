import React, { createContext, useContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Tool, getToolById } from '../data/tools';
import useLocalStorage from '../hooks/useLocalStorage';
import useAnalytics from '../hooks/useAnalytics';

/**
 * Interfaz para el contexto de marcadores
 */
interface BookmarksContextType {
  savedTools: Tool[];
  savedToolIds: string[];
  isSaved: (toolId: string) => boolean;
  toggleTool: (toolId: string) => boolean;
  saveTool: (toolId: string) => void;
  removeTool: (toolId: string) => void;
  clearAll: () => void;
  isLoading: boolean;
}

// Crear el contexto
const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined);

interface BookmarksProviderProps {
  children: ReactNode;
}

/**
 * Proveedor para el contexto de marcadores
 */
export const BookmarksProvider: React.FC<BookmarksProviderProps> = ({ children }) => {
  // Usar localStorage para guardar los IDs de las herramientas
  const [savedToolIds, setSavedToolIds, clearSavedTools] = useLocalStorage<string[]>(
    'savedTools',
    [],
    { sync: true }
  );

  // Estado para las herramientas completas (con toda la info)
  const [savedTools, setSavedTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Analytics
  const analytics = useAnalytics();

  // Cargar las herramientas completas cuando cambian los IDs
  useEffect(() => {
    const loadSavedTools = async () => {
      setIsLoading(true);

      try {
        // Obtener las herramientas completas a partir de los IDs
        const tools = savedToolIds
          .map(id => getToolById(id))
          .filter((tool): tool is Tool => tool !== undefined);

        setSavedTools(tools);
      } catch (error) {
        console.error('Error al cargar herramientas guardadas:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSavedTools();
  }, [savedToolIds]);

  // Verificar si una herramienta está guardada
  const isSaved = useCallback((toolId: string): boolean => {
    return savedToolIds.includes(toolId);
  }, [savedToolIds]);

  // Alternar (guardar/quitar) una herramienta
  const toggleTool = useCallback(
    (toolId: string): boolean => {
      let isNowSaved = false;

      setSavedToolIds(prevIds => {
        if (prevIds.includes(toolId)) {
          // Quitar herramienta
          isNowSaved = false;
          return prevIds.filter(id => id !== toolId);
        } else {
          // Guardar herramienta
          isNowSaved = true;
          return [...prevIds, toolId];
        }
      });

      // Registrar evento en analytics
      const tool = getToolById(toolId);
      if (tool) {
        if (isNowSaved) {
          analytics.trackToolSave(toolId, tool.name, {
            category: tool.category,
            is_free: tool.isFree
          });
        } else {
          analytics.trackToolUnsave(toolId, tool.name, {
            category: tool.category
          });
        }
      }

      return isNowSaved;
    },
    [setSavedToolIds, analytics]
  );

  // Guardar una herramienta específica
  const saveTool = useCallback(
    (toolId: string): void => {
      if (!isSaved(toolId)) {
        setSavedToolIds(prevIds => [...prevIds, toolId]);

        // Registrar evento en analytics
        const tool = getToolById(toolId);
        if (tool) {
          analytics.trackToolSave(toolId, tool.name, {
            category: tool.category,
            is_free: tool.isFree
          });
        }
      }
    },
    [setSavedToolIds, isSaved, analytics]
  );

  // Quitar una herramienta específica
  const removeTool = useCallback(
    (toolId: string): void => {
      if (isSaved(toolId)) {
        setSavedToolIds(prevIds => prevIds.filter(id => id !== toolId));

        // Registrar evento en analytics
        const tool = getToolById(toolId);
        if (tool) {
          analytics.trackToolUnsave(toolId, tool.name, {
            category: tool.category
          });
        }
      }
    },
    [setSavedToolIds, isSaved, analytics]
  );

  // Limpiar todas las herramientas guardadas
  const clearAll = useCallback((): void => {
    clearSavedTools();

    // Registrar evento en analytics
    analytics.trackClearSavedTools(savedToolIds.length);
  }, [clearSavedTools, savedToolIds.length, analytics]);

  // Proporcionar el contexto
  return (
    <BookmarksContext.Provider
      value={{
        savedTools,
        savedToolIds,
        isSaved,
        toggleTool,
        saveTool,
        removeTool,
        clearAll,
        isLoading
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

/**
 * Hook para usar el contexto de marcadores
 */
export const useBookmarks = (): BookmarksContextType => {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error('useBookmarks debe ser usado dentro de un BookmarksProvider');
  }

  return context;
};

export default BookmarksContext;