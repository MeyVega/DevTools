import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllCategories, getCategoryLabel, Category } from '../data/tools';
import { Code, ArrowRight } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';

const CategoriesPage: React.FC = () => {
  const categories = getAllCategories();
  const analytics = useAnalytics();

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'Categories Page'
  });

  // Registrar vista de página solo al montar el componente
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Array de dependencias vacío para ejecutar solo al montar

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 rounded-xl overflow-hidden shadow-lg">
          <div className="py-10 px-6 sm:px-10 md:py-14 max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-fade-in">
              Categorías de Herramientas
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto animate-fade-in delay-100 leading-relaxed">
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
  const colors: Record<Category, { bg: string, darkBg: string, text: string, darkText: string, icon: string, darkIcon: string }> = {
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
    },
    

    analytics: {
      bg: 'bg-slate-50',
      darkBg: 'dark:bg-slate-900/10',
      text: 'text-slate-800',
      darkText: 'dark:text-slate-300',
      icon: 'text-slate-500',
      darkIcon: 'dark:text-slate-400'
    },
    monitoring: {
      bg: 'bg-amber-50',
      darkBg: 'dark:bg-amber-900/10',
      text: 'text-amber-800',
      darkText: 'dark:text-amber-300',
      icon: 'text-amber-500',
      darkIcon: 'dark:text-amber-400'
    },
    cms: {
      bg: 'bg-teal-50',
      darkBg: 'dark:bg-teal-900/10',
      text: 'text-teal-800',
      darkText: 'dark:text-teal-300',
      icon: 'text-teal-500',
      darkIcon: 'dark:text-teal-400'
    },
    hosting: {
      bg: 'bg-lime-50',
      darkBg: 'dark:bg-lime-900/10',
      text: 'text-lime-800',
      darkText: 'dark:text-lime-300',
      icon: 'text-lime-500',
      darkIcon: 'dark:text-lime-400'
    },
    cdn: {
      bg: 'bg-sky-50',
      darkBg: 'dark:bg-sky-900/10',
      text: 'text-sky-800',
      darkText: 'dark:text-sky-300',
      icon: 'text-sky-500',
      darkIcon: 'dark:text-sky-400'
    },
    payment: {
      bg: 'bg-rose-50',
      darkBg: 'dark:bg-rose-900/10',
      text: 'text-rose-800',
      darkText: 'dark:text-rose-300',
      icon: 'text-rose-500',
      darkIcon: 'dark:text-rose-400'
    },
    email: {
      bg: 'bg-fuchsia-50',
      darkBg: 'dark:bg-fuchsia-900/10',
      text: 'text-fuchsia-800',
      darkText: 'dark:text-fuchsia-300',
      icon: 'text-fuchsia-500',
      darkIcon: 'dark:text-fuchsia-400'
    },
    documentation: {
      bg: 'bg-neutral-50',
      darkBg: 'dark:bg-neutral-900/10',
      text: 'text-neutral-800',
      darkText: 'dark:text-neutral-300',
      icon: 'text-neutral-500',
      darkIcon: 'dark:text-neutral-400'
    },
    automation: {
      bg: 'bg-stone-50',
      darkBg: 'dark:bg-stone-900/10',
      text: 'text-stone-800',
      darkText: 'dark:text-stone-300',
      icon: 'text-stone-500',
      darkIcon: 'dark:text-stone-400'
    },
    gaming: {
      bg: 'bg-purple-50',
      darkBg: 'dark:bg-purple-900/10',
      text: 'text-purple-800',
      darkText: 'dark:text-purple-300',
      icon: 'text-purple-500',
      darkIcon: 'dark:text-purple-400'
    },
    ecommerce: {
      bg: 'bg-green-50',
      darkBg: 'dark:bg-green-900/10',
      text: 'text-green-800',
      darkText: 'dark:text-green-300',
      icon: 'text-green-500',
      darkIcon: 'dark:text-green-400'
    },
    marketing: {
      bg: 'bg-pink-50',
      darkBg: 'dark:bg-pink-900/10',
      text: 'text-pink-800',
      darkText: 'dark:text-pink-300',
      icon: 'text-pink-500',
      darkIcon: 'dark:text-pink-400'
    },
    seo: {
      bg: 'bg-blue-50',
      darkBg: 'dark:bg-blue-900/10',
      text: 'text-blue-800',
      darkText: 'dark:text-blue-300',
      icon: 'text-blue-500',
      darkIcon: 'dark:text-blue-400'
    },
    social: {
      bg: 'bg-cyan-50',
      darkBg: 'dark:bg-cyan-900/10',
      text: 'text-cyan-800',
      darkText: 'dark:text-cyan-300',
      icon: 'text-cyan-500',
      darkIcon: 'dark:text-cyan-400'
    },
    performance: {
      bg: 'bg-orange-50',
      darkBg: 'dark:bg-orange-900/10',
      text: 'text-orange-800',
      darkText: 'dark:text-orange-300',
      icon: 'text-orange-500',
      darkIcon: 'dark:text-orange-400'
    },
    crm: {
      bg: 'bg-indigo-50',
      darkBg: 'dark:bg-indigo-900/10',
      text: 'text-indigo-800',
      darkText: 'dark:text-indigo-300',
      icon: 'text-indigo-500',
      darkIcon: 'dark:text-indigo-400'
    },
    erp: {
      bg: 'bg-violet-50',
      darkBg: 'dark:bg-violet-900/10',
      text: 'text-violet-800',
      darkText: 'dark:text-violet-300',
      icon: 'text-violet-500',
      darkIcon: 'dark:text-violet-400'
    },
    backup: {
      bg: 'bg-gray-50',
      darkBg: 'dark:bg-gray-900/10',
      text: 'text-gray-800',
      darkText: 'dark:text-gray-300',
      icon: 'text-gray-500',
      darkIcon: 'dark:text-gray-400'
    },
    storage: {
      bg: 'bg-yellow-50',
      darkBg: 'dark:bg-yellow-900/10',
      text: 'text-yellow-800',
      darkText: 'dark:text-yellow-300',
      icon: 'text-yellow-500',
      darkIcon: 'dark:text-yellow-400'
    },
    networking: {
      bg: 'bg-emerald-50',
      darkBg: 'dark:bg-emerald-900/10',
      text: 'text-emerald-800',
      darkText: 'dark:text-emerald-300',
      icon: 'text-emerald-500',
      darkIcon: 'dark:text-emerald-400'
    },
    localization: {
      bg: 'bg-red-50',
      darkBg: 'dark:bg-red-900/10',
      text: 'text-red-800',
      darkText: 'dark:text-red-300',
      icon: 'text-red-500',
      darkIcon: 'dark:text-red-400'
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
    ai: 'Integra inteligencia artificial, machine learning y procesamiento de datos en tus proyectos.',

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