import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  userId: string;
}

interface EmailJSResponse {
  isLoading: boolean;
  error: string | null;
  sendEmail: (templateParams: Record<string, unknown>) => Promise<void>;
}

export const useEmailJS = (config?: Partial<EmailJSConfig>): EmailJSResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultConfig: EmailJSConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    userId: import.meta.env.VITE_EMAILJS_USER_ID,
  };

  const finalConfig = { ...defaultConfig, ...config };

  const sendEmail = async (templateParams: Record<string, unknown>) => {
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        finalConfig.serviceId,
        finalConfig.templateId,
        templateParams,
        finalConfig.userId
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el email');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, sendEmail };
}; 