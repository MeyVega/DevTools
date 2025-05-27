import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; // Cambio aquí: eliminamos BrowserRouter
import { ThemeProvider } from './contexts/ThemeContext';
import { BookmarksProvider } from './contexts/BookmarksContext';
import HomePage from './pages/HomePage';

// Lazy loading para mejor rendimiento y carga bajo demanda
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ToolDetailPage = React.lazy(() => import('./pages/ToolDetailPage.tsx'));
const CategoriesPage = React.lazy(() => import('./pages/CategoriesPage.tsx'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage.tsx'));
const PopularToolsPage = React.lazy(() => import('./pages/PopularToolsPage.tsx'));
const NewestToolsPage = React.lazy(() => import('./pages/NewestToolsPage.tsx'));
const SavedToolsPage = React.lazy(() => import('./pages/SavedToolsPage.tsx'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage.tsx'));

// Componente de carga para módulos lazy loading
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#67A2A8] dark:border-[#9CD1D4]"></div>
  </div>
);

// Componente para página no encontrada (404)
const NotFoundPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
    <h1 className="text-9xl font-bold text-[#67A2A8] dark:text-[#9CD1D4] animate-float-404">404</h1>
    <p className="text-2xl mt-4 mb-8 text-gray-800 dark:text-gray-200 animate-fade-in delay-300">
      Página no encontrada
    </p>
    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md animate-fade-in delay-500">
      La página que estás buscando no existe o ha sido movida a otra ubicación.
    </p>
    <a
      href="/"
      className="px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] dark:bg-[#9CD1D4] dark:hover:bg-[#E3F5F5] text-white dark:text-gray-800 rounded-lg transition-colors animate-fade-in delay-700 hover-float"
    >
      Volver al inicio
    </a>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BookmarksProvider>
        {/* Se eliminó el Router de aquí */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Rutas de herramientas */}
            <Route path="/tool/:id" element={<ToolDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/popular" element={<PopularToolsPage />} />
            <Route path="/newest" element={<NewestToolsPage />} />
            <Route path="/saved" element={<SavedToolsPage />} />
            
            {/* Búsqueda */}
            <Route path="/search" element={<SearchResultsPage />} />
            
            {/* Ruta 404 para cualquier otra URL */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BookmarksProvider>
    </ThemeProvider>
  );
}

export default App;