// src/utils/dateUtils.ts

/**
 * Formatea una fecha para mostrar tiempo relativo (hace X días/semanas/meses)
 * @param dateString - La fecha en formato string
 * @returns String formateado con tiempo relativo
 */
export const formatRelativeTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      return 'Hoy';
    } else if (diffDays === 1) {
      return 'Ayer';
    } else if (diffDays < 7) {
      return `Hace ${diffDays} días`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Hace ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `Hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `Hace ${years} ${years === 1 ? 'año' : 'años'}`;
    }
  };
  
  /**
   * Formatea una fecha en formato localizado (ej: 15 de abril de 2025)
   * @param dateString - La fecha en formato string
   * @returns String formateado con fecha localizada
   */
  export const formatLocalDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  /**
   * Formatea una fecha para mostrar "Actualizado hace X tiempo"
   * @param dateString - La fecha en formato string
   * @returns String formateado con "Actualizado hace X tiempo"
   */
  export const formatLastUpdated = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) {
      return `Actualizado hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Actualizado hace ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    } else {
      const months = Math.floor(diffDays / 30);
      return `Actualizado hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    }
  };
  
  /**
   * Verifica si una herramienta es nueva (menos de 30 días)
   * @param dateString - La fecha en formato string
   * @returns Boolean indicando si es nueva
   */
  export const isNewTool = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays <= 30;
  };