
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { LanguageProvider } from "./components/LanguageContext.jsx"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Colophon from "./components/Colophon.jsx";

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      duration: 0.35,
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      easing: (t) => 1 - Math.pow(1 - t, 2.5),
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
    <section className="relative min-h-screen font-serif bg-malachite text-bone">
      <LanguageProvider>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />

        <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
          <Contact />
        </div>

        <Colophon />
      </LanguageProvider>
    </section>
  );
}
