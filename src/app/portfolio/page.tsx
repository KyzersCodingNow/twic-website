import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { getPrices } from "@/lib/prices";
import { computePortfolio } from "@/lib/portfolio";
import { PortfolioTable } from "@/components/PortfolioTable";
import { PriceTimestamp } from "@/components/PriceTimestamp";
import { SectionHeader } from "@/components/SectionHeader";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The TWIC Portfolio — the public, live-tracked list of assets the show stands behind. Every position shows exactly how it has performed since the day it entered.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const { prices, fetchedAt, ok } = await getPrices();
  const data = computePortfolio(portfolio, prices);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionHeader
        kicker="Transparency is the product"
        title="The TWIC Portfolio"
      />
      <p className="mt-6 max-w-2xl text-muted">
        The public, live-tracked list of assets the show stands behind. Every
        position shows exactly how it has performed since the day it entered the
        portfolio — no edits, no hindsight.
      </p>

      {/* Degradation banner */}
      {!ok ? (
        <div
          role="status"
          className="mt-8 border border-loss/40 bg-loss/10 px-4 py-3 text-sm text-bone"
        >
          Live prices temporarily unavailable. Showing entry data below; values
          will refresh automatically.
        </div>
      ) : null}

      <div className="mt-8">
        <PortfolioTable data={data} />
      </div>

      <div className="mt-6 flex flex-col gap-2 border-t border-[#1f1f1f] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <PriceTimestamp fetchedAt={fetchedAt} />
        <p className="font-mono text-xs text-muted">
          Hypothetical allocations · not investment advice
        </p>
      </div>

      {/* Email capture — every page ends with one */}
      <section className="mt-20 border-t border-[#1f1f1f] pt-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tightest text-bone sm:text-4xl">
            Track the desk every week.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Get the portfolio moves and the stories behind them in your inbox.
          </p>
          <div className="mx-auto mt-8 max-w-lg text-left">
            <EmailCapture cta="Get TWIC weekly." />
          </div>
        </div>
      </section>
    </div>
  );
}
