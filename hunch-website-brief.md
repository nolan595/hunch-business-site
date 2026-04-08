# Hunch — Marketing Website Brief

> A brief for **Claude Code** to build the Hunch F2P marketing website.
> Audience for the finished site: prospects, partners, and people Hunch is interviewing.

---

## 1. Project Overview

**Hunch** is the in-house Free-to-Play (F2P) prediction-games platform built inside **Superbet**, one of Europe's largest sportsbook operators. Unlike B2B F2P vendors who plug into many sportsbooks shallowly, Hunch is the *sole* F2P provider to Superbet — which means deeper product, data, and UX integration than anyone else in the category.

We need a **single-page marketing website** (with anchor-linked sections) that:

1. Showcases **what Hunch does** and **why an in-house F2P team beats third-party vendors**.
2. Presents the **games** (Superpredictor, Hotstreak, and the wider format library).
3. Visualises **where Hunch is live** with an animated regions map.
4. Introduces the **team** — leadership and product folks — with photos and bios.
5. Functions as a credible **leave-behind** for B2B conversations and recruitment.

The closest reference (in structure, not aesthetics) is **sportcaller.com** — but Hunch's site should look and feel **considerably more modern, motion-rich, and sport-energetic** than SportCaller's static layout.

---

## 2. Brand & Visual Identity

### Logos
Logo files are provided in `/public/brand/`:
- `hunch-logo-full.png` — wordmark + icon, neon variant (use on dark backgrounds)
- `hunch-logo-violet.png` — wordmark + icon, deep violet variant (use on light backgrounds)
- `hunch-icon.png` — icon-only, neon
- `hunch-icon-mono.png` — icon-only, monochrome

The logo's **defining feature** is the interlocking "H" mark in **neon magenta and cyan** with a 3D extruded look. Lean into this — it's the brand's most ownable asset.

### Colour System

**Brand / accent (hero, CTAs, map markers, motion accents):**
```
--brand-magenta:   #E930B8   /* primary neon, from logo */
--brand-cyan:      #3FE0D0   /* secondary neon, from logo */
--brand-violet:    #3D1E91   /* deep brand violet — primary surface */
--brand-violet-dk: #1A0B47   /* near-black violet, for hero backgrounds */
```

**Supporting palette (from existing brand guide):**
```
--violet-500: #5E3BE1
--violet-200: #C4ABFA
--violet-50:  #EFE8FE
--secondary-teal: #19C9A5  /* for quieter teal moments */
```

**Greys (neutral system, from brand guide):**
```
--grey-50:  #FAFAFA   --grey-500: #9E9E9E
--grey-100: #F5F5F5   --grey-600: #757575
--grey-200: #EEEEEE   --grey-700: #616161
--grey-300: #E0E0E0   --grey-800: #424242
--grey-400: #BDBDBD   --grey-900: #212121
```

**Usage rules:**
- **Hero, map, game showcase, footer** → dark mode. `--brand-violet-dk` background, neon magenta + cyan accents, white text.
- **Why in-house, stats, testimonials** → light mode. White or `--grey-50` background, `--brand-violet` for headlines, `--brand-magenta` for highlights.
- **Team section** → light mode, with neon hover states.
- Alternate dark/light sections down the page so the site has visual rhythm.

### Typography

- **Display / headlines:** `Space Grotesk` (700, 600) — geometric, sporty, modern.
- **Body:** `Inter` (400, 500) — clean, neutral, legible.
- Load both via `next/font/google`.

Headlines should be **huge, tight tracking, mixed-case**. Think editorial sports magazine, not corporate SaaS. Use `text-balance` and `clamp()` for fluid sizing.

### Motion & Feel

Bold, sporty, energetic. Big type that animates in. Sections that reveal as you scroll. Numbers that count up. Map markers that pulse. Hover states that feel alive. **Never gratuitous** — every motion should reinforce a message.

---

## 3. Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** (with the colour tokens above wired into `tailwind.config.ts`)
- **Framer Motion** — section reveals, layout animations, hover states
- **GSAP + ScrollTrigger** — scroll-driven animation on the game showcase and stats counter
- **Lenis** — buttery smooth scroll
- **react-simple-maps** + **d3-geo** — animated world map with country highlights and pulsing markers (no API key needed; uses TopoJSON). If a more premium look is wanted later, swap for Mapbox GL.
- **Lucide React** — icon set
- **clsx** + **tailwind-merge** — class composition
- **next/image** — all imagery, optimised
- **next/font** — Space Grotesk + Inter

Deploy target: **Vercel**. Make sure `next.config.js` is clean and the build passes with zero warnings.

---

## 4. Site Architecture

A single long-scroll page with a sticky top nav. Each section is anchor-linkable.

```
/                          → Homepage (single page)
  #hero
  #what-we-do
  #games
  #why-in-house
  #live-regions    ← the animated map
  #stats
  #team
  #contact
```

Top nav: logo (left), nav links (center), `Get in touch` CTA button (right, neon magenta with cyan glow on hover). Nav is transparent over the hero, then solid `--brand-violet-dk` with a subtle blur on scroll.

---

## 5. Section-by-Section Spec

### 5.1 Hero — `#hero`

**Background:** `--brand-violet-dk` with a subtle animated grain or noise overlay. Optional: a slow-moving radial gradient blob in `--brand-magenta` at 20% opacity, drifting.

**Content:**
- Eyebrow (small, cyan, uppercase, tracked): `IN-HOUSE F2P FOR SUPERBET`
- H1 (massive, white, Space Grotesk 700): **"Free-to-play, built from the inside out."**
- Sub (grey-200, max-width 60ch): "Hunch is the sole F2P partner to Superbet — and that closeness is the product. Deeper integration, smarter data, games that feel native, not bolted on."
- Two CTAs side by side:
  - Primary: `See our games` → scrolls to `#games` (neon magenta fill, white text, cyan glow on hover)
  - Secondary: `Meet the team` → scrolls to `#team` (outline style, white border, magenta on hover)
- Below the CTAs: a thin horizontal row of country flags (Brazil, Romania, Poland, Belgium, Greece, Serbia) with the label `LIVE IN 6 MARKETS` in small caps cyan.

**Motion:** H1 reveals letter-by-letter on load (Framer Motion stagger). Sub fades up. CTAs scale-in. The whole hero has a slight parallax on scroll.

---

### 5.2 What We Do — `#what-we-do`

Light section (`--grey-50` background).

**Layout:** Two columns on desktop, stacked on mobile.
- Left: Big headline + paragraph.
- Right: Three feature cards in a vertical stack.

**Headline:** "Prediction games that bring fans back."

**Paragraph:** "Hunch builds free-to-play prediction games inside the Superbet ecosystem — from one-off tournament pick'ems to daily streak games that turn casual fans into habits. Every game is designed to feel native to the sportsbook, because it is."

**Three cards (icon + title + 1-line desc):**
1. 🎯 **Pick'em & Predictors** — One-off games tied to big fixtures. Pick6, stat predictors, score predictors.
2. 🔥 **Streak Games** — Daily challenges that compound. Players come back to keep their streak alive and chase the jackpot.
3. ⚡ **Tournament Specials** — Custom builds for World Cups, Champions League finals, and tentpole moments.

**Motion:** Cards slide in from the right with stagger as the section enters viewport.

---

### 5.3 Games Showcase — `#games` ⭐ *Pinned scroll section*

**Dark section.** This is the centrepiece, and the place where we go full Apple-style parallax.

**Headline:** "Our games."
**Sub:** "Two flagship products, hundreds of variants, all live inside Superbet."

**Layout & scroll choreography:**

This whole section is **pinned** using GSAP `ScrollTrigger` with `pin: true`. Reference: how `apple.com/airpods-pro` pins each feature panel while content animates inside.

The section locks in place when its top hits the viewport top, and stays pinned for roughly **2× the viewport height of scroll distance**. Inside that pinned window, the user scrolls through **two "moments"** — one per game. Think of it as a horizontal-feeling reveal happening on a vertical scroll.

**Moment 1 — Superpredictor (scroll progress 0% → 50%)**
- Centred phone mockup of the Superpredictor game (`/public/games/superpredictor-mockup.png`).
- The mockup enters from below with a slight scale and rotateY, settling centre-stage.
- To the **left** of the phone: title `Superpredictor` (huge, magenta) and tagline `"Predict the unpredictable."` slide in from the left.
- To the **right** of the phone: 2-sentence description and 3 stat chips ("10M+ predictions placed", "32% D7 retention", "Live in 6 markets") slide in from the right with a stagger.
- Background: subtle magenta radial glow behind the phone, slowly drifting.

**Transition (scroll progress 45% → 55%)**
- Superpredictor content fades and translates out.
- Background glow shifts from magenta to cyan.
- Hotstreak content fades and translates in.

**Moment 2 — Hotstreak (scroll progress 50% → 100%)**
- Same choreography mirrored: phone mockup centred, title `Hotstreak` and tagline `"Don't break the chain."` on one side, description + stat chips ("Daily active streaks", "Jackpot mechanic", "Native to Superbet app") on the other.
- Cyan-dominant treatment.

**Then the section unpins** and the page continues to "Why In-House".

**Mobile fallback:** On screens below `lg`, drop the pin entirely. Stack the two games as standard vertical cards (the original two-tile layout) — pinned scroll on mobile is fragile and feels worse than the static version. Detect with a `useMediaQuery` hook or GSAP's `matchMedia`.

**Reduced motion:** Honour `prefers-reduced-motion` — disable the pin and show both games as static stacked cards.

> ⚠️ **Note on stats:** the numbers above are placeholders. Hunch will replace with real figures. Define them in `/lib/data/games.ts` so they're easy to swap.

> ⚠️ **Note on stats:** the numbers above are placeholders. Hunch will replace with real figures. Make them easy to swap (define them in a `games.ts` data file).

---

### 5.4 Why In-House — `#why-in-house`

Light section. The pitch section.

**Headline:** "Most sportsbooks rent their F2P. Superbet built one."

**Three-up grid with bold numbers and short paragraphs:**

**01 — Deeper integration**
"Because we're inside, we're not bolted on. Hunch games share the same auth, wallet, design language, and player profile as the rest of Superbet — players never feel like they've left."

**02 — Data that actually flows**
"We see what each player loves and how they play. That feedback loop powers smarter games, smarter rewards, and smarter retention — without third-party data gaps."

**03 — Speed and ownership**
"No vendor roadmaps, no integration tickets. When Superbet wants a Champions League pick'em next week, we ship a Champions League pick'em next week."

**Motion:** Numbers ("01", "02", "03") count up or animate in big neon magenta as the section enters view.

---

### 5.5 Live Regions — `#live-regions`

**Dark section.** The animated map. This is the second showpiece.

**Headline:** "Live in 6 markets — and growing."
**Sub:** "From Bucharest to São Paulo, Hunch games run inside Superbet's biggest sportsbook properties."

**Map spec:**
- Use **react-simple-maps** with a world TopoJSON.
- Default state: dark map (`--brand-violet-dk` ocean, `--grey-800` countries with `--grey-700` borders).
- **Highlight countries** in `--brand-magenta` fill with cyan stroke: **Brazil, Romania, Poland, Belgium, Greece, Serbia.**
- On each highlighted country, place a **pulsing marker** at the country's centroid:
  - Outer ring: cyan, scales from 0 → 1.5x and fades out, on a 2s loop (CSS keyframes or Framer Motion).
  - Inner dot: solid magenta, 8px.
- **Hover state on a marker:** small tooltip card appears with country name, flag emoji, and a single stat (e.g. "🇧🇷 Brazil — Superbet Brasil, live since 2024"). Use Framer Motion for the tooltip.
- **Click on a marker** scrolls/highlights a list of country cards underneath the map (optional polish — implement if straightforward).
- Map should be **responsive** — full width on desktop, scaled down but still readable on mobile.

Below the map, a horizontal row of country cards (one per market) with: flag, country name, year live, "Coming soon" tag for any future markets.

```ts
// regions.ts — single source of truth
export const regions = [
  { code: "BR", name: "Brazil",   coordinates: [-51.92, -14.23], liveSince: 2024 },
  { code: "RO", name: "Romania",  coordinates: [24.97,  45.94], liveSince: 2021 },
  { code: "PL", name: "Poland",   coordinates: [19.13,  51.92], liveSince: 2023 },
  { code: "BE", name: "Belgium",  coordinates: [4.47,   50.50], liveSince: 2023 },
  { code: "GR", name: "Greece",   coordinates: [21.82,  39.07], liveSince: 2024 },
  { code: "RS", name: "Serbia",   coordinates: [21.01,  44.02], liveSince: 2022 },
];
```

> ⚠️ `liveSince` years are placeholders — Hunch to confirm.

---

### 5.6 Stats — `#stats`

Light section, tight band — feels like a stat strip.

Four big numbers in a horizontal row (stack on mobile). Each animates with a count-up using Framer Motion's `useMotionValue` + `useTransform`, triggered when the section enters view.

```
[ 6 ]                  [ 2 ]                  [ 25+ ]                [ 1 ]
Live markets           Flagship games         Team members           Sportsbook partner
                                                                     (and we like it that way)
```

Numbers in `--brand-magenta` Space Grotesk 700, labels in grey-700 Inter.

> ⚠️ Confirm numbers with Hunch before going live.

---

### 5.7 Team — `#team`

**Dark section.** The team section needs to feel warm despite the dark mode — use generous spacing and let the photos breathe.

**Headline:** "The team behind Hunch."
**Sub:** "Co-founded in Dublin, built across Ireland and Ukraine."

**Layout:**
- **Leadership row** (3 cards across on desktop): Rob, Mark, Renata.
- **Product team grid** (4 across on desktop, 2 on tablet, 1 on mobile): Odhran, Andrew, Jack, Caitriona.
- **Ops row** (2 cards): David, Cian.
- Below the cards, a single full-width band that says: **"Plus a 15–20 strong dev team based in Ukraine, building Hunch every day."**

**Card design:**
- Square photo on top (placeholder grey block if asset missing — `/public/team/{slug}.jpg`).
- Name in white, Space Grotesk 600.
- Role in cyan, Inter 500, smaller.
- Optional: short 1-line bio in grey-300 (Hunch can supply later — stub it).
- On hover: card lifts, photo desaturates → re-saturates, magenta border glow.

**Team data file:**
```ts
// team.ts
export const leadership = [
  { name: "Rob Egan",     role: "Co-founder & MD",   slug: "rob-egan" },
  { name: "Mark Nolan",   role: "Co-founder & CTO",  slug: "mark-nolan" },
  { name: "Renata Dima",  role: "Head of Design & Research", slug: "renata-dima" },
];

export const product = [
  { name: "Odhran O'Maoileidigh", role: "Senior Product Manager", slug: "odhran-omaoileidigh" },
  { name: "Andrew Tibot",         role: "Senior Product Manager", slug: "andrew-tibot" },
  { name: "Jack Barry",           role: "Junior Product Manager", slug: "jack-barry" },
  { name: "Caitriona McNamara",   role: "Junior Product Manager", slug: "caitriona-mcnamara" },
];

export const ops = [
  { name: "David Kiernan", role: "Ops Executive", slug: "david-kiernan" },
  { name: "Cian Cullen",   role: "Ops Executive", slug: "cian-cullen" },
];
```

---

### 5.8 Contact / Footer — `#contact`

**Dark section.** Single column, centred.

- Big headline: **"Want to talk F2P?"**
- Sub: "Whether you're a partner, a candidate, or just curious — we'd love to hear from you."
- Single email CTA button: `hello@hunch.com` (placeholder — Hunch to confirm). Magenta fill, cyan glow.
- LinkedIn icon link.

**Footer band below** (very thin):
- Hunch icon-only logo (left)
- "© 2026 Hunch. An in-house Superbet company." (centre)
- Built-in Dublin tag (right)

---

## 6. Interactions & Polish

### Global

- **Lenis smooth scroll** initialised at the root, integrated with GSAP `ScrollTrigger` via `lenis.on('scroll', ScrollTrigger.update)`. This is critical — without the integration, pinned sections will jitter.
- **Sticky nav** transitions from transparent → solid `--brand-violet-dk` with backdrop blur on scroll past hero.
- **Scroll progress bar** at the very top of the page, 2px tall, fills with magenta as the user scrolls.
- **Cursor:** default. No custom cursors — they age badly.
- **Reduced motion:** respect `prefers-reduced-motion` and disable all parallax, pinning, and large motion. Sections should still *fade in* gently — never strip motion entirely or it feels broken.

### Scroll choreography (Apple-inspired, restrained)

The site uses **GSAP ScrollTrigger** for the heavy lifting and **Framer Motion** for entry animations and hover states. The reference is `apple.com/airpods-pro` — pinned moments where content stays in place while supporting elements animate around it. We use the technique **sparingly** so each moment has impact:

1. **Hero — layered parallax (subtle).**
   The H1, sub, CTAs, and the country-flag row each move at slightly different speeds as the user starts scrolling (`yPercent: -10` through `-30`). The background grain/blob moves slowest. Creates depth without disorienting.

2. **What We Do — feature cards stagger.**
   Standard `whileInView` reveal — cards translate up and fade in with a 100ms stagger. No pinning here; this section is the breath before the games showcase.

3. **Games Showcase — the big pinned moment.** (See section 5.3.)
   Pinned for ~2 viewport heights. Two game "moments" cross-fade as the user scrolls. The phone mockups have a slight `rotateY` and `scale` tied to scroll progress so they feel alive.

4. **Why In-House — number reveals.**
   The "01 / 02 / 03" markers count up and the paragraphs underneath fade up with a stagger when each block enters view. No pin — just scroll-triggered reveals.

5. **Live Regions Map — markers pulse on enter.**
   When the map enters the viewport, the country highlights *fill in one by one* (200ms stagger), and the pulsing markers start their loop. The map itself has a very subtle scale-up from `0.95 → 1` as it enters. Don't pin the map — let users keep scrolling.

6. **Stats — count-up on enter.**
   Numbers count from 0 to their target value over ~1.5s using Framer Motion's `useMotionValue` + `useTransform`, triggered when the section enters view. Single-shot, not looped.

7. **Team — photo reveal.**
   Cards fade and translate up with a 60ms stagger, in row order. On hover, the photo desaturates → re-saturates with a magenta border glow. No pin.

### What we explicitly **don't** do

- No horizontal scroll hijacking.
- No scrolljacked "scroll = next slide" navigation. Lenis just smooths the natural scroll, it doesn't override it.
- No video-scrub sequences (Apple uses these but they're heavy and overkill for our scope — a v2 polish if Hunch wants it).
- No more than **one pinned section** on the page. The games showcase earns it; nothing else does.
- No custom cursors, marquees, or "scroll to discover" animated chevrons that bounce forever.

---

## 7. Performance & Accessibility

- Lighthouse target: **95+ across all four categories**.
- All images via `next/image` with proper width/height.
- Map and team sections lazy-load.
- Semantic HTML: one `<h1>`, proper section landmarks, alt text on every image.
- Colour contrast: every text/background combo must hit WCAG AA. The neon magenta on dark violet should be tested — fall back to white text where it fails.
- Keyboard nav: every interactive element focusable with a visible focus ring (cyan outline).
- The map should have a text fallback list of countries for screen readers.

---

## 8. File Structure

```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Nav.tsx
  Hero.tsx
  WhatWeDo.tsx
  Games.tsx
  WhyInHouse.tsx
  LiveRegions.tsx       ← the map lives here
  Stats.tsx
  Team.tsx
  Contact.tsx
  Footer.tsx
  ui/
    Button.tsx
    SectionHeading.tsx
    StatCounter.tsx
/lib
  data/
    regions.ts
    games.ts
    team.ts
  motion.ts             ← shared Framer Motion variants
/public
  brand/                ← logos
  team/                 ← team photos (placeholders ok)
  games/                ← game mockups (placeholders ok)
tailwind.config.ts
```

---

## 9. Acceptance Criteria

A pull request is "done" when:

1. ✅ All 8 sections render correctly desktop, tablet, and mobile.
2. ✅ The animated map shows all 6 countries highlighted with pulsing markers and working hover tooltips.
3. ✅ Hero headline animates in on load; section content reveals on scroll.
4. ✅ Stat counters animate when scrolled into view.
5. ✅ Smooth scroll is enabled and feels good (no jank).
6. ✅ Logos, colours, and fonts match the brand spec exactly.
7. ✅ All copy from this brief is in place. Placeholder data is clearly marked (`// TODO: confirm`).
8. ✅ Lighthouse mobile score ≥ 90 in all categories.
9. ✅ Builds with `pnpm build` (or `npm run build`) with zero errors and zero warnings.
10. ✅ Deploys clean to Vercel.

---

## 10. Setup Instructions for Claude Code

```bash
npx create-next-app@latest hunch-site --typescript --tailwind --app --eslint --src-dir=false
cd hunch-site
pnpm add framer-motion gsap lenis react-simple-maps d3-geo lucide-react clsx tailwind-merge
pnpm add -D @types/react-simple-maps @types/d3-geo
```

Then:
1. Wire up the colour tokens in `tailwind.config.ts`.
2. Set up `next/font` for Space Grotesk + Inter in `app/layout.tsx`.
3. Build sections in the order listed above — get hero, map, and games right first; everything else is variations on a theme.
4. Drop the brand logos into `/public/brand/` (provided separately).
5. Use placeholder photos and game mockups for now — Hunch will swap them in.

---

## 11. Open Items for Hunch to Confirm

- [ ] Real stats for the Stats section and Game tile chips
- [ ] Year each market went live
- [ ] Team photos and 1-line bios per person
- [ ] Game screenshots / mockups for Superpredictor and Hotstreak
- [ ] Contact email address
- [ ] Hunch domain / hosting decision
- [ ] LinkedIn URL
- [ ] Whether to add a `News` or `Case Studies` section in v2

---

**End of brief.** Built for Claude Code, April 2026.
