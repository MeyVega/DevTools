import React from 'react';
import { Link } from 'react-router-dom';
import { Category, getCategoryLabel } from '../data/tools';
import { 
  Globe, 
  Server, 
  BarChart3, 
  Palette, 
  Terminal, 
  Database, 
  Smartphone, 
  Shield, 
  Sparkles,
  Network,
  Code,
  Lock,
} from 'lucide-react';

interface CategoriesSectionProps {
  categories: Category[];
  onCategoryClick?: (category: Category) => void;
  className?: string;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ 
  categories, 
  onCategoryClick,
  className = ''
}) => {
  // Mapeo de íconos por categoría
  const getCategoryIcon = (category: Category): JSX.Element => {
    const iconMap: Record<string, JSX.Element> = {
      frontend: <Globe className="w-7 h-7" />,
      backend: <Server className="w-7 h-7" />,
      devops: <Terminal className="w-7 h-7" />,
      design: <Palette className="w-7 h-7" />,
      productivity: <BarChart3 className="w-7 h-7" />,
      testing: <Code className="w-7 h-7" />,
      database: <Database className="w-7 h-7" />,
      api: <Network className="w-7 h-7" />,
      security: <Shield className="w-7 h-7" />,
      mobile: <Smartphone className="w-7 h-7" />,
      ai: <Sparkles className="w-7 h-7" />,

      analytics: <BarChart3 className="w-7 h-7" />,
      monitoring: <BarChart3 className="w-7 h-7" />,
      cms: <BarChart3 className="w-7 h-7" />,
      hosting: <BarChart3 className="w-7 h-7" />,
      cdn: <BarChart3 className="w-7 h-7" />,
      payment: <BarChart3 className="w-7 h-7" />,
      email: <BarChart3 className="w-7 h-7" />,
      documentation: <BarChart3 className="w-7 h-7" />,
      automation: <BarChart3 className="w-7 h-7" />,
      gaming: <BarChart3 className="w-7 h-7" />,
      ecommerce: <BarChart3 className="w-7 h-7" />,
      marketing: <BarChart3 className="w-7 h-7" />,
      seo: <BarChart3 className="w-7 h-7" />,
      social: <BarChart3 className="w-7 h-7" />,
      performance: <BarChart3 className="w-7 h-7" />,
      crm: <BarChart3 className="w-7 h-7" />,
      erp: <BarChart3 className="w-7 h-7" />, 
      backup: <BarChart3 className="w-7 h-7" />,
      storage: <BarChart3 className="w-7 h-7" />,
      networking: <BarChart3 className="w-7 h-7" />,
      localization: <BarChart3 className="w-7 h-7" />
    };
    
    return iconMap[category] || <Lock className="w-7 h-7" />;
  };

  // Colores de fondo para cada categoría
  const getCategoryColorClasses = (category: Category): string => {
    const colorMap: Record<string, { bg: string, hoverBg: string, text: string, darkBg: string, darkHoverBg: string, darkText: string }> = {
      frontend: {
        bg: 'bg-blue-50', 
        hoverBg: 'hover:bg-blue-100', 
        text: 'text-blue-600',
        darkBg: 'dark:bg-blue-900/20',
        darkHoverBg: 'dark:hover:bg-blue-800/30',
        darkText: 'dark:text-blue-300'
      },
      backend: {
        bg: 'bg-green-50', 
        hoverBg: 'hover:bg-green-100', 
        text: 'text-green-600',
        darkBg: 'dark:bg-green-900/20',
        darkHoverBg: 'dark:hover:bg-green-800/30',
        darkText: 'dark:text-green-300'
      },
      devops: {
        bg: 'bg-purple-50', 
        hoverBg: 'hover:bg-purple-100', 
        text: 'text-purple-600',
        darkBg: 'dark:bg-purple-900/20',
        darkHoverBg: 'dark:hover:bg-purple-800/30',
        darkText: 'dark:text-purple-300'
      },
      design: {
        bg: 'bg-pink-50', 
        hoverBg: 'hover:bg-pink-100', 
        text: 'text-pink-600',
        darkBg: 'dark:bg-pink-900/20',
        darkHoverBg: 'dark:hover:bg-pink-800/30',
        darkText: 'dark:text-pink-300'
      },
      productivity: {
        bg: 'bg-yellow-50', 
        hoverBg: 'hover:bg-yellow-100', 
        text: 'text-yellow-600',
        darkBg: 'dark:bg-yellow-900/20',
        darkHoverBg: 'dark:hover:bg-yellow-800/30',
        darkText: 'dark:text-yellow-300'
      },
      testing: {
        bg: 'bg-orange-50', 
        hoverBg: 'hover:bg-orange-100', 
        text: 'text-orange-600',
        darkBg: 'dark:bg-orange-900/20',
        darkHoverBg: 'dark:hover:bg-orange-800/30',
        darkText: 'dark:text-orange-300'
      },
      database: {
        bg: 'bg-indigo-50', 
        hoverBg: 'hover:bg-indigo-100', 
        text: 'text-indigo-600',
        darkBg: 'dark:bg-indigo-900/20',
        darkHoverBg: 'dark:hover:bg-indigo-800/30',
        darkText: 'dark:text-indigo-300'
      },
      api: {
        bg: 'bg-cyan-50', 
        hoverBg: 'hover:bg-cyan-100', 
        text: 'text-cyan-600',
        darkBg: 'dark:bg-cyan-900/20',
        darkHoverBg: 'dark:hover:bg-cyan-800/30',
        darkText: 'dark:text-cyan-300'
      },
      security: {
        bg: 'bg-red-50', 
        hoverBg: 'hover:bg-red-100', 
        text: 'text-red-600',
        darkBg: 'dark:bg-red-900/20',
        darkHoverBg: 'dark:hover:bg-red-800/30',
        darkText: 'dark:text-red-300'
      },
      mobile: {
        bg: 'bg-violet-50', 
        hoverBg: 'hover:bg-violet-100', 
        text: 'text-violet-600',
        darkBg: 'dark:bg-violet-900/20',
        darkHoverBg: 'dark:hover:bg-violet-800/30',
        darkText: 'dark:text-violet-300'
      },
      ai: {
        bg: 'bg-emerald-50', 
        hoverBg: 'hover:bg-emerald-100', 
        text: 'text-emerald-600',
        darkBg: 'dark:bg-emerald-900/20',
        darkHoverBg: 'dark:hover:bg-emerald-800/30',
        darkText: 'dark:text-emerald-300'
        },

      analytics: {
          bg: 'bg-slate-50',
          hoverBg: 'hover:bg-slate-100',
          text: 'text-slate-600',
          darkBg: 'dark:bg-slate-900/20',
          darkHoverBg: 'dark:hover:bg-slate-800/30',
          darkText: 'dark:text-slate-300'
        },
      monitoring: {
        bg: 'bg-amber-50',
        hoverBg: 'hover:bg-amber-100',
        text: 'text-amber-600',
        darkBg: 'dark:bg-amber-900/20',
        darkHoverBg: 'dark:hover:bg-amber-800/30',
        darkText: 'dark:text-amber-300'
      },
      cms: {
        bg: 'bg-teal-50',
        hoverBg: 'hover:bg-teal-100',
        text: 'text-teal-600',
        darkBg: 'dark:bg-teal-900/20',
        darkHoverBg: 'dark:hover:bg-teal-800/30',
        darkText: 'dark:text-teal-300'
      },
      hosting: {
        bg: 'bg-lime-50',
        hoverBg: 'hover:bg-lime-100',
        text: 'text-lime-600',
        darkBg: 'dark:bg-lime-900/20',
        darkHoverBg: 'dark:hover:bg-lime-800/30',
        darkText: 'dark:text-lime-300'
      },
      cdn: {
        bg: 'bg-sky-50',
        hoverBg: 'hover:bg-sky-100',
        text: 'text-sky-600',
        darkBg: 'dark:bg-sky-900/20',
        darkHoverBg: 'dark:hover:bg-sky-800/30',
        darkText: 'dark:text-sky-300'
      },
      payment: {
        bg: 'bg-rose-50',
        hoverBg: 'hover:bg-rose-100',
        text: 'text-rose-600',
        darkBg: 'dark:bg-rose-900/20',
        darkHoverBg: 'dark:hover:bg-rose-800/30',
        darkText: 'dark:text-rose-300'
      },
      email: {
        bg: 'bg-fuchsia-50',
        hoverBg: 'hover:bg-fuchsia-100',
        text: 'text-fuchsia-600',
        darkBg: 'dark:bg-fuchsia-900/20',
        darkHoverBg: 'dark:hover:bg-fuchsia-800/30',
        darkText: 'dark:text-fuchsia-300'
      },
      documentation: {
        bg: 'bg-neutral-50',
        hoverBg: 'hover:bg-neutral-100',
        text: 'text-neutral-600',
        darkBg: 'dark:bg-neutral-900/20',
        darkHoverBg: 'dark:hover:bg-neutral-800/30',
        darkText: 'dark:text-neutral-300'
      },
      automation: {
        bg: 'bg-stone-50',
        hoverBg: 'hover:bg-stone-100',
        text: 'text-stone-600',
        darkBg: 'dark:bg-stone-900/20',
        darkHoverBg: 'dark:hover:bg-stone-800/30',
        darkText: 'dark:text-stone-300'
      },
      gaming: {
        bg: 'bg-purple-50',
        hoverBg: 'hover:bg-purple-100',
        text: 'text-purple-600',
        darkBg: 'dark:bg-purple-900/20',
        darkHoverBg: 'dark:hover:bg-purple-800/30',
        darkText: 'dark:text-purple-300'
      },
      ecommerce: {
        bg: 'bg-green-50',
        hoverBg: 'hover:bg-green-100',
        text: 'text-green-600',
        darkBg: 'dark:bg-green-900/20',
        darkHoverBg: 'dark:hover:bg-green-800/30',
        darkText: 'dark:text-green-300'
      },
      marketing: {
        bg: 'bg-pink-50',
        hoverBg: 'hover:bg-pink-100',
        text: 'text-pink-600',
        darkBg: 'dark:bg-pink-900/20',
        darkHoverBg: 'dark:hover:bg-pink-800/30',
        darkText: 'dark:text-pink-300'
      },
      seo: {
        bg: 'bg-blue-50',
        hoverBg: 'hover:bg-blue-100',
        text: 'text-blue-600',
        darkBg: 'dark:bg-blue-900/20',
        darkHoverBg: 'dark:hover:bg-blue-800/30',
        darkText: 'dark:text-blue-300'
      },
      social: {
        bg: 'bg-cyan-50',
        hoverBg: 'hover:bg-cyan-100',
        text: 'text-cyan-600',
        darkBg: 'dark:bg-cyan-900/20',
        darkHoverBg: 'dark:hover:bg-cyan-800/30',
        darkText: 'dark:text-cyan-300'  
      },
      performance: {
        bg: 'bg-orange-50',
        hoverBg: 'hover:bg-orange-100',
        text: 'text-orange-600',
        darkBg: 'dark:bg-orange-900/20',  
        darkHoverBg: 'dark:hover:bg-orange-800/30',
        darkText: 'dark:text-orange-300'
      },
      crm: {
        bg: 'bg-indigo-50',
        hoverBg: 'hover:bg-indigo-100', 
        text: 'text-indigo-600',
        darkBg: 'dark:bg-indigo-900/20',
        darkHoverBg: 'dark:hover:bg-indigo-800/30',
        darkText: 'dark:text-indigo-300'
      },
      erp: {      
        bg: 'bg-violet-50',
        hoverBg: 'hover:bg-violet-100',
        text: 'text-violet-600',
        darkBg: 'dark:bg-violet-900/20',
        darkHoverBg: 'dark:hover:bg-violet-800/30',
        darkText: 'dark:text-violet-300'
      },
      backup: {
        bg: 'bg-gray-50',
        hoverBg: 'hover:bg-gray-100',
        text: 'text-gray-600',
        darkBg: 'dark:bg-gray-800',
        darkHoverBg: 'dark:hover:bg-gray-700',
        darkText: 'dark:text-gray-300'
      },
      storage: {
        bg: 'bg-yellow-50',
        hoverBg: 'hover:bg-yellow-100', 
        text: 'text-yellow-600',
        darkBg: 'dark:bg-yellow-900/20',
        darkHoverBg: 'dark:hover:bg-yellow-800/30',
        darkText: 'dark:text-yellow-300'
      },
      networking: { 
        bg: 'bg-emerald-50',
        hoverBg: 'hover:bg-emerald-100',
        text: 'text-emerald-600',
        darkBg: 'dark:bg-emerald-900/20',
        darkHoverBg: 'dark:hover:bg-emerald-800/30',
        darkText: 'dark:text-emerald-300' 
      },
      localization: {
        bg: 'bg-red-50',
        hoverBg: 'hover:bg-red-100',
        text: 'text-red-600',
        darkBg: 'dark:bg-red-900/20', 
        darkHoverBg: 'dark:hover:bg-red-800/30',
        darkText: 'dark:text-red-300'
      },
    };
    
    const colorClass = colorMap[category] || {
      bg: 'bg-gray-50', 
      hoverBg: 'hover:bg-gray-100', 
      text: 'text-gray-600',
      darkBg: 'dark:bg-gray-800',
      darkHoverBg: 'dark:hover:bg-gray-700',
      darkText: 'dark:text-gray-300'
    };
    
    return `${colorClass.bg} ${colorClass.hoverBg} ${colorClass.text} ${colorClass.darkBg} ${colorClass.darkHoverBg} ${colorClass.darkText}`;
  };
  
  // Descripciones para cada categoría (opcional)
  const getCategoryDescription = (category: Category): string => {
    const descriptionMap: Record<string, string> = {
      frontend: 'Herramientas y frameworks para el desarrollo de interfaces de usuario',
      backend: 'Tecnologías para servidores y la lógica del lado del servidor',
      devops: 'Herramientas para automatización, CI/CD y operaciones',
      design: 'Recursos para diseño UI/UX y creación de prototipos',
      productivity: 'Aumenta tu eficiencia y organización',
      testing: 'Frameworks y herramientas para pruebas automatizadas',
      database: 'Sistemas de gestión de bases de datos y herramientas relacionadas',
      api: 'Desarrollo, documentación y testing de APIs',
      security: 'Protección de aplicaciones y datos',
      mobile: 'Desarrollo de aplicaciones para iOS, Android y otros',
      ai: 'Inteligencia artificial, machine learning y data science',

      analytics: 'Analiza el comportamiento de usuarios, métricas de rendimiento y datos de aplicaciones web.',
      monitoring: 'Supervisa la salud, rendimiento y disponibilidad de tus aplicaciones y servicios.',
      cms: 'Sistemas de gestión de contenido para crear y administrar sitios web dinámicos.',
      hosting: 'Plataformas de alojamiento web, servicios en la nube y soluciones de deployment.',
      cdn: 'Redes de distribución de contenido para acelerar la entrega de tus aplicaciones web.',
      payment: 'Integra sistemas de pago seguro, procesamiento de transacciones y facturación.',
      email: 'Servicios de marketing por correo, transaccionales y gestión de campañas de email.',
      documentation: 'Crea y mantén documentación técnica, wikis y bases de conocimiento.',
      automation: 'Automatiza tareas repetitivas, flujos de trabajo y procesos de desarrollo.',
      gaming: 'Engines, frameworks y herramientas para desarrollo de videojuegos y aplicaciones interactivas.',
      ecommerce: 'Plataformas y herramientas para crear tiendas online y sistemas de comercio electrónico.',
      marketing: 'Herramientas de marketing digital, SEO, redes sociales y análisis de campañas.',
      seo: 'Optimiza tu sitio web para motores de búsqueda y mejora su visibilidad online.',
      social: 'Gestiona presencia en redes sociales, programa contenido y analiza engagement.',
      performance: 'Optimiza la velocidad, rendimiento y experiencia de usuario de tus aplicaciones.',
      crm: 'Gestiona relaciones con clientes, ventas, leads y procesos comerciales.',
      erp: 'Sistemas de planificación empresarial para gestionar recursos y procesos organizacionales.',
      backup: 'Soluciones de respaldo, recuperación de datos y continuidad del negocio.',
      storage: 'Servicios de almacenamiento en la nube, gestión de archivos y bases de datos.',
      networking: 'Herramientas de redes, VPNs, CDNs y gestión de infraestructura de conectividad.',
      localization: 'Traduce y adapta tus aplicaciones para diferentes idiomas y mercados globales.'  
    };
    
    return descriptionMap[category] || '';
  };
  
  // Reordenar categorías para mejor presentación visual si es necesario
  const sortedCategories = [...categories].sort();

  // Manejar clic en categoría
  const handleCategoryClick = (category: Category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  return (
    <section className={`${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCategories.map(category => (
          <Link
            key={category}
            to={`/category/${category}`}
            className={`p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md flex items-start cursor-pointer ${getCategoryColorClasses(category)}`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="mr-4 mt-1">
              {getCategoryIcon(category)}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {getCategoryLabel(category)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {getCategoryDescription(category)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Enlace para ver todas las categorías (opcional) */}
      <div className="mt-6 text-center">
        <Link 
          to="/categories" 
          className="inline-flex items-center text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] font-medium"
        >
          Ver todas las categorías
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;