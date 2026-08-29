/* ============================================================
   ACHIEVEMENTS
   ONLY confirmed achievements. Do not add rankings, scores,
   categories, judges or dates that have not been provided.
   Drop a certificate image at `image` to replace the placeholder.
   ============================================================ */

export type Achievement = {
  competition: string;
  award: string;
  year: string;
  project: string;
  /** Certificate / award image path under /assets/achievements/. */
  image: string;
  imageAlt: string;
};

export const achievements: Achievement[] = [
  {
    competition: 'Innovation World Cup',
    award: 'Gold Medal',
    year: '2026',
    project: 'EcoGuard',
    image: '/assets/achievements/innovation-world-cup.jpg',
    imageAlt:
      'Certificate image placeholder for the Innovation World Cup 2026 Gold Medal — replace with your original.',
  },
  {
    competition: 'I3C',
    award: 'Gold Medal',
    year: '2026',
    project: 'EcoGuard',
    image: '/assets/achievements/i3c.jpg',
    imageAlt:
      'Certificate image placeholder for the I3C 2026 Gold Medal — replace with your original.',
  },
];
