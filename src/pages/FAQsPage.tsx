import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { HelpCircle, Search, Download, Code, Book, Database, Globe, Heart } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';

const FAQsPage: React.FC = () => {
  const analytics = useAnalytics();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'FAQs Page'
  });

  // Registrar vista de página solo al montar el componente
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Categorías de preguntas
  const categories = [
    { id: 'all', name: 'Todas las preguntas', icon: <HelpCircle size={20} /> },
    { id: 'general', name: 'General', icon: <Globe size={20} /> },
    { id: 'tools', name: 'Herramientas', icon: <Download size={20} /> },
    { id: 'account', name: 'Cuenta', icon: <Database size={20} /> },
    { id: 'technical', name: 'Técnicas', icon: <Code size={20} /> },
    { id: 'contribute', name: 'Contribuir', icon: <Heart size={20} /> },
  ];

  // Lista de FAQs
  const faqs = [
    {
      id: 1,
      question: '¿Qué es DevTools Catalog?',
      answer: 'DevTools Catalog es un directorio curado de herramientas para desarrolladores. Nuestro objetivo es ayudarte a encontrar las mejores herramientas para tu flujo de trabajo, organizadas por categorías y con información detallada sobre cada una.',
      category: 'general'
    },
    {
      id: 2,
      question: '¿Cómo se seleccionan las herramientas para el catálogo?',
      answer: 'Cada herramienta en nuestro catálogo pasa por un proceso de selección en el que evaluamos su utilidad, calidad, actualización y relevancia para los desarrolladores. Priorizamos herramientas que resuelven problemas reales y mejoran los flujos de trabajo de desarrollo.',
      category: 'general'
    },
    {
      id: 3,
      question: '¿Puedo sugerir una herramienta para que sea incluida?',
      answer: 'Sí, absolutamente. Valoramos las sugerencias de la comunidad. Puedes sugerir una herramienta a través de nuestro formulario de sugerencias o enviándonos un correo electrónico. Revisamos cada sugerencia y, si cumple con nuestros criterios, la incluimos en el catálogo.',
      category: 'tools'
    },
    {
      id: 4,
      question: '¿Las herramientas listadas son todas gratuitas?',
      answer: 'No, incluimos tanto herramientas gratuitas como de pago. Cada listado indica claramente si la herramienta es gratuita, tiene un plan gratuito con limitaciones, o si es completamente de pago. Procuramos incluir opciones para diferentes necesidades y presupuestos.',
      category: 'tools'
    },
    {
      id: 5,
      question: '¿Necesito crear una cuenta para usar el catálogo?',
      answer: 'No, puedes navegar por nuestro catálogo y explorar todas las herramientas sin necesidad de crear una cuenta. Sin embargo, si te registras, podrás guardar tus herramientas favoritas, recibir recomendaciones personalizadas y participar en nuestra comunidad.',
      category: 'account'
    },
    {
      id: 6,
      question: '¿Cómo puedo guardar mis herramientas favoritas?',
      answer: 'Si tienes una cuenta, puedes guardar herramientas en tu lista de favoritos haciendo clic en el ícono de marcador que aparece en cada tarjeta de herramienta. Puedes acceder a tu lista de favoritos desde tu perfil en cualquier momento.',
      category: 'account'
    },
    {
      id: 7,
      question: '¿Qué tecnologías se utilizan para desarrollar este sitio?',
      answer: 'DevTools Catalog está construido con React, TypeScript y Tailwind CSS para el frontend. Utilizamos una combinación de servicios de backend para gestionar el contenido y las funcionalidades de usuario.',
      category: 'technical'
    },
    {
      id: 8,
      question: '¿Cómo se actualizan las herramientas en el catálogo?',
      answer: 'Revisamos regularmente nuestro catálogo para asegurarnos de que la información esté actualizada. También recibimos notificaciones de cambios importantes en las herramientas que listamos. Si encuentras información desactualizada, por favor háganoslo saber.',
      category: 'tools'
    },
    {
      id: 9,
      question: '¿Cómo puedo contribuir al proyecto?',
      answer: 'Hay varias formas de contribuir: sugerir nuevas herramientas, reportar errores, proponer mejoras o contribuir directamente al código a través de nuestro repositorio en GitHub. Valoramos y agradecemos todas las formas de contribución.',
      category: 'contribute'
    },
    {
      id: 10,
      question: '¿Ofrecen alguna API para acceder a los datos del catálogo?',
      answer: 'Actualmente estamos trabajando en una API pública que permitirá a los desarrolladores acceder a nuestros datos de forma programática. Si estás interesado en ser un beta tester o tienes casos de uso específicos, contáctanos.',
      category: 'technical'
    },
    {
      id: 11,
      question: '¿Cómo puedo reportar un error en el sitio?',
      answer: 'Puedes reportar errores a través de nuestro repositorio de GitHub o enviándonos un correo electrónico con detalles del problema. Agradecemos mucho estos reportes, ya que nos ayudan a mejorar la experiencia para todos los usuarios.',
      category: 'technical'
    },
    {
      id: 12,
      question: '¿Tienen un newsletter o forma de mantenerme actualizado?',
      answer: 'Sí, tenemos un newsletter mensual donde compartimos las nuevas herramientas añadidas al catálogo, actualizaciones importantes y contenido exclusivo sobre desarrollo y tecnología. Puedes suscribirte desde la sección de newsletter en nuestra página principal.',
      category: 'general'
    },
    {
      id: 13,
      question: '¿Ofrecen opciones de patrocinio o destacado para herramientas?',
      answer: 'Sí, ofrecemos opciones limitadas de patrocinio y destacado para herramientas, manteniendo siempre la integridad y la transparencia de nuestro catálogo. Para más información, contáctanos directamente a través de nuestro formulario de contacto.',
      category: 'contribute'
    },
    {
      id: 14,
      question: '¿Puedo compartir o embedar las listas de herramientas en mi sitio?',
      answer: 'Sí, puedes compartir enlaces a nuestras listas de categorías o herramientas específicas. Estamos trabajando en opciones de embedding para que puedas incluir listas curadas en tu propio sitio con la atribución adecuada.',
      category: 'technical'
    },
    {
      id: 15,
      question: '¿Tienen alguna comunidad donde pueda conectar con otros desarrolladores?',
      answer: 'Sí, tenemos un servidor de Discord donde nuestra comunidad comparte recursos, discute sobre herramientas y tecnologías, y colabora en proyectos. También organizamos eventos virtuales ocasionales. Puedes unirte a través del enlace en nuestra página de contacto.',
      category: 'general'
    }
  ];

  // Filtrar FAQs por búsqueda y categoría
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12 px-4">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl py-12 px-6 md:px-10 max-w-4xl mx-auto text-center shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 animate-fade-in">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 animate-fade-in delay-100 leading-relaxed max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre DevTools.
          </p>
        </div>
      </section>


      {/* Búsqueda y categorías */}
      <section className="mb-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Barra de búsqueda */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar preguntas frecuentes..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Categorías */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full border transition-colors flex items-center ${activeCategory === category.id
                    ? 'bg-[#67A2A8] text-white border-[#67A2A8] dark:bg-[#67A2A8] dark:border-[#67A2A8]'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-750'
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de FAQs */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-6">
              {filteredFaqs.map(faq => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <HelpCircle className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                No se encontraron preguntas
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                No hemos encontrado preguntas que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="px-6 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sección adicional - ¿No encuentras lo que buscas? */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              ¿No encuentras lo que buscas?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-[#67A2A8]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Explora nuestra documentación</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Consulta nuestra documentación completa con guías detalladas y tutoriales.
                </p>
                <Link to="/blog" className="text-[#67A2A8] hover:text-[#9CD1D4] font-medium">
                  Ver documentación
                </Link>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-full flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-[#67A2A8]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Recursos de ayuda</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Descarga guías prácticas y recursos útiles para sacar el máximo provecho del catálogo.
                </p>
                <Link to="/blog" className="text-[#67A2A8] hover:text-[#9CD1D4] font-medium">
                  Ver recursos
                </Link>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-full flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-[#67A2A8]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Contáctanos</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ¿Aún tienes dudas? Nuestro equipo está listo para ayudarte con cualquier pregunta.
                </p>
                <Link to="/contact" className="text-[#67A2A8] hover:text-[#9CD1D4] font-medium">
                  Contactar soporte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Componente de ítem de FAQ con animación de acordeón
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in
                hover:border-[#67A2A8] dark:hover:border-[#9CD1D4] transition-colors duration-300"
    >
      <button
        className="w-full p-6 flex justify-between items-center cursor-pointer text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg pr-8">{question}</h3>
        <ChevronIcon isOpen={isOpen} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
};

// Componente para el icono de chevron animado
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180 bg-[#67A2A8] border-[#67A2A8] dark:bg-[#67A2A8] dark:border-[#67A2A8]' : ''
      }`}
  >
    <svg
      className={`w-3 h-3 ${isOpen ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

export default FAQsPage;