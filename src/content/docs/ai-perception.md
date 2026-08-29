---
title: AI & Perception
order: 7
summary: A lightweight YOLO object detector planned for Raspberry Pi 4 hardware.
---

## Approach

ARGUS-6's planned perception system is built around a **lightweight YOLO** object
detector, chosen so that it can run on **Raspberry Pi 4** hardware.

## Pipeline

1. **Camera** — a camera on the robot provides a live view.
2. **Frame capture** — individual frames are pulled from the stream.
3. **YOLO object detection** — a lightweight YOLO model scans each frame.
4. **Bounding boxes** — detected objects are returned as boxes.
5. **Class + confidence** — each box has a label and a confidence score.
6. **Tracking / interpretation** — detections are followed over time and
   interpreted.
7. **Mission decision** — the result informs what the robot does next.

## Model

The planned detector is **YOLOv8n**, or another lightweight YOLO model depending
on benchmarking. Target classes are configurable and may include **humans**,
**trash**, **cans** and other environmental objects.

## Running on a Pi 4

The Raspberry Pi 4 is CPU-only — there is no GPU or accelerator — so inference
speed is limited. The intended deployment uses:

- **YOLOv8n** — the smallest standard YOLOv8 model.
- **NCNN** — an inference build suited to ARM CPUs.
- **Reduced input resolution** — smaller frames cost less to process.

CPU-only inference is expected to run at **low frame rates** and must be
benchmarked on the actual Pi. No frame-rate figure is published here because
none has been measured on ARGUS-6.

## Honesty

Object detection produces guesses with confidence scores, not certainties.
ARGUS-6 treats perception as an input to decisions, not as infallible truth.

## Status

**Planned / in development.** The model is not trained or deployed on the robot
yet.
