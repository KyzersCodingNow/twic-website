// Flat broadcast poster for a video that can't be embedded (e.g. YouTube
// age-restricted). Thumbnail + yellow play block; the whole card opens the
// video on YouTube in a new tab. No gradients or shadows, per the brand.

interface VideoPosterProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export function VideoPoster({ youtubeId, title, className = "" }: VideoPosterProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — watch on YouTube`}
      className={`group relative block aspect-video w-full overflow-hidden border border-line bg-ink ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt=""
        className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />

      {/* Play block */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center bg-yellow transition-colors group-hover:bg-white sm:h-20 sm:w-20">
          <span
            className="ml-1 block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-ink sm:border-y-[14px] sm:border-l-[24px]"
            aria-hidden="true"
          />
        </span>
      </span>

      {/* Lower-third label */}
      <span className="absolute bottom-0 left-0 inline-flex items-center gap-2 bg-yellow px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
        Watch the premiere on YouTube
        <span aria-hidden="true">↗</span>
      </span>
    </a>
  );
}
