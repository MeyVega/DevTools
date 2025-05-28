import { useState } from 'react';
import useAnalytics from './useAnalytics';
import { ShareEventParams } from '../types/analytics';

interface ShareOptions {
  title: string;
  text?: string;
  url?: string;
  source: string;
}

interface TooltipState {
  show: boolean;
  message: string;
}

export const useShare = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({ show: false, message: '' });
  const analytics = useAnalytics() ?? { trackShare: () => {} };

  const showTooltip = (message: string) => {
    setTooltip({ show: true, message });
    setTimeout(() => setTooltip({ show: false, message: '' }), 2000);
  };

  const copyToClipboard = async (url: string) => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      return true;
    } catch {
      return false;
    }
  };

  const share = async ({ title, text, url = window.location.href, source }: ShareOptions) => {
    const params: ShareEventParams = {
      method: 'share_button',
      source,
      success: false
    };

    try {
      // Web Share API si está disponible
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title, text, url });
        showTooltip('¡Compartido con éxito!');
        analytics.trackShare(url, title, { ...params, method: 'web_share_api', success: true });
        return true;
      }

      // Fallback al portapapeles
      const success = await copyToClipboard(url);
      if (success) {
        showTooltip('¡Enlace copiado al portapapeles!');
        analytics.trackShare(url, title, { ...params, method: 'clipboard_copy', success: true });
      } else {
        showTooltip('No se pudo copiar el enlace. Intenta manualmente.');
        analytics.trackShare(url, title, { ...params, method: 'clipboard_copy', success: false });
      }
      return success;
    } catch (error) {
      console.error('Error sharing:', error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      showTooltip('No se pudo compartir. Intenta de nuevo.');
      analytics.trackShare(url, title, {
        ...params,
        method: 'error',
        success: false,
        error: message
      });
      return false;
    }
  };

  return {
    share,
    tooltip
  };
};
