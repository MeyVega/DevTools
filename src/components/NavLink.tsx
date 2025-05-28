import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled = false, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isScrolled
          ? 'text-gray-700 hover:text-[#67A2A8] dark:text-gray-300 dark:hover:text-[#9CD1D4]'
          : 'text-gray-800 hover:text-[#67A2A8] dark:text-gray-200 dark:hover:text-[#9CD1D4]'
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink; 