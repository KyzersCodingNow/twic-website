// The TWIC Portfolio — the public, live-tracked list of assets the show stands
// behind. Add a position by appending an object here. Entry prices are
// placeholders using roughly current-ish values; correct them as needed.

export interface PortfolioPosition {
  name: string; // "Solana"
  symbol: string; // "SOL"
  coingeckoId: string; // "solana"
  entryDate: string; // ISO "2026-06-09"
  entryPrice: number; // USD price on entry date
  allocationUsd: number; // hypothetical allocation at entry, e.g. 10000
  category?: string; // "L1", "Wallet", "DeFi", "Payments", "Infrastructure"
  sponsor?: boolean; // true if this is a paying sponsor's asset
}

export const portfolio: PortfolioPosition[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    coingeckoId: "bitcoin",
    entryDate: "2026-01-06",
    entryPrice: 68000,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    name: "Solana",
    symbol: "SOL",
    coingeckoId: "solana",
    entryDate: "2026-01-06",
    entryPrice: 145,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    coingeckoId: "ethereum",
    entryDate: "2026-01-06",
    entryPrice: 3400,
    allocationUsd: 10000,
    category: "L1",
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
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
    coingeckoId: "helium",
    entryDate: "2026-01-06",
    entryPrice: 4.2,
    allocationUsd: 10000,
    category: "Infrastructure",
    sponsor: true,
  },
];

// Comma-separated CoinGecko ids for the single batched price request.
export const coingeckoIds = portfolio.map((p) => p.coingeckoId).join(",");
