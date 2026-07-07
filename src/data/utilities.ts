// The utility spine of /all — the single source of truth for the five rows.
// No row content is hardcoded in JSX. Each row describes a price-to-SPEND
// (what it costs to DO the thing), never a price-to-hold.

export type UtilityStatus = "live" | "soon";

// How the row hands off — chosen for security (see /all page + whitepaper §5–§9):
// - "spend"           payer acts in their own Flipcash wallet (P2P money)
// - "payment-request" funds move payer → TWIC directly (collect); no bearer link
// - "auction-request" sealed bid + pitch to TWIC, TWIC may decline any suggestion
// - "none"            not yet wired (coming soon)
export type FlipcashFlow = "spend" | "payment-request" | "auction-request" | "none";

// Which safe action the row's button triggers. A Flipcash claim/claimable
// (bearer) link is NEVER one of these — it must never reach a public surface.
export type Handoff = "flipcash" | "enquiry" | "none";

export interface Utility {
  id: string;
  name: string;
  // "Pay in $ALL" style label.
  payLine: string;
  // One-line what-you-get.
  blurb: string;
  status: UtilityStatus;
  // Price-to-SPEND, in words (no invented amounts, no price-to-hold).
  priceModel: string;
  flipcashFlow: FlipcashFlow;
  handoff: Handoff;
  // Optional constraint surfaced on the row (firewall, discretion, payout).
  note?: string;
}

export const utilities: Utility[] = [
  {
    id: "money",
    name: "Money",
    payLine: "Pay in $ALL",
    blurb:
      "Send $ALL to anyone and settle in public — no bank, no broker, no one's permission.",
    status: "live",
    priceModel: "Spend any amount. Denominated in $ALL.",
    flipcashFlow: "spend",
    handoff: "flipcash",
  },
  {
    id: "ad-inventory",
    name: "Ad Inventory",
    payLine: "Pay in $ALL",
    blurb:
      "Businesses buy TWIC's advertising slots in $ALL to bring paying customers into the economy.",
    status: "live",
    priceModel: "Advertising slots, priced in $ALL. Sold at arm's length.",
    flipcashFlow: "payment-request",
    handoff: "enquiry",
    note:
      "Eligibility is limited by the editorial firewall: projects the show could cover cannot advertise, at any price.",
  },
  {
    id: "community-spotlight",
    name: "Community Spotlight",
    payLine: "Pay in $ALL",
    blurb:
      "Buy a fun, clearly-labeled on-air spotlight for your brand. Buys your fun — never coverage.",
    status: "live",
    priceModel: "Auction: highest accepted bid, paid in $ALL.",
    flipcashFlow: "auction-request",
    handoff: "enquiry",
    note:
      "Submit a sealed bid and a pitch. TWIC reviews every bid and may decline to feature any suggestion; unaccepted bids are returned.",
  },
  {
    id: "contests",
    name: "Contests",
    payLine: "Pay in $ALL",
    blurb:
      "Trivia, leaderboards, and skill games with a prize pot. Skill and timing — not a bet on price.",
    status: "live",
    priceModel: "Entry paid in $ALL; winners take the pot.",
    flipcashFlow: "payment-request",
    handoff: "flipcash",
    note:
      "Payouts are settled by a person, off-platform, to the verified winner. No claim links are ever posted to a public surface.",
  },
  {
    id: "status",
    name: "Status",
    payLine: "Pay in $ALL",
    blurb:
      "Unlock gated rooms, badges, and holder tiers by holding and spending $ALL.",
    status: "soon",
    priceModel: "Coming soon.",
    flipcashFlow: "none",
    handoff: "none",
  },
];
