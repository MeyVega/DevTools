// Componente para el icono de chevron animado
export const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div 
      className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 transition-transform duration-300 ${
        isOpen ? 'transform rotate-180 bg-[#67A2A8] border-[#67A2A8] dark:bg-[#67A2A8] dark:border-[#67A2A8]' : ''
      }`}
    >
      <svg
        className={`w-3 h-3 ${isOpen ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        
        
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );