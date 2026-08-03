import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://frontend-4zm.pages.dev',
      '/health': 'http://frontend-4zm.pages.dev'
    }
  }
})