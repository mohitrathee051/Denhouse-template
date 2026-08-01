# Denhouse Group

A production-quality marketing website for **Denhouse Group**, a company offering premium PG
(Paying Guest) accommodation and real estate services across India.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment file and add your [Formspree](https://formspree.io) form ID (used by the
   contact form on `/contact`):

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local`:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/            # Routes (App Router) — home, about, pg, real-estate, gallery, contact, privacy, terms
  components/     # Reusable UI + section components
  components/ui/  # Low-level primitives (Button, Card, Badge, Input, Textarea, Container, Section)
  data/           # Static content: PG listings, properties, testimonials, gallery images
  lib/            # Constants and helper functions
  hooks/          # Custom React hooks
  types/          # Shared TypeScript types
```

## Pages

| Route              | Description                                   |
| ------------------ | ---------------------------------------------- |
| `/`                 | Home — hero, services, featured listings, stats, testimonials |
| `/about`            | Company story, mission, vision, team, timeline |
| `/pg`               | PG listings with filters, amenities, FAQ       |
| `/pg/[slug]`        | Individual PG detail page                      |
| `/real-estate`      | Property listings with search/filters          |
| `/real-estate/[slug]` | Individual property detail page              |
| `/gallery`          | Filterable masonry gallery with lightbox       |
| `/contact`          | Contact form (Formspree), map, business info   |
| `/privacy`          | Privacy Policy                                 |
| `/terms`            | Terms & Conditions                             |

## Notes

- Images are served from Unsplash for placeholder purposes. Swap the URLs in `src/data/*.ts` and
  `src/components/*.tsx` for your own photography before launch, and drop real assets into
  `public/images/`.
- SEO metadata, Open Graph tags, `sitemap.xml`, and `robots.txt` are generated automatically —
  see `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`. Update `SITE_URL` in
  `src/lib/constants.ts` to your production domain.
- Replace `/images/logos/og-cover.jpg` with a real 1200×630 social share image.
- The contact form requires a Formspree form ID (see setup step 2) to actually send submissions.
