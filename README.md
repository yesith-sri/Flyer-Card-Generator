# Flyer Generator

A modern Next.js application for generating professional event flyers with team member information, photos, and customizable templates.

## Features

- **Team Selection**: Select your team from a dropdown menu
- **Member Selection**: View and choose team members from your Firebase database
- **Image Upload & Crop**: Upload professional photos with circular cropping tool
- **Live Preview**: See real-time preview of your flyer
- **Download Flyer**: Export your flyer as a high-quality PNG image
- **Dark Blue Theme**: Modern and professional dark blue UI design
- **Responsive Design**: Works seamlessly on desktop and tablet devices

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Image Processing**: react-easy-crop, html2canvas
- **UI Components**: React with functional components

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main application page
│   └── globals.css          # Global styles
├── components/
│   ├── FlyerTemplate.tsx    # Flyer template component
│   ├── ImageCropper.tsx     # Image crop interface
│   ├── TeamSelector.tsx     # Team selection dropdown
│   └── MemberSelector.tsx   # Member selection dropdown
├── lib/
│   ├── firebase.ts          # Firebase configuration
│   └── firebaseQueries.ts   # Firebase database queries
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project with Firestore database setup
- NPM or yarn package manager

### Installation

1. **Clone or extract the project**

```bash
cd Sample_Flyer
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

   - Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   - Open `.env.local` and add your Firebase credentials:
     - Get these from your Firebase project settings (https://console.firebase.google.com/)
     - Add your `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`

### Firebase Setup

1. **Create a Firestore collection** named `registrations`

2. **Collection structure** - Each document should have:
   ```
   {
     "name": "John Doe",
     "email": "john@example.com",
     "teamName": "Marketing",
     "registeredAt": "2024-01-01"
   }
   ```

3. **Sample query** to add test data:
   ```javascript
   // In Firebase Console, add document to 'registrations' collection
   db.collection("registrations").add({
     name: "John Doe",
     email: "john.doe@example.com",
     teamName: "Marketing",
     registeredAt: new Date().toISOString()
   });
   ```

### Running the Application

```bash
npm run dev
```

The application will start on **http://localhost:3000**

Open your browser and navigate to the URL to see the flyer generator in action.

## Usage Guide

### Step 1: Select Team & Member

1. Open the application
2. Click the **"Select Your Team"** dropdown and choose a team
3. Once a team is selected, the **"Select Your Name"** dropdown will populate with team members
4. Choose your name from the list

### Step 2: Upload & Crop Photo

1. Click the **"Click to upload your photo"** area
2. Select a professional photo (JPG or PNG, up to 10MB)
3. Use the **zoom slider** to adjust the image size
4. Drag to position your face in the circular frame
5. Click **"Apply Crop"** to confirm

### Step 3: Preview & Download

1. View the live preview on the right side showing:
   - Team name at the top
   - Your photo in the center (circular frame)
   - Your name at the bottom
2. Click **"Download Flyer"** to save the image as PNG

## Flyer Template

The template follows this layout:

```
┌─────────────────────────┐
│                         │
│     TEAM NAME (Top)     │
│                         │
│   ┌─────────────────┐   │
│   │   Your Photo    │   │
│   │   (Circular)    │   │
│   └─────────────────┘   │
│                         │
│   Member Name (Bottom)  │
│                         │
└─────────────────────────┘
```

## Firebase Firestore Queries

### Get All Teams

```typescript
import { getAllTeams } from "@/lib/firebaseQueries";

const teams = await getAllTeams();
// Returns: Array of unique team names
```

### Get Team Members

```typescript
import { getTeamMembers } from "@/lib/firebaseQueries";

const members = await getTeamMembers("Marketing");
// Returns: Array of members in the Marketing team
```

## Customization

### Change Flyer Colors

Edit `src/components/FlyerTemplate.tsx`:
- Modify the gradient colors in the className
- Change the accent colors (blue/indigo)
- Adjust border and text colors

### Adjust Template Layout

Edit `src/components/FlyerTemplate.tsx`:
- Change font sizes (currently: team name `text-3xl`, member name `text-2xl`)
- Modify spacing and padding
- Adjust photo size (currently: `w-40 h-40`)

### Modify Tailwind Colors

Edit `tailwind.config.ts`:
- Add or modify color palette
- Extend theme colors

## Production Build

```bash
npm run build
npm run start
```

This creates an optimized production build and starts the server on port 3000.

## Troubleshooting

### Firebase Connection Issues

- Ensure `.env.local` has correct Firebase credentials
- Check Firebase project is active and Firestore is enabled
- Verify Firestore security rules allow public read access (for development)

### Image Upload Issues

- Check file size is under 10MB
- Ensure browser supports FileReader API
- Try using Chrome/Firefox for best compatibility

### Download Not Working

- Ensure you have allowed popups in your browser
- Check browser console for errors
- Try using PNG format instead of JPG

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Performance Tips

- Images are compressed during export
- Lazy loading of team members
- Optimized canvas rendering for flyer
- CSS-in-JS for minimal bundle size

## Future Enhancements

- Multiple template designs
- Custom text color options
- Background image selection
- Batch download multiple flyers
- Print-friendly option
- Cloud storage for generated flyers

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify Firebase configuration
3. Check browser console for error messages
4. Ensure all dependencies are installed correctly

## License

This project is part of an event registration system. All rights reserved.

---

**Happy Flyer Creating!** 🎉
