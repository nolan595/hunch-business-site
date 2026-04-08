# Deployment — Hunch Marketing Site

## Platform

**Vercel** — auto-deploys from `main` branch.

## Prerequisites

- Node.js 22 LTS
- pnpm 10+

## Commands

```bash
pnpm install    # Install deps
pnpm dev        # Dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Serve production build
pnpm lint       # ESLint
```

## Environment Variables

None required. This is a fully static site with no API keys or secrets.

## Security Headers

Configured in `next.config.ts`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Deploy Steps

1. Push to `main` on GitHub
2. Vercel auto-builds and deploys
3. Preview deployments created for all PRs

## Pre-Deploy Checklist

- [ ] `pnpm build` passes with zero errors
- [ ] Brand assets present in `/public/brand/`
- [ ] Game mockups present in `/public/games/`
- [ ] Team photos present in `/public/team/`
- [ ] All `// TODO: confirm` values reviewed
- [ ] Lighthouse audit on preview URL
- [ ] Safari testing for GSAP pinned section

## External Dependencies

- **TopoJSON**: Loaded from `cdn.jsdelivr.net` for the world map. Self-host to `/public/data/countries-110m.json` if CDN reliability is a concern.
- **Google Fonts**: Space Grotesk + Inter loaded via `next/font/google` (optimized by Next.js).

## Domain

TBD — Hunch to confirm domain and DNS setup.
