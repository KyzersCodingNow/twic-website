// Server-side CoinGecko integration. NEVER import this into a client component.
//
// One batched request fetches every position's price + 24h change in a single
// call, cached for 60 seconds via Next.js fetch revalidation. This keeps us
// far under the free tier's rate limits regardless of traffic.

import { coingeckoIds, portfolio } from "@/data/portfolio";

export interface PriceEntry {
  usd: number;
  usd_24h_change: number;
  image?: string;
}

// Keyed by coingeckoId.
export type PriceData = Record<string, PriceEntry>;

export interface PriceResult {
  prices: PriceData;
  // Epoch ms when the data was fetched; null when the feed failed.
  fetchedAt: number | null;
  ok: boolean;
}

// CoinGecko image URLs are stable and derived from the coin id list. We fetch
// /coins/markets once to get logos; if it fails we degrade to no logos.
const SIMPLE_PRICE_URL =
  "https://api.coingecko.com/api/v3/simple/price" +
  `?ids=${encodeURIComponent(coingeckoIds)}` +
  "&vs_currencies=usd&include_24hr_change=true";

const MARKETS_URL =
  "https://api.coingecko.com/api/v3/coins/markets" +
  "?vs_currency=usd" +
  `&ids=${encodeURIComponent(coingeckoIds)}` +
  "&per_page=250&page=1&sparkline=false";

interface SimplePriceResponse {
  [id: string]: { usd?: number; usd_24h_change?: number };
}

interface MarketEntry {
  id: string;
  image?: string;
  current_price?: number;
  price_change_percentage_24h?: number;
}

export async function getPrices(): Promise<PriceResult> {
  try {
    // Prefer /coins/markets — it returns price, 24h change AND logo in one
    // batched call, satisfying the "single batched request" rule while also
    // giving us images. Fall back to /simple/price if markets is unavailable.
    const res = await fetch(MARKETS_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      const data = (await res.json()) as MarketEntry[];
      const prices: PriceData = {};
      for (const entry of data) {
        if (typeof entry.current_price === "number") {
          prices[entry.id] = {
            usd: entry.current_price,
            usd_24h_change: entry.price_change_percentage_24h ?? 0,
            image: entry.image,
          };
        }
      }
      if (Object.keys(prices).length > 0) {
        return { prices, fetchedAt: Date.now(), ok: true };
      }
    }

    // Fallback: simple/price (no logos).
    const fallback = await fetch(SIMPLE_PRICE_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (!fallback.ok) {
      return emptyResult();
    }
    const json = (await fallback.json()) as SimplePriceResponse;
    const prices: PriceData = {};
    for (const id of Object.keys(json)) {
      const v = json[id];
      if (typeof v.usd === "number") {
        prices[id] = {
          usd: v.usd,
          usd_24h_change: v.usd_24h_change ?? 0,
        };
      }
    }
    if (Object.keys(prices).length === 0) {
      return emptyResult();
    }
    return { prices, fetchedAt: Date.now(), ok: true };
  } catch {
    // Network error, timeout, JSON parse failure — degrade gracefully.
    return emptyResult();
  }
}

function emptyResult(): PriceResult {
  return { prices: {}, fetchedAt: null, ok: false };
}

// Re-export so consumers can reference the canonical list.
export { portfolio, coingeckoIds };
