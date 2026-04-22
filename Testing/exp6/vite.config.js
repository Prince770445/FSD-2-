import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // 1. This section controls the Dev and Preview servers for Docker
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 5173,      // Default Vite dev port
  },
  preview: {
    host: '0.0.0.0', // This is what your Dockerfile "preview" command uses
    port: 4173,      // Default Vite preview port
  },

  // 2. This is your existing Test configuration
  test: {
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        inline: ['@exodus/bytes', 'html-encoding-sniffer']
      }
    }
  }
})