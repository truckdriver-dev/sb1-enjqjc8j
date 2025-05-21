import React from 'react';
import ColorBlock from './ColorBlock';

interface ColorPaletteProps {
  isDarkMode: boolean;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ isDarkMode }) => {
  const redColors = [
    { color: "#FFF5F5", name: "Red 50", hexCode: "#FFF5F5" },
    { color: "#FFE3E3", name: "Red 100", hexCode: "#FFE3E3" },
    { color: "#FFC9C9", name: "Red 200", hexCode: "#FFC9C9" },
    { color: "#FFA7A7", name: "Red 300", hexCode: "#FFA7A7" },
    { color: "#FF8787", name: "Red 400", hexCode: "#FF8787" },
    { color: "#FF6B6B", name: "Red 500", hexCode: "#FF6B6B" },
    { color: "#FA5252", name: "Red 600", hexCode: "#FA5252" },
    { color: "#F03E3E", name: "Red 700", hexCode: "#F03E3E" },
    { color: "#E03131", name: "Red 800", hexCode: "#E03131" },
    { color: "#C92A2A", name: "Red 900", hexCode: "#C92A2A" },
  ];

  const accentColors = [
    { color: "#3B82F6", name: "Accent Blue", hexCode: "#3B82F6" },
    { color: "#10B981", name: "Accent Green", hexCode: "#10B981" },
    { color: "#8B5CF6", name: "Accent Purple", hexCode: "#8B5CF6" },
  ];

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-crypto-dark-800' : 'bg-crypto-light-100'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-display font-bold text-3xl sm:text-4xl mb-8 ${isDarkMode ? 'text-white' : 'text-crypto-dark-900'}`}>
            Red Palette
          </h2>
          <p className={`text-lg mb-10 ${isDarkMode ? 'text-crypto-light-300' : 'text-crypto-dark-700'}`}>
            A comprehensive crypto-inspired red color palette, ranging from light to dark shades.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
            {redColors.map((color) => (
              <ColorBlock 
                key={color.hexCode}
                color={color.color}
                name={color.name}
                hexCode={color.hexCode}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
          
          <h2 className={`font-display font-bold text-3xl sm:text-4xl mb-8 ${isDarkMode ? 'text-white' : 'text-crypto-dark-900'}`}>
            Accent Colors
          </h2>
          <p className={`text-lg mb-10 ${isDarkMode ? 'text-crypto-light-300' : 'text-crypto-dark-700'}`}>
            Complementary colors that work well with our crypto red palette.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {accentColors.map((color) => (
              <ColorBlock 
                key={color.hexCode}
                color={color.color}
                name={color.name}
                hexCode={color.hexCode}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPalette