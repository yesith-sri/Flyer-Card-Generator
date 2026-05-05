# Installation Guide

Detailed installation and verification steps for Flyer Generator.

## Installation Steps

### 1. Environment Setup

Follow the [Setup Guide](./SETUP.md) first.

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npm run build
```

### 4. Verify Installation

```bash
npm run lint
```

The project does not currently define an automated test script. Use linting and a production build as the current verification checks.

## Configuration

- Check [Config README](../config/README.md) for Firebase configuration details
- Review [Port Access](../config/PORT_ACCESS.md) for local port configuration

## Troubleshooting

If you encounter issues:

1. Check the [Setup Guide](./SETUP.md)
2. Review [Testing Documentation](../development/TESTING.md)
3. See [Port Access Configuration](../config/PORT_ACCESS.md) for port-related issues
