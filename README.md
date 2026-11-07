# Power My Tutor — website

The marketing site for **powermytutor.com**. It is a separate project and repo from the app
(`power-my-tutor`, served at app.powermytutor.com). Every sign-up and log-in button links to the app.

## Run

```bash
npm install
npm run dev        # http://localhost:3300
npm run typecheck
npm run build      # static site in out/
npm run preview    # serves out/ the way Cloudflare Pages does, with _redirects and _headers: http://localhost:3310
```

Stack: Next.js 15 (App Router, static export), TypeScript, Tailwind CSS 3, Lucide icons. Fonts are Sora
(headings) and Inter (body), the same as the app. Brand tokens in `tailwind.config.ts` match the app's.

## Hosting

Cloudflare Pages, project `powermytutor-website`, deployed from this PC with Wrangler (no Git
integration yet):

```bash
npx wrangler login   # once per PC
npm run deploy       # builds, then uploads out/ as the production deployment
```

- `public/_redirects`: `/signup` and `/login` go to the app.
- `public/_headers`: security headers, long caching for `/_next/static`, and `noindex` on the
  `*.pages.dev` address so only powermytutor.com gets indexed.
- Wrangler is pinned to 4.86.0, the last release that runs on Node 20 (later ones need Node 22). Its
  local server only knows runtime dates up to May 2026, hence `--compatibility-date` in `preview`.

## Where things are

| Path | What |
|---|---|
| `src/lib/site.ts` | Name, domain, app/sign-up/log-in links, nav |
| `src/lib/content.ts` | Every word on the home page: features, steps, plans, FAQs |
| `src/components/sections/` | One file per home page section |
| `src/components/ui/` | Logo, browser and phone frames, callout pins, the WhatsApp message recreation |
| `public/product/` | Real app screenshots (WebP, 2x/3x), plus `-640/-1080/-1600` copies |
| `src/lib/image-loader.ts` | Picks the right screenshot copy for each screen width (static hosting has no image optimizer) |
| `src/components/ui/DashboardScreen.tsx` | The hero's dashboard, drawn in HTML/SVG (not a screenshot) from the app's own markup and sample data, laid out at 1440 × 900 and scaled to its frame. Update it when the app's dashboard changes |

The page: hero (the drawn dashboard on a tilted card, then a strip of product facts) → "Built around
a tuition center's day" (6 AM attendance, 5:30 PM marks, 7 PM fees, 9 PM parents, term-end report
cards) → spec list → pricing → FAQ → closing band.

If `npm run dev` sits at "Starting..." and never says "Ready", delete the `.next` folder and start
it again. A leftover `.next` (after `npm run build`, or a dev server stopped mid-compile) causes it.

## Screenshots

`public/product/*.webp` are real captures of the app with its fictional sample center,
"Apex Science Institute". They were taken from a private local copy of the app with its own
throwaway database — no customer data. The WhatsApp message in the 9 PM chapter is a
recreation, but its text is exactly what the app pre-fills for that sample student.

How they were made, so they can be redone when the app changes:

- `hero-dashboard` — whole window at 1440 × 900, 2x. `hero-phone`, `results-phone` — 390 × 844, 3x.
  `hero-dashboard` and `hero-phone` are no longer on the page; `hero-dashboard` is kept as the
  reference that `DashboardScreen.tsx` was drawn from.
- `att-list`, `att-parents`, `fees-stats`, `fees-overdue` — single app cards captured as element
  screenshots at a 1060 px wide window (2x), so the cards are compact and readable; corners made
  transparent so they can carry a shadow.
- `marks-sheet` — main area at 1440 × 900 (2x) with the cursor in roll 03's mark box, cropped to the
  left of the Remarks column. The callout pins in `DaySection.tsx` are placed in % of this image.
- `report-card` — the printed report card page, top of the paper.

After adding or replacing a screenshot, run `npm run images` to remake its 640/1080/1600 px copies.

## Keep in step with the app

- Prices and student limits: `plans` in `src/lib/content.ts` mirrors `power-my-tutor/src/lib/plans.ts`
  (and the products in Dodo Payments).
- Claims: only list features that are live in the app.
