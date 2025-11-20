
import LiquidEther from "./components/LiquidEther.jsx";
import GlassSurface from "./components/GlassSurface.jsx";

export default function App() {
  return (
    <div className="w-full h-screen relative bg-background dark:bg-background font-sf-pro text-white overflow-hidden">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 text-center z-10">

        {/* NOME (texto normal) */}
        <h1 className="text-6xl font-bold">Andrew Doni</h1>

        <p className="text-xl text-gray-300">Desenvolvedor Backend & Mobile</p>

        {/* ÍCONES SOCIAIS */}
        <div className="flex space-x-6 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/euEndro"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all hover:scale-125"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 fill-white/50 hover:fill-white transition-colors"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/andrew-doni"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all hover:scale-125"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              fill="currentColor"
              className="w-10 h-10 fill-white/50 hover:fill-white transition-colors"
            >
              <title>LinkedIn</title>
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"/>
            </svg>
          </a>
        </div>

        {/* Botões com GlassSurface (mesma largura, alinhados) */}
        <div className="flex space-x-6 mt-6">
          <GlassSurface
            width={180}
            height={60}
            borderRadius={40}
            opacity={0.18}
            brightness={55}
            mixBlendMode="screen"
            className="flex items-center justify-center px-4 py-2 cursor-pointer transition-all"
          >
            <span className="text-lg font-medium transition-all duration-300 hover:scale-110 hover:font-bold">
              Projetos
            </span>
          </GlassSurface>

          <GlassSurface
            width={180}
            height={60}
            borderRadius={40}
            opacity={0.18}
            brightness={55}
            mixBlendMode="screen"
            className="flex items-center justify-center px-4 py-2 cursor-pointer transition-all"
          >
            <span className="text-lg font-medium transition-all duration-300 hover:scale-110 hover:font-bold">
              Contate-me
            </span>
          </GlassSurface>
        </div>
      </div>
    </div>
  );
}
