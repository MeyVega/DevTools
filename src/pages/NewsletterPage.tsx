import React, { useState, useEffect } from 'react';
import { Mail, Send, Check, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { useEmailJS } from '../hooks/useEmailJS';
import useAnalytics from '../hooks/useAnalytics';
import { EventType } from '../utils/analytics';

interface NewsletterFormState {
  name: string;
  email: string;
}

const NewsletterPage: React.FC = () => {
  const analytics = useAnalytics();
  const { sendEmail, isLoading, error } = useEmailJS();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<NewsletterFormState>({
    name: '',
    email: ''
  });

  useEffect(() => {
    analytics.trackPageView('Newsletter Page');
  }, [analytics]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        subject: 'Nueva suscripción al newsletter',
        message: `Nueva suscripción al newsletter:\n\nNombre: ${formData.name}\nEmail: ${formData.email}`
      });
      
      setIsSuccess(true);
      setFormData({ name: '', email: '' });
      analytics.trackEvent(EventType.BUTTON_CLICK, { action: 'newsletter_subscribe', status: 'success' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      analytics.trackEvent(EventType.BUTTON_CLICK, { action: 'newsletter_subscribe', status: 'error' });
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Mail size={32} className="text-[#67A2A8] mr-4" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Newsletter</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Suscríbete a nuestro newsletter y mantente al día con las últimas herramientas y recursos para desarrolladores.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          {isSuccess ? (
            <div className="flex items-center p-4 mb-6 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
              <Check className="h-5 w-5 mr-2" />
              <span>¡Te has suscrito con éxito! Pronto recibirás nuestro newsletter.</span>
            </div>
          ) : error ? (
            <div className="flex items-center p-4 mb-6 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>Error al procesar la suscripción. Por favor, intenta nuevamente.</span>
            </div>
          ) : null}

          {/* Beneficios */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">¿Qué incluye nuestro newsletter?</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-[#67A2A8] mr-2 flex-shrink-0" />
                Nuevas herramientas y recursos cada semana
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-[#67A2A8] mr-2 flex-shrink-0" />
                Tips y tutoriales exclusivos
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-[#67A2A8] mr-2 flex-shrink-0" />
                Actualizaciones sobre tendencias en desarrollo
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-[#67A2A8] mr-2 flex-shrink-0" />
                Sin spam, solo contenido de calidad
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#67A2A8] hover:bg-[#9CD1D4]'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                    Suscribiendo...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Suscribirse
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Información adicional */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsletterPage;