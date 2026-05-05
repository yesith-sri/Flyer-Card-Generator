# Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies (2 min)
```bash
npm install
```

### 2. Configure Firebase (2 min)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to **Project Settings**
4. Copy your credentials (API Key, Project ID, etc.)
5. Create `.env.local` file:
   ```bash
   cp .env.local.example .env.local
   ```
6. Paste your Firebase credentials into `.env.local`

### 3. Setup Firestore Database (1 min)
1. In Firebase Console, go to **Firestore Database**
2. Create collection named `registrations`
3. Add test data with these fields:
   - `name` (string)
   - `email` (string)
   - `teamName` (string)
   - `registeredAt` (string/timestamp)

### 4. Run Application
```bash
npm run dev
```

Visit **http://localhost:3000** in your browser

---

## Detailed Firebase Setup

### Step 1: Create Firebase Project
1. Visit [console.firebase.google.com](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name
4. Disable Google Analytics (optional)
5. Create project

### Step 2: Get Firebase Credentials
1. Click the gear icon → **Project Settings**
2. Scroll down to "Your apps" section
3. Click **"Web"** (</>) icon
4. Copy all the values shown
5. Paste into `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=xxxxx
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxx.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxx
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxx.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxx
   NEXT_PUBLIC_FIREBASE_APP_ID=xxxxx
   ```

### Step 3: Create Firestore Database
1. In Firebase Console, go to **Firestore Database**
2. Click **"Create Database"**
3. Choose **Start in test mode** (for development)
4. Select nearest region
5. Click **"Create"**

### Step 4: Add Sample Data
In Firestore Console:
1. Click **"+ Start collection"**
2. Name it: `registrations`
3. Click **"Auto ID"** or enter custom ID
4. Add these fields:
   ```
   name: "John Doe"
   email: "john@example.com"
   teamName: "Marketing"
   registeredAt: "2024-01-01"
   ```
5. Repeat for more members

---

## Directory Structure
```
Sample_Flyer/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # App layout
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── FlyerTemplate.tsx    # Template design
│   │   ├── ImageCropper.tsx     # Crop tool
│   │   ├── TeamSelector.tsx     # Team dropdown
│   │   └── MemberSelector.tsx   # Member dropdown
│   └── lib/
│       ├── firebase.ts      # Firebase config
│       └── firebaseQueries.ts   # Database queries
├── package.json             # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind config
├── next.config.ts          # Next.js config
└── README.md               # Full documentation
```

---

## Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Firestore Security Rules (Development)

**⚠️ For development only - make secure before production!**

In Firestore Console → Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

---

## Common Issues

### "Firebase is not configured"
- Check `.env.local` exists with all values
- Restart dev server after adding `.env.local`
- Verify Firebase project is active

### "No members showing"
- Check Firestore database has `registrations` collection
- Verify documents have `teamName` field
- Check browser console for errors

### "Image upload not working"
- Check file size < 10MB
- Try different browser (Chrome recommended)
- Clear browser cache

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

---

## Next Steps

1. ✅ Run the app
2. ✅ Test with sample data
3. ✅ Customize flyer template (edit `src/components/FlyerTemplate.tsx`)
4. ✅ Deploy to Vercel/Netlify
5. ✅ Setup production Firebase security rules

---

**Need help?** Check the full README.md for detailed documentation.
