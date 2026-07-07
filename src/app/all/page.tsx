import Link from "next/link";
import type { Metadata } from "next";
import { utilities } from "@/data/utilities";
import {
  ALL_FACTS,
  FLIPCASH_URL,
  EDITORIAL_FIREWALL,
} from "@/data/all";
import { getAllPrice } from "@/lib/allPrice";
import { formatUsd } from "@/lib/format";
import { UtilityRow } from "@/components/all/UtilityRow";
import { StickyCta } from "@/components/all/StickyCta";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Use $ALL",
  description:
    "$ALL is a currency you can spend. Here's everything it buys — money, ad inventory, community spotlights, contests, and status — with This Week in Crypto as its anchor tenant.",
  alternates: { canonical: "/all" },
  openGraph: {
    title: "Use $ALL · This Week in Crypto",
    description:
      "$ALL is a currency you can spend. Here's everything it buys.",
    url: "/all",
  },
};

export default async function AllPage() {
  const { usd, fetchedAt } = await getAllPrice();

  return (
    <>
      <div className="mx-auto max-w-5xl px-5">
        {/* 1. HERO — utility, not price */}
        <section className="py-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            The shared currency of a network of communities
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-tightest text-bone sm:text-6xl lg:text-7xl">
            $ALL is a currency you can spend. Here&rsquo;s everything it buys.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-bone">
            One currency across many communities and businesses — with{" "}
            <span className="text-gold">{ALL_FACTS.anchorTenant}</span> as its
            anchor tenant, entering first and in public.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={FLIPCASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold bg-gold px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-gold"
            >
              Get $ALL on Flipcash <span aria-hidden="true">→</span>
            </a>
            {/* Live spend price — graceful degradation, never a fake number */}
            <span className="font-mono text-sm tnum text-muted">
              {usd !== null ? (
                <>
                  1 $ALL = <span className="text-bone">{formatUsd(usd)}</span> ·
                  live on Flipcash
                </>
              ) : (
                <>Priced live on Flipcash</>
              )}
            </span>
          </div>
        </section>
      </div>

      {/* 2. FLOOR STRIP — thin, mono, links to the paper */}
      <Link
        href="/all/paper#reserve"
        className="group block border-y border-[#1f1f1f] bg-panel"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <p className="font-mono text-xs tnum uppercase tracking-wider text-muted sm:text-sm">
            {ALL_FACTS.redemptionFloor}
          </p>
          <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-gold group-hover:underline">
            Read the paper →
          </span>
        </div>
      </Link>

      <div className="mx-auto max-w-5xl px-5">
        {/* 3. UTILITY SPINE */}
        <section className="py-16">
          <SectionHeader kicker="The spine" title="What it buys" />
          <div className="mt-8">
            {utilities.map((u) => (
              <UtilityRow key={u.id} utility={u} />
            ))}
          </div>
        </section>
      </div>

      {/* 4. BURN BAND — the fairness valve */}
      <section className="border-y border-gold bg-gold/10">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            The fairness valve
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tightest text-bone sm:text-4xl">
            <span className="tnum">{ALL_FACTS.burnPct}%</span> of every
            advertising dollar is burned forever.
          </h2>
          <p className="mt-4 max-w-2xl text-bone">
            The burn accrues pro-rata to every holder, regardless of when they
            entered. It rewards no one for timing — it is not $ALL&rsquo;s
            largest demand source alone, but its fairness valve.
          </p>
          <Link
            href="/all/paper#burn"
            className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-gold hover:underline"
          >
            How the burn is fixed and verified →
          </Link>
        </div>
      </section>

      {/* 5. EDITORIAL FIREWALL FOOTER — permanent */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="border-l-2 border-bone/20 pl-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Editorial firewall
          </p>
          <p className="mt-3 max-w-2xl font-display text-xl font-bold leading-snug tracking-tight text-bone sm:text-2xl">
            {EDITORIAL_FIREWALL}
          </p>
          <Link
            href="/all/paper#firewall"
            className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-gold hover:underline"
          >
            Why the constraint is a feature →
          </Link>
        </div>
      </section>

      <StickyCta />

      {/* Attribution for the live price source, only when live */}
      {fetchedAt !== null ? (
        <p className="mx-auto max-w-5xl px-5 pb-8 font-mono text-[11px] text-muted">
          Spend price via Jupiter · settled on Flipcash
        </p>
      ) : null}
    </>
  );
}
