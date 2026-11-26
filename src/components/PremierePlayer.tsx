"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./PremierePlayer.module.css";

interface PremierePlayerProps {
  youtubeId: string;
  title: string;
  posterSrc?: string;
}

export function PremierePlayer({
  youtubeId,
  title,
  posterSrc,
}: PremierePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [useFallbackPoster, setUseFallbackPoster] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const fallbackPoster = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const poster = useFallbackPoster
    ? fallbackPoster
    : posterSrc || `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  useEffect(() => {
    if (playing) {
      // Keep keyboard focus in the player when the play button is replaced.
      iframeRef.current?.focus({ preventScroll: true });
    }
  }, [playing]);

  return (
    <div className={styles.player}>
      {playing ? (
        <iframe
          ref={iframeRef}
          className={styles.embed}
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          tabIndex={0}
        />
      ) : (
        <button
          type="button"
          className={styles.posterButton}
          aria-label={`Play ${title}`}
          onClick={() => setPlaying(true)}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 70vw, 960px"
            unoptimized
            className={styles.posterImage}
            onError={() => setUseFallbackPoster(true)}
            onLoad={(event) => {
              // YouTube can return a tiny placeholder with a 200 response when
              // a high-resolution thumbnail is unavailable.
              if (!posterSrc && event.currentTarget.naturalWidth < 300) {
                setUseFallbackPoster(true);
              }
            }}
          />
          <span className={styles.scrim} aria-hidden="true" />
          <span className={styles.playPrompt} aria-hidden="true">
            <span className={styles.playControl}>
              <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
                <path d="M8 4.5 20 12 8 19.5Z" />
              </svg>
            </span>
            <span className={styles.playLabel}>Play premiere</span>
          </span>
        </button>
      )}
    </div>
  );
}
