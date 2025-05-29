import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
  popularSearches?: string[];
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  popularSearches = ['React', 'TypeScript', 'Vite', 'Next.js', 'Tailwind CSS'],
  placeholder = "Buscar herramientas para desarrolladores...",
  className = "",
  autoFocus = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory).slice(0, 5));
      } catch (e) {
        console.error('Error loading search history:', e);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      setShowSuggestions(true);
    } else {
      onSearch('');
    }
  };

  const handleSearch = (term: string = searchTerm) => {
    if (!term.trim()) return;
    onSearch(term);
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(term)}`);
    const newHistory = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`relative rounded-full transition-all ${isFocused ? 'ring-2 ring-[#67A2A8]' : ''}`}>
        <Search 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 z-10" 
        />
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true);
            if (searchTerm.length > 0 || searchHistory.length > 0) {
              setShowSuggestions(true);
            }
          }}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          placeholder={placeholder}
          className="w-full py-3 pl-10 pr-24 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-transparent transition-all shadow-sm hover:shadow-md"
          style={{ outline: 'none' }}
          aria-expanded={showSuggestions}
          aria-controls="search-suggestions"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-10">
          {searchTerm && (
            <button 
              onClick={clearSearch}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-white p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button 
            onClick={() => handleSearch()}
            className="text-[#67A2A8] hover:text-[#9CD1D4] p-1 rounded-full hover:bg-[#E3F5F5] dark:hover:bg-[#1a3a3a]"
            aria-label="Search"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          id="search-suggestions"
          role="listbox"
          className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        >
          {searchHistory.length > 0 && (
            <div className="p-2">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                <Clock size={14} className="mr-1" />
                <span>Búsquedas recientes</span>
              </div>
              <div className="mt-1">
                {searchHistory.map((item, index) => (
                  <button
                    key={`history-${index}`}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded flex items-center text-gray-700 dark:text-gray-200"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    <Clock size={14} className="mr-2 text-gray-400 dark:text-gray-500" />
                    {item}
                  </button>
                ))}
              </div>
              <button
                className="w-full text-xs text-right pr-3 py-1 text-[#67A2A8] hover:underline"
                onClick={() => {
                  localStorage.removeItem('searchHistory');
                  setSearchHistory([]);
                }}
              >
                Limpiar historial
              </button>
            </div>
          )}

          {searchHistory.length > 0 && popularSearches.length > 0 && (
            <div className="border-t border-gray-100 dark:border-gray-700"></div>
          )}

          {popularSearches.length > 0 && (
            <div className="p-2">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                <Sparkles size={14} className="mr-1" />
                <span>Búsquedas populares</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-2 px-2 py-2">
                {popularSearches.map((item, index) => (
                  <button
                    key={`popular-${index}`}
                    className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-[#E3F5F5] dark:hover:bg-[#274c4c] text-gray-700 dark:text-gray-200 rounded-full transition-colors"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchTerm && (
            <div className="border-t border-gray-100 dark:border-gray-700">
              <div className="p-2">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                  <Search size={14} className="mr-1" />
                  <span>Sugerencias para "{searchTerm}"</span>
                </div>
                <div className="mt-1">
                  {popularSearches
                    .filter(item => 
                      item.toLowerCase().includes(searchTerm.toLowerCase()) &&
                      item.toLowerCase() !== searchTerm.toLowerCase()
                    )
                    .slice(0, 3)
                    .map((item, index) => (
                      <button
                        key={`suggestion-${index}`}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded flex items-center text-gray-700 dark:text-gray-200"
                        onClick={() => handleSuggestionClick(item)}
                      >
                        {highlightMatch(item, searchTerm)}
                      </button>
                    ))}
                  <button
                    className="w-full text-left px-3 py-2 text-sm hover:bg-[#E3F5F5] dark:hover:bg-[#1a3a3a] rounded flex items-center text-[#67A2A8] font-medium"
                    onClick={() => handleSearch()}
                  >
                    <Search size={14} className="mr-2" />
                    Buscar "{searchTerm}"
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const highlightMatch = (text: string, query: string): JSX.Element => {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, index) => 
        part.toLowerCase() === query.toLowerCase() 
          ? <mark key={index} className="bg-yellow-100 dark:bg-yellow-700 font-medium px-0.5 rounded">{part}</mark> 
          : <span key={index}>{part}</span>
      )}
    </>
  );
};

export default SearchBar;