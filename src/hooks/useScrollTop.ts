import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
}; 