/* ============================================================
   ARGUS-6 COMMERCIALIZATION & MARKET POTENTIAL
   Potential applications and a realistic path from prototype to
   an affordable field robot — not claims of existing customers,
   confirmed demand, revenue, or commercial availability.
   ============================================================ */

export type TargetMarket = {
  name: string;
  points: string[];
};

export const targetMarkets: TargetMarket[] = [
  {
    name: 'Search & Rescue',
    points: [
      'Wilderness reconnaissance',
      'Human detection',
      'Difficult-terrain support',
    ],
  },
  {
    name: 'National Parks & Forestry',
    points: [
      'Trail monitoring',
      'Environmental observation',
      'Litter detection',
    ],
  },
  {
    name: 'Research & Education',
    points: [
      'Field research',
      'Environmental sampling',
      'Robotics research',
    ],
  },
  {
    name: 'Industrial Inspection',
    points: [
      'Remote inspection',
      'Difficult-area reconnaissance',
      'Environmental monitoring',
    ],
  },
];

export type ValueProp = {
  title: string;
  description: string;
};

export const valueProps: ValueProp[] = [
  {
    title: 'Affordable',
    description:
      'Designed around readily available components and a target production cost of ৳60,000.',
  },
  {
    title: 'Versatile',
    description:
      'One platform can support search, monitoring, research and litter-collection tasks.',
  },
  {
    title: 'Modular',
    description:
      'Sensors, cameras, software and the robotic arm can be adapted to different missions.',
  },
  {
    title: 'Terrain-capable',
    description:
      'Six-legged locomotion is designed for uneven outdoor environments where conventional wheeled platforms may struggle.',
  },
];

export type PathwayStage = {
  label: string;
  note: string;
};

export const commercializationPathway: PathwayStage[] = [
  { label: 'Prototype', note: 'Current ARGUS-6 proof of concept.' },
  { label: 'Field Testing', note: 'Test mobility, perception and reliability in representative environments.' },
  { label: 'Optimization', note: 'Improve durability, power efficiency, manufacturability and software.' },
  { label: 'Production', note: 'Manufacture the platform around the target cost structure.' },
  { label: 'Deployment', note: 'Adapt the platform to real-world operational requirements.' },
];
