import type { Metadata } from "next";
import { SITE, PREMIERE, LUMA_URL } from "@/data/site";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

const DESCRIPTION =
  "The This Week in Crypto season premiere is out. Watch it now, and RSVP on Luma so you never miss an episode.";

export const metadata: Metadata = {
  title: "Season Premiere",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `Season Premiere · ${SITE.name}`,
    description: DESCRIPTION,
    url: SITE.url,
    images: [
      {
        url: `https://i.ytimg.com/vi/${PREMIERE.youtubeId}/maxresdefault.jpg`,
        width: 1280,
        height: 720,
        alt: `${SITE.name} season premiere`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Season Premiere · ${SITE.name}`,
    description: DESCRIPTION,
    images: [`https://i.ytimg.com/vi/${PREMIERE.youtubeId}/maxresdefault.jpg`],
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
          {PREMIERE.season}
        </div>
      </header>

      {/* Hero — headline, premiere player, single follow CTA */}
      <main className="flex flex-1 flex-col justify-center px-5 pb-12 pt-4 sm:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* Kicker + status */}
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-yellow">
              {PREMIERE.kicker}
            </p>
            <span className="inline-flex items-center gap-2 bg-yellow px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
              {PREMIERE.airDate}
            </span>
            {PREMIERE.episode ? (
              <p className="font-mono text-xs tnum uppercase tracking-[0.14em] text-muted">
                {PREMIERE.season}
                <span className="mx-2 text-line">/</span>
                {PREMIERE.episode}
              </p>
            ) : null}
          </div>

          {/* Anton headline */}
          <h1 className="headline mt-4 text-white text-[clamp(2.5rem,8vw,6rem)]">
            {PREMIERE.headline}
          </h1>

          {/* Standfirst */}
          <p className="mt-4 max-w-2xl font-sans text-lg font-normal leading-snug text-white/80 sm:text-xl">
            {PREMIERE.standfirst}
          </p>

          {/* The premiere */}
          <YouTubeEmbed
            youtubeId={PREMIERE.youtubeId}
            title={`${SITE.name} — season premiere`}
            eager
            className="mt-8"
          />

          {/* The follow CTA — never miss an episode → Luma */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Get notified when the next one drops
            </p>
            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-stretch self-start border border-yellow bg-yellow text-ink transition-colors hover:bg-ink hover:text-yellow sm:self-auto"
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

      {/* Lower-third — full wordmark watermark */}
      <footer className="px-5 pb-6 sm:px-8">
        <div className="mx-auto w-full max-w-5xl border-t border-line pt-5">
          <p className="headline text-2xl text-white/30 sm:text-3xl">
            This Week in Crypto
          </p>
        </div>
      </footer>

      {/* Bottom broadcast rule */}
      <div className="h-1.5 w-full bg-yellow" aria-hidden="true" />
    </div>
  );
}
