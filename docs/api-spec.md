# API Spec — Hunch Marketing Site

## Architecture

This is a **static marketing site** with no API routes, no database, and no server-side data fetching. All content is defined in TypeScript data files.

## Data Layer

| File | Purpose |
|------|---------|
| `lib/data/regions.ts` | 6 live markets with coordinates, flags, partners |
| `lib/data/games.ts` | Superpredictor + Hotstreak with stat chips |
| `lib/data/team.ts` | Leadership, product, and ops team members |

All placeholder values are marked with `// TODO: confirm`.

## Shared Utilities

| File | Purpose |
|------|---------|
| `lib/utils.ts` | `cn()` — clsx + tailwind-merge class composition |
| `lib/motion.ts` | Shared Framer Motion animation variants |

## Commands

```bash
pnpm dev      # Local dev server (port 3000)
pnpm build    # Production build
pnpm start    # Serve production build
pnpm lint     # ESLint check
```

## Dependencies

### Runtime
- next 16, react 19, framer-motion, gsap + @gsap/react, lenis
- react-simple-maps + d3-geo (animated world map)
- lucide-react (icons), clsx + tailwind-merge (class utils)

### Dev
- tailwindcss 4, @tailwindcss/postcss, typescript 5, eslint 9
- @types/d3-geo

## Deploy

Target: Vercel. No environment variables required.
