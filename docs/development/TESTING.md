# Testing Guide

Comprehensive testing documentation for the project.

## Overview
This guide covers testing procedures, frameworks, and best practices for the project.

## Running Tests

### Unit Tests
```bash
npm test
```

### Run specific test file
```bash
npm test -- <test-file-name>
```

### Watch mode
```bash
npm test -- --watch
```

## Testing Framework
The project uses standard testing tools. Refer to the specific framework documentation for advanced usage.

## Best Practices
1. Write tests for new features
2. Ensure all tests pass before committing
3. Maintain test coverage
4. Use descriptive test names

## Troubleshooting
- Clear node_modules and reinstall if tests fail
- Check [Setup Guide](../guides/SETUP.md) for environment setup
- Review [Port Access](../config/PORT_ACCESS.md) for port-related test issues

## CI/CD Integration
Tests should run automatically in your CI/CD pipeline. See project configuration for details.
