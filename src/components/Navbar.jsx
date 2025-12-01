
import { useState, useEffect, useRef } from "react";
import GlassSurface from "./GlassSurface.jsx";
import { useLanguage } from "./LanguageContext.jsx";
import curriculo from "./../assets/Andrew-Portfolio-br.docx.pdf"
import resume from "./../assets/Andrew-Portfolio-english.docx.pdf"
import { useT } from "./useT.js";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const { language, setLanguage } = useLanguage();
  const t = useT();
  const pdfFile =
    language === "ENG"
      ? resume
      : curriculo;

  const menuItems = [
    { label: t("nav_presentation"), id: "hero" },
    { label: t("nav_about"), id: "sobre-mim" },
    { label: t("nav_skills"), id: "habilidades" },
    { label: t("nav_projects"), id: "projetos" },
    { label: t("nav_contact"), id: "contato" }
  ];

  const yOffset = -140;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setIsScrolling(true);

      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      if (isScrolling) return;

      let currentIndex = 0;
      let smallestDistance = Infinity;

      menuItems.forEach((item, index) => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const distance = Math.abs(
          el.getBoundingClientRect().top - Math.abs(yOffset)
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling, language]); // importante: atualizar textos ao trocar idioma

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
        <a
      href={pdfFile}
      download={
        language === "ENG"
          ? "Andrew-Doni-Resume.pdf"
          : "Curriculo-Andrew-Doni.pdf"
      }
      className="w-16 h-8 text-xs
        md:w-24 md:h-10 md:text-sm 
        font-extrabold rounded-full bg-white flex items-center justify-center
        transition-all duration-300 hover:scale-110"
    >
      <span className="text-sm font-extrabold" style={{ color: "#000006" }}>
        PDF
      </span>
    </a>

        <div className="flex-1 
          flex 
          justify-center 
          space-x-3            /* menor espaçamento no mobile */
          md:space-x-8         /* espaçamento original no desktop */
          text-xs              /* texto menor no mobile */
          md:text-base         /* tamanho normal no desktop */">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToSection(item.id);
                }}
                className={`relative
                  px-2 py-1 text-xs
                  md:px-4 md:py-2 md:text-base
                  transition-all duration-300
                  ${
                  isActive
                    ? "text-white font-bold scale-110"
                    : "text-white font-medium hover:scale-110 hover:font-bold"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white rounded px-2 -z-10 opacity-30 filter blur-xl"></span>
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="ml-auto">
          <button
            onClick={() => setLanguage(language === "PT-BR" ? "ENG" : "PT-BR")}
            className="w-16 h-8 text-xs
              md:w-24 md:h-10 md:text-sm 
              font-extrabold rounded-full bg-white flex items-center justify-center
              transition-all duration-300 hover:scale-110"
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
