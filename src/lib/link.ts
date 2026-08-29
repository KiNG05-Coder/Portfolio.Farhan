/* ============================================================
   Base-path aware link/asset helper.

   When the site is served from a sub-path (GitHub project pages,
   e.g. /Portfolio.Farhan/), every root-absolute URL in the markup
   needs that prefix. Astro exposes it as import.meta.env.BASE_URL.

   Use `link('/argus-6')` for internal page links and
   `link('/assets/…')` for files in /public.

   If `base` in astro.config.mjs is '/' (custom domain, Vercel,
   user site) this is a no-op.
   ============================================================ */

const BASE = import.meta.env.BASE_URL || '/';

export function link(path: string): string {
  // Leave external URLs, mailto:, tel:, and pure #anchors untouched.
  if (!path.startsWith('/')) return path;

  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const joined = `${base}${path}`.replace(/\/{2,}/g, '/');
  return joined || '/';
}
