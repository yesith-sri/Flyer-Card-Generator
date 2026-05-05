# Port Access Configuration

Configure local port access for Flyer Generator.

## Overview

The app runs with Next.js. By default, the development server uses port `3000`.

## Default Ports

- **Next.js application**: 3000

## Configuration Methods

### Default Development Server

```bash
npm run dev
```

### Custom Port

Use the Next.js `-p` flag if port `3000` is unavailable:

```bash
npx next dev -p 3001
```

## Firewall and Network

### Allow Port Access

If testing from another device on the same network, ensure your firewall allows the configured port.

**Windows (PowerShell - Admin)**:

```powershell
netsh advfirewall firewall add rule name="Allow Port 3000" dir=in action=allow protocol=tcp localport=3000
```

**Linux/Mac**:

```bash
sudo ufw allow 3000
```

## Checking Open Ports

```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

## Troubleshooting

### Port Already in Use

If a port is already in use:

1. Find the process using the port.
2. Stop that process, or run the app on a different port.

### Connection Refused

1. Verify the application is running
2. Check firewall rules
3. Confirm you are opening the same port used by the dev server

## Security Considerations

- Do not expose unnecessary ports publicly
- Keep Firebase security rules configured correctly
- Avoid sharing development servers on public networks
