import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Send,
  Lightbulb,
  Link as LinkIcon,
  Tag,
  Check,
  MessageSquare,
  PlusCircle,
  ThumbsUp,
  AlertCircle,
} from 'lucide-react';

// Componentes internos
import Layout from '../components/Layout';
import useAnalytics from '../hooks/useAnalytics';
import { SuggestFormState } from '../types/forms';

// Constantes
export const toolCategories = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Bases de Datos' },
  { id: 'devops', name: 'DevOps' },
  { id: 'design', name: 'Diseño' },
  { id: 'testing', name: 'Testing' },
  { id: 'productivity', name: 'Productividad' },
  { id: 'collaboration', name: 'Colaboración' },
  { id: 'security', name: 'Seguridad' },
  { id: 'ai', name: 'Inteligencia Artificial' },
  { id: 'other', name: 'Otra' },
];

// Estilos reutilizables
const inputStyles =
  'w-full px-4 py-2 border rounded-lg focus:ring-[#67A2A8] focus:border-[#67A2A8] dark:bg-gray-700 dark:text-white';
const errorStyles = 'border-red-500 dark:border-red-400';
const buttonStyles =
  'flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all';

const SuggestPage: React.FC = () => {
  const analytics = useAnalytics();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState<SuggestFormState>({
    toolName: '',
    toolUrl: '',
    category: '',
    description: '',
    tags: '',
    isFree: false,
    hasFreeOption: false,
    authorName: '',
    authorEmail: '',
    whyRecommend: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Referencias
  const config = useRef({ pageName: 'Suggest Tool Page' });
  const formRef = useRef<HTMLFormElement>(null);

  // Efectos
  useEffect(() => {
    analytics.trackPageView(config.current.pageName);
  }, [analytics]);

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    // Limpiar error al modificar campo
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formState.toolName.trim()) errors.toolName = 'El nombre de la herramienta es requerido';
    if (!formState.toolUrl.trim()) {
      errors.toolUrl = 'La URL de la herramienta es requerida';
    } else if (!isValidUrl(formState.toolUrl)) {
      errors.toolUrl = 'Por favor, ingresa una URL válida';
    }
    if (!formState.category) errors.category = 'La categoría es requerida';
    if (!formState.description.trim()) {
      errors.description = 'La descripción es requerida';
    } else if (formState.description.length < 20) {
      errors.description = 'La descripción debe tener al menos 20 caracteres';
    }
    if (!formState.authorEmail.trim()) {
      errors.authorEmail = 'El email es requerido';
    } else if (!isValidEmail(formState.authorEmail)) {
      errors.authorEmail = 'Por favor, ingresa un email válido';
    }
    if (!formState.whyRecommend.trim()) {
      errors.whyRecommend = 'Por favor, cuéntanos por qué recomiendas esta herramienta';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsLoading(true);
      setError(null);

      analytics.trackButtonClick('suggest_tool_submit');

      // Submit form using FormSubmit
      await fetch("https://formsubmit.co/ajax/mayspacede@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      setIsSuccess(true);
      setFormState({
        toolName: '',
        toolUrl: '',
        category: '',
        description: '',
        tags: '',
        isFree: false,
        hasFreeOption: false,
        authorName: '',
        authorEmail: '',
        whyRecommend: '',
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12 px-4">
        <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-xl py-12 px-6 md:px-10 max-w-4xl mx-auto text-center shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 animate-fade-in">
            Sugerir Herramienta
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 animate-fade-in delay-100 leading-relaxed max-w-2xl mx-auto">
            Ayúdanos a crecer compartiendo esa herramienta que ha mejorado tu flujo de trabajo como desarrollador.
          </p>
        </div>
      </section>


      {/* Formulario y Sidebar */}
      <section className="mb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400 mr-4" />
                  <h2 className="text-xl font-bold text-green-800 dark:text-green-300">
                    ¡Gracias por tu sugerencia!
                  </h2>
                </div>
                <p className="text-green-700 dark:text-green-200 mb-4">
                  Hemos recibido tu recomendación y la revisaremos pronto. Si cumple con nuestros
                  criterios, la añadiremos al catálogo y te notificaremos.
                </p>
                <div className="flex space-x-4 mt-6">
                  <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                  >
                    Volver al inicio
                  </Link>
                  <button
                    onClick={() => setFormState({
                      toolName: '',
                      toolUrl: '',
                      category: '',
                      description: '',
                      tags: '',
                      isFree: false,
                      hasFreeOption: false,
                      authorName: '',
                      authorEmail: '',
                      whyRecommend: '',
                    })}
                    className="inline-flex items-center px-4 py-2 bg-green-600 dark:bg-green-700 rounded-lg text-white hover:bg-green-700 dark:hover:bg-green-600"
                  >
                    <PlusCircle size={18} className="mr-2" />
                    Sugerir otra herramienta
                  </button>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400 mr-4" />
                  <h2 className="text-xl font-bold text-red-800 dark:text-red-300">
                    Ocurrió un error
                  </h2>
                </div>
                <p className="text-red-700 dark:text-red-200 mb-4">
                  Lo sentimos, no pudimos procesar tu sugerencia. Por favor, intenta nuevamente.
                </p>
                <button
                  onClick={() => setFormState({
                    toolName: '',
                    toolUrl: '',
                    category: '',
                    description: '',
                    tags: '',
                    isFree: false,
                    hasFreeOption: false,
                    authorName: '',
                    authorEmail: '',
                    whyRecommend: '',
                  })}
                  className="inline-flex items-center px-4 py-2 bg-red-600 dark:bg-red-700 rounded-lg text-white hover:bg-red-700 dark:hover:bg-red-600"
                >
                  Intentar nuevamente
                </button>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Detalles de la herramienta
                </h2>
                <form
                  ref={formRef}
                  onSubmit={handleFormSubmit}
                  className="space-y-8"
                  action="https://formsubmit.co/mayspacede@gmail.com"
                  method="POST"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://mayMayTools.com/suggest?success=true" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Información de la herramienta */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="toolName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Nombre de la herramienta*
                        </label>
                        <input
                          type="text"
                          id="toolName"
                          name="toolName"
                          value={formState.toolName}
                          onChange={handleChange}
                          className={`${inputStyles} ${formErrors.toolName ? errorStyles : 'border-gray-300 dark:border-gray-600'
                            }`}
                          placeholder="Ej. VS Code, Figma, MongoDB..."
                        />
                        {formErrors.toolName && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {formErrors.toolName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="toolUrl"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          URL de la herramienta*
                        </label>
                        <div className="relative">
                          <LinkIcon
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          />
                          <input
                            type="text"
                            id="toolUrl"
                            name="toolUrl"
                            value={formState.toolUrl}
                            onChange={handleChange}
                            className={`${inputStyles} pl-10 ${formErrors.toolUrl ? errorStyles : 'border-gray-300 dark:border-gray-600'
                              }`}
                            placeholder="https://www.ejemplo.com"
                          />
                        </div>
                        {formErrors.toolUrl && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {formErrors.toolUrl}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Categoría*
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formState.category}
                        onChange={handleChange}
                        className={`${inputStyles} ${formErrors.category ? errorStyles : 'border-gray-300 dark:border-gray-600'
                          }`}
                      >
                        <option value="">Seleccionar categoría</option>
                        {toolCategories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      {formErrors.category && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.category}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Descripción*
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formState.description}
                        onChange={handleChange}
                        rows={4}
                        className={`${inputStyles} ${formErrors.description ? errorStyles : 'border-gray-300 dark:border-gray-600'
                          }`}
                        placeholder="Describe brevemente qué hace esta herramienta..."
                      />
                      {formErrors.description ? (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.description}
                        </p>
                      ) : (
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          Mínimo 20 caracteres. Sé breve pero descriptivo.
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="tags"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Etiquetas (separadas por comas)
                      </label>
                      <div className="relative">
                        <Tag
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          id="tags"
                          name="tags"
                          value={formState.tags}
                          onChange={handleChange}
                          className={`${inputStyles} pl-10 border-gray-300 dark:border-gray-600`}
                          placeholder="frontend, javascript, react, ..."
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Opcional. Añade palabras clave relevantes.
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="isFree"
                          name="isFree"
                          checked={formState.isFree}
                          onChange={handleChange}
                          className="h-4 w-4 rounded text-[#67A2A8] focus:ring-[#67A2A8] border-gray-300 dark:border-gray-600"
                        />
                        <label
                          htmlFor="isFree"
                          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                          Es completamente gratuita
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasFreeOption"
                          name="hasFreeOption"
                          checked={formState.hasFreeOption}
                          onChange={handleChange}
                          className="h-4 w-4 rounded text-[#67A2A8] focus:ring-[#67A2A8] border-gray-300 dark:border-gray-600"
                        />
                        <label
                          htmlFor="hasFreeOption"
                          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                          Tiene opción/plan gratuito
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Información del autor */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      Tus datos
                    </h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="authorName"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Tu nombre
                          </label>
                          <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            value={formState.authorName}
                            onChange={handleChange}
                            className={`${inputStyles} border-gray-300 dark:border-gray-600`}
                            placeholder="Tu nombre (opcional)"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="authorEmail"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Tu correo electrónico*
                          </label>
                          <input
                            type="email"
                            id="authorEmail"
                            name="authorEmail"
                            value={formState.authorEmail}
                            onChange={handleChange}
                            className={`${inputStyles} ${formErrors.authorEmail
                              ? errorStyles
                              : 'border-gray-300 dark:border-gray-600'
                              }`}
                            placeholder="tu@email.com"
                          />
                          {formErrors.authorEmail ? (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                              {formErrors.authorEmail}
                            </p>
                          ) : (
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                              No publicaremos tu correo. Es para notificarte.
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="whyRecommend"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          ¿Por qué recomiendas esta herramienta?*
                        </label>
                        <textarea
                          id="whyRecommend"
                          name="whyRecommend"
                          value={formState.whyRecommend}
                          onChange={handleChange}
                          rows={3}
                          className={`${inputStyles} ${formErrors.whyRecommend
                            ? errorStyles
                            : 'border-gray-300 dark:border-gray-600'
                            }`}
                          placeholder="Cuéntanos por qué esta herramienta es especial..."
                        />
                        {formErrors.whyRecommend && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {formErrors.whyRecommend}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Botón de envío */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`${buttonStyles} ${isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#67A2A8] hover:bg-[#9CD1D4]'
                        }`}
                    >
                      {isLoading ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Enviar sugerencia
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cómo funciona */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 text-amber-500 mr-2" />
                Cómo funciona
              </h3>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 h-6 w-6 rounded-full flex items-center justify-center text-[#67A2A8] font-medium mr-3 mt-0.5">
                    1
                  </div>
                  <p>Completa el formulario con los detalles de la herramienta.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 h-6 w-6 rounded-full flex items-center justify-center text-[#67A2A8] font-medium mr-3 mt-0.5">
                    2
                  </div>
                  <p>Nuestro equipo revisará tu sugerencia para asegurar calidad.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#E3F5F5] dark:bg-[#67A2A8]/20 h-6 w-6 rounded-full flex items-center justify-center text-[#67A2A8] font-medium mr-3 mt-0.5">
                    3
                  </div>
                  <p>Si es aprobada, la añadiremos al catálogo y te notificaremos.</p>
                </div>
              </div>
            </div>

            {/* Nuestros criterios */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Nuestros criterios
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  La herramienta debe ser útil para desarrolladores.
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Debe estar activamente mantenida y actualizada.
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Debe proporcionar valor real y resolver problemas específicos.
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Debe tener documentación clara y soporte disponible.
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Debe ofrecer una buena experiencia de usuario.
                </li>
              </ul>
            </div>

            {/* Sugerencias populares */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <ThumbsUp className="h-5 w-5 text-blue-500 mr-2" />
                Recientemente añadidas
              </h3>

              <div className="space-y-3">
                <NavLink
                  to="/tool/raycast"
                  className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">Raycast</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Productividad - Sugerida hace 2 días
                  </p>
                </NavLink>

                <NavLink
                  to="/tool/retool"
                  className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">Retool</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Frontend - Sugerida hace 5 días
                  </p>
                </NavLink>

                <NavLink
                  to="/tool/huggingface"
                  className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">Hugging Face</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    IA - Sugerida hace 1 semana
                  </p>
                </NavLink>
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/newest"
                  className="text-sm text-[#67A2A8] hover:text-[#9CD1D4] font-medium"
                >
                  Ver todas las nuevas herramientas →
                </Link>
              </div>
            </div>


            {/* ¿Necesitas ayuda? */}
            <div className="bg-[#E3F5F5] dark:bg-[#67A2A8]/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 text-[#67A2A8] mr-2" />
                ¿Necesitas ayuda?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Si tienes preguntas sobre el proceso de sugerencia, contáctanos.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-[#67A2A8] hover:text-[#9CD1D4] font-medium text-sm"
              >
                Contactar soporte
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas destacadas */}
      <section className="mb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Herramientas destacadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NavLink
                to="/tool/github-copilot"
                className="block p-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <h4 className="text-base font-semibold text-gray-800 dark:text-white">GitHub Copilot</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  IA - Tu par programador con IA que te ayuda a escribir código más rápido.
                </p>
              </NavLink>

              <NavLink
                to="/tool/vercel"
                className="block p-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <h4 className="text-base font-semibold text-gray-800 dark:text-white">Vercel</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  Hosting - Plataforma para implementar aplicaciones frontend fácilmente.
                </p>
              </NavLink>

              <NavLink
                to="/tool/tailwindcss"
                className="block p-5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <h4 className="text-base font-semibold text-gray-800 dark:text-white">Tailwind CSS</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  Frontend - Framework CSS utility-first para diseños personalizados.
                </p>
              </NavLink>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/popular"
                className="inline-flex items-center px-6 py-3 bg-[#67A2A8] hover:bg-[#9CD1D4] text-white rounded-lg transition"
              >
                Explorar todas las herramientas
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="mb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Preguntas frecuentes sobre sugerencias
          </h2>
          <div className="space-y-6">
            <SuggestFAQItem
              question="¿Cuánto tiempo tarda en ser revisada una sugerencia?"
              answer="Normalmente revisamos las sugerencias en 5 días hábiles. Puede extenderse a 10 días en períodos de alto volumen."
            />
            <SuggestFAQItem
              question="¿Puedo sugerir mi propia herramienta o proyecto?"
              answer="¡Sí! Indica en '¿Por qué recomiendas esta herramienta?' que eres el creador o estás asociado."
            />
            <SuggestFAQItem
              question="¿Por qué mi sugerencia podría ser rechazada?"
              answer="Podría no cumplir criterios de calidad, ser similar a otras herramientas o no ofrecer valor significativo."
            />
            <SuggestFAQItem
              question="¿Puedo sugerir actualizaciones para herramientas existentes?"
              answer="Sí, usa el formulario y especifica que es una actualización en la descripción."
            />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="text-[#67A2A8] hover:text-[#9CD1D4] font-medium"
            >
              Ver todas las preguntas frecuentes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#67A2A8] to-[#9CD1D4] dark:from-[#67A2A8]/80 dark:to-[#9CD1D4]/80 rounded-xl p-8 md:p-10 text-center text-white shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Conoces otras herramientas increíbles?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Comparte tus herramientas favoritas y ayuda a otros desarrolladores.
            </p>
            <button
              onClick={() =>
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-white text-[#67A2A8] rounded-lg font-medium hover:bg-gray-100"
            >
              Sugerir ahora
            </button>
          </div>
        </div>
      </section>
    </Layout >
  );
};

// Componente para tarjeta de herramienta destacada
interface FeaturedToolCardProps {
  name: string;
  category: string;
  description: string;
}

const getToolImageSrc = (name: string): string => {
  const nameMap: { [key: string]: string } = {
    'GitHub Copilot': 'githubcopilot',
    'Vercel': 'vercel',
    'Tailwind CSS': 'tailwindcss'
  };
  const imageName = nameMap[name] || name.toLowerCase().replace(/\s+/g, '');
  return `/img/tools/${imageName}.svg`;
};

const FeaturedToolCard: React.FC<FeaturedToolCardProps> = ({
  name,
  category,
  description,
}) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-[#67A2A8] dark:hover:border-[#9CD1D4] text-gray-900 dark:text-gray-100">
    <div className="flex items-start mb-3">
      <div className="mr-3 p-2 bg-white dark:bg-gray-700 rounded-md">
        <img
          src={getToolImageSrc(name)}
          alt={name}
          className="w-8 h-8"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/img/tools/default.svg';
            img.onerror = null;
          }}
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="text-xs text-[#67A2A8] dark:text-[#9CD1D4]">{category}</p>
      </div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

// Componente para FAQ
interface SuggestFAQItemProps {
  question: string;
  answer: string;
}

const SuggestFAQItem: React.FC<SuggestFAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-[#67A2A8] dark:hover:border-[#9CD1D4]">
      <button
        className="w-full p-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg pr-8">
          {question}
        </h3>
        <div
          className={`w-6 h-6 rounded-full border border-gray-200 dark:border-gray-600 transition-transform ${isOpen ? 'rotate-180 bg-[#67A2A8] border-[#67A2A8]' : ''
            }`}
        >
          <svg
            className={`w-3 h-3 mx-auto mt-1.5 ${isOpen ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default SuggestPage;