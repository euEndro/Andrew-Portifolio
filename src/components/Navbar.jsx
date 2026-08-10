
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext.jsx";
import curriculo from "./../assets/Andrew-Portfolio-br.docx.pdf"
import resume from "./../assets/Andrew-Portfolio-english.docx.pdf"
import { useT } from "./useT.js";
import { AndrewMonogram } from "./CabinetIcons.jsx";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTimeout = useRef(null);

  const { language, setLanguage } = useLanguage();
  const t = useT();

  const pdfFile = language === "ENG" ? resume : curriculo;

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
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
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
  }, [isScrolling, language]);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-malachite-deep border-b border-bone-dim/20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center gap-6">

          {/* Mark */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 shrink-0"
            aria-label="Andrew Doni"
          >
            <AndrewMonogram className="h-5 w-auto text-bone" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 font-mono text-[12px] tracking-[0.14em] uppercase">
            {menuItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    scrollToSection(item.id);
                  }}
                  className={`relative pb-1 transition-colors duration-200 ${
                    isActive ? "text-bone" : "text-bone-dim hover:text-bone"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-cinnabar transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right controls (desktop) */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <button
              onClick={() => setLanguage(language === "PT-BR" ? "ENG" : "PT-BR")}
              className="font-mono text-[12px] tracking-[0.1em] text-bone-dim hover:text-cinnabar border border-bone-dim/30 hover:border-cinnabar px-3 py-1.5 transition-colors"
            >
              [{language}]
            </button>
            <a
              href={pdfFile}
              download={language === "ENG" ? "Andrew-Doni-Resume.pdf" : "Curriculo-Andrew-Doni.pdf"}
              className="font-mono text-[12px] tracking-[0.1em] text-ink bg-bone hover:bg-cinnabar hover:text-bone px-3 py-1.5 transition-colors"
            >
              PDF
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            <button
              onClick={() => setLanguage(language === "PT-BR" ? "ENG" : "PT-BR")}
              className="font-mono text-[11px] text-bone-dim border border-bone-dim/30 px-2 py-1.5"
            >
              [{language}]
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border border-bone-dim/30"
              aria-label="Menu"
            >
              <div className="space-y-1">
                <span className="block w-5 h-[1.5px] bg-bone"></span>
                <span className="block w-5 h-[1.5px] bg-bone"></span>
                <span className="block w-5 h-[1.5px] bg-bone"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-malachite-deep border-b border-bone-dim/20 px-5 py-5 flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setMenuOpen(false);
                scrollToSection(item.id);
              }}
              className="font-mono text-sm tracking-[0.1em] uppercase text-bone text-left"
            >
              {item.label}
            </button>
          ))}
          <a
            href={pdfFile}
            download={language === "ENG" ? "Andrew-Doni-Resume.pdf" : "Curriculo-Andrew-Doni.pdf"}
            className="font-mono text-sm text-ink bg-bone px-3 py-2 w-fit"
          >
            PDF
          </a>
        </div>
      )}
    </div>
  );
}
