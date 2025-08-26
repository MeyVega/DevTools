import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { FileText, Scale, LifeBuoy } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';

const TermsPage: React.FC = () => {
  const analytics = useAnalytics();

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'Terms of Service Page'
  });

  // Registrar vista de página solo al montar el componente
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12 px-4">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl py-12 px-6 md:px-10 max-w-4xl mx-auto text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 animate-fade-in delay-100 leading-relaxed max-w-2xl mx-auto">
            Normas y acuerdos para el uso de MayTools Catalog
          </p>
        </div>
      </section>


      {/* Contenido principal */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="heading-decorated">Bienvenido a MayTools Catalog</h2>
            <p>
              Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web
              de MayTools Catalog. Al acceder a este sitio web, asumimos que aceptas estos términos y
              condiciones en su totalidad. No continúes usando el sitio web si no estás de acuerdo con
              todos los términos y condiciones establecidos en esta página.
            </p>

            <h2 className="heading-decorated mt-10">Licencia</h2>
            <p>
              A menos que se indique lo contrario, MayTools Catalog y/o sus licenciantes poseen los derechos
              de propiedad intelectual de todo el material en MayTools Catalog. Todos los derechos de
              propiedad intelectual están reservados.
            </p>
            <p>
              Puedes ver y/o imprimir páginas desde el sitio web para tu uso personal sujeto a las
              restricciones establecidas en estos términos y condiciones.
            </p>

            <h3 className="mt-6">No debes:</h3>
            <ul>
              <li>Republicar material de MayTools Catalog</li>
              <li>Vender, alquilar o sublicenciar material de MayTools Catalog</li>
              <li>Reproducir, duplicar o copiar material de MayTools Catalog</li>
              <li>Redistribuir contenido de MayTools Catalog</li>
            </ul>

            <h2 className="heading-decorated mt-10">Hipervínculos a nuestro contenido</h2>
            <p>
              Las siguientes organizaciones pueden vincular a nuestro sitio web sin aprobación previa por escrito:
            </p>
            <ul>
              <li>Agencias gubernamentales</li>
              <li>Motores de búsqueda</li>
              <li>Organizaciones de noticias</li>
              <li>Distribuidores de directorios en línea</li>
            </ul>
            <p>
              Estas organizaciones pueden vincular a nuestra página de inicio, a publicaciones o a otra
              información del sitio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no
              implique falsamente patrocinio, respaldo o aprobación del vinculante y sus productos y/o
              servicios; y (c) encaje en el contexto del sitio del vinculante.
            </p>

            <h2 className="heading-decorated mt-10">Reserva de derechos</h2>
            <p>
              Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace
              particular a nuestro sitio web. Aprobamos los enlaces a nuestro sitio web, si el enlace
              no implica de ninguna manera respaldo, aprobación o patrocinio por parte nuestra.
            </p>

            <h2 className="heading-decorated mt-10">Limitación de responsabilidad</h2>
            <p>
              En ningún caso seremos responsables de ningún daño (incluyendo, sin limitación, daños por
              pérdida de datos o beneficios, o debido a interrupción del negocio) que surjan del uso o
              la incapacidad de usar los materiales en MayTools Catalog, incluso si MayTools Catalog o un
              representante autorizado ha sido notificado verbalmente o por escrito de la posibilidad de
              tales daños.
            </p>

            <h2 className="heading-decorated mt-10">Modificaciones</h2>
            <p>
              MayTools Catalog puede revisar estos términos de servicio del sitio web en cualquier momento
              sin previo aviso. Al usar este sitio web, aceptas estar vinculado a la versión actual de
              estos términos de servicio.
            </p>

            <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
              Última actualización: Mayo 2025
            </p>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center heading-decorated mx-auto">
            Nuestros Principios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="text-amber-500" />}
              title="Claridad"
              description="Nos esforzamos por mantener nuestros términos claros y accesibles, evitando jerga legal innecesaria."
            />

            <FeatureCard
              icon={<Scale className="text-red-500" />}
              title="Equidad"
              description="Creemos en un trato justo y equilibrado entre nuestro sitio y nuestros usuarios."
            />

            <FeatureCard
              icon={<LifeBuoy className="text-green-500" />}
              title="Soporte"
              description="Estamos aquí para ayudarte. Si tienes preguntas sobre estos términos, contáctanos."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Componente para tarjeta de característica con animación
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 
                  hover:shadow-lg hover:scale-105 hover:border-[#67A2A8] dark:hover:border-[#9CD1D4] 
                  transition-all duration-300 ease-in-out cursor-pointer group animate-fade-in">
      <div className="h-12 w-12 mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-[#67A2A8] dark:group-hover:text-[#9CD1D4] transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{description}</p>
    </div>
  );
};

export default TermsPage;