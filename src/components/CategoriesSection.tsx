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
  Lock
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
      ai: <Sparkles className="w-7 h-7" />
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
      }
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
      ai: 'Inteligencia artificial, machine learning y data science'
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