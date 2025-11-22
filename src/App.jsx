
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import ColorBends from "./components/ColorBends.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import GradualBlur from "./components/GradualBlur.jsx";

export default function App() {

  // === SMOOTH SCROLL COM MOMENTUM ===
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,        // suavidade do movimento
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easing estilo Apple
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
      {/* FUNDO FIXO que cobre a página toda */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <ColorBends
          colors={[
            "#0f141a", // azul titânio profundo
            "#2a3b4e", // azul aço elegante
            "#8fa5ba"  // highlight suave Apple-style
          ]}
          noise={0}
        />
      </div>

      {/* SEU SITE */}
      <section className="relative min-h-screen font-sf-pro text-white bg-transparent dark:bg-transparent">
        <div className="relative z-10 px-0 py-0">
          <Navbar />
          <Hero />
          <About />
        </div>

        <GradualBlur
          target="parent"
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
