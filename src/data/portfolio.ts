// The TWIC Portfolio — the public, live-tracked list of assets the show stands
// behind. Positions can be crypto (priced via CoinGecko) or stocks (priced via
// Yahoo Finance). Add a position by appending an object here. Entry prices are
// placeholders using roughly current-ish values; correct them as needed.

export type AssetType = "crypto" | "stock";

export interface PortfolioPosition {
  name: string; // "Solana" / "Take-Two Interactive"
  symbol: string; // "SOL" / "TTWO"
  assetType: AssetType; // "crypto" | "stock"
  coingeckoId?: string; // required when assetType === "crypto", e.g. "solana"
  yahooSymbol?: string; // required when assetType === "stock", e.g. "TTWO"
  entryDate: string; // ISO "2026-06-09"
  entryPrice: number; // USD price on entry date
  allocationUsd: number; // hypothetical allocation at entry, e.g. 10000
  category?: string; // "L1", "Wallet", "DeFi", "Payments", "Infrastructure", "Equities"
  sponsor?: boolean; // true if this is a paying sponsor's asset
}

export const portfolio: PortfolioPosition[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    assetType: "crypto",
    coingeckoId: "bitcoin",
    entryDate: "2026-01-06",
    entryPrice: 68000,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    name: "Solana",
    symbol: "SOL",
    assetType: "crypto",
    coingeckoId: "solana",
    entryDate: "2026-01-06",
    entryPrice: 145,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    assetType: "crypto",
    coingeckoId: "ethereum",
    entryDate: "2026-01-06",
    entryPrice: 3400,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    assetType: "crypto",
    coingeckoId: "avalanche-2",
    entryDate: "2026-01-06",
    entryPrice: 36,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    // [PLACEHOLDER: sponsor token — replace with a real paying sponsor's asset]
    name: "Jupiter",
    symbol: "JUP",
    assetType: "crypto",
    coingeckoId: "jupiter-exchange-solana",
    entryDate: "2026-01-06",
    entryPrice: 0.85,
    allocationUsd: 10000,
    category: "DeFi",
    sponsor: true,
  },
  {
    // [PLACEHOLDER: sponsor token — replace with a real paying sponsor's asset]
    name: "Helium",
    symbol: "HNT",
    assetType: "crypto",
    coingeckoId: "helium",
    entryDate: "2026-01-06",
    entryPrice: 4.2,
    allocationUsd: 10000,
    category: "Infrastructure",
    sponsor: true,
  },
  {
    // [PLACEHOLDER: entry price — correct to the real price on your entry date]
    name: "Take-Two Interactive",
    symbol: "TTWO",
    assetType: "stock",
    yahooSymbol: "TTWO",
    entryDate: "2026-01-06",
    entryPrice: 230,
    allocationUsd: 10000,
    category: "Equities",
  },
  {
    // [PLACEHOLDER: entry price — correct to the real price on your entry date]
    name: "Nintendo (ADR)",
    symbol: "NTDOY",
    assetType: "stock",
    yahooSymbol: "NTDOY",
    entryDate: "2026-01-06",
    entryPrice: 17,
    allocationUsd: 10000,
    category: "Equities",
  },
];

// Stable key used to look a position up in the merged price map. Namespaced by
// asset type so a crypto id and a stock ticker can never collide.
export function priceKey(p: PortfolioPosition): string {
  return p.assetType === "stock"
    ? `stock:${p.yahooSymbol}`
    : `crypto:${p.coingeckoId}`;
}

// Comma-separated CoinGecko ids for the single batched crypto price request.
export const coingeckoIds = portfolio
  .filter((p) => p.assetType === "crypto" && p.coingeckoId)
  .map((p) => p.coingeckoId)
  .join(",");

// Yahoo ticker symbols for the stock price requests.
export const stockSymbols = portfolio
  .filter((p) => p.assetType === "stock" && p.yahooSymbol)
  .map((p) => p.yahooSymbol as string);
