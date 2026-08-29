---
title: Firmware
order: 3
summary: The real-time control firmware on the Arduino Mega.
---

## Role

The Arduino Mega runs the real-time firmware. It owns everything that has to
happen on a predictable schedule: reading commands, running the motion pipeline
and driving the servos.

## What it contains

- **Serial command handling** — receiving and validating messages from the Pi.
- **Inverse kinematics** — converting target foot positions into joint angles.
- **Gait generation** — producing standing, walking and turning patterns.
- **Motion control** — sequencing leg movements over time.
- **Servo control** — driving each of the twelve leg joints.
- **Low-level safety** — watchdog behaviour and safe stopping.

## Why firmware, not Linux

Real-time gait, inverse kinematics and servo timing should not depend on
general-purpose Linux scheduling. Running them as firmware keeps the timing
steady regardless of what the Raspberry Pi is doing.

## Status

The firmware for communication, low-level control, inverse kinematics, gait and
manual motion is implemented and working. Low-level safety behaviour is in
development.
