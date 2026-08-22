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

// The single call-to-action for the launch landing page: RSVP on Luma so you
// never miss an episode. This is the only outbound CTA on the site right now.
export const LUMA_URL = "https://luma.com/user/ALLMIGHT";

// Season-premiere launch details. Edit these for each drop.
// Anything not yet finalized is a clearly-marked placeholder — no invented
// air dates or episode numbers presented as real.
export const PREMIERE = {
  // Set to an exact label (e.g. "SEASON 02") once confirmed — kept generic so
  // nothing unverified is asserted on the live page.
  season: "NEW SEASON",
  // Episode tag, e.g. "EP. 143". null hides it (TWIC uses continuous numbering).
  episode: null as string | null,
  // Big Anton headline for the premiere. Keep it broadcast-short.
  headline: "THE NEW SEASON STARTS NOW",
  // One-line supporting statement in Archivo.
  standfirst:
    "The trusted weekly news show for the people moving capital in crypto is back — new episodes every week.",
  // Air date. Placeholder until finalized — surfaces visibly, never faked.
  airDate: "PREMIERE DATE — TBA",
  // Optional short kicker over the headline.
  kicker: "SEASON PREMIERE",
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
