# TWIC — This Week in Crypto

The website for **This Week in Crypto with Kevin Ricoy** at **https://twic.tv**.
An ALLMIGHT production. **A different kind of signal.**

The launch homepage uses the approved **02 — Editorial Overprint** identity:
native SVG artwork, the Signal mark, Archivo typography, IBM Plex Mono labels,
and a carbon, paper, and citron palette. It presents one premiere, show context,
and episode reminders through Luma.

**Stack:** Next.js **15.5.29** (App Router), React / React DOM **19.3.1**,
TypeScript, and Tailwind CSS. Deployment uses the existing Vercel project.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. No environment variables are required for the
premiere homepage. `NEXT_PUBLIC_SITE_URL` defaults to `https://twic.tv`; if you
set it in `.env.local` or Vercel, use the intended canonical URL.

For a production build:

```bash
npm run build
npm run start
```

The Editorial Overprint implementation was checked with `npm run build`. Its production dependency audit returned **0 vulnerabilities**
on November 26, 2026. Recheck the lockfile when dependencies change:

```bash
npm audit --omit=dev
```

Build and dependency checks do not replace desktop, mobile, and keyboard review
of a deployment preview.

## Update the homepage

Edit **`src/data/site.ts`**:

| Configuration | What it controls |
| --- | --- |
| `PREMIERE.youtubeId` | Video, YouTube poster, and direct watch link. Use the video ID, not its full URL. |
| `PREMIERE.title` | Visible episode title and player accessibility label. |
| `PREMIERE.standfirst` | Description alongside the video. |
| `PREMIERE.kicker`, `season`, `airDate` | Premiere label, season label, and availability text. |
| `LUMA_URL` | All episode-reminder buttons and the Luma footer link. |
| `SITE` | Site identity and shared metadata; `SITE.url` supplies the canonical base URL. |
| `SOCIALS.x` | The homepage's TWIC on X footer link. |

Homepage editorial copy and layout live in `src/app/page.tsx`; styling lives in
`src/app/page.module.css`. See [the Editorial Overprint guide](docs/editorial-overprint.md)
for assets, typography, and release checks.

## Launch mode and future modules

**This is currently a single premiere page.** Temporary redirects in
`next.config.mjs` send `/episodes`, `/portfolio`, `/all`, `/sponsors`, `/about`,
and their nested routes back to `/`. The existing multi-page modules are retained
as hidden scaffolding; some contain explicit placeholder data or destinations.

| File | Retained module |
| --- | --- |
| `src/data/episodes.ts` | Future episode archive. It does **not** drive the launch homepage. |
| `src/data/portfolio.ts` | Portfolio positions, entry prices, and allocations. |
| `src/data/sponsors.ts` | Sponsor cards and statistics. |
| `src/data/all.ts`, `src/data/utilities.ts` | `$ALL` economy content and utilities. |

Before exposing a module, replace its placeholders, verify its destinations and
claims, and then remove the corresponding redirects. Do not enable the complete
route list solely to change the homepage design.

The retained portfolio pricing code in `src/lib/prices.ts` fetches CoinGecko and
Yahoo Finance data server-side with 60-second revalidation. If that module is
enabled, allow outbound requests to `api.coingecko.com` and
`query1.finance.yahoo.com`. Failed feeds fall back to entry data with an
unavailability notice; P&L calculations live in `src/lib/portfolio.ts`.

Newsletter, sponsor-contact, and `$ALL` environment variables in `.env.example`
belong to those future modules. They are not needed for the current homepage.

## Deployment

Use the existing GitHub-to-Vercel workflow. Review the branch preview and confirm
the production canonical URL before promoting a change to `twic.tv`.
