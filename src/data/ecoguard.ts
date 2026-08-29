/* ============================================================
   ECOGUARD
   Content for the dedicated EcoGuard project page.
   Two platforms — Riverix (water) and Sky-Cleanse (air) —
   built by Farhan Saif and Shreyan Chakraborty.
   Edit freely. Prose that isn't here lives in
   src/pages/ecoguard.astro.
   ============================================================ */

export const ecoguard = {
  /* ---------------- META ---------------- */
  metaTitle: 'EcoGuard — Environmental Robotics | Farhan Saif',
  metaDescription:
    'EcoGuard is a two-platform environmental robotics project by Farhan Saif and Shreyan Chakraborty — Riverix cleans and monitors polluted waterways, and Sky-Cleanse monitors and purifies air. Winner of Gold Medals at Innovation World Cup 2026 and I3C 2026.',

  /* ---------------- HERO ---------------- */
  hero: {
    title: 'EcoGuard',
    subtitle: 'Environmental Robotics — Air and Water',
    lede: 'Two autonomous systems. One mission. Purifying our waterways with Riverix and cleansing our atmosphere with Sky-Cleanse — because the planet cannot wait.',
    keyFeatures: [
      'Autonomous navigation',
      'Air purification',
      'Water quality monitoring',
      'Precision agriculture',
      'Real-time telemetry',
    ],
  },

  /* ---------------- THE PROBLEM ---------------- */
  problem: {
    heading: 'The problem we solve',
    subheading: 'Pollution moves faster than manual clean-up can',
    body: 'Water bodies worldwide accumulate pollution, debris and toxic runoff. Air in cities carries particulate matter, carbon monoxide and greenhouse gases. Manual intervention is slow, expensive and inconsistent. EcoGuard deploys an aquatic vessel and an aerial drone to address both kinds of pollution at once.',
    categories: [
      {
        name: 'Water pollution',
        text: 'Rivers, lakes and canals accumulate plastics, organic debris and chemical runoff rapidly.',
      },
      {
        name: 'Air quality',
        text: 'PM2.5, carbon monoxide and CO₂ cause lasting health damage in urban and agricultural areas.',
      },
      {
        name: 'Manual monitoring fails',
        text: 'Human-operated monitoring is infrequent, inconsistent and cannot cover large areas.',
      },
      {
        name: 'Agricultural waste',
        text: 'Excess fertiliser degrades soil and waterways; precision deployment is needed.',
      },
    ],
  },

  /* ---------------- HOW IT WORKS ---------------- */
  workflow: {
    intro:
      'An operational sequence runs aboard each platform, with both units working in parallel toward one mission.',
    riverix: [
      {
        label: 'Mission planning',
        note: 'GPS waypoints upload via a web-based ground control station. Operators define target zones, treatment coordinates and a return-home location.',
      },
      {
        label: 'Autonomous navigation',
        note: 'The ESP32 calculates heading error from GPS, an MPU6050 gyroscope and an HMC5883L compass. A PID controller corrects direction continuously. Ultrasonic sensors on three sides route around obstacles.',
      },
      {
        label: 'Environmental sensing',
        note: 'pH, TDS, turbidity and temperature sensors sample the water continuously. Readings are processed on board and packaged with GPS coordinates.',
      },
      {
        label: 'Treatment & live telemetry',
        note: 'At programmed waypoints the water-treatment pump activates autonomously. Sensor data, GPS position, obstacle distances and motor status stream live over ESP-NOW to the ground dashboard.',
      },
    ],
    skyCleanse: [
      {
        label: 'Aerial deployment',
        note: 'The drone takes off and follows a programmed flight path over target areas — agricultural fields, industrial zones or urban environments. Manual override via RC transmitter stays available.',
      },
      {
        label: 'Atmospheric monitoring',
        note: 'Five sensors run at once: PMS7003 for PM1.0 / PM2.5 / PM10; MQ-7 and MQ-135 for CO and harmful gases; DHT-22 for temperature and humidity; MH-Z19E for CO₂.',
      },
      {
        label: 'Active air purification',
        note: 'A fan inside a 3D-printed filter housing draws ambient air through a MOXI filter, capturing fine particulate matter. The housing is modular — the filter unscrews for field replacement in seconds.',
      },
      {
        label: 'Precision crop fertilisation',
        note: 'When activated manually, a 5V DC pump draws liquid fertiliser from an onboard container and delivers it through a nozzle directly over target crop rows, reducing chemical runoff.',
      },
    ],
  },

  /* ---------------- RIVERIX ---------------- */
  riverix: {
    subtitle: 'Semi-autonomous water surface robot',
    description:
      'Riverix is an autonomous surface vehicle built around an ESP32 microcontroller. It navigates polluted waterways — rivers, lakes, ponds and canals — collecting real-time environmental data and autonomously deploying water-treatment solutions. It runs in manual RC and autonomous GPS-waypoint modes, with live telemetry streamed to a web dashboard.',
    modes: [
      'Manual RC (FlySky)',
      'Autonomous GPS',
      'Return-to-home',
      'Web mission control',
    ],
    sensors: [
      { name: 'pH sensor', text: 'Water acidity / alkalinity; detects chemical contamination.' },
      { name: 'TDS sensor', text: 'Total dissolved solids — purity, salinity, pollution severity.' },
      { name: 'Turbidity', text: 'Water clarity and suspended-particle density.' },
      { name: 'Temperature', text: 'Aquatic ecosystem monitoring and chemical-process analysis.' },
    ],
    features: [
      'GPS waypoint navigation + IMU fusion',
      'Ultrasonic obstacle avoidance (3-axis)',
      'ESP-NOW real-time telemetry',
      'Web-based ground control station',
      'PID heading-correction system',
      'Automated water-treatment pump',
      'MPU6050 + HMC5883L navigation',
      'Dual-motor differential steering',
    ],
    pricing: {
      selling: '50K BDT (≈ USD 460)',
      cost: '35K BDT (≈ USD 320)',
    },
  },

  /* ---------------- SKY-CLEANSE ---------------- */
  skyCleanse: {
    subtitle: 'Semi-automated environmental drone',
    description:
      'Sky-Cleanse is an aerial drone that monitors air quality, purifies polluted air through a MOXI filter system, and supports precision crop fertilisation. Five specialised atmospheric sensors gather real-time data on particulate matter, toxic gases, CO₂, temperature and humidity — so it acts as both monitor and purifier.',
    capabilities: [
      'Air quality monitoring',
      'MOXI air purification',
      'Crop fertilisation',
      'Manual override',
    ],
    sensors: [
      { name: 'PMS7003', text: 'PM1.0, PM2.5 and PM10 particulate matter.' },
      { name: 'MQ-7', text: 'Carbon monoxide (CO) concentration.' },
      { name: 'MQ-135', text: 'Harmful-gas detection and overall air-quality index.' },
      { name: 'DHT-22', text: 'Ambient temperature and relative humidity.' },
      { name: 'MH-Z19E', text: 'Carbon dioxide (CO₂) concentration; greenhouse-gas tracking.' },
    ],
    purification: [
      '3D-printed filter housing (modular)',
      'MOXI filter — unscrews for field replacement',
      '5V DC pump for fertilisation',
      'Targeted spray-nozzle system',
      'Real-time pollutant analysis',
      'Manual fertilisation control',
    ],
  },

  /* ---------------- UN SDGs ---------------- */
  sdgs: [
    {
      code: 'SDG 3',
      name: 'Good Health & Well-being',
      text: 'Monitoring CO, CO₂ and PM2.5. Air purification reduces respiratory harm in communities.',
      platform: 'Sky-Cleanse',
    },
    {
      code: 'SDG 6',
      name: 'Clean Water & Sanitation',
      text: 'Real-time pH, TDS and turbidity monitoring, with targeted water treatment and pollution-data collection.',
      platform: 'Riverix',
    },
    {
      code: 'SDG 11',
      name: 'Sustainable Cities & Communities',
      text: 'Pollution mapping in urban waterways and air corridors; supports smart-city environmental monitoring.',
      platform: 'Riverix + Sky-Cleanse',
    },
    {
      code: 'SDG 13',
      name: 'Climate Action',
      text: 'CO₂ greenhouse-gas tracking. Real-time environmental data raises awareness and supports intervention.',
      platform: 'Riverix + Sky-Cleanse',
    },
    {
      code: 'SDG 15',
      name: 'Life on Land',
      text: 'Precision crop fertilisation reduces agricultural waste and supports more sustainable farming.',
      platform: 'Sky-Cleanse',
    },
  ],

  /* ---------------- CORE TECHNOLOGY ---------------- */
  technology: [
    {
      name: 'ESP32 microcontroller',
      text: 'Handles GPS processing, PID navigation, sensor fusion, obstacle avoidance, telemetry and pump control at once via real-time multitasking.',
    },
    {
      name: 'GPS + IMU navigation',
      text: 'Coordinate-based waypoint tracking with an MPU6050 (accelerometer + gyroscope) and an HMC5883L compass. A PID controller minimises angular error continuously.',
    },
    {
      name: 'Multi-sensor arrays',
      text: 'Nine sensors across both platforms — pH, TDS, turbidity, temperature for water; PMS7003, MQ-7, MQ-135, DHT-22, MH-Z19E for air.',
    },
    {
      name: 'ESP-NOW telemetry',
      text: 'Low-latency peer-to-peer wireless streams GPS coordinates, sensor readings, motor status and obstacle data to the ground station in real time.',
    },
    {
      name: 'Modular 3D-printed parts',
      text: 'Custom brackets, MOXI filter housings and sensor mounts are 3D-printed for lightweight construction, precise fit and easy field replacement.',
    },
    {
      name: 'Web ground control station',
      text: 'A live dashboard over Wi-Fi shows map positioning, sensor charts, waypoint management, pump control and autonomous mission triggers.',
    },
  ],

  /* ---------------- STATS ---------------- */
  stats: [
    { value: '5', label: 'Atmospheric sensors' },
    { value: '4', label: 'Water quality sensors' },
    { value: '5', label: 'UN SDGs addressed' },
    { value: '2', label: 'Autonomous platforms' },
  ],

  /* ---------------- TEAM ---------------- */
  team: {
    intro:
      'EcoGuard was conceived, designed and built by two students set on engineering real solutions to real environmental problems.',
    members: [
      { name: 'Shreyan Chakraborty', role: 'Engineer & Co-founder' },
      { name: 'Farhan Saif', role: 'Engineer & Co-founder' },
    ],
    acknowledgements:
      'With gratitude to Md. Moin Uddin, Mahadir Islam and Ahnaf Safwan Islam for their guidance, feedback and academic support.',
  },

  /* ---------------- LINKS ---------------- */
  links: {
    // Source code repository shown on the original project site.
    github: 'https://github.com/tamimhossain11/skycleanse',
  },
} as const;
