# Editorial Overprint — homepage guide

This implementation carries the approved **02 — Editorial Overprint** direction
into the TWIC season-premiere site. The existing Signal mark remains the brand
anchor; the cropped crypto collage is the principal illustration.

## Page structure

The public homepage has a compact masthead, one overprint art band, an editorial
introduction, the premiere player, show context, a Luma reminder invitation, and
a footer. Navigation uses the local `#watch` and `#about` anchors.

The player initially displays the video's YouTube thumbnail. Activation loads a
`youtube-nocookie.com` iframe and transfers keyboard focus into it. A separate
YouTube link remains available below the player.

| File | Responsibility |
| --- | --- |
| `src/app/page.tsx` | Homepage content, section structure, and page metadata. |
| `src/app/page.module.css` | Homepage composition and responsive styling. |
| `src/components/PremierePlayer.tsx` | Poster fallback, player activation, and focus handling. |
| `src/components/PremierePlayer.module.css` | Player presentation. |
| `src/components/SignalMark.tsx` | Inline Signal mark. |
| `src/app/layout.tsx` | Archivo / IBM Plex Mono loading and shared metadata. |
| `src/app/globals.css` | Shared styles, including the skip link. |

## Change the featured episode

Update `PREMIERE` in `src/data/site.ts`. Its current public values include:

```ts
youtubeId: "8IiH9aNHJbE",
title: "Everybody Hates Crypto (Especially Us)",
standfirst:
  "Watch the full season premiere with Kevin Ricoy. A new season starts here.",
airDate: "OUT NOW",
kicker: "SEASON PREMIERE",
season: "NEW SEASON",
```

Use a confirmed title and an embeddable video. `airDate` is displayed as a label;
the code does not schedule a release or calculate whether a stream is live.

The current title layout treats the first `" ("` as the start of a secondary
parenthetical line. Titles without a parenthesis render normally. The archive in
`src/data/episodes.ts` is separate and still contains placeholders.

`LUMA_URL` controls every reminder destination. `SOCIALS.x` controls the public X
link. `SITE` supplies shared identity and metadata, while some visible homepage
copy and page metadata are deliberately written directly in `src/app/page.tsx`;
review both files when changing the show name or positioning.

## Brand assets

| Asset | Usage |
| --- | --- |
| `public/brand/editorial-overprint.svg` | Native vector collage used in the art band. |
| `public/brand/twic-lockup-paper.svg` | Light wordmark for the carbon header and footer. |
| `public/brand/twic-lockup-carbon.svg` | Dark wordmark available for light surfaces. |
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

## Release checks

1. Install the committed dependency set with `npm ci`, then run `npm run build`.
2. Run `npm audit --omit=dev` when dependency inputs change. The checked baseline
   uses Next.js 15.5.29 and React / React DOM 19.3.1; its production audit returned
   0 vulnerabilities on November 26, 2026.
3. Review desktop and narrow mobile layouts, text wrapping, art crops, and focus
   visibility. Check the skip link, section links, and keyboard activation of the
   player. These are review instructions, not a record of completed visual QA.
4. Confirm video playback, the direct YouTube link, Luma, and X on the preview.
5. Check that the canonical URL and sharing image resolve against `https://twic.tv`
   in production. `NEXT_PUBLIC_SITE_URL`, if set, overrides the default.
6. Confirm the hidden module routes still redirect to `/`. Expose those routes
   only after their placeholder content and destinations have been replaced.

The launch design does not require enabling a newsletter provider, wallet,
portfolio feed, or database. Those retained modules have separate configuration
and content requirements documented in the README.

## Review record — November 26, 2026

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

Review screenshots: [desktop](previews/homepage-desktop.jpg) ·
[mobile](previews/homepage-mobile.jpg).
