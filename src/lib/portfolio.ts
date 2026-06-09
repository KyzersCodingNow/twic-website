// Portfolio math. Formulas are implemented exactly as specified.
//
//   units        = allocationUsd / entryPrice
//   currentValue = units * currentPrice
//   pnlUsd       = currentValue - allocationUsd
//   pnlPct       = ((currentPrice / entryPrice) - 1) * 100
//
// Totals:
//   totalAllocated = Σ allocationUsd
//   totalCurrent   = Σ currentValue
//   totalPnlUsd    = totalCurrent - totalAllocated
//   totalPnlPct    = ((totalCurrent / totalAllocated) - 1) * 100

import { priceKey, type PortfolioPosition } from "@/data/portfolio";
import type { PriceData } from "@/lib/prices";

export interface ComputedPosition extends PortfolioPosition {
  // Live values — null when prices are unavailable (graceful degradation).
  currentPrice: number | null;
  change24h: number | null;
  units: number;
  currentValue: number | null;
  pnlUsd: number | null;
  pnlPct: number | null;
  imageUrl: string | null;
}

export interface PortfolioTotals {
  totalAllocated: number;
  totalCurrent: number | null;
  totalPnlUsd: number | null;
  totalPnlPct: number | null;
}

export interface ComputedPortfolio {
  positions: ComputedPosition[];
  totals: PortfolioTotals;
  // True when at least one position has live price data.
  hasLivePrices: boolean;
}

export function computePortfolio(
  positions: PortfolioPosition[],
  prices: PriceData,
): ComputedPortfolio {
  const computed: ComputedPosition[] = positions.map((p) => {
    const entry = prices[priceKey(p)];
    const currentPrice = entry?.usd ?? null;
    const change24h = entry?.usd_24h_change ?? null;
    const units = p.allocationUsd / p.entryPrice;

    const currentValue = currentPrice !== null ? units * currentPrice : null;
    const pnlUsd = currentValue !== null ? currentValue - p.allocationUsd : null;
    const pnlPct =
      currentPrice !== null ? (currentPrice / p.entryPrice - 1) * 100 : null;

    return {
      ...p,
      currentPrice,
      change24h,
      units,
      currentValue,
      pnlUsd,
      pnlPct,
      imageUrl: entry?.image ?? null,
    };
  });

  const totalAllocated = computed.reduce((sum, p) => sum + p.allocationUsd, 0);

  const hasLivePrices = computed.some((p) => p.currentPrice !== null);

  // Totals only make sense when we have live values. If any position is
  // missing a price we still sum what we have, but a fully-unavailable feed
  // yields null totals rather than a misleading $0.00.
  const totalCurrent = hasLivePrices
    ? computed.reduce((sum, p) => sum + (p.currentValue ?? p.allocationUsd), 0)
    : null;

  const totalPnlUsd = totalCurrent !== null ? totalCurrent - totalAllocated : null;
  const totalPnlPct =
    totalCurrent !== null && totalAllocated > 0
      ? (totalCurrent / totalAllocated - 1) * 100
      : null;

  return {
    positions: computed,
    totals: { totalAllocated, totalCurrent, totalPnlUsd, totalPnlPct },
    hasLivePrices,
  };
}
