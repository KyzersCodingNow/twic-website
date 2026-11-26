// Public homepage content. Provenance: docs/homepage-evidence.md.
export const CONTACT_EMAIL = "kevin@allmight.us";

export const SELECTED_WORK = [
  {
    title: "The highlight reel",
    category: "This Week in Crypto",
    description: "A few minutes of the news, the jokes, and everything in between.",
    href: "https://x.com/therealricoy/status/1969900404952428836",
    image: "/show/twic-highlights.jpg",
    alt: "Kevin Ricoy at the microphone during the original TWIC series",
    runtime: "2:18",
  },
  {
    title: "Where it started",
    category: "The original series · Episode 1",
    description: "The first weekly roundup. Headlines, commentary, and a sense of humor.",
    href: "https://x.com/therealricoy/status/1800108931764904277",
    image: "/show/twic-episode-one.jpg",
    alt: "Kevin presenting the first This Week in Crypto episode in a blue shirt and tie",
    runtime: "4:16",
  },
  {
    title: "Solana Across America",
    category: "ALLMIGHT · Interview highlights",
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
    title: "A builder’s view of SEC v. Kik",
    description: "A regulatory fight affecting his app—and a critique of both sides.",
    href: "https://medium.com/@kricoyll/caught-in-the-crossfire-honest-thoughts-on-sec-v-8e1a7f20dced",
    action: "Read the essay",
  },
  {
    source: "Blockworks",
    date: "November 2024",
    kind: "Reported profile",
    title: "The idea behind TWIC",
    description: "The move into media, and the cultural ambition behind the show.",
    href: "https://blockworks.com/news/former-solana-foundation-employee-media-venture",
    action: "Read the profile",
  },
  {
    source: "CryptoPotato",
    date: "August 2025",
    kind: "Reported coverage",
    title: "Questioning the Solana Foundation",
    description: "Kevin’s public critique, the responses, and the debate it prompted.",
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
