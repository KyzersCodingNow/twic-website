import Link from "next/link";
import type { Metadata } from "next";
import { SITE, ENDORSEMENT } from "@/data/site";
import { episodesSorted, latestEpisode } from "@/data/episodes";
import { portfolio, priceKey } from "@/data/portfolio";
import { getPrices } from "@/lib/prices";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { EmailCapture } from "@/components/EmailCapture";
import { TickerTape, type TickerItem } from "@/components/TickerTape";
import { SectionHeader } from "@/components/SectionHeader";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  // Home uses the bare site name, not the template.
  title: SITE.name,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const { prices, ok } = await getPrices();

  const tickerItems: TickerItem[] = portfolio.map((p) => {
    const entry = prices[priceKey(p)];
    return {
      symbol: p.symbol,
      price: entry?.usd ?? null,
      change24h: entry?.usd_24h_change ?? null,
    };
  });

  const recent = episodesSorted.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#1f1f1f]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                New episode every week
              </p>
              <h1 className="mt-4 font-display text-6xl font-black leading-[0.9] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
                {SITE.wordmark}
                <span className="text-gold">.</span>
              </h1>
              <p className="mt-6 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-bone sm:text-3xl">
                {SITE.tagline}
              </p>
              <div className="mt-8 max-w-lg">
                <EmailCapture variant="hero" cta="Get TWIC weekly." />
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Latest · Episode {latestEpisode.number}
                </p>
                <Link
                  href={`/episodes/${latestEpisode.number}`}
                  className="font-display text-xs font-bold uppercase tracking-wide text-gold hover:underline"
                >
                  Watch full →
                </Link>
              </div>
              <YouTubeEmbed
                youtubeId={latestEpisode.youtubeId}
                title={`Episode ${latestEpisode.number}: ${latestEpisode.title}`}
              />
              <h2 className="mt-3 font-display text-lg font-bold tracking-tight text-bone">
                {latestEpisode.title}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <TickerTape items={tickerItems} degraded={!ok} />

      {/* RECENT EPISODES */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeader kicker="On the show" title="Recent episodes" />
          <Link
            href="/episodes"
            className="hidden font-display text-sm font-bold uppercase tracking-wide text-gold hover:underline sm:block"
          >
            All episodes →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((ep) => (
            <Link
              key={ep.number}
              href={`/episodes/${ep.number}`}
              className="group block border border-[#2a2a2a] bg-panel transition-colors hover:border-gold"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                  alt={`Episode ${ep.number} thumbnail`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Ep {ep.number} · {formatDate(ep.date)}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight tracking-tight text-bone group-hover:text-gold">
                  {ep.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/episodes"
          className="mt-8 block font-display text-sm font-bold uppercase tracking-wide text-gold hover:underline sm:hidden"
        >
          All episodes →
        </Link>
      </section>

      {/* ENDORSEMENT */}
      <section className="border-y border-[#1f1f1f] bg-panel">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <blockquote className="font-display text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-4xl">
            &ldquo;{ENDORSEMENT.quote}&rdquo;
          </blockquote>
          <cite className="mt-6 block font-mono text-sm not-italic uppercase tracking-wider text-gold">
            — {ENDORSEMENT.attribution}
          </cite>
        </div>
      </section>

      {/* SECOND EMAIL CAPTURE */}
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h2 className="font-display text-4xl font-black tracking-tightest text-bone sm:text-5xl">
          The week in crypto, distilled.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          One email a week for the people moving capital. Join the desk.
        </p>
        <div className="mx-auto mt-8 max-w-lg text-left">
          <EmailCapture cta="Get TWIC weekly." />
        </div>
      </section>
    </>
  );
}
