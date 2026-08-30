// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/* ------------------------------------------------------------------
   Deployed on Vercel (auto-deploys from `main`):
     https://farhansaifportfolio.vercel.app

   Served from the domain root, so there is NO `base` path.
   `site` sets canonical URLs, Open Graph tags and the sitemap — update
   it here if a custom domain is added on Vercel later.
   ------------------------------------------------------------------ */
export default defineConfig({
  site: 'https://farhansaifportfolio.vercel.app',
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
