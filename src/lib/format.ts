// Formatting helpers. All money/percent rendering goes through here so the
// portfolio table and ticker stay consistent.

// USD with commas and 2 decimals; prices under $1 show more significant
// decimals so sub-dollar tokens don't collapse to "$0.00".
export function formatUsd(value: number): string {
  if (!Number.isFinite(value)) return "—";

  const abs = Math.abs(value);
  if (abs > 0 && abs < 1) {
    // Show 4–6 significant decimals for sub-dollar prices.
    const decimals = abs < 0.01 ? 6 : 4;
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Signed USD, e.g. "+$5,000.00" / "-$1,250.00".
export function formatSignedUsd(value: number): string {
  if (!Number.isFinite(value)) return "—";
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatUsd(Math.abs(value))}`;
}

// Signed percent, e.g. "+50.00%" / "-12.34%".
export function formatPct(value: number): string {
  if (!Number.isFinite(value)) return "—";
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${Math.abs(value).toFixed(2)}%`;
}

// Relative time like "just now", "2 minutes ago".
export function formatRelativeTime(from: number, now: number = Date.now()): string {
  const seconds = Math.max(0, Math.round((now - from) / 1000));
  if (seconds < 10) return "just now";
  if (seconds < 60) return `${seconds} seconds ago`;
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

// Human-friendly date, e.g. "Jun 5, 2026".
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Direction helper for coloring.
export type Direction = "up" | "down" | "flat";

export function direction(value: number): Direction {
  if (!Number.isFinite(value) || value === 0) return "flat";
  return value > 0 ? "up" : "down";
}
