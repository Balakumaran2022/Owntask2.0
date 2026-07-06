import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        analytics: path.resolve(__dirname, 'analytics.html'),
        features: path.resolve(__dirname, 'features.html'),
        pricing: path.resolve(__dirname, 'pricing.html'),
        'use-cases': path.resolve(__dirname, 'use-cases.html'),
      }
    }
  },
  preview: {
    port: 5173,
    strictPort: true,
  }
})
