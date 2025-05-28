// src/utils/dateUtils.ts

/**
 * Formatea una fecha en un formato legible
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @param options - Opciones de formato
 * @returns Fecha formateada
 */
export const formatDate = (
  dateString: string,
  options: {
    showYear?: boolean;
    showTime?: boolean;
    locale?: string;
    format?: 'short' | 'medium' | 'long';
  } = {}
): string => {
  const {
    showYear = true,
    showTime = false,
    locale = 'es-ES',
    format = 'medium'
  } = options;

  try {
    const date = new Date(dateString);
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      console.error(`Fecha inválida: ${dateString}`);
      return dateString;
    }

    // Opciones básicas para diferentes formatos
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: format === 'short' ? 'short' : format === 'long' ? 'long' : 'short',
    };
    
    // Agregar año si es necesario
    if (showYear) {
      dateOptions.year = 'numeric';
    }
    
    // Agregar hora si es necesario
    if (showTime) {
      dateOptions.hour = '2-digit';
      dateOptions.minute = '2-digit';
    }
    
    return new Intl.DateTimeFormat(locale, dateOptions).format(date);
  } catch (error) {
    console.error(`Error al formatear la fecha: ${error}`);
    return dateString;
  }
};

/**
 * Formatea una fecha relativa (ej: "hace 2 días", "hace 5 minutos")
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @param locale - Código de localización (ej: 'es-ES')
 * @returns Fecha relativa formateada
 */
export const formatRelativeDate = (
  dateString: string,
  locale: string = 'es-ES'
): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      console.error(`Fecha inválida: ${dateString}`);
      return dateString;
    }
    
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    // Si la diferencia es negativa, la fecha es en el futuro
    if (diffInSeconds < 0) {
      return formatDate(dateString, { locale });
    }
    
    // Si la diferencia es menor a un minuto
    if (diffInSeconds < 60) {
      return 'Hace un momento';
    }
    
    // Si la diferencia es menor a una hora
    if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
    }
    
    // Si la diferencia es menor a un día
    if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    }
    
    // Si la diferencia es menor a una semana
    if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `Hace ${days} ${days === 1 ? 'día' : 'días'}`;
    }
    
    // Si la diferencia es mayor a una semana, usar el formato normal
    return formatDate(dateString, { locale });
  } catch (error) {
    console.error(`Error al formatear la fecha relativa: ${error}`);
    return dateString;
  }
};

/**
 * Formatea la fecha de última actualización
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @returns Fecha formateada
 */
export const formatLastUpdated = (dateString: string): string => {
  const currentYear = new Date().getFullYear();
  const date = new Date(dateString);
  
  // Si la fecha es del año actual, mostrar solo el día y el mes
  if (date.getFullYear() === currentYear) {
    return formatDate(dateString, { showYear: false, format: 'long' });
  }
  
  // Si la fecha es de años anteriores, mostrar fecha completa
  return formatDate(dateString, { format: 'long' });
};

/**
 * Obtiene la antigüedad de una fecha en días
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @returns Número de días desde la fecha indicada hasta hoy
 */
export const getDaysAgo = (dateString: string): number => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      console.error(`Fecha inválida: ${dateString}`);
      return 0;
    }
    
    // Calcular diferencia en días
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    return diffInDays;
  } catch (error) {
    console.error(`Error al calcular días desde la fecha: ${error}`);
    return 0;
  }
};

/**
 * Verifica si una fecha está dentro de un rango específico de días
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @param days - Número de días para el rango
 * @returns true si la fecha está dentro del rango, false en caso contrario
 */
export const isWithinDays = (dateString: string, days: number): boolean => {
  const daysAgo = getDaysAgo(dateString);
  return daysAgo <= days && daysAgo >= 0;
};

/**
 * Verifica si una fecha es reciente (menos de 7 días)
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @returns true si la fecha es reciente, false en caso contrario
 */
export const isRecent = (dateString: string): boolean => {
  return isWithinDays(dateString, 7);
};

/**
 * Verifica si una fecha es nueva (menos de 30 días)
 * @param dateString - String de fecha en formato ISO (YYYY-MM-DD) o cualquier formato válido para Date
 * @returns true si la fecha es nueva, false en caso contrario
 */
export const isNew = (dateString: string): boolean => {
  return isWithinDays(dateString, 30);
};