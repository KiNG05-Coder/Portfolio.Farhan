---
title: Navigation
order: 6
summary: Planned localization, waypoint navigation and obstacle-aware movement.
---

## Pipeline

1. **Localization** — estimate where the robot is, using GPS-assisted position
   and IMU-based information.
2. **Navigation** — decide how to get from the current position to the goal
   while staying aware of obstacles.
3. **Path / mission** — follow a planned path or a sequence of waypoints.
4. **Movement intent** — express the next move as a direction and speed.
5. **Low-level controller** — the Arduino Mega turns movement intent into gait
   and leg motion.

## Planned features

- GPS-assisted navigation
- IMU-based information
- Waypoint navigation
- Exploration
- Obstacle-aware movement
- Mission planning

## Limits

ARGUS-6 does not claim centimetre-level positioning. GPS and IMU data give an
approximate picture of position and motion, which is enough for waypoint-scale
navigation but not for precise placement.

## Status

Navigation is **planned**. The interface to the low-level controller exists
through the serial bridge; the localization and path-planning components have
not been implemented or tested yet.
