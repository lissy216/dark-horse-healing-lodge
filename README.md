# Dark Horse Healing Lodge

Marketing and booking site for **Dark Horse Healing Lodge** — a 19-acre healing and wellness event venue in Carp, Ontario (about 30 minutes west of Ottawa).

## Tech stack

- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css` via `@theme`
- **next/font** — Playfair Display (serif headings), Great Vibes (script accents), Lato (body)
- **Stripe** — event ticket checkout + rental payments (scaffolded, keys pending)
- **Resend** — email delivery for contact + booking inquiries (optional; falls back to server log)

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, three pillars (Heal/Restore/Renew), featured spaces, CTA |
| `/about` | About the Space — story, indoor/amenities/outdoor features, inclusive-use prose |
| `/gallery` | Gallery — studio, welcome area, grounds. Keyboard-navigable lightbox |
| `/book` | Rental info — hourly, half-day, full-day, multi-day options |
| `/events` | Events & Calendar — upcoming public events + booking inquiry form |
| `/contact` | Contact form + address + Google Maps embed |

## Brand

- **Palette:** charcoal `#1a1a1a`, gold `#c9a96e`, cream `#f5f0e8`, sage `#4a5c3f`, wood `#6b4c3b`
- **Aesthetic:** Dark, warm, rustic-luxe. Not clinical.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in Resend + Stripe credentials as they become available.

## Deployment

Auto-deploys to Vercel on push to `main` via the GitHub integration.
