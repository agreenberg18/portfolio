# Andrew Greenberg Portfolio

A playful, single-page portfolio site for Andrew Greenberg, Partner Engineer at Uber. Built with Next.js, Tailwind CSS, and Framer Motion, exported as a fully static site.

## Tech stack

- **Framework:** Next.js 15 (App Router) with static export (`output: "export"`)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Fonts:** Fredoka (display) + Inter (body) via `next/font`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

This generates a static site in the `out/` directory.

## Project structure

```
app/
  layout.tsx        # Fonts + metadata
  page.tsx          # Composes all sections
  globals.css       # Tailwind + theme utilities
components/
  Nav.tsx           # Sticky pill nav
  Hero.tsx          # Animated hero with headshot
  About.tsx         # Bio + stats + skill badges
  Projects.tsx      # Project grid
  ProjectCard.tsx   # Individual project card
  Experience.tsx    # Animated work timeline
  Contact.tsx       # CTA + footer
lib/
  projects.ts       # Project data
  experience.ts     # Work history data
public/
  andrew_headshot.png
  projects/         # Project screenshots & logos
```

## Editing content

- **Projects:** edit `lib/projects.ts`
- **Work history:** edit `lib/experience.ts`
- **Bio / skills / stats:** edit `components/About.tsx`

## Deploying to Render

The repo includes `render.yaml` defining a **Static Site**:

- **Build command:** `npm install && npm run build`
- **Publish directory:** `out`

To deploy:

1. Push this repo to GitHub.
2. In the Render dashboard, create a new **Blueprint** and point it at the repo (Render reads `render.yaml`), or create a **Static Site** manually with the build command and publish path above.
3. Render builds and serves the static `out/` directory.
