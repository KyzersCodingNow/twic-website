# TWIC — This Week in Crypto

The official website for **This Week in Crypto (TWIC)**, the trusted weekly news
show for the people moving capital in crypto. _An ALLMIGHT production._

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (all optional — sensible fallbacks)
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
npm run lint                     # zero warnings expected
```

## Deploy (Vercel, one command)

```bash
npx vercel        # preview
npx vercel --prod # production
```

Next.js is auto-detected — no extra config. Set the env vars below in the Vercel
project settings. **The deployment's network policy must allow outbound requests
to `api.coingecko.com`** for live prices (the site degrades gracefully without).

## Environment variables

| Variable                      | Purpose                                                        |
| ----------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_BEEHIIV_URL`     | Beehiiv embed iframe URL. Unset → styled placeholder form.     |
| `NEXT_PUBLIC_SPONSOR_EMAIL`   | `mailto:` target for the "Become a sponsor" button.            |
| `NEXT_PUBLIC_SITE_URL`        | Canonical URL for metadata / sitemap.                          |

## Editing content (no CMS, no database)

All content lives in typed config files under `src/data/`:

- **`episodes.ts`** — add an episode by prepending an object. The first entry
  drives the homepage hero. Each needs `{ number, title, date, youtubeId, description, guests? }`.
- **`portfolio.ts`** — add a position by appending an object. Set `assetType`
  to `"crypto"` (priced via CoinGecko by `coingeckoId`) or `"stock"` (priced via
  Yahoo Finance by `yahooSymbol`, e.g. `"TTWO"`). You set `entryDate`,
  `entryPrice`, and `allocationUsd`; current price + 24h change are live.
- **`sponsors.ts`** — sponsor grid + the stat strip.
- **`site.ts`** — wordmark, tagline, social links, the endorsement quote.

## How prices work

`src/lib/prices.ts` fetches everything **server-side**, cached 60 seconds via
Next.js fetch revalidation. Never called from the client, no API keys.

- **Crypto** — one batched CoinGecko call for all crypto positions.
- **Stocks** — one keyless Yahoo Finance chart call per symbol, run in parallel.

Both feeds merge into a single map keyed by `priceKey()` (`crypto:<id>` /
`stock:<symbol>`). If a feed fails, those positions render entry data and the
page shows a "live prices temporarily unavailable" banner — never NaN, never a
fake `$0.00`. The exact P&L formulas live in `src/lib/portfolio.ts`.

> Deployment note: the hosting network policy must allow outbound requests to
> both `api.coingecko.com` and `query1.finance.yahoo.com` for live prices.
