
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import ColorBends from "./components/ColorBends.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import GradualBlur from "./components/GradualBlur.jsx";

export default function App() {

  // === SMOOTH SCROLL COM MOMENTUM ===
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: window,                  
      content: document.documentElement,
      duration: 0.8,
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* FUNDO FIXO */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <ColorBends
          colors={[
            "#0f141a",
            "#2a3b4e",
            "#8fa5ba"
          ]}
          noise={0}
          mouseInfluence={0}
        />
      </div>

      {/* CONTEÚDO DA PÁGINA */}
      <section className="relative min-h-screen font-sf-pro text-white bg-transparent dark:bg-transparent">

        <Navbar />
        <Hero />
        <About />
        <Skills />   {/* 👈 Adicionado aqui */}

        {/* BLUR NO FINAL DA PAGE */}
        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </section>
    </>
  );
}
