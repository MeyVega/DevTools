# 🛠️ MayTools Catalog - Community Edition

Una colección colaborativa de herramientas y recursos para desarrolladores. Este repositorio es la versión comunitaria del catálogo MayTools, donde puedes contribuir añadiendo nuevas herramientas y recursos.

## 🎯 Objetivo

Crear un directorio completo y actualizado de herramientas de desarrollo, mantenido por la comunidad, para ayudar a otros desarrolladores a encontrar los recursos que necesitan.

## 📚 Cómo Contribuir

### Añadir una Nueva Herramienta

1. Fork este repositorio
2. Añade la herramienta al archivo `tools.ts` siguiendo este formato:

```typescript
{
  id: string;          // Identificador único
  name: string;        // Nombre de la herramienta
  description: string; // Descripción breve
  category: string;    // Categoría (frontend, backend, devops, etc.)
  url: string;         // URL oficial
  isFree: boolean;     // Si es gratuita o no
  tags: string[];      // Etiquetas relacionadas
}
```

3. Crea un Pull Request con tu adición

### Categorías Disponibles

- `frontend`: Herramientas para desarrollo frontend
- `backend`: Herramientas para desarrollo backend
- `devops`: Herramientas para DevOps
- `design`: Herramientas de diseño
- `testing`: Herramientas de testing
- `productivity`: Herramientas de productividad
- `security`: Herramientas de seguridad
- `database`: Herramientas de bases de datos
- `ai`: Herramientas de IA
- `other`: Otras herramientas

## 📋 Guía de Contribución

1. Asegúrate de que la herramienta no existe ya en el catálogo
2. Proporciona información precisa y actualizada
3. Sigue el formato establecido
4. Incluye solo herramientas activamente mantenidas
5. Verifica que los enlaces funcionen correctamente

## ⭐ Criterios de Aceptación

Las herramientas propuestas deben:

- Ser útiles para la comunidad de desarrolladores
- Estar activamente mantenidas
- Tener documentación clara
- Resolver un problema específico
- Tener una buena reputación en la comunidad

## 🚫 No Incluir

- Información personal o sensible
- Claves de API o credenciales
- Enlaces a contenido malicioso
- Herramientas abandonadas o sin mantenimiento
- Información comercial o de marketing

## 📝 Formato del Pull Request

Al crear un PR, incluye:

- Nombre de la herramienta
- Breve descripción de por qué debería incluirse
- Categoría propuesta
- URL oficial
- Si es gratuita o de pago
- Etiquetas relevantes

## 🤝 Código de Conducta

- Sé respetuoso con otros contribuidores
- Mantén las discusiones profesionales y constructivas
- Sigue las mejores prácticas de la comunidad
- Reporta cualquier problema de manera apropiada

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

¿Tienes preguntas? Abre un issue y estaremos encantados de ayudarte.
