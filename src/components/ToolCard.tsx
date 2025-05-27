import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag, Star, BookmarkPlus, Share2, Calendar } from 'lucide-react';
import type { Tool } from '../data/tools';
import { getCategoryLabel, getCategoryColorClass } from '../data/tools';

interface ToolCardProps {
  tool: Tool;
  onSave?: (toolId: string) => void;
  onShare?: (tool: Tool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onSave, onShare }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Formatea la fecha para mostrar "hace X días/semanas/meses"
  const formatLastUpdated = (dateString: string) => {
    const updateDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - updateDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) {
      return `Actualizado hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Actualizado hace ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    } else {
      const months = Math.floor(diffDays / 30);
      return `Actualizado hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge for new or featured tools */}
      {(tool.isNew || tool.isFeatured) && (
        <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-medium
          ${tool.isNew ? 'bg-green-500 text-white' : 'bg-amber-400 text-amber-800'}`}>
          {tool.isNew ? 'Nuevo' : 'Destacado'}
        </div>
      )}
      
      {tool.image ? (
        <div className="h-48 overflow-hidden relative">
          <Link to={`/tool/${tool.id}`}>
            <img 
              src={tool.image} 
              alt={tool.name} 
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-50'}`}></div>
          </Link>
        </div>
      ) : (
        <div className="h-20 bg-gradient-to-r from-[#9CD1D4] to-[#67A2A8] flex items-center justify-center">
          <h3 className="text-xl font-bold text-white">{tool.name}</h3>
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex justify-between items-start">
          <div>
            <Link to={`/tool/${tool.id}`} className="hover:underline">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#67A2A8] transition-colors">
                {tool.name}
              </h3>
            </Link>
            <div className="flex items-center mt-1">
              <span className="flex items-center text-amber-500 mr-2">
                <Star size={14} className="fill-amber-500 mr-1" />
                <span className="text-xs font-medium">{tool.stars || 0}</span>
              </span>
              <span className="text-xs text-gray-500 flex items-center">
                <Calendar size={12} className="mr-1" />
                {formatLastUpdated(tool.lastUpdated)}
              </span>
            </div>
          </div>
          <span 
            className={`text-xs px-2 py-1 rounded-full ${getCategoryColorClass(tool.category)}`}
          >
            {getCategoryLabel(tool.category)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{tool.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map(tag => (
            <Link 
              key={tag} 
              to={`/tags/${tag}`}
              className="bg-[#E3F5F5] text-[#67A2A8] text-xs px-2 py-1 rounded-full flex items-center transition-colors hover:bg-[#67A2A8] hover:text-white"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </Link>
          ))}
          {tool.tags.length > 3 && (
            <span className="text-xs text-gray-500 flex items-center">
              +{tool.tags.length - 3} más
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <span className={`text-sm ${tool.isFree ? 'text-green-600' : (tool.hasFreeTier ? 'text-amber-600' : 'text-rose-600')}`}>
            {tool.isFree ? 'Gratis' : (tool.hasFreeTier ? 'Tier gratuito' : 'De pago')}
          </span>
          
          <div className="flex gap-2">
            {/* Quick action buttons */}
            <button 
              onClick={() => onSave?.(tool.id)} 
              className="p-1.5 rounded-full text-gray-500 hover:text-[#67A2A8] hover:bg-[#E3F5F5] transition-colors"
              title="Guardar"
            >
              <BookmarkPlus size={16} />
            </button>
            <button 
              onClick={() => onShare?.(tool)} 
              className="p-1.5 rounded-full text-gray-500 hover:text-[#67A2A8] hover:bg-[#E3F5F5] transition-colors"
              title="Compartir"
            >
              <Share2 size={16} />
            </button>
            <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-3 py-1.5 bg-[#67A2A8] text-white rounded-md hover:bg-[#9CD1D4] transition-colors text-sm font-medium"
            >
              Visitar <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;