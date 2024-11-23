import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Usar import.meta.url en lugar de __dirname
      "@": path.resolve(new URL('./src', import.meta.url).pathname)
    }
  }
})
