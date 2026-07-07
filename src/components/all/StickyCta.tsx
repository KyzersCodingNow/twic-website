import { FLIPCASH_URL } from "@/data/all";

// The single persistent primary CTA for /all. Sticky bottom bar on mobile,
// pinned pill on desktop. Pure CSS sticky — no client JS. Opens Flipcash.
export function StickyCta() {
  return (
    <div className="pointer-events-none sticky bottom-0 z-30 flex justify-center px-4 pb-4 sm:justify-end sm:px-6 sm:pb-6">
      <a
        href={FLIPCASH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 border border-gold bg-gold px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-colors hover:bg-transparent hover:text-gold sm:w-auto"
      >
        Get $ALL on Flipcash
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
