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
    question: 'Why a Raspberry Pi + Arduino?',
    answer:
      'High-level computation and AI belong on the Pi, while timing-sensitive motion belongs on the Mega. Splitting the two keeps real-time control predictable and lets the Linux side focus on perception and decisions.',
  },
  {
    question: 'Why ROS 2?',
    answer:
      'For modular robotics software: navigation, communication and integration between components without building all of that plumbing from scratch.',
  },
  {
    question: 'Why a custom serial bridge?',
    answer:
      'The Arduino Mega is not a micro-ROS target, so communication between the Pi and the Mega uses a custom serial protocol instead.',
  },
  {
    question: 'Why keep locomotion on the Mega?',
    answer:
      'Real-time gait, inverse kinematics and servo timing should not depend on general-purpose Linux scheduling. Running them on the Mega keeps motion steady even when the Pi is busy.',
  },
  {
    question: 'Why lightweight AI?',
    answer:
      'The Raspberry Pi 4 has limited CPU resources, so perception has to be designed around realistic inference performance rather than assuming a GPU or an accelerator is available.',
  },
];
