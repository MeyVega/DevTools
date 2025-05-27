export type Category = 
  | "frontend" 
  | "backend" 
  | "devops" 
  | "design" 
  | "productivity" 
  | "testing" 
  | "database" 
  | "api"
  | "security"
  | "mobile"
  | "ai";

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  tags: string[];
  image?: string;
  isFree: boolean;
  hasFreeTier?: boolean;
  stars?: number;
  lastUpdated: string;
  isNew?: boolean;
  isFeatured?: boolean;
  githubUrl?: string;
  docsUrl?: string;
  demoUrl?: string;
  authorName?: string;
  documentationUrl?: string;
  alternatives?: string[]; 
}

export const tools: Tool[] = [
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Un editor de código gratuito y de código abierto desarrollado por Microsoft, con soporte integrado para depuración, integración con Git, resaltado de sintaxis, autocompletado de código y más.",
    url: "https://code.visualstudio.com/",
    category: "productivity",
    tags: ["editor", "microsoft", "extensions"],
    image: "@/img/tools/vscode.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-15",
    isFeatured: true,
    githubUrl: "https://github.com/microsoft/vscode",
    documentationUrl: "https://code.visualstudio.com/docs"
  },  
  {
    id: "react",
    name: "React",
    description: "Una biblioteca de JavaScript para construir interfaces de usuario, desarrollada y mantenida por Facebook y una comunidad de desarrolladores individuales y empresas.",
    url: "https://reactjs.org/",
    category: "frontend",
    tags: ["javascript", "ui", "library", "facebook"],
    image: "@/img/tools/react.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-04-02",
    isFeatured: true,
    githubUrl: "https://github.com/facebook/react",
    documentationUrl: "https://reactjs.org/docs/getting-started.html",
    alternatives: ["vue", "angular", "svelte"]
  },  
  {
    id: "node",
    name: "Node.js",
    description: "Un entorno de ejecución de JavaScript de código abierto y multiplataforma que permite ejecutar código JavaScript fuera de un navegador web.",
    url: "https://nodejs.org/",
    category: "backend",
    tags: ["javascript", "runtime", "server"],
    image: "@/img/tools/nodejs.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-03-20",
    githubUrl: "https://github.com/nodejs/node",
    documentationUrl: "https://nodejs.org/en/docs/"
  },  
  {
    id: "docker",
    name: "Docker",
    description: "Una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores, permite a los desarrolladores empaquetar una aplicación con todas sus dependencias en una unidad estandarizada.",
    url: "https://www.docker.com/",
    category: "devops",
    tags: ["containers", "devops", "deployment"],
    image: "@/img/tools/docker.svg",
    isFree: true,
    hasFreeTier: true,
    stars: 4.6,
    lastUpdated: "2025-04-10",
    githubUrl: "https://github.com/docker",
    documentationUrl: "https://docs.docker.com/"
  },
  {
    id: "figma",
    name: "Figma",
    description: "Una herramienta de diseño basada en la nube que permite el diseño colaborativo de interfaces, con funciones para crear, probar y enviar diseños para sitios web, aplicaciones y más.",
    url: "https://www.figma.com/",
    category: "design",
    tags: ["design", "ui", "collaboration"],
    image: "@/img/tools/figma.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.9,
    lastUpdated: "2025-04-05",
    documentationUrl: "https://help.figma.com/"
  },
  {
    id: "jest",
    name: "Jest",
    description: "Un marco de pruebas para JavaScript mantenido por Facebook, diseñado para garantizar la corrección de cualquier base de código JavaScript con un enfoque en la simplicidad.",
    url: "https://jestjs.io/",
    category: "testing",
    tags: ["javascript", "testing", "facebook"],
    image: "@/img/tools/jest.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-03-15",
    githubUrl: "https://github.com/facebook/jest",
    documentationUrl: "https://jestjs.io/docs/getting-started"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Un sistema de base de datos relacional de objetos de código abierto y potente, con más de 30 años de desarrollo activo, conocido por su confiabilidad, robustez de funciones y rendimiento.",
    url: "https://www.postgresql.org/",
    category: "database",
    tags: ["database", "sql", "relational"],
    image: "@/img/tools/postgresql.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-03-30",
    githubUrl: "https://github.com/postgres/postgres",
    documentationUrl: "https://www.postgresql.org/docs/"
  },
  {
    id: "postman",
    name: "Postman",
    description: "Una plataforma de colaboración para el desarrollo de APIs, permite a los usuarios diseñar, construir, probar e iterar sus APIs.",
    url: "https://www.postman.com/",
    category: "api",
    tags: ["api", "testing", "collaboration"],
    image: "@/img/tools/postman.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.7,
    lastUpdated: "2025-04-12",
    documentationUrl: "https://learning.postman.com/docs/getting-started/introduction/"
  },
  {
    id: "github",
    name: "GitHub",
    description: "Un servicio de alojamiento basado en la web para el control de versiones usando Git, ofrece funcionalidades de control de versiones distribuido y gestión de código fuente, además de sus propias características.",
    url: "https://github.com/",
    category: "productivity",
    tags: ["git", "version control", "collaboration"],
    image: "@/img/tools/github.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.9,
    lastUpdated: "2025-04-18",
    documentationUrl: "https://docs.github.com/en"
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Un superconjunto sintáctico estricto de JavaScript que agrega tipado estático, desarrollado y mantenido por Microsoft.",
    url: "https://www.typescriptlang.org/",
    category: "frontend",
    tags: ["javascript", "static typing", "microsoft"],
    image: "@/img/tools/typescript.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-08",
    githubUrl: "https://github.com/microsoft/TypeScript",
    documentationUrl: "https://www.typescriptlang.org/docs/"
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    description: "Una plataforma de computación en la nube proporcionada por Amazon, que ofrece una combinación de infraestructura como servicio (IaaS), plataforma como servicio (PaaS) y software empaquetado como servicio (SaaS).",
    url: "https://aws.amazon.com/",
    category: "devops",
    tags: ["cloud", "amazon", "hosting"],
    image: "@/img/tools/aws.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.6,
    lastUpdated: "2025-04-15",
    documentationUrl: "https://docs.aws.amazon.com/"
  },
  {
    id: "owasp",
    name: "OWASP",
    description: "El Proyecto de Seguridad de Aplicaciones Web Abiertas es una comunidad en línea que produce artículos, metodologías, documentación, herramientas y tecnologías de libre acceso en el campo de la seguridad de aplicaciones web.",
    url: "https://owasp.org/",
    category: "security",
    tags: ["security", "web", "open source"],
    image: "@/img/tools/owasp.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-03-25",
    documentationUrl: "https://owasp.org/www-project-top-ten/"
  },
  {
    id: "flutter",
    name: "Flutter",
    description: "El kit de herramientas de interfaz de usuario de Google para construir aplicaciones compiladas nativamente para móviles, web y escritorio desde una única base de código.",
    url: "https://flutter.dev/",
    category: "mobile",
    tags: ["dart", "cross-platform", "google", "ui"],
    image: "@/img/tools/flutter.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-04-20",
    isNew: true,
    githubUrl: "https://github.com/flutter/flutter",
    documentationUrl: "https://flutter.dev/docs"
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    description: "Una plataforma de código abierto de extremo a extremo para aprendizaje automático, con un ecosistema completo y flexible de herramientas, bibliotecas y recursos comunitarios.",
    url: "https://www.tensorflow.org/",
    category: "ai",
    tags: ["machine learning", "google", "deep learning", "python"],
    image: "@/img/tools/tensorflow.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-01",
    isFeatured: true,
    githubUrl: "https://github.com/tensorflow/tensorflow",
    documentationUrl: "https://www.tensorflow.org/guide"
  }
];

export const getCategoryLabel = (category: Category): string => {
  const labels: Record<Category, string> = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    design: "Design",
    productivity: "Productivity",
    testing: "Testing",
    database: "Database",
    api: "API",
    security: "Security",
    mobile: "Mobile",
    ai: "AI"
  };
  
  return labels[category];
};

export const getAllCategories = (): Category[] => {
  return [
    "frontend",
    "backend",
    "devops",
    "design",
    "productivity",
    "testing",
    "database",
    "api",
    "security",
    "mobile",
    "ai"
  ];
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  
  tools.forEach(tool => {
    tool.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
};

export const getToolsByCategory = (category: Category | "all"): Tool[] => {
  if (category === "all") {
    return tools;
  }
  
  return tools.filter(tool => tool.category === category);
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getToolsByTag = (tag: string): Tool[] => {
  return tools.filter(tool => tool.tags.includes(tag));
};

export const getFeaturedTools = (limit?: number): Tool[] => {
  const featuredTools = tools.filter(tool => tool.isFeatured);
  return limit ? featuredTools.slice(0, limit) : featuredTools;
};

export const getNewestTools = (limit?: number): Tool[] => {
  const newestTools = [...tools]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
  
  return limit ? newestTools.slice(0, limit) : newestTools;
};

export const getFreeTools = (): Tool[] => {
  return tools.filter(tool => tool.isFree);
};

/**
 * Devuelve todas las herramientas disponibles
 * @returns Arreglo con todas las herramientas
 */
export const getAllTools = (): Tool[] => {
  return tools;
};

export const getSimilarTools = (tool: Tool, limit: number = 3): Tool[] => {
  // Find tools with the same category or common tags, excluding the current tool
  const similarTools = tools
    .filter(t => t.id !== tool.id)
    .map(t => {
      let score = 0;
      
      // Same category
      if (t.category === tool.category) {
        score += 3;
      }
      
      // Common tags
      const commonTags = t.tags.filter(tag => tool.tags.includes(tag));
      score += commonTags.length * 2;
      
      // Check if it's an alternative
      if (tool.alternatives?.includes(t.id)) {
        score += 5;
      }
      
      return { tool: t, score };
    })
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
  
  return similarTools.slice(0, limit);
};

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCategoryColorClass = (category: Category): string => {
  const colors: Record<Category, string> = {
    frontend: 'bg-blue-100 text-blue-800',
    backend: 'bg-green-100 text-green-800',
    devops: 'bg-purple-100 text-purple-800',
    design: 'bg-pink-100 text-pink-800',
    productivity: 'bg-yellow-100 text-yellow-800',
    testing: 'bg-orange-100 text-orange-800',
    database: 'bg-indigo-100 text-indigo-800',
    api: 'bg-cyan-100 text-cyan-800',
    security: 'bg-red-100 text-red-800',
    mobile: 'bg-violet-100 text-violet-800',
    ai: 'bg-emerald-100 text-emerald-800'
  };
  
  return colors[category];

};