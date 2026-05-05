# Port Access Configuration

Configure network ports and access settings for your application.

## Overview
This document explains how to configure port access and network settings for the project.

## Default Ports
- **Application Server**: 3000
- **API Server**: 5000
- **Database**: 5432 (if applicable)

## Configuration Methods

### Environment Variables
Set ports via `.env` file:
```
PORT=3000
API_PORT=5000
DB_PORT=5432
```

### Configuration File
Update `config/ports.json`:
```json
{
  "app": 3000,
  "api": 5000,
  "database": 5432
}
```

## Firewall and Network

### Allow Port Access
Ensure your firewall allows the configured ports.

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
1. Find the process: `lsof -i :3000`
2. Kill the process: `kill -9 <PID>`
3. Or configure a different port

### Connection Refused
1. Verify the application is running
2. Check firewall rules
3. Ensure port is correctly configured

## Security Considerations
- Don't expose unnecessary ports publicly
- Use authentication for API access
- Monitor open connections regularly
