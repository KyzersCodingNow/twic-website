// Compact "TWIC bar" mark — the yellow bar hugs the word, never a square.
export function TwicBar({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center bg-yellow px-2 py-0.5 font-display text-lg font-black leading-none tracking-tight text-ink ${className}`}
    >
      TWIC
      {/* cube period */}
      <span className="ml-[3px] inline-block h-[7px] w-[7px] bg-ink" aria-hidden="true" />
    </span>
  );
}
