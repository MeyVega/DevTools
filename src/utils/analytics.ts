/**
 * Tipos de eventos que podemos rastrear en la aplicación
 */
export enum EventType {
  PAGE_VIEW = 'page_view',
  BUTTON_CLICK = 'button_click',
  LINK_CLICK = 'link_click',
  TOOL_VIEW = 'tool_view',
  TOOL_SAVE = 'tool_save',
  TOOL_SHARE = 'tool_share',
  SEARCH = 'search',
  FILTER = 'filter',
  CATEGORY_VIEW = 'category_view',
  TAG_VIEW = 'tag_view',
  NEWSLETTER_SUBSCRIBE = 'newsletter_subscribe',
  THEME_CHANGE = 'theme_change',
  EXTERNAL_LINK = 'external_link',
  TOOL_UNSAVE = 'tool_unsave',
  CLEAR_SAVED_TOOLS = 'clear_saved_tools',
  CATEGORY_CLICK = 'category_click',
  POST_VIEW = 'post_view',
  SHARE = 'share',
  TOOL_CLICK = 'tool_click',
  TAG_CLICK = 'tag_click',
}

/**
 * Interfaz para los parámetros de eventos
 */
export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Opciones para configurar el servicio de análisis
 */
export interface AnalyticsConfig {
  enabled: boolean;
  googleAnalyticsId?: string;
  debugMode?: boolean;
  excludedEvents?: EventType[];
}

/**
 * Configuración por defecto
 */
let config: AnalyticsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  debugMode: process.env.NODE_ENV !== 'production',
  excludedEvents: [],
};

/**
 * Inicializa la configuración de analytics
 * @param newConfig Configuración personalizada para analytics
 */
export const initAnalytics = (newConfig: Partial<AnalyticsConfig>) => {
  config = { ...config, ...newConfig };

  if (config.enabled && config.googleAnalyticsId) {
    loadGoogleAnalytics(config.googleAnalyticsId);
  }

  if (config.debugMode) {
    console.log('Analytics inicializado con configuración:', config);
  }
};

/**
 * Cargar el script de Google Analytics
 * @param id ID de Google Analytics
 */
const loadGoogleAnalytics = (id: string) => {
  if (document.getElementById('ga-script')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', id);

  window.gtag = gtag;
};

/**
 * Rastrea un evento de análisis
 * @param eventType Tipo de evento
 * @param params Parámetros adicionales para el evento
 */
export const trackEvent = (eventType: EventType, params: EventParams = {}) => {
  if (!config.enabled || config.excludedEvents?.includes(eventType)) {
    return;
  }

  const eventName = eventType.toLowerCase();
  const eventParams = {
    event_category: getEventCategory(eventType),
    ...params,
  };

  if (window.gtag && config.googleAnalyticsId) {
    window.gtag('event', eventName, eventParams);
  }

  if (config.debugMode) {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
  }
};

/**
 * Obtiene la categoría para un tipo de evento
 * @param eventType Tipo de evento
 * @returns Categoría del evento
 */
const getEventCategory = (eventType: EventType): string => {
  const categories: Record<EventType, string> = {
    [EventType.PAGE_VIEW]: 'navigation',
    [EventType.BUTTON_CLICK]: 'engagement',
    [EventType.LINK_CLICK]: 'navigation',
    [EventType.TOOL_VIEW]: 'content',
    [EventType.TOOL_SAVE]: 'engagement',
    [EventType.TOOL_SHARE]: 'social',
    [EventType.SEARCH]: 'search',
    [EventType.FILTER]: 'search',
    [EventType.CATEGORY_VIEW]: 'content',
    [EventType.TAG_VIEW]: 'content',
    [EventType.NEWSLETTER_SUBSCRIBE]: 'conversion',
    [EventType.THEME_CHANGE]: 'personalization',
    [EventType.EXTERNAL_LINK]: 'outbound',
    [EventType.TOOL_UNSAVE]: 'engagement',
    [EventType.CLEAR_SAVED_TOOLS]: 'engagement',
    [EventType.CATEGORY_CLICK]: 'engagement',
    [EventType.POST_VIEW]: 'content',
    [EventType.SHARE]: 'social',
    [EventType.TOOL_CLICK]: 'engagement',
    [EventType.TAG_CLICK]: 'engagement',
  };

  return categories[eventType] || 'general';
};

/**
 * Rastrea una vista de página
 * @param pageName Nombre de la página
 * @param params Parámetros adicionales
 */
export const trackPageView = (pageName: string, params: EventParams = {}) => {
  trackEvent(EventType.PAGE_VIEW, {
    page_title: pageName,
    page_path: window.location.pathname,
    ...params,
  });
};

/**
 * Rastrea un clic en botón
 * @param buttonName Nombre del botón
 * @param params Parámetros adicionales
 */
export const trackButtonClick = (buttonName: string, params: EventParams = {}) => {
  trackEvent(EventType.BUTTON_CLICK, {
    button_name: buttonName,
    ...params,
  });
};

/**
 * Rastrea una búsqueda
 * @param searchTerm Término de búsqueda
 * @param resultCount Número de resultados (opcional)
 * @param params Parámetros adicionales
 */
export const trackSearch = (
  searchTerm: string,
  resultCount?: number,
  params: EventParams = {}
) => {
  trackEvent(EventType.SEARCH, {
    search_term: searchTerm,
    result_count: resultCount,
    ...params,
  });
};

/**
 * Rastrea la vista de una herramienta
 * @param toolId ID de la herramienta
 * @param toolName Nombre de la herramienta
 * @param params Parámetros adicionales
 */
export const trackToolView = (
  toolId: string,
  toolName: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.TOOL_VIEW, {
    tool_id: toolId,
    tool_name: toolName,
    ...params,
  });
};

/**
 * Rastrea la vista de un post
 * @param postId ID del post
 * @param postTitle Título del post
 * @param params Parámetros adicionales
 */
export const trackPostView = (
  postId: string,
  postTitle: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.POST_VIEW, {
    post_id: postId,
    post_title: postTitle,
    ...params,
  });
};

/**
 * Rastrea cuando se comparte un recurso
 * @param resourceId ID del recurso (por ejemplo, post_id o tool_id)
 * @param resourceTitle Título del recurso
 * @param params Parámetros adicionales
 */
export const trackShare = (
  resourceId: string,
  resourceTitle: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.SHARE, {
    resource_id: resourceId,
    resource_title: resourceTitle,
    ...params,
  });
};

/**
 * Rastrea un clic en una herramienta
 * @param toolId ID de la herramienta
 * @param toolName Nombre de la herramienta
 * @param params Parámetros adicionales
 */
export const trackToolClick = (
  toolId: string,
  toolName: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.TOOL_CLICK, {
    tool_id: toolId,
    tool_name: toolName,
    ...params,
  });
};

/**
 * Rastrea un clic en una etiqueta
 * @param tag Nombre de la etiqueta
 * @param params Parámetros adicionales
 */
export const trackTagClick = (tag: string, params: EventParams = {}) => {
  trackEvent(EventType.TAG_CLICK, {
    tag,
    ...params,
  });
};

/**
 * Rastrea cuando se guarda una herramienta
 * @param toolId ID de la herramienta
 * @param toolName Nombre de la herramienta
 * @param params Parámetros adicionales
 */
export const trackToolSave = (
  toolId: string,
  toolName: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.TOOL_SAVE, {
    tool_id: toolId,
    tool_name: toolName,
    ...params,
  });
};

/**
 * Rastrea cuando se quita una herramienta
 * @param toolId ID de la herramienta
 * @param toolName Nombre de la herramienta
 * @param params Parámetros adicionales
 */
export const trackToolUnsave = (
  toolId: string,
  toolName: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.TOOL_UNSAVE, {
    tool_id: toolId,
    tool_name: toolName,
    ...params,
  });
};

/**
 * Rastrea cuando se limpian todas las herramientas guardadas
 * @param count Número de herramientas eliminadas
 * @param params Parámetros adicionales
 */
export const trackClearSavedTools = (count: number, params: EventParams = {}) => {
  trackEvent(EventType.CLEAR_SAVED_TOOLS, {
    count,
    ...params,
  });
};

/**
 * Rastrea cuando se comparte una herramienta
 * @param toolId ID de la herramienta
 * @param toolName Nombre de la herramienta
 * @param method Método de compartir (e.g., 'twitter', 'copy_link')
 * @param params Parámetros adicionales
 */
export const trackToolShare = (
  toolId: string,
  toolName: string,
  method: string,
  params: EventParams = {}
) => {
  trackEvent(EventType.TOOL_SHARE, {
    tool_id: toolId,
    tool_name: toolName,
    share_method: method,
    ...params,
  });
};

/**
 * Rastrea una suscripción al newsletter
 * @param source Origen de la suscripción (e.g., 'footer', 'popup')
 * @param params Parámetros adicionales
 */
export const trackNewsletterSubscribe = (source: string, params: EventParams = {}) => {
  trackEvent(EventType.NEWSLETTER_SUBSCRIBE, {
    source: source,
    ...params,
  });
};

/**
 * Rastrea un cambio de tema
 * @param newTheme Nuevo tema seleccionado ('light' o 'dark')
 * @param params Parámetros adicionales
 */
export const trackThemeChange = (newTheme: 'light' | 'dark', params: EventParams = {}) => {
  trackEvent(EventType.THEME_CHANGE, {
    theme: newTheme,
    ...params,
  });
};

/**
 * Rastrea un clic en enlace externo
 * @param url URL del enlace externo
 * @param linkText Texto del enlace
 * @param params Parámetros adicionales
 */
export const trackExternalLink = (url: string, linkText: string, params: EventParams = {}) => {
  trackEvent(EventType.EXTERNAL_LINK, {
    url: url,
    link_text: linkText,
    ...params,
  });
};

/**
 * Rastrea un evento de filtrado
 * @param params Parámetros del filtrado
 */
export const trackFilter = (params: EventParams = {}) => {
  trackEvent(EventType.FILTER, {
    ...params,
  });
};

// Definir la interfaz para el objeto de analytics
export interface Analytics {
  initAnalytics: (newConfig: Partial<AnalyticsConfig>) => void;
  trackEvent: (eventType: EventType, params?: EventParams) => void;
  trackPageView: (pageName: string, params?: EventParams) => void;
  trackButtonClick: (buttonName: string, params?: EventParams) => void;
  trackSearch: (searchTerm: string, resultCount?: number, params?: EventParams) => void;
  trackToolView: (toolId: string, toolName: string, params?: EventParams) => void;
  trackPostView: (postId: string, postTitle: string, params?: EventParams) => void;
  trackShare: (resourceId: string, resourceTitle: string, params?: EventParams) => void;
  trackToolClick: (toolId: string, toolName: string, params?: EventParams) => void;
  trackTagClick: (tag: string, params?: EventParams) => void;
  trackToolSave: (toolId: string, toolName: string, params?: EventParams) => void;
  trackToolUnsave: (toolId: string, toolName: string, params?: EventParams) => void;
  trackClearSavedTools: (count: number, params?: EventParams) => void;
  trackToolShare: (toolId: string, toolName: string, method: string, params?: EventParams) => void;
  trackNewsletterSubscribe: (source: string, params?: EventParams) => void;
  trackThemeChange: (newTheme: 'light' | 'dark', params?: EventParams) => void;
  trackExternalLink: (url: string, linkText: string, params?: EventParams) => void;
  trackFilter: (params?: EventParams) => void;
}

// Añadir tipos a window para Google Analytics
declare global {
  interface Window {
    dataLayer: Array<unknown>;
    gtag: (...args: unknown[]) => void;
  }
}

export default {
  initAnalytics,
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackSearch,
  trackToolView,
  trackPostView,
  trackShare,
  trackToolClick,
  trackTagClick,
  trackToolSave,
  trackToolUnsave,
  trackClearSavedTools,
  trackToolShare,
  trackNewsletterSubscribe,
  trackThemeChange,
  trackExternalLink,
  trackFilter,
};