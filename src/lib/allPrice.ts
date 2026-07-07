// Server-side best-effort spend price for $ALL. NEVER import into a client
// component. Looks the mint up by USD via Jupiter's price API, cached 60s via
// Next.js fetch revalidation — same pattern as the crypto/stock feeds.
//
// $ALL is distributed on a Flipcash reserve curve and may not be indexed by any
// DEX aggregator at launch. If the price can't be resolved we return null and
// the UI shows the spend model in words + a link to Flipcash — never a fake $.

import { ALL_MINT } from "@/data/all";

export interface AllPrice {
  usd: number | null;
  fetchedAt: number | null;
}

const PRICE_URL = `https://lite-api.jup.ag/price/v2?ids=${encodeURIComponent(ALL_MINT)}`;

interface JupPriceResponse {
  data?: {
    [mint: string]: { price?: string | number } | null;
  };
}

export async function getAllPrice(): Promise<AllPrice> {
  try {
    const res = await fetch(PRICE_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return { usd: null, fetchedAt: null };
    const json = (await res.json()) as JupPriceResponse;
    const raw = json.data?.[ALL_MINT]?.price;
    const usd = typeof raw === "string" ? parseFloat(raw) : raw;
    if (typeof usd !== "number" || !Number.isFinite(usd) || usd <= 0) {
      return { usd: null, fetchedAt: null };
    }
    return { usd, fetchedAt: Date.now() };
  } catch {
    return { usd: null, fetchedAt: null };
  }
}
