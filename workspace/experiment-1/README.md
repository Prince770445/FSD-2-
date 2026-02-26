# Experiment No. 1: Basic SPA Using Modern Frontend Framework

A single-page application (SPA) built with React and Vite, demonstrating modern frontend development practices with component-based architecture and fast development experience.

##  Project Overview

This is a minimal but fully functional SPA showcasing:
- **React** - A modern JavaScript library for building user interfaces with components
- **Vite** - A lightning-fast build tool and development server with Hot Module Replacement (HMR)
- **Component-Based Architecture** - Modular, reusable components for different pages
- **Client-Side Routing** - Navigation between different views without full page reloads

##  Project Structure

```
src/
├── components/
│   ├── Home.jsx        # Home page component
│   ├── About.jsx       # About page component
│   ├── Contact.jsx     # Contact page component
│   └── Spa.jsx         # Main SPA router/layout component
├── App.jsx             # Root application component
├── main.jsx            # Application entry point
├── App.css             # Application styles
└── index.css           # Global styles
public/
└── _redirects          # Deployment routing configuration
```

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` with HMR enabled for instant updates.

##  Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

##  Components

- **Home.jsx** - Landing page of the SPA
- **About.jsx** - Information/about page
- **Contact.jsx** - Contact form or contact information page
- **Spa.jsx** - Main router component that handles navigation between pages

##  Styling

- `App.css` - Component-specific and application styles
- `index.css` - Global styles and CSS resets

##  Build & Deployment

The project is configured with Vite for optimized production builds. The `_redirects` file in the public folder ensures proper routing for single-page applications when deployed to platforms like Netlify.

### Production Build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

##  Development Features

- **Hot Module Replacement (HMR)** - Changes reflect instantly without full page reload
- **Fast Refresh** - React components update while preserving component state
- **ESLint Configuration** - Code quality and consistency checks included

##  Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)
