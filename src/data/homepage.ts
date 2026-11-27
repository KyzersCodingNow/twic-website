// Public homepage content. Provenance: docs/homepage-evidence.md.
export const CONTACT_EMAIL = "kevin@allmight.us";

// Current relationship confirmed by Kevin. This describes sponsorship only.
export const SPONSORSHIP = {
  name: "Solana Foundation",
  disclosure: "Solana Foundation is an anchor sponsor of This Week in Crypto.",
} as const;

export const EQUIPMENT_URL = "https://allmight-website.vercel.app/equipment";
export const CREATOR_MUSIC_URL = "https://soundcloud.com/kyzermf";

// Capabilities confirmed by Kevin; selected tools from his equipment inventory.
export const STUDIO_CAPABILITIES = [
  {
    title: "Audio engineering & music",
    description: "Recording, mixing, and music production are part of Kevin’s creative practice.",
    tools: "Neumann U87Ai · RME UFX III · Akai MPC X",
  },
  {
    title: "Camera & production",
    description: "Videography and show production, with hands-on attention to the image, lighting, and edit.",
    tools: "Sony FX6 · Cinema lenses · Studio lighting",
  },
  {
    title: "Writing & performance",
    description: "Original jokes, interviews, and a musician’s sense of timing shape the show.",
    tools: null,
  },
] as const;

// Existence confirmed by Kevin. No performance or workflow claims are implied.
export const NEWS_TOOLING = "TWIC also operates a news bot on X, extending its publishing beyond the broadcast.";

export const SELECTED_WORK = [
  {
    title: "The highlight reel",
    category: "News & satire",
    description: "Headlines, original jokes, and the point of view that runs through TWIC.",
    href: "https://x.com/therealricoy/status/1969900404952428836",
    image: "/show/twic-highlights.jpg",
    alt: "Kevin Ricoy at the microphone during the original TWIC series",
    runtime: "2:18",
  },
  {
    title: "Where it started",
    category: "The original series · Episode 1",
    description: "The first weekly roundup: a story to follow and a reason to laugh.",
    href: "https://x.com/therealricoy/status/1800108931764904277",
    image: "/show/twic-episode-one.jpg",
    alt: "Kevin presenting the first This Week in Crypto episode in a blue shirt and tie",
    runtime: "4:16",
  },
  {
    title: "Solana Across America",
    category: "Conversation & culture",
    description: "Kevin and Jon Wong, with a distinctly American sense of occasion.",
    href: "https://x.com/therealricoy/status/1928468114942898347",
    image: "/show/solana-across-america.jpg",
    alt: "Jon Wong and Kevin, wearing stars and stripes, laughing in a split-screen interview",
    runtime: "3:03",
  },
] as const;

export const PUBLIC_RECORD = [
  {
    source: "Kevin Ricoy",
    date: "June 2019",
    kind: "First-person essay",
    title: "A builder’s stake in SEC v. Kik",
    description: "A dispute affecting Kevin’s own app. His first-person essay set out concerns about both Kik and the SEC.",
    href: "https://medium.com/@kricoyll/caught-in-the-crossfire-honest-thoughts-on-sec-v-8e1a7f20dced",
    action: "Read the essay",
  },
  {
    source: "Blockworks",
    date: "November 2024",
    kind: "Reported profile",
    title: "Why culture belongs in the conversation",
    description: "Blockworks traced Kevin’s move from building in crypto to making a show shaped by humor, culture, and entertainment.",
    href: "https://blockworks.com/news/former-solana-foundation-employee-media-venture",
    action: "Read the profile",
  },
  {
    source: "CryptoPotato",
    date: "August 2025",
    kind: "Reported coverage",
    title: "A public critique of the Solana Foundation",
    description: "Coverage of Kevin’s 2025 open letter, the responses it drew, and the debate over the Foundation’s direction.",
    href: "https://cryptopotato.com/solana-foundation-faces-internal-critique-over-direction-and-spending/",
    action: "Read the coverage",
  },
] as const;

// Exact text from Kevin's screenshots. Personal audience comments from 2024,
// not current institutional endorsements. Original URLs not recovered.
export const AUDIENCE_REACTIONS = [
  {
    quote: "Cancelled all those crypto newsletter subs this is all I need",
    name: "Lily Liu",
    date: "June 28, 2024",
    dateTime: "2024-06-28",
  },
  {
    quote: "highlight of my week",
    name: "Alex Scott",
    date: "June 28, 2024",
    dateTime: "2024-06-28",
  },
] as const;

export const HOST_PROFILE_URL =
  "https://blockworks.com/news/former-solana-foundation-employee-media-venture";
