import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import NewsletterSignup from '../components/NewsletterSignup';
import { Twitter, Github, Mail, Heart, Code, Users, Send, CheckCircle, BookOpen } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';

const AboutPage: React.FC = () => {
  const analytics = useAnalytics();

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'About Page'
  });

  // Registrar vista de página solo al montar el componente
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Array de dependencias vacío para ejecutar solo al montar

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-16">
  {/* Contenedor principal con el estilo "Cielo Suave" */}
  <div className="relative overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
    
    {/* Capas de fondo: Gradiente + Luz + Textura */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-200 dark:from-sky-900 dark:via-cyan-900 dark:to-blue-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-white/30 to-transparent blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.07]"></div>
    </div>

    {/* Contenido centrado con colores y estilos adaptables */}
    <div className="relative z-10 py-12 px-4 sm:px-8 md:py-14 max-w-3xl mx-auto text-center">
      
      {/* Título con el estilo final */}
      <h1 className="text-2xl md:text-3xl font-bold text-sky-900 dark:text-white dark:drop-shadow-md mb-4 animate-fade-in">
        Acerca de MayTools
      </h1>
      
      {/* Párrafo con el estilo final */}
      <p className="text-base md:text-lg text-sky-800/90 dark:text-white/90 dark:drop-shadow-sm mb-8 max-w-2xl mx-auto animate-fade-in delay-100 leading-relaxed">
        Una colección cuidadosamente seleccionada de herramientas para desarrolladores, diseñada para ayudarte a encontrar los recursos perfectos para tu flujo de trabajo.
      </p>
      
      {/* Botón con el nuevo estilo de "llamada a la acción principal" */}
      <div className="animate-fade-in delay-200">
        <Link
          to="/categories"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition-all duration-300 shadow-sm"
        >
          Explorar Herramientas
        </Link>
      </div>

    </div>
  </div>
</section>


      {/* Nuestra Misión */}
      <section className="mb-16 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-5 heading-decorated">
            Nuestra Misión
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            En MayTools, nuestra misión es simplificar la búsqueda de herramientas de desarrollo al reunir los mejores recursos en un solo lugar, bien organizado y fácil de explorar.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Creemos que el tiempo de los desarrolladores es valioso y no debería desperdiciarse en largas búsquedas. Por eso creamos esta plataforma: para ayudarte a descubrir, comparar y elegir las mejores herramientas para tu flujo de trabajo.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Cada herramienta ha sido cuidadosamente seleccionada y categorizada para asegurar que encuentres exactamente lo que necesitas, ya sea en frontend, backend, DevOps o cualquier otra área del desarrollo.
          </p>
        </div>
      </section>


      {/* Valores y Características */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center heading-decorated mx-auto">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<CheckCircle className="text-green-500" />}
              title="Calidad sobre Cantidad"
              description="No incluimos todas las herramientas existentes, sino solo las mejores. Cada entrada en nuestro catálogo ha pasado por un proceso de revisión para garantizar su utilidad y calidad."
            />

            <FeatureCard
              icon={<Users className="text-blue-500" />}
              title="Centrado en la Comunidad"
              description="Valoramos el feedback de nuestra comunidad y actualizamos constantemente nuestro catálogo basado en las recomendaciones y experiencias reales de los desarrolladores."
            />

            <FeatureCard
              icon={<Code className="text-purple-500" />}
              title="Por Desarrolladores, Para Desarrolladores"
              description="Somos desarrolladores que entendemos los desafíos diarios de nuestro trabajo. Creamos este recurso pensando en lo que nos hubiera gustado tener a nosotros mismos."
            />

            <FeatureCard
              icon={<Heart className="text-red-500" />}
              title="Código Abierto y Transparente"
              description="Creemos en la transparencia y la colaboración. Por eso, nuestro proyecto es de código abierto y damos crédito a todas las herramientas y sus creadores."
            />
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="mb-16 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 heading-decorated">
            Nuestra Historia
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            MayTools nació de la por la falta de un recurso centralizado y bien organizado para descubrir herramientas de desarrollo. Como desarrolladores, pasábamos demasiado tiempo buscando la herramienta adecuada para cada tarea, navegando por múltiples blogs, repositorios y sitios web.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Decidimos crear la solución que nos hubiera gustado tener: un catálogo completo de herramientas de desarrollo, organizado por categorías, con información clara y concisa sobre cada una, permitiendo comparar y elegir rápidamente la más adecuada para cada necesidad.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Lo que comenzó como un proyecto personal ha crecido gracias a las contribuciones de la comunidad con creaciones de nuevas herramientas, seguimos mejorando y expandiendo nuestro catálogo cada día para ofrecer el mejor recurso posible a desarrolladores de habla hispana.
          </p>
        </div>
      </section>

      {/* El Equipo */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center heading-decorated mx-auto">
            Conócenos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <TeamMemberCard
              name="Mery V."
              role="Fundadora & Desarrolladora"
              image="/img/tools/may.png"
              githubUrl="https://github.com/MaySpaceDu/maydev-tools"
              twitterUrl="https://x.com/MaySpacedu"
              blogUrl="https://mayblog-sooty.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Contribuir */}
      <section className="mb-16">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Contribuye al Proyecto
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              MayTools Catalog es un proyecto de código abierto y damos la bienvenida a las contribuciones de la comunidad. Hay varias formas en las que puedes contribuir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <Send className="h-8 w-8 text-[#67A2A8] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Sugerir Herramientas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ¿Conoces una herramienta genial que deberíamos incluir? Ayúdanos a expandir nuestro catálogo.
                </p>
                <Link
                  to="/suggest"
                  className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] font-medium"
                >
                  Sugerir herramienta →
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <Github className="h-8 w-8 text-[#67A2A8] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Contribuir al Código</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ¿Eres desarrollador? Puedes contribuir al código, reportar bugs o sugerir mejoras en GitHub.
                </p>
                <a
                  href="https://github.com/MaySpaceDu/maydev-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#67A2A8] hover:text-[#9CD1D4] dark:text-[#9CD1D4] dark:hover:text-[#E3F5F5] font-medium"
                >
                  Ver en GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Newsletter */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Contacto */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Contacto
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ¿Tienes preguntas, sugerencias o simplemente quieres saludar? No dudes en ponerte en contacto con nosotros.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:info@mayspacedev.com"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#67A2A8] dark:hover:text-[#9CD1D4] transition-colors"
            >
              <Mail className="mr-3 h-5 w-5" />
              info@mayspacedev.com
            </a>

            <a
              href="https://twitter.com/mayspacede"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#67A2A8] dark:hover:text-[#9CD1D4] transition-colors"
            >
              <Twitter className="mr-3 h-5 w-5" />
              @MaySpacedu
            </a>

            <a
              href="https://github.com/MaySpaceDu/maydev-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#67A2A8] dark:hover:text-[#9CD1D4] transition-colors"
            >
              <Github className="mr-3 h-5 w-5" />
              github.com/MaySpaceDu/May-dev-tools.git
            </a>

            <a
              href="https://www.patreon.com/c/MaySpace"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#67A2A8] dark:hover:text-[#9CD1D4] transition-colors"
            >
              <Heart className="mr-3 h-5 w-5" />
              Apóyanos con un corazón
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterSignup
          title="Mantente Actualizado"
          description="Suscríbete a nuestro newsletter para recibir las últimas actualizaciones sobre nuevas herramientas y recursos para desarrolladores."
        />
      </section>
    </Layout>
  );
};

// Componente para tarjeta de característica
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in">
      <div className="h-12 w-12 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Componente para tarjeta de miembro del equipo
interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  githubUrl?: string;
  twitterUrl?: string;
  blogUrl?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image, githubUrl, twitterUrl, blogUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 animate-fade-in">
      <div className="h-48 overflow-hidden bg-[#E3F5F5] dark:bg-[#67A2A8]/20 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800"
          onError={(e) => {
            // Fallback para imagen no disponible
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/150?text=' + name.charAt(0);
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{role}</p>

        <div className="flex space-x-3">
          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
              aria-label={`Twitter de ${name}`}
            >
              <Twitter size={18} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={`GitHub de ${name}`}
            >
              <Github size={18} />
            </a>
          )}

          {blogUrl && (
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;