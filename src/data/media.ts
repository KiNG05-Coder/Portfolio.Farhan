/* ============================================================
   ARGUS-6 EVIDENCE / MEDIA
   Designated slots for real photos and video of the physical
   prototype. `src` pointing at a file that exists in public/ will
   render the real asset (see Placeholder.astro); anything else
   renders a clean, clearly labelled placeholder. Do not point a
   slot at a file that doesn't show what the label claims.
   ============================================================ */

export type MediaSlot = {
  title: string;
  kind: 'photo' | 'video';
  src: string;
  ratio: string;
  hint: string;
};

export const mediaSlots: MediaSlot[] = [
  {
    title: 'Chassis & control electronics',
    kind: 'photo',
    src: '/assets/argus-6/argus-6-hero.jpg',
    ratio: '4 / 3',
    hint: 'The six-legged chassis with its ESP8266 control board and servo wiring.',
  },
  {
    title: 'Robotic arm demonstration',
    kind: 'video',
    src: '/assets/argus-6/evidence/arm-demo.mp4',
    ratio: '16 / 9',
    hint: 'public/assets/argus-6/evidence/arm-demo.mp4 — the arm reaching and positioning toward an object.',
  },
  {
    title: 'Locomotion demonstration',
    kind: 'video',
    src: '/assets/argus-6/evidence/locomotion.mp4',
    ratio: '16 / 9',
    hint: 'public/assets/argus-6/evidence/locomotion.mp4 — a clip of ARGUS-6 walking and turning.',
  },
];
