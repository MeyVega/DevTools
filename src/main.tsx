import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { initAnalytics } from './utils/analytics';

// Importar estilos
import './index.css';
import './styles/animations.css';

// Inicializar analytics
initAnalytics({
  enabled: import.meta.env.PROD, 
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  debugMode: import.meta.env.DEV, 
});

// Mensaje de bienvenida
if (import.meta.env.DEV) {
  console.log(
    '%c🛠️ DevTools %cby MaySpaceDEV',
    'color: #67A2A8; font-size: 18px; font-weight: bold;',
    'color: #666; font-size: 12px;'
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Agregar future flags para eliminar las advertencias
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) { 
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}