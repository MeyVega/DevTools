import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analytics, {
  EventType,
  EventParams,
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
  trackFilter
} from '../utils/analytics';

/**
 * Hook personalizado para usar analytics en componentes funcionales.
 * Automáticamente rastrea las vistas de página cuando cambia la URL.
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Rastrear cambios de página automáticamente
  useEffect(() => {
    const pageName = getPageNameFromPath(location.pathname);
    trackPageView(pageName, { path: location.pathname });
  }, [location.pathname]);

  // Utilidad para obtener un nombre de página amigable a partir de la ruta
  const getPageNameFromPath = (path: string): string => {
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
  };

  return {
    // Funciones básicas
    trackEvent: (eventType: EventType, params: EventParams = {}) => 
      analytics.trackEvent(eventType, params),

    // Funciones específicas
    trackButtonClick: (buttonName: string, params: EventParams = {}) =>
      trackButtonClick(buttonName, params),
    
    trackPageView: (pageName: string, params: EventParams = {}) =>
      trackPageView(pageName, params),

    trackSearch: (searchTerm: string, resultCount?: number, params: EventParams = {}) =>
      trackSearch(searchTerm, resultCount, params),

    trackToolView: (toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolView(toolId, toolName, params),

    trackToolSave: (toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolSave(toolId, toolName, params),

    trackToolUnsave: (toolId: string, toolName: string, params: EventParams = {}) =>
      trackToolUnsave(toolId, toolName, params),

    trackClearSavedTools: (count: number, params: EventParams = {}) =>
      trackClearSavedTools(count, params),

    trackToolShare: (toolId: string, toolName: string, method: string, params: EventParams = {}) =>
      trackToolShare(toolId, toolName, method, params),

    trackNewsletterSubscribe: (source: string, params: EventParams = {}) =>
      trackNewsletterSubscribe(source, params),

    trackThemeChange: (newTheme: 'light' | 'dark', params: EventParams = {}) =>
      trackThemeChange(newTheme, params),

    trackExternalLink: (url: string, linkText: string, params: EventParams = {}) =>
      trackExternalLink(url, linkText, params),

    trackFilter: (params: EventParams = {}) =>
      trackFilter(params)
  };
};

export default useAnalytics;