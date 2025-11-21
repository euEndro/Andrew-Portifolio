
import { useState } from "react";
import GlassSurface from "./GlassSurface.jsx";

const menuItems = ["Apresentação", "Sobre Mim", "Habilidades", "Projetos", "Contate-me"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState("PT-BR");

  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4">
      <GlassSurface
        width="90%"
        maxWidth={1200}
        height={60}
        borderRadius={40}
        redOffset={1}
        greenOffset={2}
        blueOffset={3}
        distortionScale={-200}
        opacity={0.18}
        brightness={55}
        mixBlendMode="screen"
        className="relative flex items-center px-6"
      >
        {/* Pilula da esquerda - Pesquisar */}
        <div className="w-28 h-10 font-extrabold rounded-full bg-white flex items-center justify-center">
          <span className="text-sm font-extrabold" style={{ color: "#000006" }}>
            doni.dev
          </span>
        </div>

        {/* Menu centralizado */}
        <div className="flex-1 flex justify-center space-x-8">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-white font-bold scale-110"
                    : "text-white font-medium hover:scale-110 hover:font-bold"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white rounded px-2 -z-10 opacity-30 filter blur-xl"></span>
                )}
                {item}
              </button>
            );
          })}
        </div>

        {/* Pilula da direita - Idioma */}
        <div className="ml-auto">
          <button
            onClick={() => setLanguage(language === "PT-BR" ? "ENG" : "PT-BR")}
            className="w-24 h-10 font-extrabold transition-all duration-300 hover:scale-110 rounded-full bg-white flex items-center justify-center"
          >
            <span className="text-sm font-extrabold" style={{ color: "#000006" }}>
              {language}
            </span>
          </button>
        </div>
      </GlassSurface>
    </div>
  );
}
