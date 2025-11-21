
import { useEffect, useState } from "react";
import LiquidEther from "./components/LiquidEther.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import GradualBlur from "./components/GradualBlur.jsx";

export default function App() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.body.scrollHeight);
    };

    window.addEventListener("resize", updateHeight);

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(document.body);

    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-background dark:bg-background font-sf-pro text-white">
      
      {/* Fundo LiquidEther cobrindo toda a altura do conteúdo */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{ height: pageHeight }}
      >
        <LiquidEther
          colors={["#00FF7F", "#66FFA1", "#B3FFD6"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Conteúdo rolável da página toda */}
      <div className="h-full overflow-y-auto relative z-10 px-0 py-0">
        <Navbar />
        <Hero />
        <About />
      </div>

      {/* Blur global no fundo da página */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
