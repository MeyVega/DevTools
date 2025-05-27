import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowLeft, 
  ExternalLink, 
  BookmarkPlus, 
  Share2, 
  Calendar, 
  Tag as TagIcon,
  Check,
  Github,
  Info,
  FileText,
  Monitor
} from 'lucide-react';
import { Tool, getCategoryLabel, getCategoryColorClass } from '../data/tools';
import { formatLastUpdated } from '../utils/dateUtils';
import { isToolSaved, toggleSavedTool } from '../utils/storage';

interface ToolDetailHeaderProps {
  tool: Tool;
  onSave?: (toolId: string) => void;
  onShare?: (tool: Tool) => void;
  className?: string;
}

const ToolDetailHeader: React.FC<ToolDetailHeaderProps> = ({
  tool,
  onSave,
  onShare,
  className = ''
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(isToolSaved(tool.id));
  const [isShared, setIsShared] = useState<boolean>(false);
  
  // Manejar guardado de herramienta
  const handleSave = () => {
    const newSavedState = onSave ? onSave(tool.id) : toggleSavedTool(tool.id) || false;
    setIsSaved(newSavedState as boolean);
    
    // Mostrar feedback al usuario
    const message = newSavedState ? 'Herramienta guardada' : 'Herramienta eliminada de guardados';
    
    // Aquí podrías mostrar una notificación toast o similar
    console.log(message);
  };
  
  // Manejar compartir
  const handleShare = () => {
    if (onShare) {
      onShare(tool);
    } else {
      // Implementación de compartir por defecto
      if (navigator.share) {
        navigator.share({
          title: tool.name,
          text: tool.description,
          url: window.location.href
        }).then(() => {
          setIsShared(true);
          setTimeout(() => setIsShared(false), 2000);
        }).catch(err => console.error('Error sharing', err));
      } else {
        // Fallback para navegadores que no soportan Web Share API
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            setIsShared(true);
            setTimeout(() => setIsShared(false), 2000);
          })
          .catch(err => console.error('Error copying', err));
      }
    }
  };
  
  return (
    <div className={`${className}`}>
      {/* Navegación de regreso */}
      <div className="mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver al catálogo
        </Link>
      </div>
      
      {/* Imagen de portada (condicional) */}
      {tool.image && (
        <div className="relative h-60 sm:h-80 md:h-96 overflow-hidden rounded-xl mb-6">
          <img 
            src={tool.image} 
            alt={tool.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Etiquetas superpuestas en la imagen */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {/* Categoría */}
            <Link 
              to={`/category/${tool.category}`}
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColorClass(tool.category)}`}
            >
              {getCategoryLabel(tool.category)}
            </Link>
            
            {/* Indicador de gratis/premium */}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              tool.isFree 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' 
                : tool.hasFreeTier 
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300'
            }`}>
              {tool.isFree ? 'Gratis' : (tool.hasFreeTier ? 'Tier gratuito' : 'De pago')}
            </span>
            
            {/* Etiqueta de nuevo (si aplica) */}
            {tool.isNew && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Nuevo
              </span>
            )}
            
            {/* Etiqueta de destacado (si aplica) */}
            {tool.isFeatured && (
              <span className="bg-amber-400 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                Destacado
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Cabecera con información de la herramienta */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {tool.name}
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            {tool.description}
          </p>
          
          {/* Meta información */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            {/* Valoración */}
            {tool.stars && (
              <div className="flex items-center">
                <Star size={16} className="text-amber-500 fill-amber-500 mr-1" />
                <span>{tool.stars.toFixed(1)}</span>
              </div>
            )}
            
            {/* Última actualización */}
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{formatLastUpdated(tool.lastUpdated)}</span>
            </div>
            
            {/* Link a GitHub si existe */}
            {tool.githubUrl && (
              <a 
                href={tool.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#67A2A8] dark:hover:text-[#9CD1D4] transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>GitHub</span>
              </a>
            )}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tool.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/tags/${tag}`}
                className="bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4] text-xs px-3 py-1.5 rounded-full flex items-center transition-colors hover:bg-[#67A2A8] hover:text-white dark:hover:bg-[#67A2A8]/40"
              >
                <TagIcon size={12} className="mr-1" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Panel lateral con acciones */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:min-w-[240px] md:w-[240px]">
          {/* Botón principal de visita */}
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#67A2A8] hover:bg-[#9CD1D4] text-white font-medium px-5 py-3 rounded-lg flex items-center justify-center transition-colors shadow-sm"
          >
            Visitar sitio oficial
            <ExternalLink size={16} className="ml-2" />
          </a>
          
          {/* Botón de documentación si existe */}
          {tool.documentationUrl && (
            <a 
              href={tool.documentationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium px-5 py-3 rounded-lg flex items-center justify-center transition-colors shadow-sm"
            >
              Ver documentación
              <FileText size={16} className="ml-2" />
            </a>
          )}
          
          {/* Botones de acción secundarios */}
          <div className="flex gap-2 md:mt-2">
            {/* Botón de guardar */}
            <button 
              onClick={handleSave}
              className={`flex-1 border ${
                isSaved 
                  ? 'border-[#67A2A8] text-[#67A2A8] bg-[#E3F5F5] dark:border-[#9CD1D4] dark:text-[#9CD1D4] dark:bg-[#67A2A8]/20' 
                  : 'border-gray-300 text-gray-700 hover:border-[#67A2A8] hover:text-[#67A2A8] dark:border-gray-600 dark:text-gray-300 dark:hover:border-[#9CD1D4] dark:hover:text-[#9CD1D4]'
              } rounded-lg py-2 flex items-center justify-center transition-colors`}
              aria-label={isSaved ? 'Eliminar de guardados' : 'Guardar herramienta'}
            >
              {isSaved ? (
                <>
                  <Check size={16} className="mr-1.5" />
                  Guardado
                </>
              ) : (
                <>
                  <BookmarkPlus size={16} className="mr-1.5" />
                  Guardar
                </>
              )}
            </button>
            
            {/* Botón de compartir */}
            <button 
              onClick={handleShare}
              className={`flex-1 border ${
                isShared 
                  ? 'border-green-500 text-green-500 bg-green-50 dark:border-green-400 dark:text-green-400 dark:bg-green-900/20' 
                  : 'border-gray-300 text-gray-700 hover:border-[#67A2A8] hover:text-[#67A2A8] dark:border-gray-600 dark:text-gray-300 dark:hover:border-[#9CD1D4] dark:hover:text-[#9CD1D4]'
              } rounded-lg py-2 flex items-center justify-center transition-colors`}
              aria-label="Compartir herramienta"
            >
              {isShared ? (
                <>
                  <Check size={16} className="mr-1.5" />
                  Copiado
                </>
              ) : (
                <>
                  <Share2 size={16} className="mr-1.5" />
                  Compartir
                </>
              )}
            </button>
          </div>
          
          {/* Recuadro de características (opcional) */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 mt-4">
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              <Info size={16} className="mr-1.5 text-[#67A2A8] dark:text-[#9CD1D4]" />
              Información
            </h3>
            
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Categoría:</span>
                <Link 
                  to={`/category/${tool.category}`} 
                  className="text-[#67A2A8] dark:text-[#9CD1D4] hover:underline"
                >
                  {getCategoryLabel(tool.category)}
                </Link>
              </li>
              
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Precio:</span>
                <span className={tool.isFree ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}>
                  {tool.isFree ? 'Gratis' : (tool.hasFreeTier ? 'Freemium' : 'De pago')}
                </span>
              </li>
              
              {tool.authorName && (
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Autor:</span>
                  <span className="text-gray-800 dark:text-gray-200">{tool.authorName}</span>
                </li>
              )}
              
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plataforma:</span>
                <span className="text-gray-800 dark:text-gray-200">Web</span>
              </li>
              
              {/* Usar para una demo si existe */}
              <li className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#67A2A8] dark:text-[#9CD1D4] hover:text-[#9CD1D4] dark:hover:text-[#E3F5F5] transition-colors flex items-center justify-center w-full"
                >
                  <Monitor size={14} className="mr-1.5" />
                  Ver demostración
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailHeader;