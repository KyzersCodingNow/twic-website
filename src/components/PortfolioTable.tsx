"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ComputedPortfolio, ComputedPosition } from "@/lib/portfolio";
import { priceKey } from "@/data/portfolio";
import {
  formatUsd,
  formatSignedUsd,
  formatPct,
  formatDate,
  direction,
} from "@/lib/format";
import { ArrowUpIcon, ArrowDownIcon } from "@/components/icons";

type SortKey =
  | "name"
  | "category"
  | "entryDate"
  | "entryPrice"
  | "currentPrice"
  | "change24h"
  | "pnlUsd"
  | "pnlPct";

type SortDir = "asc" | "desc";

interface PortfolioTableProps {
  data: ComputedPortfolio;
}

const COLUMNS: { key: SortKey; label: string; numeric: boolean }[] = [
  { key: "name", label: "Asset", numeric: false },
  { key: "category", label: "Category", numeric: false },
  { key: "entryDate", label: "Entry Date", numeric: false },
  { key: "entryPrice", label: "Entry Price", numeric: true },
  { key: "currentPrice", label: "Current Price", numeric: true },
  { key: "change24h", label: "24h %", numeric: true },
  { key: "pnlUsd", label: "P&L ($)", numeric: true },
  { key: "pnlPct", label: "P&L (%)", numeric: true },
];

export function PortfolioTable({ data }: PortfolioTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("pnlPct");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const sorted = useMemo(() => {
    const rows = [...data.positions];
    rows.sort((a, b) => {
      const av = sortValue(a, sortKey);
      const bv = sortValue(b, sortKey);
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      const an = av as number;
      const bn = bv as number;
      // Nulls sort last regardless of direction.
      if (Number.isNaN(an) && Number.isNaN(bn)) return 0;
      if (Number.isNaN(an)) return 1;
      if (Number.isNaN(bn)) return -1;
      return sortDir === "asc" ? an - bn : bn - an;
    });
    return rows;
  }, [data.positions, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      // Numbers default to high→low, text to A→Z.
      const col = COLUMNS.find((c) => c.key === key);
      setSortDir(col?.numeric ? "desc" : "asc");
    }
  }

  return (
    <>
      {/* Desktop / tablet table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            TWIC Portfolio positions with live profit and loss since entry.
          </caption>
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              {COLUMNS.map((col) => {
                const active = col.key === sortKey;
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={`whitespace-nowrap px-3 py-3 font-mono text-xs uppercase tracking-wider ${
                      col.numeric ? "text-right" : "text-left"
                    }`}
                    aria-sort={
                      active ? (sortDir === "asc" ? "ascending" : "descending") : "none"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort(col.key)}
                      className={`inline-flex items-center gap-1 transition-colors hover:text-gold ${
                        active ? "text-gold" : "text-muted"
                      } ${col.numeric ? "flex-row-reverse" : ""}`}
                    >
                      <span>{col.label}</span>
                      {active ? (
                        <span aria-hidden="true">{sortDir === "asc" ? "▲" : "▼"}</span>
                      ) : null}
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((p) => (
              <tr
                key={priceKey(p)}
                className="border-b border-[#1a1a1a] transition-colors hover:bg-panel/50"
              >
                <td className="px-3 py-4">
                  <AssetCell position={p} />
                </td>
                <td className="px-3 py-4 text-muted">
                  {p.category ?? "—"}
                  {p.sponsor ? (
                    <span className="ml-2 border border-gold/40 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-gold">
                      Sponsor
                    </span>
                  ) : null}
                </td>
                <td className="px-3 py-4 font-mono text-muted tnum">
                  {formatDate(p.entryDate)}
                </td>
                <td className="px-3 py-4 text-right font-mono text-bone tnum">
                  {formatUsd(p.entryPrice)}
                </td>
                <td className="px-3 py-4 text-right font-mono text-bone tnum">
                  {p.currentPrice !== null ? formatUsd(p.currentPrice) : "—"}
                </td>
                <td className="px-3 py-4 text-right font-mono tnum">
                  <SignedPct value={p.change24h} />
                </td>
                <td className="px-3 py-4 text-right font-mono tnum">
                  <SignedUsd value={p.pnlUsd} />
                </td>
                <td className="px-3 py-4 text-right font-mono tnum">
                  <SignedPct value={p.pnlPct} showArrow />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-gold bg-gold/10">
              <td
                className="px-3 py-4 font-display text-base font-extrabold uppercase tracking-wide text-gold"
                colSpan={3}
              >
                Total
              </td>
              <td className="px-3 py-4 text-right font-mono text-bone tnum">
                {formatUsd(data.totals.totalAllocated)}
              </td>
              <td className="px-3 py-4 text-right font-mono text-bone tnum">
                {data.totals.totalCurrent !== null
                  ? formatUsd(data.totals.totalCurrent)
                  : "—"}
              </td>
              <td className="px-3 py-4" />
              <td className="px-3 py-4 text-right font-mono text-base font-bold tnum">
                <SignedUsd value={data.totals.totalPnlUsd} />
              </td>
              <td className="px-3 py-4 text-right font-mono text-base font-bold tnum">
                <SignedPct value={data.totals.totalPnlPct} showArrow />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {sorted.map((p) => (
          <li key={priceKey(p)} className="border border-[#2a2a2a] bg-panel p-4">
            <div className="flex items-center justify-between">
              <AssetCell position={p} />
              <div className="text-right font-mono text-lg font-bold tnum">
                <SignedPct value={p.pnlPct} showArrow />
              </div>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-y-1 text-sm">
              <dt className="text-muted">Current</dt>
              <dd className="text-right font-mono text-bone tnum">
                {p.currentPrice !== null ? formatUsd(p.currentPrice) : "—"}
              </dd>
              <dt className="text-muted">Entry</dt>
              <dd className="text-right font-mono text-bone tnum">
                {formatUsd(p.entryPrice)}
              </dd>
              <dt className="text-muted">24h</dt>
              <dd className="text-right font-mono tnum">
                <SignedPct value={p.change24h} />
              </dd>
              <dt className="text-muted">P&amp;L ($)</dt>
              <dd className="text-right font-mono tnum">
                <SignedUsd value={p.pnlUsd} />
              </dd>
            </dl>
          </li>
        ))}
        {/* Mobile totals band */}
        <li className="border-2 border-gold bg-gold/10 p-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-base font-extrabold uppercase tracking-wide text-gold">
              Total P&amp;L
            </span>
            <span className="text-right font-mono text-lg font-bold tnum">
              <SignedPct value={data.totals.totalPnlPct} showArrow />
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted">
              {formatUsd(data.totals.totalAllocated)} allocated
            </span>
            <span className="font-mono tnum">
              <SignedUsd value={data.totals.totalPnlUsd} />
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}

function AssetCell({ position }: { position: ComputedPosition }) {
  return (
    <div className="flex items-center gap-3">
      {position.imageUrl ? (
        <Image
          src={position.imageUrl}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 shrink-0 rounded-full"
          unoptimized
        />
      ) : (
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] font-mono text-[10px] font-bold text-muted"
          aria-hidden="true"
        >
          {position.symbol.slice(0, 3)}
        </div>
      )}
      <div className="leading-tight">
        <div className="font-semibold text-bone">{position.name}</div>
        <div className="font-mono text-xs text-muted">{position.symbol}</div>
        <ThesisLink />
      </div>
    </div>
  );
}

// Non-clickable link to a future thesis article. On hover (and keyboard focus)
// it crossfades from "Read thesis →" to "Coming Soon" in place — the two labels
// share one grid cell, so there's no layout shift and nothing to clip. A native
// title + sr-only text keep it accessible.
function ThesisLink() {
  return (
    <span
      className="group/thesis mt-1 inline-grid cursor-not-allowed select-none align-middle font-mono text-[11px] uppercase tracking-wider"
      title="Coming Soon"
      aria-disabled="true"
      tabIndex={0}
    >
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 text-muted underline decoration-dotted decoration-muted/50 underline-offset-2 transition-opacity duration-150 group-hover/thesis:opacity-0 group-focus/thesis:opacity-0"
      >
        Read thesis →
      </span>
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 whitespace-nowrap text-gold opacity-0 transition-opacity duration-150 group-hover/thesis:opacity-100 group-focus/thesis:opacity-100"
      >
        Coming soon
      </span>
      <span className="sr-only">Thesis article — coming soon</span>
    </span>
  );
}

function SignedUsd({ value }: { value: number | null }) {
  if (value === null) return <span className="text-muted">—</span>;
  const dir = direction(value);
  const color = dir === "up" ? "text-gain" : dir === "down" ? "text-loss" : "text-muted";
  return <span className={color}>{formatSignedUsd(value)}</span>;
}

function SignedPct({ value, showArrow = false }: { value: number | null; showArrow?: boolean }) {
  if (value === null) return <span className="text-muted">—</span>;
  const dir = direction(value);
  const color = dir === "up" ? "text-gain" : dir === "down" ? "text-loss" : "text-muted";
  return (
    <span className={`inline-flex items-center justify-end gap-0.5 ${color}`}>
      {showArrow && dir === "up" ? (
        <ArrowUpIcon className="h-3 w-3" />
      ) : showArrow && dir === "down" ? (
        <ArrowDownIcon className="h-3 w-3" />
      ) : null}
      {formatPct(value)}
    </span>
  );
}

function sortValue(p: ComputedPosition, key: SortKey): string | number {
  switch (key) {
    case "name":
      return p.name.toLowerCase();
    case "category":
      return (p.category ?? "").toLowerCase();
    case "entryDate":
      return p.entryDate;
    case "entryPrice":
      return p.entryPrice;
    case "currentPrice":
      return p.currentPrice ?? NaN;
    case "change24h":
      return p.change24h ?? NaN;
    case "pnlUsd":
      return p.pnlUsd ?? NaN;
    case "pnlPct":
      return p.pnlPct ?? NaN;
  }
}
