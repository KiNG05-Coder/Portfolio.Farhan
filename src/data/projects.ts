/* ============================================================
   PROJECTS
   Portfolio project cards. Keep descriptions factual.
   `image` is a path under /assets/... — if the file is missing,
   a labelled placeholder is shown automatically.
   ============================================================ */

import type { Status } from './status';

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: Status;
  statusLabel?: string; // optional override text
  achievements: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  href?: string; // internal link to a dedicated page, if one exists
  flagship?: boolean;
  subProjects?: { name: string; note: string }[];
};

export const projects: Project[] = [
  {
    slug: 'argus-6',
    name: 'ARGUS-6',
    tagline: 'Flagship autonomous robotics project',
    description:
      'A six-legged robot designed to assist in human rescue and environmental conservation. ARGUS-6 splits high-level autonomy and perception from real-time motion control, and is being built and tested capability by capability.',
    status: 'in-development',
    statusLabel: 'In development — evolving project',
    achievements: [],
    technologies: [
      'Raspberry Pi 4',
      'Arduino Mega',
      'ROS 2',
      'Python',
      'C++',
      'YOLO (planned)',
    ],
    image: '/assets/argus-6/argus-6-card.jpg',
    imageAlt:
      'Placeholder for a photo of the ARGUS-6 six-legged robot — replace with your own image.',
    href: '/argus-6',
    flagship: true,
  },
  {
    slug: 'ecoguard',
    name: 'EcoGuard',
    tagline: 'Environmental robotics project',
    description:
      'A completed environmental robotics project: two autonomous platforms working toward one mission — Riverix cleans and monitors polluted waterways, and Sky-Cleanse monitors and purifies air while supporting precision crop fertilization. EcoGuard has been awarded Gold Medals.',
    status: 'tested',
    statusLabel: 'Completed',
    achievements: ['Innovation World Cup 2026 — Gold Medal', 'I3C 2026 — Gold Medal'],
    technologies: [
      'ESP32',
      'GPS + IMU navigation',
      'ESP-NOW telemetry',
      '3D printing',
      'C++',
      'Web dashboard',
    ],
    image: '/assets/ecoguard/ecoguard-card.jpg',
    imageAlt:
      'Placeholder for a photo of the EcoGuard project — replace with your own image.',
    href: '/ecoguard',
    subProjects: [
      {
        name: 'Riverix',
        note: 'Semi-autonomous water surface robot.',
      },
      {
        name: 'Sky-Cleanse',
        note: 'Semi-automated environmental drone.',
      },
    ],
  },
];

export const flagshipProject = projects.find((p) => p.flagship)!;
