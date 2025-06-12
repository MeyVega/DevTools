import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllTags, getTagLabel, Tag, getTagColorClass } from '../data/tools';
import { Tag as TagIcon, ArrowRight } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';

const TagsPage: React.FC = () => {
  const tags = getAllTags();
  const analytics = useAnalytics();

  const config = useRef({
    pageName: 'Tags Page'
  });

  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#9EABE4] to-[#77FFD2] dark:from-[#9EABE4]/80 dark:to-[#77FFD2]/80 rounded-xl shadow-lg overflow-hidden">
          <div className="py-10 px-6 sm:px-10 md:py-14 max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Etiquetas de Herramientas
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Navega por herramientas agrupadas por etiquetas relevantes.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Tags */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.map((tag, index) => (
            <TagCard
              key={tag}
              tag={tag}
              onTagClick={() => {
                analytics.trackEvent(EventType.TAG_VIEW, { tag });
              }}
              delayIndex={index}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* Newsletter o CTA */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Si conoces una herramienta que debería estar en nuestro catálogo, no dudes en sugerirla.
          </p>
          <div className="flex justify-center">
            <Link
              to="/suggest"
              className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
              onClick={() => analytics.trackButtonClick('suggest_tool', { page: 'categories' })}
            >
              Sugerir herramienta
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface TagCardProps {
  tag: Tag;
  onTagClick: () => void;
  delayIndex: number;
}

const TagCard: React.FC<TagCardProps> = ({ tag, onTagClick, delayIndex }) => {
  const colorClass = getTagColorClass(tag);
  const delay = `delay-${Math.min(delayIndex * 100, 900)}`;

  return (
    <Link
      to={`/tag/${tag}`}
      className={`${colorClass} p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in ${delay}`}
      onClick={onTagClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <TagIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
          <h3 className="text-lg font-medium">
            {getTagLabel(tag)}
          </h3>
        </div>
        <ArrowRight size={16} className="text-[#67A2A8] dark:text-[#9CD1D4]" />
      </div>
    </Link>
  );
};

export default TagsPage;