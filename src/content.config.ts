import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================================
   ARGUS-6 DOCUMENTATION
   Add a new .md file in src/content/docs/ to add a page.
   Each file needs: title, order, summary.
   The URL slug is the filename (e.g. architecture.md -> /documentation/architecture).
   ============================================================ */

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
  }),
});

export const collections = { docs };
