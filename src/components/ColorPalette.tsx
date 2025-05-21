import React from 'react';
import ColorBlock from './ColorBlock';

interface ColorPaletteProps {
  isDarkMode: boolean;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ isDarkMode }) => {
  const yellowColors = [
    { color: "#FFFDE7", name: "Yellow 50", hexCode: "#FFFDE7" },
    { color: "#FFF9C4", name: "Yellow 100", hexCode: "#FFF9C4" },
    { color: "#FFF59D", name: "Yellow 200", hexCode: "#FFF59D" },
    { color: "#FFF176", name: "Yellow 300", hexCode: "#FFF176" },
    { color: "#FFEE58", name: "Yellow 400", hexCode: "#FFEE58" },
    { color: "#FFEB3B", name: "Yellow 500", hexCode: "#FFEB3B" },
    { color: "#FDD835", name: "Yellow 600", hexCode: "#FDD835" },
    { color: "#FBC02D", name: "Yellow 700", hexCode: "#FBC02D" },
    { color: "#F9A825", name: "Yellow 800", hexCode: "#F9A825" },
    { color: "#F57F17", name: "Yellow 900", hexCode: "#F57F17" },
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
            Yellow Palette
          </h2>
          <p className={`text-lg mb-10 ${isDarkMode ? 'text-crypto-light-300' : 'text-crypto-dark-700'}`}>
            A comprehensive crypto-inspired yellow color palette, ranging from light to dark shades.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
            {yellowColors.map((color) => (
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
            Complementary colors that work well with our crypto yellow palette.
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

export default ColorPalette;