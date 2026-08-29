// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/* ------------------------------------------------------------------
   `site` is the public URL of the deployed site. It is only used for
   canonical URLs, Open Graph tags and the generated sitemap — the site
   still builds and works if it is slightly wrong, so you can set it
   after the first deploy.

   Set it to whichever applies:
   • Vercel / Netlify : "https://your-project.vercel.app"  (or .netlify.app)
   • GitHub user site : "https://YOUR-USERNAME.github.io"
   • GitHub project   : "https://YOUR-USERNAME.github.io"  + set `base` below
   • Custom domain    : "https://your-domain.com"

   `base` must ONLY be set for a GitHub *project* repo (served from a
   sub-path like /farhan-saif-portfolio). Leave it commented out for
   Vercel, Netlify, a GitHub user site, or a custom domain.
   ------------------------------------------------------------------ */
export default defineConfig({
  site: 'https://REPLACE-ME.example.com',
  // base: '/farhan-saif-portfolio',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
