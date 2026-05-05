# Testing Checklist

Before deploying to production, verify all features work correctly.

## ✅ Pre-Setup Verification

- [ ] Node.js 18+ installed
- [ ] npm working correctly
- [ ] Firebase account created
- [ ] Firestore database created

---

## ✅ Installation

- [ ] `npm install` completed successfully
- [ ] No installation errors
- [ ] node_modules folder created

---

## ✅ Configuration

- [ ] `.env.local` file created
- [ ] Firebase API key added
- [ ] Firebase Auth Domain added
- [ ] Firebase Project ID added
- [ ] Firebase Storage Bucket added
- [ ] Firebase Messaging Sender ID added
- [ ] Firebase App ID added

---

## ✅ Firebase Setup

- [ ] Firestore Database created
- [ ] `registrations` collection created
- [ ] At least 3 test documents added
- [ ] Documents have all required fields:
  - [ ] name
  - [ ] email
  - [ ] teamName
  - [ ] registeredAt
- [ ] Documents exist for multiple teams

---

## ✅ Application Start

- [ ] `npm run dev` runs without errors
- [ ] Server starts on http://localhost:3000
- [ ] Browser opens without errors
- [ ] No 404 errors
- [ ] CSS loads correctly (dark blue theme visible)

---

## ✅ Feature: Team Selection

- [ ] Page loads completely
- [ ] Team dropdown visible and clickable
- [ ] "Select Your Team" label visible
- [ ] Dropdown shows "Choose a team..." initially
- [ ] All teams from Firebase appear in dropdown
- [ ] Teams are listed correctly with proper names
- [ ] Selecting a team works

---

## ✅ Feature: Member Selection

- [ ] "Select Your Name" dropdown appears after team selection
- [ ] Dropdown shows "Choose a member..." initially
- [ ] Only members of selected team appear
- [ ] Members are listed with correct names
- [ ] Member list updates when team changes
- [ ] Can select a member from dropdown

---

## ✅ Feature: Image Upload

- [ ] Upload button appears after member selection
- [ ] Drag-and-drop area visible
- [ ] Can click to upload files
- [ ] Accepts image files (JPG, PNG)
- [ ] Displays image preview
- [ ] Shows loading state during processing
- [ ] Error messages appear for invalid files

---

## ✅ Feature: Image Cropper

- [ ] Cropper opens automatically after image selection
- [ ] Image displays in cropper
- [ ] Zoom slider appears and works
- [ ] Can drag image to position
- [ ] Circular crop guide visible
- [ ] "Apply Crop" button works
- [ ] Cropped image appears after applying

---

## ✅ Feature: Image Re-crop

- [ ] "Re-crop Image" button appears after crop
- [ ] Can click to return to cropper
- [ ] Can adjust crop again
- [ ] Cropped preview updates correctly

---

## ✅ Feature: Flyer Preview

- [ ] Preview panel appears on right side (desktop)
- [ ] Team name displays at top
- [ ] Team name is bold and large
- [ ] Profile image displays in center
- [ ] Image is circular
- [ ] Member name displays at bottom
- [ ] Member name is bold and large
- [ ] Preview updates in real-time as you make changes
- [ ] Dark blue gradient background visible
- [ ] Decorative elements visible (corner accents)

---

## ✅ Feature: Download Flyer

- [ ] "Download Flyer" button appears when all fields filled
- [ ] Button is green and prominent
- [ ] Button has download icon
- [ ] Clicking button triggers download
- [ ] File downloads as PNG
- [ ] Filename is in format: `{teamName}_{memberName}_flyer.png`
- [ ] Downloaded image has correct dimensions
- [ ] Downloaded image is high quality

---

## ✅ User Flow - Complete Test

1. [ ] Load application
2. [ ] Select team from dropdown
3. [ ] Select member from dropdown
4. [ ] Upload a photo file
5. [ ] Adjust zoom on cropper
6. [ ] Position photo in circular frame
7. [ ] Apply crop
8. [ ] Verify preview looks good
9. [ ] Download flyer
10. [ ] Open downloaded file - looks correct

---

## ✅ Responsive Design

- [ ] Desktop (1200px+): 2-column layout works
- [ ] Tablet (768px-1199px): Layout adapts
- [ ] Mobile (below 768px): Single column layout
- [ ] All text readable on small screens
- [ ] Buttons clickable on touch devices
- [ ] Images scale properly
- [ ] Dropdowns work on mobile

---

## ✅ Browser Compatibility

- [ ] Chrome/Chromium: Works
- [ ] Firefox: Works
- [ ] Safari: Works
- [ ] Edge: Works
- [ ] File upload works in all browsers
- [ ] Download works in all browsers

---

## ✅ Error Handling

- [ ] Firebase connection errors show message
- [ ] Invalid image file shows error
- [ ] Missing fields prevent download
- [ ] Network errors handled gracefully
- [ ] Loading states show during async operations

---

## ✅ Performance

- [ ] Page loads in < 3 seconds
- [ ] Team selection loads quickly
- [ ] Member dropdown populates instantly
- [ ] Image cropper is responsive
- [ ] Preview updates without lag
- [ ] Download doesn't freeze UI
- [ ] No console errors

---

## ✅ Code Quality

- [ ] No TypeScript errors on build
- [ ] `npm run build` completes successfully
- [ ] No ESLint warnings
- [ ] No browser console errors
- [ ] No network errors in DevTools

---

## ✅ Data Validation

- [ ] Team names display correctly
- [ ] Member names display correctly
- [ ] Email addresses loaded (not required to show)
- [ ] Timestamps recorded properly
- [ ] No duplicate teams in dropdown
- [ ] No duplicate members in dropdown

---

## ✅ UI/UX

- [ ] Dark blue theme applied throughout
- [ ] Consistent spacing and alignment
- [ ] Buttons have hover effects
- [ ] Text colors are readable (white on dark)
- [ ] Gradients render smoothly
- [ ] Icons display correctly
- [ ] Loading indicators clear
- [ ] Error messages are helpful

---

## ✅ Security

- [ ] No API keys in frontend code (use .env.local)
- [ ] Firebase rules prevent unauthorized writes
- [ ] No personal data logged to console
- [ ] HTTPS ready (for deployment)

---

## ✅ Firebase Configuration

- [ ] Firestore queries work correctly
- [ ] Team fetching returns all unique teams
- [ ] Member fetching filters by team correctly
- [ ] No Firestore errors in console
- [ ] Queries are efficient (indexed if needed)

---

## 🎯 All Tests Passed?

When ALL items are checked ✅, your application is ready!

### Next Steps:
1. **Deployment**: Push to GitHub
2. **Production**: Deploy to Vercel or Netlify
3. **Security**: Update Firebase rules
4. **Monitoring**: Setup error tracking
5. **Feedback**: Gather user feedback

---

## 📋 Notes

Document any issues found:

```
Issue: ________________
Date: __________________
Solution: ________________
```

---

**Great Job! Your Flyer Generator is ready to use! 🎉**
