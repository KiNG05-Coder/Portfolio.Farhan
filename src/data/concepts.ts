/* ============================================================
   ARGUS-6 CONCEPTS & RESOURCES
   Plain-language explainers for the techniques and tools used
   on the project. Kept separate from `capabilities.ts` (what the
   robot can do) and `decisions.ts` (why it was built this way) —
   this file is the glossary: what these terms actually mean.
   ============================================================ */

export type Concept = {
  term: string;
  tag: 'Concept' | 'Tool / resource';
  summary: string;
  detail: string;
  /** Where it's used on ARGUS-6, kept short. */
  reference: string;
};

export const concepts: Concept[] = [
  {
    term: 'Inverse kinematics',
    tag: 'Concept',
    summary:
      'Converts a desired foot position in space into the joint angles needed to place it there.',
    detail:
      'Each leg has three degrees of freedom, so the solver works backward from "where the foot should be" to "what angle each of the three joints must hold." This is what lets the gait generator think in terms of foot positions instead of raw joint angles.',
    reference: 'Geometric (analytical) IK for a 3-DOF serial leg chain.',
  },
  {
    term: 'Gait generation',
    tag: 'Concept',
    summary:
      "Coordinates all six legs into a walking, standing or turning pattern.",
    detail:
      'A gait generator decides which legs are on the ground and which are mid-step at any moment, and sequences that over time so the robot stays balanced while it moves. ARGUS-6 supports standing, walking and turning, with variable step size and speed rather than one fixed gait.',
    reference: 'Hexapod tripod-style gait coordination.',
  },
  {
    term: 'Servo / PWM control',
    tag: 'Concept',
    summary:
      "Drives each of ARGUS-6's eighteen servos to the joint angle the IK and gait stages command.",
    detail:
      "Servos are positioned using pulse-width modulation (PWM) — the width of an electrical pulse tells the servo what angle to hold. This is the last step in the locomotion pipeline, turning computed angles into physical motion.",
    reference: 'Standard hobby-servo PWM signalling.',
  },
  {
    term: 'Custom serial protocol',
    tag: 'Concept',
    summary:
      "A lightweight message format that lets the Raspberry Pi and the ESP8266 talk to each other.",
    detail:
      "Because the ESP8266 isn't a micro-ROS target, ARGUS-6 uses a small, purpose-built serial protocol instead of extending ROS 2 onto the microcontroller. It is designed to be simple to parse on a microcontroller, validated on receipt, and fail-safe if the link drops.",
    reference: 'Purpose-built framed serial protocol (not a standard library).',
  },
  {
    term: 'Watchdog & safe-stop',
    tag: 'Concept',
    summary:
      'Low-level safety behaviour that brings the robot to a controlled stop if something goes wrong.',
    detail:
      'A watchdog checks that the rest of the system is still responding. If valid commands stop arriving, the low-level controller halts the robot safely rather than continuing the last instruction indefinitely.',
    reference: 'Standard embedded-systems watchdog-timer pattern.',
  },
  {
    term: 'YOLO object detection',
    tag: 'Tool / resource',
    summary:
      'A real-time object-detection model planned for spotting people, trash and other configurable objects.',
    detail:
      "ARGUS-6's perception is planned around YOLOv8n, or another lightweight YOLO variant depending on benchmarking, chosen specifically because it can run without a GPU or accelerator.",
    reference: 'Ultralytics YOLOv8n.',
  },
  {
    term: 'NCNN',
    tag: 'Tool / resource',
    summary:
      'A CPU-optimized neural network inference framework, planned for running YOLO on the Raspberry Pi 4.',
    detail:
      'Since the Pi 4 has a CPU only — no GPU or ML accelerator — the intended deployment converts the YOLO model to run through NCNN with a reduced input resolution, to keep inference usable on CPU alone.',
    reference: "Tencent's NCNN inference library.",
  },
  {
    term: 'GPS + IMU localization',
    tag: 'Concept',
    summary:
      'Combines satellite positioning with an inertial measurement unit to estimate where the robot is.',
    detail:
      'GPS gives an approximate position; the IMU adds orientation and short-term motion data between GPS updates. Together they are enough for waypoint-scale navigation, though not for centimetre-level precision.',
    reference: 'GPS-aided inertial navigation, planned.',
  },
  {
    term: 'ROS 2',
    tag: 'Tool / resource',
    summary:
      'Robotics middleware that structures the high-level software into independent, communicating nodes.',
    detail:
      'ROS 2 runs on the Raspberry Pi and keeps perception, navigation and mission logic as separate modules with well-defined interfaces, instead of one monolithic program.',
    reference: 'Robot Operating System 2.',
  },
  {
    term: 'Two-processor split',
    tag: 'Tool / resource',
    summary:
      'The Raspberry Pi 4 + ESP8266 architecture at the core of ARGUS-6.',
    detail:
      'The Pi runs Linux and ROS 2 for decisions and perception; the ESP8266 runs the real-time firmware for gait, inverse kinematics and servo timing, so motion stays smooth regardless of what the Pi is doing.',
    reference: 'Raspberry Pi 4 (high-level) + ESP8266 (real-time).',
  },
];
