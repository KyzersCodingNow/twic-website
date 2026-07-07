import Link from "next/link";
import type { Metadata } from "next";
import {
  ALL_FACTS,
  ALL_MINT,
  WHITEPAPER,
  PAPER_SECTIONS,
  STANDING_DISCLOSURE,
} from "@/data/all";

export const metadata: Metadata = {
  title: "$ALL Whitepaper",
  description:
    "The $ALL economy paper — a shared community currency backed by a real USD reserve. Readable web edition with the canonical PDF and its published verification.",
  alternates: { canonical: "/all/paper" },
};

// §10 verification table. Real values are filled where known; everything not yet
// finalized is a visible placeholder, never a fabricated address or hash.
const VERIFICATION_ROWS: { label: string; value: string; mono?: boolean }[] = [
  { label: "Token mint", value: ALL_MINT, mono: true },
  { label: "Fixed supply", value: `${ALL_FACTS.supply.toLocaleString("en-US")} $ALL`, mono: true },
  { label: "Ad-revenue burn split", value: `${ALL_FACTS.burnPct}% burned, forever`, mono: true },
  { label: "Contract address", value: "[PLACEHOLDER: published in §10 at launch]" },
  { label: "Reserve address", value: "[PLACEHOLDER: published in §10 at launch]" },
  { label: "Burn address / mechanism", value: "[PLACEHOLDER: published in §10 at launch]" },
  { label: "Upgrade authority", value: "[PLACEHOLDER: non-upgradeable, verified at launch]" },
  { label: "Audit", value: "[PLACEHOLDER: audit link at launch]" },
  { label: "Team holdings", value: "[PLACEHOLDER: on-chain history at launch]" },
];

export default function PaperPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      {/* Standing disclosure — pinned at the top; the line this URL carries */}
      <div
        role="note"
        className="border border-[#2a2a2a] bg-panel px-4 py-3 font-mono text-xs leading-relaxed text-muted"
      >
        {STANDING_DISCLOSURE}
      </div>

      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Whitepaper
        </p>
        <h1 className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-tightest text-bone sm:text-5xl">
          $ALL: A Shared Community Currency
        </h1>
        <p className="mt-4 text-muted">
          The readable web edition. The canonical version is the signed PDF
          below; where the two differ, the PDF wins.
        </p>
      </header>

      {/* Download + published hash (§10) */}
      <div className="mt-8 flex flex-col gap-4 border border-[#2a2a2a] bg-panel p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href={WHITEPAPER.pdfPath}
            download
            className="inline-flex items-center gap-2 border border-gold bg-gold px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            Download the PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            SHA-256
          </p>
          <p className="mt-1 break-all font-mono text-xs tnum text-bone">
            {WHITEPAPER.sha256 ?? WHITEPAPER.hashPending}
          </p>
        </div>
      </div>

      {/* Table of contents — deep-link anchors */}
      <nav aria-label="Whitepaper sections" className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Contents
        </p>
        <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
          {PAPER_SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex gap-2 py-1 font-mono text-sm text-bone hover:text-gold"
              >
                <span className="tnum text-muted">§{s.number}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="gold-rule mt-8 w-16" />

      {/* Sections */}
      <div className="mt-12 space-y-12">
        {PAPER_SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl font-extrabold tracking-tightest text-bone">
              <span className="font-mono text-base tnum text-gold">§{s.number}</span>{" "}
              {s.title}
            </h2>
            <p className="mt-3 leading-relaxed text-bone">{s.summary}</p>

            {/* §10 gets the verification table inline */}
            {s.id === "verification" ? (
              <div className="mt-6 overflow-x-auto border border-[#2a2a2a]">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">
                    $ALL verification table — addresses and hashes published at
                    launch.
                  </caption>
                  <tbody>
                    {VERIFICATION_ROWS.map((row) => (
                      <tr key={row.label} className="border-b border-[#1a1a1a] last:border-0">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted"
                        >
                          {row.label}
                        </th>
                        <td
                          className={`px-4 py-3 text-bone ${row.mono ? "font-mono text-xs tnum break-all" : "text-sm"}`}
                        >
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {/* Back to Use $ALL */}
      <div className="mt-16 border-t border-[#1f1f1f] pt-8">
        <Link
          href="/all"
          className="font-display text-sm font-bold uppercase tracking-wide text-gold hover:underline"
        >
          ← Back to Use $ALL
        </Link>
      </div>
    </div>
  );
}
