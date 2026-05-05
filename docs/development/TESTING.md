# Testing Guide

Verification guidance for Flyer Generator.

## Overview

The project currently includes linting and production build checks, but it does not define an automated unit test script in `package.json`.

## Current Checks

### Lint

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

### Run the App Locally

```bash
npm run dev
```

Open `http://localhost:3000` and verify:

1. Teams load from Firestore.
2. Members update after selecting a team.
3. Image upload and crop controls work.
4. The flyer preview updates with the selected team, member, and cropped photo.
5. The flyer downloads as a PNG.

## Future Automated Testing

Recommended additions:

- Unit tests for Firestore query helpers
- Component tests for team and member selectors
- Component tests for the image crop flow
- End-to-end test for selecting a member, cropping an image, and downloading a flyer

## Best Practices

1. Write tests for new features
2. Run lint and build before committing
3. Keep Firebase-dependent tests isolated with mocks or test data
4. Use descriptive test names

## Troubleshooting

- Clear `node_modules` and reinstall if dependency-related checks fail
- Check [Setup Guide](../guides/SETUP.md) for environment setup
- Review [Port Access](../config/PORT_ACCESS.md) for port-related local issues

## CI/CD Integration

At minimum, CI should run:

```bash
npm install
npm run lint
npm run build
```
