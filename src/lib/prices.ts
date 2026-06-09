// Server-side price integration. NEVER import this into a client component.
//
// Crypto: ONE batched CoinGecko request for all crypto positions.
// Stocks: per-symbol Yahoo Finance chart requests (keyless), run in parallel.
//
// Everything is fetched server-side and cached 60s via Next.js fetch
// revalidation, keeping us far under any rate limits regardless of traffic.
// The merged map is keyed by `priceKey()` (e.g. "crypto:solana", "stock:TTWO").

import { coingeckoIds, stockSymbols } from "@/data/portfolio";

export interface PriceEntry {
  usd: number;
  usd_24h_change: number;
  image?: string;
}

// Keyed by priceKey(): "crypto:<id>" | "stock:<symbol>".
export type PriceData = Record<string, PriceEntry>;

export interface PriceResult {
  prices: PriceData;
  // Epoch ms when the data was fetched; null when every feed failed.
  fetchedAt: number | null;
  ok: boolean;
}

const MARKETS_URL =
  "https://api.coingecko.com/api/v3/coins/markets" +
  "?vs_currency=usd" +
  `&ids=${encodeURIComponent(coingeckoIds)}` +
  "&per_page=250&page=1&sparkline=false";

const SIMPLE_PRICE_URL =
  "https://api.coingecko.com/api/v3/simple/price" +
  `?ids=${encodeURIComponent(coingeckoIds)}` +
  "&vs_currencies=usd&include_24hr_change=true";

interface MarketEntry {
  id: string;
  image?: string;
  current_price?: number;
  price_change_percentage_24h?: number;
}

interface SimplePriceResponse {
  [id: string]: { usd?: number; usd_24h_change?: number };
}

interface YahooChartResponse {
  chart?: {
    result?: {
      meta?: {
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        previousClose?: number;
      };
    }[];
    error?: unknown;
  };
}

// Single batched CoinGecko call. Returns a map keyed "crypto:<id>".
async function getCryptoPrices(): Promise<PriceData> {
  if (!coingeckoIds) return {};
  try {
    const res = await fetch(MARKETS_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const data = (await res.json()) as MarketEntry[];
      const prices: PriceData = {};
      for (const entry of data) {
        if (typeof entry.current_price === "number") {
          prices[`crypto:${entry.id}`] = {
            usd: entry.current_price,
            usd_24h_change: entry.price_change_percentage_24h ?? 0,
            image: entry.image,
          };
        }
      }
      if (Object.keys(prices).length > 0) return prices;
    }

    // Fallback: simple/price (no logos).
    const fallback = await fetch(SIMPLE_PRICE_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (!fallback.ok) return {};
    const json = (await fallback.json()) as SimplePriceResponse;
    const prices: PriceData = {};
    for (const id of Object.keys(json)) {
      const v = json[id];
      if (typeof v.usd === "number") {
        prices[`crypto:${id}`] = {
          usd: v.usd,
          usd_24h_change: v.usd_24h_change ?? 0,
        };
      }
    }
    return prices;
  } catch {
    return {};
  }
}

// One keyless Yahoo Finance chart request per symbol. 24h change is derived
// from the latest price vs the previous close. Returns "stock:<symbol>".
async function getStockPrices(): Promise<PriceData> {
  if (stockSymbols.length === 0) return {};

  const results = await Promise.allSettled(
    stockSymbols.map((symbol) => fetchYahooQuote(symbol)),
  );

  const prices: PriceData = {};
  results.forEach((result, i) => {
    if (result.status === "fulfilled" && result.value) {
      prices[`stock:${stockSymbols[i]}`] = result.value;
    }
  });
  return prices;
}

async function fetchYahooQuote(symbol: string): Promise<PriceEntry | null> {
  const url =
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}` +
    "?interval=1d&range=1d";
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        Accept: "application/json",
        // Yahoo rejects requests without a UA.
        "User-Agent": "Mozilla/5.0 (compatible; TWIC/1.0)",
      },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as YahooChartResponse;
    const meta = json.chart?.result?.[0]?.meta;
    const price = meta?.regularMarketPrice;
    if (typeof price !== "number") return null;
    const prevClose = meta?.previousClose ?? meta?.chartPreviousClose;
    const change24h =
      typeof prevClose === "number" && prevClose > 0
        ? (price / prevClose - 1) * 100
        : 0;
    return { usd: price, usd_24h_change: change24h };
  } catch {
    return null;
  }
}

export async function getPrices(): Promise<PriceResult> {
  const [crypto, stocks] = await Promise.all([
    getCryptoPrices(),
    getStockPrices(),
  ]);

  const prices: PriceData = { ...crypto, ...stocks };
  const ok = Object.keys(prices).length > 0;

  return {
    prices,
    fetchedAt: ok ? Date.now() : null,
    ok,
  };
}
