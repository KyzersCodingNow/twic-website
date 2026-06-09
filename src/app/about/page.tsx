import type { Metadata } from "next";
import { ENDORSEMENT, SOCIALS } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "About",
  description:
    "This Week in Crypto is the trusted weekly news show for the people moving capital in crypto. Hosted by Kyzer Ricoy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <SectionHeader kicker="Who we are" title="About TWIC" />

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-bone">
        <p>
          <strong className="text-bone">This Week in Crypto</strong> is the
          trusted weekly news show for the people moving capital in crypto.
          Trustworthy, cool, entertaining — all three, every week.
        </p>
        <p>
          It&rsquo;s hosted by{" "}
          <strong className="text-bone">Kyzer Ricoy</strong>, who has spent a
          decade across <span className="text-gold">Kin</span>, the{" "}
          <span className="text-gold">Solana Foundation</span>, and{" "}
          <span className="text-gold">Avalanche</span> — building, shipping, and
          watching the industry from the inside.
        </p>
        <p>
          New episodes publish every week on X, YouTube, Spotify, and Apple
          Podcasts. No filler, no hype cycles — just the week that mattered, for
          the people who have to act on it.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider">
        <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          X
        </a>
        <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          YouTube
        </a>
        <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          Spotify
        </a>
        <a href={SOCIALS.apple} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          Apple Podcasts
        </a>
      </div>

      {/* The Lily Liu quote, large */}
      <figure className="mt-16 border-l-2 border-gold pl-6">
        <blockquote className="font-display text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-4xl">
          &ldquo;{ENDORSEMENT.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-4 font-mono text-sm uppercase tracking-wider text-gold">
          — {ENDORSEMENT.attribution}
        </figcaption>
      </figure>

      {/* Email capture */}
      <section className="mt-16 border-t border-[#1f1f1f] pt-12">
        <h2 className="font-display text-2xl font-extrabold tracking-tightest text-bone">
          Get TWIC weekly.
        </h2>
        <div className="mt-6 max-w-lg">
          <EmailCapture cta="Get TWIC weekly." />
        </div>
      </section>
    </div>
  );
}
