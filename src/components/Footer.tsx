import React from 'react';
import { Hexagon, Github, Twitter } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-10 ${isDarkMode ? 'bg-crypto-dark-900' : 'bg-crypto-dark-800 text-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Hexagon className="h-6 w-6 text-crypto-yellow-500 mr-2" />
            <h2 className="font-display font-bold text-lg text-white">
              Color<span className="text-crypto-yellow-500">Test</span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-crypto-light-300 hover:text-crypto-yellow-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-crypto-light-300 hover:text-crypto-yellow-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-crypto-dark-700 text-center">
          <p className="text-sm text-crypto-light-400">
            © {new Date().getFullYear()} ColorTest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;