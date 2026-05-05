# Installation & Setup Summary

## ✅ Project Created Successfully!

Your **Flyer Generator** Next.js application is ready to use. Here's what's been set up:

---

## 📁 Project Structure

```
Sample_Flyer/
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← App layout wrapper
│   │   ├── page.tsx             ← Main application (all-in-one)
│   │   └── globals.css          ← Global Tailwind styles
│   ├── components/
│   │   ├── FlyerTemplate.tsx    ← Flyer visual design (constant template)
│   │   ├── ImageCropper.tsx     ← Image crop/zoom tool
│   │   ├── TeamSelector.tsx     ← Team dropdown selector
│   │   └── MemberSelector.tsx   ← Member dropdown selector
│   └── lib/
│       ├── firebase.ts          ← Firebase initialization
│       └── firebaseQueries.ts   ← Firestore queries
├── scripts/
│   └── seedDatabase.js          ← Sample data helper (optional)
├── package.json                 ← Dependencies
├── tsconfig.json               ← TypeScript config
├── tailwind.config.ts          ← Tailwind CSS config
├── next.config.ts              ← Next.js config
├── .env.local.example          ← Firebase credentials template
├── .prettierrc                 ← Code formatting
├── .eslintrc.json             ← Linting rules
├── README.md                   ← Full documentation
├── QUICKSTART.md               ← Quick setup guide
└── SETUP.md                    ← This file
```

---

## 🚀 Installation Steps

### Step 1: Install Dependencies
```bash
cd D:\Sample_Flyer
npm install
```

This installs:
- Next.js 14+
- React 18+
- Firebase
- Tailwind CSS
- react-easy-crop (image cropping)
- html2canvas (flyer export)
- TypeScript

**Time:** ~2-3 minutes

### Step 2: Get Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Go to **Project Settings** (gear icon)
4. Click **"Web"** under "Your apps"
5. Copy all the configuration values

### Step 3: Configure Environment Variables

1. In the project root, rename `.env.local.example` to `.env.local`:
   ```bash
   copy .env.local.example .env.local
   ```

2. Open `.env.local` and paste your Firebase credentials:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

### Step 4: Setup Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **"Create Database"**
3. Select **"Start in test mode"** (for development)
4. Click **"Create"**

### Step 5: Create Collection & Add Data

**Option A: Manual Entry (Recommended for testing)**

1. In Firestore, click **"+ Start collection"**
2. Name: `registrations`
3. Click **"Auto ID"** to create first document
4. Add these fields:
   - `name`: "John Doe"
   - `email`: "john@example.com"
   - `teamName`: "Marketing"
   - `registeredAt`: "2024-01-01"

Repeat for more members:
- Jane Smith, Marketing
- Bob Johnson, Engineering
- Alice Williams, Engineering
- Charlie Brown, Design
- Diana Prince, Design

**Option B: Use Seed Script (Requires Firebase Admin SDK)**

```bash
# Download service account key from Firebase Console
# Place it as: Sample_Flyer/firebase-adminsdk.json

npm run seed  # If configured in package.json
```

---

## 💻 Running the Application

### Development Mode
```bash
npm run dev
```

Open browser: **http://localhost:3000**

Features:
- Hot-reload on code changes
- Full debugging capabilities
- Real-time preview

### Production Build
```bash
npm run build
npm run start
```

---

## 🎨 Key Features Implemented

### 1. **Team Selection**
- Dropdown fetches all unique teams from Firebase
- File: `src/components/TeamSelector.tsx`
- Auto-populates from registered members

### 2. **Member Selection**
- Dynamic dropdown based on selected team
- Shows all members in that team
- File: `src/components/MemberSelector.tsx`

### 3. **Image Upload & Crop**
- Professional cropping tool
- Circular crop for profile pictures
- Zoom controls
- File: `src/components/ImageCropper.tsx`
- Uses: react-easy-crop library

### 4. **Flyer Template**
- Dark blue theme with gradients
- **Layout:**
  - Team name: Top (3xl font, bold)
  - Profile photo: Center (circular frame, 160px)
  - Member name: Bottom (2xl font, bold)
- Decorative elements: Corner accents, gradient background
- File: `src/components/FlyerTemplate.tsx`

### 5. **Live Preview**
- Real-time preview as you edit
- Shows exactly how flyer will look
- Updates instantly with each change

### 6. **Download Function**
- Exports as PNG image
- High quality (2x resolution)
- Filename: `{teamName}_{memberName}_flyer.png`
- Uses: html2canvas library

---

## 🔧 Technology Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 14+ |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Database | Firebase Firestore |
| Image Processing | react-easy-crop, html2canvas |
| UI State | React Hooks (useState, useEffect) |
| Code Quality | ESLint, Prettier |

---

## 📝 Code Overview

### Main Application Page (`src/app/page.tsx`)
- Client-side component with all logic
- Three main sections:
  1. **Team & Member Selection** (left panel)
  2. **Image Upload & Crop** (left panel)
  3. **Live Preview** (right panel - sticky)

### Firebase Integration (`src/lib/`)
- **firebase.ts**: Initializes Firebase app with environment variables
- **firebaseQueries.ts**: Two main functions:
  - `getAllTeams()`: Returns unique team names
  - `getTeamMembers(teamName)`: Returns members of a team

---

## 🎯 How It Works

```
User Flow:
1. Page loads → Load all teams from Firebase ↓
2. User selects team ↓
3. Fetch team members → Populate member dropdown ↓
4. User selects their name ↓
5. User uploads photo ↓
6. Photo displayed in cropper → User adjusts → Applies ↓
7. Preview updates in real-time ↓
8. User clicks "Download Flyer" ↓
9. Exports as PNG and downloads
```

---

## 🔐 Firebase Security Rules

**For Development (Current):**
```
All reads allowed, all writes disabled
```

**For Production (Recommended):**
```
Only authenticated users can read/write
Or specific rules for your team/event
```

---

## 📦 Bundle Size

Essential libraries only:
- Next.js: Core framework
- React: UI library
- Firebase: Database
- Tailwind: CSS (on-demand)
- html2canvas: Export (~50KB)
- react-easy-crop: Cropping (~30KB)

**Total:** ~150-200KB gzipped

---

## 🛠️ Customization Guide

### Change Flyer Colors
Edit `src/components/FlyerTemplate.tsx`:
```tsx
className="... from-dark-blue-600 via-dark-blue-700 to-dark-blue-800 ..."
```

### Change Template Layout
Edit the same file - adjust:
- Font sizes (text-3xl, text-2xl)
- Spacing (gap-6, mb-4)
- Photo size (w-40 h-40)
- Border colors

### Add New Fields
In Firestore:
1. Add field to document
2. Update `TeamMember` interface in `firebaseQueries.ts`
3. Display on flyer if desired

---

## 🐛 Troubleshooting

### "Cannot find module 'firebase'"
```bash
npm install firebase
```

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Firebase not connecting
- Check `.env.local` has all values
- Restart dev server after adding `.env.local`
- Verify Firebase project is active

### No members showing
- Verify `registrations` collection exists
- Check documents have all fields (name, email, teamName, registeredAt)
- Check browser console for errors

---

## 📚 Documentation Files

1. **README.md** - Full feature documentation
2. **QUICKSTART.md** - 5-minute setup guide
3. **SETUP.md** - This detailed setup guide

---

## ✨ Best Practices Implemented

✅ TypeScript for type safety  
✅ Component separation of concerns  
✅ Tailwind CSS for consistent styling  
✅ Environment variables for secrets  
✅ Error handling in async operations  
✅ Loading states for UX  
✅ Responsive design  
✅ Accessibility considerations  
✅ Code formatting with Prettier  
✅ Linting with ESLint  

---

## 🚀 Ready to Launch!

Your application is now ready to use. Follow these quick steps:

1. **Install:** `npm install`
2. **Configure:** Create `.env.local` with Firebase credentials
3. **Setup DB:** Create Firestore `registrations` collection
4. **Run:** `npm run dev`
5. **Visit:** http://localhost:3000
6. **Test:** Select team → member → upload photo → download flyer

---

## 📞 Need Help?

- Check **QUICKSTART.md** for rapid setup
- Read **README.md** for detailed info
- Review **Console errors** in browser DevTools
- Verify **Firebase credentials** are correct
- Ensure **Firestore database** has data

---

**Happy Flyer Creating! 🎉**

For production deployment, consider:
- Adding user authentication
- Tightening security rules
- Setting up custom domain
- Enabling HTTPS
- Adding error logging/monitoring
