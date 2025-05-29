//import { Tool } from './tools';

export type BlogPostType = 'tutorial' | 'review' | 'news' | 'tip';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  type: BlogPostType;
  relatedTools: string[]; // IDs de herramientas relacionadas
  coverImage?: string;
  tags?: string[];
}

// Ejemplo de datos de publicaciones de blog
export const blogPosts: BlogPost[] = [
    {
      id: 'post-001',
      title: '5 Extensiones Esenciales para VS Code en 2025',
      slug: '5-extensiones-esenciales-vscode-2025',
      summary: 'Una selección de las mejores extensiones para VS Code que todo desarrollador debería conocer este año.',
      content: `
  # 5 Extensiones Esenciales para VS Code en 2025
  
  Visual Studio Code sigue siendo uno de los editores de código más populares en 2025, y gran parte de su éxito se debe a su extensibilidad a través de extensiones. Aquí te presentamos 5 extensiones que consideramos esenciales para mejorar tu productividad.
  
  ## 1. GitHub Copilot X
  
  La última versión de GitHub Copilot ofrece sugerencias de código más inteligentes y contextuales. Ahora puede entender mejor la estructura completa de tu proyecto y ofrecer soluciones más adaptadas a tu estilo de codificación.
  
  ## 2. ESLint + Prettier Pro
  
  Esta combinación actualizada ofrece formateo de código y detección de errores en tiempo real, con soporte para los frameworks más recientes y con menor consumo de recursos.
  
  ## 3. Live Share Enhanced
  
  Colabora en tiempo real con tu equipo, ahora con soporte para sesiones de debugging compartidas y sincronización de terminales entre múltiples desarrolladores.
  
  ## 4. Test Explorer UI
  
  Visualiza y ejecuta pruebas directamente desde la interfaz de VS Code, con soporte para todos los frameworks de testing populares.
  
  ## 5. Import Cost Visualizer
  
  Analiza el impacto de tus importaciones en el tamaño final del bundle, con sugerencias para optimizar el rendimiento de tu aplicación.
  
  Estas extensiones no solo mejorarán tu flujo de trabajo diario, sino que también te ayudarán a mantenerte al día con las mejores prácticas de desarrollo en 2025.
      `,
      date: '2025-05-01',
      author: 'María González',
      type: 'tutorial',
      relatedTools: ['vscode'],
      coverImage: '/img/blog/vscode-extensions.png',
      tags: ['vscode', 'extensiones', 'productividad', 'herramientas']
    },
    {
      id: 'post-002',
      title: 'React vs. Vue vs. Angular en 2025: ¿Cuál elegir?',
      slug: 'react-vs-vue-vs-angular-2025',
      summary: 'Análisis comparativo de los tres frameworks frontend más populares y cómo han evolucionado.',
      content: `
  # React vs. Vue vs. Angular en 2025: ¿Cuál elegir?
  
  El debate sobre qué framework frontend es mejor sigue vigente en 2025. React, Vue y Angular han evolucionado significativamente, cada uno con sus fortalezas y casos de uso ideales.
  
  ## React en 2025
  
  React ha consolidado su posición con React 19, introduciendo un sistema de caché mejorado y optimizaciones significativas para Server Components. La adopción de Suspense y React Server Components se ha vuelto mainstream, mejorando drásticamente el rendimiento de aplicaciones complejas.
  
  ## Vue en 2025
  
  Vue 4 ha traído mejoras importantes en su sistema de reactividad y ha simplificado la API para componentes. La integración con Vite es ahora más fluida que nunca, y el ecosistema ha crecido considerablemente.
  
  ## Angular en 2025
  
  Angular 17 ha dado grandes pasos para mejorar la experiencia del desarrollador, con tiempos de compilación más rápidos y un nuevo sistema de señales que mejora el rendimiento. La modularidad y la facilidad de actualización son ahora puntos fuertes.
  
  ## ¿Cuál elegir?
  
  La respuesta sigue dependiendo de tus necesidades específicas:
  
  - **React**: Ideal para proyectos grandes y equipos con experiencia en JavaScript. Excelente para aplicaciones con UIs complejas e interactivas.
  - **Vue**: Perfecta para proyectos medianos y equipos que valoran una curva de aprendizaje suave. Ofrece un buen balance entre simplicidad y potencia.
  - **Angular**: Óptima para aplicaciones empresariales a gran escala donde la estructura y consistencia son prioritarias.
  
  En 2025, la elección del framework depende más que nunca del equipo, el proyecto y los requisitos específicos, no de cuál es "mejor" en términos absolutos.
      `,
      date: '2025-04-15',
      author: 'Carlos Ramírez',
      type: 'review',
      relatedTools: ['react', 'vue', 'angular'],
      coverImage: '/img/blog/frontend-frameworks.jpg',
      tags: ['frontend', 'frameworks', 'react', 'vue', 'angular']
    },
    {
      id: 'post-003',
      title: 'Cómo configurar un entorno de desarrollo local con Docker',
      slug: 'configurar-entorno-desarrollo-local-docker',
      summary: 'Guía paso a paso para configurar un entorno de desarrollo local utilizando Docker y Docker Compose.',
      content: `
  # Cómo configurar un entorno de desarrollo local con Docker
  
  Docker ha revolucionado la forma en que configuramos entornos de desarrollo, haciéndolos consistentes y fáciles de compartir. En esta guía, te mostraré cómo configurar un entorno completo para desarrollo web.
  
  ## Requisitos previos
  
  - Docker Desktop instalado
  - Conocimientos básicos de línea de comandos
  - Editor de código (como VS Code)
  
  ## Paso 1: Crear el archivo Dockerfile
  
  Comenzaremos creando un Dockerfile básico para nuestra aplicación:
  
  \`\`\`dockerfile
  FROM node:18-alpine
  
  WORKDIR /app
  
  COPY package.json package-lock.json ./
  RUN npm install
  
  COPY . .
  
  EXPOSE 3000
  
  CMD ["npm", "start"]
  \`\`\`
  
  ## Paso 2: Configurar Docker Compose
  
  Ahora crearemos un archivo docker-compose.yml para orquestar múltiples servicios:
  
  \`\`\`yaml
  version: '3'
  
  services:
    app:
      build: .
      ports:
        - "3000:3000"
      volumes:
        - ./:/app
        - /app/node_modules
      environment:
        - NODE_ENV=development
      depends_on:
        - db
    
    db:
      image: postgres:14-alpine
      ports:
        - "5432:5432"
      volumes:
        - postgres_data:/var/lib/postgresql/data
      environment:
        - POSTGRES_PASSWORD=password
        - POSTGRES_USER=user
        - POSTGRES_DB=myapp
  
  volumes:
    postgres_data:
  \`\`\`
  
  ## Paso 3: Iniciar el entorno
  
  Ejecuta el siguiente comando para iniciar tu entorno de desarrollo:
  
  \`\`\`bash
  docker-compose up -d
  \`\`\`
  
  Con esto, tendrás una aplicación Node.js conectada a una base de datos PostgreSQL, todo corriendo en contenedores Docker aislados pero interconectados.
  
  ## Ventajas de este enfoque
  
  - Entorno consistente para todos los miembros del equipo
  - Fácil de replicar en diferentes máquinas
  - Aislamiento de dependencias
  - No necesitas instalar software adicional en tu sistema
  
  Docker hace que el famoso "funciona en mi máquina" ya no sea un problema, asegurando que el entorno de desarrollo sea idéntico para todos.
      `,
      date: '2025-03-20',
      author: 'Alejandro Torres',
      type: 'tutorial',
      relatedTools: ['docker'],
      coverImage: '/img/blog/docker-setup.jpeg',
      tags: ['docker', 'devops', 'desarrollo local', 'configuración']
    }
  ];
  
// Obtener todos los posts ordenados por fecha
export const getLatestPosts = (limit?: number): BlogPost[] => {
    const sortedPosts = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    return limit ? sortedPosts.slice(0, limit) : sortedPosts;
  };

// Obtener post por tipo
export const getPostsByType = (type: BlogPostType, limit?: number): BlogPost[] => {
    const filteredPosts = blogPosts
      .filter(post => post.type === type)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return limit ? filteredPosts.slice(0, limit) : filteredPosts;
  };

// Obtener posts relacionados con una herramienta
export const getPostsForTool = (toolId: string): BlogPost[] => {
    return blogPosts
      .filter(post => post.relatedTools.includes(toolId))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

// Obtener un post por su slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
  };