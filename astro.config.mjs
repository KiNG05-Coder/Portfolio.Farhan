// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/* ------------------------------------------------------------------
   Deployed to GitHub Pages (repo: KiNG05-Coder/Portfolio.Farhan) on the
   custom domain https://farhansaif.dev — see public/CNAME.

   Because the site is served from the domain root, there is NO `base`
   path. If you ever move OFF the custom domain back to the project URL
   (king05-coder.github.io/Portfolio.Farhan/), re-add:
       base: '/Portfolio.Farhan',
   `site` sets canonical URLs, Open Graph tags and the sitemap.
   ------------------------------------------------------------------ */
export default defineConfig({
  site: 'https://farhansaif.dev',
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
