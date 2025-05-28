import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Shield, Lock, Eye } from 'lucide-react';
import useAnalytics from '../hooks/useAnalytics';

const PrivacyPage: React.FC = () => {
  const analytics = useAnalytics();

  // Usar useRef para mantener valores estables
  const config = useRef({
    pageName: 'Privacy Policy Page'
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
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 animate-fade-in delay-100 leading-relaxed max-w-2xl mx-auto">
            Cómo manejamos y protegemos tu información en DevTools
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="heading-decorated">Resumen de nuestra política</h2>
            <p>
              En DevTools, nos comprometemos a proteger tu privacidad y datos personales.
              Esta política explica cómo recopilamos, utilizamos y protegemos cualquier información
              que nos proporciones al utilizar nuestro sitio web.
            </p>

            <h2 className="heading-decorated mt-10">Información que recopilamos</h2>
            <p>
              Podemos recopilar la siguiente información:
            </p>
            <ul>
              <li>Información básica de contacto, como tu nombre y dirección de correo electrónico, cuando te suscribes a nuestro newsletter.</li>
              <li>Información sobre tus preferencias y herramientas guardadas, para mejorar tu experiencia con nuestro catálogo.</li>
              <li>Datos de uso anónimos que nos ayudan a entender cómo utilizas nuestro sitio.</li>
            </ul>

            <h2 className="heading-decorated mt-10">Cómo utilizamos tu información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul>
              <li>Personalizar tu experiencia en nuestro sitio web y recordar tus preferencias.</li>
              <li>Mejorar nuestro sitio web basándonos en la retroalimentación y el comportamiento de los usuarios.</li>
              <li>Enviar correos electrónicos periódicos con actualizaciones sobre nuevas herramientas o contenido, si has dado tu consentimiento.</li>
              <li>Administrar concursos, promociones u otras características del sitio.</li>
            </ul>

            <h2 className="heading-decorated mt-10">Seguridad</h2>
            <p>
              Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información
              personal cuando la ingresas, envías o accedes a ella. Utilizamos encriptación para proteger
              información sensible transmitida en línea y almacenamos y protegemos tus datos en servidores seguros.
            </p>

            <h2 className="heading-decorated mt-10">Uso de cookies</h2>
            <p>
              Utilizamos cookies para comprender y guardar tus preferencias para futuras visitas,
              compilar datos agregados sobre el tráfico del sitio e interacción para ofrecer mejores
              experiencias y herramientas en el futuro. Puedes elegir que tu computadora te advierta
              cada vez que se envía una cookie, o puedes optar por desactivar todas las cookies
              a través de la configuración de tu navegador.
            </p>

            <h2 className="heading-decorated mt-10">Enlaces de terceros</h2>
            <p>
              Ocasionalmente, a nuestra discreción, podemos incluir o ofrecer productos o servicios
              de terceros en nuestro sitio. Estos sitios de terceros tienen políticas de privacidad
              separadas e independientes. Por lo tanto, no tenemos responsabilidad por el contenido
              y las actividades de estos sitios enlazados.
            </p>

            <h2 className="heading-decorated mt-10">Cambios a esta política</h2>
            <p>
              Cualquier cambio que podamos hacer a nuestra política de privacidad en el futuro
              se publicará en esta página. Te recomendamos que consultes periódicamente esta
              página para estar al tanto de cualquier cambio.
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
            Nuestro Compromiso con tu Privacidad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="text-blue-500" />}
              title="Protección de Datos"
              description="Utilizamos las mejores prácticas de seguridad para proteger tus datos personales y mantenerlos a salvo."
            />

            <FeatureCard
              icon={<Lock className="text-green-500" />}
              title="Conexiones Seguras"
              description="Nuestro sitio utiliza conexiones seguras (HTTPS) para cifrar toda la información que compartes con nosotros."
            />

            <FeatureCard
              icon={<Eye className="text-purple-500" />}
              title="Transparencia Total"
              description="Te explicamos claramente qué datos recopilamos y cómo los utilizamos, sin letra pequeña ni sorpresas."
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

export default PrivacyPage;