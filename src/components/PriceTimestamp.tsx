"use client";

import { useEffect, useState } from "react";
import { formatRelativeTime } from "@/lib/format";

interface PriceTimestampProps {
  // Epoch ms when prices were fetched; null when the feed is down.
  fetchedAt: number | null;
}

// "Prices updated <relative time> · Data by CoinGecko". CoinGecko attribution
// is required by their free tier.
export function PriceTimestamp({ fetchedAt }: PriceTimestampProps) {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="font-mono text-xs text-muted">
      {fetchedAt !== null ? (
        <>Prices updated {formatRelativeTime(fetchedAt, now)} · </>
      ) : (
        <>Live prices temporarily unavailable · </>
      )}
      Data by{" "}
      <a
        href="https://www.coingecko.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-dotted hover:text-gold"
      >
        CoinGecko
      </a>
    </p>
  );
}
