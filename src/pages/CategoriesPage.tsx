import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllCategories, getCategoryLabel, Category } from '../data/tools';
import { Code, ArrowRight } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';

const CategoriesPage: React.FC = () => {
  const categories = getAllCategories();
  const analytics = useAnalytics();
  
  useEffect(() => {
    // Registrar vista de página
    analytics.trackPageView('Categories Page');
  }, [analytics]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 rounded-xl overflow-hidden shadow-lg">
          <div className="py-12 px-6 sm:px-12 md:py-16 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
              Categorías de Herramientas
            </h1>
            <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
              Explora nuestra colección de herramientas para desarrolladores organizadas por categorías.
            </p>
          </div>
        </div>
      </section>
      
      {/* Lista de categorías */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category}
              category={category}
              onCategoryClick={() => {
                analytics.trackEvent(EventType.CATEGORY_VIEW, { category });
              }}
              delayIndex={index}
            />
          ))}
        </div>
      </section>
      
      {/* Newsletter o CTA */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Si conoces una herramienta que debería estar en nuestro catálogo, no dudes en sugerirla.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/suggest" 
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
              onClick={() => analytics.trackButtonClick('suggest_tool', { page: 'categories' })}
            >
              Sugerir herramienta
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Componente para tarjeta de categoría
interface CategoryCardProps {
  category: Category;
  onCategoryClick: () => void;
  delayIndex: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick, delayIndex }) => {
  // Colores para las categorías
  const colors: Record<string, { bg: string, darkBg: string, text: string, darkText: string, icon: string, darkIcon: string }> = {
    frontend: {
      bg: 'bg-blue-50',
      darkBg: 'dark:bg-blue-900/10',
      text: 'text-blue-800',
      darkText: 'dark:text-blue-300',
      icon: 'text-blue-500',
      darkIcon: 'dark:text-blue-400'
    },
    backend: {
      bg: 'bg-green-50',
      darkBg: 'dark:bg-green-900/10',
      text: 'text-green-800',
      darkText: 'dark:text-green-300',
      icon: 'text-green-500',
      darkIcon: 'dark:text-green-400'
    },
    devops: {
      bg: 'bg-purple-50',
      darkBg: 'dark:bg-purple-900/10',
      text: 'text-purple-800',
      darkText: 'dark:text-purple-300',
      icon: 'text-purple-500',
      darkIcon: 'dark:text-purple-400'
    },
    design: {
      bg: 'bg-pink-50',
      darkBg: 'dark:bg-pink-900/10',
      text: 'text-pink-800',
      darkText: 'dark:text-pink-300',
      icon: 'text-pink-500',
      darkIcon: 'dark:text-pink-400'
    },
    productivity: {
      bg: 'bg-yellow-50',
      darkBg: 'dark:bg-yellow-900/10',
      text: 'text-yellow-800',
      darkText: 'dark:text-yellow-300',
      icon: 'text-yellow-500',
      darkIcon: 'dark:text-yellow-400'
    },
    testing: {
      bg: 'bg-orange-50',
      darkBg: 'dark:bg-orange-900/10',
      text: 'text-orange-800',
      darkText: 'dark:text-orange-300',
      icon: 'text-orange-500',
      darkIcon: 'dark:text-orange-400'
    },
    database: {
      bg: 'bg-indigo-50',
      darkBg: 'dark:bg-indigo-900/10',
      text: 'text-indigo-800',
      darkText: 'dark:text-indigo-300',
      icon: 'text-indigo-500',
      darkIcon: 'dark:text-indigo-400'
    },
    api: {
      bg: 'bg-cyan-50',
      darkBg: 'dark:bg-cyan-900/10',
      text: 'text-cyan-800',
      darkText: 'dark:text-cyan-300',
      icon: 'text-cyan-500',
      darkIcon: 'dark:text-cyan-400'
    },
    security: {
      bg: 'bg-red-50',
      darkBg: 'dark:bg-red-900/10',
      text: 'text-red-800',
      darkText: 'dark:text-red-300',
      icon: 'text-red-500',
      darkIcon: 'dark:text-red-400'
    },
    mobile: {
      bg: 'bg-violet-50',
      darkBg: 'dark:bg-violet-900/10',
      text: 'text-violet-800',
      darkText: 'dark:text-violet-300',
      icon: 'text-violet-500',
      darkIcon: 'dark:text-violet-400'
    },
    ai: {
      bg: 'bg-emerald-50',
      darkBg: 'dark:bg-emerald-900/10',
      text: 'text-emerald-800',
      darkText: 'dark:text-emerald-300',
      icon: 'text-emerald-500',
      darkIcon: 'dark:text-emerald-400'
    }
  };

  // Descripción de cada categoría
  const categoryDescriptions: Record<Category, string> = {
    frontend: 'Herramientas para construir interfaces de usuario atractivas y funcionales, incluyendo frameworks, librerías y componentes.',
    backend: 'Todo lo necesario para el desarrollo del lado del servidor, desde APIs hasta bases de datos y servicios.',
    devops: 'Herramientas para automatizar, gestionar y mejorar el ciclo de vida del desarrollo y la infraestructura.',
    design: 'Recursos para diseño UI/UX, prototipos, maquetación y diseño visual de aplicaciones.',
    productivity: 'Mejora tu flujo de trabajo con herramientas que incrementan la eficiencia y productividad.',
    testing: 'Frameworks y utilidades para pruebas unitarias, de integración, end-to-end y más.',
    database: 'Sistemas de gestión de bases de datos, ORMs, herramientas de migración y visualización.',
    api: 'Todo para diseñar, documentar, probar y consumir APIs de forma efectiva.',
    security: 'Protege tus aplicaciones con estas herramientas de seguridad y auditoría.',
    mobile: 'Desarrolla apps móviles con frameworks cross-platform y herramientas nativas.',
    ai: 'Integra inteligencia artificial, machine learning y procesamiento de datos en tus proyectos.'
  };

  const colorClasses = colors[category] || {
    bg: 'bg-gray-50',
    darkBg: 'dark:bg-gray-800/10',
    text: 'text-gray-800',
    darkText: 'dark:text-gray-300',
    icon: 'text-gray-500',
    darkIcon: 'dark:text-gray-400'
  };

  const delay = `delay-${Math.min(delayIndex * 100, 900)}`;

  return (
    <Link 
      to={`/category/${category}`} 
      className={`${colorClasses.bg} ${colorClasses.darkBg} p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in ${delay}`}
      onClick={onCategoryClick}
    >
      <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-white dark:bg-gray-800">
        <Code className={`h-6 w-6 ${colorClasses.icon} ${colorClasses.darkIcon}`} />
      </div>
      
      <h2 className={`text-xl font-bold mb-2 ${colorClasses.text} ${colorClasses.darkText}`}>
        {getCategoryLabel(category)}
      </h2>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {categoryDescriptions[category]}
      </p>
      
      <div className="flex items-center text-sm font-medium text-[#67A2A8] dark:text-[#9CD1D4]">
        Ver herramientas
        <ArrowRight size={16} className="ml-1" />
      </div>
    </Link>
  );
};

export default CategoriesPage;