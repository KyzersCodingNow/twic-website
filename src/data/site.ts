// Global site configuration — edit these values directly.

export const SITE = {
  name: "This Week in Crypto",
  shortName: "TWIC",
  wordmark: "TWIC",
  tagline:
    "The trusted weekly news show for the people moving capital in crypto.",
  description:
    "This Week in Crypto (TWIC) is the trusted weekly news show for the people moving capital in crypto. New episodes every week.",
  // Canonical URL — overridden by NEXT_PUBLIC_SITE_URL when set.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thisweekincrypto.show",
} as const;

export const SOCIALS = {
  x: "https://x.com/twicshow",
  youtube: "https://youtube.com/@thisweekincrypto",
  spotify: "https://open.spotify.com/show/placeholder",
  apple: "https://podcasts.apple.com/podcast/placeholder",
} as const;

// The marquee endorsement, reused across pages.
export const ENDORSEMENT = {
  quote:
    "Cancelled all those crypto newsletter subs — this is all I need.",
  attribution: "Lily Liu, President, Solana Foundation",
} as const;
