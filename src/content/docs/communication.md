---
title: Communication
order: 4
summary: The custom serial protocol between the Raspberry Pi and the Arduino Mega.
---

## Custom serial bridge

The Raspberry Pi and the Arduino Mega communicate over a **custom serial
protocol**. The Mega is not a micro-ROS target, so instead of extending ROS 2
onto the microcontroller, a dedicated serial bridge runs on the Pi and
translates between the two worlds.

## What crosses the link

- **Down to the Mega** — movement intent (direction and speed), arm and gripper
  commands, mode changes and safe-stop requests.
- **Up to the Pi** — status, acknowledgements and any low-level warnings.

## Design goals

- **Simple to parse** on a microcontroller.
- **Validated** — malformed or unexpected messages are rejected rather than
  acted on.
- **Fail-safe** — if the Mega stops receiving valid commands, it stops the robot
  safely rather than continuing the last command indefinitely.

## Status

The serial link and basic command set are implemented and working. The protocol
is expected to grow as navigation and mission features are added.
