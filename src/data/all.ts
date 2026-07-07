// $ALL economy — canonical facts, all derived from the whitepaper. Edit here;
// no $ALL content is hardcoded in JSX. When a value isn't final yet it is a
// clearly-marked placeholder rather than an invented number.

// The Solana mint behind the Flipcash token page. Used server-side to look up a
// live spend price; never a client-side call.
export const ALL_MINT =
  process.env.NEXT_PUBLIC_ALL_MINT ||
  "8Rr5EfMZHDiwc7bqMP6wyJRcG9BRovfWseqNtYrCCpwv";

// The single primary hand-off for the whole page: get / hold / spend $ALL.
export const FLIPCASH_URL =
  process.env.NEXT_PUBLIC_FLIPCASH_URL ||
  `https://app.flipcash.com/token/${ALL_MINT}`;

// Arm's-length enquiry inbox for advertising / spotlight (named, non-editorial
// business development per the firewall). Falls back to the sponsor address.
export const ALL_ENQUIRY_EMAIL =
  process.env.NEXT_PUBLIC_ALL_ADS_EMAIL ||
  process.env.NEXT_PUBLIC_SPONSOR_EMAIL ||
  "ads@thisweekincrypto.show";

export const ALL_FACTS = {
  ticker: "$ALL",
  // Fixed supply (§ Supply).
  supply: 21_000_000,
  // Fully-reserved USD-backed public curve (§2 The Reserve).
  reserveBacking: "a real USD reserve",
  // Redemption never rounds to zero (§2 / §4).
  redemptionFloor:
    "Backed by a real USD reserve. Redemption never rounds to zero.",
  // Ad-dollar burn split (§9). 50% of every advertising dollar is burned
  // forever and accrues pro-rata to every holder regardless of entry date.
  burnPct: 50,
  // The anchor tenant (§1 / §6).
  anchorTenant: "This Week in Crypto",
} as const;

// The standing disclosure line — the sentence this URL exists to carry, so it
// can be the one referenced "on every episode."
export const STANDING_DISCLOSURE =
  "$ALL is a currency for use within a network of participating communities. " +
  "This document is not an offer or solicitation to buy or sell any security " +
  "or other financial instrument, and nothing in it constitutes financial, " +
  "legal, or tax advice. Crypto involves substantial risk, including total " +
  "loss of funds. Do your own research.";

// The permanent editorial firewall line (§6–7).
export const EDITORIAL_FIREWALL =
  "TWIC does not cover $ALL. Projects we could cover aren't eligible " +
  "advertisers, at any price.";

// Canonical whitepaper artifact + its published hash (§10 Verification).
export const WHITEPAPER = {
  pdfPath: "/all-economy-paper.pdf",
  // §10 publishes a SHA-256 of the canonical PDF. Not finalized yet — shown as
  // a visible pending marker, never a fake hash.
  sha256: null as string | null,
  hashPending: "[PENDING VERIFICATION — published in §10 at launch]",
} as const;

// Whitepaper sections, for the /all/paper table of contents + deep-link anchors.
// Copy is a faithful, conservative summary; the signed PDF is canonical.
export interface PaperSection {
  id: string; // anchor
  number: string; // "1", "2", …
  title: string;
  summary: string;
}

export const PAPER_SECTIONS: PaperSection[] = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction",
    summary:
      "Tokens have climbed a ladder — creator, celebrity, community — each with a higher ceiling than the last. The fourth tier changes dimension rather than size: a currency's ceiling is measured in the commerce that flows through it, not a headcount of fans. Fans saturate; commerce compounds. $ALL is a shared currency for many communities and businesses, beginning with one anchor tenant, This Week in Crypto, entering first and in public.",
  },
  {
    id: "reserve",
    number: "2",
    title: "The Reserve",
    summary:
      "$ALL is launched on a fully-reserved public curve. It is non-custodial: every unit is purchased with US dollars into a reserve, and the only way to acquire it is buying from that public reserve at a published price. Because redemption is paid from the reserve, its value never rounds to zero. The reserve is the structural answer to the rug.",
  },
  {
    id: "no-allocation",
    number: "3",
    title: "No Allocation",
    summary:
      "No one receives a free allocation, a discount, or a reward for anything other than bringing paying customers into the economy. There is no presale, no private round, no foundation, and no investment contract.",
  },
  {
    id: "mathematics",
    number: "4",
    title: "The Mathematics",
    summary:
      "The reserve curve is published in full so it can be verified rather than trusted. Redemption value follows a fixed equation of total supply, reserve, and deposits — the same curve for everyone, forever, with no premium for arriving early and no penalty structure hidden for arriving late.",
  },
  {
    id: "utilities",
    number: "5",
    title: "What $ALL Buys",
    summary:
      "$ALL is spendable: peer-to-peer money, TWIC advertising inventory, a community spotlight that buys fun and never coverage, skill-and-timing contests, and — later — status. Every use is a price-to-spend, never a price-to-hold.",
  },
  {
    id: "firewall",
    number: "6",
    title: "The Anchor Tenant & Editorial Independence",
    summary:
      "TWIC does not cover $ALL, and projects the show could conceivably cover are not eligible advertisers — in any currency, at any price. Advertising is sold at arm's length by named people who make no editorial decisions; ads are clearly labeled; no editorial staffer is compensated in ways tied to $ALL's value.",
  },
  {
    id: "burn",
    number: "9",
    title: "The Burn",
    summary:
      "A fixed share of every advertising dollar — 50% — is burned forever and accrues pro-rata to every holder, regardless of when they entered. It is not merely $ALL's largest demand source but its fairness valve: it rewards no one for timing.",
  },
  {
    id: "disclosures",
    number: "8",
    title: "The Absence of a Promise",
    summary:
      "$ALL is a currency, not an investment. Nothing here should be read as a promise, representation, or hint that it will appreciate. The design does not whisper or wink at a return; a currency that must be advertised into existence as a bet is a warning sign, and this paper treats it as one.",
  },
  {
    id: "verification",
    number: "10",
    title: "Verification",
    summary:
      "Contract, reserve, mint, and burn addresses; the audit link; the upgrade-authority status; the fixed supply and burn split; and the SHA-256 hash of this document are all published on-chain and in this section so anyone can verify rather than accept. If any entry cannot be filled in truthfully by launch day, the launch waits.",
  },
  {
    id: "failure",
    number: "11",
    title: "Failure Conditions",
    summary:
      "This section states, in advance, what failure looks like. $ALL has failed if sustaining it ever requires promotional pressure from the show, and it has failed catastrophically if it ever compromises a single editorial decision. That is the point of the architecture.",
  },
];
