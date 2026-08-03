import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8001,
    proxy: {
      '/api': 'http://42.192.110.219',
      '/health': 'http://42.192.110.219'
    }
  }
})