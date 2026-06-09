"use client";

import { useRouter } from "next/navigation";
import { ArrowUpIcon, ArrowDownIcon } from "@/components/icons";
import { formatUsd, formatPct, direction } from "@/lib/format";

export interface TickerItem {
  symbol: string;
  price: number | null;
  change24h: number | null;
}

interface TickerTapeProps {
  items: TickerItem[];
  // Shown when the live feed is down.
  degraded?: boolean;
}

// Auto-scrolling marquee of portfolio assets. Pauses on hover, routes to
// /portfolio on click. Data is identical to the Portfolio page.
export function TickerTape({ items, degraded = false }: TickerTapeProps) {
  const router = useRouter();

  if (items.length === 0) return null;

  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];

  return (
    <button
      type="button"
      onClick={() => router.push("/portfolio")}
      aria-label="View the full TWIC Portfolio"
      className="ticker-mask group block w-full overflow-hidden border-y border-[#1f1f1f] bg-panel py-3 text-left"
    >
      <div className="ticker-track animate-ticker">
        {doubled.map((item, i) => (
          <TickerCell key={`${item.symbol}-${i}`} item={item} degraded={degraded} />
        ))}
      </div>
    </button>
  );
}

function TickerCell({ item, degraded }: { item: TickerItem; degraded: boolean }) {
  const dir = item.change24h !== null ? direction(item.change24h) : "flat";
  const color =
    dir === "up" ? "text-gain" : dir === "down" ? "text-loss" : "text-muted";

  return (
    <span className="mx-6 inline-flex items-center gap-2 font-mono text-sm tnum">
      <span className="font-bold text-bone">{item.symbol}</span>
      <span className="text-bone">
        {item.price !== null ? formatUsd(item.price) : "—"}
      </span>
      {!degraded && item.change24h !== null ? (
        <span className={`inline-flex items-center gap-0.5 ${color}`}>
          {dir === "up" ? (
            <ArrowUpIcon className="h-3 w-3" />
          ) : dir === "down" ? (
            <ArrowDownIcon className="h-3 w-3" />
          ) : null}
          {formatPct(item.change24h)}
        </span>
      ) : (
        <span className="text-muted">·</span>
      )}
    </span>
  );
}
