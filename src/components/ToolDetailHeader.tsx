import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowLeft, 
  ExternalLink, 
  BookmarkPlus, 
  Share2, 
  Calendar, 
  Tag as TagIcon,
  Github,
  Info,
  FileText,
  Monitor,
  BookmarkCheck
} from 'lucide-react';
import { Tool, getCategoryLabel } from '../data/tools';
import { formatLastUpdated } from '../utils/dateUtils';
import { useBookmarks } from '../contexts/BookmarksContext';
import useAnalytics from '../hooks/useAnalytics';
import { useShare } from '../hooks/useShare';

interface ToolDetailHeaderProps {
  tool: Tool;
  onSave?: () => void;
  className?: string;
}

const ToolDetailHeader: React.FC<ToolDetailHeaderProps> = ({ 
  tool, 
  onSave,
  className = '' 
}) => {
  // Lógica funcional correcta (del código original)
  const { isSaved } = useBookmarks();
  const analytics = useAnalytics();
  const { share, tooltip } = useShare();

  const saved = isSaved(tool.id);

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSave) {
      onSave();
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await share({
      title: tool.name,
      text: tool.description,
      source: 'tool_detail'
    });
  };

  // Clases reutilizables para el estilo "Vibrante Refinado"
  const glassItemClasses = "bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 dark:border-white/10 dark:bg-black/10 dark:hover:bg-black/20";
  const glassButtonClasses = "bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/10 dark:hover:bg-black/20";

  return (
    <div className={`relative ${className}`}>
      {/* Navegación */}
      <div className="mb-4 sm:mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al catálogo
        </Link>
      </div>

      {/* Header con el estilo "Vibrante Refinado" */}
      <div className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
        
        <div className="relative p-6 sm:p-8 md:p-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 backdrop-blur-md p-2 shadow-inner">
                {tool.image ? (
                  <img src={tool.image} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-4xl font-bold text-white/80">{tool.name.charAt(0)}</span>
                )}
              </div>
            </div>

            <div className="flex-grow min-w-0">
              <div className="mb-3">
                <Link to={`/category/${tool.category}`} className={`inline-flex items-center px-3 py-1 text-sm font-medium text-white ${glassItemClasses}`}>
                  <TagIcon size={12} className="mr-1.5" />
                  {getCategoryLabel(tool.category)}
                </Link>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                {tool.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/90">
                {tool.stars && (
                  <div className="flex items-center">
                    <Star size={14} className="mr-1.5 text-yellow-300 fill-yellow-400/80" />
                    {tool.stars}
                  </div>
                )}
                <div className="flex items-center">
                   <span className="text-white/30 mx-2">&bull;</span>
                   <Info size={14} className="mr-1.5" />
                   {tool.isFree ? 'Gratis' : 'Pago'}
                </div>
                {tool.lastUpdated && (
                  <div className="hidden sm:flex items-center">
                    <span className="text-white/30 mx-2">&bull;</span>
                    <Calendar size={14} className="mr-1.5" />
                    {formatLastUpdated(tool.lastUpdated)}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-4xl">
              {tool.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 order-1">
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/95 text-blue-700 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-md shadow-md hover:shadow-xl">
                <ExternalLink size={18} className="mr-2" />
                Visitar sitio web
              </a>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handleToggleSave}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 text-white rounded-lg transition-colors duration-300 backdrop-blur-md ${saved ? 'bg-white/25 hover:bg-white/30' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {saved ? <BookmarkCheck size={18} className="mr-2 text-cyan-300" /> : <BookmarkPlus size={18} className="mr-2" />}
                  <span className="sm:inline hidden font-medium">{saved ? 'Guardado' : 'Guardar'}</span>
                </button>
                <button onClick={handleShare} className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300 backdrop-blur-md relative">
                  <Share2 size={18} className="mr-2" />
                  <span className="sm:inline hidden">Compartir</span>
                  {tooltip.show && <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-md z-50 shadow-lg">{tooltip.message}</span>}
                </button>
              </div>
            </div>
            
            {/* === INICIO: SECCIÓN COMPLETA DE ENLACES SECUNDARIOS === */}
            <div className="flex flex-wrap items-center justify-center gap-3 order-3 md:order-2 md:mt-0 mt-4 pt-4 border-t border-white/10 md:border-none md:pt-0">
              {tool.docsUrl && (
                <a href={tool.docsUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center text-sm text-white/80 hover:text-white ${glassButtonClasses.replace('rounded-lg', 'rounded-md')} px-3 py-1.5`}>
                  <FileText size={16} className="mr-1.5" />
                  Docs
                </a>
              )}
              {tool.demoUrl && (
                <a href={tool.demoUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center text-sm text-white/80 hover:text-white ${glassButtonClasses.replace('rounded-lg', 'rounded-md')} px-3 py-1.5`}>
                  <Monitor size={16} className="mr-1.5" />
                  Demo
                </a>
              )}
              {tool.githubUrl && (
                <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center text-sm text-white/80 hover:text-white ${glassButtonClasses.replace('rounded-lg', 'rounded-md')} px-3 py-1.5`}>
                  <Github size={16} className="mr-1.5" />
                  GitHub
                </a>
              )}
            </div>
            {/* === FIN: SECCIÓN COMPLETA DE ENLACES SECUNDARIOS === */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailHeader;