---
title: Manipulation
order: 8
summary: The arm, gripper and bin used for trash collection.
---

## Components

- **Robotic arm** — reaches toward objects in the environment.
- **Gripper** — the end effector that grasps and releases objects.
- **Trash bin** — an on-board container for collected items.
- **Trash collection** — the combined workflow that uses all three.

## Pipeline

1. **Target** — identify the object to pick up.
2. **Approach** — move the robot and arm toward it.
3. **Position** — line the gripper up with the object.
4. **Grasp** — close the gripper on the object.
5. **Verify** — check whether the object is actually held.
6. **Transport** — carry it toward the bin.
7. **Release** — drop it into the on-board trash bin.

## Why the verify step

Grasping is not perfectly reliable. An attempt can miss or drop an object, so
the pipeline checks the result rather than assuming success.

## Honesty

ARGUS-6 does not claim perfect object manipulation or guaranteed pickup on every
attempt.

## Status

The robotic arm, gripper, trash bin and trash collection workflow are
implemented and working.
