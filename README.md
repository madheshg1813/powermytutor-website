# Power My Tutor — website

The marketing site for **powermytutor.com**. It is a separate project and repo from the app
(`power-my-tutor`, served at app.powermytutor.com). Every sign-up and log-in button links to the app.

## Run

```bash
npm install
npm run dev        # http://localhost:3300
npm run typecheck
npm run build && npm start
```

Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS 3, Lucide icons. Fonts are Sora (headings)
and Inter (body), the same as the app. Brand tokens in `tailwind.config.ts` match the app's.

## Where things are

| Path | What |
|---|---|
| `src/lib/site.ts` | Name, domain, app/sign-up/log-in links, nav |
| `src/lib/content.ts` | Every word on the home page: features, steps, plans, FAQs |
| `src/components/sections/` | One file per home page section |
| `src/components/ui/` | Logo, browser and phone frames, the WhatsApp message recreation |
| `public/product/` | Real app screenshots (WebP, 2x/3x) |

## Screenshots

`public/product/*.webp` are real captures of the app with its fictional sample center,
"Apex Science Institute". They were taken from a private local copy of the app with its own
throwaway database — no customer data. The WhatsApp message in the "For parents" section is a
recreation, but its text is exactly what the app pre-fills for that sample student.

When the app's screens change, recapture them at 1440 × 900 (2x) for desktop crops and
390 × 844 (3x) for phone shots, and keep the same file names.

## Keep in step with the app

- Prices and student limits: `plans` in `src/lib/content.ts` mirrors `power-my-tutor/src/lib/plans.ts`
  (and the products in Dodo Payments).
- Claims: only list features that are live in the app.
