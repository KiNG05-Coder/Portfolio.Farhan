---
title: Locomotion
order: 5
summary: Six-legged walking — inverse kinematics, gait generation and servo control.
---

## Leg layout

ARGUS-6 walks on **six legs**, each with **three degrees of freedom**, for
eighteen servos in total.

## The pipeline

1. **Inverse kinematics** — turn a desired foot position into three joint angles
   for that leg.
2. **Gait generation** — coordinate all six legs into a walking or turning
   pattern.
3. **Motion control** — sequence the leg movements over time.
4. **Servo control** — drive each servo to its commanded angle.

## What is supported

- **Standing** — holding a stable stance.
- **Walking** — moving forward and backward.
- **Turning** — rotating in place and while moving.
- **Variable movement** — not limited to a single fixed step size or speed.

## Where it runs

The whole pipeline runs on the Arduino Mega so that timing does not depend on
the Linux scheduler on the Pi.

## Status

Locomotion is implemented and working: inverse kinematics, gait, motion control
and servo control have all been built and tested.
