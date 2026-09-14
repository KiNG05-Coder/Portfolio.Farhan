/* ============================================================
   ARGUS-6 ENGINEERING DECISIONS
   Presented as engineering reasoning, not marketing.
   ============================================================ */

export type Decision = {
  question: string;
  answer: string;
};

export const decisions: Decision[] = [
  {
    question: 'Why a Raspberry Pi + ESP8266, and why isn’t the Pi built yet?',
    answer:
      'High-level computation and AI are designed to belong on the Pi, while timing-sensitive motion belongs on the ESP8266. That split keeps real-time control predictable and lets the Linux side focus purely on perception and decisions. The ESP8266 side was built first because a robot has to reliably move before it is worth making autonomous — the Pi stack is the planned next phase, not a missing afterthought.',
  },
  {
    question: 'Why ROS 2?',
    answer:
      'For modular robotics software: navigation, communication and integration between components without building all of that plumbing from scratch. This is planned for the Raspberry Pi side and is not implemented yet.',
  },
  {
    question: 'Why a custom serial bridge?',
    answer:
      'The ESP8266 is not a micro-ROS target, so communication between the Pi and the ESP8266 uses a custom serial protocol instead. The link and its basic command set already work today for manual control; it is expected to grow as autonomy features are added.',
  },
  {
    question: 'Why keep locomotion on the ESP8266?',
    answer:
      'Real-time gait, inverse kinematics and servo timing should not depend on general-purpose Linux scheduling. Running them on the ESP8266 keeps motion steady even when the Pi is busy.',
  },
  {
    question: 'Why lightweight AI (YOLO26n)?',
    answer:
      'The Raspberry Pi 4 has limited CPU resources and no GPU, so perception has to be designed around realistic inference performance rather than assuming an accelerator is available. YOLO26n — the smallest variant of the YOLO26 family — was chosen for its small compute and memory footprint. It has not been trained or benchmarked on the robot yet.',
  },
  {
    question: 'Why only MANUAL and AUTONOMOUS modes, not a hybrid “assist” mode?',
    answer:
      'Control authority has to belong to exactly one source at a time — a human operator or the Pi’s mission logic — never both at once. A blended mode would make it ambiguous who is actually in command if the two disagreed, which is a safety problem, not just a design preference. MANUAL and AUTONOMOUS are planned as the only two runtime modes of the finished system.',
  },
  {
    question: 'Why a centralized configuration system?',
    answer:
      'Servo limits, leg geometry, gait parameters, arm poses, camera settings, detection thresholds, navigation parameters, safety timeouts and similar values are all things that get tuned during development. Keeping them in one place, instead of scattered through the codebase, is planned so that tuning the robot doesn’t mean hunting through source files for magic numbers. This is part of the planned Pi-side software, not implemented yet.',
  },
];
