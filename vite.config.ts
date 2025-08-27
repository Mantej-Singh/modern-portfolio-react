import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Configure for GitHub Pages subdirectory
  base: '/modern-portfolio-react/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
