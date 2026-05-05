# Project Summary

## Overview

Flyer Generator is a Next.js application for creating event flyers from Firebase registration data. Users select a team, choose a member, upload and crop a profile photo, preview the flyer, and download the final result as a PNG image.

## Application Features

- Firebase Firestore team and member lookup
- Image upload and circular crop controls
- Live flyer preview
- PNG export with `html2canvas`
- Tailwind CSS user interface
- TypeScript codebase

## Project Structure

The project is organized into source code and documentation.

### Source (`/src`)

- `app` - Next.js app entry points and global styles
- `components` - Flyer template, selectors, and cropper
- `lib` - Firebase configuration and Firestore query helpers

### Documentation (`/docs`)

The documentation is organized into the following sections:

### Guides (`/guides`)

Quick reference materials for getting started:

- START_HERE.md - Entry point for new users
- QUICKSTART.md - Quick local setup guide
- SETUP.md - Detailed environment setup instructions
- INSTALL.md - Installation and verification

### Reference (`/reference`)

Comprehensive project information:

- INDEX.md - Documentation index
- PROJECT_SUMMARY.md - This file
- COMPLETION_SUMMARY.md - Project completion status

### Development (`/development`)

Developer-focused documentation:

- TESTING.md - Verification procedures and testing recommendations

### Config (`/config`)

Configuration and network settings:

- README.md - Firebase configuration guide
- PORT_ACCESS.md - Local port configuration and access

## Getting Started

New users should start with [START_HERE.md](../guides/START_HERE.md).
