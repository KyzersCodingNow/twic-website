import Link from "next/link";
import type { Metadata } from "next";
import { episodesSorted } from "@/data/episodes";
import { SectionHeader } from "@/components/SectionHeader";
import { EmailCapture } from "@/components/EmailCapture";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Episodes",
  description:
    "Every episode of This Week in Crypto — the trusted weekly news show for the people moving capital in crypto.",
  alternates: { canonical: "/episodes" },
};

export default function EpisodesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionHeader kicker="The archive" title="Episodes" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {episodesSorted.map((ep) => (
          <Link
            key={ep.number}
            href={`/episodes/${ep.number}`}
            className="group flex flex-col border border-[#2a2a2a] bg-panel transition-colors hover:border-gold"
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
            <div className="flex flex-1 flex-col p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Ep {ep.number} · {formatDate(ep.date)}
              </p>
              <h2 className="mt-2 font-display text-lg font-bold leading-tight tracking-tight text-bone group-hover:text-gold">
                {ep.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted">
                {ep.description}
              </p>
              {ep.guests && ep.guests.length > 0 ? (
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-gold">
                  With {ep.guests.join(", ")}
                </p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-20 border-t border-[#1f1f1f] pt-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tightest text-bone sm:text-4xl">
            Never miss an episode.
          </h2>
          <div className="mx-auto mt-8 max-w-lg text-left">
            <EmailCapture cta="Get TWIC weekly." />
          </div>
        </div>
      </section>
    </div>
  );
}
