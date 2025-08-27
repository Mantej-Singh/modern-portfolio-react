import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configure for GitHub Pages subdirectory
  base: '/modern-portfolio-react/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})