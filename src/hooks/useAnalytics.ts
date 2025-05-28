import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  EventType,
  EventParams,
  Analytics, // Importar la interfaz Analytics
  trackPageView,
  trackButtonClick,
  trackSearch,
  trackToolView,
  trackToolSave,
  trackToolUnsave,
  trackClearSavedTools,
  trackToolShare,
  trackNewsletterSubscribe,
  trackThemeChange,
  trackExternalLink,
  trackFilter,
  trackPostView, 
  trackShare,
  trackToolClick, 
  trackTagClick, 
} from '../utils/analytics';

/**
 * Hook personalizado para usar analytics en componentes funcionales.
 * Automáticamente rastrea las vistas de página cuando cambia la URL.
 * Versión optimizada para evitar recreaciones innecesarias de funciones.
 */
export const useAnalytics = (): Analytics => {
  const location = useLocation();

  // Utilidad para obtener un nombre de página amigable a partir de la ruta
  const getPageNameFromPath = useCallback((path: string): string => {
    if (path === '/') return 'Home';

    // Extraer el nombre de la página de la ruta
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'Home';

    // Manejar patrones comunes
    if (segments[0] === 'category' && segments.length > 1) {
      return `Category: ${segments[1].charAt(0).toUpperCase() + segments[1].slice(1)}`;
    }

    if (segments[0] === 'tool' && segments.length > 1) {
      return `Tool: ${segments[1]}`;
    }

    // Convertir kebab-case a Title Case
    return segments[0]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, []);

  // Rastrear cambios de página automáticamente
  useEffect(() => {
    const pageName = getPageNameFromPath(location.pathname);
    trackPageView(pageName, { path: location.pathname });
  }, [location.pathname, getPageNameFromPath]);

  // Memoizar todas las funciones para evitar recreaciones en cada renderizado
  const memoizedFunctions: Analytics = {
    initAnalytics: useCallback(() => {
      // Add your initialization logic here
      console.log('Analytics initialized');
    }, []),
    // Funciones básicas
    trackEvent: useCallback((eventType: EventType, params: EventParams = {}) =>
      trackPageView(eventType, params), []),

    // Funciones específicas
    trackButtonClick: useCallback((buttonName: string, params: EventParams = {}) =>
      trackButtonClick(buttonName, params), []),

    trackPageView: useCallback((pageName: string, params: EventParams = {}) =>
      trackPageView(pageName, params), []),

    trackSearch: useCallback((searchTerm: string, resultCount?: number, params: EventParams = {}) =>
      trackSearch(searchTerm, resultCount, params), []),

    trackToolView: useCallback((toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolView(toolId, toolName, params), []),

    trackToolSave: useCallback((toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolSave(toolId, toolName, params), []),

    trackToolUnsave: useCallback((toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolUnsave(toolId, toolName, params), []),

    trackClearSavedTools: useCallback((count: number, params: EventParams = {}) =>
      trackClearSavedTools(count, params), []),

    trackToolShare: useCallback((toolId: string, toolName: string, method: string, params: EventParams = {}) =>
      trackToolShare(toolId, toolName, method, params), []),

    trackNewsletterSubscribe: useCallback((source: string, params: EventParams = {}) =>
      trackNewsletterSubscribe(source, params), []),

    trackThemeChange: useCallback((newTheme: 'light' | 'dark', params: EventParams = {}) =>
      trackThemeChange(newTheme, params), []),

    trackExternalLink: useCallback((url: string, linkText: string, params: EventParams = {}) =>
      trackExternalLink(url, linkText, params), []),

    trackFilter: useCallback((params: EventParams = {}) =>
      trackFilter(params), []),

    // Nuevas funciones añadidas
    trackPostView: useCallback((postId: string, postTitle: string, params: EventParams = {}) =>
      trackPostView(postId, postTitle, params), []),

    trackShare: useCallback((resourceId: string, resourceTitle: string, params: EventParams = {}) =>
      trackShare(resourceId, resourceTitle, params), []),

    trackToolClick: useCallback((toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolClick(toolId, toolName, params), []),

    trackTagClick: useCallback((tag: string, params: EventParams = {}) =>
      trackTagClick(tag, params), []),
  };

  return memoizedFunctions;
};

export default useAnalytics;