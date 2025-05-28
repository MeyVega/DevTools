import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { getPostBySlug, getPostsForTool, BlogPost } from '../../data/blog';
import { getToolById } from '../../data/tools';
import { formatDate } from '../../utils/dateUtils';
import { ArrowLeft, Share2, Calendar, Tag } from 'lucide-react';
import useAnalytics from '../../hooks/useAnalytics';
import BlogPostCard from '../../components/blog/BlogPostCard';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const analytics = useAnalytics();
  const analyticsRef = useRef(analytics);

  useEffect(() => {
    if (!slug) {
      setError('No se proporcionó un slug válido');
      setLoading(false);
      return;
    }

    const loadPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const blogPost = getPostBySlug(slug);
        if (!blogPost) {
          throw new Error('Artículo no encontrado');
        }

        setPost(blogPost);

        // Cargar posts relacionados
        if (blogPost.relatedTools.length > 0) {
          const toolId = blogPost.relatedTools[0]; // Usar la primera herramienta relacionada
          const related = getPostsForTool(toolId)
            .filter((p) => p.id !== blogPost.id) // Excluir el post actual
            .slice(0, 3); // Limitar a 3 posts relacionados
          setRelatedPosts(related);
        }

        // Registrar vista del post
        analyticsRef.current.trackPostView(blogPost.id, blogPost.title, {
          source: 'blog_post_page',
        });

        // Hacer scroll al inicio
        window.scrollTo(0, 0);
      } catch (err) {
        console.error('Error cargando el post:', err);
        setError('No se pudo cargar el artículo');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // Memoizar posts relacionados para evitar cálculos innecesarios
  const memoizedRelatedPosts = useMemo(() => relatedPosts, [relatedPosts]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#67A2A8]"></div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="py-12 max-w-4xl mx-auto text-center">
          <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-[#67A2A8] dark:text-[#9CD1D4] mb-3">
              Artículo no encontrado
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lo sentimos, no pudimos encontrar el artículo que estás buscando.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-colors"
              aria-label="Volver al blog"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Navegación */}
      <div className="mb-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-[#67A2A8] dark:text-gray-400 dark:hover:text-[#9CD1D4] text-sm transition-colors"
          aria-label="Volver al blog"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver al blog
        </Link>
      </div>

      {/* Artículo */}
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden mb-12">
        {/* Imagen de portada */}
        {post.coverImage && (
          <div className="h-64 md:h-80 overflow-hidden">
            <img
              src={post.coverImage}
              alt={`Imagen de portada de ${post.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {formatDate(post.date)}
            </div>

            <div>
              <span className="font-medium">Por:</span> {post.author}
            </div>

            <div className="ml-auto">
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Compartir artículo"
                onClick={() => {
                  navigator.share({
                    title: post.title,
                    url: window.location.href,
                  });
                  analyticsRef.current.trackShare(post.id, post.title, {
                    source: 'blog_post_page',
                  });
                }}
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Resumen */}
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-medium border-l-4 border-[#67A2A8] pl-4 py-2">
            {post.summary}
          </div>

          {/* Herramientas relacionadas */}
          {post.relatedTools.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Herramientas relacionadas:
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.relatedTools.map((toolId) => {
                  const tool = getToolById(toolId);
                  return tool ? (
                    <Link
                      key={toolId}
                      to={`/tool/${toolId}`}
                      className="text-sm px-3 py-1 bg-[#E3F5F5] text-[#67A2A8] hover:bg-[#9CD1D4]/20 dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4] dark:hover:bg-[#9CD1D4]/30 rounded-md transition-colors"
                      aria-label={`Ver herramienta ${tool.name}`}
                      onClick={() =>
                        analyticsRef.current.trackToolClick(toolId, tool.name, {
                          source: 'blog_post_page',
                        })
                      }
                    >
                      {tool.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Contenido */}
          <div className="prose dark:prose-invert prose-lg max-w-none mb-8">
            {/* Descomentar si usas react-markdown */}
            {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
            {/* Alternativa para texto plano */}
            <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-auto">
              {post.content}
            </pre>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <div className="flex items-center flex-wrap gap-2">
                <Tag size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    className="text-xs px-3 py-1 bg-[#E3F5F5] text-[#67A2A8] hover:bg-[#9CD1D4]/20 dark:bg-[#67A2A8]/20 dark:text-[#9CD1D4] dark:hover:bg-[#9CD1D4]/30 rounded-full transition-colors"
                    aria-label={`Filtrar artículos por la etiqueta ${tag}`}
                    onClick={() =>
                      analyticsRef.current.trackTagClick(tag, {
                        source: 'blog_post_page',
                      })
                    }
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Artículos relacionados */}
      {memoizedRelatedPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Artículos relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memoizedRelatedPosts.map((relatedPost, index) => (
              <BlogPostCard
                key={relatedPost.id}
                post={relatedPost}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() =>
                  analyticsRef.current.trackPostView(relatedPost.id, relatedPost.title, {
                    source: 'blog_post_page_related',
                  })
                }
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPostPage;