
import { AndrewMonogram } from "./CabinetIcons.jsx";

export default function Colophon() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-bone-dim/20 py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <AndrewMonogram className="h-4 w-auto text-bone-dim" />
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-bone-dim">
            Andrew Doni ({year})
          </span>
        </div>
        <span className="font-mono text-[11px] tracking-[0.1em] text-bone-dim/70">
          built by hand, catalogued in full
        </span>
      </div>
    </footer>
  );
}
