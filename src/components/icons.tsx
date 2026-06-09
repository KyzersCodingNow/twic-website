// Minimal, monochrome social + UI icons. currentColor so they inherit text
// color and recolor on hover. No third-party icon dependency.

type IconProps = React.SVGProps<SVGSVGElement>;

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.546 15.568V8.432L15.818 12l-6.272 3.568Z" />
    </svg>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02Zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2Zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3Z" />
    </svg>
  );
}

export function ApplePodcastsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0H5.34Zm6.66 3.6a6.78 6.78 0 0 1 6.78 6.78c0 1.92-.799 3.66-2.082 4.894a.36.36 0 0 1-.6-.3c.024-.42.06-.84.066-1.26a.72.72 0 0 1 .222-.51 5.34 5.34 0 1 0-9.18-3.72 5.31 5.31 0 0 0 1.8 3.99.72.72 0 0 1 .222.51c.006.42.042.84.066 1.26a.36.36 0 0 1-.6.3A6.756 6.756 0 0 1 5.22 10.38 6.78 6.78 0 0 1 12 3.6Zm0 3a3.78 3.78 0 0 0-1.44 7.278c.18.072.288.27.252.462-.108.66-.18 1.326-.222 1.992a2.034 2.034 0 1 0 2.82 0 27.66 27.66 0 0 0-.222-1.992.426.426 0 0 1 .252-.462A3.78 3.78 0 0 0 12 6.6Zm0 7.2a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24Z" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 2 10 7H7v3H5V7H2L6 2Z" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 10 2 5h3V2h2v3h3L6 10Z" />
    </svg>
  );
}
