// Lightweight YouTube embed. Uses youtube-nocookie and lazy loading to keep
// the homepage fast (Lighthouse). 16:9 responsive frame with hard edges.

interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ youtubeId, title, className = "" }: YouTubeEmbedProps) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden border border-[#2a2a2a] bg-panel ${className}`}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
