import type { Metadata } from "next";
import Image from "next/image";
import { SITE, PREMIERE, LUMA_URL, SOCIALS } from "@/data/site";
import { AUDIENCE_REACTIONS, CONTACT_EMAIL, CREATOR_MUSIC_URL, EQUIPMENT_URL, HOST_PROFILE_URL, NEWS_TOOLING, PUBLIC_RECORD, SELECTED_WORK, SPONSORSHIP, STUDIO_CAPABILITIES } from "@/data/homepage";
import { PremierePlayer } from "@/components/PremierePlayer";
import { SignalMark } from "@/components/SignalMark";
import { EditorialOverprint } from "@/components/EditorialOverprint";
import styles from "./page.module.css";

const DESCRIPTION = "Inside the story. In on the joke. Crypto news, conversations, and a critical eye with Kevin Ricoy. Watch This Week in Crypto.";
const TITLE = "This Week in Crypto — Inside the story. In on the joke.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.png"] },
};

function PlayIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 4.5 20 12 8 19.5Z" /></svg>;
}

export default function Home() {
  return (
    <div className={styles.site} id="top">
      <header className={styles.header}>
        <nav className={styles.headerInner} aria-label="Primary">
          <a href="#top" className={styles.brand} aria-label="This Week in Crypto home">
            <Image src="/brand/twic-lockup-paper.svg" alt="This Week in Crypto" width={633} height={155} priority />
          </a>
          <div className={styles.navLinks}>
            <a href="#watch">Watch</a><a href="#record">The record</a><a href="#production">The craft</a><a href="#contact">Contact</a>
          </div>
          <a className={styles.headerCta} href={LUMA_URL} target="_blank" rel="noopener noreferrer">Get notified</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="show-headline">
          <div className={`${styles.container} ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>News. Culture. A critical eye.</p>
              <h1 id="show-headline" className={styles.heroTitle}>
                <span>Inside <br />the story.</span><span>In on <br />the joke.</span>
              </h1>
              <p className={styles.heroDescription}>Crypto news, conversations, and satire—shaped by firsthand industry experience and a background in music and production.</p>
              <div className={styles.hostByline}>
                <SignalMark className={styles.smallMark} />
                <p>Created, hosted &amp; produced by <strong>Kevin Ricoy</strong><span>Austin, Texas</span></p>
              </div>
            </div>
            <div className={styles.heroFeature} id="watch">
              <div className={styles.featureTopline}><p className={styles.eyebrow}>{PREMIERE.kicker}</p><span className={styles.availability}>{PREMIERE.airDate}</span></div>
              <div className={styles.playerFrame}>
                <PremierePlayer youtubeId={PREMIERE.youtubeId} title={PREMIERE.title} posterSrc="/show/everybody-hates-crypto.jpg" priority />
              </div>
              <div className={styles.featureCaption}>
                <div><p className={styles.featureLabel}>This Week in Crypto</p><h2>{PREMIERE.title}</h2></div>
                <a className={styles.textLink} href={`https://www.youtube.com/watch?v=${PREMIERE.youtubeId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
              </div>
              <a className={styles.exploreLink} href="#selected">More from the show</a>
              <p className={styles.sponsorLine}><span>Anchor sponsor</span><strong>{SPONSORSHIP.name}</strong></p>
            </div>
          </div>
        </section>

        <div className={styles.artBreak} aria-hidden="true">
          <EditorialOverprint className={styles.artBreakArt} />
        </div>

        <section id="selected" className={`${styles.container} ${styles.selected}`} aria-labelledby="selected-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>A few ways in</p><h2 id="selected-title" className={styles.sectionTitle}>Get a feel for the show.</h2></div>
            <p className={styles.sectionAside}>Start with the highlights.<br />Stay for the perspective.</p>
          </div>
          <div className={styles.workGrid}>
            {SELECTED_WORK.map((work) => (
              <article key={work.href} className={styles.workCard}>
                <a href={work.href} target="_blank" rel="noopener noreferrer" className={styles.workLink} aria-label={`Watch ${work.title} on X, ${work.runtime}`}>
                  <div className={styles.workImage}>
                    <Image src={work.image} alt={work.alt} fill unoptimized sizes="(max-width: 700px) calc(100vw - 40px), 33vw" />
                    <span className={styles.workPlay}><PlayIcon /></span><span className={styles.runtime}>{work.runtime}</span>
                  </div>
                  <p className={styles.workCategory}>{work.category}</p>
                  <h3>{work.title}</h3><p className={styles.workDescription}>{work.description}</p><span className={styles.workAction}>Watch on X</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="record" className={styles.record} aria-labelledby="record-title">
          <div className={`${styles.container} ${styles.recordInner}`}>
            <div className={styles.recordIntro} id="host">
              <p className={styles.eyebrow}>The host &amp; the history</p>
              <h2 id="record-title" className={styles.sectionTitle}>The record behind the perspective.</h2>
              <p className={styles.hostName}>Kevin Ricoy <span>Creator &amp; host</span></p>
              <p>Kevin came to crypto as a builder, creating a music app with Kin before working in communications and community roles at Kik, the Kin Foundation, and the Solana Foundation.</p>
              <p>That experience gives the show its context. His writing and the coverage of his work make the perspective behind it something you can explore for yourself.</p>
              <a href={HOST_PROFILE_URL} className={styles.textLink} target="_blank" rel="noopener noreferrer">Read the Blockworks profile</a>
            </div>
            <div className={styles.recordList}>
              {PUBLIC_RECORD.map((item) => (
                <article key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.recordLink}>
                    <div className={styles.recordMeta}><span>{item.source}</span><span>{item.date} · {item.kind}</span></div>
                    <h3>{item.title}</h3><p>{item.description}</p><span className={styles.recordAction}>{item.action}</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
          <aside id="sponsorship" className={`${styles.container} ${styles.recordDisclosure}`} aria-label="Sponsorship disclosure">
            <p>Current sponsorship</p><p>{SPONSORSHIP.disclosure}</p>
          </aside>
        </section>

        <section id="production" className={styles.production} aria-labelledby="production-title">
          <div className={styles.container}>
            <div className={styles.productionHeading}>
              <div><p className={styles.eyebrow}>The work behind the show</p><h2 id="production-title" className={styles.sectionTitle}>Behind the<br />broadcast.</h2></div>
              <p>Kevin’s work spans audio engineering, videography, music, and show production. That hands-on range shapes the sound, the frame, and the performance.</p>
            </div>
            <div className={styles.productionGrid}>
              <figure className={styles.productionStill}>
                <div className={styles.productionImage}>
                  <Image src="/show/kevin-ricoy-at-the-desk.jpg" alt="Kevin Ricoy presenting the original TWIC series, with his microphone and purple studio lighting in frame" fill unoptimized sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1476px) 45vw, 624px" />
                </div>
                <figcaption><span>From the original TWIC series.</span><SignalMark className={styles.productionMark} /></figcaption>
              </figure>
              <div className={styles.capabilities}>
                {STUDIO_CAPABILITIES.map((capability) => (
                  <div className={styles.capability} key={capability.title}>
                    <h3>{capability.title}</h3><p>{capability.description}</p>
                    {capability.tools && <p className={styles.studioTools}><span>Selected studio tools</span>{capability.tools}</p>}
                  </div>
                ))}
                <div className={styles.productionLinks}>
                  <a className={styles.textLink} href={CREATOR_MUSIC_URL} target="_blank" rel="noopener noreferrer">Kevin’s music on SoundCloud</a>
                  <a className={styles.textLink} href={EQUIPMENT_URL} target="_blank" rel="noopener noreferrer">Explore the studio equipment</a>
                </div>
              </div>
            </div>
            <div className={styles.newsTooling}><p className={styles.eyebrow}>News tooling</p><p>{NEWS_TOOLING}</p></div>
          </div>
        </section>

        <section className={styles.audience} aria-labelledby="audience-title">
          <div className={styles.container}>
            <h2 id="audience-title" className={styles.eyebrow}>From the first season · Audience reactions, 2024</h2>
            <div className={styles.quoteGrid}>
              {AUDIENCE_REACTIONS.map((reaction) => (
                <figure className={styles.quote} key={reaction.name}>
                  <blockquote>“{reaction.quote}”</blockquote>
                  <figcaption><strong>{reaction.name}</strong><span>On X · <time dateTime={reaction.dateTime}>{reaction.date}</time></span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.followSection} aria-labelledby="follow-title">
          <div className={`${styles.container} ${styles.followInner}`}>
            <div><p className={styles.eyebrow}>Keep the conversation going</p><h2 id="follow-title" className={styles.followTitle}>Catch the next one.</h2><p>Follow on Luma for upcoming episodes and reminders.</p></div>
            <a className={styles.followButton} href={LUMA_URL} target="_blank" rel="noopener noreferrer"><span>Get episode reminders</span><span className={styles.followButtonDetail}>Follow TWIC on Luma</span></a>
          </div>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.container}>
            <div className={styles.contactHeading}><p className={styles.eyebrow}>Get in touch</p><h2 id="contact-title" className={styles.sectionTitle}>Bring something <br />to the conversation.</h2></div>
            <div className={styles.contactOptions}>
              <div><h3>Come on the show.</h3><p>A guest idea, a story worth covering, or a perspective we should hear.</p><a href={`mailto:${CONTACT_EMAIL}?subject=TWIC%20guest%20or%20story%20idea`} className={styles.contactButton}>Suggest a guest or story</a></div>
              <div><h3>Work with TWIC.</h3><p>Partnerships and creative collaborations. Start a conversation with Kevin.</p><a href={`mailto:${CONTACT_EMAIL}?subject=TWIC%20partnership`} className={styles.contactButton}>Discuss a partnership</a></div>
            </div>
            <a className={styles.contactEmail} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerTop}`}>
          <a href="#top" className={styles.footerBrand} aria-label="This Week in Crypto home"><Image src="/brand/twic-lockup-paper.svg" alt="This Week in Crypto" width={633} height={155} /></a>
          <p>A different kind of signal.</p>
          <nav className={styles.footerLinks} aria-label="Follow the show"><a href={SOCIALS.x} target="_blank" rel="noopener noreferrer">TWIC on X</a><a href={LUMA_URL} target="_blank" rel="noopener noreferrer">Luma</a><a href="#contact">Contact</a></nav>
        </div>
        <div className={`${styles.container} ${styles.footerBottom}`}><p>© {new Date().getFullYear()} {SITE.name}</p><p>An ALLMIGHT production · Austin, Texas</p></div>
      </footer>
    </div>
  );
}
