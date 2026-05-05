# Setup Guide

Complete setup instructions for Flyer Generator.

## Prerequisites

- Node.js 14 or newer
- npm
- Git
- Firebase project with Firestore enabled

## Steps

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Sample_Flyer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Prepare Firestore Data

The app reads from a Firestore collection named `registrations`.

Expected document fields:

```text
name
email
teamName
registeredAt
```

### 5. Start the App

```bash
npm run dev
```

Open `http://localhost:3000`.

## Next Steps

- Review [Installation Guide](./INSTALL.md)
- Check [Testing Documentation](../development/TESTING.md)
- See [Port Access Configuration](../config/PORT_ACCESS.md) if the local port is unavailable
