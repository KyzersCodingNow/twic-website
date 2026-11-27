# Homepage evidence and asset provenance

Maintainer record for the November 26, 2026 homepage revision. This document
supports `src/data/homepage.ts` and the host copy in `src/app/page.tsx`; it is not
viewer-facing copy or a record of completed release QA.

## Host and public record

| Homepage content | Source | Scope and limitation |
| --- | --- | --- |
| Kevin built a music app using Kin, then worked at Kik, the Kin Foundation, and the Solana Foundation. | [Blockworks profile, November 26, 2024](https://blockworks.com/news/former-solana-foundation-employee-media-venture) | Reported career sequence and the cultural ambition behind TWIC. Supports the short biography; does not establish every title, tenure date, or a ten-year record. Coverage is not a Blockworks endorsement. |
| Communications and community work in the Kik/Kin period. | [Kevin's Kin Foundation announcement, December 14, 2020](https://medium.com/kinblog/joining-the-kin-foundation-as-community-marketing-manager-e252ac7e6cea) | First-person announcement of the Community & Marketing Manager role, earlier Kik work, and community initiatives. Does not establish the “first employee” claim. |
| Music and creator interest predates the show. | [Introducing Love & Loud Music, October 26, 2018](https://medium.com/love-loud-music/introducing-love-loud-music-1c868a5c2738) | Kevin's introduction to the app and its intended model. The description is not proof that every proposed feature or commercial outcome was achieved. This is a supporting source, not a fourth homepage record item. |
| “A builder's stake in SEC v. Kik.” | [Kevin's essay, June 17, 2019](https://medium.com/@kricoyll/caught-in-the-crossfire-honest-thoughts-on-sec-v-8e1a7f20dced) | First-person account of a case affecting his app, with criticism of both sides. Do not describe this as a contemporaneous employee disclosure or independent reporting. |
| “Why culture belongs in the conversation.” | [Blockworks profile, November 26, 2024](https://blockworks.com/news/former-solana-foundation-employee-media-venture) | Reported profile of ALLMIGHT, TWIC, Kevin's background, and his approach to culture and entertainment. Plans described in 2024 are not automatically current operating capabilities. |
| “A public critique of the Solana Foundation.” | [CryptoPotato coverage, August 2025](https://cryptopotato.com/solana-foundation-faces-internal-critique-over-direction-and-spending/) | Reports Kevin's critique, defenses of the Foundation, and his later acknowledgment that complete closure might not be feasible. The linked coverage is the source used here; the original letter itself was not recovered during this review. This historical item is not a statement about present editorial arrangements. |

The hero and host-section language about context, humor, questions, and
perspective states the show's intended character. It is not a comparative rating
of another show or an independently certified measure of credibility.

## Production and current sponsorship

These additions were approved for the November 27, 2026 website revision.

| Homepage content | Source | Scope and limitation |
| --- | --- | --- |
| Created, hosted, and produced by Kevin Ricoy; audio engineering, videography, music, writing, and production capabilities. | Kevin's description of his work during the November 2026 website review, his supplied show material, and his equipment screenshots. | First-party confirmation of his roles and practice. Does not assert sole authorship of every contribution, a measured cost advantage, or superiority over another production. |
| Selected studio tools: Neumann U87Ai, RME UFX III, Akai MPC X, Sony FX6, cinema lenses, studio lighting. | Kevin's two supplied equipment screenshots and [equipment inventory](https://allmight-website.vercel.app/equipment). | The supplied inventory, not an independently inspected equipment audit. The on-air photograph does not establish which of these tools were used for that episode. |
| Kevin's music link. | [SoundCloud profile supplied by Kevin](https://soundcloud.com/kyzermf). | An owner-supplied public destination. Track playback was not verified in this revision. |
| TWIC operates a news bot on X. | Kevin's direct confirmation during the November 2026 website review. | Establishes the stated existence of the account. The handle, source handling, publishing workflow, and timestamped examples have not been reviewed. No first-to-report, accuracy, latency, proprietary-technology, or show-integration claim is made. |
| Solana Foundation is an anchor sponsor of TWIC. | Kevin's direct confirmation during the November 2026 website review. | Current sponsorship relationship, distinct from the 2024 grant described in Blockworks. No amounts, term dates, editorial rights, or other contractual provisions are represented. |

The sponsorship is identified by the featured episode and beneath the historical
record. Historical criticism and audience reactions retain their dates and do
not establish current editorial protections or an institutional endorsement.

## Featured and selected work

| Homepage item | Public destination | Runtime label |
| --- | --- | --- |
| Everybody Hates Crypto (Especially Us) | [YouTube premiere](https://www.youtube.com/watch?v=8IiH9aNHJbE) | No runtime displayed. The title and video ID were checked against the premiere player in the earlier implementation. |
| The highlight reel | [User-supplied X post](https://x.com/therealricoy/status/1969900404952428836) | `2:18`, from supplied source video duration of 138.283 seconds. |
| Where it started — original series, Episode 1 | [User-supplied X post](https://x.com/therealricoy/status/1800108931764904277) | `4:16`, from supplied source video duration of 256.384 seconds. |
| Solana Across America — interview highlights | [User-supplied X post](https://x.com/therealricoy/status/1928468114942898347) | `3:03`, from supplied source video duration of 183.182 seconds. |

The three runtime labels were measured with `ffprobe` from the supplied video
files and rounded to whole seconds. They are not independent measurements of
the current X player. The card titles “The highlight reel” and “Where it started”
are editorial navigation labels, not asserted verbatim post titles.

**Solana Across America is an interview montage featuring Kevin and Jon Wong.**
The reviewed source is not an event-recap montage or field coverage of a national
tour. Keep the category, description, and alt text consistent with that footage.

## Local image provenance

The site includes only derived stills. The supplied source videos correspond to
the public watch destinations above.

| Public asset | Original source | Derivation |
| --- | --- | --- |
| `public/show/everybody-hates-crypto.jpg` | [YouTube maximum-resolution poster](https://i.ytimg.com/vi/8IiH9aNHJbE/maxresdefault.jpg) | Local copy via `premiere-youtube.jpg`; source poster is 1280 × 720. |
| `public/show/twic-highlights.jpg` | `highlight-reel.mp4`, supplied TWIC highlight video | Frame at 2.5 seconds, extracted as `highlight-reel-detail-2.5.jpg`. |
| `public/show/twic-episode-one.jpg` | `episode-01.mp4`, supplied first episode | Frame at 90 seconds, extracted as `episode-01-090.jpg`. |
| `public/show/kevin-ricoy-on-air.jpg` | Same supplied `episode-01.mp4` | Frame at 192 seconds, extracted as `episode-01-detail-192.jpg`; presented with a CSS crop as the on-air portrait. |
| `public/show/kevin-ricoy-at-the-desk.jpg` | Same supplied `episode-01.mp4` | Existing frame at 180 seconds, `episode-01-180.jpg`; used in the production section with an explicit original-series caption. |
| `public/show/solana-across-america.jpg` | `across-america.mp4`, supplied interview-highlight video | Frame at 35 seconds, extracted as `across-america-035.jpg`. |

All five video-derived source frames are 1280 × 720 and come from the supplied
footage. They are not generated people, fabricated sets, or replacement branding.
The earlier on-air portrait remains available but is no longer used on the homepage.
The temporary extraction inventory is under
`tmp/homepage-media-inventory/` in the task workspace, outside this repository.

## Historical audience reactions

The user supplied the audience-collage and Lily Liu slides on **November 26,
2026**. Those screenshots, rather than independently retrieved original posts,
are the source for these quotations:

| Name | Exact displayed text | Date visible in supplied screenshot |
| --- | --- | --- |
| Lily Liu | “Cancelled all those crypto newsletter subs this is all I need” | June 28, 2024 |
| Alex Scott | “highlight of my week” | June 28, 2024 |

The original quotation URLs were not recovered. Do not invent post links or
claim independent verification of the original posts. Preserve the wording and
historical dates. These are personal audience reactions, not current corporate
endorsements, evidence of funding, or endorsements of Kevin's later criticisms.
The homepage intentionally omits corporate titles from these attributions.

## Contact and return paths

- `kevin@allmight.us` is the public business contact on the
  [equipment page](https://allmight-website.vercel.app/equipment) and the
  [ALLMIGHT microgrants listing](https://superteam.fun/earn/grants/allmight-microgrants/).
  The two homepage actions open email composition with different subjects; the
  site does not submit a contact form or guarantee a response.
- [Luma](https://luma.com/user/ALLMIGHT) remains the established reminder
  destination. There is no new email-capture backend or invented show schedule.
- [TWIC on X](https://x.com/ThisWkInCrypto) is the supplied show account.

## Claims intentionally excluded

The revision does not publish unverified audience totals, marketing efficiency,
grant-disbursement totals, aggregate event attendance, “first employee” status,
unconfirmed role dates, or a ten-year credibility claim. Employment and financial claims need dated supporting records.

No formal editorial-independence, holdings-disclosure, sponsor-approval, or
corrections policy is presented as adopted without the actual approved policy.
The site also avoids unsupported competitor credibility ratings, botting
allegations, acquisition predictions, buyer endorsements, and claims that an
equipment inventory or an undeployed production artifact proves a unique,
operational technology advantage.

Add new claims only with their scope, date, source, and relevant qualification.
Keep first-person accounts, company announcements, measured source-file facts,
and independent reporting distinguishable. Build and browser results belong in
the release review record, not in this evidence table.
