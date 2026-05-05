# Configuration Guide

Configuration notes for Flyer Generator.

## Contents

- [Port Access Configuration](./PORT_ACCESS.md) - Local development port settings

## Overview

The app needs Firebase client configuration through `.env.local` and uses the default Next.js development port unless you override it.

## Firebase Environment Variables

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Quick Links

- [Setup Guide](../guides/SETUP.md) - Initial setup instructions
- [Installation Guide](../guides/INSTALL.md) - Installation steps
- [Project Summary](../reference/PROJECT_SUMMARY.md) - Project overview
