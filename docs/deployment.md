# Deployment — Hunch Marketing Site

## Live deployment

| | |
|---|---|
| **Live URL** | https://hunch-business-site.netlify.app |
| **GitHub repo** | https://github.com/nolan595/hunch-business-site |
| **Netlify site name** | hunch-business-site |
| **Netlify account** | nolan595 (markjnolan00@gmail.com) |
| **Auto-deploy** | Enabled — every push to `main` triggers a new deploy |

## Deploying updates

Push to `main` and Netlify will automatically build and deploy:

```bash
git add .
git commit -m "your message"
git push
```

Or trigger a manual deploy:

```bash
netlify deploy --prod
```

## Platform

**Netlify** — auto-deploys from `main` branch via GitHub integration.
Build runs on Netlify CI using `pnpm run build` with the `@netlify/plugin-nextjs` runtime.

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

## Netlify Configuration

See `netlify.toml` in the project root:
- **Build command:** `pnpm run build`
- **Publish directory:** `.next`
- **Node version:** 22
- **Plugin:** `@netlify/plugin-nextjs` (handles static + serverless Next.js output)

## Security Headers

Configured in `next.config.ts`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## External Dependencies

- **TopoJSON**: Loaded from `cdn.jsdelivr.net` for the world map. Self-host to `/public/data/countries-110m.json` if CDN reliability is a concern.
- **Google Fonts**: Space Grotesk + Inter loaded via `next/font/google` (optimized by Next.js).

## Domain

TBD — Hunch to confirm domain and DNS setup.
Configure in Netlify dashboard: Site settings → Domain management → Add custom domain.
