
import LiquidEther from "./components/LiquidEther.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

export default function App() {
  return (
    <div className="w-full relative bg-background dark:bg-background font-sf-pro text-white overflow-x-hidden">
      
      {/* Fundo líquido */}
      <div className="fixed inset-0 w-full h-full z-0">
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

      {/* Navbar */}
      <Navbar />

      {/* Conteúdo rolável */}
      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
}
