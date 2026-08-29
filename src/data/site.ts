/* ============================================================
   SITE-WIDE CONTENT
   Edit names, taglines, navigation and contact details here.
   ============================================================ */

export const site = {
  name: 'Farhan Saif',
  title: 'Robotics and AI Enthusiast',

  /** Used in <title> and metadata across the site. */
  metaTitle: 'Farhan Saif — Robotics and AI Enthusiast',
  metaDescription:
    'Farhan Saif is a Bangladeshi high school student building robotics that solves real-world problems, including the ARGUS-6 autonomous rescue and conservation robot.',

  /** Short personal introduction, shown on the home hero. */
  intro:
    'I’m a Bangladeshi high school student interested in robotics that solves real-world problems.',

  /* ----------------------------------------------------------
     CONTACT
     Replace the email below with the real address before launch.
     Do not add social accounts unless they are real.
     ---------------------------------------------------------- */
  email: 'REPLACE_WITH_YOUR_EMAIL@example.com',
  emailIsPlaceholder: true,

  /** Production URL — keep in sync with `site` + `base` in astro.config.mjs. */
  url: 'https://king05-coder.github.io/Portfolio.Farhan',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'ARGUS-6', href: '/argus-6' },
  { label: 'EcoGuard', href: '/ecoguard' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'Contact', href: '/contact' },
] as const;
