import React from 'react';
import { ChevronDown } from 'lucide-react';
import ColorBlock from './ColorBlock';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className={`min-h-screen pt-16 ${isDarkMode ? 'bg-crypto-dark-900' : 'bg-crypto-yellow-100'}`}>
      <div className="container mx-auto px-4 py-16 sm:py-20 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-crypto-yellow-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-crypto-yellow-500 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 animate-pulse-slow"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 ${isDarkMode ? 'text-white' : 'text-crypto-dark-900'}`}>
            The Future is <span className="text-crypto-yellow-600 inline-block relative">
              Yellow
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-crypto-yellow-500 opacity-50"></span>
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl mb-12 max-w-2xl ${isDarkMode ? 'text-crypto-light-300' : 'text-crypto-dark-700'}`}>
            Exploring the modern crypto aesthetic through the lens of yellow — the color of energy, optimism, and digital gold.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl mb-16">
            <ColorBlock color="#FFEB3B" name="Crypto Base" hexCode="#FFEB3B" isDarkMode={isDarkMode} />
            <ColorBlock color="#FBC02D" name="Crypto Gold" hexCode="#FBC02D" isDarkMode={isDarkMode} />
            <ColorBlock color="#F9A825" name="Amber Gold" hexCode="#F9A825" isDarkMode={isDarkMode} />
          </div>
          
          <button 
            className={`animate-bounce rounded-full p-2 ${
              isDarkMode ? 'bg-crypto-dark-700 text-white' : 'bg-white text-crypto-dark-900'
            }`}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;