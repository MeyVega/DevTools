import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ToolCard from './ToolCard';
import { Tool, getFeaturedTools } from '../data/tools';

interface FeaturedToolsProps {
  tools?: Tool[];
  limit?: number;
  showTitle?: boolean;
  showViewAll?: boolean;
  className?: string;
  title?: string;
  onSaveTool?: (toolId: string) => void;
  onShareTool?: (tool: Tool) => void;
}

const FeaturedTools: React.FC<FeaturedToolsProps> = ({
  tools,
  limit = 3,
  showTitle = true,
  showViewAll = true,
  className = '',
  title = 'Herramientas Destacadas',
  onSaveTool,
  onShareTool
}) => {
  // Si no se proporcionan herramientas, obtenerlas del módulo de datos
  const featuredTools = tools || getFeaturedTools(limit);
  
  // Verificar si hay herramientas para mostrar
  if (featuredTools.length === 0) {
    return null;
  }
  
  return (
    <section className={`${className}`}>
      {showTitle && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
            <Sparkles size={24} className="mr-2 text-amber-500" />
            {title}
          </h2>
          
          {showViewAll && (
            <Link 
              to="/featured" 
              className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-sm font-medium"
              aria-label="Ver todas las herramientas destacadas"
            >
              Ver todas
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          )}
        </div>
      )}
      
      {/* Grid de herramientas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTools.map(tool => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            onSave={onSaveTool}
            onShare={onShareTool}
          />
        ))}
      </div>
      
      {/* Botón de ver más para móviles (opcional) */}
      {showViewAll && (
        <div className="mt-6 text-center md:hidden">
          <Link 
            to="/featured" 
            className="inline-block px-5 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors text-sm font-medium"
            aria-label="Ver todas las herramientas destacadas"
          >
            Ver todas las herramientas destacadas
          </Link>
        </div>
      )}
    </section>
  );
};

// Componente para mostrar una cuadrícula de herramientas en un formato más compacto
export const FeaturedToolsCompact: React.FC<FeaturedToolsProps> = ({
  tools,
  limit = 4,
  showTitle = true,
  showViewAll = true,
  className = '',
  title = 'Herramientas Destacadas',
}) => {
  // Si no se proporcionan herramientas, obtenerlas del módulo de datos
  const featuredTools = tools || getFeaturedTools(limit);
  
  // Verificar si hay herramientas para mostrar
  if (featuredTools.length === 0) {
    return null;
  }
  
  return (
    <section className={`${className}`}>
      {showTitle && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
            <Sparkles size={20} className="mr-2 text-amber-500" />
            {title}
          </h3>
          
          {showViewAll && (
            <Link 
              to="/featured" 
              className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-xs font-medium"
              aria-label="Ver todas las herramientas destacadas"
            >
              Ver más
              <ArrowUpRight size={14} className="ml-1" />
            </Link>
          )}
        </div>
      )}
      
      {/* Lista de herramientas en formato compacto */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {featuredTools.map((tool, index) => (
          <Link 
            key={tool.id}
            to={`/tool/${tool.id}`}
            className={`flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              index < featuredTools.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''
            }`}
          >
            {tool.image ? (
              <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 mr-3">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-full object-cover" 
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded bg-[#E3F5F5] dark:bg-[#67A2A8]/30 flex items-center justify-center text-[#67A2A8] dark:text-[#9CD1D4] flex-shrink-0 mr-3">
                {tool.name.charAt(0)}
              </div>
            )}
            
            <div className="flex-grow min-w-0">
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{tool.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{tool.description}</p>
            </div>
            
            <div className="flex-shrink-0 ml-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                tool.isFree 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
              }`}>
                {tool.isFree ? 'Gratis' : 'Premium'}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTools;