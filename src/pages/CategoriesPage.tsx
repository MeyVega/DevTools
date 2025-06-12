import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { getAllCategories, getCategoryLabel, Category } from '../data/tools';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';

// Define colors outside the component for efficiency
const colors: Record<Category, { bg: string, darkBg: string, text: string, darkText: string, icon: string, darkIcon: string }> = {
  // === DESARROLLO CORE ===
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
  fullstack: {
    bg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/10',
    text: 'text-violet-800',
    darkText: 'dark:text-violet-300',
    icon: 'text-violet-500',
    darkIcon: 'dark:text-violet-400'
  },
  mobile: {
    bg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/10',
    text: 'text-violet-800',
    darkText: 'dark:text-violet-300',
    icon: 'text-violet-500',
    darkIcon: 'dark:text-violet-400'
  },
  desktop: {
    bg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/10',
    text: 'text-violet-800',
    darkText: 'dark:text-violet-300',
    icon: 'text-violet-500',
    darkIcon: 'dark:text-violet-400'
  },
  api: {
    bg: 'bg-cyan-50',
    darkBg: 'dark:bg-cyan-900/10',
    text: 'text-cyan-800',
    darkText: 'dark:text-cyan-300',
    icon: 'text-cyan-500',
    darkIcon: 'dark:text-cyan-400'
  },
  languages: {
    bg: 'bg-amber-50',
    darkBg: 'dark:bg-amber-900/10',
    text: 'text-amber-800',
    darkText: 'dark:text-amber-300',
    icon: 'text-amber-500',
    darkIcon: 'dark:text-amber-400'
  },

  // === INFRAESTRUCTURA Y OPERACIONES ===
  devops: {
    bg: 'bg-purple-50',
    darkBg: 'dark:bg-purple-900/10',
    text: 'text-purple-800',
    darkText: 'dark:text-purple-300',
    icon: 'text-purple-500',
    darkIcon: 'dark:text-purple-400'
  },
  hosting: {
    bg: 'bg-lime-50',
    darkBg: 'dark:bg-lime-900/10',
    text: 'text-lime-800',
    darkText: 'dark:text-lime-300',
    icon: 'text-lime-500',
    darkIcon: 'dark:text-lime-400'
  },
  cloud: {
    bg: 'bg-cyan-50',
    darkBg: 'dark:bg-cyan-900/10',
    text: 'text-cyan-800',
    darkText: 'dark:text-cyan-300',
    icon: 'text-cyan-500',
    darkIcon: 'dark:text-cyan-400'
  },
  infrastructure: {
    bg: 'bg-teal-50',
    darkBg: 'dark:bg-teal-900/10',
    text: 'text-teal-800',
    darkText: 'dark:text-teal-300',
    icon: 'text-teal-500',
    darkIcon: 'dark:text-teal-400'
  },
  networking: {
    bg: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-900/10',
    text: 'text-emerald-800',
    darkText: 'dark:text-emerald-300',
    icon: 'text-emerald-500',
    darkIcon: 'dark:text-emerald-400'
  },
  cdn: {
    bg: 'bg-sky-50',
    darkBg: 'dark:bg-sky-900/10',
    text: 'text-sky-800',
    darkText: 'dark:text-sky-300',
    icon: 'text-sky-500',
    darkIcon: 'dark:text-sky-400'
  },
  monitoring: {
    bg: 'bg-amber-50',
    darkBg: 'dark:bg-amber-900/10',
    text: 'text-amber-800',
    darkText: 'dark:text-amber-300',
    icon: 'text-amber-500',
    darkIcon: 'dark:text-amber-400'
  },
  performance: {
    bg: 'bg-orange-50',
    darkBg: 'dark:bg-orange-900/10',
    text: 'text-orange-800',
    darkText: 'dark:text-orange-300',
    icon: 'text-orange-500',
    darkIcon: 'dark:text-orange-400'
  },

  // === DATOS Y PERSISTENCIA ===
  database: {
    bg: 'bg-indigo-50',
    darkBg: 'dark:bg-indigo-900/10',
    text: 'text-indigo-800',
    darkText: 'dark:text-indigo-300',
    icon: 'text-indigo-500',
    darkIcon: 'dark:text-indigo-400'
  },
  storage: {
    bg: 'bg-yellow-50',
    darkBg: 'dark:bg-yellow-900/10',
    text: 'text-yellow-800',
    darkText: 'dark:text-yellow-300',
    icon: 'text-yellow-500',
    darkIcon: 'dark:text-yellow-400'
  },
  backup: {
    bg: 'bg-gray-50',
    darkBg: 'dark:bg-gray-900/10',
    text: 'text-gray-800',
    darkText: 'dark:text-gray-300',
    icon: 'text-gray-500',
    darkIcon: 'dark:text-gray-400'
  },
  analytics: {
    bg: 'bg-slate-50',
    darkBg: 'dark:bg-slate-900/10',
    text: 'text-slate-800',
    darkText: 'dark:text-slate-300',
    icon: 'text-slate-500',
    darkIcon: 'dark:text-slate-400'
  },
  'data-engineering': {
    bg: 'bg-slate-50',
    darkBg: 'dark:bg-slate-900/10',
    text: 'text-slate-800',
    darkText: 'dark:text-slate-300',
    icon: 'text-slate-500',
    darkIcon: 'dark:text-slate-400'
  },

  // === HERRAMIENTAS DE DESARROLLO ===
  testing: {
    bg: 'bg-orange-50',
    darkBg: 'dark:bg-orange-900/10',
    text: 'text-orange-800',
    darkText: 'dark:text-orange-300',
    icon: 'text-orange-500',
    darkIcon: 'dark:text-orange-400'
  },
  security: {
    bg: 'bg-red-50',
    darkBg: 'dark:bg-red-900/10',
    text: 'text-red-800',
    darkText: 'dark:text-red-300',
    icon: 'text-red-500',
    darkIcon: 'dark:text-red-400'
  },
  automation: {
    bg: 'bg-stone-50',
    darkBg: 'dark:bg-stone-900/10',
    text: 'text-stone-800',
    darkText: 'dark:text-stone-300',
    icon: 'text-stone-500',
    darkIcon: 'dark:text-stone-400'
  },
  documentation: {
    bg: 'bg-neutral-50',
    darkBg: 'dark:bg-neutral-900/10',
    text: 'text-neutral-800',
    darkText: 'dark:text-neutral-300',
    icon: 'text-neutral-500',
    darkIcon: 'dark:text-neutral-400'
  },
  'version-control': {
    bg: 'bg-orange-50',
    darkBg: 'dark:bg-orange-900/10',
    text: 'text-orange-800',
    darkText: 'dark:text-orange-300',
    icon: 'text-orange-500',
    darkIcon: 'dark:text-orange-400'
  },

  // === DISEÑO Y UX ===
  design: {
    bg: 'bg-pink-50',
    darkBg: 'dark:bg-pink-900/10',
    text: 'text-pink-800',
    darkText: 'dark:text-pink-300',
    icon: 'text-pink-500',
    darkIcon: 'dark:text-pink-400'
  },
  'ui-libraries': {
    bg: 'bg-pink-50',
    darkBg: 'dark:bg-pink-900/10',
    text: 'text-pink-800',
    darkText: 'dark:text-pink-300',
    icon: 'text-pink-500',
    darkIcon: 'dark:text-pink-400'
  },

  // === PRODUCTIVIDAD ===
  productivity: {
    bg: 'bg-yellow-50',
    darkBg: 'dark:bg-yellow-900/10',
    text: 'text-yellow-800',
    darkText: 'dark:text-yellow-300',
    icon: 'text-yellow-500',
    darkIcon: 'dark:text-yellow-400'
  },
  collaboration: {
    bg: 'bg-yellow-50',
    darkBg: 'dark:bg-yellow-900/10',
    text: 'text-yellow-800',
    darkText: 'dark:text-yellow-300',
    icon: 'text-yellow-500',
    darkIcon: 'dark:text-yellow-400'
  },
  'project-management': {
    bg: 'bg-yellow-50',
    darkBg: 'dark:bg-yellow-900/10',
    text: 'text-yellow-800',
    darkText: 'dark:text-yellow-300',
    icon: 'text-yellow-500',
    darkIcon: 'dark:text-yellow-400'
  },

  // === TECNOLOGÍAS EMERGENTES ===
  ai: {
    bg: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-900/10',
    text: 'text-emerald-800',
    darkText: 'dark:text-emerald-300',
    icon: 'text-emerald-500',
    darkIcon: 'dark:text-emerald-400'
  },
  blockchain: {
    bg: 'bg-indigo-50',
    darkBg: 'dark:bg-indigo-900/10',
    text: 'text-indigo-800',
    darkText: 'dark:text-indigo-300',
    icon: 'text-indigo-500',
    darkIcon: 'dark:text-indigo-400'
  },
  iot: {
    bg: 'bg-teal-50',
    darkBg: 'dark:bg-teal-900/10',
    text: 'text-teal-800',
    darkText: 'dark:text-teal-300',
    icon: 'text-teal-500',
    darkIcon: 'dark:text-teal-400'
  },
  'ar-vr': {
    bg: 'bg-indigo-50',
    darkBg: 'dark:bg-indigo-900/10',
    text: 'text-indigo-800',
    darkText: 'dark:text-indigo-300',
    icon: 'text-indigo-500',
    darkIcon: 'dark:text-indigo-400'
  },

  // === APLICACIONES ESPECÍFICAS ===
  cms: {
    bg: 'bg-teal-50',
    darkBg: 'dark:bg-teal-900/10',
    text: 'text-teal-800',
    darkText: 'dark:text-teal-300',
    icon: 'text-teal-500',
    darkIcon: 'dark:text-teal-400'
  },
  ecommerce: {
    bg: 'bg-green-50',
    darkBg: 'dark:bg-green-900/10',
    text: 'text-green-800',
    darkText: 'dark:text-green-300',
    icon: 'text-green-500',
    darkIcon: 'dark:text-green-400'
  },
  gaming: {
    bg: 'bg-purple-50',
    darkBg: 'dark:bg-purple-900/10',
    text: 'text-purple-800',
    darkText: 'dark:text-purple-300',
    icon: 'text-purple-500',
    darkIcon: 'dark:text-purple-400'
  },
  social: {
    bg: 'bg-cyan-50',
    darkBg: 'dark:bg-cyan-900/10',
    text: 'text-cyan-800',
    darkText: 'dark:text-cyan-300',
    icon: 'text-cyan-500',
    darkIcon: 'dark:text-cyan-400'
  },

  // === SERVICIOS DE NEGOCIO ===
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
  sms: {
    bg: 'bg-fuchsia-50',
    darkBg: 'dark:bg-fuchsia-900/10',
    text: 'text-fuchsia-800',
    darkText: 'dark:text-fuchsia-300',
    icon: 'text-fuchsia-500',
    darkIcon: 'dark:text-fuchsia-400'
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

  // === UTILIDADES ===
  localization: {
    bg: 'bg-red-50',
    darkBg: 'dark:bg-red-900/10',
    text: 'text-red-800',
    darkText: 'dark:text-red-300',
    icon: 'text-red-500',
    darkIcon: 'dark:text-red-400'
  },
  education: {
    bg: 'bg-indigo-50',
    darkBg: 'dark:bg-indigo-900/10',
    text: 'text-indigo-800',
    darkText: 'dark:text-indigo-300',
    icon: 'text-indigo-500',
    darkIcon: 'dark:text-indigo-400'
  },
  utilities: {
    bg: 'bg-gray-50',
    darkBg: 'dark:bg-gray-900/10',
    text: 'text-gray-800',
    darkText: 'dark:text-gray-300',
    icon: 'text-gray-500',
    darkIcon: 'dark:text-gray-400'
  },
};

// Define category descriptions
const categoryDescriptions: Record<Category, string> = {
  // === DESARROLLO CORE ===
  frontend: 'Herramientas para construir interfaces de usuario atractivas y funcionales, incluyendo frameworks, librerías y componentes.',
  backend: 'Todo lo necesario para el desarrollo del lado del servidor, desde APIs hasta bases de datos y servicios.',
  fullstack: 'Construye aplicaciones completas con herramientas que integran frontend, backend y bases de datos.',
  mobile: 'Desarrolla apps móviles con frameworks cross-platform y herramientas nativas.',
  desktop: 'Desarrolla aplicaciones de escritorio con frameworks nativos y multiplataforma.',
  api: 'Todo para diseñar, documentar, probar y consumir APIs de forma efectiva.',
  languages: 'Desarrolla software con lenguajes de programación, compiladores, intérpretes y SDKs.',

  // === INFRAESTRUCTURA Y OPERACIONES ===
  devops: 'Herramientas para automatizar, gestionar y mejorar el ciclo de vida del desarrollo y la infraestructura.',
  hosting: 'Plataformas de alojamiento web, servicios en la nube y soluciones de deployment.',
  cloud: 'Utiliza servicios en la nube para escalabilidad, almacenamiento y despliegue de aplicaciones.',
  infrastructure: 'Gestiona infraestructura como código con herramientas para automatización y orquestación.',
  networking: 'Herramientas de redes, VPNs, CDNs y gestión de infraestructura de conectividad.',
  cdn: 'Redes de distribución de contenido para acelerar la entrega de tus aplicaciones web.',
  monitoring: 'Supervisa la salud, rendimiento y disponibilidad de tus aplicaciones y servicios.',
  performance: 'Optimiza la velocidad, rendimiento y experiencia de usuario de tus aplicaciones.',

  // === DATOS Y PERSISTENCIA ===
  database: 'Sistemas de gestión de bases de datos, ORMs, herramientas de migración y visualización.',
  storage: 'Servicios de almacenamiento en la nube, gestión de archivos y bases de datos.',
  backup: 'Soluciones de respaldo, recuperación de datos y continuidad del negocio.',
  analytics: 'Analiza el comportamiento de usuarios, métricas de rendimiento y datos de aplicaciones web.',
  'data-engineering': 'Transforma y procesa datos con herramientas para ETL, pipelines y análisis masivo.',

  // === HERRAMIENTAS DE DESARROLLO ===
  testing: 'Frameworks y utilidades para pruebas unitarias, de integración, end-to-end y más.',
  security: 'Protege tus aplicaciones con estas herramientas de seguridad y auditoría.',
  automation: 'Automatiza tareas repetitivas, flujos de trabajo y procesos de desarrollo.',
  documentation: 'Crea y mantén documentación técnica, wikis y bases de conocimiento.',
  'version-control': 'Controla versiones de código y colabora con herramientas como Git y sistemas de gestión.',

  // === DISEÑO Y UX ===
  design: 'Recursos para diseño UI/UX, prototipos, maquetación y diseño visual de aplicaciones.',
  'ui-libraries': 'Crea interfaces consistentes con bibliotecas de componentes y sistemas de diseño.',

  // === PRODUCTIVIDAD ===
  productivity: 'Mejora tu flujo de trabajo con herramientas que incrementan la eficiencia y productividad.',
  collaboration: 'Facilita el trabajo en equipo con herramientas de comunicación y colaboración en tiempo real.',
  'project-management': 'Organiza proyectos y tareas con herramientas de gestión y seguimiento.',

  // === TECNOLOGÍAS EMERGENTES ===
  ai: 'Integra inteligencia artificial, machine learning y procesamiento de datos en tus proyectos.',
  blockchain: 'Desarrolla aplicaciones descentralizadas con herramientas para blockchain y contratos inteligentes.',
  iot: 'Conecta dispositivos con herramientas para Internet de las Cosas y sistemas embebidos.',
  'ar-vr': 'Crea experiencias inmersivas con herramientas para realidad aumentada y virtual.',

  // === APLICACIONES ESPECÍFICAS ===
  cms: 'Sistemas de gestión de contenido para crear y administrar sitios web dinámicos.',
  ecommerce: 'Plataformas y herramientas para crear tiendas online y sistemas de comercio electrónico.',
  gaming: 'Engines, frameworks y herramientas para desarrollo de videojuegos y aplicaciones interactivas.',
  social: 'Gestiona presencia en redes sociales, programa contenido y analiza engagement.',

  // === SERVICIOS DE NEGOCIO ===
  payment: 'Integra sistemas de pago seguro, procesamiento de transacciones y facturación.',
  email: 'Servicios de marketing por correo, transaccionales y gestión de campañas de email.',
  sms: 'Servicios de mensajería SMS para notificaciones y comunicaciones con usuarios.',
  crm: 'Gestiona relaciones con clientes, ventas, leads y procesos comerciales.',
  erp: 'Sistemas de planificación empresarial para gestionar recursos y procesos organizacionales.',
  marketing: 'Herramientas de marketing digital, SEO, redes sociales y análisis de campañas.',
  seo: 'Optimiza tu sitio web para motores de búsqueda y mejora su visibilidad online.',

  // === UTILIDADES ===
  localization: 'Traduce y adapta tus aplicaciones para diferentes idiomas y mercados globales.',
  education: 'Explora plataformas educativas y cursos para formación en tecnología.',
  utilities: 'Simplifica tareas con herramientas misceláneas, generadores y utilidades técnicas.',
};

const CategoriesPage: React.FC = () => {
  const categories = getAllCategories();
  const analytics = useAnalytics();

  // Use useRef for stable configuration
  const config = useRef({
    pageName: 'Categories Page'
  });

  // Track page view on mount
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12">
  {/* Contenedor principal con el estilo "Cielo Suave" */}
  <div className="relative overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
    
    {/* Capas de fondo: Gradiente + Luz + Textura */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-200 dark:from-sky-900 dark:via-cyan-900 dark:to-blue-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-white/30 to-transparent blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.07]"></div>
    </div>

    {/* Contenido centrado con colores y estilos adaptables */}
    <div className="relative z-10 py-10 px-6 sm:px-10 md:py-14 max-w-4xl mx-auto text-center">
      
      {/* Título con el estilo final */}
      <h1 className="text-2xl md:text-3xl font-bold text-sky-900 dark:text-white dark:drop-shadow-md mb-4 animate-fade-in">
        Categorías de Herramientas
      </h1>
      
      {/* Párrafo con el estilo final */}
      <p className="text-base md:text-lg text-sky-800/90 dark:text-white/90 dark:drop-shadow-sm mb-6 max-w-2xl mx-auto animate-fade-in delay-100 leading-relaxed">
        Explora nuestra colección de herramientas para desarrolladores organizadas por categorías.
      </p>
      
    </div>
  </div>
</section>

      {/* Categories List */}
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

      {/* Newsletter CTA */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/60 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Si conoces una herramienta que debería estar en nuestro catálogo, no dudes en sugerirla.
          </p>
          <div className="flex justify-center">
            <Link
              to="/suggest"
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
              onClick={() => analytics.trackEvent(EventType.BUTTON_CLICK, { button: 'suggest_tool', page: 'categories' })}
            >
              Sugerir herramienta
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Category Card Component
interface CategoryCardProps {
  category: Category;
  onCategoryClick: () => void;
  delayIndex: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick, delayIndex }) => {
  const defaultColors = {
    bg: 'bg-gray-50',
    darkBg: 'dark:bg-gray-800/10',
    text: 'text-gray-800',
    darkText: 'dark:text-gray-300',
    icon: 'text-gray-500',
    darkIcon: 'text-gray-400',
  };

  const colorClasses = colors[category] || defaultColors;
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