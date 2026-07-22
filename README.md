# Raj Studio — Public Website

Marketing site for **Raj Studio (Gujarat)** — studio, wedding, event, and video photography.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Framer Motion
- React Hook Form + Zod (WhatsApp enquiry flow)

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `917874644411` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO / sitemap |

## Spec

Design system, pages, and build order: [public-website-spec.md](./public-website-spec.md).

## Swap images later

Portfolio and hero imagery live in `content/portfolio.ts` as Unsplash URLs. Replace `src` values with local `/images/...` paths or CDN URLs when ready.
