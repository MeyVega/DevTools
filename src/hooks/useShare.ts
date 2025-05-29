import { useState } from 'react';
import { ShareEventParams } from '../types/analytics';
import useAnalytics from './useAnalytics';

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
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
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

  const share = async ({ title, url = window.location.href, source }: ShareOptions) => {
    const params: ShareEventParams = {
      method: 'clipboard_copy',
      source,
      success: false
    };

    const success = await copyToClipboard(url);
    if (success) {
      showTooltip('¡Enlace copiado al portapapeles!');
      analytics.trackShare(url, title, { ...params, success: true });
    } else {
      showTooltip('No se pudo copiar el enlace.');
      analytics.trackShare(url, title, { ...params, success: false });
    }

    return success;
  };

  return {
    share,
    tooltip
  };
};
