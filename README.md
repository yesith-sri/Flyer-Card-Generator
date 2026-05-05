# Flyer Generator

A Next.js application for creating professional event flyers from team registration data. Select a team, choose a registered member, upload and crop a profile photo, preview the flyer, and download it as a high-quality PNG.

## Overview

Flyer Generator is built for fast event or team-based flyer creation. It reads team and member information from Firebase Firestore, lets users customize a flyer with their own photo, and exports the final design directly from the browser.

## Features

- Team and member selection from Firebase registrations
- Profile photo upload with circular crop controls
- Live flyer preview before export
- High-resolution PNG download using `html2canvas`
- Responsive Next.js interface styled with Tailwind CSS
- Firebase Firestore integration for registration data
- Organized project documentation for setup, configuration, testing, and reference

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Firebase Firestore and Storage
- react-easy-crop
- html2canvas

## Project Structure

```text
src/
  app/                  Next.js app routes and global styles
  components/           Flyer UI, selectors, and image cropper
  lib/                  Firebase setup and Firestore queries

docs/
  guides/               Start, quick start, setup, and install guides
  config/               Configuration and port access notes
  development/          Testing documentation
  reference/            Project index and completion summary
```

## Getting Started

### Prerequisites

- Node.js 14 or newer
- npm or yarn
- Git
- Firebase project with Firestore enabled

### Installation

```bash
git clone <your-repo-url>
cd Sample_Flyer
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

The app expects registration documents in a Firestore collection named `registrations` with fields such as:

```text
name
email
teamName
registeredAt
```

## Running Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run Next.js linting
```

## Configuration

Default port guidance from the project docs:

- Next.js application: `3000`

For more details, see [Port Access Configuration](docs/config/PORT_ACCESS.md).

## Documentation

- [Start Here](docs/guides/START_HERE.md)
- [Quick Start](docs/guides/QUICKSTART.md)
- [Setup Guide](docs/guides/SETUP.md)
- [Installation Guide](docs/guides/INSTALL.md)
- [Testing Guide](docs/development/TESTING.md)
- [Documentation Index](docs/reference/INDEX.md)
- [Project Summary](docs/reference/PROJECT_SUMMARY.md)
- [Completion Summary](docs/reference/COMPLETION_SUMMARY.md)

## Project Status

The documentation structure, guides, reference materials, development notes, and configuration docs have been created. Testing documentation and detailed configuration guides are currently in progress.

## License

Add your license information here before publishing the repository.
