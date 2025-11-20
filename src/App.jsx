import LiquidEther from "./components/LiquidEther.jsx";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
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
  );
}
