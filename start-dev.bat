@echo off
REM Flyer Generator - Quick Start Script
REM This script helps you quickly start the development server

echo.
echo ╔════════════════════════════════════════╗
echo ║   Flyer Generator - Development Server ║
echo ╚════════════════════════════════════════╝
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a couple of minutes...
    call npm install
    if errorlevel 1 (
        echo.
        echo ❌ Installation failed. Please check:
        echo    1. Node.js is installed (https://nodejs.org/)
        echo    2. npm is working: run 'npm --version'
        echo    3. Internet connection is active
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully!
)

REM Check if .env.local exists
if not exist ".env.local" (
    echo.
    echo ⚠️  WARNING: .env.local file not found!
    echo.
    echo Please follow these steps:
    echo 1. Copy .env.local.example to .env.local
    echo 2. Add your Firebase credentials
    echo 3. Save the file
    echo 4. Run this script again
    echo.
    pause
    exit /b 1
)

REM Start the development server
echo.
echo Starting development server...
echo ✅ Server will open on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
