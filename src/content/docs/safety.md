---
title: Safety
order: 9
summary: Layered authority from the operator down to low-level control.
---

## Layers

1. **Operator** — a person retains ultimate authority and can stop the robot.
2. **System safety** — command validation and watchdogs check that instructions
   are sane and that components are alive.
3. **High-level supervision** — the Raspberry Pi supervises the mission and can
   command a safe stop.
4. **Low-level control** — the Arduino Mega executes motion and halts safely if
   it stops receiving valid commands.

## Key ideas

- **Command validation** — reject instructions that do not make sense.
- **Watchdogs** — detect when part of the system stops responding.
- **Safe stopping** — bring the robot to rest in a controlled way.
- **Authority control** — be explicit about which layer may command what.
- **Emergency handling** — a defined response when something goes wrong.

## Honesty

Claims here are kept proportional to what is implemented. The layered structure
is the design; individual mechanisms are at different stages.

## Status

Low-level control is working. Watchdog behaviour, safe-stop handling and
emergency handling are **in development**. Update this page and the status
labels as each is built and tested.
