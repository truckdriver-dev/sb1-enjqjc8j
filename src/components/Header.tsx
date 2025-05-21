import React, { useState, useEffect } from 'react';
import { Sun, Moon, Hexagon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? (isDarkMode ? 'bg-crypto-dark-800/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-md') 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 sm:py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Hexagon className={`h-8 w-8 ${isDarkMode ? 'text-crypto-red-500' : 'text-crypto-red-600'} mr-2`} />
          <h1 className={`font-display font-bold text-xl sm:text-2xl ${isDarkMode ? 'text-white' : 'text-crypto-dark-900'}`}>
            Color<span className="text-crypto-red-600">Test</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'bg-crypto-dark-700 hover:bg-crypto-dark-600 text-crypto-red-400' 
                : 'bg-crypto-light-200 hover:bg-crypto-light-300 text-crypto-dark-800'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header