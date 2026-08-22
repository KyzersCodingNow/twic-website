import type { Metadata } from "next";
import { SITE, PREMIERE, LUMA_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Season Premiere",
  description:
    "This Week in Crypto returns for a new season. RSVP on Luma so you never miss an episode.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${PREMIERE.season} Premiere · ${SITE.name}`,
    description:
      "This Week in Crypto returns for a new season. RSVP on Luma so you never miss an episode.",
    url: SITE.url,
  },
};

// Compact "TWIC bar" mark — the yellow bar hugs the word, never a square.
function TwicBar({ className = "" }: { className?: string }) {
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

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-ink">
      {/* Top broadcast rule */}
      <div className="h-1.5 w-full bg-yellow" aria-hidden="true" />

      {/* Header — compact mark + live tag */}
      <header className="flex items-center justify-between px-5 py-5 sm:px-8">
        <TwicBar />
        <div className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <span
            className="inline-block h-2 w-2 bg-yellow animate-blink"
            aria-hidden="true"
          />
          New Season
        </div>
      </header>

      {/* Hero — the breaking-news card, full-bleed */}
      <main className="flex flex-1 flex-col justify-center px-5 py-10 sm:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* Kicker */}
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-yellow">
            {PREMIERE.kicker}
          </p>

          {/* Season · Episode data line */}
          <p className="mt-3 font-mono text-sm tnum uppercase tracking-[0.14em] text-muted">
            {PREMIERE.season}
            {PREMIERE.episode ? (
              <>
                <span className="mx-2 text-line">/</span>
                {PREMIERE.episode}
              </>
            ) : null}
          </p>

          {/* Anton headline */}
          <h1 className="headline mt-5 text-white text-[clamp(2.75rem,11vw,8.5rem)]">
            {PREMIERE.headline}
          </h1>

          {/* Standfirst */}
          <p className="mt-6 max-w-2xl font-sans text-lg font-normal leading-snug text-white/80 sm:text-xl">
            {PREMIERE.standfirst}
          </p>

          {/* Air date — mono, broadcast timestamp style */}
          <p className="mt-6 inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <span className="h-1.5 w-1.5 bg-yellow" aria-hidden="true" />
            {PREMIERE.airDate}
          </p>

          {/* The single CTA — never miss an episode → Luma */}
          <div className="mt-10">
            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-stretch border border-yellow bg-yellow text-ink transition-colors hover:bg-ink hover:text-yellow"
            >
              <span className="flex flex-col justify-center px-6 py-4 sm:px-8">
                <span className="font-display text-base font-black uppercase tracking-tight sm:text-lg">
                  Never miss an episode
                </span>
                <span className="mt-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] opacity-70">
                  RSVP on Luma
                </span>
              </span>
              <span
                className="flex items-center border-l border-ink/20 px-5 font-display text-2xl font-black group-hover:border-yellow/30"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Lower-third — full wordmark watermark + timestamp */}
      <footer className="px-5 pb-6 sm:px-8">
        <div className="mx-auto w-full max-w-5xl border-t border-line pt-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <p className="headline text-2xl text-white/30 sm:text-3xl">
              This Week in Crypto
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              New episodes every week
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom broadcast rule */}
      <div className="h-1.5 w-full bg-yellow" aria-hidden="true" />
    </div>
  );
}
