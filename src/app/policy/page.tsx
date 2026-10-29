import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { TwicBar } from "@/components/TwicBar";

// Editorial Independence & Disclosure Policy. The source of truth is the
// policy doc; keep this page word-for-word in sync with it. New sponsors are
// added to the table the day their seat is confirmed.

export const metadata: Metadata = {
  title: "Editorial Independence & Disclosure Policy",
  description:
    "What sponsors of This Week in Crypto get, what they don't, and the rules the host follows on holdings, guests and corrections.",
  alternates: { canonical: "/policy" },
};

const UPDATED = "October 28, 2026";

const SPONSORS = [
  { name: "Solana Foundation", seat: "Anchor, Season 3", input: "None" },
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="headline mt-14 text-3xl text-white sm:text-4xl">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-lg leading-relaxed text-white/80">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-lg leading-relaxed text-white/80">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.6em] inline-block h-1.5 w-1.5 shrink-0 bg-yellow" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-ink">
      <div className="h-1.5 w-full bg-yellow" aria-hidden="true" />

      <header className="flex items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" aria-label={`${SITE.name} home`}>
          <TwicBar />
        </Link>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Updated {UPDATED}
        </p>
      </header>

      <article className="mx-auto max-w-3xl px-5 pb-20 pt-6 sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-yellow">
          {SITE.name}
        </p>
        <h1 className="headline mt-4 text-white text-[clamp(2.5rem,8vw,5rem)]">
          Editorial independence &amp; disclosure policy
        </h1>

        <H2>Why this page exists</H2>
        <P>
          This Week in Crypto is paid for by sponsors, including a foundation
          whose ecosystem we cover. You should be able to see exactly
          what that money buys and what it doesn&rsquo;t. This is an opinion
          show: the host has views and says so. What this page guarantees is
          that the views aren&rsquo;t for sale, and that the same standard
          applies to friends, sponsors and the host&rsquo;s own projects. It
          binds us whether or not anyone is checking.
        </P>

        <H2>Who funds the show</H2>
        <P>
          The Solana Foundation is the anchor sponsor of Season 3. The agreement
          is signed and grants no editorial control: no previews, no input on
          topics, guests or questions, no veto, and no approval of anything
          before it airs.
        </P>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                <th className="border-b border-line py-3 pr-4 font-medium">Sponsor</th>
                <th className="border-b border-line py-3 pr-4 font-medium">Seat</th>
                <th className="border-b border-line py-3 font-medium">Editorial input</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {SPONSORS.map((s) => (
                <tr key={s.name}>
                  <td className="border-b border-line py-3 pr-4">{s.name}</td>
                  <td className="border-b border-line py-3 pr-4">{s.seat}</td>
                  <td className="border-b border-line py-3">{s.input}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          New sponsors are added to this table the day their seat is confirmed,
          before their first episode airs.
        </P>

        <H2>What sponsors get, and what they don&rsquo;t</H2>
        <P>
          Sponsors buy reach and association: a &ldquo;presented by&rdquo; title
          card, one clearly labeled sponsor segment per episode, placement in the
          newsletter, and presence at our events. Nothing else is for sale.
        </P>
        <P>Sponsors do not get:</P>
        <List
          items={[
            "Previews, question lists, or any say over topics, guests or edits.",
            "Softer coverage. When a sponsor is in the news, we cover them to the same standard as anyone else, and we say on screen that they are a sponsor.",
            "Silence. Skipping a sponsor's bad week is the same as covering it softly. We cover it.",
            "A second chance. A sponsor who tries to shape coverage loses the seat, and we say publicly that it ended and why.",
          ]}
        />

        <H2>Covering sponsors, former employers and friends</H2>
        <P>
          The host&rsquo;s history is part of the record: Kik and the Kin
          Foundation, the Solana Foundation, ALLMIGHT (which received a Solana
          Foundation grant and ran a microgrant program for US builders), and Ava
          Labs. Two current relationships matter more: the host advises
          Flipcash, the app the show&rsquo;s community chat runs on, and he
          created ALL, a fixed-supply token with no allocation that he buys at
          the public price, takes payments in, and holds. The show&rsquo;s chat
          is gated by ALL. The show may report on ALL as an experiment, with that
          disclosure on screen; it never promotes its price, listings or
          liquidity, and never encourages anyone to buy it. When a segment
          materially involves any of these, a current sponsor, or a company
          where the host holds a position, that relationship is stated on screen
          inside the segment, not in a description box. Friendship with a guest
          is disclosed the same way.
        </P>

        <H2>Host holdings and trading</H2>
        <P>
          The host&rsquo;s positions are disclosed by asset on a holdings page
          updated at the start of every month, including his ALL balance and the
          prices he paid for it.
        </P>
        <P>
          This Week in Crypto is not investment advice and doesn&rsquo;t tell
          anyone what to buy. But the show covers and features things viewers
          can choose to buy, so the host follows these rules:
        </P>
        <List
          items={[
            "No buying or selling a sponsor's token during any season it sponsors.",
            "No trading any asset the show covers or features in the 48 hours before or after the episode that covers it airs.",
            "No paid promotions, token allocations, advisory tokens or affiliate deals, disclosed or otherwise.",
            "Every grant and sponsorship the show or the host receives is listed on this page. Nothing is off-book.",
          ]}
        />

        <H2>Guests</H2>
        <P>
          Nobody pays to appear and nobody is paid to appear. Guests get the
          topic, never the questions, and never an edit. Guests are chosen for
          relevance, not for their relationship to a sponsor, and a
          sponsor&rsquo;s executives sit in the same chair under the same rules.
        </P>

        <H2>Corrections</H2>
        <P>
          When we get something wrong, we say so in the next episode and on
          every channel the error ran, within 48 hours of confirming it. We would
          rather be known for fixing mistakes fast than for never admitting
          them.
        </P>
        <P>
          Corrections log: none yet. Entries go here with the date, what we got
          wrong, and the fix.
        </P>

        <H2>Money we won&rsquo;t take, the on-screen line, and complaints</H2>
        <P>
          We won&rsquo;t take money from anything we wouldn&rsquo;t use
          ourselves, from token launches or memecoins, from anyone who wants
          promotion rather than coverage, or from anyone who asks for a say in
          the editorial.
        </P>
        <P>
          Every episode carries the line: &ldquo;This Week in Crypto is funded by
          our sponsors. They have no editorial input. Full policy at the link
          below.&rdquo;
        </P>
        <P>
          If you think a sponsor shaped our coverage, say so publicly or write to
          us. Credible complaints get answered in public.
        </P>

        <div className="mt-16 border-t border-line pt-6">
          <Link
            href="/"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-yellow hover:underline"
          >
            ← Back to the show
          </Link>
        </div>
      </article>

      <div className="h-1.5 w-full bg-yellow" aria-hidden="true" />
    </div>
  );
}
