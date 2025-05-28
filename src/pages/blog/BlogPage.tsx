import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import BlogPostCard from '../../components/blog/BlogPostCard';
import { getLatestPosts, getPostsByType, BlogPostType, BlogPost } from '../../data/blog';
import { ArrowRight, Filter } from 'lucide-react';
import useAnalytics from '../../hooks/useAnalytics';
import { EventType } from '../../utils/analytics';

type TabType = BlogPostType | 'all';

const BlogPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTab = searchParams.get('type') as TabType | null;
  const [activeTab, setActiveTab] = useState<TabType>(
    initialTab && ['all', 'tutorial', 'review', 'news', 'tip'].includes(initialTab)
      ? initialTab
      : 'all'
  );
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [postsByType, setPostsByType] = useState<{
    tutorials: BlogPost[];
    reviews: BlogPost[];
  }>({
    tutorials: [],
    reviews: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const analytics = useAnalytics();
  const analyticsRef = useRef(analytics);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        setAllPosts(getLatestPosts());
        setPostsByType({
          tutorials: getPostsByType('tutorial', 3),
          reviews: getPostsByType('review', 3),
        });
        analyticsRef.current.trackPageView('Blog');
      } catch (err) {
        console.error('Error cargando posts:', err);
        setError('No se pudieron cargar los artículos');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeTab === 'all') {
      return getLatestPosts();
    }
    return getPostsByType(activeTab);
  }, [activeTab]);

  useEffect(() => {
    setAllPosts(filteredPosts);
  }, [filteredPosts]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    navigate(`/blog${tab === 'all' ? '' : `?type=${tab}`}`, { replace: true });

    analyticsRef.current.trackEvent(EventType.FILTER, {
      page: 'blog',
      filter_type: 'tab',
      filter_value: tab,
    });
  };

  const tabTitles: Record<TabType, string> = {
    all: 'Últimos Artículos',
    tutorial: 'Tutoriales',
    review: 'Comparativas',
    news: 'Noticias',
    tip: 'Tips y Consejos',
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#67A2A8]"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-100 dark:border-gray-700">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center px-4 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 rounded-xl overflow-hidden shadow-sm relative">
          <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

          <div className="relative py-12 px-4 sm:px-8 md:py-14 max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-sm mb-4 animate-fade-in">
              Blog de DevTools Catalog
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto animate-fade-in delay-100 leading-relaxed">
              Tutoriales, comparativas y consejos sobre herramientas que elevan tu flujo de trabajo como desarrollador.
            </p>
          </div>
        </div>
      </section>


      {/* Filtros */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h3 className="font-semibold text-gray-900 dark:text-white">Filtros</h3>
          <button
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
            aria-label={showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
          >
            <Filter size={16} className="mr-2" />
            {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
          </button>
        </div>
        <div
          className={`flex flex-wrap gap-2 md:flex md:space-x-2 ${showFilters ? 'block' : 'hidden md:block'
            }`}
        >
          <FilterTab
            isActive={activeTab === 'all'}
            onClick={() => handleTabChange('all')}
            label="Todos"
          />
          <FilterTab
            isActive={activeTab === 'tutorial'}
            onClick={() => handleTabChange('tutorial')}
            label="Tutoriales"
          />
          <FilterTab
            isActive={activeTab === 'review'}
            onClick={() => handleTabChange('review')}
            label="Comparativas"
          />
          <FilterTab
            isActive={activeTab === 'news'}
            onClick={() => handleTabChange('news')}
            label="Noticias"
          />
          <FilterTab
            isActive={activeTab === 'tip'}
            onClick={() => handleTabChange('tip')}
            label="Tips y Consejos"
          />
        </div>
      </section>

      {/* Lista de posts filtrados */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {tabTitles[activeTab]}
        </h2>

        {allPosts.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              No hay artículos disponibles en esta categoría.
            </p>
            <button
              onClick={() => handleTabChange('all')}
              className="mt-4 text-[#67A2A8] dark:text-[#9CD1D4] font-medium hover:underline"
            >
              Ver todos los artículos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <BlogPostCard
                key={post.id}
                post={post}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() =>
                  analyticsRef.current.trackEvent(EventType.POST_VIEW, {
                    post_id: post.id,
                    post_title: post.title,
                    source: 'blog_page',
                  })
                }
              />
            ))}
          </div>
        )}
      </section>

      {/* Secciones destacadas */}
      {activeTab === 'all' && (
        <>
          {postsByType.tutorials.length > 0 && (
            <section className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Tutoriales Destacados
                </h2>
                <Link
                  to="/blog?type=tutorial"
                  className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-sm font-medium"
                  onClick={() => handleTabChange('tutorial')}
                  aria-label="Ver todos los tutoriales"
                >
                  Ver todos
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {postsByType.tutorials.map((post, index) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() =>
                      analyticsRef.current.trackEvent(EventType.POST_VIEW, {
                        post_id: post.id,
                        post_title: post.title,
                        source: 'blog_page_tutorials',
                      })
                    }
                  />
                ))}
              </div>
            </section>
          )}

          {postsByType.reviews.length > 0 && (
            <section className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Comparativas
                </h2>
                <Link
                  to="/blog?type=review"
                  className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] flex items-center text-sm font-medium"
                  onClick={() => handleTabChange('review')}
                  aria-label="Ver todas las comparativas"
                >
                  Ver todas
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {postsByType.reviews.map((post, index) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() =>
                      analyticsRef.current.trackEvent(EventType.POST_VIEW, {
                        post_id: post.id,
                        post_title: post.title,
                        source: 'blog_page_reviews',
                      })
                    }
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿Quieres más contenido?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter para recibir las últimas actualizaciones, tutoriales y comparativas directamente en tu bandeja de entrada.
          </p>
          <Link
            to="/subscribe"
            className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
            onClick={() =>
              analyticsRef.current.trackButtonClick('subscribe_newsletter', {
                from: 'blog_page',
              })
            }
          >
            Suscribirse
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface FilterTabProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const FilterTab: React.FC<FilterTabProps> = ({ isActive, onClick, label }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${isActive
          ? 'bg-[#E3F5F5] text-[#67A2A8] dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4]'
          : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      onClick={onClick}
      aria-current={isActive ? 'true' : 'false'}
      aria-label={`Filtrar por ${label}`}
    >
      {label}
    </button>
  );
};

export default BlogPage;