const TAPER = "polygon(3.5% 0%, 96.5% 0%, 100% 100%, 0% 100%)";

export function ShelfPanel({
  children,
  tone = "malachite",
  className = "",
  contentClassName = "",
  taper = true,
}) {
  const toneClasses =
    tone === "bone"
      ? "bg-bone joinery-light text-ink"
      : "bg-malachite-mid joinery text-bone";

  return (
    <div
      className={`${toneClasses} ${className}`}
      style={taper ? { clipPath: TAPER } : undefined}
    >
      <div className={`px-6 pt-7 pb-6 md:px-8 md:pt-9 md:pb-8 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}

export function ShelfDivider({ label }) {
  return (
    <div className="w-full flex items-center gap-4 px-4 md:px-0" aria-hidden="true">
      <span className="h-2 w-2 border border-bone-dim/50" />
      <span className="flex-1 border-t border-bone-dim/25" />
      {label && (
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-bone-dim/70">
          {label}
        </span>
      )}
      <span className="flex-1 border-t border-bone-dim/25" />
      <span className="h-2 w-2 border border-bone-dim/50" />
    </div>
  );
}
