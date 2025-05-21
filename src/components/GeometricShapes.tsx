import React from 'react';

interface GeometricShapesProps {
  isDarkMode: boolean;
}

const GeometricShapes: React.FC<GeometricShapesProps> = ({ isDarkMode }) => {
  return (
    <section className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-crypto-dark-900' : 'bg-crypto-yellow-200'}`}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-[10%] w-24 h-24 rounded-lg bg-crypto-yellow-400 opacity-30 rotate-12 animate-float"></div>
        <div className="absolute top-40 right-[15%] w-32 h-32 rounded-full bg-crypto-yellow-500 opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-[20%] w-40 h-40 rounded-xl bg-crypto-accent-blue opacity-10 -rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-[25%] w-28 h-28 rounded-lg bg-crypto-accent-purple opacity-15 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-crypto-yellow-600 opacity-10 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-display font-bold text-3xl sm:text-4xl mb-8 ${isDarkMode ? 'text-white' : 'text-crypto-dark-900'}`}>
            Geometric Elements
          </h2>
          <p className={`text-lg mb-12 ${isDarkMode ? 'text-crypto-light-300' : 'text-crypto-dark-700'}`}>
            Web3 design embraces geometric shapes, subtle animations, and a sense of depth.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {/* Hexagon */}
            <div className={`aspect-square flex items-center justify-center ${isDarkMode ? 'bg-crypto-dark-700' : 'bg-white'} rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105`}>
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-crypto-yellow-500 rounded-lg transform rotate-45"></div>
              </div>
            </div>
            
            {/* Circle */}
            <div className={`aspect-square flex items-center justify-center ${isDarkMode ? 'bg-crypto-dark-700' : 'bg-white'} rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105`}>
              <div className="w-24 h-24 rounded-full bg-crypto-accent-blue"></div>
            </div>
            
            {/* Triangle */}
            <div className={`aspect-square flex items-center justify-center ${isDarkMode ? 'bg-crypto-dark-700' : 'bg-white'} rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105`}>
              <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[104px] border-l-transparent border-r-transparent border-b-crypto-accent-green"></div>
            </div>
            
            {/* Hexagon */}
            <div className={`aspect-square flex items-center justify-center ${isDarkMode ? 'bg-crypto-dark-700' : 'bg-white'} rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105`}>
              <div className="relative w-28 h-24">
                <div className="absolute w-full h-full bg-crypto-accent-purple clip-hexagon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeometricShapes;