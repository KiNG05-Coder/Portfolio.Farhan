/* ============================================================
   ARGUS-6 TESTING & DEVELOPMENT PROGRESSION
   Update `status` as each stage advances.
   Do not record test results that have not actually happened.
   ============================================================ */

import type { Status } from './status';

export type TestStage = {
  name: string;
  status: Status;
  note: string;
};

export const testStages: TestStage[] = [
  {
    name: 'Communication',
    status: 'working',
    note: 'Serial link between the Raspberry Pi and the Arduino Mega.',
  },
  {
    name: 'Low-level control',
    status: 'working',
    note: 'Servo control and real-time loop on the Mega.',
  },
  {
    name: 'Inverse kinematics',
    status: 'working',
    note: 'Per-leg 3-DOF IK solver.',
  },
  {
    name: 'Gait',
    status: 'working',
    note: 'Gait generation for standing, walking and turning.',
  },
  {
    name: 'Manual motion',
    status: 'working',
    note: 'Commanded movement of the robot and the arm.',
  },
  {
    name: 'Sensors',
    status: 'in-development',
    note: 'Bringing sensor data into the high-level system.',
  },
  {
    name: 'AI',
    status: 'planned',
    note: 'Lightweight YOLO perception on the Pi.',
  },
  {
    name: 'Navigation',
    status: 'planned',
    note: 'Localization, waypoint navigation and obstacle-aware movement.',
  },
  {
    name: 'Autonomy',
    status: 'planned',
    note: 'Full mission execution without an operator in the loop.',
  },
  {
    name: 'Field testing',
    status: 'planned',
    note: 'Testing the complete system in a realistic environment.',
  },
];

/* ----------------------------------------------------------
   Slots for evidence Farhan can add later.
   Replace `asset` paths or embed URLs; empty slots render
   as labelled placeholders.
   ---------------------------------------------------------- */
export type EvidenceSlot = {
  title: string;
  kind: 'video' | 'photo' | 'log' | 'benchmark';
  note: string;
};

export const evidenceSlots: EvidenceSlot[] = [
  {
    title: 'Locomotion test video',
    kind: 'video',
    note: 'Add a clip of ARGUS-6 walking and turning.',
  },
  {
    title: 'Arm & gripper test video',
    kind: 'video',
    note: 'Add a clip of a pick-and-place / trash collection attempt.',
  },
  {
    title: 'YOLO benchmark on the actual Pi',
    kind: 'benchmark',
    note: 'Add measured inference numbers once benchmarked on the Raspberry Pi 4.',
  },
  {
    title: 'Bench / build photos',
    kind: 'photo',
    note: 'Add photos of wiring, assembly and the test setup.',
  },
  {
    title: 'Run logs',
    kind: 'log',
    note: 'Add representative logs from a test session.',
  },
];
