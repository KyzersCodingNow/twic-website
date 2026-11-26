// Global site configuration — edit these values directly.

export const SITE = {
  name: "This Week in Crypto",
  shortName: "TWIC",
  wordmark: "TWIC",
  tagline: "A different kind of signal.",
  description:
    "Inside the story. In on the joke. Crypto news, conversations, and a critical eye with Kevin Ricoy.",
  // Canonical URL — overridden by NEXT_PUBLIC_SITE_URL when set.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://twic.tv",
} as const;

// The launch page's reminder destination; keep all follow buttons consistent.
export const LUMA_URL = "https://luma.com/user/ALLMIGHT";

// Season-premiere launch details. Edit these for each drop.
// Anything not yet finalized is a clearly-marked placeholder — no invented
// air dates or episode numbers presented as real.
export const PREMIERE = {
  // Set to an exact label (e.g. "SEASON 02") once confirmed — kept generic so
  // nothing unverified is asserted on the live page.
  season: "NEW SEASON",
  // The premiere episode on YouTube — embedded as the hero.
  youtubeId: "8IiH9aNHJbE",
  // Public title verified against the premiere's YouTube player.
  title: "Everybody Hates Crypto (Especially Us)",
  // Supporting copy beside the premiere player.
  standfirst:
    "Watch the full season premiere with Kevin Ricoy. A new season starts here.",
  // Status line under the headline.
  airDate: "OUT NOW",
  // Optional short kicker over the headline.
  kicker: "SEASON PREMIERE",
} as const;

export const SOCIALS = {
  x: "https://x.com/ThisWkInCrypto",
  youtube: "https://youtube.com/@thisweekincrypto",
  spotify: "https://open.spotify.com/show/placeholder",
  apple: "https://podcasts.apple.com/podcast/placeholder",
} as const;

// Historical personal audience reaction. The homepage uses dated reactions.
export const ENDORSEMENT = {
  quote:
    "Cancelled all those crypto newsletter subs this is all I need",
  attribution: "Lily Liu · June 28, 2024",
} as const;
