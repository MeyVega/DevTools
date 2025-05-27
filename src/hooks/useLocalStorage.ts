import { useState, useEffect, useCallback } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

/**
 * Hook personalizado para persistir estados en localStorage
 * @param key Clave para guardar el valor en localStorage
 * @param initialValue Valor inicial (usado si no hay valor en localStorage)
 * @param options Opciones adicionales para el hook
 * @returns [valor almacenado, función para actualizar el valor, función para eliminar el valor]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: {
    /**
     * Si es true, sincronizará el valor con otros tabs/ventanas (por defecto true)
     */
    sync?: boolean;
    /**
     * Si es true, serializará/deserializará valores que no son string (por defecto true)
     */
    serialize?: boolean;
    /**
     * Si es true, el estado se actualizará si el valor de localStorage cambia externamente (por defecto true)
     */
    listen?: boolean;
  } = {}
): [T, (value: SetValue<T>) => void, () => void] {
  // Opciones por defecto
  const { sync = true, serialize = true, listen = true } = options;

  // Función para obtener el valor inicial
  const getInitialValue = useCallback((): T => {
    try {
      // Obtener valor de localStorage
      const item = window.localStorage.getItem(key);
      
      // Si no hay valor, usar initialValue
      if (item === null) {
        // Si initialValue es una función, ejecutarla
        const value = initialValue instanceof Function ? initialValue() : initialValue;
        
        // Guardar valor inicial en localStorage
        if (serialize) {
          window.localStorage.setItem(key, JSON.stringify(value));
        } else {
          window.localStorage.setItem(key, String(value));
        }
        
        return value;
      }
      
      // Si hay valor, parsearlo si es necesario
      if (serialize) {
        return JSON.parse(item);
      }
      
      return item as unknown as T;
    } catch (error) {
      console.error(`Error obteniendo ${key} de localStorage:`, error);
      return initialValue;
    }
  }, [key, initialValue, serialize]);

  // Estado con el valor de localStorage o initialValue
  const [storedValue, setStoredValue] = useState<T>(getInitialValue);

  // Actualizar localStorage cuando el estado cambia
  useEffect(() => {
    try {
      // Guardar en localStorage
      if (serialize) {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } else {
        window.localStorage.setItem(key, String(storedValue));
      }
    } catch (error) {
      console.error(`Error guardando ${key} en localStorage:`, error);
    }
  }, [key, storedValue, serialize]);

  // Escuchar cambios en localStorage de otras ventanas/tabs
  useEffect(() => {
    if (!sync || !listen) return;

    // Handler para actualizar el estado cuando cambia localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== key || event.newValue === null) return;
      
      try {
        // Actualizar estado con el nuevo valor
        const newValue = serialize ? JSON.parse(event.newValue) : event.newValue;
        setStoredValue(newValue);
      } catch (error) {
        console.error(`Error parseando ${key} de localStorage:`, error);
      }
    };

    // Escuchar eventos de storage
    window.addEventListener('storage', handleStorageChange);
    
    // Limpiar event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, sync, listen, serialize]);

  // Función para actualizar el valor y localStorage
  const setValue = useCallback((value: SetValue<T>): void => {
    try {
      // Permitir valor o función que actualiza el valor
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Actualizar estado
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Error guardando ${key} en localStorage:`, error);
    }
  }, [key, storedValue]);

  // Función para eliminar el valor de localStorage
  const removeValue = useCallback((): void => {
    try {
      // Eliminar valor de localStorage
      window.localStorage.removeItem(key);
      
      // Resetear a valor inicial
      setStoredValue(initialValue);
      
      // Disparar evento de storage para sincronizar con otras ventanas
      if (sync) {
        window.dispatchEvent(new StorageEvent('storage', {
          key,
          newValue: null
        }));
      }
    } catch (error) {
      console.error(`Error eliminando ${key} de localStorage:`, error);
    }
  }, [key, initialValue, sync]);

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;