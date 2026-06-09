// Episodes — reverse-chronological is enforced in code, but keep newest first.
// Add a new episode by prepending an object here. The first entry drives the
// homepage hero. Replace these placeholders with real episodes.

export interface Episode {
  number: number;
  title: string;
  date: string; // ISO "2026-06-05"
  youtubeId: string; // the YouTube video id, e.g. "dQw4w9WgXcQ"
  description: string;
  guests?: string[];
}

export const episodes: Episode[] = [
  {
    number: 3,
    title: "[PLACEHOLDER: Episode 3 title]",
    date: "2026-06-05",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "[PLACEHOLDER: Episode 3 description — the week's biggest moves in crypto, who's buying, who's bleeding, and what it means for the people moving capital.]",
    guests: ["[PLACEHOLDER: Guest name]"],
  },
  {
    number: 2,
    title: "[PLACEHOLDER: Episode 2 title]",
    date: "2026-05-29",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "[PLACEHOLDER: Episode 2 description — the trusted weekly rundown for serious capital allocators in crypto.]",
  },
  {
    number: 1,
    title: "[PLACEHOLDER: Episode 1 title]",
    date: "2026-05-22",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "[PLACEHOLDER: Episode 1 description — the debut episode of This Week in Crypto.]",
    guests: ["[PLACEHOLDER: Guest name]"],
  },
];

// Always newest-first, regardless of array order.
export const episodesSorted = [...episodes].sort((a, b) => b.number - a.number);

export const latestEpisode = episodesSorted[0];

export function getEpisode(number: number): Episode | undefined {
  return episodes.find((e) => e.number === number);
}
