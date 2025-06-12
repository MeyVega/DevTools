import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ToolDetailHeader from '../components/ToolDetailHeader';
import FeaturedTools from '../components/FeaturedTools';
import {
  ArrowLeft,
  ExternalLink,
  Star,
  Tag as TagIcon,
  Calendar,
  Share2,
  BookmarkPlus,
  Check,
  Github,
  Code,
  FileText,
  Link as LinkIcon,
} from 'lucide-react';
import { Tool, getToolById, getSimilarTools, getCategoryLabel } from '../data/tools';
import { formatLastUpdated } from '../utils/dateUtils';
import { useBookmarks } from '../contexts/BookmarksContext';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';
import { useShare } from '../hooks/useShare';

import { getPostsForTool } from '../data/blog';
import BlogPostCard from '../components/blog/BlogPostCard';

const ToolDetailPage: React.FC = () => {
  // Obtener el ID de la herramienta desde la URL
  const { id } = useParams<{ id: string }>();

  const { share } = useShare();

  // Estados para los datos
  const [tool, setTool] = useState<Tool | null>(null);
  const [similarTools, setSimilarTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'alternatives'>('overview');

  // Obtener funciones de bookmarks
  const { isSaved, toggleTool } = useBookmarks();

  // Analytics
  const analytics = useAnalytics();

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'Tool Detail'
  });

  // Cargar datos de la herramienta
  useEffect(() => {
    const fetchToolData = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        // Obtener datos de la herramienta
        const toolData = getToolById(id);

        if (!toolData) {
          setError('Herramienta no encontrada');
          setLoading(false);
          return;
        }

        setTool(toolData);

        // Obtener herramientas similares
        const similar = getSimilarTools(toolData, 3);
        setSimilarTools(similar);

        // Registrar vista de herramienta en analytics
        analytics.trackToolView(toolData.id, toolData.name);
        analytics.trackPageView(config.current.pageName);

        // Hacer scroll al inicio
        window.scrollTo(0, 0);
      } catch (err) {
        console.error('Error cargando herramienta:', err);
        setError('Error al cargar la herramienta');
      } finally {
        setLoading(false);
      }
    };

    fetchToolData();
  }, [id]); // Mantener id como dependencia para reflejar cambios

  // Manejar el guardado de la herramienta
  const handleToggleSave = () => {
    if (tool) {
      const newSavedState = toggleTool(tool.id);

      // Registrar evento en analytics
      if (newSavedState) {
        analytics.trackToolSave(tool.id, tool.name);
      } else {
        analytics.trackEvent(EventType.TOOL_UNSAVE, { tool_id: tool.id, tool_name: tool.name });
      }
    }
  };

  const handleShare = () => {
    if (!tool) return;

    share({
      title: tool.name,
      text: tool.description,
      url: window.location.href,
      source: 'tool_detail'
    });
  };

  // Si está cargando, mostrar estado de carga
  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#67A2A8]"></div>
        </div>
      </Layout>
    );
  }

  // Si hay un error, mostrar mensaje de error
  if (error || !tool) {
    return (
      <Layout>
        <div className="py-12 max-w-4xl mx-auto text-center">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">
              {error || 'Herramienta no encontrada'}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lo sentimos, no pudimos encontrar la herramienta que estás buscando.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al catálogo
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Si todo está bien, mostrar la página de detalle
  return (
    <Layout>
      {/* Cabecera de la herramienta */}
      <ToolDetailHeader
        tool={tool}
        onSave={handleToggleSave}
        className="mb-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contenido principal */}
        <div className="lg:col-span-2">
          {/* Tabs de navegación */}
          <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8">
              <TabButton
                active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              >
                Descripción general
              </TabButton>

              {/* <TabButton 
                active={activeTab === 'features'} 
                onClick={() => setActiveTab('features')}
              >
                Características
              </TabButton> */}

              <TabButton
                active={activeTab === 'alternatives'}
                onClick={() => setActiveTab('alternatives')}
              >
                Alternativas
              </TabButton>
            </nav>
          </div>

          {/* Contenido de las tabs */}
          <div className="animate-fade-in">
            {activeTab === 'overview' && (
              <div>
                <div className="prose dark:prose-invert prose-sm sm:prose max-w-none mb-8">
                  <h2>Descripción</h2>

                  <p className="text-gray-700 dark:text-gray-300">
                    {tool.descriptionLarge}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map(tag => (
                      <Link
                        key={tag}
                        to={`/tag/${tag}`}
                        className="bg-[#E3F5F5] text-[#67A2A8] hover:bg-[#67A2A8] hover:text-white dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4] dark:hover:bg-[#67A2A8]/40 text-sm px-3 py-1.5 rounded-full flex items-center transition-colors"
                        onClick={() => analytics.trackEvent(EventType.TAG_VIEW, { tag })}
                      >
                        <TagIcon size={14} className="mr-1.5" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Información adicional, si estuviera disponible */}
                {tool.authorName && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Autor</h3>
                    <p className="text-gray-700 dark:text-gray-300">{tool.authorName}</p>
                  </div>
                )}
              </div>
            )}

            {/* {activeTab === 'features' && (
              <div>
                <div className="prose dark:prose-invert prose-sm sm:prose max-w-none mb-8">
                  <h2>Características principales</h2>
                  
                 
                  <ul>
                    <li>Característica 1 de {tool.name}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Característica 2 de {tool.name}: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Característica 3 de {tool.name}: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                    <li>Característica 4 de {tool.name}: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                    <li>Característica 5 de {tool.name}: Excepteur sint occaecat cupidatat non proident, sunt in culpa.</li>
                  </ul>
                  
                  <h3>Casos de uso</h3>
                  
                  <p>
                    {tool.name} es ideal para los siguientes casos de uso:
                  </p>
                  
                  <ul>
                    <li>Caso de uso 1: Desarrollo de aplicaciones web modernas.</li>
                    <li>Caso de uso 2: Optimización del flujo de trabajo de desarrollo.</li>
                    <li>Caso de uso 3: Integración con ecosistemas existentes.</li>
                    <li>Caso de uso 4: Mejora de la productividad del equipo.</li>
                  </ul>
                </div>
              </div>
            )} */}

            {activeTab === 'alternatives' && (
              <div>
                <div className="prose dark:prose-invert prose-sm sm:prose max-w-none mb-8">

                  <p>
                    Aunque {tool.name} es una opción sólida dentro de su categoría, es importante considerar otras herramientas disponibles en el mercado para asegurarte de elegir la que mejor se adapta a tus necesidades.
                    A continuación, te mostramos algunas opciones que podrían servir como reemplazo o complemento a {tool.name}.
                  </p>

                </div>

                {/* Lista de alternativas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {similarTools.length > 0 ? (
                    similarTools.map(similarTool => (
                      <Link
                        key={similarTool.id}
                        to={`/tool/${similarTool.id}`}
                        className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                        onClick={() => analytics.trackToolView(similarTool.id, similarTool.name, { source: 'alternatives' })}
                      >
                        {similarTool.image ? (
                          <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 mr-4">
                            <img
                              src={similarTool.image}
                              alt={similarTool.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded bg-[#E3F5F5] dark:bg-[#67A2A8]/20 text-[#67A2A8] dark:text-[#9CD1D4] flex items-center justify-center flex-shrink-0 mr-4">
                            {similarTool.name.charAt(0)}
                          </div>
                        )}

                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">{similarTool.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{similarTool.description}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 col-span-2">
                      No hemos encontrado alternativas específicas para esta herramienta.
                    </p>
                  )}
                </div>

                {/* Comparación */}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar con información adicional */}
        <div>
          {/* Datos técnicos */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Información</h3>

            <div className="space-y-4">
              <InfoItem
                icon={<Calendar className="text-[#67A2A8]" />}
                label="Última actualización"
                value={formatLastUpdated(tool.lastUpdated)}
              />

              {tool.stars && (
                <InfoItem
                  icon={<Star className="text-amber-500 fill-amber-500" />}
                  label="Valoración"
                  value={`${tool.stars.toFixed(1)}/5`}
                />
              )}

              <InfoItem
                icon={<LinkIcon className="text-blue-500" />}
                label="Sitio web"
                value={
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    onClick={() => analytics.trackExternalLink(tool.url, 'Website', { tool_id: tool.id })}
                  >
                    Visitar sitio
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                }
              />

              {tool.githubUrl && (
                <InfoItem
                  icon={<Github className="text-gray-700 dark:text-gray-300" />}
                  label="GitHub"
                  value={
                    <a
                      href={tool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                      onClick={() => analytics.trackExternalLink(tool.githubUrl || '', 'GitHub', { tool_id: tool.id })}
                    >
                      Ver repositorio
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  }
                />
              )}

              {tool.documentationUrl && (
                <InfoItem
                  icon={<FileText className="text-purple-500" />}
                  label="Documentación"
                  value={
                    <a
                      href={tool.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                      onClick={() => analytics.trackExternalLink(tool.documentationUrl || '', 'Documentation', { tool_id: tool.id })}
                    >
                      Ver docs
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  }
                />
              )}

              <InfoItem
                icon={<Code className="text-green-500" />}
                label="Licencia"
                value="MIT" // Simularemos que todas tienen licencia MIT
              />
            </div>

            {/* Botones de acción */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={handleToggleSave}
                className={`flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${isSaved(tool.id)
                    ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {isSaved(tool.id) ? (
                  <>
                    <Check size={16} className="mr-1.5" />
                    Guardada
                  </>
                ) : (
                  <>
                    <BookmarkPlus size={16} className="mr-1.5" />
                    Guardar
                  </>
                )}
              </button>

              <button
                onClick={handleShare}
                className="flex items-center justify-center py-2 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md text-sm font-medium transition-colors"
              >
                <Share2 size={16} className="mr-1.5" />
                Compartir
              </button>
            </div>
          </div>

          {/* Categoría */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Categoría</h3>

            <Link
              to={`/category/${tool.category}`}
              className={`inline-flex items-center px-4 py-2 rounded-md ${getCategoryColorClass(tool.category)}`}
              onClick={() => analytics.trackEvent(EventType.CATEGORY_VIEW, { category: tool.category })}
            >
              {getCategoryIcon(tool.category)}
              <span className="ml-2">{getCategoryLabel(tool.category)}</span>
            </Link>
          </div>

          {/* Precio */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Precio</h3>

            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${tool.isFree
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : tool.hasFreeTier
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}>
                {tool.isFree ? 'Gratis' : (tool.hasFreeTier ? 'Freemium' : 'De pago')}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {tool.isFree
                ? 'Esta herramienta es completamente gratuita para usar.'
                : tool.hasFreeTier
                  ? 'Esta herramienta ofrece un plan gratuito con funcionalidades limitadas, así como planes de pago con características adicionales.'
                  : 'Esta herramienta requiere pago para su uso. Consulta el sitio web oficial para obtener información sobre precios.'}
            </p>
          </div>
        </div>
      </div>

      {/* Herramientas similares */}
      {similarTools.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Herramientas similares
          </h2>

          <FeaturedTools
            tools={similarTools}
            showTitle={false}
            showViewAll={false}
          />
        </section>
      )}

      {/* Llamada a la acción */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿Encontraste útil esta herramienta?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Explora más herramientas en nuestro catálogo o comparte esta página con tus compañeros desarrolladores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            >
              Explorar más herramientas
            </Link>
          </div>
        </div>
      </section>
      {/* Artículos relacionados */}
      {tool && (
        <section className="mb-16">
          {(() => {
            const relatedPosts = getPostsForTool(tool.id).slice(0, 3);

            return relatedPosts.length > 0 ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Artículos sobre {tool.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            ) : null;
          })()}
        </section>
      )}
    </Layout>
  );
};

// Componente para tab
interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ active, children, onClick }) => {
  return (
    <button
      className={`px-1 py-4 text-sm font-medium border-b-2 ${active
          ? 'border-[#67A2A8] text-[#67A2A8] dark:border-[#9CD1D4] dark:text-[#9CD1D4]'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
        } transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Componente para item de información
interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-start">
      <div className="h-5 w-5 flex-shrink-0 mt-0.5 mr-3">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
        <div className="text-gray-800 dark:text-gray-200">{value}</div>
      </div>
    </div>
  );
};

// Helper para obtener la clase de color según la categoría
const getCategoryColorClass = (category: string): string => {
  const colors: Record<string, string> = {
    // === DESARROLLO CORE ===
    frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300',
    backend: 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300',
    fullstack: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    mobile: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    desktop: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    api: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',
    languages: 'bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300',

    // === INFRAESTRUCTURA Y OPERACIONES ===
    devops: 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300',
    hosting: 'bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300',
    cloud: 'bg-cyan alkoh-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',
    infrastructure: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    networking: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300',
    cdn: 'bg-sky-100 text-sky-800 dark:bg-sky-800/20 dark:text-sky-300',
    monitoring: 'bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300',
    performance: 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',

    // === DATOS Y PERSISTENCIA ===
    database: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    storage: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    backup: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300',
    analytics: 'bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300',
    'data-engineering': 'bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300',

    // === HERRAMIENTAS DE DESARROLLO ===
    testing: 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',
    security: 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300',
    automation: 'bg-stone-100 text-stone-800 dark:bg-stone-800/20 dark:text-stone-300',
    documentation: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800/20 dark:text-neutral-300',
    'version-control': 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',

    // === DISEÑO Y UX ===
    design: 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',
    'ui-libraries': 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',

    // === PRODUCTIVIDAD ===
    productivity: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    collaboration: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    'project-management': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',

    // === TECNOLOGÍAS EMERGENTES ===
    ai: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300',
    blockchain: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    iot: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    'ar-vr': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',

    // === APLICACIONES ESPECÍFICAS ===
    cms: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    ecommerce: 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300',
    gaming: 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300',
    social: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',

    // === SERVICIOS DE NEGOCIO ===
    payment: 'bg-rose-100 text-rose-800 dark:bg-rose-800/20 dark:text-rose-300',
    email: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    sms: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    crm: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    erp: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    marketing: 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',
    seo: 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300',

    // === UTILIDADES ===
    localization: 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300',
    education: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    utilities: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300',
  };

  return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
};

// Helper para obtener el icono según la categoría
const getCategoryIcon = (category: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    frontend: <Code size={18} className="text-blue-600 dark:text-blue-400" />,
    backend: <Code size={18} className="text-green-600 dark:text-green-400" />,
    devops: <Code size={18} className="text-purple-600 dark:text-purple-400" />,
    design: <Code size={18} className="text-pink-600 dark:text-pink-400" />,
    productivity: <Code size={18} className="text-yellow-600 dark:text-yellow-400" />,
    testing: <Code size={18} className="text-orange-600 dark:text-orange-400" />,
    database: <Code size={18} className="text-indigo-600 dark:text-indigo-400" />,
    api: <Code size={18} className="text-cyan-600 dark:text-cyan-400" />,
    security: <Code size={18} className="text-red-600 dark:text-red-400" />,
    mobile: <Code size={18} className="text-violet-600 dark:text-violet-400" />,
    ai: <Code size={18} className="text-emerald-600 dark:text-emerald-400" />
  };

  return icons[category] || <Code size={18} className="text-gray-600 dark:text-gray-400" />;
};

export default ToolDetailPage;