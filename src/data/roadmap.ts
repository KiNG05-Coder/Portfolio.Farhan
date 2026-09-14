/* ============================================================
   ARGUS-6 DEVELOPMENT ROADMAP
   How the project evolves from the current working prototype into
   the planned autonomous system. Phase 1 is done; Phases 2 and 3
   are ordered future work, not completed capabilities.
   ============================================================ */

export type RoadmapItem = {
  label: string;
  done: boolean;
};

export type RoadmapPhase = {
  phase: string;
  title: string;
  status: 'done' | 'planned';
  summary: string;
  items: RoadmapItem[];
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Working Robot',
    status: 'done',
    summary: 'The physical prototype — built, wired and operable today.',
    items: [
      { label: 'Hexapod platform', done: true },
      { label: 'Locomotion', done: true },
      { label: 'Inverse kinematics', done: true },
      { label: 'Gait generation', done: true },
      { label: '18-servo control', done: true },
      { label: 'Robotic arm', done: true },
      { label: 'Gripper', done: true },
      { label: 'Manual operation', done: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Robot Intelligence',
    status: 'planned',
    summary: 'Adding a Raspberry Pi and giving the robot senses.',
    items: [
      { label: 'Raspberry Pi', done: false },
      { label: 'ROS 2', done: false },
      { label: 'USB camera', done: false },
      { label: 'YOLO26n', done: false },
      { label: 'Object detection / tracking', done: false },
      { label: 'GPS', done: false },
      { label: 'IMU', done: false },
      { label: 'Lighting system', done: false },
      { label: 'Web dashboard', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Autonomous Missions',
    status: 'planned',
    summary: 'Putting intelligence and hardware together into full missions.',
    items: [
      { label: 'Target selection', done: false },
      { label: 'Target tracking / lock', done: false },
      { label: 'Autonomous navigation', done: false },
      { label: 'Human detection alerts', done: false },
      { label: 'Waste approach / alignment', done: false },
      { label: 'Robotic-arm pickup', done: false },
      { label: 'Bin navigation', done: false },
      { label: 'Waste deposit', done: false },
      { label: 'Mission resumption', done: false },
    ],
  },
];
