import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, PREMIERE, LUMA_URL, SOCIALS } from "@/data/site";
import { PremierePlayer } from "@/components/PremierePlayer";
import { SignalMark } from "@/components/SignalMark";
import styles from "./page.module.css";

const DESCRIPTION =
  "A different kind of signal. News, conversations, and a sense of humor. Watch This Week in Crypto with Kevin Ricoy.";

export const metadata: Metadata = {
  title: { absolute: "This Week in Crypto — A different kind of signal." },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "This Week in Crypto — A different kind of signal.",
    description: DESCRIPTION,
    url: SITE.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "This Week in Crypto — A different kind of signal.",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15l12-7.5z" />
    </svg>
  );
}

export default function Home() {
  const [episodeTitle, episodeAside] = PREMIERE.title.split(" (");

  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <nav className={styles.headerInner} aria-label="Primary">
          <a href="#top" className={styles.brand} aria-label="This Week in Crypto home">
            <Image src="/brand/twic-lockup-paper.svg" alt="This Week in Crypto" width={633} height={155} priority />
          </a>
          <div className={styles.navLinks}>
            <a href="#watch">The premiere</a>
            <a href="#about">The show</a>
          </div>
          <a className={styles.headerCta} href={LUMA_URL} target="_blank" rel="noopener noreferrer">
            Get notified
          </a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <div id="top" className={styles.overprint} aria-hidden="true">
          <Image src="/brand/editorial-overprint.svg" alt="" fill priority sizes="100vw" className={styles.overprintImage} />
        </div>

        <section className={`${styles.container} ${styles.intro}`} aria-labelledby="show-headline">
          <div>
            <p className={styles.eyebrow}>News. Conversations. A sense of humor.</p>
            <h1 id="show-headline" className={styles.heroTitle}>
              A different<br />kind of signal.
            </h1>
          </div>
          <div className={styles.introAside}>
            <p className={styles.introCopy}>
              <span>The week in crypto. </span>
              <span>The people behind it. </span>
              <span>The questions worth asking.</span>
            </p>
            <p className={styles.hostLine}>With Kevin Ricoy · Austin, Texas</p>
            <a className={styles.watchButton} href="#watch">
              <PlayIcon />
              Watch the premiere
            </a>
          </div>
        </section>

        <section id="watch" className={styles.watchSection} aria-labelledby="premiere-title">
          <div className={styles.container}>
            <div className={styles.sectionRule}>
              <p className={styles.eyebrow}>{PREMIERE.kicker}</p>
              <span className={styles.availability}>{PREMIERE.airDate}</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.playerColumn}>
                <PremierePlayer youtubeId={PREMIERE.youtubeId} title={PREMIERE.title} />
                <div className={styles.playerCaption}>
                  <span>This Week in Crypto</span>
                  <a href={`https://www.youtube.com/watch?v=${PREMIERE.youtubeId}`} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                  </a>
                </div>
              </div>
              <div className={styles.featureCopy}>
                <p className={styles.featureLabel}>{PREMIERE.season}</p>
                <h2 id="premiere-title" className={styles.featureTitle}>
                  {episodeTitle}
                  {episodeAside ? <span>({episodeAside}</span> : null}
                </h2>
                <p className={styles.featureDescription}>{PREMIERE.standfirst}</p>
                <div className={styles.featureByline}>
                  <SignalMark className={styles.bylineMark} />
                  <div>
                    <span className={styles.bylineLabel}>Created &amp; hosted by</span>
                    <span className={styles.bylineName}>Kevin Ricoy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.container} ${styles.about}`} aria-labelledby="about-title">
          <div className={styles.aboutLabel}>
            <p className={styles.eyebrow}>The show</p>
            <SignalMark className={styles.aboutMark} />
          </div>
          <div>
            <h2 id="about-title" className={styles.aboutTitle}>
              Crypto moves fast.<br />Let’s give it some context.
            </h2>
            <div className={styles.aboutBody}>
              <p>
                Behind every headline are people, ideas, and a bigger story.
                This Week in Crypto brings them into the conversation—with curiosity,
                a critical eye, and room to laugh.
              </p>
              <p>
                Created and hosted by Kevin Ricoy. News, interviews, and a perspective
                from outside the echo chamber.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.followSection} aria-labelledby="follow-title">
          <div className={`${styles.container} ${styles.followInner}`}>
            <div>
              <p className={styles.eyebrow}>Keep the conversation going</p>
              <h2 id="follow-title" className={styles.followTitle}>Catch the next one.</h2>
              <p className={styles.followCopy}>Follow on Luma for upcoming episodes and reminders.</p>
            </div>
            <a className={styles.followButton} href={LUMA_URL} target="_blank" rel="noopener noreferrer">
              <span>Get episode reminders</span>
              <span className={styles.followButtonDetail}>Follow TWIC on Luma</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerTop}`}>
          <a href="#top" className={styles.footerBrand} aria-label="This Week in Crypto home">
            <Image src="/brand/twic-lockup-paper.svg" alt="This Week in Crypto" width={633} height={155} />
          </a>
          <p>A different kind of signal.</p>
          <nav className={styles.footerLinks} aria-label="Follow the show and read our policy">
            <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer">TWIC on X</a>
            <a href={LUMA_URL} target="_blank" rel="noopener noreferrer">Luma</a>
            <Link href="/policy">Editorial policy</Link>
          </nav>
        </div>
        <div className={`${styles.container} ${styles.footerBottom}`}>
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>
            Funded by our sponsors, who have no editorial input. There is no TWIC token.
          </p>
          <p>An ALLMIGHT production.</p>
        </div>
      </footer>
    </div>
  );
}
