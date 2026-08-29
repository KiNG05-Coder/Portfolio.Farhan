/* ============================================================
   SKILLS
   Grouped by category. These describe tools and areas Farhan
   works with — they are NOT certifications or expertise ratings.
   Add or remove items freely.
   ============================================================ */

export type SkillGroup = {
  category: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    blurb: 'Languages used for robot software, tooling and the web.',
    items: ['Python', 'C++', 'HTML', 'CSS'],
  },
  {
    category: 'Robotics & Electronics',
    blurb: 'Building, wiring and programming physical systems.',
    items: [
      'Robot programming',
      'Raspberry Pi',
      'Arduino',
      'Circuit making',
      'Soldering',
    ],
  },
  {
    category: 'Development',
    blurb: 'Turning projects into things other people can see and use.',
    items: ['Website development'],
  },
];

/** Flat list for compact previews. */
export const allSkills: string[] = skillGroups.flatMap((g) => g.items);
