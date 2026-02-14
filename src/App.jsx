
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import ColorBends from "./components/ColorBends.jsx";
import { LanguageProvider } from "./components/LanguageContext.jsx"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import GradualBlur from "./components/GradualBlur.jsx";

export default function App() {

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
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <ColorBends
          colors={[
            "#090c11",
            "#151d27",
            "#495766"
          ]}
          noise={0}
          mouseInfluence={0}
        />
      </div>

      <section className="relative min-h-screen font-sf-pro text-white bg-transparent dark:bg-transparent">

        <LanguageProvider> 
        <Navbar />
        <Hero />
        <About />
        <Skills />   
        <Projects />

        <div className="w-full max-w-[1110px] mx-auto px-8">
          <Contact />
        </div>
        </LanguageProvider>

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
