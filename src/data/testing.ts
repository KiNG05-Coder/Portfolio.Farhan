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
    note: 'Serial link between the Raspberry Pi and the ESP8266.',
  },
  {
    name: 'Low-level control',
    status: 'working',
    note: 'Servo control and real-time loop on the ESP8266.',
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
    note: 'YOLO26n perception on the Pi.',
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

/* Photo/video evidence slots live in `media.ts` and render in the
   page's dedicated Evidence section. Non-visual evidence (benchmark
   numbers, run logs) has no recorded data yet and is intentionally
   not listed here until it exists. */
