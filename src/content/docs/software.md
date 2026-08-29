---
title: Software
order: 2
summary: The high-level software stack running on the Raspberry Pi.
---

## Stack

The high-level software runs on the Raspberry Pi 4 under Linux and is organised
with **ROS 2**. ROS 2 provides the structure for splitting the system into
separate nodes that communicate over well-defined interfaces, which keeps
perception, navigation and mission logic independent of each other.

## Responsibilities

- **Mission logic** — creating, running and monitoring missions.
- **Perception** — planned YOLO-based object detection (see *AI & Perception*).
- **Navigation** — planned localization and path following (see *Navigation*).
- **Serial bridge** — translating high-level movement intent into messages for
  the Arduino Mega (see *Communication*).

## Languages

Python is used for most of the high-level software. C++ is used on the firmware
side and is available on the high-level side where it helps.

## Status

The software structure and the serial bridge are in place. Perception and
navigation nodes are in development or planned.
