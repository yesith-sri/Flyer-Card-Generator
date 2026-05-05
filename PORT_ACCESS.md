# Port & Access Information

## 🌐 Web Application Access

### Default Port
```
http://localhost:3000
```

### Alternative Ports
If port 3000 is already in use, you can specify a different port:

```bash
# Use port 3001
npm run dev -- -p 3001

# Use port 3000 (default)
npm run dev -- -p 3000

# Use port 8000
npm run dev -- -p 8000
```

---

## 🚀 Development Server

### Starting Development
```bash
npm run dev
```

**Output will show:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

Ready in XXXms
```

### Accessing the App

Open your browser and navigate to:
```
http://localhost:3000
```

The application will:
- ✅ Load the Flyer Generator page
- ✅ Connect to Firebase
- ✅ Load teams from database
- ✅ Be ready for you to use

---

## 📍 URL Routes

The application currently has one main page:

| Route | Description |
|-------|-------------|
| `/` | Main Flyer Generator |

---

## 🔧 Development Server Features

When running `npm run dev`:

### Hot Reload
- Changes to code automatically reload
- No need to restart server
- Fast iteration and testing

### Debug Mode
- Full TypeScript error checking
- Detailed error messages
- Source maps for debugging

### File Watching
- Automatically detects file changes
- Watches `src/` directory
- Recompiles on change

---

## 🏗️ Production Build

### Build Application
```bash
npm run build
```

This creates:
- Optimized production build
- Minified JavaScript/CSS
- Static files in `.next/` folder

### Run Production Server
```bash
npm start
```

**Output:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000

Ready in XXXms
```

Production server runs on **http://localhost:3000**

---

## 📊 Accessing DevTools

### Browser Developer Tools
- Press `F12` or `Right-click` → **Inspect**
- View network requests to Firebase
- Check for JavaScript errors
- Monitor performance

### Next.js Development Tools
- Fast Refresh for instant feedback
- Error overlay for debugging
- Source maps for TypeScript

### Network Requests
Monitor Firebase Firestore queries:
1. Open DevTools
2. Go to **Network** tab
3. Make API calls
4. See requests to Firestore

---

## 🔍 Checking if Port is Available

### Windows (PowerShell)
```bash
netstat -ano | findstr ":3000"
```

### Windows (Command Prompt)
```bash
netstat -ano | findstr :3000
```

### Mac/Linux
```bash
lsof -i :3000
```

---

## 🛑 Stopping the Development Server

### Stop Running Server
Press `Ctrl + C` in the terminal where server is running

```
^C
npm ERR! code ESIGINIT
```

Server will stop, and you'll get the prompt back.

---

## 🔄 Restarting the Server

### After making configuration changes
```bash
# Stop the server (Ctrl + C)
# Then restart
npm run dev
```

**When to restart:**
- After changing `.env.local`
- After installing new packages
- After editing Firebase config
- After structural code changes

---

## 🌍 Network Access

### Local Machine Only
```
http://localhost:3000
```
Only accessible from your computer

### Expose to Network (Dev Only)
```bash
npm run dev -- -H 0.0.0.0
```

Then access from other machines using:
```
http://your-computer-ip:3000
```

**Find your IP:**
- Windows: `ipconfig` → IPv4 Address
- Mac/Linux: `ifconfig` → inet address

---

## 📱 Mobile/Tablet Testing

### Same Network
1. Find your computer's IP address
2. On mobile device, open: `http://computer-ip:3000`
3. App will work on responsive viewport

### Chrome DevTools Mobile Emulation
1. Open Chrome DevTools (`F12`)
2. Click device icon (toggle device toolbar)
3. Select device (iPhone, iPad, Android, etc.)
4. Test responsive design

---

## ⚡ Performance Monitoring

### Next.js Analytics
View performance metrics:
1. Open DevTools
2. Go to **Console** tab
3. Check Core Web Vitals data

### Network Performance
1. Open DevTools
2. Go to **Network** tab
3. Check request waterfall
4. Monitor Firebase calls

---

## 🔐 Localhost Security

### Notes
- `localhost` is secure for local development
- Only accessible from your machine
- No external access by default
- Safe for testing with real Firebase credentials

### Before Production
- Use HTTPS (https://localhost:3000)
- Deploy to secure domain
- Update Firebase security rules
- Use environment-specific credentials

---

## 📋 Common Port Issues

### "Port 3000 is already in use"
```bash
# Find what's using the port
netstat -ano | findstr :3000

# Use different port
npm run dev -- -p 3001
```

### "Cannot connect to localhost"
1. Ensure server is running: `npm run dev`
2. Check URL is exactly: `http://localhost:3000`
3. Try refreshing page
4. Check firewall settings

### "Connection to Firebase fails"
1. Check `.env.local` has correct credentials
2. Restart dev server after adding `.env.local`
3. Check internet connection
4. Verify Firebase project is active

---

## 🚀 Deployment Port

### Vercel (Recommended)
- Automatically deploys on custom domain
- No manual port configuration
- Example: `https://your-flyer.vercel.app`

### Netlify
- Automatic deployment on custom domain
- No manual port configuration
- Example: `https://your-flyer.netlify.app`

### Self-hosted
- Typically use port 80 (HTTP) or 443 (HTTPS)
- Configure in production server setup
- Use reverse proxy (Nginx, Apache)

---

## 📞 Quick Reference

```bash
# Start development server (default port 3000)
npm run dev

# Start on custom port
npm run dev -- -p 3001

# Build for production
npm run build

# Run production build
npm start

# Build and run
npm run build && npm start
```

---

## ✅ Verification Checklist

After starting the server, verify:

- [ ] Terminal shows "Ready in XXms"
- [ ] Browser opens to http://localhost:3000
- [ ] Application loads without errors
- [ ] Styles (dark blue theme) visible
- [ ] Team dropdown appears
- [ ] No console errors (check F12)
- [ ] Firebase connection working
- [ ] All features responsive

---

**Ready to start? Run:** `npm run dev`

**Then visit:** http://localhost:3000

Enjoy! 🎉
