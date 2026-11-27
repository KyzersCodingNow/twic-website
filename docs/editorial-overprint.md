# Editorial Overprint — homepage guide

This implementation carries the approved **02 — Editorial Overprint** direction
into the TWIC site. The existing Signal mark remains the brand anchor. Real
show imagery leads the page; the cropped crypto collage provides the supporting
visual system.

## Page structure

The current homepage contains:

1. A compact masthead and split hero: show positioning beside the premiere,
   with a visible anchor-sponsor credit.
2. One supporting overprint art band.
3. Three selected-work cards linked to the supplied public X posts.
4. A combined host biography and dated public record, followed by a current
   sponsorship disclosure.
5. A production section with genuine on-air imagery, specific capabilities,
   selected studio tools, music and equipment links, and a brief news-bot note.
6. Two dated personal audience reactions from the original season.
7. A Luma reminder invitation.
8. Separate guest/story and partnership email paths, followed by the footer.

Primary navigation uses `#watch`, `#record`, `#production`, and `#contact`.
The previous `#host` destination remains on the host introduction. The hero's
secondary link reaches `#selected`; `#sponsorship` identifies the disclosure.
These are sections on the homepage, not new public routes.

The player initially displays the local premiere poster. Activation loads a
`youtube-nocookie.com` iframe and transfers keyboard focus into it. A direct
YouTube link remains available beside the episode title. The component accepts
an optional `posterSrc`; without it, it uses the YouTube thumbnail. Image errors
fall back to YouTube's `hqdefault.jpg`.

| File | Responsibility |
| --- | --- |
| `src/app/page.tsx` | Homepage content, section structure, and page metadata. |
| `src/app/page.module.css` | Homepage composition and responsive styling. |
| `src/data/homepage.ts` | Selected work, runtime labels, reactions, record links, studio capabilities, sponsorship, news-tooling copy, and contact details. |
| `src/data/site.ts` | Shared identity, premiere configuration, Luma destination, and social links. |
| `src/components/PremierePlayer.tsx` | Poster fallback, player activation, and focus handling. |
| `src/components/PremierePlayer.module.css` | Player presentation. |
| `src/components/SignalMark.tsx` | Inline Signal mark. |
| `src/components/EditorialOverprint.tsx` | Native inline vector artwork for the full-width art band. |
| `src/app/layout.tsx` | Archivo / IBM Plex Mono loading and shared metadata. |
| `src/app/globals.css` | Shared styles, including the skip link. |
| `docs/homepage-evidence.md` | Content sources, asset provenance, and limits on the claims supported by those sources. |

## Change the featured episode

Update `PREMIERE` in `src/data/site.ts`. Its current public values include:

```ts
youtubeId: "8IiH9aNHJbE",
title: "Everybody Hates Crypto (Especially Us)",
airDate: "OUT NOW",
kicker: "SEASON PREMIERE",
```

Use a confirmed title and an embeddable video. `airDate` is displayed as a label;
the code does not schedule a release or calculate whether a stream is live.

The title renders as supplied, including any parenthetical text. The homepage
passes `/show/everybody-hates-crypto.jpg` directly to the player; replace that
poster and its provenance when changing the featured episode. The retained
`PREMIERE.season` and `PREMIERE.standfirst` fields are not displayed by this
homepage layout.

Edit `SELECTED_WORK` in `src/data/homepage.ts` to change the three work cards.
Keep each image, description, destination, and runtime matched to its source.
These curated links are separate from `src/data/episodes.ts`, whose archive
entries still contain placeholders and are not exposed by this homepage.

`LUMA_URL` controls every reminder destination. `SOCIALS.x` controls the public X
link. `SITE` supplies shared identity and metadata, while some visible homepage
copy and page metadata are deliberately written directly in `src/app/page.tsx`;
review both files when changing the show name or positioning.

`CONTACT_EMAIL` controls both email actions and the visible contact address.
These are `mailto:` links with different subject lines, not a submitted form.
`AUDIENCE_REACTIONS` preserves the supplied quotation text and historical dates;
do not convert those comments into current institutional endorsements.

`SPONSORSHIP` supplies the premiere credit and the current-sponsorship disclosure.
It states the confirmed relationship without representing any editorial rights
or contractual terms. `STUDIO_CAPABILITIES` and the music/equipment destinations
describe Kevin's stated practice and supplied studio inventory. `NEWS_TOOLING`
states only that TWIC operates a news bot on X. Add a bot link or performance
example only when its account and supporting records are available.

The production image is a frame from the original show, as its caption states.
It is not a behind-the-scenes photograph or proof of which camera or audio chain
was used for that episode. The selected studio tools describe the supplied
inventory separately from the image.

## Brand assets

| Asset | Usage |
| --- | --- |
| `public/brand/editorial-overprint.svg` | Standalone vector master, mirrored by the inline art-band component. |
| `public/brand/twic-lockup-paper.svg` | Light wordmark for the carbon header and footer. |
| `public/brand/twic-lockup-carbon.svg` | Dark wordmark available for light surfaces. |
| `public/show/*.jpg` | Local premiere poster, selected-work stills, and on-air portrait; see the evidence record for sources. |
| `public/favicon.svg` | Signal mark favicon. |
| `public/og.svg` | Editable vector source for the social sharing card. |
| `public/og.png` | **1200 × 630** raster sharing image referenced by metadata. |

When changing the sharing card, edit `public/og.svg`, export it to
`public/og.png` at 1200 × 630, and review the actual PNG. The SVG source is not the
image served in Open Graph and Twitter metadata.

The core palette is carbon `#151515`, paper `#F0EFE9`, citron `#E8E655`, and alloy
`#A5AAA7`. Archivo carries headlines and body copy; IBM Plex Mono carries labels
and metadata. Preserve the artwork's aspect ratio, use deliberate responsive
crops, and keep fine print textures away from readable text. Avoid repeating the
full collage in every section.

The art band renders native SVG paths through `EditorialOverprint`, with a full
3:1 drawing surface clipped by the shallow band. This keeps the geometry in the
document instead of stretching an external image surface on ultrawide displays.
The 53% desktop and centered mobile crops retain the approved composition.
Keep the inline paths and the standalone SVG master in sync when editing the art.

## Release checks

1. Install the committed dependency set with `npm ci`, then run `npm run build`.
2. Run `npm audit --omit=dev` when dependency inputs change. The checked baseline
   uses Next.js 15.5.29 and React / React DOM 19.3.1; its production audit returned
   0 vulnerabilities on November 26, 2026.
3. Review desktop and narrow mobile layouts, text wrapping, art crops, and focus
   visibility. Check the skip link, section links, and keyboard activation of the
   player. Confirm all five show images load and their crops preserve the subject.
   These are review instructions, not a record of completed visual QA.
4. Confirm video playback, the direct YouTube link, each selected X destination,
   public-record links, Luma, and the two email subjects on the preview.
5. Check that the canonical URL and sharing image resolve against `https://twic.tv`
   in production. `NEXT_PUBLIC_SITE_URL`, if set, overrides the default.
6. Confirm the hidden module routes still redirect to `/`. Expose those routes
   only after their placeholder content and destinations have been replaced.

The launch design does not require enabling a newsletter provider, wallet,
portfolio feed, or database. Those retained modules have separate configuration
and content requirements documented in the README.

## Historical review record — initial layout, November 26, 2026

The following results apply to the earlier homepage at commit
`d3584f9bf50524782316d05c43ac7537423afbfc`, before the footage-led hero, selected
work, host profile, public record, and contact sections were added. They do not
verify the current revision; record its checks separately after running them.

- The production build completed successfully, including type checking and all
  static routes. The generated routing manifest retains all ten launch-mode 307
  redirects.
- The built homepage was visually reviewed at desktop width and in 390px and
  320px frames. No horizontal overflow was observed. All homepage images loaded.
- Keyboard navigation reaches the skip link; activating it focuses the main
  landmark. The premiere link reaches the watch section. Activating the poster
  with Enter mounts the privacy-enhanced YouTube player and transfers focus.
- YouTube controls and the correct episode loaded, but streaming remained at
  the buffering stage in the review browser. Sustained playback still needs a
  check in a regular browser; the direct YouTube watch link is retained.
- Vercel successfully built the branch preview, which requires Vercel sign-in.
  Visual checks used a local static copy of the production-built homepage, not
  an authenticated inspection of that protected deployment.

The initial review used `docs/previews/homepage-desktop.jpg` and
`docs/previews/homepage-mobile.jpg`. If those files are replaced by newer captures,
consult the historical commit for the original review images.


## Review record — footage-led revision, November 26, 2026

- The production build completed successfully with type checking and all 15
  static outputs. The homepage's reported first-load JavaScript is 110 kB.
- The routing manifest retains all ten legacy-route redirects with status 307.
- Visual checks used the built homepage in the managed local preview at desktop
  width and in 820px, 390px, and 320px frames. No horizontal overflow was observed.
  The final desktop and 390px captures include all loaded show and brand images.
- The skip link receives keyboard focus and moves focus to the main landmark.
  The Watch link targets the player. Enter activates the poster, mounts the
  correct privacy-enhanced YouTube embed, and transfers focus to its iframe.
- YouTube loaded the correct title, player controls, captions, and an 8:43 duration.
  Sustained playback was not verified; the direct YouTube link remains available.
- The two mailto actions contain the public business address and distinct guest/
  story and partnership subjects. No email was sent.
- Selected-work X destinations are the URLs supplied by Kevin. Their current
  playback on X was not independently tested during this implementation pass.
- Review images below capture the production-built local snapshot. The Vercel
  branch preview remains subject to its existing sign-in protection.

Final captures: [desktop](previews/homepage-desktop.jpg) ·
[mobile](previews/homepage-mobile.jpg) · [opening screen](previews/homepage-opening.jpg).

## Review record — ultrawide banner, November 26, 2026

- Replaced the external SVG image in the art band with native inline SVG paths,
  retaining the source geometry, colors, band height, and responsive crops.
- The production build and type checking passed; all 15 static outputs remain.
- Reviewed the production-built homepage in 5120px, 3440px, 1920px, and 390px
  browser frames. Their content areas exclude the normal 15px vertical scrollbar.
  No horizontal overflow was observed, and the art fills the band at each width.
- Inspected the large vector edges at native screenshot size and the narrow
  mobile crop. The band contains inline SVG, with no external image element or
  raster artwork. No additional client-side JavaScript was introduced.
- Browser QA used the managed local production-build preview. It does not
  constitute testing on a physical ultrawide monitor or in every browser.

[5120px frame — banner capture](previews/banner-ultrawide-5120.jpg).

## Review record — public record and production, November 27, 2026

- The production build and type checking passed, with all 15 static outputs.
  Reported homepage first-load JavaScript remains 110 kB. No dependencies or
  client components were added.
- Desktop visual review covered the opening, combined host/public-record block,
  visible sponsorship disclosure, and new production section. The Record and
  Craft navigation links reached the intended sections; all local anchor targets
  exist.
- Narrow-frame visual review covered the 320px record layout and the 320px and
  390px production content. Text and links remained readable without overlap.
- DOM layout checks at 320px, 390px, 820px, 3440px, and 5120px found no horizontal
  overflow and no broken images. These are width checks, not a claim of a complete
  visual review at every size. The existing native vector banner is unchanged.
- The production still is a genuine original-series frame, captioned as such.
  It is not presented as behind-the-scenes footage or evidence of which listed
  equipment was used to record that episode.
- The unchanged YouTube player was not retested in this pass. Earlier playback
  limitations still apply. SoundCloud and equipment destinations are supplied
  public URLs; their current playback and contents were not verified here.
- Browser checks used a managed local copy of the production build. The Vercel
  branch preview retains its existing sign-in protection.

Current viewport captures: [public record](previews/homepage-record.jpg) ·
[production](previews/homepage-production.jpg). Earlier full-page captures remain
historical and do not show this revision.
