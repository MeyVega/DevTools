import React from 'react';
import { Link } from 'react-router-dom';
import { Category, getCategoryLabel } from '../data/tools';
import {
  Globe,
  Server,
  Terminal,
  Palette,
  BarChart3,
  Code,
  Database,
  Network,
  Shield,
  Smartphone,
  Cloud,
  Cpu,
  Network as NetworkIcon,
  Zap,
  Monitor,
  HardDrive,
  Save,
  PieChart,
  GitBranch,
  Lock,
  PenTool,
  Box,
  Users,
  Trello,
  Brain,
  Radio,
  Camera,
  FileText,
  ShoppingCart,
  Gamepad,
  MessageSquare,
  CreditCard,
  Mail,
  Send,
  Briefcase,
  Search,
  Globe2,
  Book,
  Key,
  Megaphone,
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
      // === DESARROLLO CORE ===
      frontend: <Globe className="w-7 h-7" />,
      backend: <Server className="w-7 h-7" />,
      fullstack: <Box className="w-7 h-7" />,
      mobile: <Smartphone className="w-7 h-7" />,
      desktop: <Monitor className="w-7 h-7" />,
      api: <Network className="w-7 h-7" />,
      languages: <Code className="w-7 h-7" />,

      // === INFRAESTRUCTURA Y OPERACIONES ===
      devops: <Terminal className="w-7 h-7" />,
      hosting: <Cloud className="w-7 h-7" />,
      cloud: <Cloud className="w-7 h-7" />,
      infrastructure: <Cpu className="w-7 h-7" />,
      networking: <NetworkIcon className="w-7 h-7" />,
      cdn: <Zap className="w-7 h-7" />,
      monitoring: <BarChart3 className="w-7 h-7" />,
      performance: <Zap className="w-7 h-7" />,

      // === DATOS Y PERSISTENCIA ===
      database: <Database className="w-7 h-7" />,
      storage: <HardDrive className="w-7 h-7" />,
      backup: <Save className="w-7 h-7" />,
      analytics: <PieChart className="w-7 h-7" />,
      'data-engineering': <GitBranch className="w-7 h-7" />,


      // === HERRAMIENTAS DE DESARROLLO ===
      testing: <Code className="w-7 h-7" />,
      security: <Shield className="w-7 h-7" />,
      automation: <GitBranch className="w-7 h-7" />,
      documentation: <FileText className="w-7 h-7" />,
      'version-control': <GitBranch className="w-7 h-7" />,

      // === DISEÑO Y UX ===
      design: <Palette className="w-7 h-7" />,
      'ui-libraries': <PenTool className="w-7 h-7" />,

      // === PRODUCTIVIDAD ===
      productivity: <BarChart3 className="w-7 h-7" />,
      collaboration: <Users className="w-7 h-7" />,
      'project-management': <Trello className="w-7 h-7" />,

      // === TECNOLOGÍAS EMERGENTES ===
      ai: <Brain className="w-7 h-7" />,
      blockchain: <Lock className="w-7 h-7" />,
      iot: <Radio className="w-7 h-7" />,
      'ar-vr': <Camera className="w-7 h-7" />,

      // === APLICACIONES ESPECÍFICAS ===
      cms: <FileText className="w-7 h-7" />,
      ecommerce: <ShoppingCart className="w-7 h-7" />,
      gaming: <Gamepad className="w-7 h-7" />,
      social: <MessageSquare className="w-7 h-7" />,

      // === SERVICIOS DE NEGOCIO ===
      payment: <CreditCard className="w-7 h-7" />,
      email: <Mail className="w-7 h-7" />,
      sms: <Send className="w-7 h-7" />,
      crm: <Users className="w-7 h-7" />,
      erp: <Briefcase className="w-7 h-7" />,
      marketing: <Megaphone className="w-7 h-7" />,
      seo: <Search className="w-7 h-7" />,

      // === UTILIDADES ===
      localization: <Globe2 className="w-7 h-7" />,
      education: <Book className="w-7 h-7" />,
      utilities: <Key className="w-7 h-7" />,
    };

    return iconMap[category] || <Lock className="w-7 h-7" />;
  };

 // Colores de fondo para cada categoría
const getCategoryColorClasses = (category: Category): string => {
  const colorMap: Record<string, { bg: string, hoverBg: string, text: string, darkBg: string, darkHoverBg: string, darkText: string }> = {
    // === DESARROLLO CORE ===
    frontend:    { bg: 'bg-blue-50',    hoverBg: 'hover:bg-blue-100',    text: 'text-blue-600',    darkBg: 'dark:bg-blue-900/20',    darkHoverBg: 'dark:hover:bg-blue-800/30',    darkText: 'dark:text-blue-300' },
    backend:     { bg: 'bg-green-50',   hoverBg: 'hover:bg-green-100',   text: 'text-green-600',   darkBg: 'dark:bg-green-900/20',   darkHoverBg: 'dark:hover:bg-green-800/30',   darkText: 'dark:text-green-300' },
    fullstack:   { bg: 'bg-red-50',     hoverBg: 'hover:bg-red-100',     text: 'text-red-600',     darkBg: 'dark:bg-red-900/20',     darkHoverBg: 'dark:hover:bg-red-800/30',     darkText: 'dark:text-red-300' },
    mobile:      { bg: 'bg-violet-50',  hoverBg: 'hover:bg-violet-100',  text: 'text-violet-600',  darkBg: 'dark:bg-violet-900/20',  darkHoverBg: 'dark:hover:bg-violet-800/30',  darkText: 'dark:text-violet-300' },
    desktop:     { bg: 'bg-slate-50',   hoverBg: 'hover:bg-slate-100',   text: 'text-slate-600',   darkBg: 'dark:bg-slate-900/20',   darkHoverBg: 'dark:hover:bg-slate-800/30',   darkText: 'dark:text-slate-300' },
    api:         { bg: 'bg-cyan-50',    hoverBg: 'hover:bg-cyan-100',    text: 'text-cyan-600',    darkBg: 'dark:bg-cyan-900/20',    darkHoverBg: 'dark:hover:bg-cyan-800/30',    darkText: 'dark:text-cyan-300' },
    languages:   { bg: 'bg-amber-50',   hoverBg: 'hover:bg-amber-100',   text: 'text-amber-600',   darkBg: 'dark:bg-amber-900/20',   darkHoverBg: 'dark:hover:bg-amber-800/30',   darkText: 'dark:text-amber-300' },

    // === INFRAESTRUCTURA Y OPERACIONES ===
    devops:        { bg: 'bg-purple-50',  hoverBg: 'hover:bg-purple-100',  text: 'text-purple-600',  darkBg: 'dark:bg-purple-900/20',  darkHoverBg: 'dark:hover:bg-purple-800/30',  darkText: 'dark:text-purple-300' },
    hosting:       { bg: 'bg-lime-50',    hoverBg: 'hover:bg-lime-100',    text: 'text-lime-600',    darkBg: 'dark:bg-lime-900/20',    darkHoverBg: 'dark:hover:bg-lime-800/30',    darkText: 'dark:text-lime-300' },
    cloud:         { bg: 'bg-emerald-50', hoverBg: 'hover:bg-emerald-100', text: 'text-emerald-600', darkBg: 'dark:bg-emerald-900/20', darkHoverBg: 'dark:hover:bg-emerald-800/30', darkText: 'dark:text-emerald-300' },
    infrastructure:{ bg: 'bg-stone-50',   hoverBg: 'hover:bg-stone-100',   text: 'text-stone-600',   darkBg: 'dark:bg-stone-900/20',   darkHoverBg: 'dark:hover:bg-stone-800/30',   darkText: 'dark:text-stone-300' },
    networking:    { bg: 'bg-yellow-50',  hoverBg: 'hover:bg-yellow-100',  text: 'text-yellow-600',  darkBg: 'dark:bg-yellow-900/20',  darkHoverBg: 'dark:hover:bg-yellow-800/30',  darkText: 'dark:text-yellow-300' },
    cdn:           { bg: 'bg-sky-50',     hoverBg: 'hover:bg-sky-100',     text: 'text-sky-600',     darkBg: 'dark:bg-sky-900/20',     darkHoverBg: 'dark:hover:bg-sky-800/30',     darkText: 'dark:text-sky-300' },
    monitoring:    { bg: 'bg-amber-50',   hoverBg: 'hover:bg-amber-100',   text: 'text-amber-600',   darkBg: 'dark:bg-amber-900/20',   darkHoverBg: 'dark:hover:bg-amber-800/30',   darkText: 'dark:text-amber-300' },
    performance:   { bg: 'bg-orange-50',  hoverBg: 'hover:bg-orange-100',  text: 'text-orange-600',  darkBg: 'dark:bg-orange-900/20',  darkHoverBg: 'dark:hover:bg-orange-800/30',  darkText: 'dark:text-orange-300' },

    // === DATOS Y PERSISTENCIA ===
    database:         { bg: 'bg-indigo-50',  hoverBg: 'hover:bg-indigo-100',  text: 'text-indigo-600',  darkBg: 'dark:bg-indigo-900/20',  darkHoverBg: 'dark:hover:bg-indigo-800/30',  darkText: 'dark:text-indigo-300' },
    storage:          { bg: 'bg-sky-50',     hoverBg: 'hover:bg-sky-100',     text: 'text-sky-600',     darkBg: 'dark:bg-sky-900/20',     darkHoverBg: 'dark:hover:bg-sky-800/30',     darkText: 'dark:text-sky-300' },
    backup:           { bg: 'bg-gray-50',    hoverBg: 'hover:bg-gray-100',    text: 'text-gray-600',    darkBg: 'dark:bg-gray-800/30',    darkHoverBg: 'dark:hover:bg-gray-700/40',    darkText: 'dark:text-gray-300' },
    analytics:        { bg: 'bg-slate-50',   hoverBg: 'hover:bg-slate-100',   text: 'text-slate-600',   darkBg: 'dark:bg-slate-900/20',   darkHoverBg: 'dark:hover:bg-slate-800/30',   darkText: 'dark:text-slate-300' },
    'data-engineering': { bg: 'bg-teal-50',    hoverBg: 'hover:bg-teal-100',    text: 'text-teal-600',    darkBg: 'dark:bg-teal-900/20',    darkHoverBg: 'dark:hover:bg-teal-800/30',    darkText: 'dark:text-teal-300' },

    // === HERRAMIENTAS DE DESARROLLO ===
    testing:          { bg: 'bg-orange-50',  hoverBg: 'hover:bg-orange-100',  text: 'text-orange-600',  darkBg: 'dark:bg-orange-900/20',  darkHoverBg: 'dark:hover:bg-orange-800/30',  darkText: 'dark:text-orange-300' },
    security:         { bg: 'bg-red-50',     hoverBg: 'hover:bg-red-100',     text: 'text-red-600',     darkBg: 'dark:bg-red-900/20',     darkHoverBg: 'dark:hover:bg-red-800/30',     darkText: 'dark:text-red-300' },
    automation:       { bg: 'bg-stone-50',   hoverBg: 'hover:bg-stone-100',   text: 'text-stone-600',   darkBg: 'dark:bg-stone-900/20',   darkHoverBg: 'dark:hover:bg-stone-800/30',   darkText: 'dark:text-stone-300' },
    documentation:    { bg: 'bg-neutral-50', hoverBg: 'hover:bg-neutral-100', text: 'text-neutral-600', darkBg: 'dark:bg-neutral-900/20', darkHoverBg: 'dark:hover:bg-neutral-800/30', darkText: 'dark:text-neutral-300' },
    'version-control':{ bg: 'bg-amber-50',   hoverBg: 'hover:bg-amber-100',   text: 'text-amber-600',   darkBg: 'dark:bg-amber-900/20',   darkHoverBg: 'dark:hover:bg-amber-800/30',   darkText: 'dark:text-amber-300' },

    // === DISEÑO Y UX ===
    design:         { bg: 'bg-pink-50',  hoverBg: 'hover:bg-pink-100',  text: 'text-pink-600',  darkBg: 'dark:bg-pink-900/20',  darkHoverBg: 'dark:hover:bg-pink-800/30',  darkText: 'dark:text-pink-300' },
    'ui-libraries': { bg: 'bg-rose-50',  hoverBg: 'hover:bg-rose-100',  text: 'text-rose-600',  darkBg: 'dark:bg-rose-900/20',  darkHoverBg: 'dark:hover:bg-rose-800/30',  darkText: 'dark:text-rose-300' },

    // === PRODUCTIVIDAD ===
    productivity:       { bg: 'bg-yellow-50',  hoverBg: 'hover:bg-yellow-100',  text: 'text-yellow-600',  darkBg: 'dark:bg-yellow-900/20',  darkHoverBg: 'dark:hover:bg-yellow-800/30',  darkText: 'dark:text-yellow-300' },
    collaboration:      { bg: 'bg-cyan-50',    hoverBg: 'hover:bg-cyan-100',    text: 'text-cyan-600',    darkBg: 'dark:bg-cyan-900/20',    darkHoverBg: 'dark:hover:bg-cyan-800/30',    darkText: 'dark:text-cyan-300' },
    'project-management': { bg: 'bg-teal-50',    hoverBg: 'hover:bg-teal-100',    text: 'text-teal-600',    darkBg: 'dark:bg-teal-900/20',    darkHoverBg: 'dark:hover:bg-teal-800/30',    darkText: 'dark:text-teal-300' },

    // === TECNOLOGÍAS EMERGENTES ===
    ai:          { bg: 'bg-emerald-50', hoverBg: 'hover:bg-emerald-100', text: 'text-emerald-600', darkBg: 'dark:bg-emerald-900/20', darkHoverBg: 'dark:hover:bg-emerald-800/30', darkText: 'dark:text-emerald-300' },
    blockchain:  { bg: 'bg-violet-50',  hoverBg: 'hover:bg-violet-100',  text: 'text-violet-600',  darkBg: 'dark:bg-violet-900/20',  darkHoverBg: 'dark:hover:bg-violet-800/30',  darkText: 'dark:text-violet-300' },
    iot:         { bg: 'bg-fuchsia-50', hoverBg: 'hover:bg-fuchsia-100', text: 'text-fuchsia-600', darkBg: 'dark:bg-fuchsia-900/20', darkHoverBg: 'dark:hover:bg-fuchsia-800/30', darkText: 'dark:text-fuchsia-300' },
    'ar-vr':     { bg: 'bg-purple-50',  hoverBg: 'hover:bg-purple-100',  text: 'text-purple-600',  darkBg: 'dark:bg-purple-900/20',  darkHoverBg: 'dark:hover:bg-purple-800/30',  darkText: 'dark:text-purple-300' },

    // === APLICACIONES ESPECÍFICAS ===
    cms:       { bg: 'bg-teal-50',    hoverBg: 'hover:bg-teal-100',    text: 'text-teal-600',    darkBg: 'dark:bg-teal-900/20',    darkHoverBg: 'dark:hover:bg-teal-800/30',    darkText: 'dark:text-teal-300' },
    ecommerce: { bg: 'bg-green-50',   hoverBg: 'hover:bg-green-100',   text: 'text-green-600',   darkBg: 'dark:bg-green-900/20',   darkHoverBg: 'dark:hover:bg-green-800/30',   darkText: 'dark:text-green-300' },
    gaming:    { bg: 'bg-purple-50',  hoverBg: 'hover:bg-purple-100',  text: 'text-purple-600',  darkBg: 'dark:bg-purple-900/20',  darkHoverBg: 'dark:hover:bg-purple-800/30',  darkText: 'dark:text-purple-300' },
    social:    { bg: 'bg-cyan-50',    hoverBg: 'hover:bg-cyan-100',    text: 'text-cyan-600',    darkBg: 'dark:bg-cyan-900/20',    darkHoverBg: 'dark:hover:bg-cyan-800/30',    darkText: 'dark:text-cyan-300' },

    // === SERVICIOS DE NEGOCIO ===
    payment:   { bg: 'bg-rose-50',    hoverBg: 'hover:bg-rose-100',    text: 'text-rose-600',    darkBg: 'dark:bg-rose-900/20',    darkHoverBg: 'dark:hover:bg-rose-800/30',    darkText: 'dark:text-rose-300' },
    email:     { bg: 'bg-fuchsia-50', hoverBg: 'hover:bg-fuchsia-100', text: 'text-fuchsia-600', darkBg: 'dark:bg-fuchsia-900/20', darkHoverBg: 'dark:hover:bg-fuchsia-800/30', darkText: 'dark:text-fuchsia-300' },
    sms:       { bg: 'bg-sky-50',     hoverBg: 'hover:bg-sky-100',     text: 'text-sky-600',     darkBg: 'dark:bg-sky-900/20',     darkHoverBg: 'dark:hover:bg-sky-800/30',     darkText: 'dark:text-sky-300' },
    crm:       { bg: 'bg-indigo-50',  hoverBg: 'hover:bg-indigo-100',  text: 'text-indigo-600',  darkBg: 'dark:bg-indigo-900/20',  darkHoverBg: 'dark:hover:bg-indigo-800/30',  darkText: 'dark:text-indigo-300' },
    erp:       { bg: 'bg-violet-50',  hoverBg: 'hover:bg-violet-100',  text: 'text-violet-600',  darkBg: 'dark:bg-violet-900/20',  darkHoverBg: 'dark:hover:bg-violet-800/30',  darkText: 'dark:text-violet-300' },
    marketing: { bg: 'bg-pink-50',    hoverBg: 'hover:bg-pink-100',    text: 'text-pink-600',    darkBg: 'dark:bg-pink-900/20',    darkHoverBg: 'dark:hover:bg-pink-800/30',    darkText: 'dark:text-pink-300' },
    seo:       { bg: 'bg-blue-50',    hoverBg: 'hover:bg-blue-100',    text: 'text-blue-600',    darkBg: 'dark:bg-blue-900/20',    darkHoverBg: 'dark:hover:bg-blue-800/30',    darkText: 'dark:text-blue-300' },

    // === UTILIDADES ===
    localization: { bg: 'bg-lime-50',   hoverBg: 'hover:bg-lime-100',   text: 'text-lime-600',   darkBg: 'dark:bg-lime-900/20',   darkHoverBg: 'dark:hover:bg-lime-800/30',   darkText: 'dark:text-lime-300' },
    education:    { bg: 'bg-blue-50',   hoverBg: 'hover:bg-blue-100',   text: 'text-blue-600',   darkBg: 'dark:bg-blue-900/20',   darkHoverBg: 'dark:hover:bg-blue-800/30',   darkText: 'dark:text-blue-300' },
    utilities:    { bg: 'bg-gray-50',   hoverBg: 'hover:bg-gray-100',   text: 'text-gray-600',   darkBg: 'dark:bg-gray-800/30',   darkHoverBg: 'dark:hover:bg-gray-700/40',   darkText: 'dark:text-gray-300' },
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
      // === DESARROLLO CORE ===
      frontend: "Herramientas para construir interfaces de usuario atractivas y funcionales, incluyendo frameworks, librerías y componentes.",
      backend: "Todo lo necesario para el desarrollo del lado del servidor, desde APIs hasta bases de datos y servicios.",
      fullstack: "Construye aplicaciones completas con herramientas que integran frontend, backend y bases de datos.",
      mobile: "Desarrolla apps móviles con frameworks cross-platform y herramientas nativas.",
      desktop: "Desarrolla aplicaciones de escritorio con frameworks nativos y multiplataforma.",
      api: "Todo para diseñar, documentar, probar y consumir APIs de forma efectiva.",
      languages: "Lenguajes de programación y entornos de ejecución para desarrollo de software.",

      // === INFRAESTRUCTURA Y OPERACIONES ===
      devops: "Herramientas para automatizar, gestionar y mejorar el ciclo de vida del desarrollo y la infraestructura.",
      hosting: "Plataformas de alojamiento web, servicios en la nube y soluciones de deployment.",
      cloud: "Utiliza servicios en la nube para escalabilidad, almacenamiento y despliegue de aplicaciones.",
      infrastructure: "Gestiona infraestructura como código con herramientas para automatización y orquestación.",
      networking: "Herramientas de redes, VPNs, CDNs y gestión de infraestructura de conectividad.",
      cdn: "Redes de distribución de contenido para acelerar la entrega de tus aplicaciones web.",
      monitoring: "Supervisa la salud, rendimiento y disponibilidad de tus aplicaciones y servicios.",
      performance: "Optimiza la velocidad, rendimiento y experiencia de usuario de tus aplicaciones.",

      // === DATOS Y PERSISTENCIA ===
      database: "Sistemas de gestión de bases de datos, ORMs, herramientas de migración y visualización.",
      storage: "Servicios de almacenamiento en la nube, gestión de archivos y bases de datos.",
      backup: "Soluciones de respaldo, recuperación de datos y continuidad del negocio.",
      analytics: "Analiza el comportamiento de usuarios, métricas de rendimiento y datos de aplicaciones web.",
      "data-engineering": "Transforma y procesa datos con herramientas para ETL, pipelines y análisis masivo.",

      // === HERRAMIENTAS DE DESARROLLO ===
      testing: "Frameworks y utilidades para pruebas unitarias, de integración, end-to-end y más.",
      security: "Protege tus aplicaciones con estas herramientas de seguridad y auditoría.",
      automation: "Automatiza tareas repetitivas, flujos de trabajo y procesos de desarrollo.",
      documentation: "Crea y mantén documentación técnica, wikis y bases de conocimiento.",
      "version-control": "Controla versiones de código y colabora con herramientas como Git y sistemas de gestión.",

      // === DISEÑO Y UX ===
      design: "Recursos para diseño UI/UX, prototipos, maquetación y diseño visual de aplicaciones.",
      "ui-libraries": "Crea interfaces consistentes con bibliotecas de componentes y sistemas de diseño.",

      // === PRODUCTIVIDAD ===
      productivity: "Mejora tu flujo de trabajo con herramientas que incrementan la eficiencia y productividad.",
      collaboration: "Facilita el trabajo en equipo con herramientas de comunicación y colaboración en tiempo real.",
      "project-management": "Organiza proyectos y tareas con herramientas de gestión y seguimiento.",

      // === TECNOLOGÍAS EMERGENTES ===
      ai: "Integra inteligencia artificial, machine learning y procesamiento de datos en tus proyectos.",
      blockchain: "Desarrolla aplicaciones descentralizadas con herramientas para blockchain y contratos inteligentes.",
      iot: "Conecta dispositivos con herramientas para Internet de las Cosas y sistemas embebidos.",
      "ar-vr": "Crea experiencias inmersivas con herramientas para realidad aumentada y virtual.",

      // === APLICACIONES ESPECÍFICAS ===
      cms: "Sistemas de gestión de contenido para crear y administrar sitios web dinámicos.",
      ecommerce: "Plataformas y herramientas para crear tiendas online y sistemas de comercio electrónico.",
      gaming: "Engines, frameworks y herramientas para desarrollo de videojuegos y aplicaciones interactivas.",
      social: "Gestiona presencia en redes sociales, programa contenido y analiza engagement.",

      // === SERVICIOS DE NEGOCIO ===
      payment: "Integra sistemas de pago seguro, procesamiento de transacciones y facturación.",
      email: "Servicios de marketing por correo, transaccionales y gestión de campañas de email.",
      sms: "Servicios de mensajería SMS para notificaciones y comunicaciones con usuarios.",
      crm: "Gestiona relaciones con clientes, ventas, leads y procesos comerciales.",
      erp: "Sistemas de planificación empresarial para gestionar recursos y procesos organizacionales.",
      marketing: "Herramientas de marketing digital, SEO, redes sociales y análisis de campañas.",
      seo: "Optimiza tu sitio web para motores de búsqueda y mejora su visibilidad online.",

      // === UTILIDADES ===
      localization: "Traduce y adapta tus aplicaciones para diferentes idiomas y mercados globales.",
      education: "Plataformas educativas, cursos y recursos para formación en tecnología.",
      utilities: "Simplifica tareas con herramientas misceláneas, generadores y utilidades técnicas.",

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