import Link from "next/link";
import { SITE, SOCIALS } from "@/data/site";
import { EmailCapture } from "@/components/EmailCapture";
import { XIcon, YouTubeIcon, SpotifyIcon, ApplePodcastsIcon } from "@/components/icons";

const SOCIAL_LINKS = [
  { href: SOCIALS.x, label: "X", Icon: XIcon },
  { href: SOCIALS.youtube, label: "YouTube", Icon: YouTubeIcon },
  { href: SOCIALS.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: SOCIALS.apple, label: "Apple Podcasts", Icon: ApplePodcastsIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Link
              href="/"
              className="font-display text-3xl font-black tracking-tightest text-bone"
            >
              {SITE.wordmark}
              <span className="text-gold">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">{SITE.tagline}</p>
            <div className="mt-6 flex items-center gap-5">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition-colors hover:text-gold"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <EmailCapture heading="Get TWIC weekly." />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#1f1f1f] pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. An ALLMIGHT production.
          </p>
          <nav aria-label="Footer" className="flex gap-6">
            <Link href="/episodes" className="hover:text-gold">
              Episodes
            </Link>
            <Link href="/portfolio" className="hover:text-gold">
              Portfolio
            </Link>
            <Link href="/sponsors" className="hover:text-gold">
              Sponsors
            </Link>
            <Link href="/about" className="hover:text-gold">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
