# QA Report — Hunch Marketing Site

**Date:** 2026-04-07
**Build:** `pnpm build` passes clean (zero errors, zero warnings)

---

## Issues Found & Fixed (Critical/High)

### Critical — Fixed

1. **SmoothScrollProvider Lenis context permanently null**
   `useRef` doesn't trigger re-renders — context consumers got `null`. Fixed by switching to `useState`. Also added proper `gsap.ticker.remove()` cleanup.

2. **Nav mobile menu missing accessibility**
   Added `AnimatePresence` for exit animation, `role="dialog"`, `aria-modal`, `aria-expanded`, `aria-controls`, and Escape key handler.

3. **Nav scroll progress bar missing ARIA**
   Added `role="progressbar"`, `aria-label`, `aria-valuemin`, `aria-valuemax`.

### High — Fixed

4. **Map markers keyboard-inaccessible**
   Wrapped marker content in `<g>` with `tabIndex={0}`, `role="button"`, `aria-label`, `onFocus`/`onBlur` for tooltip.

5. **Map container missing ARIA**
   Added `role="img"` and `aria-label` wrapper div.

6. **Button always rendered `<a>` even without href**
   Now renders `<button>` when no `href` is provided.

7. **Hero drift keyframe in `<style jsx>`**
   Moved to `globals.css` for reliability.

8. **StatCounter MotionValue rendered directly**
   Switched to subscribing to `rounded.on("change")` and rendering via `useState`.

9. **Games layout flash on desktop**
   Replaced JS media query with CSS `lg:hidden` / `hidden lg:block` for zero-flash responsive layout.

10. **Team grid centering**
    Added `mx-auto` to leadership and ops grid rows.

11. **Skip-to-content link**
    Added in `layout.tsx` with CSS in `globals.css`.

---

## Remaining Issues (Medium/Low — for human review)

### Medium

- **Missing image assets**: All directories (`public/brand/`, `public/games/`, `public/team/`) are empty. Team cards handle this gracefully (User icon fallback), but Nav logo and game mockups will 404. **Action: add brand assets before deploy.**
- **TopoJSON external CDN dependency**: Map loads from `cdn.jsdelivr.net`. No error handling if CDN is down. Consider self-hosting the ~100KB file in `/public/`.
- **Magenta on light backgrounds**: `#E930B8` on white is ~3.8:1 contrast ratio — fails WCAG AA for normal text. Currently used only at display size (numbers, headings) which is compliant, but audit if smaller uses are added.
- **`scroll-behavior: smooth` in CSS**: Could conflict with Lenis. Remove from globals.css if Lenis handles all scrolling.
- **No error boundary**: If the map TopoJSON fetch fails or GSAP throws during pin, there's no fallback UI.

### Low

- **No test suite**: No unit or integration tests exist. Consider adding Vitest for critical components (StatCounter, data files).
- **Framer Motion reduced-motion**: Only SmoothScrollProvider and Games check `prefers-reduced-motion`. Other Framer Motion animations (whileInView reveals) still run. Framer Motion v12 may handle this internally — verify.
- **Letter-by-letter animation creates many DOM nodes**: The hero H1 creates ~50 individual `motion.span` elements. Performance is fine but SSR HTML is larger.
- **react-simple-maps peer dep warning**: Expects React 16-18, running on React 19. Works fine but could break on minor updates.

---

## Lighthouse Estimate

| Category | Expected | Notes |
|----------|----------|-------|
| Performance | 90-95 | Map lazy-loaded, fonts preloaded. TopoJSON fetch could slow FCP. |
| Accessibility | 85-90 | All Critical/High a11y issues fixed. Remaining: verify contrast ratios with real assets. |
| Best Practices | 95+ | No known issues. |
| SEO | 95+ | Metadata configured, semantic HTML, single H1. |

**Real Lighthouse audit should be run after deploying to Vercel.**

---

## Pre-Deploy Checklist

- [ ] Add brand logos to `/public/brand/`
- [ ] Add game mockups to `/public/games/`
- [ ] Add team photos to `/public/team/`
- [ ] Confirm all `// TODO: confirm` values in data files
- [ ] Run Lighthouse on deployed preview URL
- [ ] Test GSAP pinned section in Safari
- [ ] Test on actual mobile device (iOS Safari, Chrome Android)
