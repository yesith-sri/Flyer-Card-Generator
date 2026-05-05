#!/bin/bash

# Flyer Generator - Quick Start Script
# This script helps you quickly start the development server

echo ""
echo "╔════════════════════════════════════════╗"
echo "║   Flyer Generator - Development Server ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    echo "This may take a couple of minutes..."
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Installation failed. Please check:"
        echo "   1. Node.js is installed (https://nodejs.org/)"
        echo "   2. npm is working: run 'npm --version'"
        echo "   3. Internet connection is active"
        exit 1
    fi
    echo "✅ Dependencies installed successfully!"
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo ""
    echo "⚠️  WARNING: .env.local file not found!"
    echo ""
    echo "Please follow these steps:"
    echo "1. Copy .env.local.example to .env.local"
    echo "   Command: cp .env.local.example .env.local"
    echo "2. Add your Firebase credentials to .env.local"
    echo "3. Save the file"
    echo "4. Run this script again"
    echo ""
    exit 1
fi

# Start the development server
echo ""
echo "Starting development server..."
echo "✅ Server will open on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
