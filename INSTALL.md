# 🚀 Installation Instructions

## Before You Start

Make sure you have:
- ✅ Node.js 18+ installed
- ✅ npm installed (comes with Node.js)
- ✅ Firebase account created
- ✅ Your Firebase project ready

---

## Step-by-Step Installation

### **STEP 1: Install Dependencies** (2-3 minutes)

Open terminal/command prompt and run:

```bash
cd D:\Sample_Flyer
npm install
```

**What this does:**
- Downloads Next.js, React, Firebase, and other packages
- Creates `node_modules` folder
- Sets up the project

**Expected output:**
```
added 500+ packages in 45s
```

---

### **STEP 2: Setup Firebase Credentials** (2-3 minutes)

#### Option A: Create .env.local Manually

1. **Create a new file** in the project root folder
2. **Name it:** `.env.local` (exact name - includes the dot!)
3. **Copy this content:**
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   ```

#### Option B: Use .env.local.example

1. **Copy** `.env.local.example` → `.env.local`

   Windows:
   ```bash
   copy .env.local.example .env.local
   ```

   Mac/Linux:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Open .env.local** and fill in the values

---

### **STEP 3: Get Firebase Credentials**

1. **Go to:** https://console.firebase.google.com/
2. **Select your project**
3. **Click gear icon** (⚙️) → **Project Settings**
4. **Scroll down** to "Your apps" section
5. **Click Web app icon** (</>) if not already there
6. **Copy the configuration** that looks like:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "project.firebaseapp.com",
     projectId: "project-id",
     storageBucket: "project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123...",
   };
   ```

7. **Paste values** into `.env.local`:
   - `apiKey` → `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `authDomain` → `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `projectId` → `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `storageBucket` → `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `messagingSenderId` → `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `appId` → `NEXT_PUBLIC_FIREBASE_APP_ID`

**Example .env.local:**
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=my-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef1234567890
```

---

### **STEP 4: Create Firestore Database**

1. **Go to Firebase Console:** https://console.firebase.google.com/
2. **Select your project**
3. **Click "Firestore Database"** (left sidebar)
4. **Click "Create Database"**
5. **Choose "Start in test mode"** (for development)
6. **Select nearest region**
7. **Click "Create"**

**Wait for creation** (takes 30-60 seconds)

---

### **STEP 5: Create Collection & Add Sample Data**

#### Create Collection

1. **In Firestore Console**, click **"+ Start collection"**
2. **Collection ID:** `registrations`
3. **Click "Next"**

#### Add First Document

1. **Click "Auto ID"** (to auto-generate ID)
2. **Add these fields:**
   - Field: `name` | Type: `String` | Value: `John Doe`
   - Field: `email` | Type: `String` | Value: `john@example.com`
   - Field: `teamName` | Type: `String` | Value: `Marketing`
   - Field: `registeredAt` | Type: `String` | Value: `2024-01-01`
3. **Click "Save"**

#### Add More Sample Data

Repeat for each team member:

**Team: Marketing**
- Jane Smith, jane@example.com
- Mike Johnson, mike@example.com

**Team: Engineering**
- Alice Williams, alice@example.com
- Bob Brown, bob@example.com

**Team: Design**
- Carol Davis, carol@example.com
- David Lee, david@example.com

---

### **STEP 6: Start the Application** (1 minute)

#### Option A: Using Startup Script

**Windows:**
```bash
start-dev.bat
```

**Mac/Linux:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

#### Option B: Manual Start

```bash
npm run dev
```

**You should see:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  
Ready in 1234ms
```

---

### **STEP 7: Open in Browser**

Open your browser and go to:
```
http://localhost:3000
```

**You should see:**
- ✅ Dark blue themed application
- ✅ "Flyer Generator" title
- ✅ "Select Your Team" dropdown (populated with teams)
- ✅ No error messages

---

## ✅ Verify Everything Works

### Test the Application

1. **Select a team** from dropdown
2. **Member list appears** below
3. **Select a member** from the list
4. **Upload a photo** (any image file)
5. **Crop the image** in the circular frame
6. **Preview updates** on the right side
7. **Click "Download Flyer"** and verify it downloads

### If Something Goes Wrong

#### Error: "Cannot find module 'firebase'"
```bash
npm install firebase
```

#### Error: ".env.local is missing"
```bash
# Create it from the example
copy .env.local.example .env.local

# Then add your Firebase credentials
```

#### Error: "Port 3000 already in use"
```bash
# Use a different port
npm run dev -- -p 3001
```

#### Error: "Teams not loading"
1. Check Firebase Firestore has `registrations` collection
2. Check documents have all required fields
3. Check `.env.local` has correct credentials
4. Restart dev server (`Ctrl+C`, then `npm run dev`)

#### Error: "Firebase is not initialized"
1. Verify `.env.local` exists with all values
2. Verify all `NEXT_PUBLIC_FIREBASE_*` variables are filled
3. Restart dev server

---

## 📚 Next Steps

1. **Read Documentation:**
   - `QUICKSTART.md` - Quick reference
   - `README.md` - Full documentation
   - `PORT_ACCESS.md` - Port & access info

2. **Customize:**
   - Edit `src/components/FlyerTemplate.tsx` to change design
   - Edit `tailwind.config.ts` to change colors
   - Edit database fields if needed

3. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel or Netlify
   - Update Firebase security rules

---

## 🆘 Need Help?

### Check These Files:
- **QUICKSTART.md** - Common issues & quick fixes
- **SETUP.md** - Detailed setup guide
- **TESTING.md** - Feature testing checklist
- **PORT_ACCESS.md** - Port and access information

### Common Checks:
1. **Is Node.js installed?** → Run `node --version`
2. **Is npm installed?** → Run `npm --version`
3. **Are dependencies installed?** → Check `node_modules` folder exists
4. **Is .env.local created?** → Check file exists in project root
5. **Is Firebase active?** → Check https://console.firebase.google.com/
6. **Is Firestore ready?** → Check it appears in Firebase Console

---

## 🎯 Troubleshooting Checklist

### Before starting:
- [ ] Node.js 18+ installed
- [ ] npm working
- [ ] Firebase project created
- [ ] Firestore database created

### During installation:
- [ ] `npm install` completed without errors
- [ ] `.env.local` file created
- [ ] Firebase credentials added to `.env.local`
- [ ] `registrations` collection created
- [ ] Sample data added to collection

### After starting:
- [ ] Server starts on http://localhost:3000
- [ ] No console errors
- [ ] Teams load in dropdown
- [ ] Can select team and member
- [ ] Can upload image
- [ ] Can download flyer

---

## 🚀 You're All Set!

When everything is working:
1. ✅ Application running on http://localhost:3000
2. ✅ Dark blue theme visible
3. ✅ Teams/members loading from Firebase
4. ✅ Image upload and cropping working
5. ✅ Flyer preview showing
6. ✅ Download button functional

**Congratulations! Your Flyer Generator is ready to use! 🎉**

---

## 📞 Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Use custom port
npm run dev -- -p 3001

# Stop server
Ctrl + C
```

---

**Made with ❤️ for seamless setup!**
