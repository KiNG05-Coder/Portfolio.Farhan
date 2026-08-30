// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/* ------------------------------------------------------------------
   Configured for GitHub Pages on the repo:
     https://github.com/KiNG05-Coder/Portfolio.Farhan

   Live URL will be:
     https://king05-coder.github.io/Portfolio.Farhan/

   `base` MUST match the repo name for a GitHub *project* site, or the
   CSS / JS / links will 404. If you later:
     • rename the repo            -> change `base` to '/new-name'
     • add a custom domain        -> set base: '/'  (or delete the line)
     • switch to Vercel / Netlify -> set base: '/'  (or delete the line)
   `site` only affects canonical URLs, Open Graph tags and the sitemap.
   ------------------------------------------------------------------ */
export default defineConfig({
  site: 'https://king05-coder.github.io',
  base: '/Portfolio.Farhan',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  // Astro's dev-only toolbar (bottom-centre pill during `npm run dev`).
  // Hidden for now — flip back to `enabled: true` or delete this block
  // to restore it. It never ships to the production build either way.
  devToolbar: {
    enabled: false,
  },
});
