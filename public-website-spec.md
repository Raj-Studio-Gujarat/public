# Raj Studio (Gujarat) — Website Build Specification
*For use in Cursor. This is the single source of truth — reference it in every prompt instead of re-deciding design/architecture per page.*

---

## 1. Project Overview

A public marketing website for **Raj Studio — Gujarat**, a photography studio offering studio work, video shoots, weddings, and events. Goal: convert visitors into inquiries, rank well locally on SEO, and visually showcase photography work without competing with it.

**Not in scope for this project**: admin panel, client panel, backend auth/DB-driven features. This site is content-first and mostly static.

**Contact/inquiry flow (current phase)**: no backend form submission yet. Every contact/inquiry action — the contact form, package CTAs, and click-to-chat buttons — redirects directly to WhatsApp with a pre-filled message. Number is read from an environment variable, never hardcoded in components:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=918460716151   # (+91 8460716151, no + or spaces in the wa.me link)
```
Link pattern: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=<url-encoded message>`
This is a placeholder path — when the backend inquiry API is ready, swap the form submit handler to POST there instead, without changing the UI.

---

## 2. Design System (define this first — build nothing until this exists as code)

### 2.1 Concept
Direction: **the darkroom, not the boutique.** Most AI-generated "premium" sites default to warm cream + terracotta or near-black + neon accent — avoid both. This site's identity comes from photography's own vernacular: contact sheets, frame numbers, cyanotype blue, negative/positive relationships. Light theme throughout — photography needs a neutral stage, not a colored one.

### 2.2 Color tokens
```
--color-bg:          #F5F4F1   /* warm paper-grey, not cream — neutral stage for photos */
--color-bg-alt:      #EDEBE6   /* section alternation, slightly deeper */
--color-ink:         #1C1B19   /* near-black warm charcoal — primary text */
--color-ink-soft:    #5C5A55   /* secondary text, captions */
--color-accent:      #2B4C5C   /* cyanotype blue — signature accent, used sparingly */
--color-accent-soft: #7C97A3   /* muted tint of accent, for hover/subtle states */
--color-line:        #D8D5CE   /* hairline dividers, borders */
```
Accent is used ONLY for: links on hover, active nav state, form focus rings, one signature graphic element. Never as large background fills.

### 2.3 Typography
```
Display (headings):   Fraunces (variable, use optical size + weight axis) — editorial, warm serif, not overused
Body:                 Inter — clean, highly legible at small sizes
Utility/mono (labels, frame numbers, captions, nav eyebrows): IBM Plex Mono — evokes contact-sheet frame numbering
```
Type scale (rem, mobile-first, scale up ~1.25x at desktop):
```
--text-xs:   0.75rem   (mono labels, captions)
--text-sm:   0.875rem
--text-base: 1rem
--text-lg:   1.25rem
--text-xl:   1.75rem
--text-2xl:  2.5rem
--text-3xl:  3.5rem    (hero headline, desktop only — scales down on mobile)
```
Headings use Fraunces at font-weight 400-500 (not bold — elegance over shouting). Mono labels always uppercase, letter-spaced (`tracking-wide`), small — used for section eyebrows, category tags, image captions.

### 2.4 Layout
- Max content width: 1280px, generous side padding (min 24px mobile, 64px desktop)
- Grid-based portfolio layouts, asymmetric where it serves the image (not forced uniform grid)
- Generous whitespace between sections (min 96px vertical on desktop, 56px mobile) — let images breathe
- Border-radius: minimal, 2-4px only on interactive elements (buttons, inputs) — photos themselves stay unrounded, full-bleed where appropriate

### 2.5 Signature element
**Contact-sheet frame numbering.** Every portfolio image and testimonial carries a small mono-font frame label in the corner (e.g. `04/24`, `WED–07`) — referencing real film contact sheets, not decorative numbering. This recurs across portfolio grid, testimonials, and image lightboxes as the one consistent motif that ties the site together.

### 2.6 Motion
- Scroll-reveal: images/sections fade + rise 16px on entering viewport, staggered 60-80ms between siblings, 400ms ease-out, using `IntersectionObserver` — implement once as a reusable hook/component, not per-page
- Image hover: scale 1.03x + subtle shadow increase, 250ms ease
- Hero: slow auto-crossfade between 3-4 images (6-8s per image) OR subtle parallax scroll — pick one, don't combine
- Page/route transitions: simple fade, ~200ms
- **Respect `prefers-reduced-motion`** — disable all non-essential motion when set
- No spinning, bouncing, or attention-grabbing animation. Motion should feel like a shutter, not a carnival.

---

## 3. Tech Stack

- **Framework**: Next.js (App Router), TypeScript
- **Styling**: Tailwind CSS, configured with the design tokens above as CSS variables / theme extension (not hardcoded hex in components)
- **Animation**: Framer Motion for scroll-reveal and hover states
- **Images**: `next/image` for all photography content — mandatory, not optional, for LCP/CWV performance
- **Forms**: React Hook Form + Zod validation (client-side), POST to backend inquiry endpoint
- **Deployment target**: Vercel (or equivalent static/ISR-friendly host)
- **Fonts**: `next/font` for Fraunces, Inter, IBM Plex Mono (self-hosted via next/font, not external Google Fonts `<link>` — avoids render-blocking/layout shift)

### Folder structure
```
apps/website/
  app/
    page.tsx                 (Home)
    portfolio/page.tsx
    portfolio/[category]/page.tsx
    services/page.tsx
    about/page.tsx
    contact/page.tsx
    journal/page.tsx         (blog, optional at launch, plan route now)
    journal/[slug]/page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
  components/
    ui/                      (Button, Input, Badge, FrameLabel, Divider — atomic)
    sections/                (Hero, PortfolioGrid, Testimonials, CTASection — composed)
    layout/                  (Nav, Footer)
  lib/
    seo.ts                   (metadata generator helper, reused per page)
    api.ts                   (fetch wrapper for contact form → backend)
  content/
    services.ts              (static content: package data)
    testimonials.ts
  public/
    images/                  (or reference CDN/R2 URLs if images live there)
  styles/
    globals.css
  tailwind.config.ts
```

Build the `components/ui/` primitives FIRST. Every page composes from these — never let a per-page prompt invent new button styles, spacing, or one-off colors. When prompting Cursor for a new page, explicitly say: *"use existing components from components/ui and components/sections, do not create new style variants."*

---

## 4. Pages — functional spec

### 4.1 Home (`/`)
- Hero: rotating/crossfade hero imagery + headline + one primary CTA ("Enquire Now" → `/contact`, or scroll-to-form)
- Services overview: 4 cards (Studio, Weddings, Events, Video) linking to `/services`
- Featured work: curated grid (8-12 images) pulling from top portfolio pieces, links to `/portfolio`
- Testimonials: 3-4 rotating, each with contact-sheet frame-number styling
- Closing CTA band: contact prompt + WhatsApp click-to-chat link

### 4.2 Portfolio (`/portfolio`, `/portfolio/[category]`)
- Filterable grid: Wedding / Pre-wedding / Studio / Events / Video (tabs or dropdown, client-side filter is fine for launch)
- Each image: frame-number label, lazy-loaded, click opens lightbox (accessible: closes on Esc, focus-trapped)
- This page carries the most SEO weight — ensure category pages have unique meta titles/descriptions, real alt text per image (describe the actual scene, not "photo1.jpg")

### 4.3 Services (`/services`)
- Package tiers per category (Studio/Wedding/Event/Video), indicative pricing ranges (builds trust, reduces low-intent inquiries)
- Clear "what's included" per tier
- CTA per package → either pre-fills the contact form with package name (query param) or, for a faster path, opens WhatsApp directly with the package name in the pre-filled message text

### 4.4 About (`/about`)
- Studio story, team (photo + role, if comfortable sharing), equipment/quality signals, years active
- Trust markers: number of events shot, client logos if any corporate work

### 4.5 Contact (`/contact`)
- Form fields: name, phone, event type (dropdown), event date, message
- On submit: client-side validation (React Hook Form + Zod) only for now, then build a formatted message string and redirect to `https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=<encoded message>` (open in new tab) — no backend call yet, so no server-side spam risk at this phase
- Primary WhatsApp click-to-chat button (same env-driven number) shown equally prominently as a shortcut that skips the form entirely — Indian clients often prefer this
- Embedded map (studio location) if physical location matters
- Keep the form component structured so swapping the submit handler to a real backend POST later is a one-line change, not a rebuild

### 4.6 Journal (`/journal`) — plan the route now, content optional at launch
- Simple blog listing + post page, MDX or CMS-driven later
- Purpose: long-term SEO compounding via "real wedding" stories, styled shoots, local keywords

---

## 5. SEO Requirements

- `generateMetadata` per page — unique title/description, no duplicate meta across pages
- Structured data: `LocalBusiness` / `ProfessionalService` schema (JSON-LD) on Home and Contact, with NAP (name/address/phone) consistent everywhere on-page and matching Google Business Profile
- OG tags + Twitter card metadata per page, especially portfolio categories (for social sharing)
- `sitemap.xml` and `robots.txt` via Next.js `app/sitemap.ts` / `app/robots.ts`
- Image alt text: descriptive, specific (e.g. "Bride and groom exchanging rings at sunset, Ahmedabad wedding" — not generic)
- Semantic HTML: proper heading hierarchy (one `h1` per page), `<nav>`, `<main>`, `<footer>` landmarks
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1 — achieved via `next/image` sizing, self-hosted fonts, no layout-shifting animation on load

---

## 6. Security & Performance

- All contact form input validated server-side (Zod schema shared or mirrored on backend) — never trust client validation alone
- Rate-limit the contact/inquiry API route
- Security headers via `next.config.js`: CSP, `X-Frame-Options`, `Referrer-Policy`, HSTS
- Environment variables for: backend API base URL, WhatsApp number, any analytics/maps API keys — never hardcoded in components
- Static-generate (SSG) every page possible; only the contact form touches a live API call — this keeps the site fast and nearly free to host regardless of traffic
- Images served via CDN (Vercel's built-in image optimization, or Cloudflare/R2 if images are hosted externally — matches the earlier storage decision)
- Accessibility floor: visible keyboard focus states on all interactive elements, alt text on all images, `prefers-reduced-motion` respected, color contrast checked against the token palette above (ink `#1C1B19` on bg `#F5F4F1` passes AA comfortably; verify accent-on-bg combinations too)

---

## 7. Copy & Content Voice

- Plain, active voice. Describe what the studio does, not adjectives about how great it is ("We shoot weddings across Gujarat" not "We are passionate storytellers of your special moments")
- CTAs name the action exactly: "Enquire Now," "View Full Gallery," "Send on WhatsApp" — not vague "Learn More" everywhere
- Section eyebrows (mono-label style) should describe real structure: e.g. `SERVICES`, `SELECTED WORK`, `01 — STUDIO` only if there's a genuine sequence; don't force numbering where none exists
- No filler paragraphs — every sentence should help a visitor decide to inquire

---

## 8. Build Order (for Cursor prompting sequence)

1. Tailwind config + CSS variables from Section 2 (colors, type scale, spacing) — do this before any component
2. `components/ui/` primitives: Button, Input, Textarea, Select, Badge/FrameLabel, Divider, Container
3. `components/layout/`: Nav (with mobile menu), Footer
4. `components/sections/`: Hero, ServiceCard grid, PortfolioGrid (+ lightbox), Testimonials, CTASection
5. Assemble Home page from sections
6. Portfolio + category pages, lightbox interaction
7. Services, About, Contact pages
8. SEO metadata + sitemap/robots + JSON-LD across all pages
9. Motion pass: add scroll-reveal + hover states via Framer Motion, respecting reduced-motion
10. Performance/accessibility audit pass (Lighthouse), fix LCP/CLS issues
11. Deploy to Vercel, connect domain, verify Core Web Vitals in production

---

## 9. Prompting Cursor — practical notes

- Always reference this file: *"Follow /public-website-spec.md for design tokens, structure, and page requirements."*
- When generating a new page/component, explicitly instruct: *"Reuse existing components from components/ui and components/sections. Do not invent new colors, spacing, or font sizes outside the tokens defined in tailwind.config.ts."*
- Ask Cursor to generate the Tailwind config with the exact token values in Section 2.2/2.3 verbatim before generating any UI.
- For each page, prompt one section at a time (Hero, then Services, then Portfolio grid) rather than "build the whole homepage" in one shot — smaller prompts keep output aligned to the spec and easier to review.
