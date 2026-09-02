/* ============================================================
   ARGUS-6 CAPABILITIES
   Each card has a status. Update `status` and `statusLabel`
   as the robot develops. Where a status is genuinely ambiguous,
   use `statusLabel` to say so rather than overclaiming.
   ============================================================ */

import type { Status } from './status';

export type Capability = {
  name: string;
  status: Status;
  /** Optional free-text label shown instead of the default status word. */
  statusLabel?: string;
  summary: string;
  details: string[];
};

export const capabilities: Capability[] = [
  {
    name: 'Locomotion',
    status: 'working',
    summary:
      'Six-legged walking driven by inverse kinematics and a gait generator running on the real-time controller.',
    details: [
      'Three degrees of freedom per leg.',
      'Standing, walking and turning.',
      'Variable movement handled on the Arduino Mega so timing does not depend on Linux scheduling.',
    ],
  },
  {
    name: 'Robotic arm',
    status: 'working',
    summary:
      'An arm used to reach toward and interact with objects in the environment.',
    details: [
      'Coordinated with the gripper for pick-and-place style tasks.',
      'Used together with the trash bin for collection.',
    ],
  },
  {
    name: 'Gripper',
    status: 'working',
    summary: 'End effector on the arm for grasping and releasing objects.',
    details: [
      'Closes on a target object and holds it during transport.',
      'Pickup is not guaranteed on every attempt — a verify step is part of the pipeline.',
    ],
  },
  {
    name: 'Trash bin',
    status: 'working',
    summary: 'On-board container that collected items are placed into.',
    details: ['Holds objects picked up during an environmental cleanup task.'],
  },
  {
    name: 'Trash collection',
    status: 'working',
    summary:
      'The combined arm, gripper and bin workflow for picking up litter and depositing it on board.',
    details: [
      'Target → approach → position → grasp → verify → transport → release.',
      'Designed for cans and similar configurable environmental objects.',
    ],
  },
  {
    name: 'Human detection',
    status: 'planned',
    statusLabel: 'Planned AI capability — update when implemented',
    summary:
      'Detecting people in the camera feed to support search and rescue tasks.',
    details: [
      'Part of the planned YOLO-based perception system.',
      'Not yet implemented in the robot software.',
      'Perception is intended as a decision aid, not infallible truth.',
    ],
  },
  {
    name: 'Explore',
    status: 'planned',
    statusLabel: 'Planned — not field-proven',
    summary:
      'Moving through an unknown area to build understanding of it before acting.',
    details: [
      'High-level loop: explore → perceive → navigate → analyze → respond.',
      'Autonomous exploration has not been field-proven.',
    ],
  },
];
