/* ============================================================
   ARGUS-6 CONCEPTS & THEORY
   The engineering, physics and computer-science ideas behind the
   robot, organized by category. Each item explains what the
   concept is, why it matters to ARGUS-6, and how ARGUS-6 applies
   it — being explicit about what is implemented today versus
   planned for the Raspberry Pi autonomy stack.
   Keep claims proportional to `prototype.ts` — do not describe a
   planned concept's application as if it already runs on the robot.
   ============================================================ */

export type TheoryItem = {
  term: string;
  /** What the concept is, in plain language. */
  what: string;
  /** Why it matters for a robot like ARGUS-6. */
  why: string;
  /** How ARGUS-6 specifically applies it — implemented or planned. */
  how: string;
  /** Optional short equation/relationship, only where it genuinely helps. */
  equation?: string;
};

export type TheoryCategory = {
  id: string;
  name: string;
  blurb: string;
  items: TheoryItem[];
};

export const theoryCategories: TheoryCategory[] = [
  {
    id: 'robotics',
    name: 'Robotics',
    blurb: 'How a six-legged body turns joint angles into walking.',
    items: [
      {
        term: 'Inverse Kinematics',
        what: 'Given a target position for the end of a limb (the foot), work backward to find the joint angles that place it there.',
        why: "A gait generator thinks in terms of “put this foot here,” not “set these three motors to these angles.” IK is the translation layer between the two.",
        how: 'Each ARGUS-6 leg has three joints. The IK solver converts a target foot position (x, y, z) into three joint angles, one per joint, running on the ESP8266 firmware today.',
        equation: 'For a 3-DOF leg: θ = acos((a² + b² − L²) / (2ab)) — the law of cosines, where a and b are the leg’s link lengths and L is the distance to the target point.',
      },
      {
        term: 'Forward Kinematics',
        what: 'The reverse of inverse kinematics: given known joint angles, compute where the foot ends up.',
        why: 'It is how you check an IK solution and reason about a leg’s reachable workspace before relying on it.',
        how: "ARGUS-6's leg geometry (link lengths, joint limits) was worked out using forward kinematics, which is what the IK solver's law-of-cosines approach depends on being correct.",
      },
      {
        term: 'Degrees of Freedom',
        what: 'The number of independent ways a mechanism can move — each motor-controlled joint typically adds one.',
        why: 'A leg needs enough DOF to place its foot anywhere useful in 3D space; too few and it can’t reach, more adds cost and complexity for little benefit.',
        how: 'Each ARGUS-6 leg has exactly 3 DOF (hip yaw, hip pitch, knee pitch), for 18 DOF across six legs — enough to walk, turn and adjust stance without a 4th joint per leg.',
      },
      {
        term: 'Coordinate Frames',
        what: 'A reference system — an origin plus axes — that positions are measured against. A robot typically has several, nested inside each other.',
        why: '“Move the foot to (10, 0, −5)” is meaningless without saying relative to what. Mixing up frames is a classic source of robotics bugs.',
        how: "ARGUS-6 works in a body frame (centered on the chassis) and a per-leg frame (centered on that leg's hip); a target foot position is expressed in the leg frame before IK runs. A world frame is planned once GPS/IMU localization is added.",
      },
      {
        term: 'Gait Generation',
        what: 'The algorithm that decides, over time, which legs lift, where they move to, and when they touch back down.',
        why: "Six legs moving independently isn't walking — they have to be coordinated so the robot stays supported and actually moves in the intended direction.",
        how: "ARGUS-6's gait generator runs on the ESP8266 and sequences all six legs into standing, walking and turning patterns, with variable step size and speed rather than one fixed gait.",
      },
      {
        term: 'Tripod Gait',
        what: 'A hexapod walking pattern where legs alternate between two groups of three (e.g. front-left/mid-right/back-left and the other three), each group forming a tripod that stays grounded while the other moves.',
        why: 'Three ground contacts are the minimum needed for static stability — the robot is never at risk of tipping between steps.',
        how: "ARGUS-6's gait alternates its six legs between two tripod groups to produce continuous, stable walking.",
      },
      {
        term: 'Stability',
        what: "Whether the robot's weight stays supported by its legs on the ground rather than tipping over.",
        why: 'A fast or badly timed gait can walk a legged robot right off balance if stability is never checked.',
        how: "ARGUS-6 relies on the tripod gait's geometry — keeping the body's weight over the triangle formed by whichever three feet are currently grounded at each phase of the step.",
      },
      {
        term: 'Servo Control',
        what: 'Commanding a servo motor to hold a specific angle, typically via a pulse-width-modulated (PWM) signal.',
        why: 'Every joint angle the IK solver computes has to actually reach the physical joint — this is the last, timing-critical step before anything moves.',
        how: "The ESP8266 firmware drives all eighteen of ARGUS-6's servos with PWM signals. Precise, jitter-free timing here is exactly why this runs on a microcontroller rather than Linux.",
      },
    ],
  },
  {
    id: 'mechanics',
    name: 'Mechanics & Physics',
    blurb: 'The forces a legged robot has to move against and push with.',
    items: [
      {
        term: 'Torque',
        what: 'A rotational force — how hard something twists around a pivot, not just how hard it pushes.',
        why: 'Lifting a leg or an arm against gravity requires enough torque at the joint, especially at full extension where the lever arm is longest.',
        how: "ARGUS-6's servos have to supply enough torque to lift a leg's own weight plus a share of the chassis, and, at the arm, to hold an object at reach without stalling.",
        equation: 'τ = F × r — torque equals force times the length of the lever arm it acts through.',
      },
      {
        term: 'Mechanical Advantage',
        what: "How a linkage's geometry trades force for distance — a shorter lever arm needs less force for the same torque, at the cost of range of motion.",
        why: "Leg and arm link lengths aren't arbitrary — they set how much torque a given servo effectively delivers at the foot or gripper.",
        how: "ARGUS-6's leg and arm segment lengths are chosen so the available servo torque is enough to move through the working range without stalling.",
      },
      {
        term: 'Center of Mass',
        what: "The single point where an object's weight can be treated as acting.",
        why: 'Where the robot’s weight is concentrated determines how easily it tips, and where ground support needs to be underneath it.',
        how: "ARGUS-6's tripod gait works by keeping the chassis's center of mass over the triangle formed by whichever three legs are currently grounded.",
      },
      {
        term: 'Friction',
        what: 'The resistive force between two surfaces in contact — what actually lets a foot push against the ground instead of sliding.',
        why: 'Without enough friction, a leg can slip mid-step instead of propelling the robot, especially on smooth or loose terrain.',
        how: "ARGUS-6's gait timing assumes reasonable traction on typical indoor/test terrain. This is a known limit: the robot does not claim all-terrain grip.",
      },
      {
        term: 'Force and Motion',
        what: "Newton's basic relationship — a net force on an object changes its motion, and the ground pushes back on the robot exactly as hard as the robot pushes on it.",
        why: "Walking is the robot pushing against the ground and using that reaction force to move; terrain that can't push back consistently (soft mud, loose gravel) breaks that assumption.",
        how: "ARGUS-6's gait and stability design assume a reasonably firm, flat-ish surface, consistent with what has actually been tested.",
        equation: 'F = ma — net force equals mass times acceleration.',
      },
    ],
  },
  {
    id: 'vision-ai',
    name: 'Computer Vision & AI',
    blurb: "The planned perception system's building blocks — not yet deployed on the robot.",
    items: [
      {
        term: 'Object Detection',
        what: 'Given an image, find where objects are (a bounding box) and what they are (a class label), each with a confidence score.',
        why: "ARGUS-6's planned autonomy needs to know both “is there something here” and “what is it” before deciding to approach, avoid, or alert.",
        how: 'Planned: a camera frame is passed to the detector, which returns boxes, labels and confidence scores for anything it recognizes — people, trash, cans and other configurable classes.',
      },
      {
        term: 'YOLO',
        what: 'A family of single-stage object detectors that predict all bounding boxes and classes in one pass over the image, rather than proposing regions first and classifying them separately.',
        why: 'Single-stage detection is fast enough to run close to real time, which matters for a robot reacting to what it sees.',
        how: "Planned as the basis of ARGUS-6's perception system.",
      },
      {
        term: 'YOLO26n',
        what: 'The specific model ARGUS-6’s perception is planned around — the smallest (“nano”) variant of the YOLO26 model family.',
        why: 'Edge devices like a Raspberry Pi have no GPU. A nano-sized model deliberately trades some accuracy for a much smaller compute and memory footprint, which is what makes CPU-only inference realistic.',
        how: 'Planned for deployment on the Raspberry Pi 4. Not yet trained or benchmarked on the physical robot — no accuracy or frame-rate numbers are published because none have been measured.',
      },
      {
        term: 'Object Tracking',
        what: 'Associating detections of the same object across consecutive frames, so the system knows “that’s the same can as last frame,” not a series of unrelated detections.',
        why: "Without tracking, a robot re-decides what to do every single frame and can't tell if it's making progress toward an object.",
        how: "Planned as part of the perception pipeline, feeding a Target Manager that keeps track of the object ARGUS-6 is currently approaching.",
      },
      {
        term: 'Target Selection',
        what: 'When multiple objects are detected at once, the logic that picks which one to act on first.',
        why: 'A robot with several detected waste items in view needs a rule — nearest, highest-confidence, closest to path — rather than freezing or switching between them.',
        how: "Planned as part of the Target Manager in ARGUS-6's mission logic. The exact selection rule is a design decision, not yet implemented.",
      },
      {
        term: 'Target Lock',
        what: 'Once a target is selected, committing to it rather than re-evaluating and switching every frame.',
        why: 'Constantly re-selecting between similar-confidence detections can make a robot oscillate between two objects and never approach either.',
        how: "Planned: the Target Manager is intended to hold a lock on the current target through the approach, releasing it only once the pickup attempt finishes or clearly fails.",
      },
      {
        term: 'Human Detection / Incident Listener',
        what: 'Treating a “person” detection differently from any other object class — as an event that needs an operator’s attention, not a candidate for pickup.',
        why: 'A human in the frame is a safety-relevant event; it should interrupt the operator’s attention rather than blend into the mission log.',
        how: 'Planned: when YOLO26n detects a person, an Incident Listener raises a persistent dashboard alert (“PERSON DETECTED”) that stays visible until the operator dismisses it.',
      },
    ],
  },
  {
    id: 'autonomy',
    name: 'Autonomous Robotics',
    blurb: 'How a robot figures out where it is and where to go — the planned Pi-side stack.',
    items: [
      {
        term: 'Localization',
        what: "Estimating the robot's own position, and usually orientation, in its environment.",
        why: 'Autonomous navigation is meaningless without an answer to “where am I right now.”',
        how: "Planned: ARGUS-6's localization is intended to combine GPS and IMU data. Not yet implemented.",
      },
      {
        term: 'GPS',
        what: 'Global Positioning System — satellite-based absolute position, typically accurate to a few meters outdoors.',
        why: 'It gives a rough “where am I on the map” without needing local infrastructure.',
        how: "Planned for outdoor waypoint navigation. GPS alone isn't precise enough for close-range tasks like lining up on a specific piece of trash, which is why it's paired with other sensing.",
      },
      {
        term: 'IMU',
        what: 'An Inertial Measurement Unit — typically an accelerometer and gyroscope, sometimes a compass — that measures acceleration and rotation to estimate orientation and short-term motion.',
        why: "It fills the gaps between GPS updates and reports which way the robot is actually facing or tilting, which GPS alone can't do.",
        how: "Planned as part of ARGUS-6's localization stack alongside GPS.",
      },
      {
        term: 'Sensor Fusion',
        what: "Combining readings from multiple, individually imperfect sensors into one estimate that's more reliable than any single sensor alone.",
        why: 'GPS drifts slowly and updates infrequently; an IMU updates fast but drifts over time. Used together, each covers the other’s weakness.',
        how: "Planned: ARGUS-6's localization is intended to fuse GPS and IMU data rather than relying on either alone.",
      },
      {
        term: 'Autonomous Navigation',
        what: 'The full loop of perceiving the environment, knowing where you are, deciding where to go, and commanding movement to get there.',
        why: 'This is the core capability that turns a remote-controlled robot into a self-directed one.',
        how: 'Planned pipeline: perception (camera + YOLO26n) → localization (GPS + IMU) → planning (Navigation / Mission Manager) → control (commands sent to the ESP8266). Not yet implemented end-to-end.',
      },
      {
        term: 'Mission State Machines',
        what: 'Structuring a multi-step behavior (like waste collection) as a fixed set of named states — e.g. SEARCHING, APPROACHING, GRASPING, RETURNING — with explicit transitions between them, instead of one large nested conditional.',
        why: 'A state machine makes behavior predictable and debuggable: at any moment you can ask “what state is it in” and know exactly what should happen next. A tangle of if/else branches makes that much harder to reason about safely.',
        how: "Planned as the implementation pattern for ARGUS-6's Mission Manager, covering the autonomous waste-collection pipeline.",
      },
      {
        term: 'Target Approach and Alignment',
        what: 'The steps between “I’ve detected an object” and “I’m correctly positioned to act on it” — closing the distance, then centering and orienting relative to the target.',
        why: "Detecting an object doesn't mean it's within reach or lined up correctly; a pickup attempt from a bad angle or distance is far more likely to fail.",
        how: 'Planned: after target lock, ARGUS-6 is intended to approach and then align — centering the target relative to the gripper — before attempting a grasp, rather than grasping blind on first detection.',
      },
    ],
  },
  {
    id: 'control',
    name: 'Control Systems',
    blurb: 'How authority over the robot’s motion is kept safe and unambiguous.',
    items: [
      {
        term: 'Closed-Loop Control',
        what: "Control that continuously checks the system's actual state and corrects based on the difference from the desired state, instead of open-loop control that just issues commands and hopes.",
        why: "Open-loop execution can't recover from surprises — a missed grasp, a drifted position; closed-loop control checks and adjusts.",
        how: "Present today in a small way — the manipulation pipeline's verify step checks whether an object was actually grasped rather than assuming success. Full closed-loop autonomy (continuously checking position and detections) is planned as the Pi-side system is built.",
      },
      {
        term: 'Control Authority',
        what: 'Being explicit about which part of the system is allowed to command the robot’s motion at any given moment.',
        why: 'If a human operator and an autonomous planner could both issue movement commands at once, their instructions could conflict. Authority has to belong to exactly one source at a time.',
        how: 'ARGUS-6 is designed around two runtime modes — MANUAL (a human operator commands the robot directly) and AUTONOMOUS (the Raspberry Pi’s perception, navigation and mission logic command it) — with authority belonging to one mode at a time, never blended.',
      },
      {
        term: 'Safety / Failsafes',
        what: 'Mechanisms that make a system fail toward a safe state rather than an unpredictable one — communication timeouts, emergency stops, rejecting invalid commands, safe startup behavior.',
        why: 'A legged robot that keeps executing its last command after losing its command link, or starts up in an unknown pose, is a hazard.',
        how: 'Implemented today at the low level: the ESP8266 halts the robot safely if it stops receiving valid commands, and rejects malformed messages rather than acting on them. Mission-wide e-stop and Pi-tied safe startup are planned as that side of the system is built.',
      },
    ],
  },
  {
    id: 'software',
    name: 'Software Architecture',
    blurb: 'How the current firmware and the planned Pi stack are organized and talk to each other.',
    items: [
      {
        term: 'Raspberry Pi + Microcontroller Architecture',
        what: 'Splitting a robot’s software between a general-purpose computer (flexible, powerful, no hard real-time guarantees) and a microcontroller (limited compute, but precise, predictable timing).',
        why: 'Perception and planning need flexibility and processing power; motion control needs to never be late. One chip rarely does both well.',
        how: "ARGUS-6's ESP8266 already owns real-time motion — IK, gait, servo timing — today. The Raspberry Pi is designed to own perception, navigation and mission logic, talking to the ESP8266 over serial. The Pi side is planned, not yet implemented.",
      },
      {
        term: 'ROS 2',
        what: 'A robotics middleware framework built around independent programs (“nodes”) that communicate over well-defined channels: topics (continuous streams), services (request/response) and actions (long-running goals).',
        why: 'It lets complex robot software be built as separate, independently testable pieces — perception, navigation, mission logic — instead of one monolithic program, with a lot of standard robotics plumbing provided for free.',
        how: "Planned as the organizing framework for ARGUS-6's Raspberry Pi software. Not yet implemented.",
      },
      {
        term: 'Serial Communication',
        what: 'Sending data one bit at a time over a simple point-to-point link — in ARGUS-6’s case, between the Raspberry Pi and the ESP8266.',
        why: 'It is a simple, reliable way for two very different processors — a Linux computer and a microcontroller — to exchange commands and status without a shared network stack.',
        how: "A custom serial protocol already carries movement and arm commands plus status between the Pi and ESP8266 today, on the parts of the system that exist, and is expected to grow as navigation and mission features are added.",
      },
      {
        term: 'API Architecture',
        what: 'A defined set of requests a piece of software will accept and respond to — here, how a dashboard would talk to the backend controlling the robot.',
        why: 'Separating what the dashboard can ask for from how the robot actually does it lets the two be built and changed independently.',
        how: 'Planned: a dashboard → backend → robot request path is part of the intended architecture. No dashboard integration exists yet.',
      },
      {
        term: 'WebSockets',
        what: 'A persistent, two-way connection between a browser and a server, unlike the request-then-response pattern of ordinary HTTP.',
        why: 'Live telemetry, detections and status updates need to reach a dashboard continuously, without the browser repeatedly re-asking for the latest state.',
        how: 'Planned for streaming live data to the future web dashboard. Not yet implemented.',
      },
      {
        term: 'SQLite / Event Logging',
        what: 'Recording what happened — missions, detections, telemetry, warnings — into a lightweight embedded database rather than only ever showing it live and then losing it.',
        why: 'A logged record is what lets a mission be reviewed afterward, a failure be debugged, or a claim about the robot’s behavior be checked against evidence.',
        how: 'Planned as part of the Pi-side mission system. The mission-record structure (ID, timestamps, events, detections, and so on) is already designed; no logging is implemented yet.',
      },
    ],
  },
  {
    id: 'environmental',
    name: 'Environmental Robotics',
    blurb: 'Why ARGUS-6’s headline autonomous behavior is built the way it is.',
    items: [
      {
        term: 'Autonomous Waste Collection',
        what: 'The full intended pipeline for picking up an item without an operator driving each step: detect → select → approach → align → stop → pick up → return arm to default → navigate to bin → align → deposit → return arm to default → resume.',
        why: 'This is ARGUS-6’s headline autonomous behavior, and the clearest example of why the other concepts on this page — target selection and lock, alignment, state machines, closed-loop verification — all matter together, not in isolation.',
        how: 'Planned end-to-end. The manipulation half (target → approach → position → grasp → verify → transport → release) is implemented and working under direct operation today; the autonomous trigger for it — perception picking the target, navigation doing the approach — is not yet built.',
      },
      {
        term: 'Human Safety',
        what: 'Treating a detected person as a safety event to flag to a human operator, never as just another object the robot might approach or collect.',
        why: 'Confusing “target to interact with” and “person to be careful around” in the same detection pipeline would be a real safety failure, not just a bug.',
        how: 'Planned: human detections route to the Incident Listener and raise an operator alert, entirely separate from the waste-target selection logic.',
      },
      {
        term: 'Edge AI',
        what: 'Running AI inference locally on the device itself — the Raspberry Pi — rather than sending data to a remote server or cloud for processing.',
        why: "A field robot can't depend on reliable internet, and round-tripping camera frames to the cloud adds latency a robot reacting to its surroundings can't afford.",
        how: "Planned: YOLO26n is intended to run on-device on the Raspberry Pi 4's CPU — exactly why a lightweight, nano-sized model and an efficient inference build are the right choice here, rather than a larger cloud-hosted model.",
      },
    ],
  },
];
