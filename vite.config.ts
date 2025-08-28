import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build'
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Configure base path: root for dev, subdirectory for production GitHub Pages
    base: isProduction ? '/modern-portfolio-react/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})