import React from 'react';
import { Tool, Category } from '../data/tools';
import { Database, Code2, Box, Users, Sparkles, Clock, Tag, Award } from 'lucide-react';

interface StatsSectionProps {
  tools: Tool[];
  categories: Category[];
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  tools, 
  categories,
  className = ''
}) => {
  // Cálculos para las estadísticas
  const totalTools = tools.length;
  const totalFreeTools = tools.filter(tool => tool.isFree).length;
  const freePercentage = Math.round((totalFreeTools / totalTools) * 100);
  const newTools = tools.filter(tool => tool.isNew).length;
  const featuredTools = tools.filter(tool => tool.isFeatured).length;
  
  // Obtener la categoría más popular
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = tools.filter(tool => tool.category === category).length;
    return acc;
  }, {} as Record<Category, number>);
  
  const mostPopularCategory = Object.entries(categoryCount)
    .sort(([, countA], [, countB]) => countB - countA)[0][0];
  
  // Todas las etiquetas
  const allTags = tools.flatMap(tool => tool.tags);
  const uniqueTags = new Set(allTags).size;
  
  // Stats a mostrar
  const stats = [
    {
      label: 'Herramientas totales',
      //value: totalTools,
      value: '+100',
      icon: <Box className="w-6 h-6 text-blue-500" />,
      description: 'Recursos cuidadosamente seleccionados'
    },
    {
      label: 'Categorías',
      value: categories.length,
      icon: <Database className="w-6 h-6 text-purple-500" />,
      description: 'Organizadas por especialidad'
    },
    {
      label: 'Herramientas gratuitas',
      value: `${freePercentage}%`,
      icon: <Code2 className="w-6 h-6 text-green-500" />,
      description: `${totalFreeTools} herramientas sin costo`
    },
    {
      label: 'Usuarios mensuales',
      value: '15K+',
      icon: <Users className="w-6 h-6 text-amber-500" />,
      description: 'Comunidad en crecimiento'
    }
  ];
  
  // Segunda fila de stats (opcional)
  const additionalStats = [
    {
      label: 'Nuevas adiciones',
      value: newTools,
      icon: <Clock className="w-6 h-6 text-teal-500" />,
      description: 'Añadidas este mes'
    },
    {
      label: 'Tags únicos',
      value: uniqueTags,
      icon: <Tag className="w-6 h-6 text-indigo-500" />,
      description: 'Para búsqueda precisa'
    },
    {
      label: 'Herramientas destacadas',
      value: featuredTools,
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      description: 'Selección premium'
    },
    {
      label: 'Categoría más popular',
      value: mostPopularCategory as string,
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      description: `${categoryCount[mostPopularCategory as Category]} herramientas`
    }
  ];

  return (
    <section className={`${className}`}>
      {/* Primera fila de stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 
                       hover:shadow-lg hover:scale-105 hover:border-[#67A2A8] dark:hover:border-[#9CD1D4] 
                       transition-all duration-300 ease-in-out cursor-pointer group"
          >
            <div className="flex items-center mb-2">
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-[#67A2A8] dark:group-hover:text-[#9CD1D4] transition-colors">
                {stat.label}
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#67A2A8] dark:group-hover:text-[#9CD1D4] transition-colors">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Segunda fila de stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {additionalStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 
                       hover:shadow-lg hover:scale-105 hover:border-[#67A2A8] dark:hover:border-[#9CD1D4] 
                       transition-all duration-300 ease-in-out cursor-pointer group"
          >
            <div className="flex items-center mb-2">
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-[#67A2A8] dark:group-hover:text-[#9CD1D4] transition-colors">
                {stat.label}
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#67A2A8] dark:group-hover:text-[#9CD1D4] transition-colors">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;