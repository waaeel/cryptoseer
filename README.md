# CryptoSeer

<p align="center">
  <img src="src/lib/assets/video.gif" alt="CryptoSeer demo" />
</p>

<p align="center">
  <a href="src/lib/assets/video.gif"><strong>Open demo GIF</strong></a>
</p>

CryptoSeer is a privacy-first, watch-only cryptocurrency dashboard built with SvelteKit. It lets users monitor Bitcoin and Ethereum wallet balances and estimated fiat value without ever entering private keys.

This project was built to prioritize three goals:
- Safety: watch-only workflow with no custody features.
- Privacy: wallet list stored locally in the browser.
- Simplicity: fast UI for adding wallets and checking balances.

## What It Does

- Tracks Bitcoin and Ethereum addresses in a watch-only dashboard.
- Fetches live wallet balances from public blockchain APIs.
- Displays aggregated portfolio value and per-wallet cards.
- Validates wallet addresses before saving.
- Persists tracked wallets in `localStorage`.
- Supports wallet list backup/restore via JSON import/export.
- Includes a responsive landing page, legal/privacy pages, and a blog section.
- Ships with PWA service worker caching and analytics integrations (Plausible/Umami).

## Tech Stack

- Framework: SvelteKit 2
- Language: TypeScript + JavaScript
- Styling: PostCSS + Pollen CSS
- Content: mdsvex markdown blog posts
- Runtime adapter: `@sveltejs/adapter-node`
- Optional backend/auth: PocketBase
- Deployment: Docker + GitHub Actions (CapRover workflow)

## Architecture Notes

- Header market prices are loaded through SvelteKit `load` functions.
- Wallet balances are resolved from client-side API calls using public addresses.
- Wallet data is saved locally in browser storage (`localStorage`), not in the app database.
- Service worker caches build assets and network responses for better repeat-load performance.

## Local Development

### Prerequisites

- Node.js 18+
- pnpm (recommended; lockfile is `pnpm-lock.yaml`)

### Install

```bash
pnpm install
```

### Run

```bash
pnpm dev
```

### Build and Preview

```bash
pnpm build
pnpm preview
```

## Environment Variables

Copy `.env.example` to `.env` and update values as needed.

```bash
POCKETBASE_URL=https://your-pocketbase-host
POCKETBASE_ADMIN_USERNAME=example@mail.com
POCKETBASE_ADMIN_PASSWORD=your_password
PROD=false
```

## Quality Commands

```bash
pnpm check
pnpm lint
pnpm test
```

## Deployment

Production deployment is container-based:

- `Dockerfile` builds and runs the SvelteKit Node adapter output.
- `.github/workflows/deploy.yml` pushes an image to GHCR and deploys to CapRover.

Before using this in a new repository:
- Update workflow values (`IMAGE_NAME`, `CAPROVER_APP`, `CAPROVER_HOST`) in `.github/workflows/deploy.yml`.
- Add required GitHub Actions secrets (for example `CAPROVER_PASSWORD`, PocketBase values, and any analytics keys).

## Privacy and Security

- CryptoSeer never requests or stores private keys.
- Tracked wallet addresses are public data but still sensitive; by default they remain in browser storage.
- Balance/value lookups call third-party blockchain and price APIs, so address queries leave the device.

## Current Limitations

- Supports Bitcoin and Ethereum only.
- Fiat display is currently EUR-first.
- Transaction history pages are scaffolded and marked as coming soon.
