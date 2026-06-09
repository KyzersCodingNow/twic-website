import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { episodes, getEpisode } from "@/data/episodes";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { EmailCapture } from "@/components/EmailCapture";
import { formatDate } from "@/lib/format";

interface PageProps {
  params: { number: string };
}

// Pre-render every episode at build time.
export function generateStaticParams() {
  return episodes.map((e) => ({ number: String(e.number) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const ep = getEpisode(Number(params.number));
  if (!ep) return { title: "Episode not found" };
  return {
    title: `Ep ${ep.number}: ${ep.title}`,
    description: ep.description,
    alternates: { canonical: `/episodes/${ep.number}` },
    openGraph: {
      title: `Ep ${ep.number}: ${ep.title}`,
      description: ep.description,
      images: [`https://i.ytimg.com/vi/${ep.youtubeId}/maxresdefault.jpg`],
    },
  };
}

export default function EpisodeDetailPage({ params }: PageProps) {
  const number = Number(params.number);
  if (!Number.isInteger(number)) notFound();
  const ep = getEpisode(number);
  if (!ep) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <Link
        href="/episodes"
        className="font-display text-sm font-bold uppercase tracking-wide text-gold hover:underline"
      >
        ← All episodes
      </Link>

      <header className="mt-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Episode {ep.number} · {formatDate(ep.date)}
        </p>
        <h1 className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-tightest text-bone sm:text-5xl">
          {ep.title}
        </h1>
        {ep.guests && ep.guests.length > 0 ? (
          <p className="mt-4 font-mono text-sm uppercase tracking-wider text-gold">
            With {ep.guests.join(", ")}
          </p>
        ) : null}
      </header>

      <div className="mt-8">
        <YouTubeEmbed
          youtubeId={ep.youtubeId}
          title={`Episode ${ep.number}: ${ep.title}`}
        />
      </div>

      <div className="mt-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-bone">{ep.description}</p>
      </div>

      <section className="mt-16 border-t border-[#1f1f1f] pt-12">
        <h2 className="font-display text-2xl font-extrabold tracking-tightest text-bone">
          Get TWIC weekly.
        </h2>
        <p className="mt-2 text-muted">
          The week in crypto, distilled — in your inbox every week.
        </p>
        <div className="mt-6 max-w-lg">
          <EmailCapture cta="Get TWIC weekly." />
        </div>
      </section>
    </div>
  );
}
