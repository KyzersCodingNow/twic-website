import type { Metadata } from "next";
import { sponsors, sponsorStats } from "@/data/sponsors";
import { SectionHeader } from "@/components/SectionHeader";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "The TWIC Portfolio is category-exclusive. One wallet. One L1. One DeFi protocol. Become a TWIC sponsor.",
  alternates: { canonical: "/sponsors" },
};

const SPONSOR_EMAIL =
  process.env.NEXT_PUBLIC_SPONSOR_EMAIL || "sponsors@thisweekincrypto.show";

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="max-w-4xl font-display text-4xl font-black leading-[0.95] tracking-tightest text-bone sm:text-5xl lg:text-6xl">
        The TWIC Portfolio is category-exclusive. One wallet. One L1. One DeFi
        protocol.
      </h1>
      <div className="gold-rule mt-6 w-16" />

      {/* Stat strip — hard numbers only */}
      <div className="mt-12 grid grid-cols-1 divide-y divide-[#2a2a2a] border border-[#2a2a2a] bg-panel sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {sponsorStats.map((stat) => (
          <div key={stat.label} className="px-6 py-8 text-center">
            <div className="font-display text-4xl font-black tracking-tightest text-gold sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Sponsor grid */}
      <div className="mt-16">
        <SectionHeader kicker="Current desk" title="Sponsors" />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className="flex aspect-[3/2] flex-col items-center justify-center border border-[#2a2a2a] bg-panel p-4 text-center"
            >
              <div className="font-display text-sm font-bold text-bone">
                {s.name}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gold">
                {s.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="mt-20 border-t border-[#1f1f1f] pt-14 text-center">
        <h2 className="font-display text-3xl font-black tracking-tightest text-bone sm:text-4xl">
          Own your category.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          One sponsor per category. When it&rsquo;s taken, it&rsquo;s taken.
        </p>
        <a
          href={`mailto:${SPONSOR_EMAIL}?subject=TWIC%20Sponsorship`}
          className="mt-8 inline-block border border-gold bg-gold px-8 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-gold"
        >
          Become a sponsor
        </a>
      </section>
    </div>
  );
}
