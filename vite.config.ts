import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure for GitHub Pages subdirectory
  base: '/modern-portfolio-react/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
