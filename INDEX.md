# 📑 Documentation Index & Quick Reference

## 🎯 Start Here

**New to this project?** Start with these files in order:

1. **📖 [QUICKSTART.md](./QUICKSTART.md)** (5 minutes)
   - Quick setup in 5 steps
   - Firebase setup
   - Running the app
   - Quick fixes for common issues

2. **📖 [INSTALL.md](./INSTALL.md)** (10-15 minutes)
   - Step-by-step installation
   - Detailed Firebase setup
   - Firestore configuration
   - Troubleshooting guide

3. **🚀 Run the app:** `npm run dev` → Visit http://localhost:3000

---

## 📚 Complete Documentation

### Essential Files

| File | Purpose | Read Time |
|------|---------|-----------|
| **QUICKSTART.md** | 5-minute rapid setup | 5 min |
| **INSTALL.md** | Detailed installation steps | 10 min |
| **README.md** | Complete feature documentation | 20 min |
| **SETUP.md** | Comprehensive setup guide | 15 min |
| **PORT_ACCESS.md** | Port configuration & access | 5 min |
| **TESTING.md** | Feature testing checklist | 10 min |
| **PROJECT_SUMMARY.md** | Project overview & stats | 10 min |

### Configuration Files

| File | Purpose |
|------|---------|
| **.env.local** | Firebase credentials (create from .env.local.example) |
| **.env.local.example** | Template for Firebase config |
| **package.json** | Dependencies and scripts |
| **tsconfig.json** | TypeScript configuration |
| **tailwind.config.ts** | Tailwind CSS theme config |
| **next.config.ts** | Next.js configuration |
| **.eslintrc.json** | Code linting rules |
| **.prettierrc** | Code formatting rules |

### Source Code Files

| File | Purpose |
|------|---------|
| **src/app/page.tsx** | Main application page (all logic) |
| **src/app/layout.tsx** | App layout wrapper |
| **src/app/globals.css** | Global styles |
| **src/components/FlyerTemplate.tsx** | ⭐ Flyer design (constant template) |
| **src/components/ImageCropper.tsx** | Image crop tool |
| **src/components/TeamSelector.tsx** | Team dropdown |
| **src/components/MemberSelector.tsx** | Member dropdown |
| **src/lib/firebase.ts** | Firebase initialization |
| **src/lib/firebaseQueries.ts** | Firebase database queries |

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Use alternative port
npm run dev -- -p 3001

# Stop server
Ctrl + C
```

### Startup Scripts

**Windows:**
```bash
start-dev.bat
```

**Mac/Linux:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

---

## 🎨 Application Features

### Feature: Team Selection
- **File:** `src/components/TeamSelector.tsx`
- **Database:** Fetches from `registrations` collection
- **Functionality:** Dropdown with all unique teams

### Feature: Member Selection
- **File:** `src/components/MemberSelector.tsx`
- **Database:** Filters by selected team
- **Functionality:** Dynamic dropdown, updates on team change

### Feature: Image Upload & Crop
- **Files:** `src/components/ImageCropper.tsx`
- **Libraries:** react-easy-crop
- **Functionality:** Upload, zoom, crop, preview

### Feature: Flyer Template
- **File:** `src/components/FlyerTemplate.tsx`
- **Design:** Dark blue gradient with circular photo
- **Layout:** Team name (top) → Photo (center) → Name (bottom)

### Feature: Live Preview
- **File:** `src/app/page.tsx` (right panel)
- **Functionality:** Real-time updates as you edit
- **Responsive:** Sticky on desktop, adjusts on mobile

### Feature: Download Flyer
- **File:** `src/app/page.tsx`
- **Library:** html2canvas
- **Format:** PNG, high quality (2x resolution)

---

## 🔧 Customization Guide

### Change Flyer Colors
**File:** `src/components/FlyerTemplate.tsx`
```tsx
// Modify gradient colors
className="... from-dark-blue-600 via-dark-blue-700 to-dark-blue-800 ..."

// Change accent colors
className="... border-blue-400 ..."
```

### Change Template Layout
**File:** `src/components/FlyerTemplate.tsx`
- Font sizes: `text-3xl`, `text-2xl`
- Spacing: `gap-6`, `mb-4`, `mt-2`
- Photo size: `w-40 h-40`
- Border colors: `border-blue-400`

### Add New Database Fields
1. Add field to Firestore document
2. Update `TeamMember` interface in `src/lib/firebaseQueries.ts`
3. Display on flyer in `src/components/FlyerTemplate.tsx`

### Change Tailwind Colors
**File:** `tailwind.config.ts`
```tsx
extend: {
  colors: {
    "dark-blue": { /* modify palette */ }
  }
}
```

---

## 🗄️ Database Structure

### Firestore Collection: `registrations`

**Required fields:**
```json
{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "teamName": "Marketing",
  "registeredAt": "2024-01-15"
}
```

**Sample teams:**
- Marketing
- Engineering
- Design
- Sales
- HR

### Database Queries

**Get all teams:**
```typescript
import { getAllTeams } from "@/lib/firebaseQueries";
const teams = await getAllTeams();
```

**Get team members:**
```typescript
import { getTeamMembers } from "@/lib/firebaseQueries";
const members = await getTeamMembers("Marketing");
```

---

## 🔐 Security & Configuration

### Development Setup
```
Read access: Enabled (all users)
Write access: Disabled
```

### Production Setup (Important!)
Update Firebase Firestore rules:
```
Read: Only authenticated users
Write: Only team leads/admins
```

---

## 📊 Project Statistics

- **Components:** 5 (TeamSelector, MemberSelector, ImageCropper, FlyerTemplate, MainPage)
- **Pages:** 1 (/)
- **TypeScript Files:** 9
- **Configuration Files:** 5
- **Documentation Files:** 7
- **Libraries:** 7 (Next.js, React, Firebase, Tailwind, etc.)
- **Total Lines of Code:** 2000+
- **Bundle Size:** ~150-200KB gzipped

---

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
- Auto-deploys on push to GitHub
- Custom domain support
- Environment variables in dashboard

### Netlify
1. Push to GitHub
2. Connect repository
3. Set environment variables
4. Deploy automatically

### Self-hosted
```bash
npm run build
npm start
```
- Use with Nginx/Apache reverse proxy
- Configure custom domain
- Use SSL certificates

---

## 🧪 Testing & Verification

### Pre-Launch Checklist
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` configured with Firebase credentials
- [ ] Firestore `registrations` collection exists
- [ ] Sample data added (3+ documents with multiple teams)
- [ ] Server runs (`npm run dev`)
- [ ] App loads on http://localhost:3000
- [ ] Teams dropdown populated
- [ ] Can select team → see members
- [ ] Can select member → upload image
- [ ] Can crop image
- [ ] Preview updates correctly
- [ ] Can download flyer

### Feature Testing
See **TESTING.md** for comprehensive checklist with:
- Team selection tests
- Member selection tests
- Image upload tests
- Image crop tests
- Preview tests
- Download tests
- Responsive design tests
- Browser compatibility tests

---

## 📞 Troubleshooting Reference

### Installation Issues
**Problem:** `npm install` fails
- Solution: Check internet connection, try `npm install` again

**Problem:** Node.js not found
- Solution: Install Node.js 18+ from https://nodejs.org/

### Configuration Issues
**Problem:** `.env.local` not loading
- Solution: Restart dev server after creating `.env.local`

**Problem:** Firebase credentials invalid
- Solution: Re-copy from Firebase Console, verify all fields

### Runtime Issues
**Problem:** Teams not loading
- Solution: Check Firestore `registrations` collection exists

**Problem:** Port 3000 in use
- Solution: Use `npm run dev -- -p 3001`

**Problem:** Image upload fails
- Solution: Check file size < 10MB, try different format

---

## 🎯 Common Tasks

### Run the Application
```bash
npm run dev
```
Visit: http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

### Add New Database Field
1. Edit Firestore document in Firebase Console
2. Update `TeamMember` interface in `src/lib/firebaseQueries.ts`
3. Use in component if needed

### Customize Flyer Template
Edit: `src/components/FlyerTemplate.tsx`
- Change colors, fonts, spacing
- Modify layout
- Add/remove elements

### Change UI Theme
Edit: `tailwind.config.ts` and `src/app/globals.css`

---

## 📖 File Reading Guide

**How to use this index:**

1. **Need quick setup?** → Read QUICKSTART.md
2. **Want detailed setup?** → Read INSTALL.md
3. **Need complete reference?** → Read README.md
4. **Want to customize?** → Read SETUP.md
5. **Need testing guide?** → Read TESTING.md
6. **Questions about ports?** → Read PORT_ACCESS.md
7. **Want project overview?** → Read PROJECT_SUMMARY.md

---

## 🚀 Getting Help

### Documentation Files
All answers are in the documentation:
- Error messages → QUICKSTART.md (Common Issues)
- Setup questions → INSTALL.md (Step-by-Step)
- Feature questions → README.md (Features)
- Customization → SETUP.md (Customization Guide)

### Browser Console (F12)
- Check for red errors
- Check Network tab for Firebase calls
- Check Console tab for error messages

### Firebase Console
- Verify credentials are correct
- Check Firestore `registrations` collection exists
- Check documents have all required fields

---

## 📋 File Tree

```
Sample_Flyer/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Main page
│   │   ├── layout.tsx            ← Layout wrapper
│   │   └── globals.css           ← Styles
│   ├── components/
│   │   ├── FlyerTemplate.tsx     ← Flyer design
│   │   ├── ImageCropper.tsx      ← Crop tool
│   │   ├── TeamSelector.tsx      ← Team dropdown
│   │   └── MemberSelector.tsx    ← Member dropdown
│   └── lib/
│       ├── firebase.ts           ← Firebase init
│       └── firebaseQueries.ts    ← DB queries
├── scripts/
│   └── seedDatabase.js           ← Sample data
├── 📄 package.json               ← Dependencies
├── 📄 tsconfig.json              ← TypeScript config
├── 📄 tailwind.config.ts         ← Tailwind config
├── 📄 next.config.ts             ← Next.js config
├── 📄 .eslintrc.json             ← Linting
├── 📄 .prettierrc                ← Formatting
├── 📄 .env.local.example         ← Config template
├── 📖 README.md                  ← Full docs
├── 📖 QUICKSTART.md              ← Quick setup
├── 📖 INSTALL.md                 ← Installation
├── 📖 SETUP.md                   ← Setup guide
├── 📖 PORT_ACCESS.md             ← Port info
├── 📖 TESTING.md                 ← Testing checklist
└── 📖 PROJECT_SUMMARY.md         ← Overview
```

---

## ✅ Success Checklist

You've successfully set up the project when:
- [x] All files are in place
- [x] Dependencies installed (`npm install`)
- [x] `.env.local` configured
- [x] Firebase Firestore ready
- [x] Sample data added
- [x] Dev server runs (`npm run dev`)
- [x] App visible on http://localhost:3000
- [x] All features working

---

**You're all set! Happy developing! 🎉**

*Last updated: 2024*
*Version: 1.0.0*
