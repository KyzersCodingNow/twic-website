// Current TWIC sponsors. The Portfolio is category-exclusive — one wallet,
// one L1, one DeFi protocol, etc. Replace placeholders with real sponsors.

export interface Sponsor {
  name: string;
  category: string; // "Wallet", "L1", "DeFi", "Payments", "Infrastructure"
}

export const sponsors: Sponsor[] = [
  { name: "[PLACEHOLDER: Wallet sponsor]", category: "Wallet" },
  { name: "[PLACEHOLDER: L1 sponsor]", category: "L1" },
  { name: "[PLACEHOLDER: DeFi sponsor]", category: "DeFi" },
  { name: "[PLACEHOLDER: Payments sponsor]", category: "Payments" },
  { name: "[PLACEHOLDER: Infrastructure sponsor]", category: "Infrastructure" },
  { name: "[PLACEHOLDER: Open category]", category: "Open" },
];

// Hard numbers only — the stat strip on the Sponsors page.
export const sponsorStats = [
  { value: "7M+", label: "organic impressions" },
  { value: "460K", label: "views on a single episode" },
  { value: "$2,280", label: "total ad spend" },
];
