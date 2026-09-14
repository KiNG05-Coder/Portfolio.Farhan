/* ============================================================
   ARGUS-6 PROTOTYPE STATUS
   The honest, current split between what physically works on the
   robot today and what is designed/selected but not yet built.
   Keep this in sync with `capabilities.ts`, `theory.ts` and the
   documentation pages — do not add a capability here unless it is
   genuinely present on the physical prototype.
   ============================================================ */

export type StatusItem = {
  name: string;
  note: string;
};

export const implemented: StatusItem[] = [
  { name: 'Hexapod chassis', note: 'Six legs, three degrees of freedom each — eighteen servos total.' },
  { name: 'ESP8266 control system', note: 'Real-time firmware handling motion and low-level control.' },
  { name: 'Inverse kinematics', note: 'Per-leg solver converting foot positions to joint angles.' },
  { name: 'Gait generation', note: 'Standing, walking and turning, with variable step size and speed.' },
  { name: 'Servo control', note: 'PWM-driven positioning for all eighteen leg servos.' },
  { name: 'Robotic arm', note: 'Reaches toward and interacts with objects in the environment.' },
  { name: 'Gripper', note: 'End effector for grasping and releasing objects.' },
  { name: 'Manual operation', note: 'The complete physical robot can be driven and controlled directly today.' },
];

export const planned: StatusItem[] = [
  { name: 'Raspberry Pi software stack', note: 'High-level compute for perception, navigation and mission logic.' },
  { name: 'ROS 2 integration', note: 'Modular node-based structure for the Pi-side software.' },
  { name: 'Camera + YOLO26n perception', note: 'Lightweight object detection, chosen but not yet deployed.' },
  { name: 'Object detection / tracking', note: 'Bounding boxes, classes, confidence, and cross-frame tracking.' },
  { name: 'Human detection & incident alerts', note: 'A dashboard alert when a person is detected.' },
  { name: 'Autonomous navigation', note: 'Perception → localization → planning → control, end to end.' },
  { name: 'GPS / IMU integration', note: 'Outdoor position and orientation sensing.' },
  { name: 'Mission management', note: 'State-machine-driven autonomous mission execution.' },
  { name: 'Autonomous waste collection', note: 'The full detect-to-deposit pipeline running without an operator.' },
  { name: 'Web dashboard', note: 'Live telemetry, detections and robot control in a browser.' },
  { name: 'Raspberry Pi ↔ ESP8266 integration', note: 'Serial link carrying autonomy-driven commands, not just manual ones.' },
  { name: 'Lighting automation', note: 'Ambient light sensor driving an automatic flashlight.' },
];
