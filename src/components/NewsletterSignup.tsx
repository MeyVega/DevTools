import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
  buttonText?: string;
  placeholderText?: string;
  successMessage?: string;
  formSubmitEndpoint?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = 'Suscríbete a nuestro Newsletter',
  description = 'Recibe las últimas herramientas y recursos directamente en tu correo.',
  className = '',
  buttonText = 'Suscribirme',
  placeholderText = 'Tu correo electrónico',
  successMessage = '¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.',
  formSubmitEndpoint = 'https://formsubmit.co/ajax/mayspacede@gmail.com'
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validar email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor ingresa un correo electrónico válido');
      setIsLoading(false);
      return;
    }

    try {
      // Envío a FormSubmit
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: 'Nueva suscripción al newsletter',
          _template: 'table',
          _autoresponse: `Gracias por suscribirte a nuestro newsletter. Te mantendremos informado sobre las últimas herramientas para desarrolladores.`
        })
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        // Reset después de 3 segundos
        setTimeout(() => {
          setIsSubscribed(false);
        }, 3000);
      } else {
        setError('Ocurrió un error al suscribirte. Por favor intenta nuevamente.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Error de conexión. Por favor intenta más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <div className="flex items-center mb-4 text-[#4DA6B3] dark:text-[#67B9C4]">

          <Mail className="mr-2" size={24} />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      )}

      {description && (
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          {description}
        </p>
      )}

      {isSubscribed ? (
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start">
          <CheckCircle className="text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" size={20} />
          <p className="text-green-700 dark:text-green-300 text-sm">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="email"
                placeholder={placeholderText}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#67A2A8] dark:focus:ring-[#9CD1D4] bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
                value={email}
                onChange={handleEmailChange}
                disabled={isLoading}
                required
              />
            </div>

            {error && (
              <div className="flex items-center mt-2 text-red-500 dark:text-red-400">
                <AlertCircle size={16} className="mr-1" />
                <p className="text-xs">{error}</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="
  w-full 
  bg-[#4DA6B3] hover:bg-[#67B9C4] 
  text-white font-medium 
  py-3 px-4 rounded-lg 
  transition-colors 
  flex justify-center items-center 
  disabled:opacity-70 disabled:cursor-not-allowed
"

            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Enviando...
              </>
            ) : buttonText}
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            No enviamos spam. Puedes darte de baja en cualquier momento.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;