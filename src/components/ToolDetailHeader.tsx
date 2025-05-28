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
import { Tool, getCategoryLabel, getCategoryColorClass } from '../data/tools';
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
      <div className="mb-6">
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
        <div className="py-12 px-6 sm:px-12 md:py-16">
          {/* Categoría */}
          <div className="mb-4">
            <Link
              to={`/category/${tool.category}`}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColorClass(tool.category)}`}
            >
              <TagIcon size={14} className="mr-1" />
              {getCategoryLabel(tool.category)}
            </Link>
          </div>

          {/* Título y descripción */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {tool.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {tool.description}
            </p>
          </div>

          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            {/* Valoración */}
            {tool.stars && (
              <div className="flex items-center">
                <Star size={16} className="mr-1" />
                {tool.stars} estrellas
              </div>
            )}

            {/* Última actualización */}
            {tool.lastUpdated && (
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                Actualizado {formatLastUpdated(tool.lastUpdated)}
              </div>
            )}

            {/* Tipo de licencia */}
            <div className="flex items-center">
              <Info size={16} className="mr-1" />
              {tool.isFree ? 'Gratuito' : 'De pago'}
            </div>

            {/* Documentación */}
            {tool.docsUrl && (
              <a
                href={tool.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors"
                onClick={() => analytics.trackExternalLink(tool.docsUrl!, 'Documentation', {
                  tool_id: tool.id,
                  tool_name: tool.name
                })}
              >
                <FileText size={16} className="mr-1" />
                Documentación
              </a>
            )}

            {/* Demo */}
            {tool.demoUrl && (
              <a
                href={tool.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors"
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
                className="flex items-center hover:text-white transition-colors"
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

          {/* Acciones */}
          <div className="flex items-center space-x-4 mt-8">
            {/* Botón de sitio web */}
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-[#67A2A8] rounded-lg hover:bg-opacity-90 transition-colors"
              onClick={() => analytics.trackExternalLink(tool.url, 'Website', {
                tool_id: tool.id,
                tool_name: tool.name
              })}
            >
              <ExternalLink size={18} className="mr-2" />
              Visitar sitio web
            </a>

            {/* Botón de guardar */}
            <button
              onClick={handleToggleSave}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <BookmarkPlus size={18} className={`mr-2 ${isSaved(tool.id) ? 'fill-white' : ''}`} />
              {isSaved(tool.id) ? 'Guardado' : 'Guardar'}
            </button>

            {/* Botón de compartir */}
            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors relative"
            >
              <Share2 size={18} className="mr-2" />
              Compartir
              {tooltip.show && (
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded z-50">
                  {tooltip.message}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailHeader;