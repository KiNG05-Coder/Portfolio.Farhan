---
title: Architecture
order: 1
summary: How ARGUS-6 splits work between a high-level computer and a real-time controller.
---

## Overview

ARGUS-6 is built around two processors with different jobs.

- **Raspberry Pi 4** — the high-level computer. It runs Linux and ROS 2 and is
  responsible for decisions, perception and autonomy.
- **Arduino Mega** — the real-time controller. It handles motion and low-level
  control, where consistent timing matters more than raw compute.

The two are connected by a custom serial link.

## Why the split

A general-purpose Linux computer is well suited to perception and planning, but
its scheduler is not designed for precise, uninterrupted timing. A
microcontroller is. Keeping gait, inverse kinematics and servo timing on the
Mega means the robot keeps moving smoothly even when the Pi is busy running AI
or planning a route.

## High-level side (Raspberry Pi)

- **ROS 2** for modular software, communication and integration.
- **AI / perception** — planned lightweight YOLO object detection.
- **Navigation** — planned localization, waypoint following and exploration.

## Real-time side (Arduino Mega)

- **Inverse kinematics** — per-leg 3-DOF solver.
- **Gait** — coordinates the six legs.
- **Safety** — command validation, watchdogs and safe stopping at the low level.

## Status

The architecture split, the serial link and the real-time side are implemented
and working. The AI and navigation components on the high-level side are in
development or planned.
