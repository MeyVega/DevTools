import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag, Star, BookmarkPlus, Share2, Calendar } from 'lucide-react';
import type { Tool } from '../data/tools';
import { getCategoryLabel, getCategoryColorClass } from '../data/tools';
import { useBookmarks } from '../contexts/BookmarksContext';
import useAnalytics from '../hooks/useAnalytics';
import { useShare } from '../hooks/useShare';
import { formatLastUpdated } from '../utils/dateUtils';

interface ToolCardProps {
  tool: Tool;
  onSave?: (toolId: string) => void;
  onShare?: (tool: Tool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onSave, onShare }) => {
  const { isSaved, toggleTool } = useBookmarks();
  const analytics = useAnalytics();
  const { share, tooltip } = useShare();

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isNowSaved = toggleTool(tool.id);
    
    if (onSave) {
      onSave(tool.id);
    }
    
    // Registrar evento en analytics
    if (isNowSaved) {
      analytics.trackToolSave(tool.id, tool.name, {
        source: 'tool_card',
        category: tool.category,
        is_free: tool.isFree
      });
    } else {
      analytics.trackToolUnsave(tool.id, tool.name, {
        source: 'tool_card',
        category: tool.category
      });
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    await share({
      title: tool.name,
      text: tool.description,
      source: 'tool_card'
    });

    if (onShare) {
      onShare(tool);
    }
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1">
      {/* Botones de acción */}
      <div className="absolute top-3 right-3 flex items-center space-x-2">
        <button
          onClick={handleToggleSave}
          className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] transition-colors"
          aria-label={isSaved(tool.id) ? "Quitar de guardados" : "Guardar herramienta"}
        >
          <BookmarkPlus size={18} className={isSaved(tool.id) ? "fill-[#67A2A8] dark:fill-[#9CD1D4] text-[#67A2A8] dark:text-[#9CD1D4]" : ""} />
        </button>
        
        <button
          onClick={handleShare}
          className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] transition-colors relative"
          aria-label="Compartir herramienta"
        >
          <Share2 size={18} />
          {tooltip.show && (
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded whitespace-nowrap z-50">
              {tooltip.message}
            </span>
          )}
        </button>
      </div>

      {/* Categoría */}
      <Link
        to={`/category/${tool.category}`}
        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getCategoryColorClass(tool.category)}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Tag size={12} className="mr-1" />
        {getCategoryLabel(tool.category)}
      </Link>

      {/* Título y descripción */}
      <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {tool.description}
      </p>

      {/* Meta información */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
          {tool.stars && (
            <div className="flex items-center">
              <Star size={14} className="text-amber-500 fill-amber-500 mr-1" />
              <span>{tool.stars}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{formatLastUpdated(tool.lastUpdated)}</span>
          </div>
        </div>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#67A2A8] dark:text-[#9CD1D4] hover:text-[#9CD1D4] dark:hover:text-[#E3F5F5] transition-colors"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(tool.url, '_blank');
            analytics.trackExternalLink(tool.url, 'Website', {
              tool_id: tool.id,
              tool_name: tool.name,
              source: 'tool_card'
            });
          }}
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
