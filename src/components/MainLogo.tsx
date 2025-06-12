import React from 'react';

// Definimos las props que el componente necesita, en este caso `isScrolled`.
interface MainLogoProps {
  isScrolled: boolean;
}

const MainLogo: React.FC<MainLogoProps> = ({ isScrolled }) => {
  return (
    // El 'group' permite que el hover en este div afecte al SVG y al brillo interior.
    <div
      className={`
        relative 
        group 
        text-white 
        w-12 h-12 lg:w-14 lg:h-14 
        rounded-2xl 
        flex items-center justify-center 
        mr-3 
        transition-all duration-300 
        group-hover:scale-105
        
        {/* 1. ESTILO: Se aplica el nuevo gradiente oscuro y profundo. */}
        bg-gradient-to-br from-indigo-600 via-purple-700 to-slate-900
        
        {/* 2. ESTILO: La sombra ahora tiene un color a juego y responde a 'isScrolled'. */}
        ${isScrolled 
          ? 'shadow-lg shadow-indigo-700/30 group-hover:shadow-xl' 
          : 'shadow-xl shadow-indigo-700/40 group-hover:shadow-2xl'
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-300"
      >
        <path d="M4 17l6-6-6-6" />
        <path d="M12 19h8" />
      </svg>
      
      {/* 3. EFECTO: El brillo se mantiene, y se ve aún mejor sobre el fondo oscuro. */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// Así lo usarías en tu Header o Navbar:
// <MainLogo isScrolled={isScrolled} />

export default MainLogo;