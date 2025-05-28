import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blog';
import { formatDate } from '../../utils/dateUtils';
import { getToolById } from '../../data/tools';
import { File, Bookmark, Calendar } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
  style?: React.CSSProperties; // Para soportar animaciones
  onClick?: () => void; // Para manejar eventos de clic (analytics)
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, style, onClick }) => {
  // Obtener el icono según el tipo de post
  const getPostIcon = () => {
    switch (post.type) {
      case 'tutorial':
        return <File className="text-blue-500" size={40} />;
      case 'review':
        return <Bookmark className="text-purple-500" size={40} />;
      case 'news':
        return <Calendar className="text-green-500" size={40} />;
      case 'tip':
        return <File className="text-amber-500" size={40} />;
      default:
        return <File className="text-gray-500" size={40} />;
    }
  };

  // Obtener la etiqueta según el tipo de post
  const getPostTypeLabel = () => {
    switch (post.type) {
      case 'tutorial':
        return 'Tutorial';
      case 'review':
        return 'Comparativa';
      case 'news':
        return 'Noticia';
      case 'tip':
        return 'Tip';
      default:
        return 'Artículo';
    }
  };

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in"
      style={style}
      onClick={onClick}
      aria-label={`Leer el artículo: ${post.title}`}
    >
      {post.coverImage ? (
        <div className="h-40 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-40 bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 flex items-center justify-center">
          {getPostIcon()}
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4] rounded-full">
            {getPostTypeLabel()}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(post.date)}
          </span>
        </div>

        <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {post.summary}
        </p>

        {post.relatedTools.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mt-3">
            {post.relatedTools.map((toolId) => {
              const tool = getToolById(toolId);
              return tool ? (
                <span
                  key={toolId}
                  className="text-xs px-2 py-1 bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4] rounded-full"
                >
                  {tool.name}
                </span>
              ) : null;
            })}
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogPostCard;