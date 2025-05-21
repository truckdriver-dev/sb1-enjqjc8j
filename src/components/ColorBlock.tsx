import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ColorBlockProps {
  color: string;
  name: string;
  hexCode: string;
  isDarkMode: boolean;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ color, name, hexCode, isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(hexCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Calculate if text should be dark or light based on background color
  const isLight = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186;
  };
  
  const textColor = isLight(color) ? 'text-crypto-dark-900' : 'text-white';
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isDarkMode ? 'shadow-md shadow-black/30' : 'shadow-md shadow-black/10'
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="aspect-square p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className={`font-display font-medium text-lg ${textColor}`}>{name}</h3>
          <button
            onClick={copyToClipboard}
            className={`p-2 rounded-full ${textColor} opacity-70 hover:opacity-100 transition-opacity`}
            aria-label={`Copy ${hexCode} to clipboard`}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        
        <div className={`${textColor}`}>
          <p className="font-mono text-sm">{hexCode}</p>
        </div>
      </div>
      
      <div 
        className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isLight(color) ? 'bg-black/5' : 'bg-white/10'
        }`}
      >
        <p className={`${textColor} font-medium`}>{copied ? 'Copied!' : 'Click to copy'}</p>
      </div>
    </div>
  );
};

export default ColorBlock;