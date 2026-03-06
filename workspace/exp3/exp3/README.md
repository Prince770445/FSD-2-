# Experiment-3: SPA Routing Implementation

A Single Page Application (SPA) built with **React**, **Vite**, and **React Router DOM** to demonstrate modern client-side routing patterns. This project uses Material UI for styling and provides a seamless navigation experience without full page reloads.

## Features

 **Client-Side Routing** - Navigate between pages without server requests
 **Material UI Components** - Modern, responsive UI with MUI
 **Vite** - Lightning-fast development server with Hot Module Replacement (HMR)
 **React Router v7** - Latest routing library for dynamic page navigation
 **Responsive Design** - Mobile-friendly layout components

## Project Structure

```
src/
├── App.jsx              # Main application component
├── main.jsx             # Entry point
├── index.css            # Global styles
├── App.css              # App-specific styles
└── components/
    ├── Layout.jsx       # Navigation wrapper/layout
    ├── Spa.jsx          # Router configuration
    ├── Home.jsx         # Home page
    ├── About.jsx        # About page
    ├── Contact.jsx      # Contact page
    └── NotFound.jsx     # 404 page
```

## Tech Stack

- **React** v19.2 - UI library
- **React Router DOM** v7.12 - Client-side routing
- **Vite** v7.2 - Build tool & dev server
- **Material UI** v7.3 - Component library
- **ESLint** - Code linting

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:5173)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Routing Setup

The routing is implemented in the `Spa.jsx` component using React Router DOM's BrowserRouter, Routes, and Route components. Navigation is handled through Link components in the Layout, allowing users to move between:

- **Home** - Landing page
- **About** - About page
- **Contact** - Contact page
- **NotFound** - 404 fallback page for undefined routes

## Key Concepts Demonstrated

- Route configuration with nested routes
- Link-based navigation
- Layout/wrapper components for shared UI
- 404 error handling
- Browser history management

## ESLint Configuration

This project includes ESLint setup for code quality assurance. The configuration is in `eslint.config.js`.
