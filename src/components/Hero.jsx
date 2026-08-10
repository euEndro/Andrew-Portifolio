
import { useT } from "./useT.js";
import { ShelfPanel } from "./Shelf.jsx";
import { IconCompass, IconServerRack, DocalliMark } from "./CabinetIcons.jsx";

export default function Hero() {
  const t = useT();

  const scrollToSection = (id, offset = -140) => {
    const el = document.getElementById(id);
    if (!el) return;

    try {
      if (window.lenis && typeof window.lenis.scrollTo === "function") {
        window.lenis.scrollTo(el, { offset });
        return;
      }
    } catch {}

    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-5 md:px-8 pt-28 pb-16 relative"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-10 items-end">

        {/* Left: name plate */}
        <div>
          <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-cinnabar mb-4">
            {t("hero_role")}
          </p>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.94] text-bone">
            {t("hero_name")}
          </h1>

          <div className="flex flex-wrap gap-4 mt-9">
            <button
              type="button"
              onClick={() => scrollToSection("contato")}
              className="font-mono text-[13px] tracking-[0.08em] uppercase bg-cinnabar text-bone px-6 py-3 hover:bg-cinnabar-deep transition-colors"
            >
              {t("hero_button2")}
            </button>

            <button
              type="button"
              onClick={() => window.open('https://docalli.com', '_blank')}
              className="font-mono text-[13px] tracking-[0.08em] uppercase border border-bone-dim/40 text-bone px-6 py-3 hover:border-bone hover:bg-bone hover:text-ink transition-colors"
            >
              {t("hero_button1")} ↗
            </button>
          </div>

          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/euEndro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-bone-dim hover:text-cinnabar transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/andrew-doni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-bone-dim hover:text-cinnabar transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" className="w-6 h-6">
                <title>LinkedIn</title>
                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: the entry shelf, first compartment of the cabinet */}
        <ShelfPanel tone="bone" className="w-full">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim mb-5">
            {t("hero_shelf_label")}
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center gap-2">
              <IconCompass className="w-8 h-8 text-ink" />
              <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-dim">{t("hero_shelf_architecture")}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <IconServerRack className="w-8 h-8 text-ink" />
              <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-dim">{t("hero_shelf_infrastructure")}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <DocalliMark className="w-8 h-8 text-cinnabar" />
              <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-dim">Docalli</span>
            </div>
          </div>
        </ShelfPanel>
      </div>
    </section>
  );
}
