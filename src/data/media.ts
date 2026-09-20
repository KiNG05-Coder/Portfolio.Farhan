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
    title: 'Full robot — chassis, arm & gripper',
    kind: 'photo',
    src: '/assets/argus-6/argus-6-hero.jpg',
    ratio: '4 / 5',
    hint: 'A top-down view of the complete assembled robot, with the arm and gripper attached.',
  },
  {
    title: 'Robotic arm demonstration',
    kind: 'video',
    src: '/assets/argus-6/arm-demo.mp4',
    ratio: '1080 / 1936',
    hint: 'The arm extending, rotating between positions and the gripper opening and closing.',
  },
  {
    title: 'Locomotion demonstration',
    kind: 'video',
    src: '/assets/argus-6/locomotion.mp4',
    ratio: '1080 / 1936',
    hint: 'ARGUS-6 walking on all six legs.',
  },
];
