# Farhan Saif — Portfolio

Personal portfolio website for **Farhan Saif**, *Robotics and AI Enthusiast*, with a
substantial dedicated experience for the flagship **ARGUS-6** project and its
documentation.

Dark-mode only. Static. Fast. Built to be easy to edit.

---

## 1. What was built

| Route | Page |
| --- | --- |
| `/` | Home — hero, featured ARGUS-6 project, achievements preview, skills preview |
| `/portfolio` | About Farhan, full technical skills, projects (ARGUS-6 + EcoGuard), achievements |
| `/argus-6` | Flagship project: mission, capabilities, explore, system architecture (interactive), locomotion, robotic arm, safety, AI & perception (YOLO), navigation, mission system, engineering decisions (interactive), testing & development |
| `/ecoguard` | EcoGuard project: the problem, how each platform works, Riverix (water robot), Sky-Cleanse (environmental drone), UN SDG alignment, core technology, project scale, team |
| `/documentation` | ARGUS-6 documentation index |
| `/documentation/<section>` | 10 documentation pages: Architecture, Software, Firmware, Communication, Locomotion, Navigation, AI & Perception, Manipulation, Safety, Testing |
| `/contact` | Email only |
| `/404` | Not-found page |

Plus `sitemap-index.xml`, `sitemap-0.xml`, `robots.txt` and an SVG favicon.

### Design

- Dark, high-contrast, restrained single accent (signal blue).
- Monospace (JetBrains Mono) for technical labels; sans (Inter) for prose.
- Subtle dot/line grid backgrounds, hairline borders, glass panels.
- Consistent status system everywhere: **Working / Tested / In development / Planned**.

### Animation

- Scroll reveals, hover states, animated statistics, interactive architecture
  diagram, interactive engineering-decision accordion, page transitions.
- All motion is disabled under `prefers-reduced-motion: reduce`.
- No animation library shipped — small vanilla scripts only.

### Content integrity

- No invented awards, results, benchmarks, capabilities, photos, links or bio.
- Planned features are labelled planned. The two confirmed Gold Medals
  (Innovation World Cup 2026, I3C 2026) are the only achievements listed.
- **Zero references to ToF sensors anywhere** (verified against the build output).

---

## 2. Tech stack

- **[Astro](https://astro.build)** (static output) + TypeScript
- `@astrojs/mdx` — documentation content collection
- `@astrojs/sitemap` — sitemap generation
- Self-hosted variable fonts via `@fontsource-variable/*`
- No backend. No database. No client framework.

---

## 3. Run it locally

```bash
npm install
npm run dev        # http://localhost:4321  (live reload)
```

Other scripts:

```bash
npm run build      # production build -> dist/
npm run preview    # serve the built dist/ locally
npm run check      # Astro + TypeScript diagnostics
```

Requires Node 20+ (see `.nvmrc`).

> Note: `npm run check` needs TypeScript 5.x, which is pinned in `devDependencies`.

---

## 4. Where to edit content

All editable text lives in **`src/data/`** — you should rarely need to touch markup.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Name, title, intro, **email**, meta title/description, production URL, nav items |
| `src/data/skills.ts` | Skill categories and items |
| `src/data/projects.ts` | Project cards (ARGUS-6, EcoGuard + sub-projects) |
| `src/data/achievements.ts` | Confirmed achievements + certificate image paths |
| `src/data/capabilities.ts` | ARGUS-6 capability cards + their status |
| `src/data/decisions.ts` | ARGUS-6 "engineering decisions" accordion |
| `src/data/testing.ts` | ARGUS-6 testing progression + evidence slots |
| `src/data/ecoguard.ts` | **Everything on the EcoGuard page** — hero, problem, workflow, Riverix, Sky-Cleanse, SDGs, technology, stats, team, links |
| `src/data/status.ts` | The status vocabulary (labels + descriptions) |

### ARGUS-6 page prose

Longer narrative copy (mission, section intros, explanations) is in
**`src/pages/argus-6.astro`**. Each section is clearly commented
(`{/* ---- CAPABILITIES ---- */}` etc.). The pipeline diagrams take their steps
inline in that file — edit the `steps={[...]}` arrays.

### EcoGuard page

Structured content is in **`src/data/ecoguard.ts`**; the layout that renders it is
**`src/pages/ecoguard.astro`** (commented section by section). The hero title,
team members and the source-code link all live in the data file.

### ARGUS-6 documentation

Markdown files in **`src/content/docs/`**. To add a page, drop in a new
`.md` file with front-matter:

```markdown
---
title: My New Section
order: 11
summary: One sentence shown in the index and nav.
---

## Heading

Body text…
```

The URL slug is the filename (`my-new-section.md` → `/documentation/my-new-section`).
Navigation, ordering and prev/next update automatically.

### System architecture diagram

Node labels and descriptions are in
**`src/components/ArchitectureDiagram.astro`** — edit the `NODES` object at the top.

---

## 5. Where to replace images

Drop real files into **`public/assets/<folder>/`**. Any missing file shows a
clean, clearly-labelled placeholder — the site always looks finished.

```
public/assets/
├── branding/     logo.svg (optional site logo) · argus-6-logo.png (your ARGUS-6 logo)
├── profile/      farhan.jpg · farhan-workspace.jpg          (both optional)
├── argus-6/      argus-6-hero.jpg · argus-6-card.jpg
├── ecoguard/     ecoguard-card.jpg
├── achievements/ innovation-world-cup.jpg · i3c.jpg         (certificate scans)
└── projects/     (any extra project imagery)
```

Full details and tips: **`public/assets/README.md`**.

To use a different filename, update the matching path in `src/data/*.ts`
(or the `src=` prop on the `<Placeholder>` in the relevant page).

### The logo

There is **no generated logo** — Farhan is creating it separately.

- **Site nav logo:** add `public/assets/branding/logo.svg` (or `.png`). The nav
  swaps the "FS / FARHAN SAIF" wordmark for it automatically, no code change.
- **ARGUS-6 logo:** save as `public/assets/branding/argus-6-logo.png`. It is not
  wired into any layout yet, so nothing breaks while it is absent — add an
  `<img>` where you want it (e.g. the ARGUS-6 hero).

Nothing about the logo is hard-coded into SVG/CSS, so replacement is a
drop-in file.

---

## 6. Where to replace the email

`src/data/site.ts`:

```ts
email: 'REPLACE_WITH_YOUR_EMAIL@example.com',
emailIsPlaceholder: true,   //  <-- set to false once the real address is in
```

While `emailIsPlaceholder` is `true`, the contact page shows the address as an
un-clickable placeholder with an edit hint. Set it to `false` and the page turns
it into a real `mailto:` link.

---

## 7. Deploy to a custom domain

The build output in `dist/` is plain static files — host it anywhere.

**Before deploying**, set the real domain in **two** places so canonical URLs,
Open Graph tags and the sitemap are correct:

1. `astro.config.mjs` → `site: 'https://your-domain.com'`
2. `src/data/site.ts` → `url: 'https://your-domain.com'`
   (and update the `Sitemap:` line in `public/robots.txt`)

### Netlify
`netlify.toml` is included. New site → connect the repo → deploy. Then
**Domain settings → add custom domain**.

### Vercel
`vercel.json` is included. Import the repo (framework auto-detected as Astro) →
deploy. Then **Settings → Domains**.

### Cloudflare Pages
Framework preset **Astro**, build command `npm run build`, output `dist`.
Add the domain under **Custom domains**.

### GitHub Pages
```bash
npm run build
# publish the dist/ folder (e.g. with the withastro/action GitHub Action)
```
If serving from a sub-path, also set `base` in `astro.config.mjs`.

---

## 8. Accessibility & SEO

- Semantic landmarks, skip link, visible focus rings, keyboard-operable nav,
  proper heading hierarchy, descriptive alt text (placeholders say they are
  placeholders).
- Per-page `<title>` / description, canonical URLs, Open Graph + Twitter tags,
  `Person` JSON-LD on the home page, generated sitemap.

---

## 9. Project structure

```
farhan-saif-portfolio/
├── astro.config.mjs          # site URL + integrations  (SET DOMAIN HERE)
├── netlify.toml / vercel.json # deployment presets
├── src/
│   ├── content.config.ts     # docs collection schema
│   ├── content/docs/*.md      # ARGUS-6 documentation  (ADD PAGES HERE)
│   ├── data/*.ts              # ALL editable content    (EDIT HERE)
│   ├── layouts/BaseLayout.astro
│   ├── components/            # Nav, Footer, Placeholder, StatusBadge,
│   │                          # Pipeline, ArchitectureDiagram, cards, …
│   ├── pages/
│   │   ├── index.astro
│   │   ├── portfolio.astro
│   │   ├── argus-6.astro      # flagship page prose (EDIT HERE)
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   └── documentation/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/global.css      # design tokens + base styles (THEME HERE)
└── public/
    ├── favicon.svg
    ├── robots.txt
    └── assets/…               # drop real images here (REPLACE HERE)
```

---

## 10. Remaining placeholders

These are intentional — replace when you have the real thing:

- **Email** — `src/data/site.ts` (`REPLACE_WITH_YOUR_EMAIL@example.com`).
- **Production domain** — `astro.config.mjs`, `src/data/site.ts`, `public/robots.txt`
  (currently `farhansaif.example`).
- **All images** — every `public/assets/**` file. Placeholders render until added:
  - `argus-6/argus-6-hero.jpg`, `argus-6/argus-6-card.jpg`
  - `ecoguard/ecoguard-card.jpg`
  - `achievements/innovation-world-cup.jpg`, `achievements/i3c.jpg`
  - `profile/farhan.jpg`, `profile/farhan-workspace.jpg` (optional)
  - `branding/logo.svg` (optional), `branding/argus-6-logo.png`
- **Safety architecture status** — `src/pages/argus-6.astro` #safety section and
  `src/content/docs/safety.md` carry an editable status note; tighten the labels
  as watchdogs / safe-stop / emergency handling are implemented.
- **Testing evidence slots** — `src/data/testing.ts` (`evidenceSlots`) are empty
  frames for test videos, benchmarks, photos and logs.
- **Favicon** — `public/favicon.svg` is a neutral placeholder mark.
