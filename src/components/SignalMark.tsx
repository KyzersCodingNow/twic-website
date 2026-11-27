/** The approved Signal geometry. Keep its proportions and square corners intact. */
export function SignalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 156 130" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 0H78V26H26V104H0Z" />
      <path d="M52 52H104V26H156V52H130V78H78V104H52Z" />
      <path d="M130 78H156V130H104V104H130Z" />
      <path d="M0 114h16v16H0Z" />
    </svg>
  );
}
