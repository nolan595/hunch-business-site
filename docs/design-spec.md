# Hunch Marketing Website -- Design Specification

> Source of truth for all visual, typographic, motion, and component decisions.
> Produced from the project brief (`hunch-website-brief.md`), April 2026.

---

## 1. Concept and Direction

**Aesthetic:** Sport-editorial with neon energy. Not corporate SaaS, not gaming-garish. The site should feel like a premium sports magazine that discovered neon lighting -- confident, kinetic, and modern.

**What makes it memorable:**
- The neon magenta/cyan palette against deep violet is the entire brand identity. Every accent, glow, and marker reinforces the interlocking-H logo.
- A single pinned scroll moment (Games Showcase) earns its weight. Everything else breathes naturally.
- Big, tight-tracked headlines that animate in give the site editorial punch.
- The animated world map with pulsing markers is the second visual anchor.

**Typography rationale:**
- **Space Grotesk** for display: geometric, sporty, modern. Its slightly squared letterforms feel technical without being cold. Weights 600 and 700 only -- no light weights.
- **Inter** for body: deliberately chosen as the body complement here because its neutrality lets Space Grotesk headlines dominate. Weights 400 and 500 only.
- Both loaded via `next/font/google` for zero layout shift.

---

## 2. Colour Tokens

All values defined as CSS custom properties in `globals.css` and mirrored in `tailwind.config.ts`.

### Brand and Accent

| Token | Value | Tailwind Key | Usage |
|-------|-------|-------------|-------|
| `--brand-magenta` | `#E930B8` | `brand-magenta` | Primary neon. CTAs, highlights, stat numbers, map markers. Display text only (24px+ bold). |
| `--brand-cyan` | `#3FE0D0` | `brand-cyan` | Secondary neon. Eyebrows, focus rings, hover glows, map marker pulse, tooltip accents. |
| `--brand-violet` | `#3D1E91` | `brand-violet` | Deep violet. Headlines on light backgrounds, nav solid state. |
| `--brand-violet-dk` | `#1A0B47` | `brand-violet-dk` | Near-black violet. Hero, games, map, team, footer backgrounds. |

### Supporting Violet Scale

| Token | Value | Tailwind Key |
|-------|-------|-------------|
| `--violet-500` | `#5E3BE1` | `violet-500` |
| `--violet-200` | `#C4ABFA` | `violet-200` |
| `--violet-50` | `#EFE8FE` | `violet-50` |
| `--secondary-teal` | `#19C9A5` | `secondary-teal` |

### Neutral Greys

| Token | Value | Tailwind Key |
|-------|-------|-------------|
| `--grey-50` | `#FAFAFA` | `grey-50` |
| `--grey-100` | `#F5F5F5` | `grey-100` |
| `--grey-200` | `#EEEEEE` | `grey-200` |
| `--grey-300` | `#E0E0E0` | `grey-300` |
| `--grey-400` | `#BDBDBD` | `grey-400` |
| `--grey-500` | `#9E9E9E` | `grey-500` |
| `--grey-600` | `#757575` | `grey-600` |
| `--grey-700` | `#616161` | `grey-700` |
| `--grey-800` | `#424242` | `grey-800` |
| `--grey-900` | `#212121` | `grey-900` |

### Semantic Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#19C9A5` | Reuses secondary-teal. Positive states. |
| `--color-warning` | `#F59E0B` | Amber. Placeholder/coming-soon badges. |
| `--color-error` | `#EF4444` | Red. Form validation (contact section). |
| `--color-info` | `#3FE0D0` | Reuses brand-cyan. Informational tooltips. |

### Section Background Rules

| Section | Background | Text | Accents |
|---------|-----------|------|---------|
| Hero | `--brand-violet-dk` | White (body), magenta/cyan (display) | Magenta/cyan neon |
| What We Do | `--grey-50` | `--brand-violet` (headlines), `--grey-700` (body) | Magenta highlights |
| Games Showcase | `--brand-violet-dk` | White, magenta (Superpredictor), cyan (Hotstreak) | Radial glow backgrounds |
| Why In-House | `white` | `--brand-violet` (headlines), `--grey-700` (body) | Magenta number markers |
| Live Regions | `--brand-violet-dk` | White | Magenta fills, cyan strokes/pulses |
| Stats | `--grey-50` | Magenta (numbers), `--grey-700` (labels) | -- |
| Team | `--brand-violet-dk` | White (names), cyan (roles), `--grey-300` (bios) | Magenta hover glow |
| Contact/Footer | `--brand-violet-dk` | White | Magenta CTA |

---

## 3. Typography Scale

### Font Families

```css
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Display Scale (Space Grotesk)

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `h1-hero` | `clamp(3rem, 8vw, 7rem)` | 700 | 0.95 | -0.03em | Hero headline only |
| `h2-section` | `clamp(2rem, 5vw, 4rem)` | 700 | 1.05 | -0.02em | Section headlines |
| `h3-card` | `clamp(1.25rem, 3vw, 1.75rem)` | 700 | 1.15 | -0.01em | Card titles, game names |
| `h4-label` | `1.125rem` | 600 | 1.3 | -0.01em | Team names, feature card titles |
| `stat-number` | `clamp(2.5rem, 6vw, 5rem)` | 700 | 1.0 | -0.02em | Stats counter numbers |

### Body Scale (Inter)

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `body-lg` | `1.125rem` | 400 | 1.6 | 0 | Hero sub, section descriptions |
| `body` | `1rem` | 400 | 1.6 | 0 | Paragraphs, card descriptions |
| `body-sm` | `0.875rem` | 400 | 1.5 | 0 | Captions, footer text, stat labels |
| `body-xs` | `0.75rem` | 500 | 1.4 | 0 | Badges, metadata |

### Special Styles

| Style | Font | Size | Weight | Letter Spacing | Transform | Colour |
|-------|------|------|--------|----------------|-----------|--------|
| `eyebrow` | Inter | `0.75rem` | 500 | 0.15em | uppercase | `--brand-cyan` |
| `nav-link` | Inter | `0.875rem` | 500 | 0.02em | none | white (dark), `--grey-700` (light) |
| `stat-chip` | Inter | `0.8125rem` | 500 | 0 | none | `--grey-300` on dark |

### Weight Usage Rules

- **700 (Bold):** Headlines (H1, H2, H3), stat numbers. Never on body text.
- **600 (Semi-bold):** Team member names, feature card titles (H4 only).
- **500 (Medium):** Eyebrows, nav links, roles, labels, stat chip text.
- **400 (Regular):** All body copy. Default weight for Inter.

---

## 4. Spacing and Layout

### Base Unit

`4px` (0.25rem). All spacing derives from this base.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `0.25rem` (4px) | Tight gaps, icon padding |
| `space-2` | `0.5rem` (8px) | Inline spacing, badge padding |
| `space-3` | `0.75rem` (12px) | Card internal padding (small) |
| `space-4` | `1rem` (16px) | Standard gap, input padding |
| `space-6` | `1.5rem` (24px) | Card padding, element gaps |
| `space-8` | `2rem` (32px) | Section heading to content |
| `space-10` | `2.5rem` (40px) | Between subsection groups |
| `space-12` | `3rem` (48px) | Desktop card padding |
| `space-16` | `4rem` (64px) | Section padding (mobile) |
| `space-20` | `5rem` (80px) | Section padding (tablet) |
| `space-24` | `6rem` (96px) | Section padding (desktop) |
| `space-32` | `8rem` (128px) | Hero vertical padding |

### Grid System

| Property | Value |
|----------|-------|
| Max width | `1280px` |
| Columns | 12 (CSS Grid or Tailwind grid) |
| Column gap | `2rem` (desktop), `1.5rem` (tablet), `1rem` (mobile) |
| Container padding | `1.5rem` (mobile), `2rem` (tablet), `4rem` (desktop) |

### Responsive Breakpoints

| Name | Min-width | Usage |
|------|-----------|-------|
| `sm` | `640px` | Phone landscape, small adjustments |
| `md` | `768px` | Tablet portrait. Stack to 2-col transitions. |
| `lg` | `1024px` | Tablet landscape / small desktop. Games pinned scroll activates. |
| `xl` | `1280px` | Desktop. Full grid layouts. |
| `2xl` | `1536px` | Large desktop. Content stays max-width, extra margin. |

### Section Padding

All sections use vertical padding: `space-16` (mobile) / `space-20` (tablet) / `space-24` (desktop). Hero uses `space-32` top padding to clear the nav and create breathing room.

---

## 5. Motion and Interaction

### Easing Curves

| Name | Value | Usage |
|------|-------|-------|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary entrance animation. Content appearing. |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Cross-fades, background glow transitions. |
| `ease-hover` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Hover state transitions. |
| `spring` | `{ type: "spring", stiffness: 100, damping: 15 }` | Tooltip entry (Framer Motion). |

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `150ms` | Hover colour changes, opacity toggles |
| `duration-normal` | `200ms` | Hover transforms (scale, shadow), nav transitions |
| `duration-medium` | `500ms` | Section entry reveals, card staggers |
| `duration-slow` | `600ms` | Hero letter reveal per character |
| `duration-counter` | `1500ms` | Stat count-up animation |
| `duration-pulse` | `2000ms` | Map marker pulse loop |

### Animation Inventory

| Animation | Trigger | Properties | Duration | Easing | Stagger |
|-----------|---------|------------|----------|--------|---------|
| Hero letter reveal | Page load | `opacity: 0 -> 1`, `y: 20px -> 0` per character | 600ms | ease-out | 30ms between children |
| Hero sub fade-up | After H1 completes | `opacity: 0 -> 1`, `y: 16px -> 0` | 500ms | ease-out | -- |
| Hero CTA scale-in | After sub | `opacity: 0 -> 1`, `scale: 0.9 -> 1` | 400ms | ease-out | 100ms |
| Hero parallax | Scroll | `yPercent: 0 -> -10` (H1) through `-30` (bg) | Continuous | Linear (scroll-bound) | -- |
| Section entry | `whileInView` | `y: 32px -> 0`, `opacity: 0 -> 1` | 500ms | ease-out | -- |
| What We Do card stagger | `whileInView` | `x: 40px -> 0`, `opacity: 0 -> 1` | 500ms | ease-out | 100ms |
| Games pinned scroll | GSAP ScrollTrigger | `pin: true`, `scrub: 1`, duration `+=200%` | Scroll-bound | Linear | -- |
| Games moment transition | Scroll progress 45-55% | Cross-fade + translate, glow colour shift | Scroll-bound | ease-in-out | -- |
| Games phone mockup | Scroll-bound | `rotateY: 5deg -> 0`, `scale: 0.9 -> 1` | Scroll-bound | ease-out | -- |
| Why In-House numbers | `whileInView` | Fade in + scale from 0.8 | 500ms | ease-out | 150ms |
| Map country fill | `whileInView` | `opacity: 0 -> 1` per country | 300ms | ease-out | 200ms |
| Map marker pulse | Continuous (after entry) | `scale: 0 -> 1.5`, `opacity: 1 -> 0` | 2000ms | ease-out | Infinite loop |
| Map scale-up | `whileInView` | `scale: 0.95 -> 1` | 600ms | ease-out | -- |
| Stat count-up | `whileInView` | `useMotionValue` 0 to target | 1500ms | ease-out | -- |
| Team card stagger | `whileInView` | `y: 24px -> 0`, `opacity: 0 -> 1` | 400ms | ease-out | 60ms |
| Card hover lift | Hover | `y: -4px`, `box-shadow` increase | 200ms | ease-hover | -- |
| Team photo hover | Hover | `filter: grayscale(100%) -> grayscale(0%)`, magenta border glow | 200ms | ease-hover | -- |
| Nav solid transition | Scroll past hero | `background-color` + `backdrop-filter: blur(12px)` | 200ms | ease-hover | -- |
| Scroll progress bar | Scroll | `scaleX: 0 -> 1` | Continuous | Linear (scroll-bound) | -- |
| Tooltip entry | Hover on map marker | `opacity: 0 -> 1`, `y: 8px -> 0` | Spring | spring | -- |
| Tooltip exit | Mouse leave | `opacity: 1 -> 0`, `y: 0 -> 8px` | 150ms | ease-out | -- |

### Reduced Motion

When `prefers-reduced-motion: reduce` is active:
- Disable all parallax and pinned scroll. Games section renders as static stacked cards.
- Disable letter-by-letter reveal. H1 appears immediately.
- Disable map marker pulse animation.
- Keep gentle opacity fades (200ms) on section entry -- never strip all motion.
- Stat counters show final number immediately (no count-up).

---

## 6. Component Inventory

### 6.1 Button

**Purpose:** Primary interactive element for CTAs and navigation actions.

**Variants:**

| Variant | Background | Text | Border | Hover | Focus |
|---------|-----------|------|--------|-------|-------|
| `primary` | `--brand-magenta` | white | none | `box-shadow: 0 0 24px rgba(63, 224, 208, 0.4)` (cyan glow) | 2px cyan outline, 2px offset |
| `secondary` | transparent | white | 1px solid white | `background: --brand-magenta`, `border-color: --brand-magenta`, `color: white` | 2px cyan outline, 2px offset |
| `ghost` | transparent | `--brand-cyan` | none | `text-decoration: underline` | 2px cyan outline, 2px offset |

**States:** default, hover (200ms ease), focus-visible (cyan ring), disabled (opacity 0.5, cursor not-allowed), loading (spinner replaces text, same dimensions).

**Sizes:** `md` (default: `px-6 py-3 text-sm`), `lg` (`px-8 py-4 text-base`).

**Props:** `variant`, `size`, `href` (optional, renders as anchor), `loading`, `disabled`, `children`.

---

### 6.2 SectionHeading

**Purpose:** Consistent heading block used at the top of every section.

**Composition:** Eyebrow (optional) + H2 headline + sub-paragraph (optional).

**Variants:**

| Variant | Eyebrow colour | Headline colour | Sub colour |
|---------|---------------|----------------|-----------|
| `dark` | `--brand-cyan` | white | `--grey-200` |
| `light` | `--brand-magenta` | `--brand-violet` | `--grey-600` |

**Props:** `eyebrow?`, `headline`, `sub?`, `variant`, `align` (`left` | `center`).

**Layout:** `max-width: 48rem` when centered. `margin-bottom: space-12` (desktop) / `space-8` (mobile).

---

### 6.3 StatCounter

**Purpose:** Animated count-up number with label.

**Composition:** Large number (Space Grotesk 700, magenta) + suffix (optional, e.g. "+", "M") + label text below (Inter 400, grey-700 on light / grey-300 on dark).

**Animation:** Uses Framer Motion `useMotionValue` + `useTransform`. Triggers once when `whileInView` with `once: true`. Counts from 0 to target over 1500ms with ease-out. Suffix appended statically (not animated).

**Props:** `value: number`, `suffix?: string`, `label: string`, `variant: 'dark' | 'light'`.

**States:** pre-animation (shows "0"), animating, final (shows target value).

---

### 6.4 TeamCard

**Purpose:** Displays a team member's photo, name, role, and optional bio.

**Layout:** Vertical stack. Square photo (aspect-ratio 1/1, `object-cover`) on top, text block below with `space-3` padding.

**Styling:**
- Background: `--brand-violet-dk` with 1px border `rgba(255,255,255,0.08)`.
- Border radius: `0.75rem`.
- Photo: `rounded-t-[0.75rem]`, grayscale by default.

**Hover state (200ms ease-hover):**
- Card lifts: `translateY(-4px)`, shadow increases.
- Photo: `grayscale(0%)` (re-saturates).
- Border: `1px solid rgba(233, 48, 184, 0.5)` (magenta glow), `box-shadow: 0 0 20px rgba(233, 48, 184, 0.15)`.

**Props:** `name: string`, `role: string`, `slug: string`, `bio?: string`.

**Photo path:** `/public/team/{slug}.jpg`. If missing, render a grey placeholder block (`--grey-700` background) with the person's initials centered in `--grey-400`.

---

### 6.5 GameCard

**Purpose:** Mobile fallback for Games Showcase when pinned scroll is disabled (below `lg` breakpoint or reduced motion).

**Layout:** Vertical card. Phone mockup image on top (16:9 aspect ratio container), text block below.

**Content:** Game name (H3, magenta or cyan depending on game), tagline, description, stat chips row.

**Stat chips:** Inline flex row of small pills (`background: rgba(255,255,255,0.08)`, `border-radius: 9999px`, `px-3 py-1`). Text in `--grey-300`, Inter 500, 0.8125rem.

**Styling:** Background `rgba(255,255,255,0.04)`, border `1px solid rgba(255,255,255,0.08)`, `rounded-xl`.

**Props:** `name: string`, `tagline: string`, `description: string`, `stats: { label: string; value: string }[]`, `mockupSrc: string`, `accentColor: 'magenta' | 'cyan'`.

---

### 6.6 RegionMarker

**Purpose:** Pulsing dot placed on the map at each active market's centroid.

**Composition:**
- Inner dot: 8px circle, solid `--brand-magenta`, `z-index: 2`.
- Outer pulse ring: circle that scales from `0 -> 1.5` and fades from `opacity: 0.6 -> 0` on a 2s infinite loop. Colour: `--brand-cyan`.

**Animation:** CSS `@keyframes` preferred over JS for performance (6 markers animating simultaneously). Each marker's animation-delay is staggered by 300ms to avoid synchronised pulsing.

**Props:** `coordinates: [number, number]`, `name: string`.

---

### 6.7 MapTooltip

**Purpose:** Hover card appearing above a map marker showing country details.

**Layout:** Compact card. Flag emoji + country name (bold) + single stat line.

**Styling:** Background `--brand-violet` with `backdrop-filter: blur(8px)`, `border: 1px solid rgba(63, 224, 208, 0.3)`, `rounded-lg`, `px-4 py-3`, `box-shadow: 0 8px 32px rgba(0,0,0,0.3)`.

**Animation:** Framer Motion `AnimatePresence`. Entry: `opacity: 0 -> 1`, `y: 8px -> 0` with spring easing. Exit: `opacity: 1 -> 0`, `y: 0 -> 8px`, 150ms ease-out.

**Props:** `country: string`, `flag: string`, `detail: string`, `isVisible: boolean`.

---

### 6.8 Nav

**Purpose:** Sticky top navigation.

**States:**
- **Transparent** (over hero): No background. Logo neon variant. Links white.
- **Solid** (after scrolling past hero): `background: rgba(26, 11, 71, 0.85)`, `backdrop-filter: blur(12px)`. 200ms transition. Logo neon variant. Links white.

**Layout:** `max-width: 1280px`, centered. Logo (left), nav links (center), CTA button (right). On mobile (below `md`): hamburger menu, slide-in drawer from right, full-height, `--brand-violet-dk` background.

**Links:** `#what-we-do`, `#games`, `#why-in-house`, `#live-regions`, `#team`, `#contact`.

**CTA:** `Get in touch` -- primary button variant, `sm` size (smaller than section CTAs).

---

### 6.9 ScrollProgressBar

**Purpose:** 2px bar at the very top of the viewport showing scroll progress.

**Styling:** `position: fixed`, `top: 0`, `left: 0`, `height: 2px`, `background: --brand-magenta`, `transform-origin: left`, `z-index: 9999`.

**Animation:** `scaleX` from 0 to 1, bound to scroll progress. No easing -- linear tracks scroll position directly.

---

### 6.10 FeatureCard

**Purpose:** Icon + title + description card used in the What We Do section.

**Layout:** Horizontal on desktop (icon left, text right) or vertical on mobile. Icon area: 48px circle with `--violet-50` background, icon in `--brand-magenta`. Title: H4 style. Description: body-sm, `--grey-600`.

**Styling:** Background white, `border: 1px solid --grey-200`, `rounded-xl`, `p-6`. Hover: `translateY(-2px)`, shadow lift to `0 4px 16px rgba(0,0,0,0.06)`.

**Props:** `icon: LucideIcon`, `title: string`, `description: string`.

---

### 6.11 CountryCard

**Purpose:** Small card displayed in the horizontal row below the map.

**Layout:** Flag emoji + country name + year live (or "Coming soon" badge).

**Styling:** Background `rgba(255,255,255,0.06)`, `border: 1px solid rgba(255,255,255,0.1)`, `rounded-lg`, `px-4 py-3`. Text: white name, `--grey-400` year.

**Props:** `code: string`, `name: string`, `flag: string`, `liveSince: number | null`.

---

## 7. Section-by-Section Specification

### 7.1 Hero (`#hero`)

| Property | Value |
|----------|-------|
| Background | `--brand-violet-dk` + animated grain overlay (CSS noise via SVG filter, 3% opacity) + slow radial gradient blob (`--brand-magenta` at 20% opacity, 800px diameter, drifting on 20s loop) |
| Section padding | `space-32` top, `space-24` bottom |
| Content max-width | `64rem` (1024px), centered |

**Elements:**
- **Eyebrow:** `eyebrow` style. Text: "IN-HOUSE F2P FOR SUPERBET". Colour: `--brand-cyan`.
- **H1:** `h1-hero` style. Text: "Free-to-play, built from the inside out." Colour: white. Apply `text-balance`.
- **Sub:** `body-lg`. Max-width `60ch`. Colour: `--grey-200`.
- **CTA row:** Flex row, `gap: space-4`. Primary: "See our games" -> `#games`. Secondary: "Meet the team" -> `#team`.
- **Market strip:** Below CTAs, `margin-top: space-8`. Flex row of 6 country flag images (24px) with label "LIVE IN 6 MARKETS" in `eyebrow` style.

**Desktop layout:** Single column, left-aligned (not centered). Max-width 64rem within the container.
**Tablet:** Same, text may wrap more.
**Mobile:** Same structure, CTAs stack vertically, flag strip wraps to 2 rows if needed.

---

### 7.2 What We Do (`#what-we-do`)

| Property | Value |
|----------|-------|
| Background | `--grey-50` |
| Text colours | Headline: `--brand-violet`. Body: `--grey-700`. |

**Desktop layout:** 2 columns (5fr / 7fr). Left: heading + paragraph. Right: 3 FeatureCards stacked with `gap: space-4`.
**Tablet:** Same 2-col but tighter (1fr / 1fr).
**Mobile:** Single column, heading block then cards.

**Icons for cards:** Use Lucide icons. Suggestion: `Target` (Pick'em), `Flame` (Streak), `Zap` (Tournament). Rendered at 24px in magenta.

---

### 7.3 Games Showcase (`#games`)

| Property | Value |
|----------|-------|
| Background | `--brand-violet-dk` |
| Pinned | Yes, GSAP ScrollTrigger. `pin: true`, `scrub: 1`, `end: "+=200%"`. |
| Breakpoint gate | `lg` (1024px) minimum for pinned behaviour. Below: static GameCards. |

**Desktop (pinned) layout:** Full viewport height container. Content centered both axes. Phone mockup center (max-height 70vh). Title + tagline on one side, description + stat chips on the other.

**Moment 1 (Superpredictor, scroll 0-50%):** Magenta accent. Phone enters from below. Left text slides from left. Right text slides from right with 100ms stagger.

**Moment 2 (Hotstreak, scroll 50-100%):** Cyan accent. Mirror layout. Cross-fade during 45-55% scroll range. Background glow shifts magenta to cyan.

**Mobile layout:** Two stacked GameCards with `gap: space-8`. No pinning. Standard section entry animation.

---

### 7.4 Why In-House (`#why-in-house`)

| Property | Value |
|----------|-------|
| Background | white |
| Text colours | Headline: `--brand-violet`. Numbers: `--brand-magenta`. Body: `--grey-700`. |

**Desktop layout:** 3-column grid, equal widths. Each column: large number marker ("01", "02", "03") + bold subtitle + paragraph.
**Tablet:** 3-column (narrower).
**Mobile:** Single column, stacked.

**Number markers:** `stat-number` style but smaller (`clamp(1.5rem, 4vw, 2.5rem)`). Magenta. Animate in with scale from 0.8 and fade.

---

### 7.5 Live Regions (`#live-regions`)

| Property | Value |
|----------|-------|
| Background | `--brand-violet-dk` |
| Map ocean | `--brand-violet-dk` |
| Map default country fill | `--grey-800` |
| Map default country stroke | `--grey-700`, 0.5px |
| Highlighted country fill | `--brand-magenta` |
| Highlighted country stroke | `--brand-cyan`, 1px |

**Desktop layout:** Map full-width (max-width 1280px, centered), aspect ratio roughly 2:1. Country cards row below with `gap: space-4`, horizontally scrollable on mobile.
**Mobile:** Map scales down proportionally. Country cards become a horizontal scroll strip.

**Projection:** Natural Earth or Mercator (react-simple-maps default). Crop to show all 6 markets comfortably -- this means the map can be cropped to show Europe, Africa, and South America (no need for full Pacific view).

---

### 7.6 Stats (`#stats`)

| Property | Value |
|----------|-------|
| Background | `--grey-50` |
| Section padding | `space-12` (tighter than standard -- this is a stat strip, not a full section) |

**Desktop layout:** 4 StatCounters in a horizontal row, evenly spaced. Dividers between them: 1px `--grey-200` vertical lines.
**Tablet:** 2x2 grid.
**Mobile:** Single column, stacked. Horizontal dividers instead of vertical.

---

### 7.7 Team (`#team`)

| Property | Value |
|----------|-------|
| Background | `--brand-violet-dk` |

**Desktop layout:**
- Leadership row: 3 TeamCards, centered, `gap: space-6`.
- Product grid: 4 TeamCards across, `gap: space-6`. `margin-top: space-12`.
- Ops row: 2 TeamCards, centered, `gap: space-6`. `margin-top: space-12`.
- Dev team banner: full-width band, `margin-top: space-12`. Text centered, Inter 500, `--grey-300`.

**Tablet:** Leadership 3-across. Product 2x2. Ops 2-across.
**Mobile:** All single column.

---

### 7.8 Contact and Footer (`#contact`)

| Property | Value |
|----------|-------|
| Background | `--brand-violet-dk` |

**Contact block:** Centered single column. `max-width: 40rem`. H2 section heading ("Want to talk F2P?"), sub text, email CTA button (primary variant, large), LinkedIn icon link (ghost button style, cyan).

**Footer band:** `border-top: 1px solid rgba(255,255,255,0.1)`. `padding: space-4 0`. Three-column flex: icon logo (left), copyright (center, body-xs, `--grey-500`), "Built in Dublin" (right, body-xs, `--grey-500`).

---

## 8. Accessibility

### Contrast Audit

| Combination | Ratio | Verdict |
|-------------|-------|---------|
| White (`#FFFFFF`) on `--brand-violet-dk` (`#1A0B47`) | 15.8:1 | Pass AAA |
| `--brand-magenta` (`#E930B8`) on `--brand-violet-dk` (`#1A0B47`) | ~4.7:1 | Pass AA large text (3:1). Borderline AA normal (4.5:1). **Decision: restrict magenta on dark to display text 24px+ bold or 19px+ regular.** Body text on dark backgrounds must be white or `--grey-200` minimum. |
| `--brand-cyan` (`#3FE0D0`) on `--brand-violet-dk` (`#1A0B47`) | ~9.5:1 | Pass AAA |
| `--brand-violet` (`#3D1E91`) on white | ~8.5:1 | Pass AAA |
| `--brand-magenta` (`#E930B8`) on white | ~3.8:1 | Fail AA normal. **Decision: magenta on light backgrounds is display text only (24px+ bold). Body text on light backgrounds uses `--brand-violet` or `--grey-700`.** |
| `--grey-700` (`#616161`) on white | ~5.9:1 | Pass AA |
| `--grey-200` (`#EEEEEE`) on `--brand-violet-dk` | ~12.5:1 | Pass AAA |
| `--grey-300` (`#E0E0E0`) on `--brand-violet-dk` | ~11.0:1 | Pass AAA |

### Focus Indicators

All interactive elements use `outline: 2px solid var(--brand-cyan)` with `outline-offset: 2px` on `:focus-visible`. No outline on `:focus` alone (mouse clicks should not show the ring).

### Keyboard Navigation

- All nav links, buttons, and map markers are focusable via Tab.
- Map markers: focus triggers the same tooltip as hover.
- Skip-to-content link as the first focusable element, visually hidden until focused.
- Games section (when pinned): ensure Tab moves focus to the next section, not trapped inside the pinned container.

### ARIA Patterns

| Component | Pattern |
|-----------|---------|
| Nav | `<nav aria-label="Main navigation">` with `<ul>` of links |
| Mobile nav drawer | `role="dialog"`, `aria-modal="true"`, focus trap, Escape to close |
| Map | `role="img"`, `aria-label="Map showing Hunch live regions"`. Each marker: `role="button"`, `aria-label="{Country name} - details"` |
| Map sr-only fallback | Hidden `<ul>` listing all countries with details, placed inside the map section |
| Stat counters | `aria-label="{value} {label}"` on the container. Use `aria-live="polite"` so screen readers announce the final value |
| Scroll progress bar | `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="Page scroll progress"` |
| Section landmarks | Each section: `<section aria-labelledby="{section}-heading">` with matching `id` on the H2 |

### Semantic HTML

- Single `<h1>` in the hero.
- Each section uses `<section>` with `aria-labelledby`.
- Heading hierarchy: H1 (hero) -> H2 (sections) -> H3 (cards/subsections) -> H4 (team names). No skipped levels.
- Footer uses `<footer>`.
- Nav uses `<nav>`.
- Images use descriptive `alt` text. Decorative images (grain, glow blobs) use `alt=""` or are CSS backgrounds.

---

## 9. Asset Inventory

### Brand Logos (`/public/brand/`)

| File | Usage | Fallback |
|------|-------|----------|
| `hunch-logo-full.png` | Nav (dark backgrounds), footer area | Text "HUNCH" in Space Grotesk 700, white |
| `hunch-logo-violet.png` | Nav on light backgrounds (if any) | Text "HUNCH" in Space Grotesk 700, violet |
| `hunch-icon.png` | Footer icon, favicon source | -- |
| `hunch-icon-mono.png` | Monochrome contexts | -- |

### Team Photos (`/public/team/`)

| File | Person |
|------|--------|
| `rob-egan.jpg` | Rob Egan |
| `mark-nolan.jpg` | Mark Nolan |
| `renata-dima.jpg` | Renata Dima |
| `odhran-omaoileidigh.jpg` | Odhran O'Maoileidigh |
| `andrew-tibot.jpg` | Andrew Tibot |
| `jack-barry.jpg` | Jack Barry |
| `caitriona-mcnamara.jpg` | Caitriona McNamara |
| `david-kiernan.jpg` | David Kiernan |
| `cian-cullen.jpg` | Cian Cullen |

**Placeholder strategy:** If image file is missing, render a `--grey-700` background block (same aspect ratio) with the person's initials in `--grey-400`, centered, Space Grotesk 600, 2rem.

### Game Mockups (`/public/games/`)

| File | Usage |
|------|-------|
| `superpredictor-mockup.png` | Games Showcase, Moment 1 |
| `hotstreak-mockup.png` | Games Showcase, Moment 2 |

**Placeholder strategy:** Grey gradient block (`--grey-700` to `--grey-800`) with game name text centered, matching the phone mockup aspect ratio (9:19.5 for a phone screen).

### Country Flags

Use flag emoji in text contexts (map tooltips, country cards, hero market strip). For the hero market strip where crisp rendering matters, use 24px SVG flag icons from a CDN or bundled SVG sprites. Fallback: emoji only.

---

## 10. Data File Contracts

These files live in `/lib/data/` and are the single source of truth for all content. All placeholder values are marked with `// TODO: confirm` comments.

### `regions.ts`
Array of `{ code, name, flag, coordinates, liveSince, detail }` for each market.

### `games.ts`
Array of `{ slug, name, tagline, description, accentColor, stats: { label, value }[], mockupSrc }` for each game.

### `team.ts`
Three exported arrays: `leadership`, `product`, `ops`. Each member: `{ name, role, slug, bio? }`.

---

*End of design specification.*
