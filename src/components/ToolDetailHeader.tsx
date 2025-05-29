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
  Monitor
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
  const { isSaved } = useBookmarks();
  const analytics = useAnalytics();
  const { share, tooltip } = useShare();

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

  return (
    <div className={`relative ${className}`}>
      {/* Navegación */}
      <div className="mb-4 sm:mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver al catálogo
        </Link>
      </div>

      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#4A7A7D] dark:to-[#67A2A8] rounded-xl overflow-hidden shadow-lg">
        <div className="py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8 lg:py-16 lg:px-12">
          
          {/* Sección superior: Icono + Info básica */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
            {/* Icono de la herramienta */}
            <div className="flex-shrink-0">
              {tool.image ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-2">
                  <img
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 text-white rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {tool.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Info principal */}
            <div className="flex-grow min-w-0">
              {/* Categoría */}
              <div className="mb-3">
                <Link
                  to={`/category/${tool.category}`}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  <TagIcon size={12} className="mr-1" />
                  {getCategoryLabel(tool.category)}
                </Link>
              </div>

              {/* Título */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                {tool.name}
              </h1>

              {/* Metadatos compactos para móvil */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/80 mb-4">
                {/* Valoración */}
                {tool.stars && (
                  <div className="flex items-center bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Star size={14} className="mr-1 fill-white" />
                    {tool.stars}
                  </div>
                )}

                {/* Tipo */}
                <div className="flex items-center bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                  <Info size={14} className="mr-1" />
                  {tool.isFree ? 'Gratis' : 'Pago'}
                </div>

                {/* Última actualización */}
                {tool.lastUpdated && (
                  <div className="hidden sm:flex items-center bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Calendar size={14} className="mr-1" />
                    {formatLastUpdated(tool.lastUpdated)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div className="mb-6">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Enlaces adicionales - Solo en desktop */}
          <div className="hidden md:flex flex-wrap items-center gap-4 text-sm text-white/80 mb-6">
            {/* Documentación */}
            {tool.docsUrl && (
              <a
                href={tool.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                onClick={() => analytics.trackExternalLink(tool.docsUrl!, 'Documentation', {
                  tool_id: tool.id,
                  tool_name: tool.name
                })}
              >
                <FileText size={16} className="mr-2" />
                Documentación
              </a>
            )}

            {/* Demo */}
            {tool.demoUrl && (
              <a
                href={tool.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                onClick={() => analytics.trackExternalLink(tool.demoUrl!, 'Demo', {
                  tool_id: tool.id,
                  tool_name: tool.name
                })}
              >
                <Monitor size={16} className="mr-2" />
                Demo
              </a>
            )}

            {/* GitHub */}
            {tool.githubUrl && (
              <a
                href={tool.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                onClick={() => analytics.trackExternalLink(tool.githubUrl!, 'GitHub', {
                  tool_id: tool.id,
                  tool_name: tool.name
                })}
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            )}
          </div>

          {/* Acciones principales */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Botón principal - Visitar sitio */}
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#67A2A8] rounded-lg hover:bg-opacity-90 transition-colors font-medium text-center"
              onClick={() => analytics.trackExternalLink(tool.url, 'Website', {
                tool_id: tool.id,
                tool_name: tool.name
              })}
            >
              <ExternalLink size={18} className="mr-2" />
              Visitar sitio web
            </a>

            {/* Botones secundarios */}
            <div className="flex gap-2 sm:gap-3">
              {/* Guardar */}
              <button
                onClick={handleToggleSave}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <BookmarkPlus size={18} className={`mr-2 ${isSaved(tool.id) ? 'fill-white' : ''}`} />
                <span className="sm:inline hidden">{isSaved(tool.id) ? 'Guardado' : 'Guardar'}</span>
              </button>

              {/* Compartir */}
              <button
                onClick={handleShare}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm relative"
              >
                <Share2 size={18} className="mr-2" />
                <span className="sm:inline hidden">Compartir</span>
                {tooltip.show && (
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded z-50 whitespace-nowrap">
                    {tooltip.message}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Enlaces adicionales en móvil */}
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="grid grid-cols-2 gap-2">
              {/* Documentación */}
              {tool.docsUrl && (
                <a
                  href={tool.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-3 text-sm text-white/80 hover:text-white transition-colors bg-white/10 rounded-lg backdrop-blur-sm"
                  onClick={() => analytics.trackExternalLink(tool.docsUrl!, 'Documentation', {
                    tool_id: tool.id,
                    tool_name: tool.name
                  })}
                >
                  <FileText size={16} className="mr-1" />
                  Docs
                </a>
              )}

              {/* Demo */}
              {tool.demoUrl && (
                <a
                  href={tool.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-3 text-sm text-white/80 hover:text-white transition-colors bg-white/10 rounded-lg backdrop-blur-sm"
                  onClick={() => analytics.trackExternalLink(tool.demoUrl!, 'Demo', {
                    tool_id: tool.id,
                    tool_name: tool.name
                  })}
                >
                  <Monitor size={16} className="mr-1" />
                  Demo
                </a>
              )}

              {/* GitHub */}
              {tool.githubUrl && (
                <a
                  href={tool.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-3 text-sm text-white/80 hover:text-white transition-colors bg-white/10 rounded-lg backdrop-blur-sm"
                  onClick={() => analytics.trackExternalLink(tool.githubUrl!, 'GitHub', {
                    tool_id: tool.id,
                    tool_name: tool.name
                  })}
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailHeader;